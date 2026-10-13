# Animation techniques: pick by the job, combine for the feeling

Which technique to use for a piece of motion, and how to combine several into one moment. It covers the techniques
that move the interface itself: keyframes, springs, gestures, physics, SVG paths and layout transitions. Designer-made
and rendered motion (Rive and Lottie, skeletal rigs, flipbooks and video, particles, shaders) is in
[authored and rendered motion](38-authored-and-rendered-motion.md). When and why to animate at all is in
[motion](landing/06-motion.md); ready-made accessible code is in [motion recipes](landing/15-motion-recipes.md);
surfaces people move with their hands are in [direct manipulation](patterns/direct-manipulation.md).

## What it is and why it matters

Most motion that feels wrong was built with the wrong technique, not with the wrong numbers. A toggle animated with
a fixed-duration curve jerks when tapped twice. A card dragged with a keyframe animation stops dead when released. A
grid that reorders by fading everything out and in loses the item the person was looking at. A confetti burst made of
CSS keyframes cannot fall. Each of these is a technique chosen by habit instead of by the job.

The question this file teaches is: **what is this motion's job, and which technique is built for that job?** The
techniques overlap, and good moments combine them, but each has a home:

| Job | Technique | Why it fits |
| --- | --- | --- |
| Play a planned sequence the same way every time | Keyframes and timelines | Exact timing and order; easy to choreograph |
| Respond to a state change the person caused, and stay correct if interrupted | Springs | Keep velocity when the target changes; no fixed end time to collide with |
| Follow a finger, a pointer or the scroll | Gestures, input-driven timelines | The input is the clock; nothing should play on its own |
| Let something coast, fall, collide or settle | Physics (decay, gravity, collisions) | Motion emerges from forces and the release velocity |
| Draw a line, morph a shape, move along a route | SVG paths | The path is the motion; it scales without loss |
| Keep an element's identity while the layout changes | Layout transitions (FLIP, View Transitions, shared elements) | The eye follows the object instead of re-reading the screen |
| Embed a designed character, icon or illustration | Rive or Lottie | Designer-authored timing and states; see the companion file |
| Animate a connected character | Skeletal rigs | One set of parts, many poses; see the companion file |
| Play finished frames | Flipbook, sprite sheet, video | Fidelity that cannot be computed live; see the companion file |
| Celebrate with many small pieces | Particles | Many independent objects, cheaply; see the companion file |
| Change the pixels themselves (ripples, noise, distortion) | Shaders | Per-pixel work on the GPU; see the companion file |

## Questions to ask before choosing

1. **Who starts it and who stops it?** The system (a sequence), the person once (a tap), or the person continuously
   (a drag, the scroll). Continuous input rules out anything with its own clock.
2. **Can it be interrupted?** If the person can act again before it ends (tap twice, drag back, close while
   opening), the technique must take over from the current position and velocity, not restart.
3. **Is the end state known before it starts?** Known targets suit keyframes and springs; unknown ones (where a
   flick lands, how a layout reflows) need physics or measurement (FLIP).
4. **Does it need to be identical every time?** Onboarding and marketing sequences do; feedback to input should feel
   alive and respond to how hard or fast the person acted.
5. **Who authors it?** An engineer in code, a motion designer in a tool, or both. That decides between code-driven
   techniques and embedded assets.
6. **What does it cost on the slowest device you support?** Layout, paint and per-pixel work cost more than moving
   and fading composited layers.
7. **What remains with reduced motion?** Decide the still or simplified version before building the moving one.

## 1. Keyframes: choreograph a sequence

### What it is

A list of states at points in time, with an easing between each. CSS `@keyframes`, the Web Animations API
(`element.animate()`), timeline libraries, SwiftUI's `keyframeAnimator` and `phaseAnimator`, Compose's
`keyframes` spec and Android's `AnimatorSet` all express the same idea: the author decides what happens when.

### When to use it

- A planned sequence with several steps: an onboarding illustration, a hero animation, a success sequence that
  draws a check, then fades in a message.
- Several properties that must change at different moments within one motion (a card that lifts, then turns, then
  settles), where each property gets its own track.
- Loops whose shape matters (a loading indicator).

### When not to use it

