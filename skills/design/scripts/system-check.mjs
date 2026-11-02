#!/usr/bin/env node
// Checks that interfaces are built from tokens, small components and few families: hard-coded colors and arbitrary
// values in components, magic numbers in inline styles, oversized components, icons drawn by hand, more than two icon
// families, more than two typefaces, comments inside markup or restating the code, and version ranges in package.json.
// No dependencies.
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


// Tailwind v4 spacing utilities are multiples of --spacing (0.25rem = 4px by default), so `h-[256px]` is `h-64`.
const SPACING_UTILITY = /^(-?)(p[xytrblse]?|m[xytrblse]?|gap(?:-[xy])?|space-[xy]|w|h|min-w|min-h|max-h|size|top|right|bottom|left|inset(?:-[xy])?|translate-[xy])-\[(\d+(?:\.\d+)?)(px|rem)\]$/;
export function spacingScaleClass(cls) {
  const m = cls.match(SPACING_UTILITY);
  if (!m) return null;
  const px = m[4] === 'rem' ? Number(m[3]) * 16 : Number(m[3]);
  const steps = px / 4;
  if (!Number.isFinite(steps) || steps <= 0 || !Number.isInteger(steps * 4)) return null;
  return `${m[1]}${m[2]}-${steps}`;
}

// Comments inside markup label parts that should be components; restating and change-log comments are noise
// (see knowledge/engineering/02-components-and-comments.md).
const RESTATING = /^\s*(?:\/\/|\/\*+|\*)\s*(?:imports?\b|import (?:react|components|hooks)|state (?:for|to)\b|handle(?:s|r)? (?:the )?\w+ (?:click|change|submit)|render(?:s|ing)? (?:the )?(?:component|jsx|ui|list|items)|return(?:s)? (?:the )?(?:jsx|component|markup)|loop (?:through|over)|map(?:ping)? (?:over|through)|(?:added|updated|changed|fixed|modified|refactored)\b.*(?:as requested|per (?:your|the) request|now\b)|as requested\b|todo:? implement|feel free to|you can (?:customize|change|adjust))/i;
export function commentFindings(text, ext) {
  const found = [];
  if (ext === '.tsx' || ext === '.jsx') {
    for (const m of text.matchAll(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g)) {
      found.push({ index: m.index, rule: 'markup-comment', level: 'warning', message: 'Comment inside JSX: a part that needs a label should be its own component', excerpt: m[0] });
    }
  }
  if (ext === '.vue' || ext === '.svelte' || ext === '.astro') {
    for (const m of text.matchAll(/<!--[\s\S]*?-->/g)) {
      found.push({ index: m.index, rule: 'markup-comment', level: 'warning', message: 'Comment inside the template: a part that needs a label should be its own component', excerpt: m[0] });
    }
  }
  let index = 0;
  for (const line of text.split('\n')) {
    if (RESTATING.test(line)) {
      found.push({ index, rule: 'restating-comment', level: 'warning', message: 'Comment that restates the code, narrates a change or addresses the reader: delete it; comments explain why', excerpt: line });
    }
    index += line.length + 1;
  }
  return found;
}

// Ranges (^, ~, *, x, >=) let unreviewed versions in; exact versions plus an update tool keep changes reviewable
// (see knowledge/engineering/06-tooling-and-supply-chain.md).
export function packageRanges(text, file) {
  let pkg;
  try { pkg = JSON.parse(text); } catch { return []; }
  const findings = [];
  for (const field of ['dependencies', 'devDependencies', 'optionalDependencies']) {
    for (const [name, version] of Object.entries(pkg[field] ?? {})) {
      if (typeof version !== 'string' || /^(?:workspace|catalog|link|file|npm):/.test(version)) continue;
      if (/^[\^~*]|^>=?|\bx\b|\|\||^latest$/.test(version)) {
        const index = text.indexOf(`"${name}"`);
        findings.push({ file, line: lineOf(text, Math.max(0, index)), rule: 'version-range', level: 'warning', message: `${field}: "${name}" uses a range; pin an exact version and update through a tool`, excerpt: `"${name}": "${version}"` });
      }
    }
  }
  return findings;
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
    const onScale = spacingScaleClass(m[0]);
    if (onScale) add(m.index, 'arbitrary-on-scale', `Arbitrary value that is already on the spacing scale: use ${onScale}`, m[0]);
    else add(m.index, 'arbitrary-value', 'Arbitrary size or spacing: use the scale, or add a token if the value is needed', m[0], 'info');
  }

  if (COMPONENT.has(ext)) {
    for (const finding of commentFindings(text, ext)) add(finding.index, finding.rule, finding.message, finding.excerpt, finding.level);
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
  for (const file of collect(paths, new Set([...EXTENSIONS, '.json']))) {
    if (SKIP.test(file)) continue;
    if (extname(file) === '.json') {
      if (basename(file) === 'package.json') findings.push(...packageRanges(readFileSync(file, 'utf8'), file));
      continue;
    }
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
