#!/usr/bin/env node
// Detects generic ("slop") design and copy signals in code and content. No dependencies.
// Usage: node slop.mjs <files or folders> [--lang en,es] [--json] [--no-fail]
// Exits with code 1 when it finds warnings (unless --no-fail). It is an aid: every finding needs judgment.

import { readFileSync } from 'node:fs';
import { collect, lineOf, print } from './lib/files.mjs';
import { isMainScript } from './lib/main.mjs';
import en from './lexicon/en.mjs';
import es from './lexicon/es.mjs';
import pt from './lexicon/pt.mjs';
import fr from './lexicon/fr.mjs';
import de from './lexicon/de.mjs';

// Hollow phrases per language. See lexicon/README.md to add a language.
export const LEXICONS = { en, es, pt, fr, de };

const EXTENSIONS = new Set(['.html', '.htm', '.jsx', '.tsx', '.js', '.ts', '.astro', '.vue', '.svelte', '.md', '.mdx', '.css', '.scss', '.json', '.txt', '.dart', '.swift', '.kt']);

// Placeholder content is the same problem in every language.
const PLACEHOLDERS = [
  ['lorem ipsum', 'Placeholder text: use real content'],
  ['acme(?: inc| corp)?', 'Generic fictional company: use realistic data'],
  ['john doe|jane doe', 'Placeholder name: use realistic data'],
];

