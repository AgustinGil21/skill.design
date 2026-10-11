// Tests for the skill's scripts. Run: node --test scripts/tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contrast, parseColor } from '../contrast.mjs';
import { analyzeText, parseLanguages, LEXICONS } from '../slop.mjs';
import { analyzeMarkup, analyzeStyles } from '../a11y-static.mjs';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const rules = (findings) => findings.map((f) => f.rule);
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

test('contrast: black on white is 21:1', () => {
  assert.equal(contrast('#000', '#fff').ratio, 21);
});

test('contrast: #777 on white misses 4.5:1 but passes large text', () => {
  const r = contrast('#777777', '#ffffff');
  assert.equal(r.normalTextAA, false);
  assert.equal(r.largeTextAA, true);
});

test('contrast: #767676 on white just passes AA', () => {
  assert.equal(contrast('#767676', '#ffffff').normalTextAA, true);
});

test('contrast: rgb() and alpha are blended over the background', () => {
  const opaque = contrast('rgb(0,0,0)', '#ffffff').ratio;
  const translucent = contrast('rgba(0,0,0,0.5)', '#ffffff').ratio;
  assert.ok(translucent < opaque);
});

test('contrast: oklch white and black', () => {
  assert.deepEqual(parseColor('oklch(100% 0 0)'), { r: 255, g: 255, b: 255, a: 1 });
  assert.deepEqual(parseColor('oklch(0% 0 0)'), { r: 0, g: 0, b: 0, a: 1 });
  assert.equal(contrast('oklch(0% 0 0)', 'oklch(100% 0 0)').ratio, 21);
});

test('contrast: an invalid color throws', () => {
  assert.throws(() => parseColor('bluish'));
});

test('slop: finds hollow phrases in every bundled language', () => {
  const samples = {
    en: 'Unlock seamless workflows.',
    es: 'Potenciá tu equipo con una solución integral.',
    pt: 'Uma solução completa de ponta.',
    fr: 'Une solution tout-en-un de pointe.',
    de: 'Nahtlose Integration für mehr Mehrwert.',
  };
  for (const [lang, sample] of Object.entries(samples)) {
    const found = analyzeText(sample, 'x.md').filter((f) => f.rule === `hollow-phrase:${lang}`);
    assert.ok(found.length >= 2, `${lang}: ${found.length}`);
  }
});

test('slop: --lang limits the lexicons used, placeholders are always checked', () => {
  const text = 'Potenciá tu equipo. Unlock it. Lorem ipsum.';
  const onlyEnglish = rules(analyzeText(text, 'a.md', ['en']));
  assert.ok(onlyEnglish.includes('hollow-phrase:en'));
  assert.ok(!onlyEnglish.includes('hollow-phrase:es'));
  assert.ok(onlyEnglish.includes('placeholder'));
  assert.deepEqual(parseLanguages(['--lang', 'en,es']), ['en', 'es']);
  assert.deepEqual(parseLanguages(['--lang=de']), ['de']);
  assert.deepEqual(parseLanguages([]), Object.keys(LEXICONS));
});

test('slop: finds the default purple-blue gradient in Tailwind and CSS', () => {
  const tw = analyzeText('<div class="bg-gradient-to-r from-purple-500 to-blue-500">', 'a.html');
  const css = analyzeText('.hero { background: linear-gradient(90deg, #8b5cf6, #3b82f6); }', 'a.css');
  assert.ok(rules(tw).includes('generic-gradient'));
  assert.ok(rules(css).includes('generic-gradient'));
});

test('slop: finds an emoji in a heading and an adjective triad, in any cased language', () => {
  const h = analyzeText('# 🚀 We launched\n\nSimple. Fast. Secure.', 'a.md');
  assert.ok(rules(h).includes('decorative-emoji'));
  assert.ok(rules(h).includes('triad'));
  assert.ok(rules(analyzeText('Simple. Rápido. Seguro.', 'a.md')).includes('triad'));
});

