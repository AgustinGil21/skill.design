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
- Decorative motion competing with high-stakes decisions; explanatory motion may still help in these contexts.

## Choosing between options

| Need | Options | Choose by |
| --- | --- | --- |
| Show a workflow | Video, HTML, demo, step images | Compare fidelity, maintenance, access and loading cost |
| Brand moment | Entrance, transition, cursor effect | Concentrate expression where it helps |
| Explain a change | Slider, toggle, crossfade | Compare control complexity; each needs accessible behavior |
| Data or scale | Chart, counter, static figure | Animate when change itself is the message |

## Defining the motion language

Treat motion like typography: a small set of tokens used consistently.

| What | Duration | Easing |
| --- | --- | --- |
| Response to hover / focus / click | 100–200 ms | ease-out |
| Element entrance | 200–400 ms | ease-out, or a critically damped spring (no overshoot) |
| Exit | 150–250 ms (faster than entrance) | ease-in |
| Movement between two places | 300–500 ms | ease-in-out |
| Section or page transition | 400–700 ms | ease-in-out |
| Stagger within a group | 30–60 ms between items, total under 400 ms | — |

These are guides drawn from common practice, not standards. Adjust to the brand:

- **Precise brands** (developer tools, finance): short durations, no bounce, firm curves that settle quickly (a
  steep ease-out), still eased, not linear.
- **Warm or playful brands**: softer, slightly longer decelerating curves and larger fades — warmth comes from
  timing, color and illustration, not from bouncing.
- **Editorial brands**: slow crossfades, little movement.

### Ease every movement; linear is for time and input

Objects in the world accelerate and decelerate. Movement with a constant speed starts abruptly and stops dead, and it
reads as mechanical or unfinished, which is one of the quickest signs of generated motion. By default, every
transition of position, size, scale or a mask uses an easing curve, defined once as tokens with `cubic-bezier()`
(see [motion recipes](15-motion-recipes.md)):

| Movement | Curve | Why |
| --- | --- | --- |
| Something arrives or responds | Ease-out (decelerates), for example `cubic-bezier(0.16, 1, 0.3, 1)` | Starts immediately, so it feels responsive, then settles gently |
| Something leaves | Ease-in, for example `cubic-bezier(0.7, 0, 0.84, 0)` | Gathers speed and gets out of the way |
| From one place to another, or a mask opening and closing | Ease-in-out, for example `cubic-bezier(0.65, 0, 0.35, 1)` | Both ends are visible, so both ends are soft |
| A path followed inside an illustration (a ball along a pass) | Ease-in-out per segment | Each segment is a movement with its own start and stop |

Linear timing is correct only where the motion is not an object moving on its own:

- **Motion tied to input**: a scroll-linked effect, a drag, a scrubber. The person's hand already supplies the
  acceleration; easing on top makes it lag behind the finger.
- **Continuous motion with no start or end in view**: a slow idle rotation, a marquee. Easing would make it pulse.
- **Progress that represents time or quantity**: a progress bar or a countdown should not suggest the work speeds up
  or slows down.
- **Opacity crossfades** where nothing moves; the curve barely shows, so pick the simplest.

Library defaults are not a decision: some animation libraries default to an eased curve and others to linear, and
CSS transitions default to `ease`. Set the curve explicitly from the tokens so every movement on the page speaks
the same language. Bounce and elastic curves stay excluded (see the table below).

Distances stay short (8–24 px) for entrances; nothing flies from off-screen unless that is the concept. Larger
elements move more slowly than small ones; the same distance feels faster on a phone than on a large screen.

## Motion by platform

- **Web marketing pages**: a few purposeful moments, as this file describes.
- **Web and desktop tools**: fast (100–200 ms) and few; frequent actions often need no animation at all.
- **Mobile apps**: fluid, continuous and interruptible — elements visibly come from somewhere and go somewhere,
  transitions follow the finger and can be reversed. Use the platform's curves without overshoot.

See [platforms and input](../36-platforms-and-input.md).

## Professional motion vs. generated-looking motion

Some motion patterns have become the signature of generated, template-made interfaces. Avoid them unless the person
explicitly asks for them (or the product is a game or toy where they are part of the concept):

