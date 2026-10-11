#!/usr/bin/env node
// Collects design evidence from a project: what the product says it is, its stack, languages, brand assets,
// fonts, colors, tokens, visible copy and domain hints. No dependencies.
// Usage: node design-scan.mjs [project folder] [--json]
// It gathers evidence; it does not decide. Every inference still needs reading and judgment (workflows/start.md).

import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative, basename, extname } from 'node:path';
import { collect } from './lib/files.mjs';
import { isMainScript } from './lib/main.mjs';

const MAX_FILES = 5000;
const MAX_BYTES = 400_000;
const CODE = new Set(['.html', '.htm', '.jsx', '.tsx', '.js', '.ts', '.mjs', '.astro', '.vue', '.svelte', '.css', '.scss', '.dart', '.swift', '.kt']);
const ASSETS = new Set(['.svg', '.png', '.jpg', '.jpeg', '.webp', '.ico', '.avif']);
const DOCS = /^(design|brand|product|style-?guide|brand-?guidelines|design-?context|voice|tone)[\w-]*\.md$/i;

// Words that hint at a product domain. Raw signals only: the product-researcher agent interprets them against the
// screens, data model and copy (a "medical" form in a sports club app does not make it a health product), or asks.
// Lists cover several languages because products are written in many; extend them freely.
export const DOMAINS = {
  'kids and family': ['kids', 'children', 'child', 'toddler', 'parents', 'niños', 'niñas', 'infantil', 'crianças', 'enfants', 'kinder'],
  'education': ['learn', 'lesson', 'course', 'student', 'teacher', 'school', 'quiz', 'curso', 'alumno', 'estudiante', 'escuela', 'aluno', 'élève'],
  'personal finance and banking': ['bank', 'budget', 'wallet', 'savings', 'loan', 'credit card', 'transfer', 'banco', 'presupuesto', 'billetera', 'ahorro', 'préstamo', 'banque'],
  'business finance': ['invoice', 'invoicing', 'expense', 'payroll', 'accounting', 'tax', 'factura', 'gastos', 'contabilidad', 'nómina', 'impuesto', 'fatura'],
  'health and care': ['patient', 'clinic', 'doctor', 'health', 'medical', 'therapy', 'paciente', 'clínica', 'salud', 'médico', 'saúde', 'santé'],
  'mental health and wellbeing': ['meditation', 'mindfulness', 'mood', 'anxiety', 'wellbeing', 'meditación', 'ansiedad', 'bienestar'],
  'fitness and sport': ['workout', 'fitness', 'training', 'running', 'gym', 'entrenamiento', 'gimnasio', 'treino'],
  'games': ['game', 'player', 'level', 'score', 'leaderboard', 'quest', 'unity', 'phaser', 'godot', 'juego', 'jugador', 'nivel', 'jogo'],
  'AI tools': ['ai', 'llm', 'gpt', 'prompt', 'agent', 'agents', 'openai', 'anthropic', 'claude', 'model', 'ia', 'agente'],
  'developer tools': ['cli', 'sdk', 'api key', 'webhook', 'deploy', 'repository', 'terminal', 'developer', 'desarrolladores'],
  'B2B operations and admin': ['dashboard', 'admin', 'crm', 'erp', 'inventory', 'tenant', 'workspace', 'team', 'gestión', 'inventario', 'equipo'],
  'commerce': ['cart', 'checkout', 'shop', 'store', 'product', 'order', 'shipping', 'carrito', 'tienda', 'pedido', 'envío', 'loja'],
  'media and content': ['video', 'podcast', 'article', 'editor', 'publish', 'creator', 'stream', 'artículo', 'publicar', 'creador'],
  'social and community': ['friends', 'follow', 'feed', 'community', 'chat', 'message', 'amigos', 'seguir', 'comunidad', 'mensaje'],
  'travel and hospitality': ['booking', 'hotel', 'flight', 'trip', 'travel', 'reserva', 'vuelo', 'viaje', 'viagem', 'voyage'],
  'food': ['recipe', 'restaurant', 'menu', 'delivery', 'food', 'receta', 'restaurante', 'comida', 'receita'],
  'clubs, memberships and communities': ['club', 'member', 'members', 'membership', 'socio', 'socios', 'cuota', 'afiliado', 'membresía', 'sócio'],
  'public sector and nonprofit': ['government', 'citizen', 'donate', 'donation', 'nonprofit', 'gobierno', 'ciudadano', 'donar', 'ong'],
};