- **Feedback to input that can be repeated or reversed quickly.** A fixed timeline either restarts (a jump) or
  queues (a delay). Use a spring.
- **Anything that follows input.** The input is the clock.
- **State that must persist.** On the web, `fill: forwards` keeps the animation alive and its styles override the
  cascade; MDN recommends committing the final values (`animation.commitStyles()`) and cancelling the animation.

### How to choreograph

Choreography is deciding order, overlap and emphasis so the eye follows one thing at a time.

- **Lead with the element that carries the meaning**, then let supporting elements follow. The check mark draws
  before the message appears, not at the same time.
- **Overlap instead of chaining.** A strict sequence (each step waits for the last) feels slow. Timeline tools
  express overlap relative to the previous step; GSAP's position parameter, for example, accepts `"-=0.2"` (start
  0.2 s before the previous one ends) or `"<"` (start with it). Relative positions survive later changes in duration.
- **Stagger related items by a small, constant offset**, and cap the total so the last item does not arrive long
  after the first (the [motion](landing/06-motion.md) guidance keeps a group under about 400 ms).
- **Ease each segment**, not the whole timeline: in WAAPI an `easing` on a keyframe applies to the segment that
  starts there. Linear segments read as mechanical (see "Ease every movement" in [motion](landing/06-motion.md)).
- **Borrow from the classic principles of animation** described by Thomas and Johnston in *The Illusion of Life*
  (1981), only where they serve the interface: slow in and slow out (easing), arcs for natural paths, follow-through
  and overlapping action (parts settle at different times), and anticipation, used sparingly, before a large move.
  Squash and stretch and exaggeration belong to characters, rarely to interface chrome.

### Platform defaults are not decisions

| Platform | Default timing |
| --- | --- |
| Web Animations API | `linear` easing (CSS transitions and animations default to `ease`) |
| Jetpack Compose `tween()` | 300 ms with `FastOutSlowInEasing` |
| Material 3 (Android components) | Tokens from 50 ms (`short1`) to 1000 ms (`extraLong4`) in 50 ms and 100 ms steps; standard easing `cubic-bezier(0.2, 0, 0, 1)` |

Material 3's guidance is a good model for any product: durations grow with the area covered and the distance
travelled; on-screen movement uses the standard curve, entering uses a decelerating curve
(`cubic-bezier(0, 0, 0, 1)`, or `cubic-bezier(0.05, 0.7, 0.1, 1)` for emphasized motion) and exiting an
accelerating one (`cubic-bezier(0.3, 0, 1, 1)`, or `cubic-bezier(0.3, 0, 0.8, 0.15)` emphasized). Define your
own tokens once and never rely on a library default.

## 2. Springs: make the interface feel responsive

### What it is

Motion computed from a spring pulling the value toward its target. Unlike a curve with a fixed duration, a spring has
a velocity at every moment, so when the target changes mid-flight it continues from where it is, at the speed it
has. Apple's WWDC23 session "Animate with springs" puts it plainly: springs are the only kind of animation that keeps
position and velocity continuous both from rest and from an initial velocity, which is why SwiftUI uses a spring as
its default animation.

### Two ways to describe a spring

| Model | Parameters | Use it when |
| --- | --- | --- |
| Physical | Mass, stiffness, damping | A tool or platform only offers these; simulations |
| Perceptual | Duration (or response) and bounce (or damping ratio) | Designing UI: the two numbers map to "how fast" and "how lively" |

Apple's perceptual model uses a duration and a bounce from -1 to 1: 0 is critically damped (no overshoot), positive
values overshoot, negative values approach more slowly with a long tail. Android's original `SpringForce` and Jetpack
Compose use a damping ratio (1 means no overshoot) and a stiffness. Motion for the web offers `visualDuration` and
`bounce`, or stiffness, damping and mass. They describe the same spring; convert between them rather than tuning
blind.

### Defaults differ, so set them

