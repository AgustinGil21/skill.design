# Slop catalog: motion and interaction

Animation, transitions, scroll effects, hover states, haptics and sound. Read with the [catalog rules](README.md): every
item is banned by default, and keeping one needs a stated reason tied to evidence (and, for motion, a person's request
when it is expressive by nature).

Background: [motion](../landing/06-motion.md) · [animation techniques](../37-animation-techniques.md) ·
[authored and rendered motion](../38-authored-and-rendered-motion.md) · [platforms and input](../36-platforms-and-input.md).


**Default motion versus requested choreography.** These items ban motion that nobody decided: effects applied by
default, everywhere, without a story. When the person asks for an expressive, animated landing page, scroll scenes
that move sideways, zoom, rotate, pin, transform a persistent object or reveal through masks are the brief, not slop —
build them with the rules in [scroll choreography](../landing/19-scroll-choreography.md): one idea per scene, moves from
the product's world, readable end states, native scrolling, and reduced-motion and mobile versions.
## Entrances and scroll

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Every section fades and slides up 20–40px as it enters the viewport | The default "AOS" reveal; content arrives late and the page feels slow | Content visible at once; reserve entrance motion for one moment that explains something |
| Staggered entrance on every list and grid (cards appear one by one) | Delay for its own sake; people wait to read | Show lists immediately; stagger only small sets where order carries meaning, under ~300ms total |
| Numbers that count up from zero | Theater; the real number is hidden for seconds | Show the number; animate only when the value changes live |
| Parallax on every section | Disorienting; motion sickness for some people | Parallax only when depth explains something, with a reduced-motion version |
| Scroll-jacking (the wheel is captured to jump between slides, snapping that fights the person) | Takes control from the person | Native scroll; pinned scenes that advance and reverse with the person's scroll are fine ([scroll choreography](../landing/19-scroll-choreography.md)) |
| Text that types itself letter by letter in the hero | Delays the message; generated cliché | Static text |
| Words that rotate in the headline ("for designers / developers / founders") | Hides the message behind a carousel | One audience per page or a sentence that covers them |
| Sticky scroll storytelling nobody asked for, on a page meant to convert fast | Long, slow, hard on phones | Short sections with real screens; save scroll scenes for expressive pages the person asked for |
| Horizontal sections that need a horizontal wheel or a drag to get through | Unexpected; hard with mouse wheels and keyboards | A pinned horizontal track driven by the normal vertical scroll, with a vertical stack on phones and reduced motion; or carousels people control |

## Easing, springs and timing

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Bounce, elastic and "back" easings; springs that overshoot and wobble | Toy-like; reads as a template demo | Decelerating ease (ease-out family) that settles once; springs with no overshoot |
| Elements that fly in from a side, pass the target and rebound | Same problem, bigger | Short travel, settle without overshoot |
| Linear timing on moving elements | Mechanical start and dead stop | Ease movement; keep linear for progress, scrubbing and continuous loops |
| Long durations (600ms–1s) on interface transitions | Slows every task | 150–300ms for interface changes; longer only for large, rare transitions |
| The same duration for small and large movements | Small things feel slow, big things feel abrupt | Duration by distance and size, from tokens |
| Hover effects that scale cards up and lift them with a shadow on every card | Template hover; noisy on dense pages | Subtle state change (border, background) where the whole card is clickable |
| Buttons that grow or shake on hover | Attention-seeking | Color or background change; pressed state on press |

## Decorative loops and "AI" motion

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Pulsing dots, ping rings and "live" indicators that are not live | Fake activity | A live indicator only when data is live, and steady (no pulse) unless it must call attention |
| Breathing glows, pulsing orbs and animated gradient borders around AI features | The generated AI aesthetic | Show what the system is doing (steps, sources) with plain progress |
| Floating, bobbing or rotating decorative elements | Motion with no job; distracting while reading | Remove; or one meaningful animation that stops |
| Shimmer on text or buttons to attract clicks | Attention bait | A clear primary action |
| Infinite marquees of logos, testimonials or features | Movement to fake abundance; hard to read, needs pause control (WCAG 2.2.2) | Static content; if it moves, it can be paused |
| Animated gradient mesh backgrounds | Battery and attention cost for mood | Static background |
| Custom cursors and blob cursors by default; magnetic effects on every button | Novelty that interferes with pointing | Native cursor; hover states. On requested expressive pages, subtle pointer-driven depth or a magnetic call to action is fine, only on fine pointers and never required ([scroll choreography](../landing/19-scroll-choreography.md#pointer-and-hover-as-a-second-input)) |
| Particle backgrounds (stars, dots, connections) | Generic "tech" decoration | Remove, unless the product is about the thing the particles show |
| Lottie animations of generic characters for every state | Decoration that delays | Animation only where it shows a change or a result |

## Feedback and celebration

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Confetti after routine actions (saving, sending a message, finishing onboarding) | Celebration loses meaning; condescending for adults at work | Calm confirmation; celebrate real milestones the person cares about |
| Success checkmark that draws itself for every save | Delay on every action | Instant state change; a drawn check only for rare, important completions |
| Shake animation on every error | Aggressive; does not explain | Inline message near the cause; a single small shake only for a wrong code or password, with text |
| Haptics on every tap | Noise; dilutes meaning (Apple's guidance: use haptics consistently and sparingly) | Haptics for a few meaningful events (success of a payment, reaching a limit), consistent and optional |
| Sounds on interface actions by default | Intrusive in shared spaces | Off by default except where sound is the product (games, music, calls) |

## Transitions between views

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| Every route change fades the whole page | Slow, hides continuity | Instant navigation, or a transition that connects where things come from and go |
| Menus, popovers and dialogs that fade or pop in at the center, unrelated to the control that opened them | Breaks cause and effect; the eye has to search | Grow from the trigger (morph or anchored scale) and return to it ([spatial continuity](../45-spatial-continuity.md)) |
| Opening with one animation and closing with another, or closing instantly | The way back is lost | Close along the same path, reversed |
| A card that opens a page with no visual link between them | The new view feels unrelated | Container transform or shared element from the card |
| Modals that zoom in from the center with a bounce | Toy-like | A short fade and a small scale or slide, without overshoot |
| Page-transition curtains, wipes and loaders between pages | Theater on every click | Native navigation speed |
| Accordions that animate height slowly | Waiting to read | Fast (≤200ms) or instant |

## Reduced motion and control

| Tell | Why it reads as generated | Do instead |
| --- | --- | --- |
| No `prefers-reduced-motion` handling | Motion forced on people who asked the system to reduce it | A reduced version for every animation: fade or no motion |
| Autoplaying video with sound, or without pause | Takes control | Muted, with pause; play on intent for long media |
| Carousels that advance automatically | People lose what they were reading | Manual control; if automatic, pause on hover and focus, with a pause button |
