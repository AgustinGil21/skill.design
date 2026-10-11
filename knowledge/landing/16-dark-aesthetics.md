# Dark, technical aesthetics (without the cliché)

Widely used by developer tools and AI products. Done well, it conveys precision and focus; done badly, it is "purple
glows on black", the most recognizable sign of a generated landing page. This file covers when a dark direction fits,
how to build it from real content, and how to keep it readable.

## When a dark direction fits

| Fits | Does not fit (by default) |
| --- | --- |
| Developer tools, terminals, infrastructure | Health, finance for consumers, education for children |
| Creative tools where content should glow (video, photo, 3D) | Long-form reading pages |
| Products used in dark environments (audio, music, film) | Audiences who print or read on bright screens outdoors |
| Brands whose product UI is dark | Brands whose product UI is light (mismatch at sign-up) |

Ask: **does the product itself look like this?** A dark landing for a light product creates a jarring switch after
sign-up. And: **is dark chosen for the audience or only because competitors do it?** In some categories, a light
direction is the more distinctive choice.

## Building it from real material

- **Real content as texture**: lists, code, product interfaces at low intensity, not color blobs
  ([Linear](https://mobbin.com/sites/sections/11fa0cf7-8a9c-41f1-b38f-66918fac01f4)).
- **A serif or a typeface with character for contrast** against the technical interface ("Practices for building" in
  large serif; [Linear](https://mobbin.com/sites/sections/66f59864-ae93-419b-89c9-e53fbb46a3f3)).
- **Monospace for labels** (numbering like "1.0 Intake", brackets, states) and sans for reading; never long paragraphs
  in mono ([Shade](https://mobbin.com/sites/sections/7722fbe7-0524-401a-a668-d4fcd8b4791c)).
- **A bento grid with functional pieces** (dictionary words, modes, languages) instead of icons
  ([Monologue](https://mobbin.com/sites/sections/c48a648c-3f81-49c6-a185-46a7d7f5254a)).
- **One accent color or none**; a well-stepped gray scale.
- **Graphic identity of its own** (products drawn in ASCII; [Shopify Supply](https://mobbin.com/sites/sections/84e5f6f6-bc86-489d-a542-16f0d8fc0d89)).

## The color system in the dark

Dark surfaces need a different system, not inverted light tokens:

- **Background is rarely pure black**: a near-black reduces halation (glowing text) for people with astigmatism and
  allows elevation through lighter surfaces.
- **Elevation through lightness**, not shadows: raised surfaces are slightly lighter than the background.
- **Text is rarely pure white** for long passages; a slightly reduced white is easier to read. Headlines can be white.
- **A gray scale with clear steps**: background, surface, raised surface, border, muted text, text, strong text — each
  step distinguishable.
- **Saturated colors desaturate** on dark backgrounds; bright saturated accents vibrate.

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

**Weak:** black background, a purple-to-blue radial glow behind a centered headline "The future of AI development",
three glass cards with glowing borders and gradient icons, gray-on-gray secondary text at 2.8:1, and a focus ring that
does not show.

**Strong:** a near-black background with the product's real terminal output as a faint texture; a large serif headline
naming what the tool does; monospace labels numbering the sections; one warm accent used only for actions and status;
secondary text at 7:1; a bright focus ring; screenshots of the real dark UI.

## Common mistakes

- **Dark because competitors are dark.**
- **Pure black with pure white body text.**
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
