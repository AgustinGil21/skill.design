# Direct manipulation: maps, globes, 3D views and zoomable canvases

Objects the person moves with their hands: dragging a map, spinning a globe, orbiting a 3D model, panning and zooming
a canvas or a large image. The pattern covers how one surface answers mouse, touch, pen, touchpad and keyboard
without trapping the page around it, and how its automatic motion behaves. For input in general see
[platforms and input](../36-platforms-and-input.md); for motion in general see [motion](../landing/06-motion.md).

## 1. The problem and who has it

A manipulable surface promises "you can explore this". It breaks that promise in three common ways:

- **It traps the page.** Someone scrolling past a map on a phone or with a touchpad ends up zooming the map instead
  of reading on. The surface steals a gesture the person meant for the page.
- **It only works for one input.** Dragging works with a mouse; on a touchpad two-finger scroll does nothing useful,
  pinch zooms the whole browser page, and a keyboard user cannot reach it at all.
- **It moves on its own at the wrong time.** An auto-rotating globe keeps turning while the person is trying to read
  the label they hovered, or keeps spending battery in a background tab.

The cost for the person is frustration and lost content: what is only reachable by dragging a globe is unreachable
for many people. The cost for the business is that the showpiece becomes the part people avoid, and that its
content (customers, locations, stores) is invisible to anyone who cannot or will not manipulate it.

## 2. Questions to ask before deciding

- **What does the surface show that the person needs?** If it is a list of places, the list is the content and the
  map is one view of it. If it is a shape (a product in 3D, a floor plan), the manipulation is the content.
- **Where does it live?** Inside a scrolling page (a landing section), or as the whole screen (a map app, an editor)?
  The scrolling page changes everything about wheel and touch handling.
- **Which inputs will people use?** Phones (touch, one and two fingers), laptops (touchpad scroll and pinch), desktops
  (mouse wheel, often with notched wheels), pens, keyboards, switch devices.
- **Does it need to move on its own?** Automatic motion is decoration unless it reveals something; if it stays, it
  needs a pause control and rules for when it stops.
- **How precise must the result be?** Exploring a showcase tolerates inertia and easing; placing an element in an
  editor needs exact, predictable steps.
- **What is the smallest screen and the slowest device it must work on?** A heavy surface on a low-end phone should
  degrade to something still useful.

## 3. Alternatives and how to choose

| Situation | Option | Why | What it costs |
| --- | --- | --- | --- |
| The content is a set of items with locations | List first, map or globe as a companion view | Everyone reaches every item; the visual adds context | Two views to keep in sync |
| A showcase inside a scrolling page | Manipulable surface that only captures gestures once engaged | Keeps page scroll intact | An engagement rule to design and test |
| The shape itself is the content (3D product, plan) | Full manipulation with buttons and keyboard parity | People need to inspect angles and detail | Controls take room; more states |
| Only a few views matter | Preset views or a static image per view | Simple, fast, accessible | Less freedom |
| Low-end devices or the surface adds nothing | Static image with a caption, or don't build it | Cheapest, nothing to break | Less spectacle |

Choose the lightest option that serves the content. A spinning globe of client locations is usually a companion to a
list; a 3D configurator for a chair is the content itself.

## 4. When to use it and when not to

Use direct manipulation when the spatial relationship is the point: where things are relative to each other, what an
object looks like from another side, how a large image reads in detail.

Do not use it:

- **As the only way to reach information.** A list of offices that exists only as pins on a globe fails people using
  keyboards, screen readers or small screens. Provide the list.
- **To fill space on a marketing page** when a strong static composition would say the same. Manipulation invites
  attention it must then reward.
- **Inside a scrolling page without an engagement rule.** Capturing every wheel event over a full-width map turns the
  page into a trap.
- **When precision matters and inertia is on.** Editors and measurement tools need movement that stops exactly where
  the pointer stops.

## 5. Anatomy and behavior

