# Accessibility, performance and SEO on landing pages

A beautiful landing page that is slow, unusable with a screen reader or invisible to search engines does not do its
job. These three are not a final pass; they shape decisions from the first sketch: what the hero visual is, how heavy
the media is, whether the text lives in HTML.

For the full accessibility foundations, see [accessibility](../02-accessibility.md) and
[advanced accessibility](../15-advanced-accessibility.md) ; for content strategy,
[SEO and content](../14-seo-and-content.md) .

## Why designers own these

- **Accessibility** decides whether people with disabilities, older visitors, people on bright screens or with one hand
  busy can understand and act. Applicable obligations depend on the market and service; verify them with the responsible
  owner.
- **Performance** decides whether visitors on mobile networks see the page before leaving. The hero image, fonts and
  video are design decisions with performance consequences.
- **SEO** decides whether the page is found. Headings, text in HTML and page titles are design and writing decisions.

## Design decisions with consequences

| Decision | Accessibility | Performance | SEO |
| --- | --- | --- | --- |
| Hero as a large photo with text on top | Contrast over varying image | Large LCP image | Text must stay in HTML |
| Hero as 3D or canvas | Equivalent content; focus safety | Heavy JS, slow INP | Primary content in HTML |
| Background video | Pause control; reduced motion | Heavy; must be deferred | Neutral |
| Headline as an image or SVG text | May need a text equivalent; limited reflow | Extra request | Weak signal |
| Three web font families | Neutral | Slower text, layout shifts | Neutral |
| Content in tabs or accordions | Must be keyboard-operable | Neutral | Usually indexed, but less prominent |
| Infinite scroll or client-only rendering | Focus and position issues | Depends | Content may not be indexed |

Choose knowing the costs; sometimes the striking option is right, but then its alternatives and fallbacks are part of
the design.

## Accessibility (WCAG 2.2 AA applied)

**Requirements (WCAG criteria):**

- **Structure** (1.3.1 Info and Relationships, 2.4.6 Headings and Labels): headings reflect structure; landmarks
  can use `header`, `nav`, `main`, `footer`; provide a way to bypass repeated blocks (2.4.1 Bypass Blocks).
  A skip link visible on focus is one common implementation, not the only conforming technique.
- **Contrast** (1.4.3, 1.4.11): 4.5:1 for normal text, 3:1 for large text and for components and meaningful graphics.
  Apply the criteria's exceptions, including incidental text and inactive controls, where relevant.
  Text over media needs sufficient contrast throughout; a scrim or box is one way to achieve it.
- **Images** (1.1.1): alternative text that says what the image proves; decorative images with `alt=""`. When a
  screenshot contains decision-critical text, provide an accessible equivalent; HTML text usually works best.
- **Link purpose** (2.4.4): "Start free" rather than "Click here"; several "Learn more" links need context (visible text
  or visually hidden text).
- **Target size** (2.5.8): 24×24 CSS pixels or the criterion's spacing and other exceptions. A 44 px target
  is a comfort recommendation here; it is not the AA minimum.
- **Keyboard** (2.1.1, 2.4.3, 2.4.7, 2.4.11): functionality is keyboard-operable, subject to the criterion's
  path-dependent-input exception; focus follows a meaningful order and is visible. Author content must not entirely
  hide a focused component. Keeping it fully visible is a stronger recommendation; keys depend on control type.
- **Forms** (3.3.1, 3.3.2, 1.3.5): identify detected errors, provide labels or instructions, and programmatically
  identify applicable personal-data input purposes. Suggest known corrections under 3.3.3, subject to its exceptions.
- **Motion** (2.2.2, 2.3.1): see [motion](06-motion.md).
- **Media** (1.2.2, 1.4.2): captions for prerecorded synchronized media, subject to the media-alternative exception;
  automatic audio over three seconds needs independent volume or pause/stop control. Check 1.2.5 for audio description
  of prerecorded video where meaningful visual information is not conveyed by the audio.
- **Reflow and zoom**: test reflow at 320 CSS pixels wide (1.4.10), allowing the criterion's two-dimensional-content
  exceptions. Separately test text resizing to 200 % without loss of content or function (1.4.4).
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
  (`fetchpriority="high"`) when measurement identifies it as critical; do not lazy-load the actual LCP image.
  Preload only resources whose discovery needs help, since unnecessary priority competes with other critical assets.
