# Motion recipes (accessible base CSS)

Dependency-free code meant as a starting point. The recipes prioritize reduced motion and a usable static baseline;
verify the assembled component because snippets cannot establish complete accessibility. With animation libraries,
apply the same rules and check their current documentation before using them. For when and why to animate, see
[motion](06-motion.md).

## The reduced-motion contract

Every recipe follows the same contract:

1. **Content is visible by default.** Nothing starts hidden waiting for JavaScript or an animation.
2. **With `prefers-reduced-motion: reduce`**: no translation, scale, parallax, scroll-linked movement or autoplay.
   Opacity changes and instant state changes are allowed, so feedback remains perceivable.
3. **WCAG 2.2.2 Pause, Stop, Hide (A)** requires control of qualifying automatic movement: over five seconds,
   alongside other content, unless essential. Auto-updating information has a separate branch without that duration.
4. **Prefer `transform` and `opacity`** for composited movement; color feedback and measured layout transitions
   can be appropriate. Profiling determines cost, not a universal ban on other properties.

## 1. Motion tokens

```css
:root {
  --duration-fast: 150ms;   /* hover, focus, click */
  --duration-medium: 300ms; /* entrances */
  --duration-slow: 500ms;   /* section changes */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);     /* starts fast, settles gently */
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);      /* for exits */
  --ease-move: cubic-bezier(0.65, 0, 0.35, 1);   /* from one place to another */
  --distance: 16px;
  --press-scale: 0.98;
  --hover-lift: -1px;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-medium: 1ms;
    --duration-slow: 1ms;
    --distance: 0px;
    --press-scale: 1;
    --hover-lift: 0px;
  }
}
```

One place for the motion language. With reduced motion, movement disappears without touching each rule; fast
durations remain for color and opacity feedback.

## 2. Reveal on entering the viewport (progressive enhancement)

```css
.reveal {
  /* Visible by default: if nothing below works, the content is there. */
  opacity: 1;
  transform: none;
}

@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .reveal {
      animation: reveal linear both;
      animation-timeline: view();
      animation-range: entry 10% cover 30%;
    }
  }
}

@keyframes reveal {
  from { opacity: 1; transform: translateY(var(--distance)); }
  to   { opacity: 1; transform: none; }
}
```

- Use it on two or three key blocks, not on every section.
- Content never starts hidden by JavaScript that might not run.
- Scroll-driven animations are reversible by nature; for "once only" entrances, use `IntersectionObserver` (recipe 3).

## 3. Reveal once with IntersectionObserver

```js
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

function revealOnce(selector) {
  if (reduceMotion.matches || !('IntersectionObserver' in window)) return;
  const items = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -10% 0px' });
  for (const item of items) {
    item.classList.add('will-reveal');
    observer.observe(item);
  }
}

revealOnce('[data-reveal]');
```

```css
.will-reveal {
  opacity: 1;
  transform: translateY(var(--distance));
  transition:
    opacity var(--duration-medium) var(--ease-out),
    transform var(--duration-medium) var(--ease-out);
}
.will-reveal.is-revealed {
  opacity: 1;
  transform: none;
}
```

The enhancement moves visible content rather than concealing it. If observing fails after a class is added, the
content remains readable. Use this on noninteractive presentation blocks; delayed movement around focused controls
can disorient people. The following override also handles a preference change after initialization.

```css
@media (prefers-reduced-motion: reduce) {
  .will-reveal { transform: none; transition: none; }
}
```

## 4. Button and card feedback

```css
.button {
  transition:
    transform var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out);
}
.button:hover { transform: translateY(var(--hover-lift)); }
.button:active { transform: translateY(0) scale(var(--press-scale)); }
.button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}
```

- With reduced motion the tokens make lift and press scale zero; the background color change still gives feedback.
- Visible focus is part of the design, not a detail to remove.

## 5. A logo strip that can be paused

The organization names and asset filenames below are fictional placeholders, not customer endorsements.