const STACK = [
  ['next', 'Next.js'], ['astro', 'Astro'], ['react', 'React'], ['vue', 'Vue'], ['svelte', 'Svelte'], ['@angular/core', 'Angular'],
  ['react-native', 'React Native'], ['expo', 'Expo'], ['tailwindcss', 'Tailwind CSS'], ['@radix-ui/react-slot', 'Radix (likely shadcn/ui)'],
  ['@mui/material', 'Material UI'], ['@chakra-ui/react', 'Chakra UI'], ['antd', 'Ant Design'], ['framer-motion', 'Framer Motion'],
  ['motion', 'Motion'], ['gsap', 'GSAP'], ['three', 'Three.js'], ['phaser', 'Phaser'], ['electron', 'Electron'], ['@tauri-apps/api', 'Tauri'],
  ['i18next', 'i18next'], ['next-intl', 'next-intl'], ['react-intl', 'react-intl'],
];

const readText = (path) => {
  try {
    if (statSync(path).size > MAX_BYTES) return '';
    return readFileSync(path, 'utf8');
  } catch {
    return '';
  }
};

const readJson = (path) => {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    return null;
  }
};

const TEST_FILE = /\.(?:test|spec|stories)\.|(?:^|\/)(?:__tests__|tests?|fixtures|mocks?)\//;

