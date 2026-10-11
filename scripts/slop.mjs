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

const EXTENSIONS = new Set(['.html', '.htm', '.jsx', '.tsx', '.js', '.ts', '.astro', '.vue', '.svelte', '.md', '.mdx', '.css', '.scss', '.json', '.txt']);

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