```html
<div class="strip" data-paused="false">
  <button type="button" class="strip__toggle" hidden aria-pressed="false">Pause logo animation</button>
  <ul class="strip__track">
    <li><img src="logo-a.svg" alt="Northwind Clinics" /></li>
    <li><img src="logo-b.svg" alt="Lisboa Coffee" /></li>
    <!-- duplicated set for the loop -->
    <li aria-hidden="true"><img src="logo-a.svg" alt="" /></li>
    <li aria-hidden="true"><img src="logo-b.svg" alt="" /></li>
  </ul>
</div>
```

```css
.strip { overflow: hidden; }
.strip__track {
  display: flex;
  gap: 48px;
  width: auto;
  flex-wrap: wrap;
  list-style: none;
}
.strip__track [aria-hidden="true"] { display: none; }
.strip[data-ready="true"] .strip__track {
  width: max-content;
  flex-wrap: nowrap;
  animation: slide 40s linear infinite;
}
.strip[data-ready="true"] .strip__track [aria-hidden="true"] { display: list-item; }
.strip:hover .strip__track,
.strip:focus-within .strip__track,
.strip[data-paused="true"] .strip__track {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .strip[data-ready="true"] .strip__track { animation: none; flex-wrap: wrap; width: auto; }
  .strip[data-ready="true"] .strip__track [aria-hidden="true"] { display: none; }
  .strip__toggle { display: none; }
}
@keyframes slide {
  to { transform: translateX(calc(-50% - 24px)); }
}
```

```js
for (const strip of document.querySelectorAll('.strip')) {
  const toggle = strip.querySelector('.strip__toggle');
  toggle.addEventListener('click', () => {
    const paused = strip.dataset.paused !== 'true';
    strip.dataset.paused = String(paused);
    toggle.setAttribute('aria-pressed', String(paused));
  });
  toggle.hidden = false;
  strip.dataset.ready = 'true';
}
```

- The working pause button addresses the movement control; hover pause alone is insufficient. Test it in context.
- The duplicated set is hidden from assistive technology so it is not read twice.
- Set an explicit LTR track direction for this geometry; localize surrounding controls separately.
  For an RTL track, recompute the start position and translation rather than only reversing the animation.
- Consider a static strip: often the better choice. Equal duplicate sets and the 48px gap are assumptions here.
  Verify the join after images load; changing geometry requires recalculating the half-gap offset.

## 6. Responsible background video

```html
<video class="hero-video" muted loop playsinline preload="none" poster="hero.avif">
  <source src="hero.webm" type="video/webm" />
  <source src="hero.mp4" type="video/mp4" />
</video>
<button type="button" class="hero-video__toggle" hidden>Pause video</button>
```

Note: no `autoplay` attribute. Playback starts from script only when motion is allowed.

```js
const video = document.querySelector('.hero-video');
const toggle = document.querySelector('.hero-video__toggle');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
let pausedByUser = false;
let inView = false;

function syncLabel() {
  toggle.textContent = video.paused ? 'Play video' : 'Pause video';
}
function update() {
  const allowed = inView && !reduceMotion.matches && !pausedByUser && !document.hidden;
  if (allowed) {
    video.play().then(() => {
      if (!inView || reduceMotion.matches || pausedByUser || document.hidden) video.pause();
      syncLabel();
    }).catch(syncLabel);
  } else {
    video.pause();
    syncLabel();
  }
}

// Without observation support, keep the poster rather than start an unmanaged background loop.
if ('IntersectionObserver' in window) {
  toggle.hidden = reduceMotion.matches;
  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    update();
  });
  observer.observe(video);
  document.addEventListener('visibilitychange', update);
  reduceMotion.addEventListener('change', () => {
    if (reduceMotion.matches && document.activeElement === toggle) {
      video.pause(); // Retain the focused button until focus leaves it.
    } else {
      toggle.hidden = reduceMotion.matches;
    }
    update();
  });
  toggle.addEventListener('blur', () => { toggle.hidden = reduceMotion.matches; });
  toggle.addEventListener('click', () => {
    pausedByUser = !video.paused;
    update();
  });
  video.addEventListener('play', syncLabel);
  video.addEventListener('pause', syncLabel);
  video.addEventListener('error', () => { video.pause(); syncLabel(); });
}

```