// Flattens a translation file into its string values, preferring keys that read like headlines.
function localeStrings(json, out = [], key = '') {
  if (typeof json === 'string') {
    if (json.length >= 12 && json.length <= 160 && !/[{<]/.test(json)) out.push({ key, text: json.replace(/\s+/g, ' ') });
  } else if (json && typeof json === 'object') {
    for (const [k, v] of Object.entries(json)) localeStrings(v, out, key ? `${key}.${k}` : k);
  }
  return out;
}

const count = (map, key, by = 1) => map.set(key, (map.get(key) || 0) + by);
const top = (map, n) => [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);

function normalizeHex(hex) {
  let h = hex.toLowerCase();
  if (h.length === 4) h = '#' + [...h.slice(1)].map((c) => c + c).join('');
  return h;
}

// Product: what the project says about itself.
function readProduct(root) {
  const product = { name: null, description: null, keywords: [], readme: null, manifest: null };
  const pkg = readJson(join(root, 'package.json'));
  if (pkg) {
    product.name = pkg.name || null;
    product.description = pkg.description || null;
    product.keywords = pkg.keywords || [];
  }
  const readme = ['README.md', 'readme.md', 'README'].map((f) => join(root, f)).find(existsSync);
  if (readme) {
    const text = readText(readme);
    const title = text.match(/^#\s+(.+)$/m);
    const paragraph = text.split(/\n\s*\n/).map((p) => p.trim()).find((p) => p && !/^[#!<\[|`>-]/.test(p));
    product.readme = { title: title ? title[1].trim() : null, intro: paragraph ? paragraph.replace(/\s+/g, ' ').slice(0, 400) : null };
  }
  for (const file of ['public/manifest.json', 'public/site.webmanifest', 'manifest.json', 'static/manifest.json']) {
    const manifest = readJson(join(root, file));
    if (manifest) {
      product.manifest = { file, name: manifest.name || manifest.short_name || null, themeColor: manifest.theme_color || null, backgroundColor: manifest.background_color || null };
      break;
    }
  }
  return { product, pkg };
}

function readStack(pkg, root) {
  const deps = { ...(pkg?.dependencies || {}), ...(pkg?.devDependencies || {}) };
  const stack = STACK.filter(([dep]) => dep in deps).map(([, label]) => label);
  if (existsSync(join(root, 'components.json'))) stack.push('shadcn/ui (components.json)');
  if (existsSync(join(root, 'pubspec.yaml'))) stack.push('Flutter');
  const fontPackages = Object.keys(deps).filter((d) => d.startsWith('@fontsource'));
  return { stack, fontPackages };
}

export function scanProject(root) {
  const { product, pkg } = readProduct(root);
  const { stack, fontPackages } = readStack(pkg, root);
  const all = collect([root], new Set([...CODE, ...ASSETS, '.md', '.json'])).slice(0, MAX_FILES);

  const colors = new Map();
  const fonts = new Map();
  const tokens = new Map();
  const headings = [];
  const langs = new Set();
  const domainText = [product.name, product.description, product.keywords.join(' '), product.readme?.title, product.readme?.intro].filter(Boolean);
  const brandAssets = [];
  const brandDocs = [];
  const localeFolders = new Set();
  const localeCopy = [];
  const localeText = [];
  let tailwindTheme = false;

  for (const file of all) {
    const rel = relative(root, file);
    const ext = extname(file).toLowerCase();
    const name = basename(file);

    if (ASSETS.has(ext)) {
      if (/logo|brand|wordmark|favicon|apple-touch-icon|logotype|isotype|mascot/i.test(name)) brandAssets.push(rel);
      continue;
    }
    if (ext === '.md') {
      if (DOCS.test(name)) brandDocs.push(rel);
      continue;
    }
    if (ext === '.json') {
      const locale = rel.match(/(?:^|\/)(?:locales?|messages|i18n|lang|translations)\/([a-z]{2}(?:[-_][A-Za-z]{2})?)(?:\.json|\/)/);
      if (locale) {
        localeFolders.add(locale[1]);
        for (const entry of localeStrings(readJson(file))) {
          if (localeCopy.length < 200) localeCopy.push({ ...entry, locale: locale[1] });
          if (localeText.length < 5000) localeText.push(entry.text);
        }
      }
      continue;
    }

    const text = readText(file);
    if (!text) continue;

    if (!TEST_FILE.test(rel)) {
      for (const m of text.matchAll(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/g)) count(colors, normalizeHex(m[0]));
      for (const m of text.matchAll(/\b(?:oklch|rgb|rgba|hsl|hsla)\([^)]{3,60}\)/g)) count(colors, m[0].replace(/\s+/g, ' '));
    }

    for (const m of text.matchAll(/font-family\s*:\s*([^;}{]+)/g)) count(fonts, m[1].split(',')[0].trim().replace(/['"]/g, ''));
    for (const m of text.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]next\/font\/(?:google|local)['"]/g)) {
      for (const f of m[1].split(',')) if (f.trim()) count(fonts, f.trim().replace(/_/g, ' ') + ' (next/font)');
    }
    for (const m of text.matchAll(/fonts\.googleapis\.com\/css2?\?family=([^"'&)]+)/g)) {
      for (const f of m[1].split('&family=')) count(fonts, decodeURIComponent(f.split(':')[0]).replace(/\+/g, ' ') + ' (Google Fonts)');
    }

    if (ext === '.css' || ext === '.scss') {
      if (/@theme\b/.test(text)) tailwindTheme = true;
      for (const m of text.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
        const value = m[2].trim().split('\n')[0].trim();
        if (!tokens.has(m[1]) && value && !/^(?:initial|inherit|unset)$/.test(value)) tokens.set(m[1], value.slice(0, 60));
      }
    }

    for (const m of text.matchAll(/<html[^>]*\blang=["']([\w-]+)["']/g)) langs.add(m[1]);
    if (headings.length < 25) {
      for (const m of text.matchAll(/<h[12][^>]*>([^<{]{4,120})<\/h[12]>/g)) {
        const heading = m[1].replace(/\s+/g, ' ').trim();
        // Translation keys ("landing.faq.title") are not copy; the locale files supply the real text.
        if (heading && !/^[\w-]+(?:\.[\w-]+)+$/.test(heading) && !headings.includes(heading)) headings.push(heading);
      }
      const title = text.match(/<title>([^<{]{2,120})<\/title>/);
      if (title && !headings.includes(title[1].trim())) headings.push(title[1].trim());
    }
  }
  const headline = /title|heading|hero|headline|subtitle|description|tagline|cta/i;
  const copySample = [...localeCopy.filter((c) => headline.test(c.key)), ...localeCopy.filter((c) => !headline.test(c.key))].slice(0, 15);
  domainText.push(...headings, ...localeText);

  const configs = ['tailwind.config.js', 'tailwind.config.ts', 'tailwind.config.mjs', 'tailwind.config.cjs'].filter((f) => existsSync(join(root, f)));
  return {
    root,
    product,
    stack,
    languages: [...new Set([...langs, ...localeFolders])],
    brand: { assets: brandAssets.slice(0, 30), docs: brandDocs },
    fonts: [...top(fonts, 10).map(([f, n]) => ({ font: f, uses: n })), ...fontPackages.map((p) => ({ font: p, uses: 0 }))],
    colors: top(colors, 15).map(([color, uses]) => ({ color, uses })),
    tokens: { count: tokens.size, sample: [...tokens.entries()].filter(([k]) => /color|bg|background|foreground|primary|accent|brand|radius|font/i.test(k)).slice(0, 25), tailwindConfig: configs, tailwindTheme },
    copy: [...headings.slice(0, 10), ...copySample.map((c) => `${c.text} [${c.locale}: ${c.key}]`)].slice(0, 20),
    domains: inferDomains(domainText.join(' \n ')),
    filesScanned: all.length,
  };
}

// Scores each domain by how often its words appear. Returns hints, strongest first; "weak" means one word or one
// mention, which is often noise (a "training" menu item does not make a fitness app).
export function inferDomains(text) {
  const lower = text.toLowerCase();
  const results = [];
  for (const [domain, words] of Object.entries(DOMAINS)) {
    const hits = [];
    let mentions = 0;
    for (const word of words) {
      const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const n = (lower.match(new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, 'gu')) || []).length;
      if (n) {
        hits.push(`${word} ×${n}`);
        mentions += n;
      }
    }
    if (hits.length) results.push({ domain, hits, mentions, strength: hits.length >= 2 && mentions >= 3 ? 'strong' : 'weak' });
  }
  return results.sort((a, b) => b.mentions - a.mentions).slice(0, 6);
}

export function render(scan) {
  const out = [];
  const line = (s = '') => out.push(s);
  const list = (items, empty) => (items.length ? items.forEach((i) => line(`- ${i}`)) : line(`- ${empty}`));
  line(`# Design scan: ${scan.product.name || basename(scan.root)}`);
  line();
  line('Evidence only. Read the sources, confirm with the person when it matters, then fill templates/design-context.md.');
  line();
  line('## What the product says it is');
  list([
    scan.product.description && `package.json: ${scan.product.description}`,
    scan.product.readme?.title && `README title: ${scan.product.readme.title}`,
    scan.product.readme?.intro && `README intro: ${scan.product.readme.intro}`,
    scan.product.manifest && `Manifest (${scan.product.manifest.file}): ${scan.product.manifest.name || '-'}, theme ${scan.product.manifest.themeColor || '-'}`,
  ].filter(Boolean), 'Nothing found: ask the person what the product is.');
  line();
  line('## Raw domain signals (word counts for the product-researcher agent to interpret, not conclusions)');
  list(scan.domains.map((d) => `${d.domain} (${d.strength}): ${d.hits.join(', ')}`), 'No clear domain signals: ask.');
  line();
  line('## Stack and languages');
  list([scan.stack.length ? `Stack: ${scan.stack.join(', ')}` : null, scan.languages.length ? `Languages: ${scan.languages.join(', ')}` : null].filter(Boolean), 'Not detected.');
  line();
  line('## Brand');
  list(scan.brand.docs.map((d) => `Doc: ${d}`).concat(scan.brand.assets.map((a) => `Asset: ${a}`)), 'No brand docs or logo files found.');
  line();
  line('## Typography');
  list(scan.fonts.map((f) => (f.uses ? `${f.font} (${f.uses})` : f.font)), 'No explicit fonts: probably the system or library default.');
  line();
  line('## Most used colors');
  list(scan.colors.map((c) => `${c.color} (${c.uses})`), 'No literal colors found.');
  line();
  line('## Tokens');
  line(`- ${scan.tokens.count} CSS custom properties${scan.tokens.tailwindTheme ? ', Tailwind @theme present' : ''}${scan.tokens.tailwindConfig.length ? `, ${scan.tokens.tailwindConfig.join(', ')}` : ''}`);
  for (const [k, v] of scan.tokens.sample) line(`- \`${k}: ${v}\``);
  line();
  line('## Visible copy (headings and translation strings): read it for voice and tone');
  list(scan.copy.map((c) => `"${c}"`), 'No static headings found (copy may come from data or translations).');
  line();
  line(`_${scan.filesScanned} files scanned._`);
  return out.join('\n');
}

if (isMainScript(import.meta.url)) {
  const args = process.argv.slice(2);
  const root = args.find((a) => !a.startsWith('--')) || process.cwd();
  const scan = scanProject(root);
  console.log(args.includes('--json') ? JSON.stringify(scan, null, 2) : render(scan));
}
