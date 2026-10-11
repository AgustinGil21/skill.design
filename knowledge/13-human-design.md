# Human design: the opposite of slop

How a designer makes work that feels made by someone, for someone. Slop is what comes out when nobody decides: the
average of everything seen before. Human design shows in specific decisions, in a point of view, in care at the
edges, and in the sense that someone thought about a particular person in a particular situation.

This complements [anti-slop](01-anti-slop.md), which lists the signals, with how to do it differently — and with the
limits of "being different", which can become its own recipe.

## What it is and why it matters

Human design is not a visual style. Hand-drawn lines, film grain and quirky cursors can be just as generic as purple
gradients when they are applied because they are fashionable. What makes design human is **specificity and intent**:
choices that come from this product, this audience and this moment, and that someone could explain.

It matters because:

- **People trust what feels attended to.** Care at the edges (an empty state, an error, a footer) signals care in the
  parts they cannot see.
- **Specific is memorable.** A concrete promise, a recognizable visual rule and a real voice stay in memory; generic
  ones blur together.
- **Specific is honest.** Concrete claims can be checked; vague ones hide whether the product delivers.

## Clarity, recognition and differentiation are different goals

Designers often mix three goals that pull in different directions:

| Goal | Question | Served by | Hurt by |
| --- | --- | --- | --- |
| **Clarity** | Do people understand what this is and what to do? | Conventions, plain language, hierarchy | Novelty for its own sake |
| **Recognition** | Do people know it's us without the logo? | Distinctive assets used consistently (color, type, shapes, voice) | Changing the style constantly; generic defaults |
| **Differentiation** | Do people see why we are different? | Specific claims, product truth, point of view | Hollow superlatives; copying competitors |

A dashboard used eight hours a day needs clarity first and recognition in small details. A landing page needs all
three, with differentiation carrying the story. Decide which goal dominates each surface before choosing how expressive
it should be.

## Personality according to task and risk

Expression is not free: it costs attention. Spend it where attention is available.

| Surface | Task load | Risk | How much expression |
| --- | --- | --- | --- |
| Landing page, brand moments | Low | Low | High: concept, imagery, motion, voice |
| Onboarding, empty states, success | Low to medium | Low | Medium: voice and illustration that explain |
| Core daily work (tables, editors, forms) | High | Medium | Low: expression in typography, color accents, precise details |
| Money, health, security, legal | High | High | Minimal: calm, plain, precise |
| Errors and failures | High stress | Varies | Minimal: empathy without jokes |

A product with strong character usually expresses it most at its edges and least in its core tools. That is not a
lack of personality; it is personality with judgment.

## When familiarity is a virtue

Being human is not the same as being unusual. People rely on familiar patterns to work quickly:

- **Keep conventions** for navigation, forms, tables, controls, checkout and settings.
- **Express character through content, voice, imagery, typography and detail**, not through reinventing a dropdown.
- **Innovate in interaction** only where the product does something genuinely new and the gain beats the learning
  cost.

A quiet, conventional interface with real content, precise typography and honest copy is more human than a novel
interface that makes people relearn basic controls.

## Signs that a person was behind it

- **Specificity**: names, numbers, places, dates, real cases. "Average reply time: 4 minutes" instead of "fast
  support" — if it is true and measured.
- **A point of view**: the design chooses and gives things up. It does not show twelve features; it shows the three
  that matter for this audience.
- **Varied rhythm**: sections of different sizes, pauses, one strong moment and calmer ones.
- **Details nobody required but someone cared about**: a thoughtful empty state, the typography of numbers, the
  microcopy in the footer, the 404 page that helps.
- **Intentional imperfection**, used as a choice, not as negligence: hand-drawn strokes, grain, textured illustration,
  imperfect crops — only when they fit the brand and the content.
- **Traces of craft**: sketches, process, the team, "how we made it", where they help people trust the work.
- **The language of someone**: sentences that sound spoken, in the brand's voice, in the reader's language, not like a
  press release.

## Expression without interference

Every expressive choice must pass three checks:

1. **Does it interfere with the task?** Custom cursors, scroll-jacking, heavy motion and unusual navigation often do.
   If it slows people down or confuses them in the core flow, it does not belong there.
2. **Does it exclude anyone?** Low-contrast "elegant" text, motion without a reduced version, meaning carried by an
   illustration without text. Expression never overrides accessibility (see [principles](00-principles.md)).
