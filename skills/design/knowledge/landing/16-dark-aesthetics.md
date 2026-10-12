# Dark, technical aesthetics (without the cliché)

Widely used by developer tools and AI products. Done well, it conveys precision and focus; done badly, it is "purple
glows on black", the most recognizable sign of a generated landing page. This file covers when a dark direction fits,
how to build it from real content, and how to keep it readable.

## When a dark direction fits

Dark is a direction to investigate, not a category requirement. A terminal-oriented developer product may benefit
from continuity with its interface; a developer reading documentation in daylight may prefer a light surface.
A health or education brand can use dark successfully if the actual audience, content and conditions support it.

| Evidence | Candidate direction | What could reverse it |
| --- | --- | --- |
| Product work happens on a dark canvas | Dark marketing demonstration | Most visits involve long reading |
| Established dark brand identity | Retain dark with readable utility areas | Assets lack necessary contrast |
| Frequent outdoor or print use | Light or selectable reading surfaces | Controlled low-light use dominates |
| Mixed environments and preferences | Support both themes | Maintenance cannot keep both coherent |
| No evidence beyond competitors | Compare dark and light prototypes | Brand evidence favors one clearly |

Ask whether continuity with the product helps visitors understand it. A dark landing for a light product is not
inherently wrong, but the transition should be deliberate rather than disguising the product's real appearance.
See [domain and tone](../30-product-domains-and-tone.md) before treating category tendencies as audience facts.

## Building it from real material