| Platform | Default spring |
| --- | --- |
| SwiftUI `withAnimation {}` | Spring with bounce 0. Presets: `.smooth` (bounce 0), `.snappy` (0.15), `.bouncy` (0.3), all 0.5 s |
| Jetpack Compose `spring()` | `DampingRatioNoBouncy`, `StiffnessMedium` |
| Android `SpringForce` (View system) | `DAMPING_RATIO_MEDIUM_BOUNCY` (0.5), `STIFFNESS_MEDIUM` (1500): it bounces by default |
| Motion (web) `type: "spring"` | `bounce` 0.25 |
| Material components for Android, spring tokens | Spatial springs damping 0.9 with stiffness 1400, 700 or 300 (fast, default, slow); effects springs damping 1 with stiffness 3800, 1600 or 800 |

Two of these bounce unless told otherwise. An interface that "feels cheap" is often a library default nobody changed.
Material's split is worth copying: **spatial** properties (position, size) may overshoot slightly; **effects**
(color, opacity) never overshoot, because a color that passes its target and comes back looks like a flicker.

### Choosing values

1. **Pick the duration for the pace** the movement needs: small, near changes are short; large or far ones longer.
2. **Start at bounce 0** (damping ratio 1). Apple calls it the most versatile general-purpose spring.
3. **Add bounce only when the motion has momentum from a gesture.** Apple's WWDC18 "Designing Fluid Interfaces"
   example: tapping to open a player has no momentum, so no overshoot; swiping it away does, and a little overshoot
   (about 80% damping) makes it feel connected to the hand. A gesture with momentum and no overshoot can feel
   broken.
4. **Keep bounce small.** Apple's guidance treats about 0.15 as brisk without looking bouncy, 0.3 as noticeably
   bouncy, and warns that above about 0.4 a UI element looks exaggerated.
5. **Be consistent.** One family of springs across the product, chosen for its character (serious or playful,
   relaxed or fast), is more important than any single value.

### When not to use a spring

- **Opacity and color** (no overshoot is ever wanted; a critically damped spring or a curve is fine).
- **Sequences that must hit exact times** (use keyframes).
- **Progress indicators** that represent real progress (they should not accelerate or settle).

### Implementation notes

- **Do not wait for the spring to settle** to do the next thing. A spring approaches its target asymptotically; its
  settling time is longer and less predictable than its perceptual duration. SwiftUI offers completion handling tied
  to the perceptual duration; elsewhere, trigger the next step on a threshold, not on "finished".
- **On the web without a library**, CSS `linear()` (widely available since December 2023) can approximate a spring
  by sampling its curve into many points. It approximates only the shape: it cannot take an initial velocity or be
  retargeted, so use it for state changes that are not interrupted.
- **Interruptions are the test.** Toggle twice quickly, reverse a drag, open and close in a burst: a spring keeps
  going smoothly; a fixed curve jumps or queues.

## 3. Gestures: follow a finger or the scroll

### What it is

Motion whose clock is the input. While a finger, pointer or scroll is moving, the interface follows it exactly; when
the input ends, another technique (a spring or physics) takes over with the velocity the input had.

### The rules from fluid interfaces

Apple's WWDC18 session "Designing Fluid Interfaces" is the clearest public account of these rules:

- **Track one to one.** Content stays under the finger, held at the point where it was grabbed, not recentered.
- **Respond immediately.** Avoid timers in recognition; latency makes an interface feel disconnected. A double-tap
  recognizer, for example, delays every single tap.
- **Use a small threshold before deciding a gesture** (hysteresis; iOS commonly uses about 10 points) so taps,
  swipes and scrolls are told apart, then track from the original touch point so nothing jumps.
- **Let every motion be redirected.** The person can reverse, change direction or start a new gesture mid-animation;
  the next motion starts from the current state.
- **Project momentum on release.** Decide where something ends from where it would coast to, not from where the
  finger lifted: compute a projected position from the release velocity and a deceleration rate (the same one
  scrolling uses), then pick the nearest valid target to that projection and animate there with a spring carrying
  the release velocity. A light flick then travels as far as a long drag.
- **Rubber-band at the edges.** Past a boundary, keep tracking with increasing resistance and return with a spring;
  a hard stop feels like hitting a wall and looks the same as a frozen screen.
- **Keep spatial consistency.** What enters from the right leaves to the right, so the gesture to go back is the
  one people expect.

### Scroll as input

Scroll-linked motion follows the same rules: the scroll position is the clock, so the timing is linear and the
motion stops when the scroll stops.