test('slop: concrete copy produces no findings', () => {
  assert.equal(analyzeText('# Close the month in 2 days\n\nReconcile 300 transactions an hour with rules you define.', 'a.md').length, 0);
  assert.equal(analyzeText('# Cerrá el mes en 2 días\n\nConciliá 300 movimientos por hora con reglas que vos definís.', 'a.md').length, 0);
});

test('slop: does not flag words that only contain the phrase', () => {
  assert.equal(analyzeText('relevant elevator development relevante', 'a.md').length, 0);
});

test('slop: the command line accepts --lang before or after the paths', () => {
  const file = join(mkdtempSync(join(tmpdir(), 'design-')), 'copy.html');
  writeFileSync(file, '<p>Unlock it. Potenciá tu marca.</p>');
  const run = (...args) => {
    try {
      return execFileSync('node', [join(ROOT, 'scripts', 'slop.mjs'), ...args, '--json'], { encoding: 'utf8' });
    } catch (error) {
      return error.stdout;
    }
  };
  assert.deepEqual(JSON.parse(run('--lang', 'es', file)).map((f) => f.rule), ['hollow-phrase:es']);
  assert.deepEqual(JSON.parse(run(file, '--lang=en')).map((f) => f.rule), ['hollow-phrase:en']);
});

test('a11y: an image without alt is an error, an empty alt passes', () => {
  assert.ok(rules(analyzeMarkup('<img src="a.png">', 'a.html')).includes('1.1.1 image-without-alt'));
  assert.equal(analyzeMarkup('<img src="a.png" alt="">', 'a.html').length, 0);
});

test('a11y: an icon-only button without a name is an error; aria-label or sr-only text passes', () => {
  assert.ok(rules(analyzeMarkup('<button><svg><path/></svg></button>', 'a.tsx')).includes('4.1.2 button-without-name'));
  assert.equal(analyzeMarkup('<button aria-label="Close"><svg></svg></button>', 'a.tsx').length, 0);
  assert.equal(analyzeMarkup('<button><svg></svg><span className="sr-only">Close</span></button>', 'a.tsx').length, 0);
  assert.equal(analyzeMarkup('<button>{t("save")}</button>', 'a.tsx').length, 0);
});

test('a11y: a placeholder-only field is an error; an associated label passes', () => {
  assert.ok(rules(analyzeMarkup('<input type="email" placeholder="Email">', 'a.html')).includes('1.3.1 field-without-label'));
  assert.equal(analyzeMarkup('<label for="em">Email</label><input id="em" type="email">', 'a.html').length, 0);
  assert.equal(analyzeMarkup('<label>Email <input type="email"></label>', 'a.html').length, 0);
  assert.equal(analyzeMarkup('<input type="hidden" name="x">', 'a.html').length, 0);
});

test('a11y: skipped headings, lang, zoom and tabindex', () => {
  const h = rules(analyzeMarkup('<html><body><h1>A</h1><h3>B</h3><meta name="viewport" content="width=device-width, user-scalable=no"><div tabindex="3"></div></body></html>', 'a.html'));
  assert.ok(h.includes('1.3.1 skipped-heading'));
  assert.ok(h.includes('3.1.1 missing-lang'));
  assert.ok(h.includes('1.4.4 zoom-blocked'));
  assert.ok(h.includes('2.4.3 positive-tabindex'));
});

test('a11y: div with onClick, video with sound and outline-none without focus', () => {
  const h = rules(analyzeMarkup('<div onClick={open}>Open</div><video autoplay src="a.mp4"></video><button className="outline-none">Go</button>', 'a.tsx'));
  assert.ok(h.includes('2.1.1 click-without-keyboard'));
  assert.ok(h.includes('1.4.2 video-with-sound'));
  assert.ok(h.includes('2.4.7 invisible-focus'));
});

test('a11y: vague link text in several languages; descriptive links pass', () => {
  for (const vague of ['click here', 'click aquí', 'leia mais', 'en savoir plus', 'hier klicken']) {
    assert.ok(rules(analyzeMarkup(`<a href="/x">${vague}</a>`, 'a.html')).includes('2.4.4 vague-link'), vague);
  }
  assert.equal(analyzeMarkup('<a href="/pricing">See pricing</a>', 'a.html').length, 0);
});

