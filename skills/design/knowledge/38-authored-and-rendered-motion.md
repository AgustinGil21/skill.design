# Authored and rendered motion: Rive, Lottie, rigs, video, particles and shaders

Motion that is not computed from the interface's own elements: animations a designer builds in a tool and the app
plays (Rive, Lottie, skeletal rigs), finished frames (flipbooks, sprite sheets, video), many small objects simulated
at once (particles), and effects that change the pixels themselves (shaders). How to choose among these and the
interface techniques (keyframes, springs, gestures, physics, SVG paths, layout transitions) is in
[animation techniques](37-animation-techniques.md); when and why to animate is in [motion](landing/06-motion.md).

## What it is and why it matters

These techniques give the most expressive results and carry the highest costs: file size, download, battery, a
separate tool and workflow, and accessibility work that code-driven motion gets for free. Chosen well, they give a
product a character (a mascot that reacts, an illustration that explains a feature, a celebration that feels earned).
Chosen by habit, they make the product heavy, slow on mid-range phones and tiring to use every day.

The decisions this file supports: which format carries a designer's work into the product, when finished frames
beat live rendering, how to keep particles and shaders from becoming noise, and how each one degrades with reduced
motion, slow networks and weak devices.

## Questions to ask before choosing

1. **Does the motion need to react** (to state, input, data), or does it play the same way each time?
2. **Who authors and maintains it?** A motion designer working in After Effects, in Rive or in a rigging tool, or
   an engineer in code. The format must fit the people who will change it next year.
3. **How large is it on screen and how long does it play?** A 48-pixel icon and a full-screen intro have different
   budgets.
4. **What does it weigh**, and does it block the first meaningful paint?
5. **Does it contain text?** Text inside an asset must be translated, and many formats make that hard.
6. **What is the still or simplified version** for reduced motion, a failed load and an old device?

## Choosing among them

| Situation | Choice | Why | Cost |
| --- | --- | --- | --- |
| Designer-made icon or illustration that plays the same way | Lottie | After Effects workflow, vector, small for simple shapes | Only part of After Effects exports; no interactivity in plain JSON |
| Designer-made animation that reacts to states, input or data | Rive | State machines and data binding are built into the file | A runtime per platform; designers must learn the tool |
| A character with many actions and outfits | Skeletal rig (Spine, Rive bones) | One set of parts reused across all poses and skins | Rigging skill; stylized look |
| Photographic, 3D-rendered or very complex frames | Video, or a sprite sheet for short loops | Fidelity that cannot be rendered live | Size, no live interaction, transparency is hard |
| A burst of many small pieces | Particles | Many independent objects cheaply | Easy to overdo; cost scales with count |
| A per-pixel effect: ripple, noise, distortion, glow | Shader | Runs on the GPU, impossible otherwise | Battery, fallbacks, device differences |
| The motion is simple (fade, slide, a check mark) | None of these | Code techniques are lighter and more accessible | — |

## 1. Rive and Lottie: embed designer-made motion

### Lottie

An animation exported from After Effects (originally through the Bodymovin plugin) as JSON, played by a runtime on
the web, iOS, Android and other platforms. dotLottie (`.lottie`) is a compressed container that can hold several
animations, their image assets, themes and state machines in one file.

What decides whether Lottie fits:

- **Only part of After Effects survives export.** LottieFiles' compatibility reference lists shape layers,
  transforms, masks, track mattes, trim paths and shape morphing (with the same number of vertices on both shapes)
  as supported; most effects, adjustment, camera and light layers and audio as unsupported; expressions as needing
  to be baked into keyframes. Agree with the motion designer on these limits before the work starts, not after.
- **Images inflate the file.** Raster images in Lottie JSON are embedded as base64; vector shape layers keep files
  small. dotLottie compresses and stores images as separate assets.
- **Text depends on fonts.** System fonts must exist on the device; custom fonts must be outlined (which makes the
  text untranslatable) or shipped with the runtime. Prefer keeping words outside the animation, in the interface,
  where they can be translated and read by assistive technology.
- **Performance depends on the content**: many simultaneous masks, large repeaters and deep nesting slow playback
  even when export succeeds. Test on a mid-range phone.
- **Version matters**: older runtimes do not support newer features of the format.

### Rive

