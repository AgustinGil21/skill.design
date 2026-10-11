// Recorre archivos y carpetas devolviendo rutas con las extensiones pedidas.
import { readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const IGNORAR = new Set(['node_modules', '.git', 'dist', 'build', '.next', '.astro', '.output', 'coverage', '.turbo', '.vercel']);

export function recolectar(rutas, extensiones) {
  const salida = [];
  const visitar = (ruta) => {
    let info;
    try {
      info = statSync(ruta);
    } catch {
      console.error(`No existe: ${ruta}`);
      return;
    }
    if (info.isDirectory()) {
      for (const nombre of readdirSync(ruta)) {
        if (IGNORAR.has(nombre) || nombre.startsWith('.')) continue;
        visitar(join(ruta, nombre));
      }
    } else if (extensiones.has(extname(ruta).toLowerCase())) {
      salida.push(ruta);
    }
  };
  for (const ruta of rutas) visitar(ruta);
  return salida;
}

export function lineaDe(texto, indice) {
  let linea = 1;
  for (let i = 0; i < indice && i < texto.length; i++) if (texto.charCodeAt(i) === 10) linea++;
  return linea;
}

export function imprimir(hallazgos, { json, titulo }) {
  if (json) {
    console.log(JSON.stringify(hallazgos, null, 2));
    return;
  }
  if (hallazgos.length === 0) {
    console.log(`${titulo}: sin hallazgos.`);
    return;
  }
  console.log(`${titulo}: ${hallazgos.length} hallazgo(s)\n`);
  for (const h of hallazgos) {
    console.log(`${h.archivo}:${h.linea}  [${h.nivel}] ${h.regla}`);
    console.log(`  ${h.mensaje}`);
    if (h.fragmento) console.log(`  > ${h.fragmento}`);
  }
}