- On the web, CSS scroll-driven animations (`animation-timeline: scroll()` for a scroller's progress, `view()` for
  an element crossing the viewport, with `animation-range` to choose the stretch) run off the main thread in
  supporting browsers. Provide a static result where unsupported.
- Keep scroll-linked effects few (one per page is a good default) and never let them hide or reorder content.
- Do not hijack the scroll: the wheel moves the page, not a sequence the person cannot leave.

### When not to use gesture-driven motion

- When the gesture is hidden and unique to your product; a visible control must exist (WCAG 2.5.7 Dragging
  Movements, AA, requires a single-pointer alternative to dragging).
- When it fights a system gesture (edge swipes for back, home or notifications).

## 4. Physics: let forces drive motion

### What it is

Motion produced by simulated forces: friction slowing a flick (decay), gravity pulling an object down, collisions
between objects, springs connecting them. The designer sets forces and limits; the path emerges.

### Kinds and their uses

| Kind | Use | Examples of APIs |
| --- | --- | --- |
| Decay (friction from a release velocity) | Coasting after a flick: lists, carousels, a spun globe | Android `FlingAnimation` (friction, min and max bounds), Compose `animateDecay` with `exponentialDecay()`, Motion `inertia` |
| Spring | Settling to a known target, connecting objects | See springs above |
| Gravity and collisions | Objects falling into place, playful empty states, particles | A physics engine or a particle system (see the companion file) |

### Rules

- **Bound everything.** Decay needs minimum and maximum values or a snapping rule; an object that coasts out of
  reach is lost.
- **Snap with projection.** For carousels and pickers, compute where the decay would stop and snap to the nearest
  item with a spring; do not let decay end between items.
- **Stop when the change is invisible.** Android's `FlingAnimation` ends below a "minimum visible change" (1 pixel for
  translation by default); a simulation that runs forever at sub-pixel speed wastes battery.
- **Physics is a character choice.** A banking app that lets the balance bounce on a spring tells people it is a
  toy. Use physics where the object is physical in the person's mind (a card, a sheet, a sticker), not for data.
- **Reduced motion:** no coasting or falling; place objects at their final positions.

## 5. SVG paths: draw, morph, follow a line

### Drawing a line

Animate the stroke's dash so the line appears to draw itself. Setting `pathLength="1"` on the path lets the dash and
offset be expressed as fractions of the whole, so the real length never needs measuring:

```html
<path d="M4 12 L10 18 L20 6" pathLength="1" class="draw" />
```

```css
.draw { fill: none; stroke-dasharray: 1; stroke-dashoffset: 1; }
@media (prefers-reduced-motion: no-preference) {
  .draw { animation: draw 600ms cubic-bezier(0.65, 0, 0.35, 1) forwards; }
}
@media (prefers-reduced-motion: reduce) { .draw { stroke-dashoffset: 0; } }
@keyframes draw { to { stroke-dashoffset: 0; } }
```

Round or square line caps extend past the dash and can leave a dot at the start; test the first frame. Draw in the
direction the eye reads the shape (a check mark from its short stroke to its long one, a route from origin to
destination).

### Morphing a shape

Morphing interpolates the points of one path into another. Both paths need compatible structure, the same number of
points in the same order; LottieFiles' compatibility notes state the same requirement for shape morphing exported
from After Effects. Shapes with different structures need a library that resamples them or a designer who redraws
them with matching points. Keep morphs between related shapes (a play icon into a pause icon, a menu into a close);
a morph between unrelated shapes reads as a melt, not a transformation.

### Following a line

To move an element along a route, CSS motion paths (`offset-path` with `path()`, a shape or a referenced SVG
element, `offset-distance` from 0% to 100% and `offset-rotate: auto` to face the direction of travel) are widely
available. In script, sample the path at a fraction of its length and place the element there. Ease each leg of a
route separately, so the object slows where it changes direction.

### Accessibility

A drawn line or morph is decorative unless it carries meaning; give the figure one accessible name that states the
result ("Route from the club to the stadium, 4.2 km"), not the animation. With reduced motion, show the finished
drawing.

## 6. Layout transitions: reorder, expand, connect

### What it is

Animating the change from one layout to another so each element keeps its identity: a list reorders and items slide
to their new places, a card expands into a detail view, a thumbnail becomes the image on the next screen.