const STYLE_RULES = [
  {
    rule: 'generic-gradient',
    pattern: /(?:bg-gradient-to-\w+|bg-linear-to-\w+)[^"'`]*from-(?:purple|violet|indigo|fuchsia)-\d+[^"'`]*to-(?:blue|indigo|purple|violet|pink|cyan)-\d+/g,
    message: 'Default purple/blue gradient: choose a color with intent (see knowledge/10-color.md)',
  },
  {
    rule: 'generic-gradient',
    pattern: /linear-gradient\([^)]*(?:#8b5cf6|#7c3aed|#6366f1|#a855f7|#4f46e5|purple|violet|indigo)[^)]*(?:#3b82f6|#2563eb|#06b6d4|#ec4899|blue|cyan|pink)[^)]*\)/gi,
    message: 'Default purple/blue gradient: choose a color with intent (see knowledge/10-color.md)',
  },
  {
    rule: 'decorative-glow',
    pattern: /(?:blur-3xl|blur-\[\d{3,}px\])[^"'`]*(?:purple|violet|indigo|fuchsia)|(?:purple|violet|indigo|fuchsia)-\d+[^"'`]*blur-3xl/g,
    message: 'Blurred color blob as decoration: what does it communicate?',
  },
  {
    rule: 'default-blue',
    pattern: /#3b82f6|bg-blue-500|bg-blue-600/gi,
    message: "The library's default blue: confirm it is a brand decision",
    level: 'info',
  },
];

// Linear timing on something that moves on its own starts abruptly and stops dead: it reads as mechanical. Linear is
// right when the motion follows input or time (scroll-linked, scrubbed, a continuous loop, a progress bar), so those
// are skipped (see knowledge/landing/06-motion.md, "Ease every movement").
const LINEAR_MOTION = 'Linear timing on movement: ease it with a cubic-bezier token; keep linear for scroll- or input-linked motion, loops and progress';
const MOVING = /\b(?:transform|translate|scale|rotate|clip-path|inset|top|left|right|bottom|width|height|all)\b/;
function linearMotion(text) {
  const found = [];
  const block = (index) => text.slice(text.lastIndexOf('{', index) + 1, (text.indexOf('}', index) + 1 || text.length + 1) - 1);
  for (const m of text.matchAll(/\btransition\s*:\s*[^;{}\n]*\blinear\b[^;{}\n]*/g)) {
    if (MOVING.test(m[0])) found.push(m);
  }
  for (const m of text.matchAll(/\banimation\s*:\s*[^;{}\n]*\blinear\b[^;{}\n]*/g)) {
    if (/\binfinite\b/.test(m[0]) || /animation-timeline/.test(block(m.index))) continue;
    found.push(m);
  }
  for (const m of text.matchAll(/\bease-linear\b/g)) {
    const line = text.slice(text.lastIndexOf('\n', m.index) + 1, text.indexOf('\n', m.index) === -1 ? undefined : text.indexOf('\n', m.index));
    if (/\b(?:transition|transition-(?:transform|all))\b|\b(?:-?translate|scale|rotate)-/.test(line) && !/\banimate-|\bprogress/.test(line)) found.push(m);
  }
  for (const m of text.matchAll(/\bease\s*:\s*['"](?:none|linear)['"]/g)) {
    const around = text.slice(Math.max(0, m.index - 200), m.index + 200);
    if (/\bscrub\b|\brepeat\s*:\s*(?:-1|Infinity)\b|\bprogress\b/.test(around)) continue;
    found.push(m);
  }
  return found;
}

// Gimmicky motion: bounces, elastic and "back" easings, springs with overshoot, attention-seeking loops. Professional
// motion decelerates and settles without overshooting (see knowledge/landing/06-motion.md).
const GIMMICK = 'Bouncy, elastic or attention-seeking motion reads as generated: use a decelerating ease without overshoot';
const MOTION_RULES = [
  { pattern: /\banimate-(?:bounce|ping|wiggle|wobble|jello|tada|shake|swing|heartbeat|heart-beat|rubber-band|float)\b/gi, message: GIMMICK },
  { pattern: /@keyframes\s+(?:bounce\w*|wobble|jello|tada|rubber\w*|swing|heart-?beat|shake|jiggle|float\w*|glow\w*|breath\w*)\b/gi, message: GIMMICK },
  { pattern: /\banimation(?:-name)?\s*:\s*[^;]*\b(?:bounce\w*|wobble|jello|tada|rubber\w*|heart-?beat|jiggle|glow\w*|breath\w*)\b/gi, message: GIMMICK },
  { pattern: /\b(?:easeOutBack|easeInOutBack|easeInBack|easeOutElastic|easeInOutElastic|easeOutBounce|easeInOutBounce|backOut|backInOut|backIn)\b/g, message: GIMMICK },
  { pattern: /\bease\s*:\s*['"](?:elastic|bounce|back|anticipate)[^'"]*['"]|\b(?:Elastic|Bounce|Back)\.ease\w*/g, message: GIMMICK },
  { pattern: /\bbounce\s*:\s*(?:0?\.\d*[1-9]|[1-9])/g, message: 'Spring with bounce: set bounce to 0, unless it continues a gesture released with momentum (keep it small)' },
  { pattern: /\bCurves\.(?:bounce\w*|elastic\w*|easeOutBack|easeInOutBack|easeInBack)\b/g, message: GIMMICK },
  { pattern: /\.(?:bouncy|snappy)\b|\.spring\([^)]*bounce:\s*0?\.\d*[1-9]/g, message: 'Bouncy SwiftUI spring: use .smooth or an ease without overshoot' },
  { pattern: /\bSpring\.DampingRatio(?:HighBouncy|MediumBouncy|LowBouncy)\b/g, message: 'Bouncy Compose spring: use DampingRatioNoBouncy or a tween' },
];

// cubic-bezier with y values outside 0–1 overshoots (the element passes its target and comes back).
function overshootingBeziers(text) {
  const out = [];
  for (const m of text.matchAll(/cubic-bezier\(\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*\)/g)) {
    const y1 = Number(m[2]);
    const y2 = Number(m[4]);
    if (y1 < 0 || y1 > 1 || y2 < 0 || y2 > 1) out.push(m);
  }
  return out;
}

const EMOJI = /\p{Extended_Pictographic}/u;
// "Simple. Fast. Secure." in any cased script.
const TRIAD = /\b(\p{Lu}\p{Ll}+)\.\s+(\p{Lu}\p{Ll}+)\.\s+(\p{Lu}\p{Ll}+)\./u;

export function analyzeText(text, file, languages = Object.keys(LEXICONS)) {
  const findings = [];
  const add = (index, rule, message, excerpt, level = 'warning') =>
    findings.push({ file, line: lineOf(text, index), rule, level, message, excerpt: excerpt.trim().slice(0, 120) });

  const phrases = [
    ...PLACEHOLDERS.map(([pattern, message]) => [pattern, message, 'placeholder']),
    ...languages.flatMap((lang) => (LEXICONS[lang] ?? []).map(([pattern, message]) => [pattern, message, `hollow-phrase:${lang}`])),
  ];
  for (const [phrase, message, rule] of phrases) {
    const re = new RegExp(`(?<![\\p{L}])(?:${phrase})(?![\\p{L}])`, 'giu');
    for (const m of text.matchAll(re)) {
      // In JSON, a matching key is an identifier, not copy.
      if (file.endsWith('.json') && text.startsWith('":', m.index + m[0].length)) continue;
      add(m.index, rule, message, m[0]);
    }
  }

  for (const { rule, pattern, message, level } of STYLE_RULES) {
    for (const m of text.matchAll(pattern)) add(m.index, rule, message, m[0], level);
  }

  for (const { pattern, message } of MOTION_RULES) {
    for (const m of text.matchAll(pattern)) add(m.index, 'gimmick-motion', message, m[0]);
  }
  for (const m of overshootingBeziers(text)) {
    add(m.index, 'gimmick-motion', 'Easing that overshoots (y outside 0–1): the element passes its target and bounces back', m[0]);
  }
  for (const m of linearMotion(text)) add(m.index, 'linear-motion', LINEAR_MOTION, m[0], 'info');
  // Pulsing is legitimate for loading skeletons; as decoration (AI glow, pulsing dots or badges) it is noise.
  for (const m of text.matchAll(/\banimate-pulse\b/g)) {
    const line = text.slice(text.lastIndexOf('\n', m.index) + 1, text.indexOf('\n', m.index) === -1 ? undefined : text.indexOf('\n', m.index));
    if (/skeleton|placeholder|loading|shimmer/i.test(line)) continue;
    add(m.index, 'gimmick-motion', 'Decorative pulse (AI-style glow, pulsing dot or badge): keep pulse for loading placeholders only', line, 'info');
  }

  let index = 0;
  for (const line of text.split('\n')) {
    const isHeadingOrButton = /^\s{0,3}#{1,6}\s|<h[1-6]\b|<button\b|<Button\b/.test(line);
    if (isHeadingOrButton && EMOJI.test(line)) {
      findings.push({ file, line: lineOf(text, index), rule: 'decorative-emoji', level: 'warning', message: 'Emoji in a heading or button: use words or an icon from the system', excerpt: line.trim().slice(0, 120) });
    }
    const triad = line.match(TRIAD);
    if (triad) {
      findings.push({ file, line: lineOf(text, index), rule: 'triad', level: 'warning', message: 'Adjective triad ("Simple. Fast. Secure."): replace with a concrete fact', excerpt: triad[0] });
    }
    index += line.length + 1;
  }

  return findings;
}

export function parseLanguages(argv) {
  const flag = argv.find((a) => a.startsWith('--lang'));
  if (!flag) return Object.keys(LEXICONS);
  const value = flag.includes('=') ? flag.split('=')[1] : argv[argv.indexOf(flag) + 1];
  const requested = String(value ?? '').split(',').map((l) => l.trim().toLowerCase()).filter(Boolean);
  const unknown = requested.filter((l) => !LEXICONS[l]);
  if (unknown.length) console.error(`No lexicon for: ${unknown.join(', ')} (available: ${Object.keys(LEXICONS).join(', ')})`);
  return requested.filter((l) => LEXICONS[l]);
}

if (isMainScript(import.meta.url)) {
  const argv = process.argv.slice(2);
  // `--lang en,es` takes the next argument as its value; `--lang=en,es` does not.
  const langValueIndex = argv.indexOf('--lang') === -1 ? -1 : argv.indexOf('--lang') + 1;
  const paths = argv.filter((a, i) => !a.startsWith('--') && i !== langValueIndex);
  const json = argv.includes('--json');
  const noFail = argv.includes('--no-fail');
  if (paths.length === 0) {
    console.error('Usage: node slop.mjs <files or folders> [--lang en,es] [--json] [--no-fail]');
    process.exit(2);
  }
  const languages = parseLanguages(argv);
  const findings = collect(paths, EXTENSIONS).flatMap((file) => analyzeText(readFileSync(file, 'utf8'), file, languages));
  print(findings, { json, title: 'Slop' });
  process.exit(findings.some((f) => f.level !== 'info') && !noFail ? 1 : 0);
}
