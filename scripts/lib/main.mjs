// True when the module is the entry point, also when it runs through a symbolic link.
import { realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export function isMainScript(moduleUrl) {
  if (!process.argv[1]) return false;
  try {
    return realpathSync(process.argv[1]) === realpathSync(fileURLToPath(moduleUrl));
  } catch {
    return false;
  }
}