### The parts

1. **The stage**: the surface itself, focusable (`tabindex="0"`) with a group role and an accessible name that says
   what can be done ("Globe of member clubs. Drag to rotate, use the arrow keys, or the buttons below.").
2. **Visible controls**: rotate or pan, zoom in and out, reset, and pause when there is automatic motion. These are
   the single-pointer alternative to dragging that WCAG 2.5.7 Dragging Movements (AA) requires, and the only way
   for many touchpad and switch users.
3. **The companion list** (when the content is items): grouped in a way that makes sense (by country, by region),
   each item a button that moves the stage to it.
4. **Readouts** (optional): where the view is centered, the zoom level, how many items are visible. Decorative
   instrument text should be hidden from assistive technology when the list already carries the information.

### One model for every pointer

Use Pointer Events, not separate mouse and touch handlers. Track active pointers in a map keyed by `pointerId` and
capture the pointer on press so the drag continues outside the stage:

```js
const pointers = new Map();

stage.addEventListener('pointerdown', (event) => {
  if (event.button !== 0) return;
  stage.setPointerCapture(event.pointerId);
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  velocity = { x: 0, y: 0 };
});

stage.addEventListener('pointermove', (event) => {
  const previous = pointers.get(event.pointerId);
  if (!previous) return;
  const next = { x: event.clientX, y: event.clientY };
  const other = [...pointers].find(([id]) => id !== event.pointerId)?.[1];
  if (other) {
    // Two pointers: the change in distance between them is the zoom factor.
    const before = Math.hypot(previous.x - other.x, previous.y - other.y);
    const after = Math.hypot(next.x - other.x, next.y - other.y);
    if (before > 0) zoomBy(after / before);
  } else {
    panBy(next.x - previous.x, next.y - previous.y);
    velocity = { x: next.x - previous.x, y: next.y - previous.y };
  }
  pointers.set(event.pointerId, next);
  lastMoveAt = performance.now();
});

const release = (event) => {
  pointers.delete(event.pointerId);
  // A pointer that stood still before release, or a cancelled one, carries no fling.
  if (performance.now() - lastMoveAt > 100 || event.type === 'pointercancel') velocity = { x: 0, y: 0 };
};
for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) stage.addEventListener(type, release);
```

Why each decision:

- **`setPointerCapture`** keeps the drag alive when the finger or cursor leaves the stage; without it, a fast drag
  stops dead at the edge.
- **`pointercancel` and `lostpointercapture` end the gesture like `pointerup`.** The browser cancels pointers when it
  takes over (a system gesture, a scroll it decided to handle). Ignoring them leaves a "pressed" pointer forever.
- **The stage uses `touch-action: none`** so the browser does not pan the page while a finger drags the surface. This
  is also why the stage must not cover the whole viewport on a phone: leave page margins the finger can scroll with.

### Inertia that respects the person's intent

Inertia makes a spun globe feel physical. It becomes wrong when it ignores what the hand did last:

- **Sample velocity from the latest movement**, not an average of the whole drag.
- **Drop it if the pointer stood still before release.** Someone who drags, stops, and lifts the finger wanted it to
  stay; a threshold around 100 ms separates a flick from a deliberate stop. Tune it on real devices.
- **Decay per frame, corrected by elapsed time**, so a slow device does not spin longer than a fast one:

```js
const tick = (time) => {
  const frames = Math.min((time - previous) / 16.67, 2); // cap so a stalled tab does not jump
  previous = time;
  velocity.x *= 0.92 ** frames;
  velocity.y *= 0.92 ** frames;
  panBy(velocity.x * frames, velocity.y * frames);
  requestAnimationFrame(tick);
};
```

- **Any explicit command stops it**: a key press, a button, a selection from the list. Inertia never fights an
  instruction.
- **No inertia with reduced motion**, and none in precision tools.

### Wheel and touchpad: zoom only once engaged

