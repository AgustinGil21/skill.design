#!/usr/bin/env node
// Captures the screen of a running iOS Simulator or Android emulator/device in light and dark appearance and, on
// request, with large text, so native work can be looked at like web work. Navigate to the screen first (or pass
// --deeplink); the script changes appearance settings, captures, and restores them. Needs Xcode (xcrun simctl) for iOS
// or the Android platform tools (adb). No dependencies.
// Usage: node native-screenshots.mjs --platform ios|android [--name orders] [--out screenshots] [--modes light,dark]
//                                    [--large-text] [--deeplink myapp://orders] [--device <id>] [--dry-run]

import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { isMainScript } from './lib/main.mjs';

export function plan({ platform, name = 'screen', out = 'screenshots', modes = ['light', 'dark'], largeText = false, deeplink, device }) {
  const steps = [];
  const textSizes = largeText ? ['default', 'large'] : ['default'];
  if (platform === 'ios') {
    const target = device ?? 'booted';
    if (deeplink) steps.push({ cmd: 'xcrun', args: ['simctl', 'openurl', target, deeplink] });
    for (const mode of modes) {
      steps.push({ cmd: 'xcrun', args: ['simctl', 'ui', target, 'appearance', mode] });
      for (const size of textSizes) {
        steps.push({ cmd: 'xcrun', args: ['simctl', 'ui', target, 'content_size', size === 'large' ? 'accessibility-extra-large' : 'large'] });
        steps.push({ cmd: 'xcrun', args: ['simctl', 'io', target, 'screenshot', join(out, `${name}-ios-${mode}${size === 'large' ? '-large-text' : ''}.png`)] });
      }
    }
    steps.push({ cmd: 'xcrun', args: ['simctl', 'ui', target, 'appearance', 'light'], restore: true });
    steps.push({ cmd: 'xcrun', args: ['simctl', 'ui', target, 'content_size', 'large'], restore: true });
  } else if (platform === 'android') {
    const adb = device ? ['-s', device] : [];
    if (deeplink) steps.push({ cmd: 'adb', args: [...adb, 'shell', 'am', 'start', '-a', 'android.intent.action.VIEW', '-d', deeplink] });
    for (const mode of modes) {
      steps.push({ cmd: 'adb', args: [...adb, 'shell', 'cmd', 'uimode', 'night', mode === 'dark' ? 'yes' : 'no'] });
      for (const size of textSizes) {
        steps.push({ cmd: 'adb', args: [...adb, 'shell', 'settings', 'put', 'system', 'font_scale', size === 'large' ? '1.6' : '1.0'] });
        steps.push({ cmd: 'adb', args: [...adb, 'exec-out', 'screencap', '-p'], capture: join(out, `${name}-android-${mode}${size === 'large' ? '-large-text' : ''}.png`) });
      }
    }
    steps.push({ cmd: 'adb', args: [...adb, 'shell', 'cmd', 'uimode', 'night', 'no'], restore: true });
    steps.push({ cmd: 'adb', args: [...adb, 'shell', 'settings', 'put', 'system', 'font_scale', '1.0'], restore: true });
  } else {
    throw new Error('Use --platform ios or --platform android');
  }
  return steps;
}

const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

if (isMainScript(import.meta.url)) {
  const args = process.argv.slice(2);
  const value = (flag, fallback) => (args.includes(flag) ? args[args.indexOf(flag) + 1] : fallback);
  const options = {
    platform: value('--platform'),
    name: value('--name', 'screen'),
    out: value('--out', 'screenshots'),
    modes: value('--modes', 'light,dark').split(','),
    largeText: args.includes('--large-text'),
    deeplink: value('--deeplink'),
    device: value('--device'),
  };
  const steps = plan(options);
  if (args.includes('--dry-run')) {
    for (const step of steps) console.log(`${step.cmd} ${step.args.join(' ')}${step.capture ? ` > ${step.capture}` : ''}`);
    process.exit(0);
  }
  mkdirSync(options.out, { recursive: true });
  const saved = [];
  try {
    for (const step of steps) {
      const output = execFileSync(step.cmd, step.args, { maxBuffer: 64 * 1024 * 1024 });
      if (step.capture) writeFileSync(step.capture, output);
      const file = step.capture ?? (step.args.includes('screenshot') ? step.args.at(-1) : null);
      if (file) saved.push(file);
      if (!step.restore) sleep(700);
    }
  } catch (error) {
    console.error(`Capture failed: ${error.message}\nIs a simulator booted (xcrun simctl list devices booted) or a device connected (adb devices)?`);
    process.exit(1);
  }
  console.log(`Saved:\n${saved.map((f) => `  ${f}`).join('\n')}\n\nRead the images; compare with earlier captures using node visual-diff.mjs.`);
}