| Avoid | Why it reads as cheap | Use instead |
| --- | --- | --- |
| **Bounce and elastic easings** (`easeOutBack`, `elastic`, `bounce`, springs with bounce > 0) | The element overshoots its target and wobbles back: it calls attention to the animation, not the content | A decelerating ease-out or a critically damped spring that settles once. Exception: a small overshoot (bounce around 0.15, kept below about 0.4) when the motion continues a gesture released with momentum, as Apple recommends; never on color or opacity (see [animation techniques](../37-animation-techniques.md)) |
| **Elements that fly in, hit an edge and rebound** | Physics theater with no meaning | A short fade plus 8–16 px of translation |
| **AI-style pulses and glows** (pulsing orbs, breathing gradients, glowing borders, ping dots on everything) | Signals "AI" without saying anything; constant motion in the periphery | A static status indicator; motion only when the state changes |
| **Infinite floating, wiggling or breathing decorations** | Distracts reading, costs battery, fails WCAG 2.2.2 when it lasts | Stillness; one purposeful moment |
| **Attention loops** (`animate-bounce` arrows, shaking buttons, ping badges) | Nagging; people learn to ignore it | Clear copy and hierarchy; a single change when something new arrives |
| **Scale pops on every click** (scale 1.1 → 0.9 → 1) | Toy-like for productivity, finance or health products | Color or elevation change within 100–150 ms |

Professional motion: short, decelerating, settles once, moves only what changed, has a reason (explain, orient,
give feedback, one brand moment), and has a reduced version. A loading skeleton may pulse gently; decoration should
not. `scripts/slop.mjs` reports bounces, elastic and back easings, overshooting curves, bouncy springs (web, Flutter,
SwiftUI, Compose) and decorative pulses.

## Choreography

- **One thing moves at a time** in the area of attention; secondary elements follow or stay still.
- **Order follows reading**: headline, then supporting text, then visual, then action — or the visual first if it
  carries the message.
- **The action is never last to arrive** by more than a fraction of a second; people try to click early.
- **Entrances happen once**; scrolling back up does not replay them.

## Performance that goes unnoticed

- **Prefer `transform` and `opacity`** for smooth movement; profile filters and layout-property changes.
  Layout animation can be justified when it communicates a real change, but its cost depends on the page.
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
- **Flashing** must remain within 2.3.1 Three Flashes or Below Threshold (A): no more than three flashes
  in a one-second period, or remain below the general flash and red flash thresholds.
- **At AAA**, nonessential interaction-triggered motion can be disabled (2.3.3 Animation from Interactions).
  This is a strong recommendation when the project targets AA, not an additional AA requirement.

**Recommendations:**

- **Honor `prefers-reduced-motion: reduce`**: remove movement (translation, scale, parallax, zoom, scroll-linked
  effects) and autoplay; keep short opacity fades or nothing. The final content is shown the same way.
- **Avoid parallax near reading tasks**; even gentle movement can cause discomfort for some visitors.
- **Letter-by-letter text**: the full text is in the DOM for screen readers (the container holds the real text; the
  animated pieces are hidden from assistive technology).
- **Counters**: the final number is accessible from the start; intermediate values are not announced.
- **Focus remains logical**: move it when the interaction requires a new context, not for decorative transitions.

Reduced motion means **less movement**, not "no feedback": state changes (a button pressed, a panel opened) must still
be perceivable, via instant changes or opacity.

## Examples of purposeful motion

