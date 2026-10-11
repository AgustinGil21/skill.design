# Motion recipes (accessible base CSS)

Dependency-free code meant as a starting point. Every recipe honors reduced motion and still works if the browser
does not support the advanced part. With animation libraries, apply the same rules (check their current documentation
before using them). For when and why to animate, see [motion](06-motion.md).

## The reduced-motion contract

Every recipe follows the same contract:

1. **Content is visible by default.** Nothing starts hidden waiting for JavaScript or an animation.
2. **With `prefers-reduced-motion: reduce`**: no translation, scale, parallax, scroll-linked movement or autoplay.
   Opacity changes and instant state changes are allowed, so feedback remains perceivable.
3. **Anything moving on its own for more than 5 seconds** has a visible pause control (WCAG 2.2.2).
4. **Only `transform` and `opacity` are animated.**

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
  from { opacity: 0; transform: translateY(var(--distance)); }
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
  opacity: 0;
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

The hidden class is only added by the script itself, so if the script fails or reduced motion is on, content stays
visible.

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

```html
<div class="strip" data-paused="false">
  <button type="button" class="strip__toggle" aria-pressed="false">Pause logos</button>
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
  width: max-content;
  list-style: none;
  animation: slide 40s linear infinite;
}
.strip:hover .strip__track,
.strip:focus-within .strip__track,
.strip[data-paused="true"] .strip__track {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .strip__track { animation: none; flex-wrap: wrap; width: auto; }
  .strip__track [aria-hidden="true"] { display: none; }
  .strip__toggle { display: none; }
}
@keyframes slide {
  to { transform: translateX(-50%); }
}
```

```js
for (const strip of document.querySelectorAll('.strip')) {
  const toggle = strip.querySelector('.strip__toggle');
  toggle.addEventListener('click', () => {
    const paused = strip.dataset.paused !== 'true';
    strip.dataset.paused = String(paused);
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Play logos' : 'Pause logos';
  });
}
```

- The visible pause button satisfies WCAG 2.2.2; hover pause alone does not.
- The duplicated set is hidden from assistive technology so it is not read twice.
- In right-to-left layouts, invert the direction of the keyframe.
- Consider a static strip: often the better choice.

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

function canPlay() {
  return !reduceMotion.matches && !pausedByUser && !document.hidden;
}

function update(visible) {
  if (visible && canPlay()) {
    video.play().catch(() => {});
  } else {
    video.pause();
  }
  toggle.textContent = video.paused ? 'Play video' : 'Pause video';
}

if (!reduceMotion.matches) {
  video.preload = 'metadata';
  toggle.hidden = false;
  const observer = new IntersectionObserver(([entry]) => update(entry.isIntersecting));
  observer.observe(video);
  document.addEventListener('visibilitychange', () => update(!document.hidden));
  toggle.addEventListener('click', () => {
    pausedByUser = !video.paused;
    update(true);
  });
}
```

- With reduced motion, the poster is shown and nothing plays.
- Paused off-screen and in hidden tabs; the visitor can pause at any time.
- The video is decorative here; if it carries information, it needs captions and a text alternative.
- Text on top gets a scrim sufficient for 4.5:1 against the lightest frame.

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

After the change, move focus to the heading of the new content (with `tabindex="-1"` on the heading if needed).

## 8. Tabs with an automatic cycle

For hero tabs that rotate demos (as in [Sana](https://mobbin.com/sites/sections/7f35e77e-e242-4333-809d-49fc3156ba43)):

- The cycle **stops forever** once the visitor interacts with any tab.
- A visible **pause button** for the cycle (it moves on its own for more than 5 seconds).
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

- Small distances, decorative layers only, never on text.
- Without support or with reduced motion, the layer is static.

## Common mistakes

- **Animating `height`, `width`, `top` or `margin`** (stutters). Use `transform`.
- **`will-change` on everything** (wastes memory). Only on what animates now.
- **Listening to `scroll` in JavaScript** for effects CSS already handles.
- **Hiding content with an initial `opacity: 0`** that depends on JavaScript.
- **`autoplay` in the markup** when reduced motion should prevent playback.
- **Reduced motion that only shortens durations** but keeps translation and scale.
- **Long durations for interactions** (a menu that takes 600 ms to open feels slow).

## Checklist

- [ ] Tokens defined; reduced motion zeroes movement but keeps feedback.
- [ ] Content visible by default, without JavaScript.
- [ ] Every self-moving element over 5 seconds has a visible pause.
- [ ] No autoplay with reduced motion; media pauses off-screen and in hidden tabs.
- [ ] Focus handled after view changes.
- [ ] Numbers formatted per locale; no live announcements of counters.
