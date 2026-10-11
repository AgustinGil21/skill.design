#!/usr/bin/env node
// Studies reference pages the way a designer does: scrolls each page to the end (so lazy content and scroll
// animations run), captures it slice by slice on desktop and phone, and extracts its structure — sections, headings,
// copy, calls to action, navigation, typography, colors, media and motion techniques. Extra URLs can be passed, and
// same-site links can be followed. Drives an installed Chrome, Chromium or Edge through the DevTools protocol.
// No dependencies; needs Node 22 or later (built-in WebSocket).
// Usage: node reference-capture.mjs <url> [more urls] [--out dir] [--viewports desktop,mobile] [--scheme light|dark]
//        [--follow N] [--max-slices N]

import { mkdirSync, mkdtempSync, rmSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { isMainScript } from './lib/main.mjs';
import { findChrome } from './screenshots.mjs';

export const REFERENCE_VIEWPORTS = {
  desktop: { width: 1440, height: 900, mobile: false },
  mobile: { width: 390, height: 844, mobile: true },
  tablet: { width: 820, height: 1180, mobile: true },
};
const MOBILE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function parseArgs(argv) {
  const opts = { urls: [], out: 'design-references', viewports: ['desktop', 'mobile'], scheme: 'light', follow: 0, maxSlices: 30 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--out') opts.out = argv[++i];
    else if (a === '--viewports') opts.viewports = argv[++i].split(',').map((v) => v.trim()).filter(Boolean);
    else if (a === '--scheme') opts.scheme = argv[++i];
    else if (a === '--follow') opts.follow = Number(argv[++i]) || 0;
    else if (a === '--max-slices') opts.maxSlices = Number(argv[++i]) || 30;
    else opts.urls.push(a);
  }
  for (const v of opts.viewports) if (!REFERENCE_VIEWPORTS[v]) throw new Error(`Unknown viewport "${v}". Use: ${Object.keys(REFERENCE_VIEWPORTS).join(', ')}`);
  if (!['light', 'dark'].includes(opts.scheme)) throw new Error('--scheme must be light or dark');
  for (const u of opts.urls) new URL(u);
  return opts;
}

export function slugFor(url, index) {
  const u = new URL(url);
  const path = u.pathname.replace(/\/+$/, '') || '/';
  const slug = (path === '/' ? 'home' : path).replace(/[^\w-]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase() || 'home';
  return `${String(index + 1).padStart(2, '0')}-${u.hostname.replace(/^www\./, '')}-${slug}`.slice(0, 90);
}

// Minimal DevTools protocol client over the built-in WebSocket.
class Cdp {
  constructor(url) {
    this.id = 0;
    this.pending = new Map();
    this.listeners = [];
    this.ws = new WebSocket(url);
    this.ready = new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = () => reject(new Error('Could not connect to the browser'));
    });
    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      } else if (msg.method) {
        for (const l of this.listeners) l(msg);
      }
    };
  }
  send(method, params = {}, sessionId, timeoutMs = 30_000) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params, sessionId }));
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      setTimeout(() => {
        if (this.pending.delete(id)) reject(new Error(`${method} timed out`));
      }, timeoutMs);
    });
  }
  waitFor(method, sessionId, timeoutMs) {
    return new Promise((resolve) => {
      const done = (value) => {
        this.listeners = this.listeners.filter((l) => l !== listener);
        resolve(value);
      };
      const listener = (msg) => msg.method === method && msg.sessionId === sessionId && done(true);
      this.listeners.push(listener);
      setTimeout(() => done(false), timeoutMs);
    });
  }
  close() {
    try {
      this.ws.close();
    } catch {
      // already closed
    }
  }
}

async function launchBrowser(chrome) {
  const profile = mkdtempSync(join(tmpdir(), 'design-reference-'));
  const child = spawn(chrome, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--mute-audio', '--no-first-run', '--no-default-browser-check',
    '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank',
  ], { stdio: 'ignore', detached: process.platform !== 'win32' });
  const portFile = join(profile, 'DevToolsActivePort');
  for (let i = 0; i < 100 && !existsSync(portFile); i++) await sleep(100);
  if (!existsSync(portFile)) throw new Error('The browser did not start');
  const [port, path] = readFileSync(portFile, 'utf8').trim().split('\n');
  const cdp = new Cdp(`ws://127.0.0.1:${port}${path}`);
  await cdp.ready;
  const stop = () => {
    cdp.close();
    try {
      if (process.platform === 'win32') child.kill();
      else process.kill(-child.pid, 'SIGKILL');
    } catch {
      // already gone
    }
    rmSync(profile, { recursive: true, force: true });
  };
  return { cdp, stop };
}

