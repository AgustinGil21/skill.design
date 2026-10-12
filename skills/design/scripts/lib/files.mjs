// Walks files and folders, returning the paths with the requested extensions.
import { readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const IGNORE = new Set(['node_modules', '.git', 'dist', 'build', '.next', '.astro', '.output', 'coverage', '.turbo', '.vercel']);

export function collect(paths, extensions) {
  const out = [];
  const visit = (path) => {
    let info;
    try {
      info = statSync(path);
    } catch {
      console.error(`Not found: ${path}`);
      return;
    }
    if (info.isDirectory()) {
      for (const name of readdirSync(path)) {
        if (IGNORE.has(name) || name.startsWith('.')) continue;
        visit(join(path, name));
      }
    } else if (extensions.has(extname(path).toLowerCase())) {
      out.push(path);
    }
  };
  for (const path of paths) visit(path);
  return out;
}

export function lineOf(text, index) {
  let line = 1;
  for (let i = 0; i < index && i < text.length; i++) if (text.charCodeAt(i) === 10) line++;
  return line;
}

export function print(findings, { json, title }) {
  if (json) {
    console.log(JSON.stringify(findings, null, 2));
    return;
  }
  if (findings.length === 0) {
    console.log(`${title}: no findings.`);
    return;
  }
  console.log(`${title}: ${findings.length} finding(s)\n`);
  for (const f of findings) {
    console.log(`${f.file}:${f.line}  [${f.level}] ${f.rule}`);
    console.log(`  ${f.message}`);
    if (f.excerpt) console.log(`  > ${f.excerpt}`);
  }
}
