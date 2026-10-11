// Pruebas de los scripts de la skill. Ejecutar: node --test scripts/pruebas/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contraste, parsearColor } from '../contraste.mjs';
import { analizarTexto } from '../slop.mjs';
import { analizarMarcado, analizarEstilos } from '../a11y-estatico.mjs';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const reglas = (hallazgos) => hallazgos.map((h) => h.regla);

test('contraste: negro sobre blanco es 21:1', () => {
  assert.equal(contraste('#000', '#fff').ratio, 21);
});

test('contraste: gris #777 sobre blanco no llega a 4,5:1 pero pasa texto grande', () => {
  const r = contraste('#777777', '#ffffff');
  assert.equal(r.textoNormalAA, false);
  assert.equal(r.textoGrandeAA, true);
});

test('contraste: #767676 sobre blanco pasa AA justo', () => {
  assert.equal(contraste('#767676', '#ffffff').textoNormalAA, true);
});

test('contraste: rgb() y alfa se mezclan sobre el fondo', () => {
  const opaco = contraste('rgb(0,0,0)', '#ffffff').ratio;
  const translucido = contraste('rgba(0,0,0,0.5)', '#ffffff').ratio;
  assert.ok(translucido < opaco);
});

test('contraste: oklch blanco y negro', () => {
  assert.deepEqual(parsearColor('oklch(100% 0 0)'), { r: 255, g: 255, b: 255, a: 1 });
  assert.deepEqual(parsearColor('oklch(0% 0 0)'), { r: 0, g: 0, b: 0, a: 1 });
  assert.equal(contraste('oklch(0% 0 0)', 'oklch(100% 0 0)').ratio, 21);
});

test('contraste: color inválido lanza error', () => {
  assert.throws(() => parsearColor('azulito'));
});

test('slop: detecta frases huecas en español e inglés', () => {
  const h = analizarTexto('Potenciá tu equipo con una solución integral.\nUnlock seamless workflows.', 'x.md');
  assert.ok(h.filter((x) => x.regla === 'frase-hueca').length >= 4);
});

test('slop: detecta degradado violeta-azul de Tailwind y CSS', () => {
  const tw = analizarTexto('<div class="bg-gradient-to-r from-purple-500 to-blue-500">', 'a.html');
  const css = analizarTexto('.hero { background: linear-gradient(90deg, #8b5cf6, #3b82f6); }', 'a.css');
  assert.ok(reglas(tw).includes('degradado-generico'));
  assert.ok(reglas(css).includes('degradado-generico'));
});

test('slop: detecta emoji en titular y tríada', () => {
  const h = analizarTexto('# 🚀 Lanzamos\n\nSimple. Rápido. Seguro.', 'a.md');
  assert.ok(reglas(h).includes('emoji-decorativo'));
  assert.ok(reglas(h).includes('triada'));
});

test('slop: texto concreto no genera hallazgos', () => {
  const h = analizarTexto('# Cerrá el mes en 2 días\n\nConciliá 300 movimientos por hora con reglas que vos definís.', 'a.md');
  assert.equal(h.length, 0);
});

test('slop: no marca palabras que solo contienen la frase', () => {
  assert.equal(analizarTexto('relevante elevador desarrollo', 'a.md').length, 0);
});

test('a11y: imagen sin alt es error y con alt vacío pasa', () => {
  assert.ok(reglas(analizarMarcado('<img src="a.png">', 'a.html')).includes('1.1.1 imagen-sin-alt'));
  assert.equal(analizarMarcado('<img src="a.png" alt="">', 'a.html').length, 0);
});

test('a11y: botón solo con ícono sin nombre es error; con aria-label o sr-only pasa', () => {
  assert.ok(reglas(analizarMarcado('<button><svg><path/></svg></button>', 'a.tsx')).includes('4.1.2 boton-sin-nombre'));
  assert.equal(analizarMarcado('<button aria-label="Cerrar"><svg></svg></button>', 'a.tsx').length, 0);
  assert.equal(analizarMarcado('<button><svg></svg><span className="sr-only">Cerrar</span></button>', 'a.tsx').length, 0);
  assert.equal(analizarMarcado('<button>{t("guardar")}</button>', 'a.tsx').length, 0);
});

test('a11y: campo con solo placeholder es error; con label asociado pasa', () => {
  assert.ok(reglas(analizarMarcado('<input type="email" placeholder="Email">', 'a.html')).includes('1.3.1 campo-sin-etiqueta'));
  assert.equal(analizarMarcado('<label for="em">Email</label><input id="em" type="email">', 'a.html').length, 0);
  assert.equal(analizarMarcado('<label>Email <input type="email"></label>', 'a.html').length, 0);
  assert.equal(analizarMarcado('<input type="hidden" name="x">', 'a.html').length, 0);
});