Inside a scrolling page, the wheel belongs to the page until the person engages with the surface. Engagement starts
with a press or keyboard focus on the stage and ends with a press anywhere else or focus leaving it:

```js
let engaged = false;
stage.addEventListener('pointerdown', () => { engaged = true; });
stage.addEventListener('focusin', () => { engaged = true; });
document.addEventListener('pointerdown', (event) => { if (!stage.contains(event.target)) engaged = false; });
stage.addEventListener('focusout', (event) => {
  if (event.relatedTarget && !stage.contains(event.relatedTarget)) engaged = false;
});

stage.addEventListener('wheel', (event) => {
  if (!engaged) return; // passing over the stage still scrolls the page
  event.preventDefault();
  const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? stage.clientHeight : 1;
  const sensitivity = event.ctrlKey ? 0.01 : 0.002; // ctrlKey: a touchpad pinch
  zoomBy(Math.exp(Math.max(-0.35, Math.min(0.35, -event.deltaY * unit * sensitivity))));
}, { passive: false });
```

- **Track engagement yourself rather than reading `document.activeElement`.** Some browsers do not focus a button on
  click (Safari on macOS), and a popover that closes can return focus to `body`; either would silently disable zoom.
- **Normalize `deltaMode`**: pixels, lines or pages arrive depending on device and browser. Treating lines as pixels
  makes a notched mouse wheel crawl.
- **A touchpad pinch arrives as a wheel event with `ctrlKey`**, with small deltas; give it its own sensitivity.
- **Zoom exponentially and cap each event**, so zoom feels even at every level and a free-spinning wheel cannot jump
  from the whole world to a street.
- **Safari on macOS also sends `gesturestart`/`gesturechange`** with a cumulative `scale`. Use the ratio to the
  previous event, call `preventDefault` so the page does not zoom, and ignore wheel events while a gesture is active
  to avoid zooming twice.

### Keyboard

The stage takes the arrow keys (rotate or pan by a fixed step), and the controls take `+`, `-` and reset as buttons.
Steps are fixed and predictable; keyboard movement has no inertia. Arrow keys must not be captured unless the stage
has focus, or they stop scrolling the page.

### Automatic motion that knows when to stop

If the surface moves on its own (a slowly turning globe), it holds still whenever the person is not watching it or is
busy with it:

| Condition | Why it stops |
| --- | --- |
| Off-screen (IntersectionObserver) | No one sees it; it costs battery |
| Hidden tab (`document.hidden`) | Same, and timers drift |
| A pointer is down | The person is in control |
| The person is inspecting something (hover on a group, an open card, an item chosen from the list) | Moving the target away from the pointer or eye undoes the inspection |
| Paused by the person | WCAG 2.2.2 Pause, Stop, Hide (A) when it lasts over five seconds alongside other content |
| Reduced motion | No automatic spatial movement |

Keep the person's pause separate from automatic holds: returning to the section may resume an automatic hold, never
override a pause they chose.

### Moving the view to an item

When an item is chosen from the list, ease the view to it (around half a second to a second) and take the short way
round: normalize the angle difference to the range -180° to 180° so the globe never spins the long way. With reduced
motion, jump. If the item is grouped with others at the current zoom, open the group so the chosen item is visible.

## 6. States and transitions

| State | What the person sees | How they move on |
| --- | --- | --- |
| Loading | A static image or a skeleton of the same shape; the list is already usable | The stage appears when ready, without moving the page |
| Idle, automatic motion | Slow motion, pause control visible | Pause, or engage to take control |
| Engaged (dragging, pinching) | The surface follows the hand exactly; no automatic motion | Release; inertia if it was a flick |
| Inspecting | The surface holds still; a card or group is open | Close the card, leave the group, press elsewhere |
| Item chosen from the list | The view eases to it; the item is marked in both views | Choose again to release, or reset |
| Zoom limit reached | Further zoom does nothing; the button for that direction is disabled or announces the limit | Zoom the other way |
| Reset | Back to the initial view, selection cleared | — |
| Rendering failed or too slow | Static image and the list; controls that do nothing are hidden | — |