test('a11y CSS: outline none without focus-visible, and animation without reduced motion', () => {
  const h = rules(analyzeStyles('button { outline: none; }\n@keyframes x { to { opacity: 1 } }', 'a.css'));
  assert.ok(h.includes('2.4.7 invisible-focus'));
  assert.ok(h.includes('2.3.3 no-reduced-motion'));
  const good = analyzeStyles('button:focus-visible { outline: 2px solid; } button { outline: none; }\n@keyframes x {}\n@media (prefers-reduced-motion: reduce) {}', 'b.css');
  assert.equal(good.length, 0);
});

test('a11y: components that forward props are info, not errors', () => {
  const h = analyzeMarkup('<input type={type} className="x" {...props} />', 'input.tsx');
  assert.equal(h.length, 1);
  assert.equal(h[0].level, 'info');
  const b = analyzeMarkup('<Button className="x" {...props}><ArrowDownIcon /></Button>', 'c.tsx');
  assert.equal(b[0].level, 'info');
});

test('a11y: dynamic ids linked with htmlFor, and hidden fields, pass', () => {
  const jsx = '<label htmlFor={`c-${i}`}>Component</label><select id={`c-${i}`} value={v}></select>';
  assert.equal(analyzeMarkup(jsx, 'a.tsx').length, 0);
  assert.equal(analyzeMarkup('<input type="file" hidden onChange={f} />', 'a.tsx').length, 0);
});

test('a11y: attributes after an arrow function are read correctly', () => {
  const jsx = '<textarea value={v} onChange={(e) => set(e.target.value)} aria-label="Spec as JSON" />';
  assert.equal(analyzeMarkup(jsx, 'a.tsx').length, 0);
  const img = '<img src={src} onLoad={() => ready()} alt="Cover" />';
  assert.equal(analyzeMarkup(img, 'a.tsx').length, 0);
});

test('the scripts work when called through a symbolic link', () => {
  const link = join(mkdtempSync(join(tmpdir(), 'design-')), 'design');
  symlinkSync(ROOT, link);
  const out = execFileSync('node', [join(link, 'scripts', 'contrast.mjs'), '#000', '#fff'], { encoding: 'utf8' });
  assert.match(out, /21:1/);
});

test('a11y: field components with a label prop count as labeled', () => {
  assert.equal(analyzeMarkup('<Input id="q" label={t("name")} value={v} onChange={set} />', 'a.tsx').length, 0);
  assert.ok(analyzeMarkup('<input label="x" />', 'a.html').length > 0);
});

test('known false positives: skip-link target, JSON keys and "all in one place"', () => {
  assert.equal(analyzeMarkup('<main id="main" tabIndex={-1} className="outline-none">', 'a.tsx').length, 0);
  assert.equal(analyzeText('{ "Unlock": "sin candado" }', 'es.json').length, 0);
  assert.equal(analyzeText('Everything in one place, all in one secure place.', 'a.md').length, 0);
  assert.ok(analyzeText('The all-in-one platform', 'a.md').length > 0);
});

