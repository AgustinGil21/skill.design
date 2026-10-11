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
