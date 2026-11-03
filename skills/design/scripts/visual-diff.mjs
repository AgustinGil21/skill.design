#!/usr/bin/env node
// Compares screenshots pixel by pixel and writes a diff image with the changed pixels in red over a faded copy of the
// "after" image. Use it for before/after checks in the craft pass and for regressions. No dependencies: reads and
// writes 8-bit PNG (grayscale, RGB, RGBA, non-interlaced) with node:zlib.
// Usage: node visual-diff.mjs <before.png|before-dir> <after.png|after-dir> [--out dir] [--threshold 0.1] [--json]
//   Directories are compared by matching file names. --threshold is the per-channel tolerance (0–1) for anti-aliasing.

import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { deflateSync, inflateSync } from 'node:zlib';
import { isMainScript } from './lib/main.mjs';

const SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const byte of buf) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

export function decodePng(buffer) {
  if (!buffer.subarray(0, 8).equals(SIGNATURE)) throw new Error('Not a PNG file');
  let offset = 8;
  let width, height, bitDepth, colorType, interlace;
  const idat = [];
  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    const data = buffer.subarray(offset + 8, offset + 8 + length);
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      interlace = data[12];
    } else if (type === 'IDAT') idat.push(data);
    else if (type === 'IEND') break;
    offset += 12 + length;
  }
  const channels = { 0: 1, 2: 3, 4: 2, 6: 4 }[colorType];
  if (bitDepth !== 8 || !channels || interlace !== 0) {
    throw new Error(`Unsupported PNG (bit depth ${bitDepth}, color type ${colorType}, interlace ${interlace}): use 8-bit, non-interlaced screenshots`);
  }
  const raw = inflateSync(Buffer.concat(idat));
  const stride = width * channels;
  const pixels = Buffer.alloc(width * height * 4);
  let previous = Buffer.alloc(stride);
  for (let y = 0; y < height; y++) {
    const filter = raw[y * (stride + 1)];
    const line = Buffer.from(raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1)));
    for (let x = 0; x < stride; x++) {
      const a = x >= channels ? line[x - channels] : 0;
      const b = previous[x];
      const c = x >= channels ? previous[x - channels] : 0;
      let add = 0;
      if (filter === 1) add = a;
      else if (filter === 2) add = b;
      else if (filter === 3) add = (a + b) >> 1;
      else if (filter === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        add = pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      }
      line[x] = (line[x] + add) & 0xff;
    }
    for (let x = 0; x < width; x++) {
      const src = x * channels;
      const dst = (y * width + x) * 4;
      if (channels === 1 || channels === 2) {
        pixels[dst] = pixels[dst + 1] = pixels[dst + 2] = line[src];
        pixels[dst + 3] = channels === 2 ? line[src + 1] : 255;
      } else {
        pixels[dst] = line[src];
        pixels[dst + 1] = line[src + 1];
        pixels[dst + 2] = line[src + 2];
        pixels[dst + 3] = channels === 4 ? line[src + 3] : 255;
      }
    }
    previous = line;
  }
  return { width, height, pixels };
}

export function encodePng({ width, height, pixels }) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) pixels.copy(raw, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4);
  const chunk = (type, data) => {
    const out = Buffer.alloc(12 + data.length);
    out.writeUInt32BE(data.length, 0);
    out.write(type, 4, 'ascii');
    data.copy(out, 8);
    out.writeUInt32BE(crc32(out.subarray(4, 8 + data.length)), 8 + data.length);
    return out;
  };
  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6;
  return Buffer.concat([SIGNATURE, chunk('IHDR', header), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}

export function diffImages(before, after, threshold = 0.1) {
  const width = Math.max(before.width, after.width);
  const height = Math.max(before.height, after.height);
  const tolerance = Math.round(threshold * 255);
  const out = Buffer.alloc(width * height * 4);
  let changed = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const inBefore = x < before.width && y < before.height;
      const inAfter = x < after.width && y < after.height;
      const b = inBefore ? (y * before.width + x) * 4 : -1;
      const a = inAfter ? (y * after.width + x) * 4 : -1;
      let different = !inBefore || !inAfter;
      if (!different) {
        for (let c = 0; c < 4; c++) if (Math.abs(before.pixels[b + c] - after.pixels[a + c]) > tolerance) different = true;
      }
      if (different) {
        changed++;
        out[i] = 230; out[i + 1] = 30; out[i + 2] = 50; out[i + 3] = 255;
      } else {
        const gray = Math.round((after.pixels[a] + after.pixels[a + 1] + after.pixels[a + 2]) / 3);
        const faded = Math.round(255 - (255 - gray) * 0.25);
        out[i] = out[i + 1] = out[i + 2] = faded; out[i + 3] = 255;
      }
    }
  }
  return {
    width, height, changed, total: width * height,
    ratio: changed / (width * height),
    sizeChanged: before.width !== after.width || before.height !== after.height,
    image: { width, height, pixels: out },
  };
}

function pairs(beforePath, afterPath) {
  if (statSync(beforePath).isDirectory()) {
    return readdirSync(beforePath).filter((f) => f.endsWith('.png') && existsSync(join(afterPath, f))).map((f) => [join(beforePath, f), join(afterPath, f), f]);
  }
  return [[beforePath, afterPath, basename(afterPath)]];
}

if (isMainScript(import.meta.url)) {
  const args = process.argv.slice(2);
  const value = (flag, fallback) => (args.includes(flag) ? args[args.indexOf(flag) + 1] : fallback);
  const positional = args.filter((a, i) => !a.startsWith('--') && !['--out', '--threshold'].includes(args[i - 1]));
  if (positional.length < 2) {
    console.error('Usage: node visual-diff.mjs <before.png|dir> <after.png|dir> [--out dir] [--threshold 0.1] [--json]');
    process.exit(2);
  }
  const outDir = value('--out', 'visual-diff');
  const threshold = Number(value('--threshold', 0.1));
  mkdirSync(outDir, { recursive: true });
  const results = [];
  for (const [b, a, name] of pairs(positional[0], positional[1])) {
    const result = diffImages(decodePng(readFileSync(b)), decodePng(readFileSync(a)), threshold);
    const diffPath = join(outDir, name.replace(/\.png$/, '.diff.png'));
    if (result.changed > 0) writeFileSync(diffPath, encodePng(result.image));
    results.push({ name, changedPixels: result.changed, percent: Number((result.ratio * 100).toFixed(3)), sizeChanged: result.sizeChanged, diff: result.changed > 0 ? diffPath : null });
  }
  if (args.includes('--json')) console.log(JSON.stringify(results, null, 2));
  else {
    for (const r of results) {
      const note = r.changedPixels === 0 ? 'identical' : `${r.percent}% of pixels changed${r.sizeChanged ? ', size changed' : ''} → ${r.diff}`;
      console.log(`${r.name}: ${note}`);
    }
    console.log('\nA diff shows where pixels changed, not whether the change is right: look at each one.');
  }
}