test('design-scan: reads product, stack, languages, brand, fonts, colors, tokens and copy from a project', async () => {
  const { scanProject, render } = await import('../design-scan.mjs');
  const { mkdirSync } = await import('node:fs');
  const dir = mkdtempSync(join(tmpdir(), 'design-scan-'));
  writeFileSync(join(dir, 'package.json'), JSON.stringify({ name: 'pocket-budget', description: 'Budget app for families', dependencies: { react: '19.0.0', tailwindcss: '4.0.0' } }));
  writeFileSync(join(dir, 'README.md'), '# Pocket Budget\n\nTrack your household budget and savings together.\n');
  mkdirSync(join(dir, 'src', 'locales', 'es'), { recursive: true });
  writeFileSync(join(dir, 'src', 'locales', 'es', 'common.json'), JSON.stringify({ hero: { title: 'Tu presupuesto familiar, claro y en un solo lugar' }, k: '{count} items' }));
  mkdirSync(join(dir, 'public'));
  writeFileSync(join(dir, 'public', 'logo.svg'), '<svg/>');
  writeFileSync(join(dir, 'src', 'app.css'), '@theme { --color-primary: #1f6f5c; --color-empty: initial; }\nbody { font-family: "Fraunces", serif; color: #1F6F5C; }');
  writeFileSync(join(dir, 'src', 'page.tsx'), '<html lang="en"><h1>Your money, together</h1><h2>landing.faq.title</h2></html>');
  mkdirSync(join(dir, 'tests'));
  writeFileSync(join(dir, 'tests', 'colors.test.ts'), 'const fake = "#123456";');

  const scan = scanProject(dir);
  assert.equal(scan.product.name, 'pocket-budget');
  assert.equal(scan.product.readme.title, 'Pocket Budget');
  assert.ok(scan.stack.includes('React') && scan.stack.includes('Tailwind CSS'));
  assert.deepEqual(scan.languages.sort(), ['en', 'es']);
  assert.deepEqual(scan.brand.assets, [join('public', 'logo.svg')]);
  assert.equal(scan.fonts[0].font, 'Fraunces');
  assert.equal(scan.colors[0].color, '#1f6f5c');
  assert.ok(!scan.colors.some((c) => c.color === '#123456'), 'colors in tests are ignored');
  assert.ok(scan.tokens.sample.some(([k]) => k === '--color-primary'));
  assert.ok(!scan.tokens.sample.some(([k]) => k === '--color-empty'), 'empty tokens are skipped');
  assert.ok(scan.copy.includes('Your money, together'));
  assert.ok(!scan.copy.includes('landing.faq.title'), 'translation keys are not copy');
  assert.ok(scan.copy.some((c) => c.startsWith('Tu presupuesto familiar')));
  assert.equal(scan.domains[0].domain, 'personal finance and banking');
  assert.match(render(scan), /# Design scan: pocket-budget/);
});

test('design-scan: domain signals count mentions and mark single mentions as weak', async () => {
  const { inferDomains } = await import('../design-scan.mjs');
  const [strong] = inferDomains('Book a hotel. Your trip, your flight, your hotel booking.');
  assert.equal(strong.domain, 'travel and hospitality');
  assert.equal(strong.strength, 'strong');
  const weak = inferDomains('A training menu').find((d) => d.domain === 'fitness and sport');
  assert.equal(weak.strength, 'weak');
  assert.deepEqual(inferDomains('Detailed paint colors'), [], 'words inside other words do not count');
});

test('design-scan: Flutter project (pubspec, ARB strings, Color(0x…), fontFamily, Text)', async () => {
  const { scanProject } = await import('../design-scan.mjs');
  const { mkdirSync } = await import('node:fs');
  const dir = mkdtempSync(join(tmpdir(), 'scan-flutter-'));
  writeFileSync(join(dir, 'pubspec.yaml'), 'name: little_readers\ndescription: "Reading games for kids"\nflutter:\n  fonts:\n    - family: Andika\n');
  mkdirSync(join(dir, 'lib', 'l10n'), { recursive: true });
  writeFileSync(join(dir, 'lib', 'l10n', 'app_es.arb'), JSON.stringify({ '@@locale': 'es', welcome: '¡Hola! ¿Leemos un cuento juntos?', '@welcome': { description: 'x' } }));
  writeFileSync(join(dir, 'lib', 'theme.dart'), "const brandOrange = Color(0xFFF2994A);\nfinal style = TextStyle(fontFamily: 'Andika');\nText('Pick a story to start');");
  const scan = scanProject(dir);
  assert.equal(scan.product.name, 'little_readers');
  assert.ok(scan.stack.includes('Flutter'));
  assert.ok(scan.languages.includes('es'));
  assert.ok(scan.copy.some((c) => c.startsWith('¡Hola!')));
  assert.ok(scan.copy.includes('Pick a story to start'));
  assert.ok(scan.colors.some((c) => c.color === '#f2994a'));
  assert.ok(scan.tokens.sample.some(([k, v]) => k === 'brandOrange' && v === '#f2994a'));
  assert.ok(scan.fonts.some((f) => f.font.startsWith('Andika')));
  assert.equal(scan.domains[0].domain, 'kids and family');
});

test('design-scan: iOS and Android resources (colorsets, .strings, strings.xml, #AARRGGBB, densities)', async () => {
  const { scanProject } = await import('../design-scan.mjs');
  const { mkdirSync } = await import('node:fs');
  const dir = mkdtempSync(join(tmpdir(), 'scan-native-'));
  mkdirSync(join(dir, 'App.xcodeproj'));
  mkdirSync(join(dir, 'Assets.xcassets', 'BrandRed.colorset'), { recursive: true });
  writeFileSync(join(dir, 'Assets.xcassets', 'BrandRed.colorset', 'Contents.json'), JSON.stringify({ colors: [{ color: { components: { red: '0x7A', green: '0x0F', blue: '0x1E', alpha: '1.000' } } }] }));
  mkdirSync(join(dir, 'es.lproj'));
  writeFileSync(join(dir, 'es.lproj', 'Localizable.strings'), '"transfer.title" = "Enviá dinero a quien quieras";');
  writeFileSync(join(dir, 'Home.swift'), 'Text("Your balance today").font(.custom("Söhne", size: 17))\nlet c = Color(red: 1.0, green: 0.5, blue: 0.0)');
  writeFileSync(join(dir, 'build.gradle'), 'apply plugin: "com.android.application"');
  mkdirSync(join(dir, 'res', 'values-pt'), { recursive: true });
  writeFileSync(join(dir, 'res', 'values-pt', 'strings.xml'), '<resources><string name="hero">Transferências sem complicação</string></resources>');
  writeFileSync(join(dir, 'res', 'values-pt', 'colors.xml'), '<resources><color name="primary">#FF7A0F1E</color></resources>');
  for (const d of ['hdpi', 'xhdpi']) {
    mkdirSync(join(dir, 'res', `mipmap-${d}`), { recursive: true });
    writeFileSync(join(dir, 'res', `mipmap-${d}`, 'ic_launcher.png'), '');
  }
  const scan = scanProject(dir);
  assert.ok(scan.stack.includes('iOS (Xcode)') && scan.stack.includes('Android (Gradle)'));
  assert.ok(scan.languages.includes('es') && scan.languages.includes('pt'));
  assert.ok(scan.tokens.sample.some(([k, v]) => k === 'BrandRed (asset catalog)' && v === '#7a0f1e'));
  assert.ok(scan.tokens.sample.some(([k, v]) => k === 'primary' && v === '#7a0f1e'));
  assert.ok(scan.colors.some((c) => c.color === '#ff8000'));
  assert.ok(scan.fonts.some((f) => f.font === 'Söhne'));
  assert.ok(scan.copy.includes('Your balance today'));
  assert.ok(scan.copy.some((c) => c.startsWith('Transferências')));
  assert.deepEqual(scan.brand.assets, [join('res', 'mipmap-*', 'ic_launcher.png') + ' (2 densities)']);
});

test('screenshots: plans one shot per url, viewport and scheme with stable names', async () => {
  const { parseArgs, planShots } = await import('../screenshots.mjs');
  const opts = parseArgs(['http://localhost:3000/', 'http://localhost:3000/settings/billing', '--out', 'shots', '--viewports', 'mobile,desktop', '--schemes', 'dark']);
  const shots = planShots(opts);
  assert.equal(shots.length, 4);
  assert.deepEqual(shots.map((s) => s.file), [
    join('shots', '01-home-mobile-dark.png'),
    join('shots', '01-home-desktop-dark.png'),
    join('shots', '02-settings-billing-mobile-dark.png'),
    join('shots', '02-settings-billing-desktop-dark.png'),
  ]);
  assert.throws(() => parseArgs(['http://x.test', '--viewports', 'watch']), /Unknown viewport/);
  assert.throws(() => planShots({ ...opts, urls: ['not a url'] }), /Not a URL/);
});

test('screenshots: without Playwright or a browser it explains the alternatives and exits with code 2', () => {
  const dir = mkdtempSync(join(tmpdir(), 'no-playwright-'));
  let code = 0;
  let stderr = '';
  try {
    execFileSync('node', [join(ROOT, 'scripts', 'screenshots.mjs'), 'http://localhost:1/', '--from', dir], {
      stdio: 'pipe',
      env: { ...process.env, CHROME_PATH: join(dir, 'no-browser-here') },
    });
  } catch (error) {
    code = error.status;
    stderr = error.stderr.toString();
  }
  assert.equal(code, 2);
  assert.match(stderr, /browser tool/);
});

test('screenshots: local demo files are named after the file, and Chrome gets an explicit color scheme', async () => {
  const { planShots, chromeArgs, findChrome } = await import('../screenshots.mjs');
  const [shot] = planShots({ urls: ['file:///tmp/project/design-demos/choose-story.html'], viewports: ['mobile'], schemes: ['dark'], out: 'shots' });
  assert.equal(shot.file, join('shots', '01-choose-story-mobile-dark.png'));
  const args = chromeArgs(shot, '/tmp/profile');
  assert.ok(args.includes('--blink-settings=preferredColorScheme=0'), 'dark must be explicit or the system mode leaks in');
  assert.ok(args.includes('--window-size=390,844'));
  assert.ok(args.includes('--force-prefers-reduced-motion'));
  assert.equal(chromeArgs({ ...shot, scheme: 'light' }, '/tmp/p').find((a) => a.startsWith('--blink')), '--blink-settings=preferredColorScheme=1');
  assert.equal(findChrome({ CHROME_PATH: '/nonexistent' }, 'plan9'), null);
});

test('slop: flags bouncy, elastic and attention-seeking motion on web and native, but not calm motion', () => {
  const flagged = (text, file = 'x.tsx') => analyzeText(text, file, []).filter((f) => f.rule === 'gimmick-motion');
  assert.equal(flagged('<span className="animate-bounce">').length, 1);
  assert.equal(flagged('<span className="animate-ping absolute">').length, 1);
  assert.equal(flagged('transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);', 'a.css').length, 1);
  assert.equal(flagged("animate={{ x: 0 }} transition={{ type: 'spring', bounce: 0.4 }}").length, 1);
  assert.equal(flagged("gsap.to(el, { x: 100, ease: 'elastic.out(1, 0.3)' })").length, 1);
  assert.equal(flagged('@keyframes bounce-in { from { transform: scale(0.3) } }', 'a.css').length, 1);
  assert.equal(flagged('curve: Curves.elasticOut,', 'a.dart').length, 1);
  assert.equal(flagged('.animation(.bouncy, value: open)', 'a.swift').length, 1);
  assert.equal(flagged('spring(dampingRatio = Spring.DampingRatioHighBouncy)', 'a.kt').length, 1);
  assert.equal(flagged("transition={{ ease: 'anticipate' }}").length, 1);
  // Calm, professional motion passes, and the English word "anticipate" in prose is not motion.
  assert.equal(flagged('We anticipate questions about pricing.', 'a.md').length, 0);
  assert.equal(flagged('transition: opacity 200ms cubic-bezier(0.2, 0, 0, 1);', 'a.css').length, 0);
  assert.equal(flagged("transition={{ type: 'spring', bounce: 0, duration: 0.3 }}").length, 0);
  assert.equal(flagged('<div className="h-4 w-32 animate-pulse rounded bg-muted" data-slot="skeleton" />').length, 0);
  const decorative = flagged('<span className="size-2 rounded-full bg-accent animate-pulse" />');
  assert.equal(decorative.length, 1);
  assert.equal(decorative[0].level, 'info');
});

test('system-check: raw colors and arbitrary values in components, tokens allowed in token files, large components', async () => {
  const { analyzeFile, checkPaths, HUGE_COMPONENT_LINES } = await import('../system-check.mjs');
  const rules = (f) => f.map((x) => x.rule).sort();
  assert.deepEqual(rules(analyzeFile('<div style={{ color: "#dc2626", padding: 18 }} className="bg-[#7a0f1e] rounded-[13px]" />', 'Card.tsx')),
    ['arbitrary-color', 'arbitrary-value', 'hardcoded-color', 'inline-magic-number']);
  assert.deepEqual(analyzeFile(':root { --color-action: #7a0f1e; }\n.btn { background: var(--color-action); }', 'app.css'), []);
  assert.deepEqual(rules(analyzeFile('.btn { color: #fff; }', 'app.css')), ['hardcoded-color']);
  assert.deepEqual(analyzeFile('<div className="bg-action rounded-control p-4" style={{ margin: 0 }} />', 'Ok.tsx'), []);
  assert.deepEqual(rules(analyzeFile('const brand = Color(0xFF7A0F1E);', 'card.dart')), ['hardcoded-color']);
  const big = analyzeFile('x\n'.repeat(HUGE_COMPONENT_LINES + 1), 'Dashboard.tsx');
  assert.equal(big[0].rule, 'large-component');
  assert.equal(big[0].level, 'warning');
  const dir = mkdtempSync(join(tmpdir(), 'system-check-'));
  writeFileSync(join(dir, 'theme.ts'), 'export const brand = "#7a0f1e";');
  writeFileSync(join(dir, 'tokens.css'), '.x { color: #7a0f1e; }');
  assert.deepEqual(checkPaths([dir]), [], 'token and theme files are exempt');
});

test('design-scan: platforms and input features (web tool, mobile app, desktop app, monorepo)', async () => {
  const { scanProject } = await import('../design-scan.mjs');
  const { mkdirSync } = await import('node:fs');
  const make = (files) => {
    const dir = mkdtempSync(join(tmpdir(), 'scan-platform-'));
    for (const [path, content] of Object.entries(files)) {
      mkdirSync(join(dir, dirname(path)), { recursive: true });
      writeFileSync(join(dir, path), content);
    }
    return dir;
  };
  const web = scanProject(make({
    'package.json': JSON.stringify({ dependencies: { react: '19.0.0', cmdk: '1.0.0', '@dnd-kit/core': '6.0.0' } }),
    'src/Row.tsx': 'export const Row = () => <tr onContextMenu={open} />;\nif (e.metaKey || e.ctrlKey) save();',
    'src/app.css': '@media (pointer: coarse) { .row { min-height: 44px } }',
  }));
  assert.deepEqual(web.platforms, ['web']);
  for (const what of ['command palette', 'drag and drop', 'context menu handlers', 'modifier-key shortcuts', 'pointer and hover media queries']) {
    assert.ok(web.input.some((i) => i.startsWith(what)), what);
  }
  const mobile = scanProject(make({ 'package.json': JSON.stringify({ dependencies: { 'react-native': '0.79.0', expo: '53.0.0' } }) }));
  assert.deepEqual(mobile.platforms, ['mobile (iOS and Android, phones and tablets)']);
  const desktop = scanProject(make({ 'package.json': JSON.stringify({ dependencies: { react: '19.0.0', electron: '33.0.0' } }) }));
  assert.ok(desktop.platforms.includes('desktop (cross-platform)'));
  const monorepo = scanProject(make({ 'package.json': '{"name":"root"}', 'apps/editor/package.json': JSON.stringify({ dependencies: { react: '19.0.0' } }) }));
  assert.deepEqual(monorepo.platforms, ['web']);
});

test('a11y: right-click detected by mouse button warns (touchpads fire contextmenu); the contextmenu event passes', () => {
  const rules = (t) => analyzeMarkup(t, 'x.tsx').map((f) => f.rule);
  assert.ok(rules('<div onMouseDown={(e) => { if (e.button === 2) openMenu(); }} />').includes('input contextmenu-by-button'));
  assert.ok(!rules('<div onContextMenu={(e) => { e.preventDefault(); openMenu(); }} />').includes('input contextmenu-by-button'));
});

test('system-check: icons drawn by hand, icon families and typefaces', async () => {
  const { analyzeFile, iconFamilies, fontFamilies, checkPaths } = await import('../system-check.mjs');
  const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15v4a2 2 0 01-2 2H5" /></svg>';
  assert.ok(analyzeFile(`export const Upload = () => ${icon};`, 'ChatInput.tsx').some((f) => f.rule === 'handmade-icon'));
  const logo = '<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M1 1" /><path fill="#34A853" d="M2 2" /></svg>';
  assert.ok(!analyzeFile(`const G = () => ${logo};`, 'LoginForm.tsx').some((f) => f.rule === 'handmade-icon'), 'multi-color marks are logos');
  assert.ok(!analyzeFile(`const L = () => ${icon};`, 'BrandLogo.tsx').some((f) => f.rule === 'handmade-icon'));
  assert.ok(!analyzeFile('<svg viewBox="0 0 800 400"><path d="M0 0L800 400" /></svg>', 'Chart.tsx').some((f) => f.rule === 'handmade-icon'), 'large drawings are not icons');
  assert.deepEqual([...iconFamilies("import { Bell } from 'lucide-react';\nimport { FaUser } from 'react-icons/fa';\nimport { Ionicons, MaterialIcons } from '@expo/vector-icons';")],
    ['Lucide', 'react-icons/fa', 'vector-icons Ionicons', 'vector-icons MaterialIcons']);
  assert.deepEqual([...fontFamilies(`--font-sans: "Inter Variable", sans-serif; font-family: Inter, Arial; font-family: "JetBrains Mono", monospace; <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600&display=swap">`)], ['Inter', 'Fraunces']);
  const dir = mkdtempSync(join(tmpdir(), 'families-'));
  writeFileSync(join(dir, 'a.tsx'), "import { Bell } from 'lucide-react';\nimport { HomeIcon } from '@heroicons/react/24/outline';\nimport { FaUser } from 'react-icons/fa';");
  writeFileSync(join(dir, 'app.css'), 'h1 { font-family: "Playfair Display"; } body { font-family: "DM Sans"; } .x { font-family: Inter; }');
  const project = checkPaths([dir]).filter((f) => f.file === '(project)').map((f) => `${f.rule}:${f.level}`);
  assert.deepEqual(project.sort(), ['font-families:warning', 'icon-families:warning']);
});

test('design-scan: i18n and the locale in the URL', async () => {
  const { scanProject } = await import('../design-scan.mjs');
  const { mkdirSync } = await import('node:fs');
  const withRoutes = mkdtempSync(join(tmpdir(), 'scan-i18n-'));
  writeFileSync(join(withRoutes, 'package.json'), JSON.stringify({ dependencies: { react: '19.0.0', i18next: '23.0.0' } }));
  mkdirSync(join(withRoutes, 'src'));
  writeFileSync(join(withRoutes, 'src', 'routes.tsx'), "export const routes = [{ path: '/:lang/pricing', element: <Pricing /> }];");
  const a = scanProject(withRoutes);
  assert.equal(a.i18n.library, true);
  assert.match(a.i18n.localeInUrl, /routes\.tsx/);
  const nextApp = mkdtempSync(join(tmpdir(), 'scan-i18n-'));
  writeFileSync(join(nextApp, 'package.json'), JSON.stringify({ dependencies: { next: '15.0.0', 'next-intl': '3.0.0' } }));
  mkdirSync(join(nextApp, 'src', 'app', '[locale]'), { recursive: true });
  assert.equal(scanProject(nextApp).i18n.localeInUrl, 'route folder');
  const none = mkdtempSync(join(tmpdir(), 'scan-i18n-'));
  writeFileSync(join(none, 'package.json'), JSON.stringify({ dependencies: { react: '19.0.0' } }));
  assert.deepEqual(scanProject(none).i18n, { library: false, localeInUrl: null });
});
