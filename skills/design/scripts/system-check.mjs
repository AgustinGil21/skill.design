#!/usr/bin/env node
// Checks that interfaces are built from tokens, small components and few families: hard-coded colors and arbitrary
// values in components, magic numbers in inline styles, oversized components, icons drawn by hand, more than two icon
// families and more than two typefaces. No dependencies.
// Usage: node system-check.mjs <files or folders> [--json] [--no-fail]
// Token, theme and palette files are exempt: raw values belong there. Every finding needs judgment
// (see knowledge/35-components-tokens-and-code-quality.md).

import { readFileSync } from 'node:fs';
import { basename, extname } from 'node:path';
import { collect, lineOf, print } from './lib/files.mjs';
import { isMainScript } from './lib/main.mjs';

const EXTENSIONS = new Set(['.tsx', '.jsx', '.ts', '.js', '.html', '.vue', '.svelte', '.astro', '.css', '.scss', '.dart', '.swift', '.kt']);
// Scripts and HTML are read only for icon and font families, not for the per-file checks.
const FAMILY_ONLY = new Set(['.ts', '.js', '.html']);
const COMPONENT = new Set(['.tsx', '.jsx', '.vue', '.svelte', '.astro', '.dart', '.swift', '.kt']);
const EXEMPT = /(?:^|[-_.])(?:tokens?|theme|themes|colors?|palette|variables|design-system|tailwind\.config)(?:[-_.]|$)/i;
const SKIP = /\.(?:test|spec|stories)\.|(?:^|\/)(?:__tests__|tests?|fixtures|mocks?)\//;

export const LARGE_COMPONENT_LINES = 300;
export const HUGE_COMPONENT_LINES = 500;

const COLOR = /#[0-9a-fA-F]{8}\b|#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b|\b(?:rgba?|hsla?|oklch)\([^)]*\)/g;