- With reduced motion, the poster is shown and nothing plays.
- Paused off-screen and in hidden tabs; the visitor can pause at any time.
- This recipe assumes decorative video. Informative media needs alternatives appropriate to its content;
  prerecorded audio in synchronized media requires captions under WCAG 1.2.2 (A), subject to its exception.
- Ordinary text needs 4.5:1 against every relevant frame under WCAG 1.4.3 (AA); qualifying large text needs 3:1.

## 7. Smooth view change (View Transitions as enhancement)

```js
function changeView(update) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || reduce) {
    update();
    return;
  }
  document.startViewTransition(update);
}
```

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: var(--duration-medium);
  animation-timing-function: var(--ease-move);
}
```

For navigation-like changes, focus the new heading when appropriate (`tabindex="-1"` if needed).
For a local update such as sorting, preserve focus. Animation completion should not determine the semantic state.

## 8. Tabs with an automatic cycle

For hero tabs that rotate demos (as in [Sana](https://mobbin.com/sites/sections/7f35e77e-e242-4333-809d-49fc3156ba43)):

- The cycle **stops after interaction**; resuming should require an explicit visitor action.
- A visible **pause button** for the cycle; apply the automatic-update branch of WCAG 2.2.2 as relevant.
- With reduced motion, **no automatic cycle**: the first tab is shown and the visitor chooses.
- Tabs follow the ARIA tabs pattern (arrow keys, `aria-selected`, `aria-controls`); the automatic change does not move
  focus or announce itself.

## 9. A counter that does not annoy

- The final number is in the HTML (`<span>12,000</span>`); animate only the visual presentation, and with reduced
  motion, do not animate.
- Do not use `aria-live` on counters: screen readers would announce every value.
- Format with the visitor's locale (`Intl.NumberFormat`), never hard-coded separators.

## 10. Parallax, carefully

```css
@supports (animation-timeline: scroll()) {
  @media (prefers-reduced-motion: no-preference) {
    .parallax-layer {
      animation: drift linear both;
      animation-timeline: scroll();
    }
  }
}
@keyframes drift {
  to { transform: translateY(-40px); }
}
```

- Prefer small distances on decorative layers. Keep reading text stationary; a controlled motion demonstration
  can justify another treatment when an equivalent readable presentation remains available.
- Without support or with reduced motion, the layer is static.
- Keep to one scroll-linked effect per page. Two of them compete for the same scroll and the page starts to feel
  like it is moving the reader instead of the other way round.

## 11. An animation as a function of time

For a choreographed illustration with several moving parts (a tactics board where players run and the ball travels,
a diagram where a request moves between services), do not chain tweens and callbacks. Describe the scene as data and
compute everything on screen from one number: the elapsed time.

```js
// The scene is data: who starts where, the paths, and timed steps (seconds from the start).
const scene = {
  players: [{ id: 'cb', at: [21, 46] }, { id: 'dm', at: [38, 31] }],
  ball: [21, 46],
  paths: { pass: [[21, 46], [38, 31]] },
  steps: [
    { at: 0.3, duration: 0.7, reveal: 'pass' },
    { at: 0.3, duration: 0.7, follow: 'ball', path: 'pass' },
  ],
};

const duration = (scene) => Math.max(...scene.steps.map((s) => s.at + (s.duration ?? 0)));

