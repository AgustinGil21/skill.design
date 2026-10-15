# Physical motion on landing pages

Objects that fall, collide, swing, get carried and thrown, or ride a scroll-driven machine. Done well, this is the
motion that reads as made by a person: it answers the visitor, it is never quite the same twice, and the reader
understands it without being told because the world already taught them how things fall. Done badly, it is a toy
glued onto a sales page. This file covers when physics earns its place, how to build it so it feels right, the
traps that only show up in a real browser, and how to prove it works. Technique choice in general lives in
[animation techniques](../37-animation-techniques.md); the motion budget and language in [motion](06-motion.md).

## What it is and why it matters

Physical motion is motion computed from forces (gravity, springs, friction, collisions) or from closed-form physics
(a projectile, a damped oscillation), instead of from a curve with a fixed duration. On a landing page it does three
jobs a curve cannot:

- **It turns a claim into something the visitor does.** "Every option you have today falls apart" becomes a sentence
  whose letters fall apart. "Pick an app and install it" becomes a catalog you can grab from.
- **It rewards attention.** The visitor who moves the pointer through a heap, flicks a lamp or scrolls faster finds
  that the page responds in kind. That discovery is what people remember and share.
- **It stays honest under interruption.** A simulated object can be grabbed mid-flight, scrolled backwards or pushed
  again; it never has to finish a canned animation first.

It is also the most expensive motion to get right: it needs a loop, it can waste CPU forever, it fights with text
selection, scrolling and layout, and it is easy to tune into chaos.

## Questions before using physics

- **Is the object physical in the reader's mind?** Letters on a label, boxes, cards, tiles, a lamp, an arrow: yes.
  A price, a chart, a form field: no. Physics on data tells people the data is a toy.
