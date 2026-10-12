// The designer's inventory of a page: headings, sections, background layers, calls to action, navigation, typography,
// fonts, colors, motion and media. Used by scripts/reference-capture.mjs, and runnable on its own in any browser tool
// that executes JavaScript (paste the whole file; it returns a JSON-serializable object). No dependencies.
(() => {
  const vh = innerHeight;
  const top = (el) => Math.round(el.getBoundingClientRect().top + scrollY);
  const visible = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && Number(s.opacity) > 0.05; };
  const clean = (t, n = 160) => (t || '').replace(/\s+/g, ' ').trim().slice(0, n);
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
})()