// Everything visible at time t. Pure: same scene and t, same picture.
function stateAt(scene, t) {
  const positions = Object.fromEntries(scene.players.map((p) => [p.id, p.at]));
  positions.ball = scene.ball;
  const revealed = {};
  for (const step of scene.steps) {
    if (t < step.at) continue;
    const progress = Math.min((t - step.at) / step.duration, 1);
    if (step.reveal) revealed[step.reveal] = progress;
    if (step.follow) positions[step.follow] = pointAlong(scene.paths[step.path], easeInOut(progress));
  }
  return { positions, revealed };
}
```

A clock adds real elapsed time each frame and only runs when it should:

```js
let time = 0;
let last = null;
function frame(now) {
  if (!running()) { last = null; return; } // paused, off-screen, hidden tab or reduced motion
  time += last === null ? 0 : (now - last) / 1000;
  last = now;
  draw(stateAt(scene, Math.min(time, duration(scene))));
  requestAnimationFrame(frame);
}
```

Why this shape:

- **Reduced motion is free**: draw `stateAt(scene, duration(scene))`, the final frame, which is the complete
  explanation. Showing the first frame instead would show nothing happening.
- **Pause is free** (WCAG 2.2.2): stop adding time. Resuming continues from the same frame, not from the start.
- **It is testable without a browser**: assert the state at 0, halfway and at the end of every scene; check that
  every revealed path ends fully drawn.
- **Several scenes play in turn** with a hold between them (about two seconds on the final frame, so it can be read).
  A scene chosen by hand while paused plays once and stops on its final frame; it does not resume the cycle.
- **Stop the clock off-screen and in hidden tabs**, and keep the person's pause separate from those automatic stops.

When not to use it: a single entrance or a hover effect. A transition in CSS is simpler and enough.

## 12. A staged sequence that tells cause and effect

To show how something flows through a product (a message sent on the web, received on a phone, confirmed, counted
in a report), animate the **stages**, not the decoration. A counter from 0 to N advances with timers once the
illustration enters the viewport for the first time:

```js
const DELAYS = [700, 650, 1000, 700]; // time spent in stage 0, 1, 2, 3
let stage = 0;

function advance() {
  if (stage >= DELAYS.length) return;
  timer = setTimeout(() => { stage += 1; render(stage); advance(); }, DELAYS[stage]);
}

if (reduceMotion.matches) render(DELAYS.length); // the final stage: everything delivered and counted
else onFirstView(illustration, advance);
```

- Each stage changes one thing the visitor can name: the button reads "Sent", the notification appears, the answer
  turns to "Confirmed", the count goes from 30 to 31. Connections between steps draw when their stage arrives.
- The whole sequence lasts a few seconds and runs once. It is not a loop.
- The illustration as a whole has one accessible name describing the flow; the intermediate stages are not
  announced.
- With reduced motion, show the final stage immediately: it contains the whole story.

## 13. A flicker with a flash budget

A wordmark that switches on like an old tube, a status light that comes alive: flicker is effective once and
dangerous if careless. **WCAG 2.3.1 Three Flashes or Below Threshold (A)** limits flashes to three in any one
second, and large elements are the riskiest. Encode the flicker as data so the limit can be tested:

```js
// [seconds, level 0–1]: a near-full flash that dies, a half-power attempt, a drop, then on for good.
const FLICKER = [[0.18, 0.85], [0.24, 0], [0.62, 0.35], [0.7, 0], [1.12, 1], [1.2, 0.08], [1.55, 1]];
```

```js
// A test, not a comment: count rises in level and check every one-second window.
const flashes = FLICKER.filter(([, level], i) => i > 0 && level > FLICKER[i - 1][1]).map(([at]) => at);
for (const start of flashes) {
  assert(flashes.filter((at) => at >= start && at < start + 1).length <= 3);
}
```

- **Desynchronize slightly**: offset each letter by a few milliseconds and let one letter lag and skip a step.
  Perfectly synchronized flicker is what makes the effect read as generated.
- **Play once**, when the element first enters the viewport. Never loop it.
- **With reduced motion, the element is simply on.** The flicker never runs.
- **Off and on are colors, not opacity**: "off" is the background color and "on" the ink, so the effect reads the
  same in light and dark themes.

## 14. A theme switch with direction

Switching between light and dark can be a View Transition of the whole viewport with a different mask for each
direction: to light, a rectangle opens from the center; to dark, the light view closes from top and bottom like
eyelids. Because the transition captures the viewport, it works at any scroll position.

```js
function switchTheme(next) {
  const root = document.documentElement;
  const target = resolve(next); // 'system' resolves to the operating system's preference
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !document.startViewTransition || root.dataset.theme === target) {
    apply(next);
    return;
  }
  root.dataset.themeTransition = target === 'light' ? 'open' : 'close';
  const transition = document.startViewTransition(() => {
    apply(next); // must update the DOM synchronously inside the callback
    root.dataset.theme = target;
  });
  transition.finished.finally(() => delete root.dataset.themeTransition);
}
```

```css
@media (prefers-reduced-motion: no-preference) {
  html[data-theme-transition]::view-transition-old(root),
  html[data-theme-transition]::view-transition-new(root) { animation: none; mix-blend-mode: normal; }
  html[data-theme-transition='open']::view-transition-new(root) {
    animation: theme-open 700ms var(--ease-move) both;
  }
  html[data-theme-transition='close']::view-transition-old(root) {
    z-index: 1;
    animation: theme-close 650ms var(--ease-move) both;
  }
}
@keyframes theme-open { from { clip-path: inset(50% 50% 50% 50%); } to { clip-path: inset(0); } }
@keyframes theme-close { from { clip-path: inset(0); } to { clip-path: inset(50% 0 50% 0); } }
```

- **A data attribute on the root picks the direction**; the CSS only reads it. Remove it when the transition ends.
- **No transition when the painted theme does not change** (choosing "System" while the system is already light).
- **Frameworks that batch updates** must flush the change inside the callback (in React, `flushSync`); otherwise the
  "new" snapshot is taken before the DOM changed and nothing animates.
- **Under a second.** It is feedback for a choice the person just made, not a show; repeated switching must not queue
  long animations.
- Restricting it to one area of the product (a public site, not the application) is a valid choice: the same
  preference can switch instantly inside a tool where people change it to work, not to look.

## 15. A reading position indicator that does not skip sections

A table of contents that marks the section being read usually marks the last heading above a line about a third of
the way down the viewport. The closing sections of a document are often too short to ever reach that line before
the page ends, so the indicator stops early. The obvious fix, "mark the last heading at the bottom of the page",
jumps over the sections in between.

Slide the line down over the last stretch of scroll instead, so every closing section takes its turn:

```js
const READING_LINE = 0.35; // a third of the way down
const END_STRETCH = 0.6;   // over the last 60% of a viewport of scroll, the line slides to the bottom

