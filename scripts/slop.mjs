#!/usr/bin/env node
// Detecta señales de diseño y texto genéricos ("slop") en código y contenido. Sin dependencias.
// Uso: node slop.mjs <archivos o carpetas> [--json] [--no-falla]
// Sale con código 1 si encuentra hallazgos (salvo --no-falla). Es una ayuda: cada hallazgo se revisa a criterio.

import { readFileSync } from 'node:fs';
import { recolectar, lineaDe, imprimir } from './lib/archivos.mjs';
import { esScriptPrincipal } from './lib/principal.mjs';

const EXTENSIONES = new Set(['.html', '.htm', '.jsx', '.tsx', '.js', '.ts', '.astro', '.vue', '.svelte', '.md', '.mdx', '.css', '.scss', '.json', '.txt']);

// Frases huecas en español e inglés. Se buscan como palabras completas, sin distinguir mayúsculas.
const FRASES = [
  ['potenci[aá] tu', 'Verbo hueco: decir el resultado concreto'],
  ['revoluciona(?:r|mos)?', 'Promesa grandilocuente'],
  ['sin fisuras', 'Muletilla: decir qué se integra con qué'],
  ['de pr[oó]xima generaci[oó]n', 'Muletilla de marketing'],
  ['de vanguardia', 'Muletilla de marketing'],
  ['de clase mundial', 'Muletilla de marketing'],
  ['soluci[oó]n integral', 'Categoría vacía: decir qué hace'],
  ['todo en uno', 'Muletilla: decir qué reúne'],
  ['el futuro de', 'Titular vacío'],
  ['en el mundo actual', 'Relleno'],
  ['desbloque[aá]', 'Verbo de moda: decir qué se puede hacer'],
  ['llev[aá] tu .{1,20} al siguiente nivel', 'Frase hecha'],
  ['no es solo .{1,40}, es', 'Estructura retórica genérica'],
  ['seamless(?:ly)?', 'Filler: say what integrates with what'],
  ['supercharge', 'Hype verb'],
  ['unlock(?:s|ing)?', 'Hype verb'],
  ['next[- ]gen(?:eration)?', 'Marketing filler'],
  ['cutting[- ]edge', 'Marketing filler'],
  ['game[- ]chang(?:er|ing)', 'Marketing filler'],
  ['world[- ]class', 'Marketing filler'],
  ['empower(?:s|ing)?', 'Hype verb'],
  ['elevate (?:your|the)', 'Hype verb'],
  ['all-in-one', 'Filler: say what it combines'],
  ['the future of', 'Empty headline'],
  ["in today's (?:fast-paced )?world", 'Filler'],
  ['leverage', 'Jargon'],
  ['delve', 'Generic AI phrasing'],
  ["it'?s not just .{1,40}, it'?s", 'Generic rhetorical structure'],
  ['lorem ipsum', 'Texto de relleno: usar contenido real'],
  ['acme(?: inc| corp)?', 'Dato ficticio genérico: usar datos realistas'],
  ['john doe|jane doe', 'Nombre de relleno: usar datos realistas'],
];

const REGLAS_ESTILO = [
  {
    regla: 'degradado-generico',
    patron: /(?:bg-gradient-to-\w+|bg-linear-to-\w+)[^"'`]*from-(?:purple|violet|indigo|fuchsia)-\d+[^"'`]*to-(?:blue|indigo|purple|violet|pink|cyan)-\d+/g,
    mensaje: 'Degradado violeta/azul por defecto: elegir un color con intención (ver conocimiento/10-color.md)',
  },
  {
    regla: 'degradado-generico',
    patron: /linear-gradient\([^)]*(?:#8b5cf6|#7c3aed|#6366f1|#a855f7|#4f46e5|purple|violet|indigo)[^)]*(?:#3b82f6|#2563eb|#06b6d4|#ec4899|blue|cyan|pink)[^)]*\)/gi,
    mensaje: 'Degradado violeta/azul por defecto: elegir un color con intención (ver conocimiento/10-color.md)',
  },
  {
    regla: 'brillo-decorativo',
    patron: /(?:blur-3xl|blur-\[\d{3,}px\])[^"'`]*(?:purple|violet|indigo|fuchsia)|(?:purple|violet|indigo|fuchsia)-\d+[^"'`]*blur-3xl/g,
    mensaje: 'Mancha difusa de color como decoración: ¿qué comunica?',
  },
  {
    regla: 'azul-por-defecto',
    patron: /#3b82f6|bg-blue-500|bg-blue-600/gi,
    mensaje: 'Azul por defecto de la librería: confirmar que es una decisión de marca',
    nivel: 'info',
  },
];

const EMOJI = /\p{Extended_Pictographic}/u;
const TRIADA = /\b(\p{Lu}\p{Ll}+)\.\s+(\p{Lu}\p{Ll}+)\.\s+(\p{Lu}\p{Ll}+)\./u;

export function analizarTexto(texto, archivo) {
  const hallazgos = [];
  const agregar = (indice, regla, mensaje, fragmento, nivel = 'aviso') =>
    hallazgos.push({ archivo, linea: lineaDe(texto, indice), regla, nivel, mensaje, fragmento: fragmento.trim().slice(0, 120) });

  for (const [frase, mensaje] of FRASES) {
    const re = new RegExp(`(?<![\\p{L}])(?:${frase})(?![\\p{L}])`, 'giu');
    for (const m of texto.matchAll(re)) {
      if (archivo.endsWith('.json') && texto.startsWith('":', m.index + m[0].length)) continue;
      agregar(m.index, 'frase-hueca', mensaje, m[0]);
    }
  }

  for (const { regla, patron, mensaje, nivel } of REGLAS_ESTILO) {
    for (const m of texto.matchAll(patron)) agregar(m.index, regla, mensaje, m[0], nivel);
  }

  const lineas = texto.split('\n');
  let indice = 0;
  for (const linea of lineas) {
    const esTitularOBoton = /^\s{0,3}#{1,6}\s|<h[1-6]\b|<button\b|<Button\b/.test(linea);
    if (esTitularOBoton && EMOJI.test(linea)) {
      hallazgos.push({ archivo, linea: lineaDe(texto, indice), regla: 'emoji-decorativo', nivel: 'aviso', mensaje: 'Emoji en titular o botón: usar palabras o un ícono del sistema', fragmento: linea.trim().slice(0, 120) });
    }
    const triada = linea.match(TRIADA);
    if (triada) {
      hallazgos.push({ archivo, linea: lineaDe(texto, indice), regla: 'triada', nivel: 'aviso', mensaje: 'Tríada de adjetivos ("Simple. Rápido. Seguro."): reemplazar por un hecho concreto', fragmento: triada[0] });
    }
    indice += linea.length + 1;
  }

  return hallazgos;
}

const esPrincipal = esScriptPrincipal(import.meta.url);

if (esPrincipal) {
  const rutas = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  const json = process.argv.includes('--json');
  const noFalla = process.argv.includes('--no-falla');
  if (rutas.length === 0) {
    console.error('Uso: node slop.mjs <archivos o carpetas> [--json] [--no-falla]');
    process.exit(2);
  }
  const hallazgos = recolectar(rutas, EXTENSIONES).flatMap((archivo) => analizarTexto(readFileSync(archivo, 'utf8'), archivo));
  imprimir(hallazgos, { json, titulo: 'Slop' });
  process.exit(hallazgos.some((h) => h.nivel !== 'info') && !noFalla ? 1 : 0);
}
