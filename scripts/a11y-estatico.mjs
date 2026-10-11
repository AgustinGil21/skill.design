#!/usr/bin/env node
// Chequeo estático de accesibilidad en HTML, JSX/TSX, Astro, Vue, Svelte y CSS. Sin dependencias.
// Uso: node a11y-estatico.mjs <archivos o carpetas> [--json] [--no-falla]
// Detecta problemas frecuentes; no reemplaza probar con teclado, lector de pantalla y herramientas como axe.

import { readFileSync } from 'node:fs';
import { extname } from 'node:path';
import { recolectar, lineaDe, imprimir } from './lib/archivos.mjs';
import { esScriptPrincipal } from './lib/principal.mjs';

const MARCADO = new Set(['.html', '.htm', '.jsx', '.tsx', '.astro', '.vue', '.svelte']);
const ESTILOS = new Set(['.css', '.scss']);
const EXTENSIONES = new Set([...MARCADO, ...ESTILOS]);

const tieneAtributo = (atributos, nombre) => new RegExp(`(?:^|\\s)${nombre}\\s*=`, 'i').test(atributos);
const valorAtributo = (atributos, nombre) => {
  const m = atributos.match(new RegExp(`(?:^|\\s)${nombre}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\\{([^}]*)\\})`, 'i'));
  return m ? (m[1] ?? m[2] ?? m[3] ?? '') : null;
};
const tieneNombreAccesible = (atributos) =>
  ['aria-label', 'aria-labelledby', 'title'].some((n) => tieneAtributo(atributos, n));
// Componentes que reenvían props ({...props}): el nombre o la etiqueta pueden llegar desde quien los usa.
const reenviaProps = (atributos) => /\{\s*\.\.\.\w+\s*\}/.test(atributos);

// Lee etiquetas de apertura respetando comillas y llaves de JSX (así `onChange={(e) => …}` no corta la etiqueta).
// Devuelve objetos con la forma de un match: [completo, nombre, atributos] + index + fin.
function etiquetas(texto, nombres) {
  const resultado = [];
  const inicio = new RegExp(`<(${nombres})(?=[\\s/>])`, 'g');
  for (const m of texto.matchAll(inicio)) {
    let i = m.index + m[0].length;
    let llaves = 0;
    let comilla = null;
    for (; i < texto.length; i++) {
      const c = texto[i];
      if (comilla) {
        if (c === comilla) comilla = null;
        continue;
      }
      if (c === '"' || c === "'" || (c === '`' && llaves > 0)) comilla = c;
      else if (c === '{') llaves++;
      else if (c === '}') llaves = Math.max(0, llaves - 1);
      else if (c === '>' && llaves === 0) break;
    }
    const completo = texto.slice(m.index, i + 1);
    const atributos = texto.slice(m.index + m[0].length, i).replace(/\/$/, '');
    const coincidencia = [completo, m[1], atributos];
    coincidencia.index = m.index;
    coincidencia.fin = i + 1;
    resultado.push(coincidencia);
  }
  return resultado;
}