test('a11y: salto de títulos, lang, zoom y tabindex', () => {
  const h = reglas(analizarMarcado('<html><body><h1>A</h1><h3>B</h3><meta name="viewport" content="width=device-width, user-scalable=no"><div tabindex="3"></div></body></html>', 'a.html'));
  assert.ok(h.includes('1.3.1 salto-de-titulo'));
  assert.ok(h.includes('3.1.1 sin-lang'));
  assert.ok(h.includes('1.4.4 zoom-bloqueado'));
  assert.ok(h.includes('2.4.3 tabindex-positivo'));
});

test('a11y: div con onClick, video con sonido y outline-none sin foco', () => {
  const h = reglas(analizarMarcado('<div onClick={abrir}>Abrir</div><video autoplay src="a.mp4"></video><button className="outline-none">Ir</button>', 'a.tsx'));
  assert.ok(h.includes('2.1.1 click-sin-teclado'));
  assert.ok(h.includes('1.4.2 video-con-sonido'));
  assert.ok(h.includes('2.4.7 foco-invisible'));
});

test('a11y: enlace ambiguo y enlace con texto pasa', () => {
  assert.ok(reglas(analizarMarcado('<a href="/x">click aquí</a>', 'a.html')).includes('2.4.4 enlace-ambiguo'));
  assert.equal(analizarMarcado('<a href="/precios">Ver precios</a>', 'a.html').length, 0);
});

test('a11y CSS: outline none sin focus-visible y animación sin reducir movimiento', () => {
  const h = reglas(analizarEstilos('button { outline: none; }\n@keyframes x { to { opacity: 1 } }', 'a.css'));
  assert.ok(h.includes('2.4.7 foco-invisible'));
  assert.ok(h.includes('2.3.3 sin-reducir-movimiento'));
  const bien = analizarEstilos('button:focus-visible { outline: 2px solid; } button { outline: none; }\n@keyframes x {}\n@media (prefers-reduced-motion: reduce) {}', 'b.css');
  assert.equal(bien.length, 0);
});

test('a11y: componentes que reenvían props quedan como info, no error', () => {
  const h = analizarMarcado('<input type={type} className="x" {...props} />', 'input.tsx');
  assert.equal(h.length, 1);
  assert.equal(h[0].nivel, 'info');
  const b = analizarMarcado('<Button className="x" {...props}><ArrowDownIcon /></Button>', 'c.tsx');
  assert.equal(b[0].nivel, 'info');
});

test('a11y: ids dinámicos asociados con htmlFor y campos ocultos pasan', () => {
  const jsx = '<label htmlFor={`c-${i}`}>Componente</label><select id={`c-${i}`} value={v}></select>';
  assert.equal(analizarMarcado(jsx, 'a.tsx').length, 0);
  assert.equal(analizarMarcado('<input type="file" hidden onChange={f} />', 'a.tsx').length, 0);
});

test('a11y: atributos después de una función flecha se leen bien', () => {
  const jsx = '<textarea value={v} onChange={(e) => set(e.target.value)} aria-label="Spec en JSON" />';
  assert.equal(analizarMarcado(jsx, 'a.tsx').length, 0);
  const img = '<img src={src} onLoad={() => listo()} alt="Portada" />';
  assert.equal(analizarMarcado(img, 'a.tsx').length, 0);
});

test('los scripts funcionan llamados a través de un enlace simbólico', () => {
  const raiz = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
  const enlace = join(mkdtempSync(join(tmpdir(), 'diseno-')), 'diseno');
  symlinkSync(raiz, enlace);
  const salida = execFileSync('node', [join(enlace, 'scripts', 'contraste.mjs'), '#000', '#fff'], { encoding: 'utf8' });
  assert.match(salida, /21:1/);
});

test('a11y: componentes de campo con prop label se consideran etiquetados', () => {
  assert.equal(analizarMarcado('<Input id="q" label={t("nombre")} value={v} onChange={set} />', 'a.tsx').length, 0);
  assert.ok(analizarMarcado('<input label="x" />', 'a.html').length > 0);
});

test('falsos positivos conocidos: destino de salto, claves JSON y "all in one place"', () => {
  assert.equal(analizarMarcado('<main id="main" tabIndex={-1} className="outline-none">', 'a.tsx').length, 0);
  assert.equal(analizarTexto('{ "Unlock": "sin candado" }', 'es.json').length, 0);
  assert.equal(analizarTexto('Everything in one place, all in one secure place.', 'a.md').length, 0);
  assert.ok(analizarTexto('The all-in-one platform', 'a.md').length > 0);
});