A design tool and runtime built for interactive motion. A Rive file contains artboards, timeline animations and
**state machines**: states connected by transitions with conditions, so the animation decides what to play based on
what the app tells it. Rive's documentation now treats **data binding** as the recommended way to connect the app
and the file: view models define the data, view model instances hold values, and bindings connect them to elements
of the animation, in both directions. The older state machine inputs (boolean, number, trigger) are documented as
legacy, suited to quick prototypes.

What decides whether Rive fits:

- **The animation must respond**: a button with hover, press and disabled states; a mascot that looks at the cursor;
  a progress illustration driven by real numbers; a character whose mood follows a score.
- **The team accepts the tool**: designers build the logic in Rive's editor, engineers bind data at runtime. The
  contract between them is the list of view model properties, which should be named and documented like an API.
- **Bones, meshes and constraints** are available for characters (see skeletal rigs below).

### Rules for both

- **Load it without blocking.** Reserve its space with fixed dimensions so nothing shifts; show the first frame or a
  static image until the runtime is ready; lazy-load animations below the first screen.
- **Pause what is not visible** (off-screen, hidden tab) and give any loop longer than five seconds alongside other
  content a pause control (WCAG 2.2.2 Pause, Stop, Hide, A).
- **Reduced motion**: show a meaningful still frame (usually the final one) or a simplified state; a Rive state
  machine can have a reduced-motion state the app selects.
- **Accessible name for the whole asset**, describing what it shows; decorative ones are hidden from assistive
  technology.
- **Color and theme**: an animation exported with fixed colors breaks in dark mode. Use dotLottie themes, Rive data
  binding for colors, or two versions.
- **Do not use them for interface chrome** that code handles better (a fade, a slide, a spinner): it adds a runtime
  and an asset for nothing.

## 2. Skeletal rigs: pose a connected character

### What it is

A character built from parts (images or vector shapes) attached to a hierarchy of bones. Animating the bones moves
the parts; the animation stores bone transforms, not frames. Spine and Rive's bones are common tools. Spine's
documentation describes the features that make rigs worth their setup cost:

- **Small data, many animations**: only bone data is stored, so a product can carry many actions for one character.
- **Skins**: the same skeleton and animations with different parts (a jersey per team, seasonal outfits).
- **Inverse kinematics**: pose a limb by moving its end (a hand reaching a cup) instead of rotating each joint.
- **Meshes and weights**: images deform with the bones (a bending arm, a breathing torso) instead of rotating as
  rigid pieces.
- **Mixing**: animations crossfade into each other at runtime, and can run together (walk while waving).
- **Code control**: bones can be driven by the app, for example a head that turns toward the pointer.

### When to use it, and when not

- **Use it** for a mascot or character with several actions, reused across many screens or variants, especially when
  it reacts to the app.
- **Avoid it** for a single short animation (a Lottie or a video is simpler), for photorealistic looks (rigs read as
  cut-out animation), and when no one on the team can rig and maintain it.

### Rules

- **Design the character for rigging**: separate parts at joints, overlap pieces so joints do not show gaps, and
  keep a consistent light direction so rotated parts still look lit correctly.
- **Idle animations are subtle and pausable**; a character that fidgets constantly in a corner of the screen is
  peripheral motion, a known trigger for people with vestibular disorders (WebKit, "Responsive design for motion").
- **Crossfade between actions** instead of cutting; a cut reads as a glitch.

## 3. Flipbook and video: play finished frames

### What it is

Frames rendered in advance and played in order: a sprite sheet (all frames in one image, shown one at a time), an
animated image, or a video. Use them when the frames cannot be computed live with acceptable quality: 3D renders,
photographic footage, hand-drawn frame-by-frame animation, complex simulations.

### Options

| Format | Good for | Watch for |
| --- | --- | --- |
| Sprite sheet with CSS `steps()` or a canvas | Short loops, pixel art, frame-by-frame icons | Memory grows with frames times size; no smoothing between frames |
| Animated GIF | Almost never | 256 colors, large files, no pause control |
| Animated WebP or AVIF | Short loops where a video element is not possible | Decoding cost; no playback controls; Jake Archibald's 2024 tests found animated AVIF slow and choppy on several browsers |
| Video (`<video>`, AVPlayer, ExoPlayer) | Anything longer than a short loop | Autoplay rules, captions if it has speech, size |

### Transparency

