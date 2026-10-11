#!/usr/bin/env node
// Static accessibility check for HTML, JSX/TSX, Astro, Vue, Svelte and CSS. No dependencies.
// Usage: node a11y-static.mjs <files or folders> [--json] [--no-fail]
// Finds frequent problems; it does not replace testing with a keyboard, a screen reader and tools such as axe.

import { readFileSync } from 'node:fs';
import { extname } from 'node:path';
import { collect, lineOf, print } from './lib/files.mjs';
import { isMainScript } from './lib/main.mjs';

const MARKUP = new Set(['.html', '.htm', '.jsx', '.tsx', '.astro', '.vue', '.svelte']);
const STYLES = new Set(['.css', '.scss']);
const EXTENSIONS = new Set([...MARKUP, ...STYLES]);

// Link texts that say nothing about the destination, per language. Add languages here.
const VAGUE_LINK_TEXT = {
  en: ['click here', 'here', 'read more', 'more', 'learn more', 'this link'],
  es: ['click aqu[ií]', 'haz clic aqu[ií]', 'hac[eé] clic aqu[ií]', 'aqu[ií]', 'leer m[aá]s', 'm[aá]s', 'ver m[aá]s'],
  pt: ['clique aqui', 'aqui', 'leia mais', 'saiba mais', 'mais'],
  fr: ['cliquez ici', 'ici', 'lire la suite', 'en savoir plus', 'plus'],
  de: ['hier klicken', 'hier', 'mehr lesen', 'weiterlesen', 'mehr erfahren', 'mehr'],
};
const VAGUE_LINK = new RegExp(`<a\\b[^>]*>\\s*(${Object.values(VAGUE_LINK_TEXT).flat().join('|')})\\s*<\\/a>`, 'giu');

const hasAttribute = (attributes, name) => new RegExp(`(?:^|\\s)${name}\\s*=`, 'i').test(attributes);
const attributeValue = (attributes, name) => {
  const m = attributes.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\\{([^}]*)\\})`, 'i'));
  return m ? (m[1] ?? m[2] ?? m[3] ?? '') : null;
};
const hasAccessibleName = (attributes) => ['aria-label', 'aria-labelledby', 'title'].some((n) => hasAttribute(attributes, n));
// Components that forward props ({...props}): the name or label may come from whoever uses them.
const forwardsProps = (attributes) => /\{\s*\.\.\.\w+\s*\}/.test(attributes);

// Reads opening tags while respecting quotes and JSX braces (so `onChange={(e) => …}` does not end the tag).
// Returns match-shaped arrays: [whole, name, attributes] plus index and end.
function openingTags(text, names) {
  const result = [];
  const start = new RegExp(`<(${names})(?=[\\s/>])`, 'g');
  for (const m of text.matchAll(start)) {
    let i = m.index + m[0].length;
    let braces = 0;
    let quote = null;
    for (; i < text.length; i++) {
      const c = text[i];
      if (quote) {
        if (c === quote) quote = null;
        continue;
      }
      if (c === '"' || c === "'" || (c === '`' && braces > 0)) quote = c;
      else if (c === '{') braces++;
      else if (c === '}') braces = Math.max(0, braces - 1);
      else if (c === '>' && braces === 0) break;
    }
    const whole = text.slice(m.index, i + 1);
    const attributes = text.slice(m.index + m[0].length, i).replace(/\/$/, '');
    const match = [whole, m[1], attributes];
    match.index = m.index;
    match.end = i + 1;
    result.push(match);
  }
  return result;
}

