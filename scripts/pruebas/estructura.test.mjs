// Verifica que la skill esté sana: frontmatter válido y que toda ruta citada exista.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const leer = (ruta) => readFileSync(join(RAIZ, ruta), 'utf8');

test('SKILL.md tiene frontmatter con name y description', () => {
  const texto = leer('SKILL.md');
  const fm = texto.match(/^---\n([\s\S]*?)\n---/);
  assert.ok(fm, 'falta frontmatter');
  assert.match(fm[1], /^name: diseno$/m);
  const descripcion = fm[1].match(/^description: (.+)$/m);
  assert.ok(descripcion && descripcion[1].length > 50 && descripcion[1].length <= 1024);
  assert.ok(texto.split('\n').length < 500, 'SKILL.md debe seguir siendo corto');
});

test('los agentes tienen frontmatter válido', () => {
  for (const archivo of readdirSync(join(RAIZ, 'agentes'))) {
    const fm = leer(`agentes/${archivo}`).match(/^---\n([\s\S]*?)\n---/);
    assert.ok(fm, `${archivo} sin frontmatter`);
    assert.match(fm[1], /^name: [a-z-]+$/m, archivo);
    assert.match(fm[1], /^description: .{30,}$/m, archivo);
  }
});

// Rutas citadas entre comillas invertidas que terminan en .md o .mjs.
function rutasCitadas(texto) {
  return [...texto.matchAll(/`([\w./-]+\.(?:md|mjs))`/g)].map((m) => m[1]);
}

function resolver(ruta, desde) {
  const candidatos = [
    join(RAIZ, ruta),
    join(RAIZ, 'conocimiento', ruta),
    join(RAIZ, 'conocimiento', 'patrones', ruta),
    join(RAIZ, 'conocimiento', 'landing', ruta),
    join(RAIZ, dirname(desde), ruta),
  ];
  return candidatos.some((c) => existsSync(c));
}

test('toda ruta citada en SKILL.md, flujos y agentes existe', () => {
  const archivos = ['SKILL.md', 'AGENTS.md', ...readdirSync(join(RAIZ, 'flujos')).map((f) => `flujos/${f}`), ...readdirSync(join(RAIZ, 'agentes')).map((f) => `agentes/${f}`)];
  const faltantes = [];
  for (const archivo of archivos) {
    for (const ruta of rutasCitadas(leer(archivo))) {
      if (ruta.includes('<') || ruta.startsWith('*')) continue;
      if (!resolver(ruta, archivo)) faltantes.push(`${archivo} → ${ruta}`);
    }
  }
  assert.deepEqual(faltantes, []);
});

test('los enlaces markdown internos del conocimiento existen', () => {
  const faltantes = [];
  const recorrer = (carpeta) => {
    for (const nombre of readdirSync(join(RAIZ, carpeta), { withFileTypes: true })) {
      const ruta = join(carpeta, nombre.name);
      if (nombre.isDirectory()) recorrer(ruta);
      else if (nombre.name.endsWith('.md')) {
        for (const m of leer(ruta).matchAll(/\]\(([^)#\s]+\.md)(?:#[^)]*)?\)/g)) {
          if (/^https?:/.test(m[1])) continue;
          if (!existsSync(join(RAIZ, carpeta, m[1]))) faltantes.push(`${ruta} → ${m[1]}`);
        }
      }
    }
  };
  recorrer('conocimiento');
  assert.deepEqual(faltantes, []);
});
