# Anti-slop: not looking like it was made on autopilot

"Slop" is design that could belong to any product: default choices that nobody actually made. People recognize it in
seconds, and it lowers trust in everything else on the page, because it signals that nobody was paying attention.
This file lists the signals, explains why each one hurts, and — just as important — explains when a familiar choice is
not slop at all.

For how to make design distinctive and specific, see [human design](13-human-design.md).

## What it is and why it matters

Slop is not a style. A gradient, a card or a rounded corner is not slop by itself. Slop is the **absence of a
decision**: the element is there because the template, the component library or the AI tool put it there, not
because it communicates something for this product and this person.

It matters because:

- **It hides the product.** Generic hero illustrations and stock phrases say nothing about what the product does.
- **It erodes trust.** People associate template-like design with low effort, scams and products that will not last.
- **It wastes attention.** Decoration competes with content for the same limited attention.
- **It makes everything look the same.** When every product uses the same defaults, no product is memorable.

## Signal, not verdict

Every item below is a **signal**: a reason to ask "was this decided?". It is not proof of a problem. A purple
gradient can be a deliberate brand decision; a three-column feature grid can be the clearest way to compare three
things. Treat signals as questions, and judge them by what the element communicates, for whom, in this context.

| Signal | Becomes a problem when… | Is fine when… |
| --- | --- | --- |
| Purple-to-blue gradient | It is the library's or tool's default and has no relationship with the brand | It is part of a defined brand palette, applied with intent and contrast |
| Three equal cards with icons | The cards say generic things ("Fast", "Secure", "Simple") and the icons add nothing | The three items are genuinely parallel and each card carries specific, verifiable content |
| Large rounded corners and soft shadows everywhere | Every element gets the same treatment, so nothing stands out | The radius and depth are system tokens used consistently and sparingly for hierarchy |
| Centered layout | Everything is centered, including long text and forms, with no entry point | A short, single-message section where centering creates focus |
| The component library's default blue | Nobody chose it; it collides with the brand or with link and focus colors | It was evaluated and chosen, and the system is consistent around it |
| Emoji | Used as icons in headings and buttons to add "personality" | The product's voice genuinely uses them in user-generated or conversational contexts, and they never carry meaning alone |
| Illustration of people | Generic flat figures that could illustrate any product | Commissioned or art-directed illustration with a recognizable style that explains something |

## Visual signals

- **Default purple-blue-pink gradients** as backgrounds, diffuse blobs, glows and light leaks with no reason.
- **Glassmorphism everywhere**: frosted glass panels, huge diffuse shadows, glowing borders.
- **Maximum rounding, shadows and cards on everything**, cards inside cards.
- **Three identical cards** with an icon in a colored circle, a title and a generic sentence.
- **Emoji as icons** in section titles, buttons or headings.
- **Decorative icons** that add no information, mixing styles and stroke weights.
- **Everything centered and equally weighted**: no hierarchy, no rhythm, no entry point.
- **Undecided typography**: everything between 14 and 16 px, or, the opposite, huge headlines with no reason.
- **Palette without intent**: many saturated colors, or the library accent untouched.
- **Generic illustrations of people** in a flat corporate style instead of the real product.
- **Sample screens with perfect fake data**: placeholder text, "John Doe", charts that always go up.
- **Animation everywhere**: bouncing entrances, counting numbers, parallax on every section.

## Text signals

These signals exist in every language; the English examples illustrate them. The slop detector
(`scripts/slop.mjs`) carries per-language lists of hollow phrases.

- **Empty headlines**: "Supercharge your productivity", "Take X to the next level", "The future of X". Equivalent
  stock phrases exist in every language; what makes them hollow is that they could describe any product.
- **Triads of adjectives**: "Simple, fast and secure." "Create. Collaborate. Grow." The pattern sounds rhythmic and
  says nothing verifiable.
- **Filler words**: effortless, seamless, powerful, intuitive, next-generation, revolutionary, cutting-edge.
- **Forced enthusiasm**: "Awesome!", "Oops!", "Ready for liftoff!" with a rocket.
- **Explaining the obvious and skipping the important**: "Click the button to continue" next to a button whose effect
  (a charge, a deletion) is not explained.
- **AI-sounding filler**: "In today's fast-paced world…", "It's not just X, it's Y", "delve", "tapestry", "elevate".
- **Inconsistency**: "Delete" in one place and "Remove" in another for the same action; mixed forms of address in
  languages that have them.

## Interaction signals

- **Modals for everything, confirmations for everything.**
- **A full-screen spinner** for short loads that could keep content visible.
- **Tooltips as the only explanation** of something essential.
- **Seven-step tours** on first launch.
- **Empty states with no action; errors with no way out.**
- **Buttons that don't say what they do** ("Submit", "OK", "Continue" when the action actually charges money).
- **Fake progress**: bars that move at a constant speed regardless of the work.
- **Gratuitous gamification**: confetti for routine actions, badges for nothing.

## Motion signals

- **Bounce, elastic and "back" easings**; springs that overshoot and wobble.
- **Elements that fly to a side, rebound and come back.**
- **AI-style pulses and glows**: pulsing orbs, breathing gradients, glowing borders, ping dots.
- **Infinite decorative loops**: floating, wiggling, breathing elements.
- **Attention loops**: bouncing arrows, shaking buttons.
- **Everything fading up on scroll.**

Professional motion is short, decelerates, settles once and has a reason. See [motion](landing/06-motion.md).

## Code signals

- **Icons drawn by the agent**: inline SVG paths written by hand, icons built from CSS shapes, generated icon images.
- **Mixed icon families** (more than two, or two in the same area) and **more than two typefaces**.