- Hero tabs that change the demo, with a pause button for the automatic cycle
  ([Sana](https://mobbin.com/sites/sections/7f35e77e-e242-4333-809d-49fc3156ba43)).
- A progress line that advances with the steps
  ([Giga](https://mobbin.com/sites/sections/f850ffc1-be4a-4064-88d5-9b52d2ec9d52)).
- A visualization that transforms with the story
  ([Wild](https://mobbin.com/sites/sections/eef9343d-0d21-41e4-9524-54462b7612db)).
- A product interface that appears piece by piece, as if someone were using it
  ([Ramp](https://mobbin.com/sites/sections/c224c647-a876-44fc-ad18-ac01acee3004)).

## Edge cases

- **JavaScript fails or loads late**: content must not start hidden waiting for a script.
- **Tall or short viewports**: pinned scroll sections must not trap content that does not fit.
- **Translations**: animated text that types or splits words breaks with other scripts (Arabic shaping, CJK line
  breaking); animate containers, not characters, when localizing.
- **Right-to-left**: review directional motion; mirror reading-flow relationships, not physical scenes automatically.
- **Low power mode and old devices**: test on a mid-range phone; offer the still version if frame rate drops.
- **Print and screenshots**: the final state must be the visible one.

## Worked comparison

**Fictional brief:** a landing page for an invoice automation tool; sizes and timings below are illustrative.

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

## Deciding what not to animate

Start with the question that motion answers. "The invoice becomes editable fields" describes a meaningful change;
"the hero should feel premium" names a desired impression but not yet a reason for movement. A brand moment may
still be justified, provided it does not compete with reading, control or performance.

| Situation | Option | Why | Cost |
| --- | --- | --- | --- |
| Static state demonstrates the benefit | Still image | Immediate inspection | Does not explain sequence |
| Sequence matters, pace varies | User-controlled steps | Lets people inspect each change | Adds controls |
| Behavior is evidence | Recorded walkthrough | Shows actual timing and interaction | Requires media alternatives |
| Manipulation conveys value | Interactive sample | Lets visitors test the mechanism | Needs states and maintenance |
| Atmosphere supports a campaign | Short optional brand moment | Adds expression | May distract from the offer |
| Motion lacks a clear job | Omit it | Preserves attention and resources | Gives up spectacle |

Do not compress a slow real process into an instant-looking animation without explaining the demonstration. A
marketing sequence is allowed to simplify, but its timing and transitions can imply capability just as copy can.
Distinguish a conceptual illustration from a recording of actual product behavior.

## Control and state model

| State | Expected behavior | Recovery or transition |
| --- | --- | --- |
| Initial still | Core content is available | Enhancement may load independently |
| Loading enhancement | Poster retains meaning | Offer playback once ready |
| Playing | Controls remain reachable | Pause without losing position |
| Paused by visitor | Remain paused | Resume only on intentional action |
| Off-screen | Suspend unnecessary work | Respect previous visitor pause when returning |
| Reduced motion active | Show equivalent information | Avoid automatic spatial movement |
| Playback failure | Preserve explanation | Offer still sequence and optional retry |
| Ended | Hold a useful state | Replay is explicit if it aids understanding |
| Preference changes | Apply the new preference safely | Keep current information and control context |
| Tab restored | Resume coherently | Do not start multiple competing sequences |

Separate automatic suspension from a deliberate pause. Returning to a section may resume an automatically
suspended illustration, but should not override the visitor's choice to pause it. Store enough state to distinguish
those cases. Test route changes and repeated initialization for duplicated observers, timers and event listeners.

Keep controls in stable positions when the animation changes dimensions. A pause button that moves away from a
pointer or disappears before keyboard focus arrives undermines the very control intended to make motion usable.
When playback is unavailable, explain that state rather than leaving a button that appears to do nothing.

### Hold still while someone is looking

A pause button is the minimum. Automatic motion should also stop by itself whenever it would get in the way: while a
pointer is over something it shows, while a card or detail it opened is visible, while a finger is on it, while it
is off-screen and while the tab is hidden. A turning globe that carries away the label someone is reading defeats
the reason it exists. These automatic holds release on their own; a pause the person chose does not. Clear a hold
when the element that caused it disappears (an element removed under the pointer never reports that the pointer
left), or the motion stays frozen.

### The final frame is the design

With reduced motion, or when the animation cannot run, show the **end** of the illustration: the play fully drawn,
the message delivered and counted, the word lit. The first frame is the moment before anything happened and explains
nothing. Designing the final frame first is also a good test of the animation: if the end state does not explain
the idea on its own, the motion is carrying meaning that a large share of visitors will never see.

### Motion that explains, not motion that fills

The strongest motion on a page shows how the product works: a request travelling from sender to phone to report,
a play built pass by pass, a view opening on the thing that changed. Each stage changes one thing the visitor can
name. If the only description of an animation is "it makes the section feel alive", compare it with a better static
composition before keeping it. See [motion recipes](15-motion-recipes.md) for animation as a function of time and
staged sequences, and [direct manipulation](../patterns/direct-manipulation.md) for surfaces people move themselves.

## Copy and localization within motion

Controls should name the action and object: the English illustration "Pause workflow animation" tells more than
an unlabeled icon. The localized label should preserve that function using natural grammar. A toggle's accessible
name or state must communicate whether activation will pause or resume; avoid conflicting visible and spoken states.

Captions, subtitles and annotations need time for the intended audience to read. Do not assume an English timing
track accommodates translated expansion. Prefer user-controlled progression for essential details whose reading
time varies, and allow a transcript or step sequence to be read without synchronizing with the animation.

Avoid constructing animated sentences from individually translated words. Word order, shaping and agreement can
change the whole sequence. Animate a complete phrase or container when possible. Numbers and dates inside product
recordings need market context; translating the surrounding page does not localize embedded data.

An animated arrow might indicate reading order, physical movement or a data dependency. Only the first clearly
suggests mirroring with a right-to-left layout. Review the intended relationship rather than applying a blanket
horizontal flip that changes logos, objects or technical meaning.

## Worked comparison: examining the invoice sequence

Continue the fictional invoice example. The weak sequence instantly extracts every field and shows a celebratory
success mark. That is attractive, but may imply that extraction needs no review and never encounters uncertainty.
A static fallback showing only the finished result preserves the same misleading implication.

A stronger sequence shows upload, extracted fields and a field flagged for review. A short caption explains that
the operator checks the result before export. The paused and reduced-motion versions expose the same review step,
so the truthful explanation does not depend on watching the whole animation at the intended speed.

User-controlled steps are a credible alternative: they provide more inspection time and reduce ambient movement.
Choose them when buyers need to understand the review mechanism. Prefer a concise recorded demonstration when
fidelity to actual behavior matters more than localized interface text or precise integration with page layout.

Reject a continuous loop for this case if it repeatedly pulls attention away from the approval caveat. A replay
control preserves the ability to watch again without imposing movement throughout the reading task. If a loop is
retained, test reading alongside it and provide applicable pause, stop or hide control.

## Verification protocol and decision limits

Test a static baseline before comparing motion treatments. Ask participants to explain the process, name where
human review occurs and predict what the product will do with uncertain input. A higher play rate says little if
people misunderstand the central limit. Measure qualified progression and expectation accuracy together.

Run keyboard navigation while content starts, pauses, ends and fails. Verify that decorative animation does not
steal focus or flood status announcements. For text that changes meaning, expose the relevant update without
announcing every intermediate frame. Check the selected control pattern against its actual behavior.

Inspect representative devices under realistic resource constraints. Measure loading, responsiveness, frame
behavior and layout stability; record which asset or effect creates the cost. A single synthetic score can reveal
regressions but does not establish that a motion sequence is comprehensible or comfortable.

Guardrails include failed playback, blocked actions, accidental activation after layout movement and abandonment
before essential content appears. Monitor by device and preference where available without inferring health or
disability from a browser setting. Reduced-motion support should not require collecting sensitive personal data.

Change the recommendation when the sequence teaches no more than the still, when the product's real behavior
changes, or when maintenance prevents accurate localization. Removing an animation can be the successful outcome
of the design process. Retain it when evidence shows that the explained relationship is otherwise hard to grasp.

## Common mistakes

Animating every section often comes from demonstrating implementation effort rather than explaining the offer.
Ask what each movement teaches and remove duplicated emphasis. Accessibility failures commonly arise when pause
and reduced-motion behavior are added after choreography; define them as states before building the sequence.

- **Animating everything on scroll.**
- **Motion that makes people wait.**
- **Infinite motion without pause.**
- **Reduced motion ignored, or reduced to "no feedback".**
- **Animating layout properties.**
- **Linear timing on things that move on their own** (often a library default nobody changed): ease them, and keep
  linear for scroll-linked motion, loops and progress.
- **Automatic motion that keeps moving while someone inspects it.**
- **Reduced motion showing the first frame** of an illustration instead of the last.
- **Heavy video or 3D blocking the first screen.**

## Checklist

- [ ] Each motion has a purpose: explain, direct attention or character.
- [ ] The page works still, and with JavaScript failing.
- [ ] Motion tokens defined and used consistently.
- [ ] Every movement that is not tied to input or time uses an easing curve from the tokens, not linear.
- [ ] Automatic motion holds while it is being inspected, and reduced motion shows the final frame.
- [ ] Automatically moving content meets the applicable pause, stop or hide requirement and its exceptions.
- [ ] Flashing satisfies WCAG 2.3.1, including its threshold provisions.
- [ ] Reduced motion removes movement and autoplay but keeps state feedback.
- [ ] Animation cost profiled; unnecessary off-screen work paused.
- [ ] Tested on a mid-range phone and with translations.

- [ ] Manual pause remains respected after scrolling away and returning.
- [ ] Localized timing and reading direction preserve the explanation.
- [ ] Static and animated versions communicate the same limitations.
