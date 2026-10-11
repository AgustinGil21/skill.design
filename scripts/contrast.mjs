#!/usr/bin/env node
// WCAG 2.x contrast between two colors. No dependencies.
// Usage: node contrast.mjs <text> <background> [--json]
// Colors: #rgb, #rrggbb, #rrggbbaa (alpha is blended over the background), rgb()/rgba(), oklch(L C H).

import { isMainScript } from './lib/main.mjs';

export function parseColor(input) {
  const value = String(input).trim().toLowerCase();

  const hex = value.match(/^#([0-9a-f]{3,8})$/);
  if (hex) {
    let h = hex[1];
    if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join('');
    if (h.length !== 6 && h.length !== 8) throw new Error(`Invalid HEX: ${input}`);
    const n = (i) => parseInt(h.slice(i, i + 2), 16);
    return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1 };
  }

  const rgb = value.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)(?:[\s,/]+([\d.]+%?))?\s*\)$/);
  if (rgb) {
    const alpha = rgb[4] === undefined ? 1 : rgb[4].endsWith('%') ? parseFloat(rgb[4]) / 100 : parseFloat(rgb[4]);
    return { r: +rgb[1], g: +rgb[2], b: +rgb[3], a: alpha };
  }

  const ok = value.match(/^oklch\(\s*([\d.]+%?)\s+([\d.]+)\s+([\d.]+)(?:deg)?(?:\s*\/\s*([\d.]+%?))?\s*\)$/);
  if (ok) {
    const L = ok[1].endsWith('%') ? parseFloat(ok[1]) / 100 : parseFloat(ok[1]);
    const C = parseFloat(ok[2]);
    const H = (parseFloat(ok[3]) * Math.PI) / 180;
    const alpha = ok[4] === undefined ? 1 : ok[4].endsWith('%') ? parseFloat(ok[4]) / 100 : parseFloat(ok[4]);
    return { ...oklchToSrgb(L, C, H), a: alpha };
  }

  throw new Error(`Unrecognized color: ${input} (use #hex, rgb() or oklch())`);
}

function oklchToSrgb(L, C, H) {
  const a = C * Math.cos(H);
  const b = C * Math.sin(H);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const linear = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
  const [r, g, bl] = linear.map((c) => {
    const x = Math.min(1, Math.max(0, c));
    const v = x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055;
    return Math.round(v * 255);
  });
  return { r, g, b: bl };
}

function blend(front, back) {
  const a = front.a ?? 1;
  return {
    r: front.r * a + back.r * (1 - a),
    g: front.g * a + back.g * (1 - a),
    b: front.b * a + back.b * (1 - a),
    a: 1,
  };
}

export function luminance({ r, g, b }) {
  const channel = (v) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function contrast(text, background) {
  const b = parseColor(background);
  const opaqueBackground = (b.a ?? 1) < 1 ? blend(b, { r: 255, g: 255, b: 255 }) : b;
  const t = blend(parseColor(text), opaqueBackground);
  const l1 = luminance(t);
  const l2 = luminance(opaqueBackground);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  const rounded = Math.floor(ratio * 100) / 100;
  return {
    ratio: rounded,
    normalTextAA: ratio >= 4.5,
    largeTextAA: ratio >= 3,
    componentsAA: ratio >= 3,
    normalTextAAA: ratio >= 7,
    largeTextAAA: ratio >= 4.5,
  };
}

if (isMainScript(import.meta.url)) {
  const args = process.argv.slice(2).filter((a) => a !== '--json');
  const json = process.argv.includes('--json');
  if (args.length !== 2) {
    console.error('Usage: node contrast.mjs <text-color> <background-color> [--json]');
    console.error('Example: node contrast.mjs "#6b7280" "#ffffff"');
    process.exit(2);
  }
  try {
    const r = contrast(args[0], args[1]);
    if (json) {
      console.log(JSON.stringify({ text: args[0], background: args[1], ...r }));
    } else {
      const m = (ok) => (ok ? 'pass' : 'FAIL');
      console.log(`Contrast ${args[0]} on ${args[1]}: ${r.ratio}:1`);
      console.log(`  Normal text AA (4.5:1):          ${m(r.normalTextAA)}`);
      console.log(`  Large text AA (3:1):             ${m(r.largeTextAA)}`);
      console.log(`  Components and focus AA (3:1):   ${m(r.componentsAA)}`);
      console.log(`  Normal text AAA (7:1):           ${m(r.normalTextAAA)}`);
    }
    process.exit(r.normalTextAA ? 0 : 1);
  } catch (error) {
    console.error(error.message);
    process.exit(2);
  }
}