## 7. Edge cases and extreme content

- **Items that overlap at a zoom level**: group them into a count that opens; regroup as the zoom changes, and close
  an open group when zoom changes, since it no longer matches the screen.
- **An element unmounts under the pointer** (a group regroups, a card closes): it never fires `mouseleave`. Clear any
  "hovering" or "inspecting" state when the element disappears, or automatic motion stays held forever.
- **Hundreds or thousands of items**: draw them in one layer (canvas or a single path), not as hundreds of DOM nodes;
  the list virtualizes or paginates.
- **Names in many languages and lengths**: cards and labels wrap; country names come from the platform in the
  reader's locale (for example `Intl.DisplayNames`) rather than hard-coded strings.
- **Right-to-left reading**: the list and controls follow the reading direction; the geographic surface does not
  mirror, because north and east do not change with language.
- **Very small screens**: the stage leaves page margins for scrolling; the list may come first.
- **Two fingers land at different times**: the second finger turns a pan into a pinch; lifting one returns to pan
  without a jump (reset the stored position of the remaining pointer).

## 8. Accessibility specific to the pattern

- **2.5.7 Dragging Movements (AA)**: every drag has a single-pointer alternative (rotate and zoom buttons, choosing
  from the list).
- **2.1.1 Keyboard (A)**: the stage is focusable and responds to arrow keys; the controls are buttons; focus is
  visible on the stage itself.
- **2.2.2 Pause, Stop, Hide (A)**: automatic motion has a visible pause control.
- **1.1.1 Non-text Content (A) and 1.3.1 Info and Relationships (A)**: the content of the surface exists as text (the
  list), grouped meaningfully.
- **4.1.2 Name, Role, Value (A)**: the pause control exposes its state (`aria-pressed`, or a label that changes between
  pause and play, not both); chosen items in the list expose `aria-pressed` or equivalent.
- **Reduced motion**: no automatic motion, no inertia, no eased travel to items; changes are immediate.
- **Do not announce motion.** Readouts that change every frame are hidden from assistive technology; announce the
  result of an action ("Zoomed to Buenos Aires") only when it adds information.

## 9. Copy

- **The stage name says what is there and how to move it**, in one sentence. Name the alternatives, not only the
  gesture: "Drag to rotate, or use the buttons below."
- **Control labels name the action**, not the icon: "Zoom in", "Rotate left", "Back to the start view", "Pause
  rotation". Icon-only buttons still need these as accessible names.
- **A hint for the gesture appears only where it applies**: "Drag to rotate" on pointer devices; on touch, "Drag with
  one finger, pinch to zoom". Do not tell a keyboard user to drag.
- **Demo data is labelled as such** when the surface shows example items, so a sample is never read as a claim.
- Across languages: gesture verbs differ in length and register; keep hints short, test with the longest locale, and
  keep the same formality as the rest of the product.

## 10. Common mistakes and why they happen

- **Capturing the wheel over the whole surface.** It feels right when testing with a mouse on the surface itself; it
  breaks for everyone scrolling past. Gate it behind engagement.
- **Mouse and touch handlers written separately.** One path gets fixed, the other drifts; pens and touchpads fall in
  between. Use Pointer Events.
- **Inertia after a deliberate stop.** The velocity of the last movement is kept even though the hand paused; the
  object drifts away from where the person put it.
- **Treating every wheel delta as pixels.** Notched wheels report lines; zoom crawls or leaps depending on the device.
- **Automatic motion that only stops on a pause button.** It keeps moving while the person reads a hovered label,
  and keeps running in a background tab.
- **The visual as the only access.** Common because the globe was the idea; the list feels redundant to whoever
  designed the globe, never to whoever cannot use it.
- **Stuck holds.** Hover state set on enter and cleared only on leave, never on unmount.