// Icon libraries and how to name the family each import belongs to.
const ICON_SOURCES = [
  [/^lucide-(?:react|vue-next|svelte|angular|react-native)$|^@lucide\//, () => 'Lucide'],
  [/^@heroicons\//, () => 'Heroicons'],
  [/^@tabler\/icons/, () => 'Tabler'],
  [/^@phosphor-icons\/|^phosphor-react$/, () => 'Phosphor'],
  [/^@radix-ui\/react-icons$/, () => 'Radix Icons'],
  [/^@mui\/icons-material/, () => 'Material Icons'],
  [/^@material-symbols\/|^material-symbols$/, () => 'Material Symbols'],
  [/^@fortawesome\//, () => 'Font Awesome'],
  [/^react-feather$/, () => 'Feather'],
  [/^@remixicon\/|^remixicon$/, () => 'Remix Icon'],
  [/^@iconify\//, () => 'Iconify (check the sets used)'],
  [/^react-icons\/(\w+)$/, (m) => `react-icons/${m[1]}`],
  [/^@expo\/vector-icons$|^react-native-vector-icons/, (m, names) => names.map((n) => `vector-icons ${n}`)],
];

export function iconFamilies(text) {
  const families = new Set();
  for (const m of text.matchAll(/import\s+(?:\{([^}]*)\}|(\w+))[^'"]*from\s+['"]([^'"]+)['"]/g)) {
    const source = m[3];
    for (const [pattern, name] of ICON_SOURCES) {
      const match = source.match(pattern);
      if (!match) continue;
      const names = (m[1] || m[2] || '').split(',').map((n) => n.trim().split(/\s+as\s+/)[0]).filter(Boolean);
      for (const family of [name(match, names)].flat()) families.add(family);
    }
  }
  return families;
}

// Generic families and system fonts used as defaults or fallbacks are not chosen typefaces.
const GENERIC_FONTS = /^(?:inherit|initial|unset|serif|sans-serif|monospace|system-ui|ui-\w+|-apple-system|BlinkMacSystemFont|cursive|fantasy|emoji|math|Arial|Helvetica(?: Neue)?|Georgia|Times(?: New Roman)?|Verdana|Tahoma|Segoe UI|Roboto|San Francisco|SF Pro(?: \w+)?)$/i;
// Code fonts do not count toward the two-typeface limit.
const CODE_FONT = /mono|code|courier|consolas|menlo/i;

export function fontFamilies(text) {
  const fonts = new Set();
  const addFont = (raw) => {
    // "Inter Variable" and "Inter" are the same family.
    const name = raw.split(',')[0].trim().replace(/['"]/g, '').replace(/\s+(?:Variable|VF)$/i, '');
    if (name && !name.startsWith('var(') && !GENERIC_FONTS.test(name) && !CODE_FONT.test(name)) fonts.add(name);
  };
  for (const m of text.matchAll(/font-family\s*:\s*([^;}{]+)/g)) addFont(m[1]);
  for (const m of text.matchAll(/--[\w-]*font[\w-]*\s*:\s*([^;}{]+)/g)) addFont(m[1]);
  for (const m of text.matchAll(/fonts\.googleapis\.com\/css2?\?([^"'\s)]+)/g)) {
    for (const f of m[1].matchAll(/family=([^:&]+)/g)) addFont(decodeURIComponent(f[1]).replace(/\+/g, ' '));
  }
  for (const m of text.matchAll(/['"]@fontsource(?:-variable)?\/([\w-]+)/g)) {
    addFont(m[1].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()));
  }
  for (const m of text.matchAll(/fontFamily\s*[:=]\s*['"]([^'"]+)['"]/g)) addFont(m[1]);
  for (const m of text.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]next\/font\/google['"]/g)) {
    for (const f of m[1].split(',')) if (f.trim()) addFont(f.trim().replace(/_/g, ' '));
  }
  return fonts;
}

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

  // Icons drawn by hand: small inline SVGs with paths written inside components.
  if (COMPONENT.has(ext) && !/logo|brand|illustration|flag/i.test(file)) {
    for (const m of text.matchAll(/<svg\b[^>]*>[\s\S]*?<\/svg>/g)) {
      const box = m[0].match(/viewBox=["'{]?\s*0\s+0\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)/);
      const small = box ? Number(box[1]) <= 48 && Number(box[2]) <= 48 : /\b(?:width|height)=["'{]?(?:1\d|2\d|3[0-2])\b/.test(m[0]);
      // Multi-color marks are logos (from their owners); gradients and patterns are illustrations.
      const fills = new Set([...m[0].matchAll(/fill=["']#([0-9a-fA-F]{3,8})/g)].map((f) => f[1].toLowerCase()));
      const illustration = fills.size >= 2 || /<(?:linearGradient|radialGradient|pattern|image)\b/.test(m[0]);
      if (small && !illustration && /<path\b/.test(m[0])) {
        add(m.index, 'handmade-icon', 'Icon drawn by hand: use the project\'s icon family instead of writing SVG paths', m[0].slice(0, 80));
      }
    }
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
  const icons = new Map();
  const fonts = new Map();
  for (const file of collect(paths, EXTENSIONS)) {
    if (SKIP.test(file)) continue;
    const text = readFileSync(file, 'utf8');
    for (const family of iconFamilies(text)) if (!icons.has(family)) icons.set(family, file);
    for (const font of fontFamilies(text)) if (!fonts.has(font)) fonts.set(font, file);
    if (EXEMPT.test(basename(file)) || FAMILY_ONLY.has(extname(file).toLowerCase())) continue;
    findings.push(...analyzeFile(text, file));
  }
  const summary = (map) => [...map.entries()].map(([name, file]) => `${name} (${file})`).join(', ');
  if (icons.size > 2) {
    findings.push({ file: '(project)', line: 0, rule: 'icon-families', level: 'warning', message: `${icons.size} icon families: keep one, two at most`, excerpt: summary(icons) });
  } else if (icons.size === 2) {
    findings.push({ file: '(project)', line: 0, rule: 'icon-families', level: 'info', message: 'Two icon families: fine if each has a clear role; prefer one', excerpt: summary(icons) });
  }
  if (fonts.size > 2) {
    findings.push({ file: '(project)', line: 0, rule: 'font-families', level: 'warning', message: `${fonts.size} typefaces (code fonts excluded): keep two at most and build contrast with weights and sizes`, excerpt: summary(fonts) });
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
