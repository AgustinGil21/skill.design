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
- **Long durations for interactions** (a menu that takes 600 ms to open feels slow).

## Checklist

- [ ] Tokens defined; reduced motion zeroes movement but keeps feedback.
- [ ] Content visible by default, without JavaScript.
- [ ] Qualifying automatic movement and updates have working controls under WCAG 2.2.2.
- [ ] No autoplay with reduced motion; media pauses off-screen and in hidden tabs.
- [ ] Focus handled after view changes.
- [ ] Numbers formatted per locale; no live announcements of counters.
