#!/usr/bin/env node
// Checks that interfaces are built from tokens and small components: hard-coded colors and arbitrary values in
// components, magic numbers in inline styles, and component files large enough to deserve splitting. No dependencies.
// Usage: node system-check.mjs <files or folders> [--json] [--no-fail]
// Token, theme and palette files are exempt: raw values belong there. Every finding needs judgment
// (see knowledge/35-components-tokens-and-code-quality.md).

import { readFileSync } from 'node:fs';
import { basename, extname } from 'node:path';
import { collect, lineOf, print } from './lib/files.mjs';
import { isMainScript } from './lib/main.mjs';

const EXTENSIONS = new Set(['.tsx', '.jsx', '.vue', '.svelte', '.astro', '.css', '.scss', '.dart', '.swift', '.kt']);
const COMPONENT = new Set(['.tsx', '.jsx', '.vue', '.svelte', '.astro', '.dart', '.swift', '.kt']);
const EXEMPT = /(?:^|[-_.])(?:tokens?|theme|themes|colors?|palette|variables|design-system|tailwind\.config)(?:[-_.]|$)/i;
const SKIP = /\.(?:test|spec|stories)\.|(?:^|\/)(?:__tests__|tests?|fixtures|mocks?)\//;

export const LARGE_COMPONENT_LINES = 300;
export const HUGE_COMPONENT_LINES = 500;

const COLOR = /#[0-9a-fA-F]{8}\b|#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b|\b(?:rgba?|hsla?|oklch)\([^)]*\)/g;

export function analyzeFile(text, file) {
  const findings = [];
  const ext = extname(file).toLowerCase();
  const add = (index, rule, message, excerpt, level = 'warning') =>
    findings.push({ file, line: lineOf(text, index), rule, level, message, excerpt: excerpt.trim().slice(0, 120) });

  if (ext === '.css' || ext === '.scss') {
    // Raw colors are fine inside custom property definitions (that is where tokens live), not in properties.
    for (const m of text.matchAll(/(?:^|[{;])\s*(?!--)([a-z-]+)\s*:\s*([^;{}]*)/gim)) {
      if (COLOR.test(m[2])) add(m.index, 'hardcoded-color', `"${m[1]}" uses a raw color: reference a token (var(--…))`, m[0]);
      COLOR.lastIndex = 0;
    }
    return findings;
  }

  // Colors written directly in components (JSX, templates, inline styles, Flutter/Compose/SwiftUI code).
  for (const m of text.matchAll(COLOR)) {
    const lineStart = text.lastIndexOf('\n', m.index) + 1;
    const line = text.slice(lineStart, text.indexOf('\n', m.index) === -1 ? undefined : text.indexOf('\n', m.index));
    if (/^\s*(?:\/\/|\*|\/\*)/.test(line) || /--[\w-]+\s*:/.test(line)) continue;
    // Inside a Tailwind arbitrary value it is reported once, as arbitrary-color.
    if (text.slice(Math.max(0, m.index - 2), m.index).endsWith('-[')) continue;
    add(m.index, 'hardcoded-color', 'Raw color in a component: use a semantic token', line);
  }
  for (const m of text.matchAll(/\bColor\(\s*0x[0-9a-fA-F]{8}\s*\)|\bColor\(\s*red:/g)) {
    add(m.index, 'hardcoded-color', 'Raw color in a component: define it in the theme and reference it', m[0]);
  }

  // Tailwind arbitrary values: colors and sizes that bypass the theme.
  for (const m of text.matchAll(/\b(?:bg|text|border|from|via|to|fill|stroke|ring|outline|decoration|shadow|accent|caret)-\[(?:#|rgb|hsl|oklch|color:)[^\]]*\]/g)) {
    add(m.index, 'arbitrary-color', 'Arbitrary color value: add it to the theme as a token', m[0]);
  }
  for (const m of text.matchAll(/\b(?:rounded(?:-[trblse]{1,2})?|p[xytrblse]?|m[xytrblse]?|gap(?:-[xy])?|space-[xy]|w|h|min-w|min-h|max-w|max-h|size|text|leading|tracking|top|right|bottom|left|inset(?:-[xy])?|translate-[xy]|duration|delay|z)-\[-?\d[^\]]*\]/g)) {
    add(m.index, 'arbitrary-value', 'Arbitrary size or spacing: use the scale, or add a token if the value is needed', m[0], 'info');
  }

  // Magic numbers in inline styles (React style objects, Vue/Svelte style attributes).
  for (const m of text.matchAll(/\b(padding|margin|borderRadius|border-radius|gap|fontSize|font-size|lineHeight|letterSpacing)\s*:\s*['"]?\d+(?:\.\d+)?(?:px|rem)?['"]?/g)) {
    if (/:\s*['"]?0(?:px)?['"]?$/.test(m[0])) continue;
    add(m.index, 'inline-magic-number', `Inline "${m[1]}" value: use a spacing, radius or type token`, m[0], 'info');
  }

  if (COMPONENT.has(ext)) {
    const lines = text.split('\n').length;
    if (lines > HUGE_COMPONENT_LINES) {
      add(0, 'large-component', `${lines} lines: split into smaller components with one responsibility each`, basename(file));
    } else if (lines > LARGE_COMPONENT_LINES) {
      add(0, 'large-component', `${lines} lines: consider whether parts have their own name, states or reuse`, basename(file), 'info');
    }
  }
  return findings;
}

export function checkPaths(paths) {
  const findings = [];
  for (const file of collect(paths, EXTENSIONS)) {
    if (EXEMPT.test(basename(file)) || SKIP.test(file)) continue;
    findings.push(...analyzeFile(readFileSync(file, 'utf8'), file));
  }
  return findings;
}

if (isMainScript(import.meta.url)) {
  const args = process.argv.slice(2);
  const paths = args.filter((a) => !a.startsWith('--'));
  if (paths.length === 0) {
    console.error('Usage: node system-check.mjs <files or folders> [--json] [--no-fail]');
    process.exit(1);
  }
  const findings = checkPaths(paths);
  print(findings, { json: args.includes('--json'), title: 'System check (tokens and component size)' });
  if (!args.includes('--no-fail') && findings.some((f) => f.level === 'warning')) process.exit(1);
}