- If the hero is text, choose readable fallbacks and inspect font delay; preload a critical font only when useful.
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

- **Fonts**: start with a small set of families; extra families need a role and measured budget. Include the needed
  character sets for every supported language,
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
- Performance, semantics and accessible content can support discovery and use; accessibility conformance is not
  itself a promised ranking increase.

### Languages and markets

- Separate URLs per language with the locale in the path (`/en/…`, `/es/…`), `hreflang` between them, `lang` on the
  page, and only that locale's translations loaded.
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

## Questions that change the design

Start with the visitor's task and the delivery environment. A procurement page read behind a corporate firewall
has different failure modes from a campaign page opened inside a social app's browser.

- What content and action must survive a failed script, denied consent or unavailable third-party host?
- Which devices, networks, assistive technologies and language versions are actually in scope?
- Is the expensive visual evidence of the product, or merely a mood-setting layer?
- Which element is the measured LCP candidate at each viewport, rather than the element the designer expects?
- Does the action open another origin, a scheduler or a document with a different accessibility standard?
- Who owns each embedded service, consent decision, content update and performance regression?
- Is search discovery a primary acquisition path, or is the page deliberately restricted or unindexed?

Use existing analytics to identify environments, then check who the analytics may miss: consent refusals, blocked
scripts and people unable to complete the page are not evidence of an audience that does not exist.

## Alternatives and their costs

| Situation | Option | Why it fits | Cost or limitation |
| --- | --- | --- | --- |
| Visual explains value | Still plus optional demo | Meaning before interaction | Less spectacle |
| Manipulation proves value | Demo plus equivalent explanation | Visitors test control | More testing |
| Content changes infrequently | Cacheable rendered page | Small dependency surface | Publishing must refresh caches |
| Quote needs inputs | Explanation plus calculator | Argument survives failure | Keep both consistent |
| No search intent | Deliberate indexing policy | Avoids unwanted search entry | Fewer discovery routes |
| Several scripts | Script-aware fonts | Legibility and identity | More font QA |

Do not replace an interactive map or configurable object with a still merely to improve a score if the visitor
needs the interaction to decide. First reduce unrelated work and provide a usable alternate path.
Conversely, a decorative scene does not earn the same budget as an essential configurator.
Indexing directives do not protect confidential content; genuine access restrictions need appropriate authorization.

## A method for resolving competing goals

1. Write the minimum useful experience: claim, evidence, conditions and next step.
2. Build that experience in semantic content with working destinations.
3. Add media in order of the objection it resolves, reserving its layout space.
4. Add interaction only where it improves understanding or completes the task.
5. Inspect the request and rendering sequence; a small file requested too late can still delay the page.
6. Test failure, consent and language variants before considering the richest variant finished.
7. Record the accepted cost and owner of each exception to the budget.

A video may lower uncertainty enough to justify additional transfer. Test an on-demand version before accepting
an automatic download. A chat widget may help complex buyers, but its loading cost should be compared with a
contact link or deferred widget using qualified conversations, not simply chat openings.

## Delivery states and recovery

| State | Visitor experience | Design decision |
| --- | --- | --- |
| Initial HTML available | Readable offer and ordinary links | Avoid waiting for decoration to reveal text |
| Font unavailable | Fallback text still fits | Test real fallback metrics, including other scripts |
| Media loading | Stable poster or reserved area | Do not imply an essential result has already loaded |
| Media fails | Explanation and useful next action remain | Show retry only when it can help |
| Consent declined | Core page and action remain usable | Explain any genuinely unavailable optional service |
| Embedded scheduler blocked | A contact or booking alternative | Do not leave an unexplained empty rectangle |
| Offline after submit | Receipt may be unconfirmed | Keep input; distinguish uncertainty from failure |
| Experiment script fails | One coherent default variant | Avoid hidden content awaiting a remote decision |
| Locale unavailable | Clear language choice with context | Avoid silently changing the offer or currency |

Network failure after a request is not proof that it was rejected. The form should check status or retry safely;
otherwise a visitor may create duplicate requests. This is part of the landing journey, even if another team owns it.

## Copy and localization at the technical boundary

Fallback copy names the missing capability and the available alternative. In an English example, "The calendar
could not load. Contact us to arrange a demo" explains more than "Something went wrong". Other languages may put
the recovery action first; preserve the function rather than translating the sentence order mechanically.