3. **Will it survive?** Frequency and fatigue: a delightful animation seen once is charming; seen fifty times a day,
   it is a delay. Maintenance: a hand-made illustration style needs someone to make the next twenty illustrations.

## Practices for writing like a person

These practices work in any language; apply them in the language of the product.

- **Write as you would explain it to a smart friend** who does not know the topic; then cut.
- **One idea per sentence**, concrete verbs, a clear subject.
- **Prefer examples to abstractions**: "Send a reminder to whoever hasn't paid" beats "Optimize your collections".
- **Remove hollow words and stock phrases** — in English, words like seamless, empower, solution, innovative, robust,
  next-generation, "in today's world", "it's not just X, it's Y", unlock, elevate; every language has its own
  equivalents (see `scripts/lexicon/`).
- **Read it aloud**: if it sounds like a brochure, rewrite it.
- **The swap test**: if any brand could have written the sentence, replace it with one only this brand could say.
- **Write natively** in each language rather than translating marketing copy word for word; voice is carried by
  idiom, rhythm and register, which do not translate literally.

## Practices for designing like a person

- **Start on paper or in text**, not in a template: structure comes from content.
- **References from outside screens**: print, objects, architecture, signage, film, the product's own physical world
  (the clinic, the warehouse, the kitchen).
- **One rule of your own**: a grid, an angle, a shape, a color that only this brand uses, applied with discipline.
- **Own or art-directed photography** before stock; if stock is necessary, choose the least "stock-looking" images and
  treat them with a common style.
- **Illustration with an author**: a recognizable style, not generic corporate figures.
- **Care at the edges**: empty states, errors, loading, the footer, the 404 — that is where people notice whether
  someone was there.
- **Remove with evidence, not with taste**: after the first complete design, remove what nobody would miss — but check
  who uses each element first. Help text for first-time users, links to accessibility settings and a way to reach a
  human may look removable and be essential for some people.

## Working with AI without it showing

- **Use AI to explore, critique, find errors and generate test data**, not to decide the concept or the final copy.
- **Every AI output passes four questions**: Is it specific? Is it true? Does it sound like the brand, in this
  language? Is there a default in it that nobody chose?
- **Ask AI to critique against this knowledge base** (anti-slop, accessibility, review) instead of asking it to
  "improve" in the abstract.
- **Generated images need art direction** (light, framing, palette, material) and editing; never ship the first output;
  check hands, text, skin and anatomy, and cultural details.
- **Disclose AI-generated content** where people need to judge its reliability.

## Worked comparison

**Same content:** the empty state of an invoicing app for freelance translators, shown before the first invoice.

**Generic version.**

```
[Flat illustration of a person at a laptop]
No invoices yet!
Start creating invoices to unlock powerful insights. 🚀
[Create invoice]
```

**Human version.**

```
Your first invoice takes about two minutes.
Add a client, the words or hours, and your rate. We calculate VAT for EU clients and add the
reverse-charge note when it applies.
[Create your first invoice]    Import clients from a spreadsheet
```

- Specific to the audience (freelance translators, EU clients, words or hours).
- Answers the real worry (taxes) instead of promising "insights".
- No illustration needed; if one is used, it should show the product's real invoice, not a generic person.
- The voice is calm and competent, which is what someone dealing with taxes wants.

## Final test

- **Cover the logo**: is it recognizable as this brand?
- **Read only the headlines**: do they tell a story only this product could tell?
- **Show it for ten seconds**: does the person remember something concrete?
- **Name three intentional decisions** and explain them. If you cannot find three, design is missing.
- **Check the core task**: did any expressive choice slow it down or exclude someone?

## Common mistakes

- **Replacing one recipe with another**: grain, hand-drawn icons and custom cursors applied to everything because they
  look "human".
- **Personality in the wrong place**: jokes in error messages, playful animation in a payment flow.
- **Novel interactions for basic controls.**
- **Removing things people need** in the name of minimalism.
- **Specific-sounding but unverifiable claims**: invented numbers are worse than vague words.

## Checklist

- [ ] The dominant goal (clarity, recognition, differentiation) is decided per surface.
- [ ] Expression is concentrated where task load and risk are low.
- [ ] Conventions are kept for core controls; character lives in content, voice, type, imagery and details.
- [ ] Every expressive choice passes the interference, exclusion and survival checks.
- [ ] Copy is specific, true and native to each language.
- [ ] Edges (empty, error, loading, 404, footer) were designed with care.
- [ ] Removals were based on evidence of use and need.
- [ ] AI output was critiqued and edited, never shipped as is.
