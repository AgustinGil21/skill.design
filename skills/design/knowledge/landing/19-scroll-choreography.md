# Scroll choreography: making a landing page come alive

> Verified: 2026-11-03 · Review by: 2027-05-03 · Time-sensitive: GSAP and browser support for scroll-driven animation.

When the person asks for an expressive, animated landing page — a brand, a product launch, a portfolio, a world to
explore — scroll becomes the timeline of a story. The page does not only move up: elements slide sideways, zoom in
and out, rotate, travel along paths, change shape and color, and are revealed through masks; one object can stay on
screen and transform section after section. Done well, it gives the page life and makes the product memorable. Done
badly, it is slow, disorienting and hides the content.

**When this applies.** Only when the person asks for it or the brand clearly calls for it (expressive consumer
brands, entertainment, launches, portfolios). For product pages that must convert quickly, documentation and work
tools, motion stays restrained ([motion](06-motion.md)). Everything here keeps the skill's rules: content readable
without the animation, a reduced-motion version, no gimmick easings.

Related: [motion](06-motion.md) · [motion recipes](15-motion-recipes.md) · [physical motion](18-physical-motion.md) ·
[animation techniques](../37-animation-techniques.md) · [authored and rendered motion](../38-authored-and-rendered-motion.md).

## The vocabulary: what can move with the scroll

Think of scroll progress (0 to 1 across a section) as the playhead of a timeline. Any property that can be animated
cheaply can follow it.

| Move | What it does | Typical use |
| --- | --- | --- |
| **Vertical parallax** | Layers move at different speeds | Depth in a hero; foreground objects passing in front of text |
| **Horizontal travel** | Elements or a whole track move sideways while the page scrolls down | Galleries, timelines, product lines, chapters of a story |
| **Zoom (scale)** | An element grows into the viewport or recedes | Entering a scene, focusing on a detail, a product filling the screen |
| **Rotation** | An object turns as you scroll | A product shown from every side, a wheel, a dial, a planet |
| **Path travel** | An element follows a curve (an SVG path) | A route, a race line, a journey between sections |
| **Drawing** | A line or signature is drawn with the scroll | Signatures, diagrams, connections between items |
| **Morph** | One shape becomes another | A logo becoming an icon, a blob becoming a frame |
| **Mask reveal** | Content appears through a growing window (`clip-path` or `mask-image`) | Images opening from a point, a slit, a circle; video behind text |
| **Color and theme** | Background, text and accent colors change between sections | Chapters with their own mood; light to dark transitions |
| **Text fill** | Words fill from a faint color to full color as the scroll passes them | Statements meant to be read slowly; manifesto sections |
| **Pin (sticky scene)** | A section stays fixed while its inner timeline plays | Any scene with several steps: the scroll advances the scene, not the page |
| **State change of a persistent object** | One element stays across sections and changes (position, rotation, color, label) | A product that turns to show each feature as the copy beside it changes |
| **Image sequence** | Frames swap with the scroll (like a flipbook) | Product rotations, exploded views, short cinematic moments |
| **3D scene camera** | A WebGL camera moves through a scene | Immersive brand worlds ([authored and rendered motion](../38-authored-and-rendered-motion.md)) |

**Combining moves creates the experience.** An image that scales up *and* opens through a mask *while* the background
darkens is one moment; a gallery that travels sideways *while* each photo drifts at its own speed feels alive. Combine
two or three moves per element, choreographed on one timeline — not ten unrelated effects.

## Pointer and hover as a second input

On devices with a fine pointer, the mouse can add a second layer of life:

- **Depth that follows the pointer**: hero layers shift slightly toward the cursor, as if the scene had depth.
- **Hover that transforms**: an image moves from duotone to full color, a card tilts a few degrees, a mask opens.
- **Elements that react near the cursor**: a magnetic call to action, letters that lean away.
- **A layer revealed by the cursor** (a spotlight or "x-ray" mask): two aligned images or scenes are stacked, and a
  soft circle that follows the pointer shows the top one only where the cursor is — the person and their helmet, a
  product and its insides, a city by day and by night. It tells a two-sided story in one gesture.

Keep it subtle (a few pixels or degrees), smooth (interpolated, not jumpy), only on `(hover: hover) and (pointer:
fine)`, and never required to read or act. A custom cursor stays a brand decision with a reason; the native cursor
must remain usable.

## Designing the choreography