- **Real content as texture**: lists, code, product interfaces at low intensity, not color blobs
  ([Linear](https://mobbin.com/sites/sections/11fa0cf7-8a9c-41f1-b38f-66918fac01f4)).
- **A serif or a typeface with character for contrast** against the technical interface ("Practices for building" in
  large serif; [Linear](https://mobbin.com/sites/sections/66f59864-ae93-419b-89c9-e53fbb46a3f3)).
- **Monospace for labels** (numbering like "1.0 Intake", brackets, states) and sans for reading; reserve long
  monospace passages for content whose alignment or notation benefits
  ([Shade](https://mobbin.com/sites/sections/7722fbe7-0524-401a-a668-d4fcd8b4791c)).
- **A bento grid with functional pieces** (dictionary words, modes, languages) instead of icons
  ([Monologue](https://mobbin.com/sites/sections/c48a648c-3f81-49c6-a185-46a7d7f5254a)).
- **One accent color or none**; a well-stepped gray scale.
- **Graphic identity of its own** (products drawn in ASCII; [Shopify
  Supply](https://mobbin.com/sites/sections/84e5f6f6-bc86-489d-a542-16f0d8fc0d89)).

## The color system in the dark

Dark surfaces need a different system, not inverted light tokens:

- **Background choice is contextual**: near-black permits visible surface steps; pure black can suit imagery or
  an established identity. Test reading comfort instead of making a universal vision claim.
- **Elevation through lightness**, not shadows: raised surfaces are slightly lighter than the background.
- **Text lightness is tested with its surface**: off-white can reduce perceived glare, but lowering contrast can
  harm other readers. Pure white is a valid option when the complete composition works.
- **A gray scale with clear steps**: background, surface, raised surface, border, muted text, text, strong text — each
  step distinguishable.
- **Accent appearance changes with surroundings**: test perceived intensity and contrast; do not assume a fixed
  saturation adjustment works for every hue or display.

```css
:root[data-theme="dark"] {
  --bg: oklch(0.16 0.01 260);
  --surface: oklch(0.20 0.01 260);
  --surface-raised: oklch(0.24 0.01 260);
  --border: oklch(0.32 0.01 260);
  --text-muted: oklch(0.72 0.01 260);
  --text: oklch(0.92 0.005 260);
  --accent: oklch(0.78 0.14 75);
}
```

Values are an example; verify every text/background pair with `scripts/contrast.mjs`.

## Readability risks

- **Secondary text with insufficient contrast**: the most common failure. Check 4.5:1 on small gray text against its
  actual surface, not the page background.
- **Thin weights**: light font weights look thinner on dark backgrounds; use regular or medium for body text.
- **Invisible focus states**: a dark outline on a dark background; use a bright, high-contrast focus ring.
- **No hierarchy**: everything equally dark; use surface steps and spacing.
- **Low-contrast borders as the only separation** (3:1 needed if the border identifies a component).
- **Screenshots of light UIs** on a dark page glare; frame them or use the product's dark mode if real.

## Glows, gradients and noise

Not banned; they become slop when they are the only idea. Use them when:

- **They represent something**: light from a product (a screen, a lamp), a status, data intensity.
- **They are restrained**: one source of light, consistent with the composition.
- **Contrast survives**: text on top still reaches 4.5:1 at the brightest point.

Avoid the default combination: purple-blue radial gradient behind a centered headline, frosted glass cards, glowing
borders on every card. See [anti-slop](../01-anti-slop.md).

## Light mode and user preference

- Respect `prefers-color-scheme` when the product supports both; offer a toggle if the brand is primarily dark.
- Images and logos need versions for both (transparent PNGs of dark logos disappear on dark backgrounds).
- Social cards and emails are often viewed in light contexts; design them separately.

## Worked comparison

Fictional compositions below illustrate decisions; the contrast values are example specifications, not test results.

**Weak:** black background, a purple-to-blue radial glow behind a centered headline "The future of AI development",
three glass cards with glowing borders and gradient icons, gray-on-gray secondary text at 2.8:1, and a focus ring that
does not show.

**Strong:** a near-black background with the product's real terminal output as a faint texture; a large serif headline
naming what the tool does; monospace labels numbering the sections; one warm accent used only for actions and status;
secondary text at 7:1; a bright focus ring; screenshots of the real dark UI.

## Questions before setting a palette

Start with the material people need to inspect. Source code, charts, product screenshots and purchase conditions
have different requirements. A dark surface that makes a render look vivid may make a dense pricing comparison
harder to scan. Decide which content leads before choosing an accent or a background.

- Are visitors reading prose, inspecting output, comparing specifications or moving directly into the product?
- Is dark an established identity, a product default or only a reference-board preference?
- Which semantic colors already mean warning, failure, selection and success in the product?
- Will the page be used under bright light, at low screen brightness, or in printed evaluation material?
- Can the team produce accurate images for both themes, including screenshots and transparent logos?
- Does theme selection persist across navigation without replacing the visitor's explicit choice?
- Which scripts and font weights must remain legible against these surfaces?

Do not infer visual preference from age, profession or disability. Ask about environments and observed difficulties,
then test choices with people. A theme toggle offers agency but also creates responsibility: an incomplete light
mode with missing labels is not an adequate alternative to a difficult dark page.

## Alternatives and their costs

| Situation | Option | Reason | Cost |
| --- | --- | --- | --- |
| Strong dark product identity | Full dark page | Continuity between promise and use | More care with dense reading |
| Bright product photography | Light editorial page | Keeps materials visually familiar | Less continuity with dark UI |
| Dark hero, long explanation | Light reading area | Fits the material | Requires careful transitions |
| Mixed audience conditions | Selectable themes | Supports explicit preference | Double the state and asset review |
| Unproven dramatic concept | Neutral prototype first | Isolates content problems | Delays visual commitment |

Do not add a dark mode just to advertise a feature. Use it when it serves actual viewing conditions or identity,
and preserve the same information and controls in each mode. A campaign can deliberately use one palette; that
choice still has to meet applicable accessibility requirements and work with user overrides.

A hybrid page can be effective when a dark media stage leads to a readable article. Avoid alternating themes merely
to manufacture rhythm: repeated adaptation can distract from comparing information across sections. Use headings,
spacing and borders before introducing a new luminance environment for every card.

## A method for building usable dark surfaces

1. Place real copy and one representative screenshot on the base surface, without glow or texture.
2. Establish the hierarchy using spacing, type and grouping; inspect it without the accent color.
3. Define text, muted text, link, border, focus and status tokens for each actual surface.
4. Test the weakest pairs, including transparency over imagery and nested raised surfaces.
5. Add texture only where it carries meaning or brand identity, then repeat the contrast checks.
6. Test the composition in both reading and action states before extending it to the rest of the page.

Token names should describe function rather than a shade number alone. A muted label can still contain essential
billing information. Do not solve hierarchy by making important text barely visible; reduce size or emphasis only
within readable bounds, and use layout to distinguish secondary material.

Color samples in this file are illustrative inputs, not an approved palette. A decorative separator can be subtle;
a boundary needed to identify an input has a different requirement. Record which role a border serves before
calling its low contrast a failure or deciding that it is harmless.

## States and edge cases

| State | Risk in a dark composition | Response |
| --- | --- | --- |
| Initial paint | Bright flash before theme loads | Resolve theme early with a usable fallback |
| Image loading | Empty bright rectangle dominates | Reserve dimensions and choose a neutral placeholder |
| Image failure | Screenshot carried the only evidence | Keep the capability and limitation in text |
| Focus | Glow looks like decoration | Use a distinct outline with adequate separation |
| Hover or selected | Same glow used for both | Distinguish persistent selection from temporary feedback |
| Error | Saturated red becomes hard to read | Use text and icon plus tested semantic color |
| Disabled control | Looks like low-contrast normal text | Explain availability and use a clear control treatment |
| Forced colors | Shadows and fills disappear | Retain structure with semantic HTML and visible boundaries |
| Print | Background disappears or wastes ink | Provide readable content and useful link context |

Test late-loading fonts, long code identifiers and transparent images with baked-in shadows. A logo prepared for
white may have a dark halo on black. Do not invert all imagery automatically: photographs and brand marks may
become inaccurate, and charts may change their semantic colors.

When the visitor changes theme, preserve scroll position, input values and keyboard focus. Theme selection is not
navigation. If a third-party embed cannot match the page, frame it clearly rather than hiding controls or applying
an indiscriminate filter that changes meaningful colors.

## Accessibility: requirements and recommendations

WCAG 1.4.3 Contrast (Minimum, AA) requires 4.5:1 for ordinary text and 3:1 for qualifying large text, with stated
exceptions such as logos and inactive controls. Test rendered pairs; a dark theme does not receive a lower target.
WCAG 1.4.11 Non-text Contrast (AA) addresses visual information needed to identify controls and states at 3:1,
including its exceptions. It does not require every decorative surface step to reach that ratio.

WCAG 1.4.1 Use of Color (A) means an amber or red light cannot carry status alone. Add a readable status label or
another appropriate cue. WCAG 2.4.7 Focus Visible (AA) applies in every theme; WCAG 2.4.11 Focus Not Obscured
(Minimum, AA) addresses author-created content entirely hiding a focused component.

Using a bright outline, stronger body weight and a restrained glow are recommendations to test, not prescribed
WCAG styles. Neither near-black backgrounds nor a theme toggle are universal WCAG requirements. User preference,
readability and brand fit still matter beyond minimum contrast compliance.

Check zoom and text spacing with the real font. Thin strokes, dense diacritics and text over texture can be hard to
read even when a color calculator passes. Include people using magnification and their usual display settings;
a screenshot review cannot establish comfortable reading for them.

## Copy and localization

Technical aesthetics should not force technical language onto visitors. A decorative terminal label such as
“Initialize” may suggest running software when the actual action is requesting a consultation. Name the actual
outcome; keep code-like language for real commands and examples.

Use monospace where fixed alignment conveys meaning. Many scripts need different metrics and do not have a matching
monospace family. Test glyph coverage and line height, and permit a suitable reading face instead of forcing Latin
metrics onto every locale. A numbered label should remain understandable if punctuation order changes in RTL.

Localize theme controls by their function: switching appearance, selecting a named appearance or following the
system are different actions. English examples such as “Use system appearance” illustrate the function, not a
required grammatical form. Expose the current choice programmatically as well as visually.

Colors and material metaphors carry different associations across markets. Review a warning orange, ceremonial
black or neon accent in context rather than assigning a universal cultural meaning. Translate screenshots when
needed for comprehension; if an image stays in its original language, explain what the visitor should inspect.

## Extend the worked comparison into a decision

For the same fictional developer tool, suppose the task is comparing deployment failures before requesting a demo.
The weak composition's generic AI headline and decorative cards offer no inspection task. Replacing purple with
amber alone would not fix that problem; a different fashionable palette can hide the same missing evidence.

The stronger direction should show a real failure comparison, identify what the tool diagnoses and state what it
cannot infer. Terminal texture belongs behind nonessential areas; output needed for evaluation gets readable
contrast. A serif headline is optional: keep it only if it supports the established identity and shipped scripts.

A credible alternative is a light page with a dark output panel. Choose that if visitors spend longer comparing
prose and specifications than inspecting output. Its cost is a less immersive demonstration, not weaker design.
Change the decision if theme testing reveals glare, if the product appearance changes, or if localized fonts
cannot sustain the proposed typographic contrast.

## How to verify and measure

Compare dark and light versions with the same content and task. Ask people to locate a limitation, interpret a
status and explain the next action. Record errors and uncertainty, not just which version looks more impressive.
Inspect at low brightness and in bright conditions on representative devices; do not claim one simulation covers
all visual needs.

Check every interactive state with keyboard and assistive technology, then inspect forced colors and print.
Measure media cost separately from palette choice: a dark background is inexpensive, but a video glow may not be.
Check the initial paint and theme switch for flashes and layout movement.

Track successful evaluation tasks and downstream qualified actions. Use readability complaints, abandoned
comparisons, missing assets and performance regressions as guardrails. Theme preference alone does not show
conversion benefit, and increased time on page may indicate reading difficulty rather than interest.

## Decision checklist

- [ ] Audience evidence supports dark, light, hybrid or selectable surfaces.
- [ ] Palette roles distinguish decoration from necessary information.
- [ ] Focus, error, selected and unavailable states remain distinct.
- [ ] Theme changes preserve task state; first paint and print were checked.
- [ ] Typography and imagery work in every shipped script and market.
- [ ] The comparison changed content clarity, not only visual fashion.

## Common mistakes

Competitor imitation feels safe because the direction already looks credible in a moodboard. Test it against the
actual reading task before approving it. Muted labels often come from a desire for hierarchy; distinguish them
through placement and typography before reducing contrast. A glow cannot compensate for missing product evidence.


- **Dark because competitors are dark.**
- **Choosing pure black or off-white by habit without testing reading conditions.**
- **Gray secondary text below 4.5:1.**
- **Glows and gradients as the only idea.**
- **Invisible focus.**

## Checklist

- [ ] Dark fits the product, audience and the product's own UI.
- [ ] Texture comes from real content, not blobs.
- [ ] Gray scale with clear steps; elevation by lightness.
- [ ] Every text pair checked for contrast, including small muted text.
- [ ] Focus visible; borders that identify components at 3:1.
- [ ] Light-context assets (social cards, emails, logos) handled.
