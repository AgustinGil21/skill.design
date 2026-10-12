#!/usr/bin/env node
// Takes screenshots of a running interface (or a local demo file) so the design can be judged as people see it:
// phone and desktop, light and dark, with reduced motion. Uses the project's own Playwright (playwright or
// playwright-core) when it is installed; otherwise it drives an installed Chrome, Chromium or Edge in headless mode.
// The skill adds no dependencies.
// Usage: node screenshots.mjs <url> [more urls] [--out dir] [--viewports mobile,desktop] [--schemes light,dark]
//        [--full-page] [--from <project folder>]
// Run it from the project folder (or pass --from) so it can find the project's Playwright.

import { mkdirSync, existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { tmpdir } from 'node:os';
import { createRequire } from 'node:module';
import { join, resolve } from 'node:path';
import { isMainScript } from './lib/main.mjs';

export const VIEWPORTS = {
  mobile: { width: 390, height: 844 },
  tablet: { width: 820, height: 1180 },
  desktop: { width: 1440, height: 900 },
};

export function parseArgs(argv) {
  const opts = { urls: [], out: 'design-screenshots', viewports: ['mobile', 'desktop'], schemes: ['light', 'dark'], fullPage: false, from: process.cwd() };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--out') opts.out = argv[++i];
    else if (arg === '--viewports') opts.viewports = argv[++i].split(',').map((v) => v.trim()).filter(Boolean);
    else if (arg === '--schemes') opts.schemes = argv[++i].split(',').map((v) => v.trim()).filter(Boolean);
    else if (arg === '--full-page') opts.fullPage = true;
    else if (arg === '--from') opts.from = argv[++i];
    else opts.urls.push(arg);
  }
  for (const v of opts.viewports) if (!VIEWPORTS[v]) throw new Error(`Unknown viewport "${v}". Use: ${Object.keys(VIEWPORTS).join(', ')}`);
  for (const s of opts.schemes) if (!['light', 'dark'].includes(s)) throw new Error(`Unknown scheme "${s}". Use: light, dark`);
  return opts;
}

// One shot per url × viewport × scheme, with a readable, stable file name.
export function planShots({ urls, viewports, schemes, out }) {
  const shots = [];
  urls.forEach((url, index) => {
    let slug;
    try {
      const u = new URL(url);
      // Local files (demos) are named after the file; pages after their path.
      const path = u.protocol === 'file:' ? u.pathname.split('/').pop().replace(/\.[^.]+$/, '') : u.pathname;
      slug = (path === '/' ? 'home' : path).replace(/[^\w-]+/g, '-').replace(/^-+|-+$/g, '') || 'home';
    } catch {
      throw new Error(`Not a URL: ${url}`);
    }
    for (const viewport of viewports) {
      for (const scheme of schemes) {
        shots.push({ url, viewport, scheme, file: join(out, `${String(index + 1).padStart(2, '0')}-${slug}-${viewport}-${scheme}.png`) });
      }
    }
  });
  return shots;
}

function loadPlaywright(from) {
  const require = createRequire(join(resolve(from), 'package.json'));
  for (const name of ['playwright', 'playwright-core', '@playwright/test']) {
    try {
      return { lib: require(name), name };
    } catch {
      // try the next one
    }
  }
  return null;
}

// Installed browsers that can take headless screenshots without Playwright.
export function findChrome(env = process.env, platform = process.platform) {
  const candidates = {
    darwin: ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Chromium.app/Contents/MacOS/Chromium', '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'],
    linux: ['/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge'],
    win32: [
      `${env.PROGRAMFILES || 'C:\\Program Files'}\\Google\\Chrome\\Application\\chrome.exe`,
      `${env['PROGRAMFILES(X86)'] || 'C:\\Program Files (x86)'}\\Google\\Chrome\\Application\\chrome.exe`,
      `${env['PROGRAMFILES(X86)'] || 'C:\\Program Files (x86)'}\\Microsoft\\Edge\\Application\\msedge.exe`,
      `${env.LOCALAPPDATA || ''}\\Google\\Chrome\\Application\\chrome.exe`,
    ],
  };
  // An explicit CHROME_PATH is the only browser used, even when it does not exist.
  if (env.CHROME_PATH) return existsSync(env.CHROME_PATH) ? env.CHROME_PATH : null;
  return (candidates[platform] || []).find((path) => path && existsSync(path)) || null;
}

// Chrome's own flags: the color scheme must be explicit, otherwise the page inherits the system's mode.
export function chromeArgs(shot, profileDir) {
  const { width, height } = VIEWPORTS[shot.viewport];
  return [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check',
    `--user-data-dir=${profileDir}`, `--window-size=${width},${height}`,
    `--blink-settings=preferredColorScheme=${shot.scheme === 'dark' ? 0 : 1}`, '--force-prefers-reduced-motion',
    `--screenshot=${resolve(shot.file)}`, shot.url,
  ];
}

