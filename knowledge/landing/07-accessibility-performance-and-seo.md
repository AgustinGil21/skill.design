# Accessibility, performance and SEO on landing pages

A beautiful landing page that is slow, unusable with a screen reader or invisible to search engines does not do its
job. These three are not a final pass; they shape decisions from the first sketch: what the hero visual is, how heavy
the media is, whether the text lives in HTML.

For the full accessibility foundations, see [accessibility](../02-accessibility.md) and
[advanced accessibility](../15-advanced-accessibility.md); for content strategy, [SEO and content](../14-seo-and-content.md).

## Why designers own these

- **Accessibility** decides whether people with disabilities, older visitors, people on bright screens or with one hand
  busy can understand and act. It is also a legal requirement in many markets.
- **Performance** decides whether visitors on mobile networks see the page before leaving. The hero image, fonts and
  video are design decisions with performance consequences.
- **SEO** decides whether the page is found. Headings, text in HTML and page titles are design and writing decisions.

## Design decisions with consequences

| Decision | Accessibility | Performance | SEO |
| --- | --- | --- | --- |
| Hero as a large photo with text on top | Contrast over varying image | Large LCP image | Text must stay in HTML |
| Hero as 3D or canvas | Needs a text alternative; focus traps | Heavy JS, slow INP | Content invisible to crawlers |
| Background video | Pause control; reduced motion | Heavy; must be deferred | Neutral |
| Headline as an image or SVG text | Needs alt; does not reflow | Extra request | Weak signal |
| Three web font families | Neutral | Slower text, layout shifts | Neutral |
| Content in tabs or accordions | Must be keyboard-operable | Neutral | Usually indexed, but less prominent |
| Infinite scroll or client-only rendering | Focus and position issues | Depends | Content may not be indexed |

Choose knowing the costs; sometimes the striking option is right, but then its alternatives and fallbacks are part of
the design.

## Accessibility (WCAG 2.2 AA applied)

**Requirements (WCAG criteria):**

- **Structure** (1.3.1 Info and Relationships, 2.4.6 Headings and Labels): headings reflect structure; landmarks
  `header`, `nav`, `main`, `footer`; a "Skip to content" link visible on focus (2.4.1 Bypass Blocks).
- **Contrast** (1.4.3, 1.4.11): 4.5:1 for normal text, 3:1 for large text and for components and meaningful graphics.
  Text over photos or video needs a scrim or a box; check at the lightest point of the image, not the average.
- **Images** (1.1.1): alternative text that says what the image proves; decorative images with `alt=""`. When a
  screenshot contains important text, that text also appears in HTML.
- **Link purpose** (2.4.4): "Start free" rather than "Click here"; several "Learn more" links need context (visible text
  or visually hidden text).
- **Target size** (2.5.8): at least 24×24 CSS pixels or enough spacing; 44 px is a recommended comfortable size.
- **Keyboard** (2.1.1, 2.4.3, 2.4.7, 2.4.11): everything works with Tab, Enter, Space and Escape in a logical order,
  focus always visible and not hidden behind sticky headers or cookie banners.
- **Forms** (3.3.1, 3.3.2, 1.3.5): visible labels, errors that say how to fix, `autocomplete` attributes.
- **Motion** (2.2.2, 2.3.1): see [motion](06-motion.md).
- **Media** (1.2.2, 1.4.2): captions for video with speech; no audio that plays automatically for more than 3 seconds
  without a control.
- **Reflow and zoom** (1.4.10, 1.4.4): usable at 320 CSS pixels wide and 200 % zoom without horizontal scrolling
  (except content that needs two dimensions, such as data tables).
- **Text spacing** (1.4.12): layouts survive increased line, letter and word spacing.
- **Language** (3.1.1, 3.1.2): `lang` on the page and on passages in another language.

**Recommendations:**

- One `h1` (the headline) and `h2` per section is a clear convention; WCAG does not mandate a single `h1`.
- **3D, canvas and interactive demos**: a text or image alternative with the essentials; do not trap focus; offer a
  way to skip.
- **Dropdown menus and accordions** follow established ARIA patterns (disclosure buttons with `aria-expanded`).
- **Cookie banners** do not cover the hero's action or steal focus without reason.

## Performance (Core Web Vitals)

Targets at the 75th percentile of real visits: **LCP ≤ 2.5 s**, **INP ≤ 200 ms**, **CLS ≤ 0.1**.

### LCP (the largest element on the first screen)

- The hero image in a modern format (AVIF/WebP), sized per screen (`srcset`/`sizes`), preloaded with high priority
  (`fetchpriority="high"`); never lazy-loaded.
- If the hero is text, fonts must not delay it (preload the headline font; use font metric overrides).
- Server response time matters: static generation or caching for marketing pages.

### CLS (layout shifts)

