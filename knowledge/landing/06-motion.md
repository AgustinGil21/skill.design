# Motion on landing pages

Motion must **explain** (how something works, where it comes from, what changed), **direct attention**, or **give
character** at a chosen moment. If it does none of the three, remove it. This file covers how a designer decides
where motion goes, defines a motion language, keeps it fast, and makes it accessible. Code lives in
[motion recipes](15-motion-recipes.md).

## What it is and why it matters

On a landing page, motion is an argument tool: a workflow completing in front of the visitor proves more than a
paragraph. It is also the most common source of slowness, distraction, motion sickness and slop ("everything fades up
on scroll"). The designer's job is to choose few moments and make each one earn its cost.

## Questions before adding motion

- **What does this motion say** that a still image does not?
- **What happens without it** (reduced motion, slow device, JavaScript failed)? Is the content still complete?
- **Does it make anyone wait** to read or act?
- **Does it repeat** or loop? For how long, and can it be stopped?
- **What does it cost**: weight, CPU, battery, production and maintenance time?

## Where motion helps

- **Showing the product working**: a flow that completes, a result being generated, a before/after. Worth more than
  ten adjectives.
- **Chaining a story on scroll** (a pinned section whose visual changes; see [sections](03-sections.md)).
- **Feedback to the visitor**: hover, focus, click, drag — immediate (starting within about 100 ms).
- **A brand moment**: the hero's entrance, a transition between sections, the closing.
- **Orientation**: showing where a panel came from or where an item went.

## Where it hurts

- Making people wait to read (headlines typed letter by letter for two seconds).
- Everything entering with "fade + slide up" on scroll: after the third section it is noise, and content can appear
  late or never if the trigger fails.
- Hijacking scroll (the wheel advances an animation instead of the page, with no control).
- Infinite motion in the reading area (running logos, breathing backgrounds) without pause.
- Motion on high-stakes pages where calm matters more than character (health, finance, legal).

## Choosing between options

| Need | Options | Choose by |
| --- | --- | --- |
| Show a workflow | Looping video · animated interface built in HTML · interactive demo · step screenshots | Video is cheap and faithful; HTML animation is crisp, translatable and accessible; demos persuade most but cost most; steps never fail |
| Brand moment | Hero entrance · section transition · cursor or scroll effect | One moment at full strength beats many small ones |
| Explain a change | Before/after slider · toggle · crossfade | A toggle is accessible by default; sliders need keyboard support |
| Data or scale | Animated chart · counter · static figure | Static figures are always readable; animate only if the change itself is the message |

## Defining the motion language

Treat motion like typography: a small set of tokens used consistently.

| What | Duration | Easing |
| --- | --- | --- |
| Response to hover / focus / click | 100–200 ms | ease-out |
| Element entrance | 200–400 ms | ease-out or a spring with little bounce |
| Exit | 150–250 ms (faster than entrance) | ease-in |
| Movement between two places | 300–500 ms | ease-in-out |
| Section or page transition | 400–700 ms | ease-in-out |
| Stagger within a group | 30–60 ms between items, total under 400 ms | — |

These are guides drawn from common practice, not standards. Adjust to the brand:

- **Precise brands** (developer tools, finance): short durations, no bounce, linear-ish curves.
- **Warm or playful brands**: springs with gentle overshoot, slightly longer entrances.
- **Editorial brands**: slow crossfades, little movement.

Distances stay short (8–24 px) for entrances; nothing flies from off-screen unless that is the concept. Larger
elements move more slowly than small ones; the same distance feels faster on a phone than on a large screen.

## Choreography

- **One thing moves at a time** in the area of attention; secondary elements follow or stay still.
- **Order follows reading**: headline, then supporting text, then visual, then action — or the visual first if it
  carries the message.
- **The action is never last to arrive** by more than a fraction of a second; people try to click early.
- **Entrances happen once**; scrolling back up does not replay them.

## Performance that goes unnoticed

- **Animate only `transform` and `opacity`** (and `filter` carefully); never width, height, margins or `top/left`,
  which recalculate layout and stutter.
- **`will-change` only on what is about to animate**, removed afterwards.
- **Trigger with `IntersectionObserver`** or scroll-driven animations (`animation-timeline: view()` / `scroll()`) as
  progressive enhancement behind `@supports`, instead of listening to `scroll` in JavaScript every frame.
- **View transitions** via the View Transitions API as an enhancement: if unsupported, the change still works.
- **Pause what is not visible**: video, 3D, Lottie and canvas stop off-screen and in hidden tabs.
- **Defer heavy 3D and animation**: load after the content, with a still fallback while loading and on slow devices.
- **Video**: `muted`, `playsinline`, `poster`, deferred loading, short loop, a weight in hundreds of KB rather than
  tens of MB, and a visible pause control.
- **Do not block the first screen**: the headline and button render and work before any animation runs.
- **Check animation libraries' current documentation** before using them; APIs change.

## Accessibility of motion

Separate requirements from recommendations:

**Requirements (WCAG 2.2):**

- **Pause, stop or hide** anything that moves on its own for more than 5 seconds and runs alongside other content
  (2.2.2 Pause, Stop, Hide): carousels, logo strips, background video, animated backgrounds. A visible control, not
  only on hover.
- **Nothing flashes** more than three times per second (2.3.1 Three Flashes or Below Threshold).
- **Motion triggered by interaction** can be disabled unless essential (2.3.3 Animation from Interactions, AAA — a
  strong recommendation for landing pages).

**Recommendations:**

- **Honor `prefers-reduced-motion: reduce`**: remove movement (translation, scale, parallax, zoom, scroll-linked
  effects) and autoplay; keep short opacity fades or nothing. The final content is shown the same way.
- **Gentle parallax**, never on long text; it can cause nausea.
- **Letter-by-letter text**: the full text is in the DOM for screen readers (the container holds the real text; the
  animated pieces are hidden from assistive technology).
- **Counters**: the final number is accessible from the start; intermediate values are not announced.
- **Focus is not lost** in transitions: after a view change, focus moves to the new content.

Reduced motion means **less movement**, not "no feedback": state changes (a button pressed, a panel opened) must still
be perceivable, via instant changes or opacity.

## Examples of purposeful motion

- Hero tabs that change the demo, with a pause button for the automatic cycle
  ([Sana](https://mobbin.com/sites/sections/7f35e77e-e242-4333-809d-49fc3156ba43)).
- A progress line that advances with the steps ([Giga](https://mobbin.com/sites/sections/f850ffc1-be4a-4064-88d5-9b52d2ec9d52)).
- A visualization that transforms with the story ([Wild](https://mobbin.com/sites/sections/eef9343d-0d21-41e4-9524-54462b7612db)).
- A product interface that appears piece by piece, as if someone were using it
  ([Ramp](https://mobbin.com/sites/sections/c224c647-a876-44fc-ad18-ac01acee3004)).

## Edge cases

- **JavaScript fails or loads late**: content must not start hidden waiting for a script.
- **Tall or short viewports**: pinned scroll sections must not trap content that does not fit.
- **Translations**: animated text that types or splits words breaks with other scripts (Arabic shaping, CJK line
  breaking); animate containers, not characters, when localizing.
- **Right-to-left**: directional motion (slide from the left) mirrors.
- **Low power mode and old devices**: test on a mid-range phone; offer the still version if frame rate drops.
- **Print and screenshots**: the final state must be the visible one.

## Worked comparison

**Brief:** a landing page for an invoice automation tool.

**Weak:** every section fades up on scroll; the headline types itself; a background gradient pulses; logos scroll
forever; an 18 MB hero video autoplays. Nothing explains the product, the page feels slow, and reduced-motion users get
the same experience.

**Strong:** the page is designed still first. Three moments are chosen: (1) the hero shows an invoice PDF turning into
structured fields, a 6-second HTML animation with a pause button and a static end frame for reduced motion; (2) the
"how it works" section uses a progress line tied to the steps; (3) buttons respond in 150 ms. The logo strip is
static. The motion explains the product and costs little.

## Process

1. Design the page **still**, and make it work that way.
2. Choose two to four motion moments and what each is for.
3. Define the language (easing, durations) and the reduced version.
4. Prototype the key moment at real speed; review it with the content in every language.
5. Measure on a mid-range phone: if it stutters or the performance score drops, simplify.

## How to verify

- Turn on reduced motion in the operating system and review the whole page.
- Throttle CPU and network in the browser tools; check that the first screen is usable before animations load.
- Navigate with the keyboard through animated components; pause controls are reachable.
- Check that no content depends on an animation finishing.

## Common mistakes

- **Animating everything on scroll.**
- **Motion that makes people wait.**
- **Infinite motion without pause.**
- **Reduced motion ignored, or reduced to "no feedback".**
- **Animating layout properties.**
- **Heavy video or 3D blocking the first screen.**

## Checklist

- [ ] Each motion has a purpose: explain, direct attention or character.
- [ ] The page works still, and with JavaScript failing.
- [ ] Motion tokens defined and used consistently.
- [ ] Anything moving for more than 5 seconds can be paused with a visible control.
- [ ] Nothing flashes more than three times per second.
- [ ] Reduced motion removes movement and autoplay but keeps state feedback.
- [ ] Only `transform` and `opacity` animated; off-screen media paused.
- [ ] Tested on a mid-range phone and with translations.