// Runs in the page: dismisses a cookie banner if there is an obvious "accept" button.
const DISMISS_CONSENT = `(() => {
  const words = /^(accept( all)?( cookies)?|agree|i agree|allow all|got it|ok|aceptar( todo| todas)?|acepto|accepter|alle akzeptieren|aceitar)$/i;
  for (const el of document.querySelectorAll('button, [role=button], a')) {
    const text = (el.innerText || '').trim();
    if (words.test(text) && el.offsetParent !== null) { el.click(); return text; }
  }
  return null;
})()`;

// Runs in the page: scrolls to the end in steps so lazy content loads and scroll-triggered animations run.
const AUTO_SCROLL = `(async () => {
  const step = Math.round(innerHeight * 0.8);
  let last = -1, same = 0;
  for (let i = 0; i < 80; i++) {
    scrollBy(0, step);
    await new Promise((r) => setTimeout(r, 350));
    const y = scrollY;
    if (y === last) { if (++same >= 3) break; } else same = 0;
    last = y;
  }
  const height = Math.max(document.documentElement.scrollHeight, document.body ? document.body.scrollHeight : 0);
  scrollTo(0, 0);
  return height;
})()`;

// Runs in the page: the designer's inventory of the page.
const EXTRACT = `(() => {
  const vh = innerHeight;
  const top = (el) => Math.round(el.getBoundingClientRect().top + scrollY);
  const visible = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && Number(s.opacity) > 0.05; };
  const clean = (t, n = 160) => (t || '').replace(/\\s+/g, ' ').trim().slice(0, n);
  const meta = (name) => document.querySelector('meta[name="' + name + '"], meta[property="' + name + '"]')?.content || null;

  const headings = [...document.querySelectorAll('h1,h2,h3,h4')].filter(visible).slice(0, 80)
    .map((h) => ({ level: Number(h.tagName[1]), text: clean(h.innerText, 140), y: top(h) })).filter((h) => h.text);

  // Sections: walk down from <body>; a block much taller than the screen that wraps several large children is a
  // wrapper, so its children are the sections.
  const blocks = [];
  const big = (el) => { if (!visible(el)) return false; const r = el.getBoundingClientRect(); return r.height >= 200 && r.width >= innerWidth * 0.5; };
  const walk = (el, depth) => {
    for (const child of el.children) {
      if (!big(child)) continue;
      const r = child.getBoundingClientRect();
      const inner = [...child.children].filter(big);
      if (depth < 8 && r.height > vh * 2.2 && inner.length >= 2) walk(child, depth + 1);
      else if (depth < 8 && inner.length === 1 && Math.abs(inner[0].getBoundingClientRect().height - r.height) < 40) walk(child, depth + 1);
      else blocks.push({ el: child, y: top(child), h: Math.round(r.height) });
    }
  };
  walk(document.body, 0);
  blocks.sort((a, b) => a.y - b.y);
  const all0 = blocks.slice(0, 50).map(({ el, y, h }) => {
    const s = getComputedStyle(el);
    const heading = el.querySelector('h1,h2,h3,h4,h5,h6');
    return {
      tag: el.tagName.toLowerCase(), y, height: h,
      heading: heading ? clean(heading.innerText, 120) : null,
      text: clean(el.innerText, 260),
      images: el.querySelectorAll('img, picture').length, videos: el.querySelectorAll('video').length,
      canvases: el.querySelectorAll('canvas').length, buttons: el.querySelectorAll('button, a[class*="btn" i], a[class*="button" i], [role=button]').length,
      background: s.backgroundImage !== 'none' ? 'image or gradient' : s.backgroundColor,
      sticky: s.position === 'sticky' || s.position === 'fixed',
    };
  });
  // Fixed or sticky layers without content are backgrounds (video, gradient, canvas), not sections.
  const isLayer = (b) => b.sticky && !b.text && !b.images && !b.buttons;
  const sections = all0.filter((b) => !isLayer(b)).slice(0, 40);
  const layers = all0.filter(isLayer).map(({ y, height, background, videos, canvases }) => ({ y: Math.max(0, y), height, background, videos, canvases }));

  const actions = [];
  for (const el of document.querySelectorAll('a, button, [role=button]')) {
    if (!visible(el)) continue;
    const text = clean(el.innerText || el.getAttribute('aria-label'), 50);
    if (!text || actions.some((a) => a.text === text)) continue;
    const s = getComputedStyle(el);
    const filled = s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'transparent';
    if (el.tagName === 'BUTTON' || filled || /btn|button|cta/i.test(el.className)) actions.push({ text, y: top(el), filled, background: s.backgroundColor, color: s.color });
    if (actions.length >= 30) break;
  }

  const nav = [...document.querySelectorAll('header a, nav a')].filter(visible).map((a) => ({ text: clean(a.innerText || a.getAttribute('aria-label'), 40), href: a.href })).filter((a) => a.text).slice(0, 40);

  const typeOf = (sel) => { const el = [...document.querySelectorAll(sel)].find(visible); if (!el) return null; const s = getComputedStyle(el);
    return { family: s.fontFamily.split(',')[0].replace(/["']/g, '').trim(), size: s.fontSize, weight: s.fontWeight, lineHeight: s.lineHeight, letterSpacing: s.letterSpacing, transform: s.textTransform }; };
  const typography = { h1: typeOf('h1'), h2: typeOf('h2'), h3: typeOf('h3'), body: typeOf('p'), link: typeOf('a'), button: typeOf('button, a[class*="btn" i]') };

  const families = new Map(), colors = new Map(), backgrounds = new Map();
  const all = [...document.querySelectorAll('body *')].slice(0, 4000);
  for (const el of all) {
    if (!visible(el)) continue;
    const s = getComputedStyle(el), r = el.getBoundingClientRect(), area = Math.min(r.width * r.height, 2e6);
    if (el.childElementCount === 0 && (el.innerText || '').trim()) {
      const f = s.fontFamily.split(',')[0].replace(/["']/g, '').trim();
      families.set(f, (families.get(f) || 0) + 1);
      colors.set(s.color, (colors.get(s.color) || 0) + 1);
    }
    if (s.backgroundColor !== 'rgba(0, 0, 0, 0)') backgrounds.set(s.backgroundColor, (backgrounds.get(s.backgroundColor) || 0) + area);
  }
  const topOf = (m, n) => [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => ({ value: k, weight: Math.round(v) }));

  let animated = 0, transitions = 0, sticky = 0;
  for (const el of all) { const s = getComputedStyle(el); if (s.animationName !== 'none') animated++; if (s.transitionDuration !== '0s') transitions++; if (s.position === 'sticky') sticky++; }
  let reducedMotionRules = 0;
  for (const sheet of document.styleSheets) { try { for (const rule of sheet.cssRules) if (rule.media && /prefers-reduced-motion/.test(rule.media.mediaText)) reducedMotionRules++; } catch { /* cross-origin */ } }
  const videos = [...document.querySelectorAll('video')].map((v) => ({ autoplay: v.autoplay, muted: v.muted, loop: v.loop, controls: v.controls, poster: !!v.poster }));
  const libraries = ['gsap', 'ScrollTrigger', 'Lenis', 'lenis', 'THREE', 'lottie', 'bodymovin', 'Swiper', 'barba', 'Webflow', 'Framer', '__NEXT_DATA__', '__NUXT__']
    .filter((k) => k in window || document.querySelector('[data-' + k.toLowerCase() + ']'));
  if (document.documentElement.classList.contains('lenis')) libraries.push('Lenis (smooth scroll)');

  const links = [...new Set([...document.querySelectorAll('a[href]')].map((a) => a.href).filter((h) => { try { const u = new URL(h); return u.origin === location.origin && !u.hash; } catch { return false; } }))].slice(0, 200);

  return {
    url: location.href, title: document.title, lang: document.documentElement.lang || null,
    description: meta('description'), ogTitle: meta('og:title'), ogImage: meta('og:image'),
    viewport: { width: innerWidth, height: vh }, height: document.documentElement.scrollHeight,
    headings, sections, layers, actions, nav, typography,
    fonts: topOf(families, 8), textColors: topOf(colors, 10), backgrounds: topOf(backgrounds, 10),
    motion: { animatedElements: animated, elementsWithTransitions: transitions, stickyElements: sticky, reducedMotionRules, videos, canvases: document.querySelectorAll('canvas').length, libraries },
    media: { images: document.querySelectorAll('img').length, svgs: document.querySelectorAll('svg').length, iframes: document.querySelectorAll('iframe').length },
    links,
  };
})()`;