### FLIP

The technique behind most implementations, described by Paul Lewis: record the element's position and size
(**First**), apply the new layout and record again (**Last**), apply a transform that puts it back where it was
(**Invert**), then animate the transform to nothing (**Play**). The layout changes once; only `transform` and
`opacity` animate. Two cautions from the original article: measuring forces a layout, so do it inside the short
window right after the person's action, and scaling an element also scales its children, which distorts text and
borders unless corrected.

Libraries handle the corrections. Motion's `layout` prop applies FLIP and corrects the scale of children that also
have `layout`, and of border radius and shadows when they are set through its own props; it recommends
`layout="position"` when the aspect ratio changes (images, text) and `scrollbar-gutter: stable` so an appearing
scrollbar does not trigger animations. Inline elements cannot be transformed and do not animate.

### View Transitions on the web

The View Transition API captures the old view as an image, applies the change and animates from the old image to
the live new view. By default the page crossfades; elements given a unique `view-transition-name` animate their
position and size separately. It works within a page (`document.startViewTransition()`) and between pages
(`@view-transition { navigation: auto; }` on both). Points to plan for:

- Names must be unique among the elements on screen at the time; a duplicate makes the transition fail.
- The old view is a picture: it cannot be interacted with during the transition, and the page does not respond
  until it ends, so keep it short.
- Customize with the pseudo-elements (`::view-transition-group(name)`, `-old`, `-new`) and per-change types.
- In frameworks that batch DOM updates, the update must be applied synchronously inside the callback.

### On native platforms

SwiftUI's `matchedGeometryEffect` and navigation zoom transitions, Compose's `SharedTransitionLayout` with
`Modifier.sharedElement`, `animateContentSize` and `Modifier.animateItem()` for list changes, and Android's shared
element transitions solve the same problem with platform conventions; prefer them over hand-made versions.

### When to use it, and when not

- **Use it** when the person needs to keep track of an object: a reordered list after a sort they chose, an item
  they opened, a filter that removes some items.
- **Avoid it** when the whole content is replaced (a crossfade is clearer), when the layout change was not caused
  by the person (data arriving in a feed should not shuffle things under their pointer), and for large numbers of
  items moving at once, which reads as noise.
- **Focus and reading order** must match the new layout; the animation is not the state.
- **Reduced motion:** replace movement and scaling with a short crossfade, or apply the change instantly.

## 7. Combine them: move, react, celebrate

Strong moments use several techniques, each doing one job, layered in time. A completed task in a to-do app:

| Layer | Job | Technique | Timing |
| --- | --- | --- | --- |
| React | The checkbox answers the tap | Spring (bounce 0), scale or fill | Immediately, under about 150 ms to feel instant |
| Move | The task leaves the list and the rest close the gap | Layout transition | Starts as the reaction settles, overlapping it |
| Celebrate | Finishing the last task of the day is marked | A short particle burst or a Rive or Lottie illustration | Only for the meaningful milestone, after the move |

Rules for combining:

- **One layer leads.** The reaction comes first and is the fastest; celebration is optional and last.
- **Overlap, do not queue.** Each layer starts before the previous one ends, so the moment feels like one gesture.
- **Celebrate rarely.** A celebration on every action becomes noise and slows down people doing the action often;
  keep it for milestones the person cares about, and make it skippable by simply continuing to work.
- **Same family of curves and springs** across layers, so they read as one material.
- **Interruptions still work.** If the person undoes immediately, every layer must reverse or stop cleanly.
- **Reduced motion** keeps the meaning of each layer without the movement: the box is checked, the task is removed,
  the milestone is stated in text.

## Conflicts and trade-offs

| Conflict | Resolution |
| --- | --- |
| Springs feel alive, keyframes are predictable | Springs for responses to input; keyframes for authored sequences |
| Bounce adds character, but reads as gimmicky | Bounce only on gestures with momentum, small values, never on opacity or color |
| Layout transitions keep identity, but block interaction (View Transitions) or cost measurement (FLIP) | Keep them short; skip them for changes the person did not cause |
| Physics delights, but makes outcomes less predictable | Use it for physical objects, bound it and snap it; never for data |
| Library defaults save time | Set your own tokens; two common spring defaults bounce |

