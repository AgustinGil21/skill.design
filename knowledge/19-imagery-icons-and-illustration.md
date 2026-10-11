# Imagery, icons and illustration

How a designer decides which visual medium to use — photography, product screenshots, diagrams, icons, illustration,
3D, generated images or no image at all — and how to use each well. The question is never "what image goes here?" but
"what does this place need to communicate, and which medium communicates it best?".

## What it is and why it matters

Images communicate faster than text and are remembered longer — which is why a wrong or generic image does damage
quickly: it promises the wrong thing, says nothing, or makes the product look like every other.

Imagery decisions affect:

- **Comprehension**: a screenshot can show what a paragraph cannot; a decorative image can distract from both.
- **Trust**: real photos and real product views signal a real company; stock clichés signal the opposite.
- **Performance**: images are usually the heaviest assets on a page.
- **Access**: every meaningful image needs a text equivalent; every icon needs a name.

## 1. Choosing the medium

Start from the job the image must do.

| Job | Best medium | Why | Avoid |
| --- | --- | --- | --- |
| **Show what the product does** | Product screenshot or short screen recording, cropped to what matters | Evidence; sets accurate expectations | Generic illustrations of people at laptops |
| **Explain a relationship or process** | Diagram | Shows structure that photos cannot | Photos of people "collaborating" |
| **Show a physical product** | Photography (and 3D for configurable products) | Material, scale, detail | Renders that look unlike the real object |
| **Build trust in people** | Real photos of the team, customers (with permission), places | Specific, verifiable | Stock photos presented as staff or customers |
| **Evoke a feeling or a world** | Art-directed photography or illustration with a recognizable style | Brand recognition | Mixed styles from different sources |
| **Explain an abstract concept** | Illustration or diagram | Can depict what does not exist physically | Literal clip-art metaphors (lightbulbs, rockets, puzzle pieces) |
| **Mark a state** (empty, success, error) | Small illustration or icon with text, or text alone | Supports the message without competing | Large illustrations that push the action below the fold |
| **Identify an action or object in UI** | Icon, with a text label unless universal | Recognition at small sizes | Icons as decoration |
| **Nothing specific to show** | No image | Space and typography | Filler images to "make it less empty" |

**No image is a valid choice.** Typography, space and real content often carry a section better than a weak image.

## 2. Photography

- **Own or art-directed** whenever possible: real people from the audience, the product in use, the team, the places.
- **Art direction**: define light (natural, hard, soft), framing, distance, palette and treatment (grain, contrast),
  and apply it to every photo, so a set looks like one voice.
- **Stock, carefully**: avoid the smiling pose at the camera, the "diverse team pointing at a screen", the handshake.
  Choose images with real moments and light, and treat them consistently.
- **Representation**: reflect the real diversity of the audience, without stereotypes or decorative tokenism.
- **Cultural fit**: settings, clothing, gestures and objects carry meaning that changes across markets; review imagery
  for each market the product serves.
- **Responsive cropping**: a photo that works at 16:9 may lose its subject at 4:5 on mobile. Define focal points and
  crops per breakpoint (`object-position`, art direction with `<picture>`), and check that cropping does not cut faces
  or the meaningful part.
- **Technical**: AVIF or WebP, `srcset` and `sizes`, explicit width and height to prevent layout shift, lazy loading
  below the fold.

## 3. Product screenshots

- **Realistic data** (plausible names, figures and dates from the domain, varied across cultures) — never placeholder
  text or "User 1".
- **Privacy**: never show real customer data without permission; scrub names, emails, faces and identifiers from real
  accounts used for screenshots.
- **Cropped to what matters** and readable at the displayed size; a large fragment beats a whole screen shrunk to
  illegibility.
- **Up to date**: an old screenshot is a broken promise. Keep a list of where each screenshot is used so they can be
  updated after redesigns.
- **Localized**: in multilingual sites, screenshots should show the interface in the page's language when possible.
- **Minimal annotation** (a circle, an arrow, a label) when something needs pointing out.
- **Device frames only when they add context**; exaggerated shadows and perspectives reduce credibility and legibility.

## 4. Icons

### Choosing and drawing

- **One set**: the same stroke width, the same grid (often 20 or 24 px), the same corner radius language as the rest
  of the system.
- **Sizes**: about 16 px in small text, 20 px in UI, 24 px in navigation; the touch target should be at least 44 px
  even when the icon is small (24 px is the AA minimum target on the web).
- **Filled vs. outline** to indicate state (selected = filled) — consistently, and never as the only state signal.
- **Avoid 3D or gradient icons** in interfaces; reserve them for marketing illustration if the brand calls for it.

### Meaning and comprehension

- **With a text label** whenever the meaning is not universal. Few icons are truly universal in context (search, close,
  menu, home, settings, more) and even these benefit from labels in navigation. An icon alone is a riddle.
- **Validate icons in context**: test whether people can say what an unlabeled icon does. Metaphors that seem obvious
  to the team ("a cloud means sync", "a lightning bolt means automation") are often ambiguous.
- **Cultural meaning**: gestures (thumbs up, OK hand), animals, colors and symbols carry different meanings across
  cultures. Mailboxes, checkmarks and floppy disks are not universal.