async function capturePage(cdp, url, viewportName, opts, dir) {
  const vp = REFERENCE_VIEWPORTS[viewportName];
  const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
  const s = (method, params, timeout) => cdp.send(method, params, sessionId, timeout);
  const evaluate = async (expression, timeout = 60_000) => (await s('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true }, timeout)).result.value;
  try {
    await s('Page.enable');
    await s('Emulation.setDeviceMetricsOverride', { width: vp.width, height: vp.height, deviceScaleFactor: 1, mobile: vp.mobile });
    if (vp.mobile) {
      await s('Emulation.setTouchEmulationEnabled', { enabled: true });
      await s('Emulation.setUserAgentOverride', { userAgent: MOBILE_UA });
    }
    await s('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: opts.scheme }, { name: 'prefers-reduced-motion', value: 'no-preference' }] });
    const loaded = cdp.waitFor('Page.loadEventFired', sessionId, 45_000);
    await s('Page.navigate', { url });
    await loaded;
    await sleep(2500);
    const consent = await evaluate(DISMISS_CONSENT).catch(() => null);
    if (consent) await sleep(1000);
    const height = await evaluate(AUTO_SCROLL, 120_000).catch(() => null);
    await sleep(1500);
    const data = await evaluate(EXTRACT);
    data.consentDismissed = consent;
    const total = Math.max(height || 0, data.height || 0, vp.height);
    const slices = [];
    const count = Math.min(opts.maxSlices, Math.ceil(total / vp.height));
    for (let i = 0; i < count; i++) {
      await evaluate(`scrollTo(0, ${i * vp.height}); new Promise((r) => setTimeout(r, 900))`);
      const { data: img } = await s('Page.captureScreenshot', { format: 'jpeg', quality: 72 }, 30_000);
      const file = join(dir, `${viewportName}-${String(i + 1).padStart(2, '0')}.jpg`);
      writeFileSync(file, Buffer.from(img, 'base64'));
      slices.push({ file, y: i * vp.height });
    }
    data.slices = slices;
    data.truncated = Math.ceil(total / vp.height) > count;
    return data;
  } finally {
    await cdp.send('Target.closeTarget', { targetId }).catch(() => {});
  }
}

export function renderReport(pages) {
  const out = ['# Reference capture', '', 'Screenshots are slices from top to bottom; each heading and section lists the slice where it appears.', 'Read the slices in order, then the structure, then interpret (workflows/reference.md).', ''];
  for (const page of pages) {
    out.push(`## ${page.title || page.url} — ${page.viewportName}`, '', `- URL: ${page.url}`, `- Language: ${page.lang || 'not declared'} · Height: ${page.height}px at ${page.viewport.width}px (${page.viewportName})`);
    if (page.description) out.push(`- Description: ${page.description}`);
    if (page.consentDismissed) out.push(`- Cookie banner dismissed with "${page.consentDismissed}"`);
    out.push(`- Slices: ${page.slices.length}${page.truncated ? ' (truncated: raise --max-slices to see the rest)' : ''} in \`${page.dir}\``, '');
    const slice = (y) => Math.max(1, Math.floor(y / page.viewport.height) + 1);
    out.push('### Headings', '');
    const minLevel = Math.min(...page.headings.map((h) => h.level));
    for (const h of page.headings) out.push(`${'  '.repeat(h.level - minLevel)}- h${h.level} "${h.text}" (slice ${slice(h.y)})`);
    out.push('', '### Sections (top to bottom)', '');
    page.sections.forEach((sec, i) => out.push(`${i + 1}. slice ${slice(sec.y)}, ${sec.height}px — ${sec.heading ? `"${sec.heading}"` : '(no heading)'} · ${sec.images} images, ${sec.videos} videos, ${sec.canvases} canvas, ${sec.buttons} buttons${sec.sticky ? ' · sticky/fixed' : ''} · background ${sec.background}\n   > ${sec.text}`));
    if (page.layers.length) out.push('', `Fixed or sticky background layers: ${page.layers.map((l) => `${l.height}px (${l.background}${l.videos ? ', video' : ''}${l.canvases ? ', canvas' : ''})`).join('; ')}`);
    out.push('', '### Calls to action', '');
    for (const a of page.actions) out.push(`- "${a.text}" (slice ${slice(a.y)}, ${a.filled ? `filled ${a.background}` : 'text or outline'}, text ${a.color})`);
    out.push('', '### Navigation', '', page.nav.map((n) => `"${n.text}"`).join(' · ') || '(none found)', '');
    out.push('### Typography', '');
    for (const [role, t] of Object.entries(page.typography)) if (t) out.push(`- ${role}: ${t.family} ${t.size}/${t.lineHeight}, weight ${t.weight}, tracking ${t.letterSpacing}${t.transform !== 'none' ? `, ${t.transform}` : ''}`);
    out.push(`- Families by text elements: ${page.fonts.map((f) => `${f.value} (${f.weight})`).join(', ')}`, '');
    out.push('### Color', '', `- Text: ${page.textColors.map((c) => c.value).join(', ')}`, `- Backgrounds by area: ${page.backgrounds.map((c) => c.value).join(', ')}`, '');
    const m = page.motion;
    out.push('### Motion and media', '', `- ${m.animatedElements} animated elements, ${m.elementsWithTransitions} with transitions, ${m.stickyElements} sticky, ${m.canvases} canvas, ${page.media.images} images, ${page.media.svgs} SVGs, ${page.media.iframes} iframes`,
      `- Videos: ${m.videos.length ? m.videos.map((v) => [v.autoplay && 'autoplay', v.muted && 'muted', v.loop && 'loop', v.controls ? 'controls' : 'no controls', v.poster && 'poster'].filter(Boolean).join(' ')).join('; ') : 'none'}`,
      `- Libraries detected: ${m.libraries.join(', ') || 'none detected'} · reduced-motion rules readable: ${m.reducedMotionRules}`, '');
  }
  return out.join('\n');
}

export async function captureReferences(opts) {
  const chrome = findChrome();
  if (!chrome) throw new Error('No Chrome, Chromium or Edge found. Install one or set CHROME_PATH.');
  if (typeof WebSocket === 'undefined') throw new Error('Node 22 or later is needed (built-in WebSocket).');
  mkdirSync(opts.out, { recursive: true });
  const { cdp, stop } = await launchBrowser(chrome);
  const pages = [];
  const queue = [...opts.urls];
  const seen = new Set();
  let followed = 0;
  try {
    while (queue.length) {
      const url = queue.shift();
      if (seen.has(url)) continue;
      seen.add(url);
      const dir = join(opts.out, slugFor(url, seen.size - 1));
      mkdirSync(dir, { recursive: true });
      for (const viewportName of opts.viewports) {
        try {
          const page = await capturePage(cdp, url, viewportName, opts, dir);
          page.viewportName = viewportName;
          page.dir = dir;
          pages.push(page);
          writeFileSync(join(dir, `${viewportName}.json`), JSON.stringify(page, null, 2));
          console.log(`✓ ${url} (${viewportName}): ${page.slices.length} slices, ${page.sections.length} sections, ${page.headings.length} headings`);
          if (viewportName === opts.viewports[0] && followed < opts.follow) {
            for (const link of page.links) {
              if (followed >= opts.follow) break;
              if (!seen.has(link) && !queue.includes(link)) {
                queue.push(link);
                followed++;
              }
            }
          }
        } catch (error) {
          console.error(`✗ ${url} (${viewportName}): ${error.message}`);
        }
      }
    }
  } finally {
    stop();
  }
  const report = renderReport(pages);
  writeFileSync(join(opts.out, 'report.md'), report);
  console.log(`\nReport: ${join(opts.out, 'report.md')}`);
  return pages;
}

if (isMainScript(import.meta.url)) {
  let opts;
  try {
    opts = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
  if (opts.urls.length === 0) {
    console.error('Usage: node reference-capture.mjs <url> [more urls] [--out dir] [--viewports desktop,mobile] [--scheme light|dark] [--follow N] [--max-slices N]');
    process.exit(1);
  }
  try {
    const pages = await captureReferences(opts);
    process.exit(pages.length ? 0 : 1);
  } catch (error) {
    console.error(error.message);
    process.exit(2);
  }
}