Video with an alpha channel needs different formats per browser: HEVC with alpha for Safari, VP9 with alpha in WebM
for Chrome and Firefox, with the HEVC source listed first so Safari picks it; a browser that plays a format without
its alpha shows a black background. Jake Archibald's "Video with alpha transparency on the web" (2024) measured a
lighter option, a "stacked alpha" video: one video twice as tall, color on top and transparency below, combined by a
small shader at render time. In his example the AV1 stacked version weighed about 460 kB, against about 1.1 MB for
VP9 with alpha and 3.4 MB for HEVC with alpha, and it played consistently across browsers. Prefer an opaque video
designed over a matching background when transparency is not essential.

### Rules

- **A poster frame always**, shown until the video can play and kept when it cannot.
- **Autoplay only muted, inline and short**, and never with reduced motion; provide pause (WCAG 2.2.2).
- **Never put information only in a video.** Text in the video is untranslatable and invisible to assistive
  technology unless captioned or described.
- **Respect data**: do not autoplay large videos on slow connections or with data saver on; offer a play button.

## 4. Particles: celebrate with many pieces

### What it is

Many small objects, each with a position, velocity and life, updated by simple rules (gravity, drag, spin, fade):
confetti, sparks, snow, bubbles. Rendered in a canvas, a GPU layer or a native emitter (Core Animation's
`CAEmitterLayer`, SpriteKit, or a particle library), not as hundreds of DOM elements.

### When to use it

Particles say "this moment matters". They work for rare, earned milestones: a first sale, the end of a season, a
completed course. They fail as routine feedback, because the same burst on every save stops meaning anything and
slows people who save often.

### Rules

- **Short and finite.** A burst that lasts about a second or two and ends by itself; nothing that falls forever
  behind content.
- **Count is the cost.** Every particle is computed each frame; keep counts modest, especially on phones, and stop
  emitting when the tab is hidden. Pool objects instead of creating and discarding them every frame.
- **Respect reduced motion** by not running them at all and stating the milestone in text. The widely used
  canvas-confetti library has a `disableForReducedMotion` option that does exactly this, but it is off by default:
  turn it on.
- **Do not flash.** Bright, fast-blinking particles can cross the flash thresholds of WCAG 2.3.1 Three Flashes or
  Below Threshold (A).
- **Keep it out of the way**: particles must not cover the next action, intercept pointer events, or reduce text
  contrast while they play.
- **Match the brand**: shapes and colors from the product's palette and tone; a serious product may prefer a single
  restrained mark of success over confetti.

## 5. Shaders: transform the pixels

### What it is

Small programs that run on the GPU for every pixel (fragment shaders) or every vertex, used for effects that
geometry cannot express: ripples, noise and grain, distortion, glows, gradients that move, transitions that dissolve
an image. Available as WebGL and WebGPU on the web, Metal shaders in SwiftUI (`colorEffect` to change color,
`distortionEffect` to move pixels, `layerEffect` to sample the layer, from iOS 17), and AGSL `RuntimeShader` on
Android from Android 13 (API level 33). Lighter alternatives exist for simple cases: CSS filters and blend modes, and
SVG filters such as `feTurbulence` with `feDisplacementMap`.

### When to use it

- A signature visual that defines the brand, rendered in a contained area.
- Feedback that is physical by nature: a ripple from a touch, a glass refraction.
- Image transitions where crossfades look cheap.

### When not to use it

- Behind text, where moving pixels reduce legibility and contrast.
- Full screen and always running on a page people read: it costs battery and heat, especially on phones.
- When an image, a gradient or a CSS filter gives the same result.

### Rules

- **Always have a fallback**: a static image or gradient when the API is unavailable, the context is lost (WebGL
  contexts can be lost and must be restored or replaced) or the device is old. AGSL needs Android 13 and the SwiftUI
  shader modifiers need iOS 17, so older versions need another path.
- **Pause when not visible**, and render at a lower resolution or frame rate when the effect allows it.
- **Reduced motion**: render a still frame of the effect. Scaling, zooming, spinning, multi-speed movement and
  peripheral motion are known vestibular triggers (WebKit, "Responsive design for motion"); many shader effects are
  exactly that.
- **Test contrast over the moving result**, at its worst frame, not its best.
- **Check color in both themes**: an effect tuned on white can disappear or glare on a dark background.

## States for any authored or rendered motion

| State | What the person sees |
| --- | --- |
| Loading | Reserved space with a still frame or poster; no layout shift |
| Playing | The motion, with a pause control when it loops beyond five seconds |
| Paused by the person | Stays paused when scrolling away and back |
| Off-screen or hidden tab | Paused automatically, resumes on return unless the person paused it |
| Reduced motion | The still or simplified version, chosen to keep the meaning |
| Failed to load or unsupported | The still version; no empty box or error text in place of decoration |
| Low power or data saver | The still version or a play button instead of autoplay |