## A method for a new case

1. Write the job of the motion in one sentence and who controls it.
2. Use the table at the top to pick the technique for that job.
3. Decide what happens on interruption and on reduced motion before writing code.
4. Set durations, curves and springs from the product's tokens.
5. If the moment has several jobs, give each its own layer and overlap them.
6. Test interruptions, the slowest device, reduced motion and every input that can drive it.

## Worked comparison

**Moment:** a coach moves a player from the bench into the starting eleven in a team-management app.

**Weak version.** Tapping the player runs a 600 ms keyframe animation that slides the chip to the pitch. Tapping a
second player during that time restarts the first animation from its start. The bench list re-renders and the
remaining chips jump into their new places. A confetti burst plays every time any player is moved. Dragging is the
only way to place a player in a specific position.

**Strong version.** Tapping the player gives immediate feedback with a critically damped spring on the chip's scale.
The chip travels to its slot as a shared-element layout transition, and the bench closes the gap with a layout
transition that overlaps the travel. Dragging a chip tracks the finger one to one; on release, the projected
position picks the nearest free slot and a spring with a little bounce carries the release velocity into it. A
second tap mid-flight retargets the spring from the current position. A "Move to…" menu offers the same placement
without dragging. The lineup being complete is announced in text, with a short illustration the first time only.
With reduced motion, chips crossfade into place and nothing travels.

What it cost: more states to test and a menu alternative. What it bought: the coach never loses track of a player,
fast repeated actions never queue, and the celebration still means something.

## Common mistakes

- **Fixed-duration animation on interruptible feedback.** It restarts or queues; use a spring.
- **Library default springs that bounce**, left unchanged (Android `SpringForce` and Motion's spring both bounce
  by default).
- **Bounce on color or opacity.** Effects never overshoot.
- **Waiting for a spring to settle** before the next step.
- **Easing on top of a gesture.** The content lags behind the finger.
- **Release that ignores velocity.** A flick snaps back because the finger had not crossed halfway.
- **Morphing unrelated shapes**, or paths with different structures.
- **Layout transitions on changes the person did not cause**, moving content under their pointer.
- **`fill: forwards` as a way to keep state** on the web; commit the values instead.
- **Celebrating every action.**

## Checklist

- [ ] The motion's job is named, and the technique matches it (table at the top).
- [ ] Interruptions continue from the current position and velocity.
- [ ] Durations, curves and springs come from tokens, never from library defaults.
- [ ] Springs start at bounce 0; bounce appears only with gesture momentum and stays small; effects never overshoot.
- [ ] Gesture-driven motion tracks one to one, projects momentum on release and rubber-bands at edges.
- [ ] Physics is bounded, snaps to valid targets and stops below a visible change.
- [ ] Layout transitions keep focus and reading order correct and run only for changes the person caused.
- [ ] Combined moments have one leading layer, overlap in time and celebrate rarely.
- [ ] Reduced motion keeps every layer's meaning without the movement.

## References

- Apple, WWDC18 "Designing Fluid Interfaces": <https://developer.apple.com/videos/play/wwdc2018/803/>
- Apple, WWDC23 "Animate with springs": <https://developer.apple.com/videos/play/wwdc2023/10158/>
- Material Components for Android, motion tokens: <https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md>
- Android, fling animation: <https://developer.android.com/develop/ui/views/animations/fling-animation>
- Android, choosing a Compose animation API: <https://developer.android.com/develop/ui/compose/animation/choose-api>
- Paul Lewis, "FLIP Your Animations": <https://aerotwist.com/blog/flip-your-animations/>
- MDN, View Transition API: <https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API>
- MDN, Using the Web Animations API: <https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API>
- MDN, `linear()` easing: <https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/linear>
- MDN, CSS scroll-driven animations: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations>
- MDN, `pathLength`: <https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/pathLength>
- MDN, `offset-path`: <https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path>
- Motion, layout animations: <https://motion.dev/docs/react-layout-animations>; springs: <https://motion.dev/docs/spring>
- GSAP, the position parameter: <https://gsap.com/resources/position-parameter/>
- Frank Thomas and Ollie Johnston, *The Illusion of Life: Disney Animation* (1981).