1. **Write the story first.** One idea per scene: what the visitor should understand when the scene ends ("the helmet
   is his signature", "the drink comes in four flavors", "this world has factions"). Motion serves that idea.
2. **Storyboard the scroll.** For each scene: start state, end state, what moves on which axis, and the scroll distance
   (in viewport heights) it takes. A scene of one to three viewport heights is usually enough; longer pinned scenes
   feel like being held.
3. **Choose one hero object per scene** and let the rest support it.
4. **Map scroll to progress, not time.** Scroll-scrubbed motion uses linear mapping (`ease: "none"`); the easing comes
   from the scrub smoothing and from how the keyframes are spaced. Motion triggered once (an entrance) uses the
   system's decelerating easing.
5. **Design the end state of every scene as a readable layout.** Anyone who scrolls fast, stops mid-scene or uses
   reduced motion should see a complete, readable composition.
6. **Vary the rhythm.** Alternate pinned scenes with normal scrolling sections, so the page breathes and the visitor
   keeps a sense of control.
7. **Plan mobile separately.** Pinned horizontal tracks and long scenes often become vertical stacks or shorter
   scenes on phones; touch scrolling and small screens change what reads well.

## Implementation

### Choosing the tool

| Tool | Use when | Notes |
| --- | --- | --- |
| **CSS scroll-driven animations** (`animation-timeline: scroll()` / `view()`) | Simple scroll-linked moves (parallax, reveals, progress) | No JavaScript, runs off the main thread; check current browser support and provide a static fallback |
| **GSAP with ScrollTrigger** | Choreographed scenes: pinning, scrubbed timelines, horizontal tracks, sequences across sections | The most complete tool for scroll storytelling; GSAP and its plugins are free to use; read the docs for the version in use |
| **Motion (Framer Motion)** | React projects with moderate scroll effects (`useScroll`, `useTransform`) | Good for component-level effects; GSAP for complex pinned scenes |
| **Smooth scrolling (Lenis or similar)** | Only when the scenes need it to feel continuous | Changes how scrolling feels everywhere; must keep native behaviors (keyboard, anchors, find in page) and respect reduced motion |
| **WebGL (Three.js, OGL, Rive)** | Scenes that need real 3D, shaders or interactive characters | Heaviest option; see [authored and rendered motion](../38-authored-and-rendered-motion.md) |

### Rules for GSAP and ScrollTrigger

- Register plugins once; build scenes inside `gsap.matchMedia()` so desktop, mobile and reduced-motion get different
  scenes and everything is cleaned up when conditions change.
- Scrubbed tweens use `ease: "none"`; smooth the scrub with a small number (`scrub: 0.5`–`1`) rather than easing the
  tween.
- Pin the scene container, not individual elements; set `end` in scroll distance (`"+=200%"`) so the scene length is
  explicit.
- Horizontal tracks: animate the track's `x`/`xPercent` with `ease: "none"`, and attach inner effects with
  `containerAnimation` so they trigger by horizontal position.
- Animate `transform`, `opacity`, `clip-path` and filters on small areas; avoid width, height, top and left.
- In frameworks, create and clean up animations with the integration the docs recommend (for React, `useGSAP`) so
  they do not leak between route changes.
- Refresh triggers after images and fonts load; test with markers during development and remove them.

### Recipe: a horizontal track inside a vertical page

```js
gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(min-width: 800px) and (prefers-reduced-motion: no-preference)', () => {
  const panels = gsap.utils.toArray('.track .panel');

  const track = gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: 'none',
    scrollTrigger: { trigger: '.track', pin: true, scrub: 0.6, end: () => `+=${innerWidth * (panels.length - 1)}` },
  });

  panels.forEach((panel) => {
    gsap.from(panel.querySelector('.panel-image'), {
      scale: 1.25,
      ease: 'none',
      scrollTrigger: { trigger: panel, containerAnimation: track, start: 'left right', end: 'center center', scrub: true },
    });
  });
});
```

Without the media query (phones, reduced motion), the panels are a normal vertical list.

### Recipe: an image that zooms in through a mask

```js
mm.add('(prefers-reduced-motion: no-preference)', () => {
  gsap.timeline({ scrollTrigger: { trigger: '.reveal', pin: true, scrub: 0.8, end: '+=150%' } })
    .fromTo('.reveal-media', { clipPath: 'inset(35% 30% 35% 30% round 24px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none' })
    .fromTo('.reveal-media img', { scale: 1.3 }, { scale: 1, ease: 'none' }, 0)
    .to('.reveal-title', { yPercent: -60, opacity: 0, ease: 'none' }, 0);
});
```

Other mask shapes: `circle(10% at 50% 50%)` opening to `circle(75%)`, `ellipse(120% 0% at 50% 0%)` opening like a
curtain from the top, `polygon(...)` for angled cuts, and `mask-image` with a gradient or an SVG for soft or shaped
edges. Text can be a window onto video or imagery with `background-clip: text` or an SVG mask.

### Recipe: one object that changes across sections

```js
mm.add('(min-width: 800px) and (prefers-reduced-motion: no-preference)', () => {
  const steps = gsap.utils.toArray('.feature');

  gsap.timeline({ scrollTrigger: { trigger: '.features', start: 'top top', end: 'bottom bottom', scrub: 0.8, pin: '.product' } })
    .to('.product', { rotation: 18, x: '-12vw', ease: 'none' })
    .to('.product', { rotation: -10, x: '10vw', scale: 1.15, ease: 'none' })
    .to('.product', { rotation: 0, x: 0, scale: 1, ease: 'none' });

  steps.forEach((step, i) => {
    ScrollTrigger.create({ trigger: step, start: 'top center', end: 'bottom center', toggleClass: { targets: '.product', className: `is-step-${i + 1}` } });
  });
});
```

The copy for each feature scrolls normally beside the pinned product; the product's pose and state follow the copy.

### Recipe: section colors that change with the story

```js
gsap.utils.toArray('[data-theme]').forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top 55%',
    end: 'bottom 55%',
    onToggle: ({ isActive }) => isActive && document.documentElement.setAttribute('data-scene', section.dataset.theme),
  });
});
```

Colors live in tokens per scene (`[data-scene="night"] { --surface: …; --fg: …; }`) with a CSS transition on the
custom properties; contrast is checked for every scene.

### Recipe: depth that follows the pointer

```js
mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
  const layers = gsap.utils.toArray('[data-depth]').map((el) => ({
    x: gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' }),
    y: gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' }),
    depth: Number(el.dataset.depth),
  }));
  const onMove = (e) => {
    const dx = e.clientX / innerWidth - 0.5;
    const dy = e.clientY / innerHeight - 0.5;
    layers.forEach((l) => { l.x(dx * l.depth * 24); l.y(dy * l.depth * 16); });
  };
  window.addEventListener('pointermove', onMove);
  return () => window.removeEventListener('pointermove', onMove);
});
```

### Recipe: a layer revealed by the cursor

```html
<div class="reveal-pair" aria-label="Portrait of the driver; moving the pointer reveals his helmet">
  <img src="portrait.avif" alt="" width="1600" height="1200">
  <img class="reveal-top" src="portrait-helmet.avif" alt="" width="1600" height="1200">
</div>
```

```css
.reveal-pair { position: relative; --x: 50%; --y: 40%; --r: 0px; }
.reveal-pair img { display: block; width: 100%; height: auto; }
.reveal-top {
  position: absolute; inset: 0;
  -webkit-mask-image: radial-gradient(circle var(--r) at var(--x) var(--y), #000 60%, transparent 100%);
  mask-image: radial-gradient(circle var(--r) at var(--x) var(--y), #000 60%, transparent 100%);
}
```

```js
mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
  const pair = document.querySelector('.reveal-pair');
  const toX = gsap.quickTo(pair, '--x', { duration: 0.5, ease: 'power3.out' });
  const toY = gsap.quickTo(pair, '--y', { duration: 0.5, ease: 'power3.out' });
  const move = (e) => {
    const box = pair.getBoundingClientRect();
    toX(((e.clientX - box.left) / box.width) * 100 + '%');
    toY(((e.clientY - box.top) / box.height) * 100 + '%');
  };
  const enter = () => gsap.to(pair, { '--r': '180px', duration: 0.4, ease: 'power3.out' });
  const leave = () => gsap.to(pair, { '--r': '0px', duration: 0.3, ease: 'power2.in' });
  pair.addEventListener('pointermove', move);
  pair.addEventListener('pointerenter', enter);
  pair.addEventListener('pointerleave', leave);
  return () => { pair.removeEventListener('pointermove', move); pair.removeEventListener('pointerenter', enter); pair.removeEventListener('pointerleave', leave); };
});
```

- The two images must be **aligned exactly** (same framing and size), so only the revealed content changes.
- For an organic, liquid edge or a real 3D object under the mask, use a WebGL shader that blends two textures by
  distance to the pointer with noise ([authored and rendered motion](../38-authored-and-rendered-motion.md)); keep the
  photo as an HTML fallback.
- **Touch and reduced motion**: there is no hover, so either show the second layer with a tap or a short automatic
  sweep once, or keep the main image only; the story must not depend on discovering the effect.
- Describe both layers in the accessible name if the reveal carries meaning.

### The CSS-only version (simple scenes)

```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .zoom-in {
      animation: zoom-in linear both;
      animation-timeline: view();
      animation-range: entry 0% cover 50%;
    }
    @keyframes zoom-in {
      from { transform: scale(0.8); clip-path: inset(20% round 24px); }
      to { transform: scale(1); clip-path: inset(0 round 0); }
    }
  }
}
```

## Accessibility and control

- **Reduced motion is a different scene, not a slower one**: no pinning, no scrubbed transforms; content in its final
  layout, at most short fades (WCAG 2.3.3 for motion from interaction; respect `prefers-reduced-motion`).
- **Native scroll stays in charge.** Pinning with scrub advances with the visitor's scroll and can be reversed; never
  hijack the wheel, never force snapping that fights the person, keep keyboard scrolling, anchors and find-in-page
  working.
- **Content first**: headings, copy and calls to action exist in the HTML in reading order and are readable when
  JavaScript fails or the visitor scrolls fast.
- **No flashing** over three times per second (WCAG 2.3.1); large moving areas sparingly.
- **Pause and sound**: autoplaying media can be paused; sound is off until the visitor turns it on.

## Performance

- Animate compositor-friendly properties; keep `clip-path` and filters on reasonably sized elements; avoid animating
  `box-shadow` and blur over large areas.
- Lazy-load heavy scenes; preload only what the first scene needs; give 3D and image sequences a budget and a poster
  fallback.
- Test on a mid-range phone and a low-power laptop with throttling; long tasks during scroll make scenes stutter.
- Pause offscreen animations and WebGL loops.

## What the references do (hypotheses from studying them)

Studied in November 2026 by scrolling, moving the pointer and hovering; the reasons are inferred, not confirmed by the
teams. Automated headless captures missed effects that live in WebGL and react to the pointer (the cursor reveal in
the Lando Norris hero was seen only in a real browser): study such sites in a real browser with a GPU, moving the
pointer slowly over every hero and image.

- **[landonorris.com](https://landonorris.com)**: a racing driver's site built as a series of scenes over smooth
  scrolling (Lenis) and many WebGL canvases. The hero is a portrait, and moving the pointer reveals his helmet over
  his face through a soft mask that follows the cursor (the helmet appears as a 3D render with wireframe edges at the
  mask's boundary): the person and the driver in one gesture. The background shifts between dark, grey and cream as chapters change; a
  contour-line pattern from his helmet design runs behind everything, tying the page to his identity. His signature is
  drawn with the scroll over a masked video. A gallery of photos drifts sideways and at different speeds as the page
  moves down, tinted duotone until they come into focus. A full-bleed photo grows out of a frame through an expanding
  `inset()` mask. The menu opens like a curtain with an elliptical `clip-path`. *Why it works*: every effect comes from
  his world (helmet patterns, signature, track photography), and the end state of each scene is a clean editorial
  layout.
- **[en.manayerbamate.com](https://en.manayerbamate.com)**: a drinks brand with flat, colorful illustrations around the
  can. The can stays on screen as a persistent object behind the content and changes its tilt as the page scrolls,
  while the background color moves from one flavor's color to the next (green, then sky blue); headlines fade in over
  it. *Why it works*: one product, carried through the whole story, with the illustration style as the brand. A
  promotion popup with a countdown covers the page on arrival — a reminder that pressure tactics undo the craft
  ([flows and dark patterns](../slop/07-flows-and-dark-patterns.md)).
- **[kprverse.com](https://kprverse.com)**: a game world presented like a game interface: a loading screen, a sound
  toggle, a framed layout with a side rail and coordinates over a painted landscape. Headlines fill from grey to full
  color word by word as you scroll, so reading follows the scroll; character art is cut into angular shapes with
  `clip-path` and fanned out in a 3D carousel; each section brings its own background color (white, warm landscape,
  violet). *Why it works*: the interface itself is part of the fiction, and masks give the art a recognizable
  silhouette. *Cost*: a heavy first load and content that depends on JavaScript and WebGL.

## Common mistakes

- Effects collected from different sites with no story connecting them.
- Every element animating at once; nothing leads.
- Pinned scenes so long that the visitor feels stuck.
- Easing scrubbed tweens (the motion lags and overshoots the scroll); bounce or elastic on scroll scenes.
- Text that is unreadable until the animation finishes; essential content inside a canvas.
- No reduced-motion or mobile version; scenes built only for a 1440 px laptop.
- Smooth scrolling that breaks keyboard scrolling, anchors or find in page.
- Heavy scenes on the first screen that delay the content.

## Checklist

- [ ] The person asked for an animated, expressive page, or the brand evidence calls for it.
- [ ] A story with one idea per scene; storyboard with start and end states, axes and scroll distance.
- [ ] Moves combined on one timeline per scene (two or three per element), from the product's own world.
- [ ] Every scene's end state is a readable layout; content is in the HTML in reading order.
- [ ] Reduced-motion and mobile versions designed, not just disabled.
- [ ] Native scrolling, keyboard, anchors and find in page work; no wheel hijacking.
- [ ] Scrubbed tweens linear; triggered motion decelerating; no bounce.
- [ ] Performance checked on a mid-range phone; heavy scenes lazy-loaded with fallbacks.
- [ ] The library's current docs checked for the version in use.
