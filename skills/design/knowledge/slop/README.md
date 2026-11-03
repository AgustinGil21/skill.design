# Slop catalog: what to avoid, item by item

This folder is the **mandatory list** of generic, autopilot choices that make an interface, a page, a piece of copy
or a flow look generated. It exists because a detector can only match text patterns, and most slop is not a pattern
in a file: it is a structure, a sentence, a flow, a decision nobody made. Only reading and judging catches it.

[01-anti-slop](../01-anti-slop.md) explains *why* slop happens and how to think about it. This catalog is the *what*:
concrete tells, why each one reads as generated, and what to do instead.

## The rule

1. **Read before you make, check before you finish.** Before generating or changing an interface, a landing page,
   copy, motion or a flow, read [the core list](#the-core-list-read-every-time) below (and, for landing pages,
   [03-landing-and-marketing](03-landing-and-marketing.md); for flows with money, consent or cancelling,
   [07-flows-and-dark-patterns](07-flows-and-dark-patterns.md)). Before calling the work done, go through the catalog
   files for every area you touched (table in the next section) as the final pass. When reviewing, use those files as
   the checklist from the start. This order keeps the list in front of the agent without loading every file before the
   first line is written.
2. **Every item is banned by default.** Using one needs a stated reason tied to evidence: the brand's real, existing
   identity (`DESIGN-CONTEXT.md`, brand files, tokens), an explicit request from the person, a platform convention the
   person relies on, or a requirement (accessibility, law). "It looks nice", "it is modern", "most sites do it" and
   "the library ships it" are not reasons.
3. **Replace, do not just remove.** Each item says what to do instead. Removing a gradient and leaving nothing is
   another default; decide the replacement from the product, its audience and its content.
4. **Report it.** When you finish, say which catalog files you went through, which items you found and fixed, and
   which you kept with the reason. A kept item without a reason is a finding.
5. **The detector is a backstop, not the check.** `scripts/slop.mjs` finds a few text patterns (hollow phrases,
   purple gradients, bouncy easings). No findings from it means nothing about structure, copy quality or flows.

## What to read for each task

| You are making or reviewing… | Read |
| --- | --- |
| Anything (always) | The core list below |
| A screen, component, dashboard, settings, forms, app UI | [01-visual](01-visual.md) · [04-product-ui](04-product-ui.md) · [06-code-and-components](06-code-and-components.md) |
| A landing page, marketing site, pricing page, portfolio | [01-visual](01-visual.md) · [02-copy](02-copy.md) · [03-landing-and-marketing](03-landing-and-marketing.md) · [05-motion-and-interaction](05-motion-and-interaction.md) |
| Interface or marketing copy, in any language | [02-copy](02-copy.md) |
| Animation, transitions, micro-interactions, scroll effects | [05-motion-and-interaction](05-motion-and-interaction.md) |
| Sign-up, onboarding, paywalls, checkout, cancelling, notifications, any flow that touches money or consent | [07-flows-and-dark-patterns](07-flows-and-dark-patterns.md) · [02-copy](02-copy.md) |
| AI features (assistants, generation, summaries) | [04-product-ui](04-product-ui.md) (AI section) · [02-copy](02-copy.md) |
| Code you hand over (React, Tailwind, CSS, native) | [06-code-and-components](06-code-and-components.md) |
| A full review or redesign | All files |

## The core list (read every time)

These are the tells that appear in almost every generated interface. If the output has three or more of them, it is
not designed yet, whatever else is good about it.

1. A purple, violet, indigo or blue-to-pink gradient nobody chose (backgrounds, buttons, text, borders).
2. Gradient text on the main headline.
3. Blurred color blobs, glows, grain and light leaks behind content as "atmosphere".
4. A centered hero with a small pill badge on top ("New", "Introducing…", "Backed by…"), a two-line headline, a grey
   subhead and two buttons (filled and outline).
5. Three or four identical cards with an icon in a tinted rounded square, a two-word title and one vague sentence.
6. Everything in rounded cards with a 1px light border and a soft shadow, including things that are not objects.
7. Inter, Geist or the system font used because it was the default, at one weight, with no typographic decision.
8. The component library's untouched defaults: neutral grey palette, its blue or near-black primary, its radius, its
   shadow, its focus ring.
9. Lucide (or any one stock family) icons dropped next to every heading and list item as decoration; the sparkles icon
   for anything involving AI.
10. Emoji as icons or bullets in headings, buttons, lists and section titles.
11. Hollow copy: "Supercharge", "Unlock", "Seamless", "Effortless", "All-in-one", "Built for the future of…", "Your
    X, reimagined", adjective triads ("Fast. Simple. Secure."), "It's not just X, it's Y".
12. Invented proof: a logo strip of made-up or unlicensed brands, "Trusted by 10,000+ teams", round statistics, five
    stars, testimonials from "Sarah K., Product Manager".
13. Fake product screenshots: a dashboard with a line chart going up, "John Doe", "Acme Inc.", "$12,345" and "+12.5%".
14. Every section fading and sliding up on scroll; staggered entrances on every list; counting numbers.
15. Bouncy, elastic or overshooting easing; pulsing dots; breathing glows; floating elements; shimmer on things that
    are not loading.
16. Dark mode with near-black background, neon accent and glassy panels as the "premium" default.
17. Bento grid of uneven cards as the features section, whatever the content.
18. A stats strip ("99.9% uptime · 10x faster · 24/7 support") with numbers nobody supplied.
19. A FAQ accordion and a final "Ready to get started?" band with the same two buttons as the hero.
20. One giant component per screen with raw hex values and arbitrary sizes inside it.
21. Empty states with a big illustration, "No items yet" and no action; errors that say "Something went wrong".
22. "Submit", "OK", "Continue" and "Get started" on buttons whose real effect is a charge, a deletion or a commitment.
23. Toasts, modals and confirmations for everything; spinners covering screens that could stay visible.
24. Consent, paywalls and cancel flows with a highlighted "Accept"/"Stay" and a grey "No thanks" link.
25. The same layout rhythm repeated down the page: heading, subhead, grid, heading, subhead, grid.

## How to use the catalog files

Each file is a set of tables: **Tell** (what you see), **Why it reads as generated** (what it signals to people) and
**Do instead** (the decision to make). The "do instead" column is a direction, not a new default: it always depends on
the product, the audience and the content. Do not replace one house style with another (cream backgrounds,
terracotta accents and editorial serifs on everything is the next generation of slop).

Language: copy items are stated by function and illustrated in English, with equivalents in other languages where the
tell is common in them. The product's language decides; see [content and localization](../24-content-and-localization.md).

## Final pass (before calling anything done)

- [ ] I read the core list and the catalog files for this task before making it.
- [ ] Logo test: with the logo covered, the screen or page could only belong to this product.
- [ ] Content test: every number, name, quote, logo and screenshot is real or marked `[data: …]`.
- [ ] Default test: every color, typeface, radius, shadow, icon family and easing was chosen, and I can say why.
- [ ] Copy test: every headline and button says something specific and verifiable in the product's language.
- [ ] Motion test: every animation has a job; nothing bounces, pulses, floats or loops for decoration.
- [ ] Flow test: declining, leaving and cancelling are as easy and as visible as accepting.
- [ ] I reported which catalog files I used, what I fixed and what I kept with its reason.