function readingLine() {
  const maxScroll = document.documentElement.scrollHeight - innerHeight;
  const stretch = innerHeight * END_STRETCH;
  const progress = Math.min(Math.max((scrollY - (maxScroll - stretch)) / stretch, 0), 1);
  const top = innerHeight * READING_LINE;
  return top + (innerHeight - 24 - top) * progress;
}

function activeHeading(headings) {
  if (document.documentElement.scrollHeight <= innerHeight) return headings[0]; // nothing to scroll
  const line = readingLine();
  const passed = headings.filter((h) => h.getBoundingClientRect().top <= line);
  return passed.at(-1) ?? headings[0];
}
```

- Mark the active link with `aria-current="location"`; do not move focus or announce the change.
- A page that does not scroll keeps the first heading: it has no end to reach.
- Verify it by scrolling in small steps from top to bottom and recording which heading is marked: the sequence must
  contain every heading, in order (see [real state and verification](../08-real-state-and-verification.md)).

## Choose the behavior before the recipe

The objection motion answers should be concrete: “How does this change?” or “Which result belongs to this input?”
If the answer is merely “the page feels static,” compare a stronger static composition before adding movement.
A recipe proves that an effect can be built; it does not prove that the effect helps this visitor.

| Situation | Choice | Benefit | Cost |
| --- | --- | --- | --- |
| Compare stable product details | Static composition | Supports inspection | Less theatrical pacing |
| Demonstrate a transformation | Visitor-controlled replay | Shows cause and effect | Adds a control |
| Decorative brand atmosphere | Optional background motion | Carries a visual idea | Distraction and media cost |
| Change application state | Brief transition | Preserves spatial continuity | Needs focus and interruption design |

Ask whether the motion can finish late, whether it contains a focusable element, and what happens when the page
returns from a hidden tab. Decide which state wins if a person pauses just as an observer requests playback.
Visitor pause should persist; scrolling away and back should not silently reverse that explicit decision.

## Worked comparison and state review

Fictional example: a scheduling product demonstrates moving an appointment. The weak implementation animates the
whole page, hides the appointment until a scroll threshold and announces every intermediate position. It obscures
the information while producing noise for assistive technology.

A stronger version shows the appointment and its original time immediately. A labeled replay demonstrates one move,
with the final time also available in text. Keyboard focus remains on replay; the visual animation does not pretend
to make a real booking. Reduced motion shows the before/after states without travel across the screen.

This costs some spectacle but makes the demonstration inspectable. Prefer an actual interactive trial when the
visitor needs to evaluate complex constraints; a scripted clip cannot establish that arbitrary edits will work.

| State | Expected behavior |
| --- | --- |
| Script unavailable | Content and poster remain useful; no uncontrolled loop starts |
| Observer or media failure | Keep readable content; stop or retain the static alternative |
| Reduced motion enabled mid-session | Stop movement without hiding the current information |
| User paused | Preserve pause across visibility and viewport changes |
| Playback rejected | Reflect the actual paused state, not the attempted action |
| Navigation interrupted | Destination state and focus remain understandable |

## Accessibility, copy and localization checks

Reduced-motion support is a recommendation throughout these recipes. WCAG 2.3.3 Animation from Interactions is AAA;
do not describe it as an AA requirement. WCAG 2.2.2 (A), keyboard operation under 2.1.1 (A), and programmatic names,
roles and states under 4.1.2 (A) apply independently. Passing a media query check does not establish conformance.
See the [WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/) for criterion scope and exceptions.

A toggle with `aria-pressed` keeps a stable action label; a normal button can instead change between play and pause
labels. Mixing a changing action name with pressed state can make its meaning ambiguous. Localize the complete
labels, and allow translated controls to grow without covering the demonstration.

Keep timed text readable without a timer; translation changes reading pace and line length. Avoid animating letters
as independent spans when it breaks shaping or pronunciation. Use locale-aware number formatting, keep animated
counters out of live announcements, and provide the final meaningful value. Reverse spatial motion only when the
underlying relationship changes with reading direction; a physical object does not mirror merely because text does.

## Verification and measurement

Test with scripts disabled, blocked media, rejected playback, off-screen content and a hidden tab. Toggle reduced
motion after initialization, pause manually, return to the page and confirm it remains paused. Test keyboard focus
through a transition before declaring the effect decorative. Profile on representative hardware with real assets.

Compare comprehension of the same transformation with and without motion. Measure whether visitors can explain
what changed and what remains editable. Guard against task delay, media transfer cost, accidental activation and
motion discomfort. Longer viewing time alone cannot distinguish interest from confusion.

The code is an implementation starting point, not a tested production widget. Component integrations also need
cleanup of observers and event listeners on removal, localized strings, error presentation and lifecycle tests.

## Common mistakes

- **Animating layout without measuring cost.** Prefer transforms for decorative movement; profile necessary resizing.
- **`will-change` on everything** (wastes memory). Only on what animates now.
- **Expensive scroll handlers** for effects CSS can handle in supported browsers; use a static fallback otherwise.
- **Hiding content with an initial `opacity: 0`** that depends on JavaScript.
- **`autoplay` in the markup** when reduced motion should prevent playback.
- **Reduced motion that only shortens durations** but keeps translation and scale.
- **Linear timing on movement** that is not tied to scroll, input or time: use the easing tokens (recipe 1).
- **Long durations for interactions** (a menu that takes 600 ms to open feels slow).
- **Chained tweens for a choreographed scene**: impossible to pause, test or show as a final frame. Compute the scene
  from time (recipe 11).
- **Reduced motion that shows the first frame** of an illustration, where nothing has happened yet. Show the last.
- **A flicker or flash checked by eye**: encode it as data and test the three-flashes limit (recipe 13).
- **A reading indicator that jumps to the last heading at the bottom**, skipping the short sections before it
  (recipe 15).

## Checklist

- [ ] Tokens defined; reduced motion zeroes movement but keeps feedback.
- [ ] Content visible by default, without JavaScript.
- [ ] Qualifying automatic movement and updates have working controls under WCAG 2.2.2.
- [ ] No autoplay with reduced motion; media pauses off-screen and in hidden tabs.
- [ ] Focus handled after view changes.
- [ ] Numbers formatted per locale; no live announcements of counters.
- [ ] Choreographed illustrations are a function of time; reduced motion shows the final frame.
- [ ] Any flicker is data with a test for WCAG 2.3.1, plays once and never runs with reduced motion.
- [ ] Automatic illustrations stop off-screen, in hidden tabs and while the person interacts with them.
- [ ] At most one scroll-linked effect per page.