## 11. Worked comparison

A sports federation's landing page shows its 28 member clubs on a globe.

**Weak version.** The globe fills the section and captures every wheel event. On a laptop, two-finger scrolling down
the page stops at the globe and zooms it instead. On a phone, dragging the globe to scroll the page spins it. Clubs
are pins; hovering one shows its name while the globe keeps rotating, so the label slides away. There is no list, so
a club in Montevideo is reachable only by finding and hovering its pin. After a drag, the globe keeps spinning even
when the person stopped on purpose.

**Strong version.** Beside the globe, a list groups the clubs by country, with the country names in the reader's
language. Choosing "Club Atlético Rambla · Montevideo" (a fictional club) eases the globe to Uruguay by the short
way round and opens the group if clubs overlap there. The page scrolls past the globe normally; once someone presses
or tabs into it, the wheel and pinch zoom it. Rotation stops while a pointer is over a group, while a card is open, off-screen and in
a hidden tab, and a "Pause rotation" button stops it for good. A flick spins it and lets it slow down; a drag that
stops before release leaves it exactly there. Rotate, zoom and reset buttons sit under the stage, and arrow keys turn
it when focused. With reduced motion, the globe is still and choosing a club jumps straight to it.

What it cost: a list to maintain alongside the globe, an engagement rule, and more states to test. What it bought:
every club is reachable by every person, and the page does not fight the reader.

## 12. How to verify and measure

By hand, on real devices:

- Scroll the whole page past the surface with a mouse wheel, a touchpad and a phone; the page must never get stuck.
- Engage, then zoom with a notched wheel, a smooth wheel, a touchpad pinch (Chrome and Safari) and two fingers on a
  phone. Zoom should feel the same speed and never zoom the browser page.
- Flick and release; drag, stop, then release. Only the first should drift.
- Hover a group and wait; open a card; switch tabs and come back. Automatic motion must hold and then resume, except
  after an explicit pause.
- Make a group regroup under the pointer by zooming; the surface must not stay held.
- Do everything with the keyboard only, then with reduced motion on.

In tests, separate the math (projection, grouping, the short-way angle, wheel normalization) into pure functions and
test them without a browser; test the hook or component with fake timers that include `requestAnimationFrame`.

Measure whether people find the items they look for (through the list or the surface) and how often they abandon the
section. Time spent on the surface alone is not evidence of value: it rises both when people enjoy it and when they
are stuck in it.

## 13. References

- WCAG 2.2: 2.1.1 Keyboard, 2.2.2 Pause, Stop, Hide, 2.5.7 Dragging Movements, 4.1.2 Name, Role, Value.
- Related knowledge: [platforms and input](../36-platforms-and-input.md), [motion](../landing/06-motion.md),
  [motion recipes](../landing/15-motion-recipes.md), [commerce and maps](commerce-and-maps.md),
  [editors and creative tools](editors-and-creative-tools.md).

## Checklist

- [ ] The content of the surface is reachable without manipulating it (a list or equivalent).
- [ ] Page scroll is never captured until the person engages with the surface.
- [ ] One Pointer Events path for mouse, touch and pen; capture on press; cancel and lost capture end the gesture.
- [ ] Wheel deltas normalized by `deltaMode`; touchpad pinch (`ctrlKey`) and Safari gesture events handled.
- [ ] Inertia only after a flick, decays by elapsed time, stops on any explicit command, off with reduced motion.
- [ ] Rotate or pan, zoom, reset and pause available as buttons; arrow keys work on the focused stage.
- [ ] Automatic motion holds off-screen, in hidden tabs, under the pointer and during inspection; a chosen pause sticks.
- [ ] Hover and inspection states are cleared when their element unmounts.
- [ ] Moving to an item takes the short way round and opens its group if needed.
- [ ] Tested by hand with mouse, touchpad, phone and keyboard, and with reduced motion.