- **One giant component per screen** that fetches, formats and renders everything.
- **Raw hex colors and arbitrary values** (`bg-[#7a0f1e]`, `rounded-[13px]`) inside components.
- **The same value written in many places** instead of a token.

See [components, tokens and code quality](35-components-tokens-and-code-quality.md).

## Why slop happens

Knowing the cause helps prevent it, because each cause has a different remedy.

| Cause | How it shows | Remedy |
| --- | --- | --- |
| No idea or concept | A correct but empty template | Write the concept in one sentence before designing |
| No real content | Placeholder text, round numbers, "Acme" examples | Design with real data and copy from the first sketch |
| No concrete audience | Messages for "everyone" | Choose a person and their situation |
| No hierarchy decision | Blocks of the same size stacked | Decide what comes first, second, and what goes |
| Decoration instead of communication | Gradients, glows, icons to fill space | Every element answers "what does this communicate?" |
| Unreviewed defaults | Default type, radii, shadows and blue | Review each system value and decide it |
| Inflated copy | Triads, adjectives, sentences that say nothing | Cut to what can be verified |
| Generating instead of designing | The first output of an AI tool or template shipped as is | Use generated output as material to critique and edit, not as the result |

## When a convention is the right choice

Avoiding slop does not mean avoiding conventions. Familiar patterns lower learning cost and build trust. Changing them
to look different can make the product harder to use.

- **Keep conventions where people need speed and certainty**: navigation, forms, tables, checkout, settings.
  Distinctiveness belongs in content, voice, imagery and moments of low task load.
- **A plain screen is not slop.** A dense, quiet data table with good typography and real data is decided design.
- **A library component is not slop.** Using the project's design system consistently is good practice; the slop is
  using its defaults without asking whether they fit.

The question is never "is this common?" but "was this chosen, and does it communicate?".

## How to avoid it

1. **Start from real content**: the person's copy, data and cases. If there is no real content yet, get it before
   designing.
2. **Decide the hierarchy first**: what is read first, second and third; style comes after.
3. **Few visual decisions, held consistently**: one typeface (or two with clear roles), one scale, a short palette with
   one accent, one radius, one depth. Repeat them everywhere.
4. **The product as protagonist**: real screens and states, not generic illustrations.
5. **Every ornament is justified**: if a border, shadow, icon or color does not help people understand or act, it
   goes.
6. **Write like a person** who knows the product and respects the reader's time, in the reader's language.
7. **Check the screen in grayscale**: if the hierarchy disappears, it depends too much on color.
8. **Compare with well-used products of the same type**: if it looks like a landing page template, rework it.

## Prioritizing what to fix

Not all slop is equally harmful. Fix in this order:

1. **Slop that misleads**: fake data presented as real, fake progress, buttons that hide their effect, fake urgency.
   These are honesty problems, not style problems.
2. **Slop that blocks understanding**: hollow headlines that hide what the product does, decorative icons without
   labels, missing hierarchy.
3. **Slop that hurts access**: low-contrast decorative text, motion everywhere without a reduced version, emoji
   carrying meaning.
4. **Slop that only looks generic**: default gradients, shadows and illustrations. Worth fixing for brand and trust,
   after the above.

## Using the detector without obeying it blindly

`scripts/slop.mjs` finds common signals in code and copy: hollow phrases per language, default purple-blue gradients,
decorative glows, emoji in headings and buttons, adjective triads and placeholder content.

- **A finding is a question.** Read the context: a hollow phrase inside a quote of a competitor is not your copy; a
  gradient defined in the brand tokens may be intentional.
- **No findings does not mean no slop.** The detector cannot see generic structure, meaningless illustrations or
  copy that is specific-sounding but untrue.
- **Use `--lang`** to restrict the check to the product's languages, and add a lexicon when the product uses a
  language that is not covered (see `scripts/lexicon/README.md`).
- **Report what you decided**: fixed, kept with a reason, or not applicable.

## Worked comparison

**Same content:** a feature section for a scheduling tool for physiotherapy clinics.

**Slop version.**

```
[Purple-blue gradient background]
Supercharge your clinic ✨
  [icon] Seamless booking     — Effortless scheduling for everyone.
  [icon] Powerful insights    — Unlock the full potential of your data.
  [icon] Secure & reliable    — Next-generation security you can trust.
[Get started 🚀]
```

Nothing says what the product does, for whom, or why it is better. Every line could describe any software.

**Decided version.**

```
Patients book their own appointments. Your front desk stops answering the phone for it.
  Online booking that respects each physiotherapist's real availability, room and equipment.
  Automatic reminders by text message, in the patient's language. No-shows dropped from 1 in 8 to 1 in 20
    at [real clinic, with permission] in the first three months.
  Patient records stay on servers in the EU, with access logged per staff member.
[Book a 20-minute demo]   See how booking looks for patients
```

The second version can be wrong — but it can be checked, and it could only be about this product. (The no-show figure
must be a real, attributable result; if it is not available, leave a `[data: …]` placeholder instead of inventing it.)

## Control question

Could this screen belong to another product if you swapped the logo? If yes, it is not designed yet.

## Checklist

- [ ] Every decorative element answers "what does this communicate?".
- [ ] Defaults (type, color, radius, shadow, illustration) were reviewed and decided.
- [ ] Copy is specific and verifiable; no hollow headlines, triads or filler in any language.
- [ ] Conventions are kept where speed and certainty matter; distinctiveness lives in content, voice and imagery.
- [ ] Nothing misleading: no fake data, fake progress, fake urgency.
- [ ] The slop detector was run with the product's languages, and each finding was decided, not just obeyed.
- [ ] With the logo covered, the screen still belongs recognizably to this product.