// Texto visible dentro de un elemento: quita etiquetas y comentarios; las expresiones {…} cuentan como texto.
function textoInterno(html) {
  const sinSvg = html.replace(/<svg[\s\S]*?<\/svg>/gi, '');
  if (/class(?:Name)?\s*=\s*["'][^"']*\b(?:sr-only|visually-hidden)\b/.test(sinSvg)) return 'oculto-accesible';
  const sinComentarios = sinSvg.replace(/<!--[\s\S]*?-->|\{\/\*[\s\S]*?\*\/\}/g, '');
  const conExpresiones = sinComentarios.replace(/\{[^{}]*\}/g, ' expr ');
  return conExpresiones.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').trim();
}

export function analizarMarcado(texto, archivo) {
  const hallazgos = [];
  const agregar = (indice, nivel, regla, mensaje, fragmento = '') =>
    hallazgos.push({ archivo, linea: lineaDe(texto, indice), nivel, regla, mensaje, fragmento: fragmento.replace(/\s+/g, ' ').trim().slice(0, 120) });

  // Imágenes sin alt (1.1.1)
  for (const m of etiquetas(texto, 'img|Image')) {
    if (!tieneAtributo(m[2], 'alt') && !/aria-hidden\s*=\s*["{]?true/.test(m[2]) && !/role\s*=\s*["']presentation/.test(m[2])) {
      agregar(m.index, 'error', '1.1.1 imagen-sin-alt', 'Imagen sin alt: describir lo que aporta o alt="" si es decorativa', m[0]);
    }
  }

  // Botones y enlaces sin nombre accesible (4.1.2, 2.4.4)
  for (const m of etiquetas(texto, 'button|Button|a')) {
    const [apertura, etiqueta, atributos] = m;
    if (/\/>$/.test(apertura)) continue;
    const cierre = texto.indexOf(`</${etiqueta}>`, m.fin);
    if (cierre < 0) continue;
    const interior = texto.slice(m.fin, cierre);
    const completo = apertura + interior;
    if (etiqueta === 'a' && !tieneAtributo(atributos, 'href')) continue;
    if (tieneNombreAccesible(atributos)) continue;
    if (textoInterno(interior) === '') {
      const regla = etiqueta === 'a' ? '2.4.4 enlace-sin-nombre' : '4.1.2 boton-sin-nombre';
      if (reenviaProps(atributos)) {
        agregar(m.index, 'info', regla, 'Sin texto propio; reenvía props: verificar que cada uso le pase texto o aria-label', completo);
      } else {
        agregar(m.index, 'error', regla, 'Sin texto ni aria-label: el lector de pantalla no puede nombrarlo', completo);
      }
    }
  }

  // Textos de enlace ambiguos (2.4.4)
  for (const m of texto.matchAll(/<a\b[^>]*>\s*(click aqu[ií]|haz clic aqu[ií]|hac[eé] clic aqu[ií]|aqu[ií]|click here|here|leer m[aá]s|read more|m[aá]s)\s*<\/a>/gi)) {
    agregar(m.index, 'aviso', '2.4.4 enlace-ambiguo', `Texto de enlace "${m[1]}" sin contexto: decir a dónde lleva`, m[0]);
  }

  // Campos sin etiqueta (1.3.1, 4.1.2)
  // Valores crudos de for/htmlFor e id (incluye ids dinámicos como {`campo-${i}`}).
  const VALOR = '("[^"]*"|\'[^\']*\'|\\{\\s*\\x60[^\\x60]*\\x60\\s*\\}|\\{[^{}]*\\})';
  const normalizar = (v) => v.replace(/^\{\s*|\s*\}$/g, '').replace(/^["'\x60]|["'\x60]$/g, '').trim();
  const etiquetasFor = new Set([...texto.matchAll(new RegExp('(?:\\bfor|htmlFor)\\s*=\\s*' + VALOR, 'g'))].map((x) => normalizar(x[1])));
  for (const m of etiquetas(texto, 'input|select|textarea|Input|Textarea')) {
    const atributos = m[2];
    const tipo = (valorAtributo(atributos, 'type') || '').toLowerCase();
    if (['hidden', 'submit', 'button', 'reset', 'image'].includes(tipo)) continue;
    if (tieneNombreAccesible(atributos)) continue;
    if (/(?:^|\s)hidden(?:\s|=|$)/.test(atributos) || /aria-hidden\s*=\s*["{]?true/.test(atributos)) continue;
    const id = atributos.match(new RegExp('(?:^|\\s)id\\s*=\\s*' + VALOR));
    if (id && etiquetasFor.has(normalizar(id[1]))) continue;
    const antes = texto.slice(0, m.index);
    if (antes.lastIndexOf('<label') > antes.lastIndexOf('</label>')) continue;
    if (/^[A-Z]/.test(m[1]) && tieneAtributo(atributos, 'label')) continue;
    if (reenviaProps(atributos)) {
      agregar(m.index, 'info', '1.3.1 campo-sin-etiqueta', 'Componente de campo que reenvía props: verificar la etiqueta en cada uso', m[0]);
      continue;
    }
    const soloPlaceholder = tieneAtributo(atributos, 'placeholder');
    agregar(m.index, 'error', '1.3.1 campo-sin-etiqueta',
      soloPlaceholder ? 'Campo con placeholder pero sin etiqueta: el placeholder no reemplaza la etiqueta' : 'Campo sin etiqueta asociada (label, aria-label o aria-labelledby)', m[0]);
  }

  // Títulos: orden y cantidad de h1 (1.3.1, 2.4.6)
  const niveles = [...texto.matchAll(/<h([1-6])\b/gi)].map((x) => ({ n: +x[1], i: x.index }));
  const h1 = niveles.filter((x) => x.n === 1);
  if (h1.length > 1 && /\.(html?|astro)$/i.test(archivo)) {
    agregar(h1[1].i, 'aviso', '1.3.1 varios-h1', `Hay ${h1.length} h1 en la página: usar uno para el título principal`);
  }
  for (let k = 1; k < niveles.length; k++) {
    if (niveles[k].n > niveles[k - 1].n + 1) {
      agregar(niveles[k].i, 'aviso', '1.3.1 salto-de-titulo', `Salta de h${niveles[k - 1].n} a h${niveles[k].n}: no omitir niveles`);
    }
  }

  // Idioma del documento (3.1.1)
  for (const m of texto.matchAll(/<html\b([^>]*)>/gi)) {
    if (!tieneAtributo(m[1], 'lang')) agregar(m.index, 'error', '3.1.1 sin-lang', 'Falta lang en <html> (ej.: lang="es")', m[0]);
  }

  // Zoom bloqueado (1.4.4)
  for (const m of texto.matchAll(/<meta\b[^>]*name\s*=\s*["']viewport["'][^>]*>/gi)) {
    if (/user-scalable\s*=\s*(?:no|0)|maximum-scale\s*=\s*1(?:\.0)?\b/i.test(m[0])) {
      agregar(m.index, 'error', '1.4.4 zoom-bloqueado', 'El viewport impide hacer zoom: quitar user-scalable=no y maximum-scale=1', m[0]);
    }
  }

  // tabindex positivo (2.4.3)
  for (const m of texto.matchAll(/tab[iI]ndex\s*=\s*(?:"|'|\{)\s*([1-9]\d*)/g)) {
    agregar(m.index, 'error', '2.4.3 tabindex-positivo', 'tabindex positivo altera el orden del foco: usar 0 o -1', m[0]);
  }

  // Elementos no interactivos con click (2.1.1, 4.1.2)
  for (const m of etiquetas(texto, 'div|span|li|td|img')) {
    const atributos = m[2];
    if (!/\bon(?:Click|click)\s*=/.test(atributos)) continue;
    const conRol = tieneAtributo(atributos, 'role');
    const conTab = /tab[iI]ndex/.test(atributos);
    if (!conRol && !conTab) {
      agregar(m.index, 'error', '2.1.1 click-sin-teclado', `<${m[1]}> con click: usar <button> (o role, tabindex y manejo de teclado)`, m[0]);
    } else if (!conRol || !conTab) {
      agregar(m.index, 'aviso', '2.1.1 click-sin-teclado', `<${m[1]}> con click y solo ${conRol ? 'role' : 'tabindex'}: confirmar que la acción también es posible con teclado`, m[0]);
    }
  }

  // Video con reproducción automática y sonido (1.4.2)
  for (const m of etiquetas(texto, 'video')) {
    if (/\bautoplay\b|autoPlay/i.test(m[2]) && !/\bmuted\b/i.test(m[2])) {
      agregar(m.index, 'error', '1.4.2 video-con-sonido', 'Video con autoplay sin muted: no reproducir sonido automáticamente', m[0]);
    }
  }

  // iframes sin título (4.1.2)
  for (const m of etiquetas(texto, 'iframe')) {
    if (!tieneAtributo(m[2], 'title')) agregar(m.index, 'aviso', '4.1.2 iframe-sin-title', 'iframe sin title que describa su contenido', m[0]);
  }

  // Foco quitado en clases utilitarias (2.4.7)
  for (const m of texto.matchAll(/class(?:Name)?\s*=\s*["'`]([^"'`]*\boutline-none\b[^"'`]*)["'`]/g)) {
    const etiqueta = texto.slice(texto.lastIndexOf('<', m.index), m.index);
    if (/tab[iI]ndex\s*=\s*(?:"-1"|'-1'|\{-1\})/.test(etiqueta)) continue;
    if (!/focus-visible:|focus:(?:ring|outline|border)/.test(m[1])) {
      agregar(m.index, 'error', '2.4.7 foco-invisible', 'outline-none sin estilo de foco alternativo (focus-visible:ring…)', m[1]);
    }
  }

  return hallazgos;
}

export function analizarEstilos(texto, archivo) {
  const hallazgos = [];
  const tieneFocoVisible = /:focus-visible/.test(texto);
  for (const m of texto.matchAll(/outline\s*:\s*(?:none|0)\s*[;}]/g)) {
    if (!tieneFocoVisible) {
      hallazgos.push({ archivo, linea: lineaDe(texto, m.index), nivel: 'error', regla: '2.4.7 foco-invisible', mensaje: 'outline: none sin regla :focus-visible en el archivo', fragmento: m[0] });
    }
  }
  if (/@keyframes|animation\s*:|transition\s*:/.test(texto) && !/prefers-reduced-motion/.test(texto)) {
    const i = texto.search(/@keyframes|animation\s*:/);
    if (i >= 0) {
      hallazgos.push({ archivo, linea: lineaDe(texto, i), nivel: 'aviso', regla: '2.3.3 sin-reducir-movimiento', mensaje: 'Hay animaciones sin @media (prefers-reduced-motion: reduce) en el archivo', fragmento: '' });
    }
  }
  return hallazgos;
}

const esPrincipal = esScriptPrincipal(import.meta.url);

if (esPrincipal) {
  const rutas = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  const json = process.argv.includes('--json');
  const noFalla = process.argv.includes('--no-falla');
  if (rutas.length === 0) {
    console.error('Uso: node a11y-estatico.mjs <archivos o carpetas> [--json] [--no-falla]');
    process.exit(2);
  }
  const hallazgos = recolectar(rutas, EXTENSIONES).flatMap((archivo) => {
    const texto = readFileSync(archivo, 'utf8');
    return ESTILOS.has(extname(archivo).toLowerCase()) ? analizarEstilos(texto, archivo) : analizarMarcado(texto, archivo);
  });
  imprimir(hallazgos, { json, titulo: 'Accesibilidad (estático)' });
  if (!json && hallazgos.length > 0) console.log('\nRecordatorio: esto no reemplaza probar con teclado, lector de pantalla y zoom.');
  process.exit(hallazgos.some((h) => h.nivel === 'error') && !noFalla ? 1 : 0);
}
