#!/usr/bin/env node
// Contraste WCAG 2.x entre dos colores. Sin dependencias.
// Uso: node contraste.mjs <texto> <fondo> [--json]
// Colores: #rgb, #rrggbb, #rrggbbaa (alfa se mezcla sobre el fondo), rgb()/rgba(), oklch(L C H).

import { esScriptPrincipal } from './lib/principal.mjs';

export function parsearColor(entrada) {
  const valor = String(entrada).trim().toLowerCase();

  const hex = valor.match(/^#([0-9a-f]{3,8})$/);
  if (hex) {
    let h = hex[1];
    if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join('');
    if (h.length !== 6 && h.length !== 8) throw new Error(`HEX inválido: ${entrada}`);
    const n = (i) => parseInt(h.slice(i, i + 2), 16);
    return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1 };
  }

  const rgb = valor.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)(?:[\s,/]+([\d.]+%?))?\s*\)$/);
  if (rgb) {
    const alfa = rgb[4] === undefined ? 1 : rgb[4].endsWith('%') ? parseFloat(rgb[4]) / 100 : parseFloat(rgb[4]);
    return { r: +rgb[1], g: +rgb[2], b: +rgb[3], a: alfa };
  }

  const ok = valor.match(/^oklch\(\s*([\d.]+%?)\s+([\d.]+)\s+([\d.]+)(?:deg)?(?:\s*\/\s*([\d.]+%?))?\s*\)$/);
  if (ok) {
    const L = ok[1].endsWith('%') ? parseFloat(ok[1]) / 100 : parseFloat(ok[1]);
    const C = parseFloat(ok[2]);
    const H = (parseFloat(ok[3]) * Math.PI) / 180;
    const alfa = ok[4] === undefined ? 1 : ok[4].endsWith('%') ? parseFloat(ok[4]) / 100 : parseFloat(ok[4]);
    return { ...oklchASrgb(L, C, H), a: alfa };
  }

  throw new Error(`Color no reconocido: ${entrada} (usar #hex, rgb() u oklch())`);
}

function oklchASrgb(L, C, H) {
  const a = C * Math.cos(H);
  const b = C * Math.sin(H);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const lineal = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
  const [r, g, bl] = lineal.map((c) => {
    const x = Math.min(1, Math.max(0, c));
    const v = x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055;
    return Math.round(v * 255);
  });
  return { r, g, b: bl };
}

function mezclar(frente, fondo) {
  const a = frente.a ?? 1;
  return {
    r: frente.r * a + fondo.r * (1 - a),
    g: frente.g * a + fondo.g * (1 - a),
    b: frente.b * a + fondo.b * (1 - a),
    a: 1,
  };
}

export function luminancia({ r, g, b }) {
  const canal = (v) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * canal(r) + 0.7152 * canal(g) + 0.0722 * canal(b);
}

export function contraste(texto, fondo) {
  const f = parsearColor(fondo);
  const fondoOpaco = (f.a ?? 1) < 1 ? mezclar(f, { r: 255, g: 255, b: 255 }) : f;
  const t = mezclar(parsearColor(texto), fondoOpaco);
  const l1 = luminancia(t);
  const l2 = luminancia(fondoOpaco);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  const redondeado = Math.floor(ratio * 100) / 100;
  return {
    ratio: redondeado,
    textoNormalAA: ratio >= 4.5,
    textoGrandeAA: ratio >= 3,
    componentesAA: ratio >= 3,
    textoNormalAAA: ratio >= 7,
    textoGrandeAAA: ratio >= 4.5,
  };
}

const esPrincipal = esScriptPrincipal(import.meta.url);

if (esPrincipal) {
  const args = process.argv.slice(2).filter((a) => a !== '--json');
  const json = process.argv.includes('--json');
  if (args.length !== 2) {
    console.error('Uso: node contraste.mjs <color-texto> <color-fondo> [--json]');
    console.error('Ejemplo: node contraste.mjs "#6b7280" "#ffffff"');
    process.exit(2);
  }
  try {
    const r = contraste(args[0], args[1]);
    if (json) {
      console.log(JSON.stringify({ texto: args[0], fondo: args[1], ...r }));
    } else {
      const m = (ok) => (ok ? 'pasa' : 'FALLA');
      console.log(`Contraste ${args[0]} sobre ${args[1]}: ${r.ratio}:1`);
      console.log(`  Texto normal AA (4,5:1):         ${m(r.textoNormalAA)}`);
      console.log(`  Texto grande AA (3:1):           ${m(r.textoGrandeAA)}`);
      console.log(`  Componentes y foco AA (3:1):     ${m(r.componentesAA)}`);
      console.log(`  Texto normal AAA (7:1):          ${m(r.textoNormalAAA)}`);
    }
    process.exit(r.textoNormalAA ? 0 : 1);
  } catch (error) {
    console.error(error.message);
    process.exit(2);
  }
}