- Width and height (or `aspect-ratio`) on images, videos and embeds.
- Reserved space for announcement bars, cookie banners and dynamic content.
- Fallback fonts with adjusted metrics (`size-adjust`, `ascent-override`) so text does not jump when the web font
  loads.

### INP (responsiveness)

- Little JavaScript on load; islands or partial hydration for interactive parts.
- Third-party scripts (chat, analytics, A/B testing, tag managers) deferred and audited; they are often the largest
  cost.
- No heavy main-thread work on click; break long tasks.

### Fonts, images and media

- **Fonts**: two families at most, subset to the needed character sets (including every language the page ships in),
  `font-display: swap` or `optional`, self-hosted when possible.
- **Images below the fold**: lazy-loaded with dimensions.
- **Video**: poster, `preload="none"` or `metadata`, short, compressed.
- **Measure on a mid-range phone on a mobile network**, not only on the design computer; field data (real users)
  beats lab data.

### A performance budget

Write a budget before designing heavy elements, for example: hero image ≤ 150 KB, total JavaScript on load ≤ 150 KB
compressed, fonts ≤ 100 KB, no third-party script before interaction. Numbers are examples to adapt; the point is to
decide them up front.

## SEO and sharing

- **Title** (around 50–60 characters) and **meta description** (around 150–160) written for people, unique per page;
  lengths are display guidelines, not rules.
- **One clear `h1` with the main idea**; `h2`s using the words people search for, without forcing.
- **Real text in HTML**, not inside images or canvas.
- **Structured data** when it applies (Organization, Product, FAQ, real Reviews), matching visible content.
- **Open Graph and social cards**: a 1200×630 image designed for it, plus title and description.
- **Clean, canonical URLs**, and per-language versions with `hreflang`.
- **Internal links** from the blog, docs and other pages with descriptive anchor text.
- **Search intent**: a page targeting "X alternative" must actually compare; one targeting "how to…" must teach.
- Performance and accessibility also help ranking and, more importantly, visitors.

### Languages and markets

- Separate URLs per language, `hreflang` between them, and `lang` on the page.
- Translated titles, descriptions, alt text and social cards — not only body text.
- Fonts that cover each language's script; layouts tested with the longest language and with right-to-left scripts.
- Local search terms differ from translations of English keywords; research them per market.

## Privacy and trust

- A cookie notice that lets people reject as easily as accept, and does not cover the hero.
- Forms that say what is done with the email and link to the policy.
- Analytics and tracking proportional to need; respect consent before loading trackers.
- Seals and certifications only if real and verifiable.

## Edge cases

- **Hero image fails to load**: text remains readable (background color under the scrim).
- **JavaScript disabled or failing**: navigation, content and the main action still work.
- **Very long translated headlines**: no overflow or clipping at 320 px.
- **Dark mode**: images and logos with transparent backgrounds remain visible.
- **Forced colors (Windows High Contrast)**: icons and focus indicators remain visible.

## Worked comparison

**Weak:** a hero built as a WebGL scene with the headline rendered in canvas; three font families from an external
service; an analytics suite, chat widget and A/B tool loaded synchronously. LCP 5.8 s on a mid-range phone; the
headline is invisible to screen readers and search engines; Tab gets stuck in the canvas.

**Strong:** the same concept with the headline in HTML over a still image of the 3D scene (AVIF, preloaded); the
interactive scene loads after the page is interactive and only when motion is allowed, with a "Skip 3D demo" link;
one variable font family, self-hosted and subset; chat loaded on interaction. LCP 1.9 s; the experience is intact.

## How to verify

- **Automatic**: Lighthouse or PageSpeed Insights, axe, the skill's `scripts/a11y-static.mjs` and
  `scripts/contrast.mjs`.
- **Manual**: keyboard-only pass, a screen reader pass (VoiceOver, NVDA), 200 % zoom, 320 px width, reduced motion,
  forced colors.
- **Field data**: Core Web Vitals from real users (search console, real-user monitoring).
- **Search**: check the rendered HTML contains the text; validate structured data.

Automated tools catch a fraction of accessibility issues; say what was checked automatically and what by hand.

## Common mistakes

- **Accessibility and performance left to the end.**
- **Lazy-loading the hero image.**
- **Text in images or canvas.**
- **Third-party scripts nobody owns.**
- **Translated body text with untranslated metadata.**
- **Cookie banners that block or steal focus.**

## Checklist

- [ ] Heading structure, landmarks and skip link.
- [ ] Contrast checked, including text on images at the lightest point.
- [ ] Alternative text says what images prove.
- [ ] Keyboard and visible focus everywhere; focus not hidden by sticky elements.
- [ ] Reflow at 320 px and 200 % zoom.
- [ ] Performance budget written; LCP, INP and CLS within targets on mobile.
- [ ] Title, description, Open Graph and structured data written by hand per language.
- [ ] Consent respected before trackers load.