## Conflicts and trade-offs

| Conflict | Resolution |
| --- | --- |
| Expressive assets versus page weight | Lazy-load below the first screen; reserve space; keep decorative assets out of the critical path |
| Designer control versus translation | Keep text in the interface, not in the asset |
| Character versus daily use | Full animation the first time or for milestones; brief or none on repeated actions |
| Fidelity of video versus interactivity | Video for fixed footage; Rive or code for anything that must react |
| Shaders' impact versus battery and legibility | Contain them, pause them, never behind body text |

## A method for a new case

1. State the job of the motion and whether it must react.
2. Pick the format from the table above; prefer the lightest that does the job.
3. Agree on the authoring limits with the designer (export support, fonts, colors, themes).
4. Define the still version, the loading state and the pause behavior before production.
5. Budget size and frame time; test on a mid-range phone and a slow connection.
6. Check reduced motion, dark mode, translations and assistive technology.

## Worked comparison

**Moment:** a youth football club app celebrates when a player completes all training sessions in a month.

**Weak version.** A 2.4 MB Lottie of a trophy with the text "¡Felicitaciones!" baked into the artwork plays
full-screen, with 300 confetti pieces falling for eight seconds over the button to continue. It plays every time the
player opens the app that day. It is white on white in dark mode, untranslated for English-speaking families, and
runs with reduced motion on.

**Strong version.** A small Rive trophy (vector, under 100 kB) sits in the monthly summary card. Its state machine
has an "earned" animation that plays once, the first time the card is seen after the milestone, and a still "earned"
state afterwards. The message is interface text, translated and announced as a status. A short confetti burst of a
few dozen pieces, in the club's colors, plays around the card for about a second, with `disableForReducedMotion` on
and pointer events disabled so the next button stays usable. Colors come from data binding, so the trophy follows the
theme. With reduced motion, the trophy shows its earned state and the text does the celebrating.

## Common mistakes

- **A runtime and an asset for motion that code does better** (a spinner, a fade, a slide).
- **Text baked into animations**, untranslatable and unreadable by assistive technology.
- **Fixed colors** that break in dark mode.
- **Autoplaying large assets** on slow connections and with reduced motion.
- **Particles or celebrations on every action.**
- **Shaders behind body text** or running full screen on reading pages.
- **No still version**, so a failed load leaves an empty box.
- **Library options left at their defaults**, such as canvas-confetti's reduced-motion option, which is off.

## Checklist

- [ ] The format is the lightest that does the job; code was considered first.
- [ ] Authoring limits (export support, fonts, themes) were agreed before production.
- [ ] Space is reserved, the first paint is not blocked, and below-the-fold assets are lazy-loaded.
- [ ] A still version exists for loading, failure, reduced motion and low power.
- [ ] Loops longer than five seconds can be paused; everything pauses off-screen and in hidden tabs.
- [ ] Text lives in the interface, translated, not inside the asset.
- [ ] Colors follow the theme in light and dark.
- [ ] Celebrations are rare, short, out of the way and off with reduced motion.
- [ ] Shaders have a fallback, never sit behind body text and were checked for contrast at their worst frame.
- [ ] Tested on a mid-range phone and a slow connection.

## References

- LottieFiles, Lottie compatibility with After Effects:
  <https://docs.lottiefiles.com/en/integrations/after-effects/09_lottie-compatibility>
- LottieFiles, Lottie JSON and dotLottie formats: <https://docs.lottiefiles.com/en/format>
- Rive, state machines: <https://rive.app/docs/editor/state-machine/state-machine>; data binding:
  <https://rive.app/docs/editor/data-binding/overview>; legacy inputs: <https://rive.app/docs/editor/state-machine/inputs>
- Esoteric Software, Spine in depth: <http://esotericsoftware.com/spine-in-depth>
- Jake Archibald, "Video with alpha transparency on the web" (2024): <https://jakearchibald.com/2024/video-with-transparency/>
- canvas-confetti: <https://github.com/catdad/canvas-confetti>
- Android, AGSL: <https://developer.android.com/develop/ui/views/graphics/agsl>
- Apple, SwiftUI `colorEffect`: <https://developer.apple.com/documentation/swiftui/view/coloreffect(_:isenabled:)>
- WebKit, "Responsive design for motion": <https://webkit.org/blog/7551/responsive-design-for-motion/>