Alternative text describes the information the image contributes in context. A decorative background needs no
promotional description. A product screenshot may need a concise summary plus nearby explanation of its result.
A filename or a list of keywords serves neither visitors nor search intent.

Test mixed-script names, translated accessible labels and bidirectional product identifiers. A locale switch
should retain the equivalent destination when it exists; explain when content or commercial terms differ.
Do not silently infer preferred language from location: visitors travel and markets can have multiple languages.

Translated metadata needs an editorial owner just like visible copy. A localized headline with an old-language
social preview creates a mismatch before the visitor even arrives. Character-count guidance is approximate:
rendered width, script, device and the search or sharing surface determine what is shown.

## Verification that answers a decision

Use a small test matrix with the actual content, consent states and target languages. Record browser, viewport,
connection assumptions, tools, build and date so someone can reproduce a finding rather than trust a score.

- Ask a keyboard user to reach the offer, open details, submit and recover from an error without assistance.
- Read the page by headings and links in a screen reader; compare this sequence with the visual argument.
- Test a long translation, text resizing, reflow, forced colors and motion reduction as separate checks.
- Repeat lab performance runs under consistent conditions; investigate variation rather than picking the best run.
- Segment field performance by device, geography and page version when sample size allows meaningful comparison.
- Confirm indexability, canonical intent and visible structured-data facts; validation alone cannot guarantee indexing.

Pair technical measures with completion and qualified outcomes. A lighter page that removes essential pricing
information may improve loading while worsening informed decisions. A higher overall accessibility score cannot
compensate for an inaccessible submit button.

Distinguish measured field improvement, controlled lab improvement and predicted benefit in reports. When traffic
is too low for reliable field percentiles, say that and use laboratory checks plus observed task completion.

## Worked comparison (fictional design scenario)

**Weak:** a hero built as a WebGL scene with the headline rendered in canvas; three font families from an external
service; an analytics suite, chat widget and A/B tool loaded synchronously. In the fictional scenario, media delays the
main content; the
headline is invisible to screen readers and search engines; Tab gets stuck in the canvas.

**Strong:** the same concept with the headline in HTML over a still image of the 3D scene (AVIF, preloaded); the
interactive scene loads after the page is interactive and only when motion is allowed, with a "Skip 3D demo" link;
one suitable font family with script coverage; chat loaded on interaction. The claim and action are available
before the optional scene. Actual performance improvement still needs measurement.

The stronger version keeps the same three-dimensional product story. It changes the delivery dependency: reading
and acting no longer depend on rendering the scene. Reduced motion alone is not a sufficient loading policy;
capability, bandwidth and visitor choice also matter. If manipulating the object is essential to evaluating the
product, offer the interactive path explicitly and test equivalent understanding in the fallback.

## How to verify

- **Automatic**: Lighthouse or PageSpeed Insights, axe, the skill's `scripts/a11y-static.mjs` and
  `scripts/contrast.mjs`.
- **Manual**: keyboard-only pass, a screen reader pass (VoiceOver, NVDA), 200 % zoom, 320 px width, reduced motion,
  forced colors.
- **Field data**: Core Web Vitals from real users (search console, real-user monitoring).
- **Search**: check the rendered HTML contains the text; validate structured data.

Automated tools catch a fraction of accessibility issues; say what was checked automatically and what by hand.

## Common mistakes

- **Accessibility and performance left to the end.** Teams treat them as polishing because screenshots hide failure.
  Assign acceptance criteria to the hero and conversion path before choosing the media treatment.
- **Lazy-loading the hero image.**
- **Text in images or canvas.**
- **Third-party scripts nobody owns.** Each team adds a small dependency while no one sees the combined cost.
  Keep an inventory with purpose, loading condition, owner and removal criteria.
- **Translated body text with untranslated metadata.**
- **Cookie banners that block or steal focus.**

## Checklist

- [ ] Heading structure, landmarks and skip link.
- [ ] Contrast checked, including text on images at the lightest point.
- [ ] Alternative text says what images prove.
- [ ] Keyboard and visible focus everywhere; focus not hidden by sticky elements.
- [ ] Reflow at 320 CSS px and text resizing to 200 % checked separately.
- [ ] Performance budget written; LCP, INP and CLS within targets on mobile.
- [ ] Title, description, Open Graph and structured data written by hand per language.
- [ ] Consent respected before trackers load.