- **Does the motion carry the message?** Write the sentence the motion says ("the bad options fall apart", "the
  catalog is open: grab anything", "one manifest hits six platforms"). If you cannot, it is decoration.
- **What is the resting state, and is it complete content?** Server-render or show that state first. Physics is an
  enhancement over a page that already works.
- **Where does it stop?** Every simulation needs a way to come to rest and stop costing anything.
- **Who might be hurt by it?** Reduced-motion users, slow phones, keyboard and screen-reader users. Each needs a path
  that loses the play, never the content.

## Choosing the technique for each moment

| Situation | Technique | Why | What it costs |
| --- | --- | --- | --- |
| A story told by scrolling, with a known end state (acts, a machine running, a door opening) | Timeline scrubbed by scroll, driving one progress value | Reversible, exact, the reader controls the pace | Needs a pinned or sticky stage and careful mapping of acts to text |
| A one-shot flight to a known spot (an arrow into a target, a package into a slot) | Closed-form projectile: solve launch velocity for a chosen flight time | Lands exactly, no simulation, trivially testable | Only one body, no collisions on the way |
| Something that lands or sticks and shivers | Damped oscillation `A·e^(−kt)·sin(ωt)` on rotation | Reads as impact without a full engine | Tune amplitude down; it is easy to make it cartoonish |
| Many objects that fall, pile up and can be shoved | Small position-based (Verlet) engine | Stable stacking, piles that settle, cheap at 10–60 bodies | A loop, sleeping logic and pointer plumbing |
| Something hanging (a lamp, a sign, a carried tile) | Pendulum or spring on an angle | Sway and inertia from the motion of what holds it | Needs limits so it cannot loop over the top |
| An object riding something that moves (boxes on a belt, a car on a road) | Follow-with-lag on the carrier, spring on the rider's lean | Inertia you feel when the carrier speeds up or brakes | Acceleration from scroll is noisy; smooth it |
| A UI state change (a toggle, a menu) | Not physics: a spring with bounce 0 or a decelerating curve | Physics here reads as a toy | — |

## Building an engine that feels right

A landing page rarely needs a physics library. A hundred lines cover falling, stacking, walls, carrying, throwing
and sleeping, and you keep full control of the feel. What made the difference in practice:

- **Use position-based integration (Verlet), not explicit Euler.** With Euler, a box resting on another keeps a
  velocity that the contact cancels every step, so piles buzz and never sleep. In Verlet, velocity is "where it is
  minus where it was"; when a contact pushes a body back, its speed goes with it and the pile settles.
- **Substep and cap the frame.** Four substeps per frame and a frame capped at 1/30 s keep stacks stable on slow
  devices and after a background tab returns.
- **Shapes: boxes against the floor, circles against each other.** For glyphs, tiles and boxes, a rotated box's
  extent against the floor and walls plus a circle (radius about the mean of half width and half height) between
  bodies looks right and costs nothing.
- **Let boxes tip onto a flat side.** On the floor, add a torque toward the nearest multiple of 90°; otherwise
  objects balance on corners and look fake.
- **Friction on contact.** Remove part of the sliding speed between touching bodies and on the floor. Without it,
  heaps slide forever; with too much, nothing tumbles.
- **Sleep by displacement, not velocity.** Declare the world still when nothing moved more than a few pixels per
  second for about 0.35 s, then freeze it and stop the loop. Velocity-based sleep never triggers on a pile.
- **Stop the loop when nothing moves or nothing is visible.** Run the ticker only while the scene is on screen and
  something is awake. A sleeping page should cost zero CPU.
- **Report impacts.** Have the engine return floor hits with their speed during each step. That one hook drives
  squash and stretch, sounds and particles without coupling them to the solver.
- **Keep the engine pure.** No DOM inside it: bodies in, positions out. It can then be unit tested in Node.

### Closed-form motion for one-shot moments

When one object flies to one place, skip the simulation:

```js
// choose the flight time, solve the launch so it lands exactly on (dx, dy)
const aim = (dx, dy, t, g = 2200) => ({ vx: dx / t, vy: (dy - 0.5 * g * t * t) / t, t, g });
const at = ({ vx, vy, g }, s) => ({ x: vx * s, y: vy * s + 0.5 * g * s * s, angle: Math.atan2(vy + g * s, vx) });
// after it sticks: a shiver that dies out
const shiver = (s, amp = 0.16, decay = 5.5, freq = 38) => amp * Math.exp(-decay * s) * Math.sin(freq * s);
```

The arrow points along its velocity on the way, lands where it must, and its shiver is a single formula. Pick the
flight time from distance and clamp it (about 0.3–0.6 s) so long shots do not float.

## Making interaction feel physical

Grabbing things is where physics pays for itself on a landing page, and where most of the bugs live.

- **A carried body is immovable.** Mark it held: it goes where the pointer puts it and pushes everything else, but
  only let a fraction of that push (about 10–25 %) become speed in the bodies it shoves. Otherwise dragging through a
  pile launches the whole pile.
- **Follow the pointer with a few tens of milliseconds of lag**, not instantly. A held object that snaps to the
  cursor feels weightless.
- **Let it hang.** Drive its angle with a spring whose target leans against the pointer's horizontal speed; it
  overshoots a little and settles, like a sign on a hook. If it was upside down, it rights itself on the shortest
  way round.
- **Lift it.** Scale up about 10–15 % with a small overshoot when picked up, and put a soft shadow on the floor under
  it that shrinks and fades as it rises. The shadow is what sells the height.
- **Tap versus throw.** Under about 6 px of movement it is a tap: set it down and let the click open the item.
  Otherwise throw it with the average velocity of the last few pointer samples, clamped, and flag the element so the
  click that follows a throw is ignored.
- **Targets that help.** Near a drop target, open a visible seat and pull the carried object toward it (a magnet that
  grows with proximity). Dropping is then an arc, a spin and a dive into the seat, a short punch on the seat, and a
  few particles under gravity. Refusing is just as physical: the target shakes its head with a damped shake and spits
  the object back out.
- **Hanging things are pendulums.** Grab, swing around the hook, release with the flick's angular speed, then gravity
  over cable length and damping. A cable cannot push: cap the swing near 80° and the flick speed, or the lamp loops
  over the top and the illusion breaks.
- **Neighbours react.** Picking one tile makes the pile around it flinch; a box pushing through a strip curtain
  parts the strips it overlaps and they swing back. Small, local reactions make a scene feel alive without adding
  motion everywhere.
- **Squash on impact, on an inner element.** Split every object into an outer element that physics moves and rotates
  and an inner face that squashes, lifts and hovers. Two systems writing the same `transform` will fight; the
  independent `translate` and `scale` properties help for hover nudges.

### Pointer and layout traps

These all happened, and each looked like "the physics is broken" until inspected:

- **`clip-path` clips children.** A chamfered or clipped container hides any object dragged outside it, including
  the flight into a drop target. Draw the clipped shape on a pseudo-element behind and let the container overflow.
- **Transparent wrappers eat the pointer.** A tall list or lane that looks empty can sit over the thing you want to
  grab. Set `pointer-events: none` on the wrapper and `auto` on the objects.
- **Dragging selects text.** Call `preventDefault()` on `pointerdown`, clear any existing selection, and set
  `user-select: none` on the play area while it is live.
- **Touch.** Use pointer events with `setPointerCapture`, `touch-action: none` on draggable objects and `pan-y` on the
  stage so vertical scrolling still works.
- **Hook names collide.** A generic data attribute or class (`data-shade`, `.stage`) used by two components grabs the
  wrong elements or inherits the wrong styles. Namespace hooks per component.
- **Measure once, not every frame.** Cache positions that only change on layout and refresh on resize; read
  `getBoundingClientRect` per frame only for the few moving things that need it.

## Scroll-driven scenes

A pinned stage that tells a story while text scrolls past is the backbone of a physical landing page.

- **One progress value drives everything.** Map scroll to a single number (acts 0 to N) and derive every part of the
  scene from a pure function of it: what is lit, what is typed, how far the belt has run. It is reversible,
  deterministic and testable.
- **Acts match the text.** Give each beat of copy the same scroll length as its act, so the sentence on screen
  always describes what the picture is doing. On phones, stick the picture to the top and place each beat directly
  under it, not centred in the remaining space.
- **Scrub with a little lag** (about 0.6–0.8 s of smoothing) so fast flicks do not tear, and keep values inside their
  range: overshoot past the start or the end reads as a glitch, not as character.
- **Things riding a scrolled carrier get inertia.** Let the carrier follow the scroll target with a motor-like lag,
  compute its velocity and acceleration, and let riders lean on a spring against the acceleration, rollers turn by
  distance over radius, and objects bump as they pass each roller.
- **A camera can move inside the picture.** Interpolating an SVG `viewBox` between framed areas per act (move during
  the first 40 % of the act, hold for the rest) makes small details legible on any screen without redrawing.
- **Text can be scrubbed too.** A log typed character by character in step with the scroll, keys lighting as each
  character appears, explains a process better than any caption.
- **Keep the environment still.** Backgrounds that slide in parallax behind interactive objects read as noise; when
  tried, people asked for the background to stop and the objects to carry the motion.
- **Join scenes with an object, not a seam.** Two backgrounds meeting in a straight line feel like a mistake. Share
  the background between sections and enter the scene through something from its world: a door that rolls up, a
  curtain, a lintel. Leave generous space between the copy and that threshold.

## Text as physical material

Splitting a headline or a label into characters turns it into bodies:

- **Cut, then release.** A strike line that accelerates across the text (an `ease-in` slash), then each character
  released left to right with a small random delay and a pop of upward speed. The order of release sells the cut.
- **Assemble by scroll.** A line that arrives scattered and only settles as the reader scrolls contrasts well with a
  line that enters cleanly next to it ("on your phone it's two taps / on your computer, it isn't").
- **Landing with bounces that die out.** Letters dropping into place with two or three decaying hops is a physical
  landing, not a bounce easing; reserve it for that.
- **Keep the sentence readable.** Leave the real text for assistive technology (visually hidden copy, or an
  `aria-label` on the heading) and hide the split characters. Some splitting tools put `aria-label` on a `span`,
  which is not allowed on an element without a role: move the label to the heading.

## Performance and SEO

- **Paint the resting state on the server.** The first paint is static HTML or SVG of the scene at rest, so largest
  contentful paint and layout shift are unaffected and crawlers see the content.
- **Load the motion when it is needed.** Import the physics and its library on idle for scenes near the top, and
  with an intersection observer with a generous margin for scenes further down. A heavy illustration far below the
  fold can be its own file, fetched and injected when the section approaches, with a placeholder of the same aspect
  ratio.
- **Precompute what does not change.** Frames of a spinning part, paths of static geometry and camera frames can be
  computed at build time and shipped as data, instead of shipping the code that draws them.
- **Write transforms directly.** Quick setters or direct style writes in one loop; no framework re-render per frame.
- **Measure the frame.** Time a redraw or a step in a test and keep a budget (single-digit milliseconds); a scene that
  rebuilds geometry per frame must prove it fits.

## Accessibility

- **Reduced motion shows the end, not the start.** Put every effect behind one media-query gate. Under reduced
  motion, show the finished state: the install complete, the log typed, the letters in place, the catalog as a grid,
  the arrows already stuck. Nothing should be left half-told.
- **Without JavaScript, nothing is hidden.** Only hide elements waiting to animate when a script has marked the page
  as able to bring them back.
- **Objects stay real controls.** A tile you can throw is still a button in a list; a box on a belt is still a link;
  a target is still a radio in a group. The physics is a layer over semantics the keyboard and screen reader already
  understand.
- **Loops stop.** Fans spin, lamps sway and belts run only while their scene is on screen and something is happening.
  Remove attention loops (pulsing seats, breathing glows) once the interaction already shows where to go.
- **Respect elastic only where it is physical.** `scripts/slop.mjs` flags elastic and back easings. Keep them only for
  impacts and catches (a seat being hit, a target taking an arrow, a squash recovering) and say so where they are used.

## Honesty in the details

Physics makes a page feel true, so what it moves should be true too: real items from the real catalog, real
checksums in the install steps, real commands in the log, real dates of first contribution. When people are shown,
do not let the motion rank them: same object for everyone, alphabetical order, months instead of counts.

## Testing and verification

Physical motion is verified in two places: a test suite for the maths, and a real browser for the feel.

**Unit tests (no browser):**

- The engine: released bodies fall and rest on the floor; nothing escapes the walls when thrown hard; boxes do not
  rest on corners; piles stay within a small overlap; release order is respected; a tall pile falls asleep; a carried
  body is not moved by others; a thrown body leaves at the pointer's speed; a hard landing is reported once.
- Closed-form motion: the projectile lands exactly on target, arcs up before coming down, and the shiver decays to
  nothing within about a second.
- Choreography: build the scroll timeline paused, set its progress, and assert the acts happen in order and every
  value stays inside its range (no overshoot).
- Scene state: a pure function of progress that starts empty and ends complete, and never types more than a line
  has.

**In the browser:**

- **Drive it with real input.** Dispatch real mouse or touch events (press, a few moves, release) to test carrying,
  throwing, swinging and tap-versus-throw. Synthetic `PointerEvent`s often skip pointer capture.
- **Screenshot the viewport only.** Capturing an area beyond the viewport resizes the page, which refreshes scroll
  triggers and films states that never happen. Scroll, wait for the smoothing to settle, then capture what is on
  screen.
- **Film sequences.** A strip of frames at fixed delays (lift, swing, release, settle) shows feel and bugs that one
  still never will.
- **When something cannot be grabbed, ask the page.** `document.elementFromPoint` at the handle's centre names the
  element on top; that found the transparent lane and the attribute collision in minutes.
- **Check the cost.** Confirm the loop stops when the scene settles or leaves the screen, and run a performance audit
  on a phone profile after adding each scene.

## Common mistakes and why they happen

| Mistake | Why it happens | Fix |
| --- | --- | --- |
| Piles that buzz forever and drain the battery | Explicit integration and velocity-based sleep | Verlet, sleep by displacement, freeze and stop the loop |
| Dragging one object launches everything | The carried body transfers its whole push as speed | Treat it as immovable but pass on only a fraction of the push |
| A swing that loops over the top | Unclamped flick speed on a pendulum | Clamp the flick, cap the angle, bounce softly off the cap |
| Strips, leans and swings that flail | Tuned on one fast test, never on a slow scroll | Smaller amplitudes, more damping, test at several speeds |
| Background parallax behind interactive objects | "More layers feels richer" | Keep the environment still; let objects move |
| Two scenes joined by a hard horizontal cut | Each section designed alone | Shared background and a threshold object from the scene's world |
| The dragged object disappears near the target | `clip-path` or `overflow` on the container | Clip a background layer, not the container |
| Elements that cannot be grabbed | An invisible wrapper on top, or a hook name used twice | `pointer-events` on wrappers, namespaced hooks, `elementFromPoint` |
| Text gets selected while dragging | Default pointer behaviour | `preventDefault`, clear selection, `user-select: none` |
| A flashy simulation that says nothing | Physics chosen before the message | Write the sentence the motion says first |

## Worked comparison

**The problem section of a landing page**, listing three ways people install software today.

- **Weak:** three cards with an icon and a line each; each fades up on scroll and gets a strike-through. It is
  correct, forgettable, and looks like every other page.
- **Strong:** each option is shown as its own typed sample (a dubious installer's file name, a store's refusal, a
  pasted command). As the section arrives, a strike line slashes through each sample and its letters lose their
  footing left to right, fall into a small tray and land in a heap. Moving the pointer or a finger through the heap
  shoves it; a button puts the sentence back together and cuts it again. The headline's second line arrives in
  pieces and assembles with the scroll. Under reduced motion it is the struck-through text, complete and still.

The second version says the same thing, but the visitor does it. Same copy, same structure, one idea carried by
physics, a pure engine with tests, and a static fallback.

## Checklist

- [ ] Each physical moment has a sentence it says, and the object is physical in the reader's mind.
- [ ] The resting state is server-rendered and complete; the motion only enhances it.
- [ ] One progress value or one pure engine drives each scene; both are unit tested.
- [ ] Carried objects lift, cast a shadow, hang on a spring, and pass on only part of their push.
- [ ] Every swing, lean and flick has a cap; everything comes to rest and the loop stops.
- [ ] Clipped containers, invisible wrappers, text selection and touch scrolling were checked by hand.
- [ ] The environment stays still; scenes are joined through a threshold, with space before it.
- [ ] Reduced motion shows the finished state; controls keep their roles and keyboard access.
- [ ] Verified in a real browser with real input, viewport-only captures, and a performance audit on a phone profile.