- **One icon, one meaning** across the product.
- **Direction**: icons that indicate direction in the interface (back, forward, send, indent) mirror in right-to-left
  layouts; icons of real objects (a clock, a camera) and media controls in many conventions do not.

### Optical adjustments

- Circles and triangles look smaller than squares of the same size; scale them up slightly within the grid.
- A play triangle centered mathematically in a circle looks off; shift it toward the point.
- Thin strokes disappear at small sizes on low-resolution screens; check at 1× pixel density.

### Accessibility

- **Icon-only controls** need an accessible name (WCAG 4.1.2, A) and, on pointer devices, a tooltip that matches it.
- **Decorative icons** next to text are hidden from assistive technology (`aria-hidden="true"`).
- **Icons that carry meaning** (an error icon) need 3:1 contrast against their background (1.4.11, AA).

## 5. Illustration

- **A style with an author** (stroke, palette, proportions, level of detail), documented and repeated.
- **Use it where photos or screenshots cannot**: abstract concepts, empty states, brand moments, onboarding.
- **Avoid the generic corporate style** (long-limbed featureless figures in flat pastels).
- **Consistency with the brand**: a sober brand gets sober illustration.
- **Production and maintenance**: an illustration style needs someone who can make the next twenty pieces. Plan who
  produces them and how.
- **Animate sparingly** (Lottie, SVG), with a static version for reduced motion.

## 6. Diagrams

Diagrams are the most underused medium in product design. They explain systems, flows and relationships better than
any photo.

- Show one idea per diagram.
- Use the product's real vocabulary.
- Provide a text alternative that states the relationship, not just "diagram of the process".
- Make them legible at the size they will be displayed, including on mobile.

## 7. 3D and renders

- For physical objects, spatial products or strongly brand-driven identity.
- Credible materials and light; avoid generic glossy plastic.
- Controlled weight: a static fallback image, deferred loading, pause when off-screen.
- Interactive 3D needs keyboard alternatives and a non-3D way to get the same information.

## 8. AI-generated images

- **Explicit art direction** (light, lens, palette, material, composition) and a coherent series, not a single image.
- **Review hands, text, symmetry, eyes, shadows, physics and cultural details**; edit before using.
- **Do not depict real people** or present generated people as customers or staff.
- **Label as generated** where regulations or platform policies require it, and where people need to judge
  authenticity.
- **Rights**: check the tool's terms for commercial use.

## 9. Text alternatives by function

The right alternative text depends on what the image does, not on what it shows.

| Function | Alternative | Example |
| --- | --- | --- |
| **Informative** (adds information) | What it communicates | "Line chart: monthly active users grew from 12,000 in January to 19,500 in June" |
| **Functional** (is a link or button) | Where it goes or what it does | "Download the annual report (PDF, 2.4 MB)" |
| **Decorative** | Empty (`alt=""`) | A background texture |
| **Complex** (charts, diagrams) | A short alternative plus a longer description or data table nearby | "Revenue by region, 2026" + a table |
| **Image of text** | The text itself | Logo: the company name |
| **Redundant with adjacent text** | Empty, to avoid repetition | A product photo next to its name as a caption |

Write alternatives in the page's language, and keep them concise.

## 10. Rights, validity and maintenance

- **Licenses**: record the source and license of every image, font and icon set; check commercial use and
  attribution requirements.
- **Model and property releases** for photos of identifiable people and private places.
- **Expiry**: some licenses are time-limited; screenshots and team photos go out of date.
- **An asset inventory** (where each image is used) makes updates possible.

## Worked comparison

**Same section:** "How it works" for an app that lets small restaurants receive orders from several delivery platforms
in one tablet.

**Weak imagery.** A stock photo of a smiling chef with a tablet; three flat icons (a lightning bolt, a puzzle piece, a
rocket) with "Fast", "Integrated", "Grow".

**Strong imagery.**

- A diagram showing three delivery platforms flowing into one order queue on the tablet, labeled with the real
  platform types and the kitchen printer.
- A cropped screenshot of the real order queue with plausible orders (dish names and amounts in the local language and
  currency), showing one order marked "Ready in 12 min".
- One photo, art-directed, of the tablet on a real kitchen counter, to give context.
- Alternative text for the diagram: "Orders from three delivery platforms arrive in a single queue on the restaurant's
  tablet and print in the kitchen."

## Common mistakes

- **Images chosen to fill space.**
- **Stock clichés** presented as real people.
- **Unlabeled icons** that only the team understands.
- **Mixed icon sets.**
- **Screenshots with fake or outdated data, or real customer data.**
- **Crops that cut the subject** on mobile.
- **Missing or useless alternative text** ("image", "icon", the file name).
- **No plan to maintain** illustration styles and screenshots.

## Checklist

- [ ] Each image has a job, and the medium was chosen for that job (including "no image").
- [ ] Photography has consistent art direction, representation and cultural fit for each market.
- [ ] Screenshots use realistic, privacy-safe, current and localized data.
- [ ] Icons come from one set, are labeled unless universal, were validated in context, and mirror correctly.
- [ ] Optical adjustments were checked at real sizes.
- [ ] Text alternatives match each image's function.
- [ ] Images are optimized and responsive, with focal points that survive cropping.
- [ ] Rights, releases and an asset inventory are in place.
