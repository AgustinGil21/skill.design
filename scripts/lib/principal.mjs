// Verdadero si el módulo es el punto de entrada, también cuando se ejecuta a través de un enlace simbólico.
import { realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export function esScriptPrincipal(urlDelModulo) {
  if (!process.argv[1]) return false;
  try {
    return realpathSync(process.argv[1]) === realpathSync(fileURLToPath(urlDelModulo));
  } catch {
    return false;
  }
}