// Visible text inside an element: strips tags and comments; {…} expressions count as text.
function innerText(html) {
  const withoutSvg = html.replace(/<svg[\s\S]*?<\/svg>/gi, '');
  if (/class(?:Name)?\s*=\s*["'][^"']*\b(?:sr-only|visually-hidden)\b/.test(withoutSvg)) return 'visually-hidden-text';
  const withoutComments = withoutSvg.replace(/<!--[\s\S]*?-->|\{\/\*[\s\S]*?\*\/\}/g, '');
  const withExpressions = withoutComments.replace(/\{[^{}]*\}/g, ' expr ');
  return withExpressions.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').trim();
}

export function analyzeMarkup(text, file) {
  const findings = [];
  const add = (index, level, rule, message, excerpt = '') =>
    findings.push({ file, line: lineOf(text, index), level, rule, message, excerpt: excerpt.replace(/\s+/g, ' ').trim().slice(0, 120) });

  // Images without alt (1.1.1)
  for (const m of openingTags(text, 'img|Image')) {
    if (!hasAttribute(m[2], 'alt') && !/aria-hidden\s*=\s*["{]?true/.test(m[2]) && !/role\s*=\s*["']presentation/.test(m[2])) {
      add(m.index, 'error', '1.1.1 image-without-alt', 'Image without alt: describe what it adds, or alt="" if it is decorative', m[0]);
    }
  }

  // Buttons and links without an accessible name (4.1.2, 2.4.4)
  for (const m of openingTags(text, 'button|Button|a')) {
    const [opening, tag, attributes] = m;
    if (/\/>$/.test(opening)) continue;
    const closing = text.indexOf(`</${tag}>`, m.end);
    if (closing < 0) continue;
    const inner = text.slice(m.end, closing);
    const whole = opening + inner;
    if (tag === 'a' && !hasAttribute(attributes, 'href')) continue;
    if (hasAccessibleName(attributes)) continue;
    if (innerText(inner) === '') {
      const rule = tag === 'a' ? '2.4.4 link-without-name' : '4.1.2 button-without-name';
      if (forwardsProps(attributes)) {
        add(m.index, 'info', rule, 'No text of its own; forwards props: check that every use passes text or aria-label', whole);
      } else {
        add(m.index, 'error', rule, 'No text and no aria-label: a screen reader cannot name it', whole);
      }
    }
  }

  // Vague link text (2.4.4)
  for (const m of text.matchAll(VAGUE_LINK)) {
    add(m.index, 'warning', '2.4.4 vague-link', `Link text "${m[1]}" without context: say where it leads`, m[0]);
  }

  // Fields without a label (1.3.1, 4.1.2)
  // Raw values of for/htmlFor and id (including dynamic ids such as {`field-${i}`}).
  const VALUE = '("[^"]*"|\'[^\']*\'|\\{\\s*\\x60[^\\x60]*\\x60\\s*\\}|\\{[^{}]*\\})';
  const normalize = (v) => v.replace(/^\{\s*|\s*\}$/g, '').replace(/^["'\x60]|["'\x60]$/g, '').trim();
  const labelTargets = new Set([...text.matchAll(new RegExp('(?:\\bfor|htmlFor)\\s*=\\s*' + VALUE, 'g'))].map((x) => normalize(x[1])));
  for (const m of openingTags(text, 'input|select|textarea|Input|Textarea')) {
    const attributes = m[2];
    const type = (attributeValue(attributes, 'type') || '').toLowerCase();
    if (['hidden', 'submit', 'button', 'reset', 'image'].includes(type)) continue;
    if (hasAccessibleName(attributes)) continue;
    if (/(?:^|\s)hidden(?:\s|=|$)/.test(attributes) || /aria-hidden\s*=\s*["{]?true/.test(attributes)) continue;
    const id = attributes.match(new RegExp('(?:^|\\s)id\\s*=\\s*' + VALUE));
    if (id && labelTargets.has(normalize(id[1]))) continue;
    const before = text.slice(0, m.index);
    if (before.lastIndexOf('<label') > before.lastIndexOf('</label>')) continue;
    if (/^[A-Z]/.test(m[1]) && hasAttribute(attributes, 'label')) continue;
    if (forwardsProps(attributes)) {
      add(m.index, 'info', '1.3.1 field-without-label', 'Field component that forwards props: check the label at every use', m[0]);
      continue;
    }
    const placeholderOnly = hasAttribute(attributes, 'placeholder');
    add(m.index, 'error', '1.3.1 field-without-label',
      placeholderOnly ? 'Field with a placeholder but no label: a placeholder does not replace a label' : 'Field without an associated label (label, aria-label or aria-labelledby)', m[0]);
  }

  // Headings: order and number of h1 (1.3.1, 2.4.6)
  const levels = [...text.matchAll(/<h([1-6])\b/gi)].map((x) => ({ n: +x[1], i: x.index }));
  const h1 = levels.filter((x) => x.n === 1);
  if (h1.length > 1 && /\.(html?|astro)$/i.test(file)) {
    add(h1[1].i, 'warning', '1.3.1 multiple-h1', `There are ${h1.length} h1 elements on the page: use one for the main title`);
  }
  for (let k = 1; k < levels.length; k++) {
    if (levels[k].n > levels[k - 1].n + 1) {
      add(levels[k].i, 'warning', '1.3.1 skipped-heading', `Jumps from h${levels[k - 1].n} to h${levels[k].n}: do not skip levels`);
    }
  }

  // Document language (3.1.1)
  for (const m of text.matchAll(/<html\b([^>]*)>/gi)) {
    if (!hasAttribute(m[1], 'lang')) {
      add(m.index, 'error', '3.1.1 missing-lang', 'Missing lang on <html> (for example lang="en", lang="es-AR", lang="ar" dir="rtl")', m[0]);
    }
  }

  // Blocked zoom (1.4.4)
  for (const m of text.matchAll(/<meta\b[^>]*name\s*=\s*["']viewport["'][^>]*>/gi)) {
    if (/user-scalable\s*=\s*(?:no|0)|maximum-scale\s*=\s*1(?:\.0)?\b/i.test(m[0])) {
      add(m.index, 'error', '1.4.4 zoom-blocked', 'The viewport prevents zooming: remove user-scalable=no and maximum-scale=1', m[0]);
    }
  }

  // Positive tabindex (2.4.3)
  for (const m of text.matchAll(/tab[iI]ndex\s*=\s*(?:"|'|\{)\s*([1-9]\d*)/g)) {
    add(m.index, 'error', '2.4.3 positive-tabindex', 'A positive tabindex changes the focus order: use 0 or -1', m[0]);
  }

  // Non-interactive elements with click handlers (2.1.1, 4.1.2)
  for (const m of openingTags(text, 'div|span|li|td|img')) {
    const attributes = m[2];
    if (!/\bon(?:Click|click)\s*=/.test(attributes)) continue;
    const hasRole = hasAttribute(attributes, 'role');
    const hasTab = /tab[iI]ndex/.test(attributes);
    if (!hasRole && !hasTab) {
      add(m.index, 'error', '2.1.1 click-without-keyboard', `<${m[1]}> with a click handler: use <button> (or role, tabindex and keyboard handling)`, m[0]);
    } else if (!hasRole || !hasTab) {
      add(m.index, 'warning', '2.1.1 click-without-keyboard', `<${m[1]}> with a click handler and only ${hasRole ? 'role' : 'tabindex'}: confirm the action also works with a keyboard`, m[0]);
    }
  }

  // Autoplaying video with sound (1.4.2)
  for (const m of openingTags(text, 'video')) {
    if (/\bautoplay\b|autoPlay/i.test(m[2]) && !/\bmuted\b/i.test(m[2])) {
      add(m.index, 'error', '1.4.2 video-with-sound', 'Autoplaying video without muted: do not play sound automatically', m[0]);
    }
  }

  // iframes without a title (4.1.2)
  for (const m of openingTags(text, 'iframe')) {
    if (!hasAttribute(m[2], 'title')) add(m.index, 'warning', '4.1.2 iframe-without-title', 'iframe without a title that describes its content', m[0]);
  }

  // Focus removed with utility classes (2.4.7)
  for (const m of text.matchAll(/class(?:Name)?\s*=\s*["'`]([^"'`]*\boutline-none\b[^"'`]*)["'`]/g)) {
    const tag = text.slice(text.lastIndexOf('<', m.index), m.index);
    if (/tab[iI]ndex\s*=\s*(?:"-1"|'-1'|\{-1\})/.test(tag)) continue;
    if (!/focus-visible:|focus:(?:ring|outline|border)/.test(m[1])) {
      add(m.index, 'error', '2.4.7 invisible-focus', 'outline-none without an alternative focus style (focus-visible:ring…)', m[1]);
    }
  }

  return findings;
}

export function analyzeStyles(text, file) {
  const findings = [];
  const hasFocusVisible = /:focus-visible/.test(text);
  for (const m of text.matchAll(/outline\s*:\s*(?:none|0)\s*[;}]/g)) {
    if (!hasFocusVisible) {
      findings.push({ file, line: lineOf(text, m.index), level: 'error', rule: '2.4.7 invisible-focus', message: 'outline: none with no :focus-visible rule in the file', excerpt: m[0] });
    }
  }
  if (/@keyframes|animation\s*:|transition\s*:/.test(text) && !/prefers-reduced-motion/.test(text)) {
    const i = text.search(/@keyframes|animation\s*:/);
    if (i >= 0) {
      findings.push({ file, line: lineOf(text, i), level: 'warning', rule: '2.3.3 no-reduced-motion', message: 'Animations without @media (prefers-reduced-motion: reduce) in the file', excerpt: '' });
    }
  }
  return findings;
}

if (isMainScript(import.meta.url)) {
  const paths = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  const json = process.argv.includes('--json');
  const noFail = process.argv.includes('--no-fail');
  if (paths.length === 0) {
    console.error('Usage: node a11y-static.mjs <files or folders> [--json] [--no-fail]');
    process.exit(2);
  }
  const findings = collect(paths, EXTENSIONS).flatMap((file) => {
    const text = readFileSync(file, 'utf8');
    return STYLES.has(extname(file).toLowerCase()) ? analyzeStyles(text, file) : analyzeMarkup(text, file);
  });
  print(findings, { json, title: 'Accessibility (static)' });
  if (!json && findings.length > 0) console.log('\nReminder: this does not replace testing with a keyboard, a screen reader and zoom.');
  process.exit(findings.some((f) => f.level === 'error') && !noFail ? 1 : 0);
}