// Headless Chrome with a fresh profile writes the image but may not exit on its own: wait for the file to be
// complete, then stop the browser.
function captureWithChrome(chrome, args, file, timeoutMs = 60_000) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(chrome, args, { stdio: 'ignore', detached: process.platform !== 'win32' });
    const stop = () => {
      try {
        if (process.platform === 'win32') child.kill();
        else process.kill(-child.pid, 'SIGKILL');
      } catch {
        // already gone
      }
    };
    let lastSize = -1;
    const started = Date.now();
    const timer = setInterval(() => {
      const size = existsSync(file) ? statSync(file).size : 0;
      if (size > 0 && size === lastSize) {
        clearInterval(timer);
        stop();
        resolvePromise();
      } else if (Date.now() - started > timeoutMs) {
        clearInterval(timer);
        stop();
        reject(new Error('timed out'));
      }
      lastSize = size;
    }, 300);
    child.on('error', (error) => {
      clearInterval(timer);
      reject(error);
    });
  });
}

async function chromeShots(chrome, opts) {
  mkdirSync(opts.out, { recursive: true });
  const profileDir = mkdtempSync(join(tmpdir(), 'design-shots-'));
  const taken = [];
  const failed = [];
  try {
    for (const shot of planShots(opts)) {
      try {
        rmSync(shot.file, { force: true });
        await captureWithChrome(chrome, chromeArgs(shot, profileDir), shot.file);
        taken.push(shot);
        console.log(`✓ ${shot.file}`);
      } catch (error) {
        failed.push({ ...shot, error: error.message.split('\n')[0] });
        console.error(`✗ ${shot.url} (${shot.viewport}, ${shot.scheme}): ${error.message.split('\n')[0]}`);
      }
    }
  } finally {
    rmSync(profileDir, { recursive: true, force: true });
  }
  return { taken, failed };
}

const HELP = `Neither Playwright nor an installed Chrome, Chromium or Edge was found, so screenshots cannot be taken here.
Options, from least to most invasive:
  0. If a browser is installed in an unusual place, set CHROME_PATH to its executable and run this again.
  1. Use a browser tool if your agent has one (Claude in Chrome, the built-in browser): open each URL at phone and
     desktop widths, in light and dark mode, and capture what you see.
  2. Ask the person for screenshots of the screens to review.
  3. With the person's permission, add Playwright to the project as a dev dependency using its package manager,
     install a browser (npx playwright install chromium) and run this script again.`;

export async function takeShots(opts) {
  const found = loadPlaywright(opts.from);
  if (!found) {
    const chrome = findChrome();
    if (!chrome) {
      console.error(HELP);
      return { taken: [], failed: [], missing: true };
    }
    if (opts.fullPage) console.error('Note: without Playwright, captures show the first screen only (no --full-page).');
    const { taken, failed } = await chromeShots(chrome, opts);
    console.log(`\n${taken.length} screenshot(s) in ${opts.out} with ${chrome.split(/[\\/]/).pop()}${failed.length ? `, ${failed.length} failed` : ''}. Open them to review (agents can read images).`);
    return { taken, failed, missing: false };
  }
  let browser;
  // Playwright's own browsers first, then the Chrome or Edge already installed on the machine.
  const attempts = [['chromium'], ['webkit'], ['firefox'], ['chromium', { channel: 'chrome' }], ['chromium', { channel: 'msedge' }]];
  for (const [type, options] of attempts) {
    try {
      browser = await found.lib[type].launch(options);
      break;
    } catch {
      // not available; try the next one
    }
  }
  if (!browser) {
    console.error(`Found ${found.name}, but no browser is available (no Playwright browser, Chrome or Edge). Run: npx playwright install chromium (with permission).`);
    return { taken: [], failed: [], missing: true };
  }
  mkdirSync(opts.out, { recursive: true });
  const taken = [];
  const failed = [];
  try {
    for (const shot of planShots(opts)) {
      const context = await browser.newContext({ viewport: VIEWPORTS[shot.viewport], colorScheme: shot.scheme, reducedMotion: 'reduce' });
      const page = await context.newPage();
      try {
        await page.goto(shot.url, { waitUntil: 'networkidle', timeout: 30_000 });
        await page.screenshot({ path: shot.file, fullPage: opts.fullPage });
        taken.push(shot);
        console.log(`✓ ${shot.file}`);
      } catch (error) {
        failed.push({ ...shot, error: error.message.split('\n')[0] });
        console.error(`✗ ${shot.url} (${shot.viewport}, ${shot.scheme}): ${error.message.split('\n')[0]}`);
      } finally {
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
  console.log(`\n${taken.length} screenshot(s) in ${opts.out}${failed.length ? `, ${failed.length} failed` : ''}. Open them to review (agents can read images).`);
  return { taken, failed, missing: false };
}

if (isMainScript(import.meta.url)) {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.urls.length === 0) {
    console.error('Usage: node screenshots.mjs <url> [more urls] [--out dir] [--viewports mobile,desktop] [--schemes light,dark] [--full-page] [--from <project>]');
    process.exit(1);
  }
  const result = await takeShots(opts);
  process.exit(result.missing ? 2 : result.failed.length ? 1 : 0);
}
