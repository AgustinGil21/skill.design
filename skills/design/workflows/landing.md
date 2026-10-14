# Workflow: landing page or marketing site

> **Context first.** If this is the first design task in the project and there is no `DESIGN-CONTEXT.md`, run
> `workflows/start.md` (or at least its evidence step) so audience, stakes, tone and brand guide every decision below.

The full guide lives in `knowledge/landing/`.

**New site with no system?** Before the visual idea becomes values, ask once how much of a design system the person
wants (`knowledge/design-system/01-deciding-scope.md`): usually foundations as tokens for a single page, the core
components too when the site will grow or an app will share its look. Skip it when the project already has a system.

Order:

1. **Strategy** — `knowledge/landing/01-strategy-and-structure.md`: one goal, a concrete audience, its stage of
   decision, the main objection, the real proof available, the type of page. Separate what you know from what you
   assume.
2. **Copy first** — `knowledge/landing/04-persuasive-writing.md`: headline (many options, keep two), subheading,
   sections, calls to action, in the language of the market. If it does not convince as plain text, do not move on.
3. **Visual idea** — `knowledge/landing/05-art-direction-and-creativity.md`, `knowledge/09-typography.md`,
   `knowledge/10-color.md`, `knowledge/11-brand-and-identity.md`: a concept in one sentence, one or two typefaces,
   a palette with one lead color, an image type, a graphic gesture.
4. **Skeleton** — `knowledge/landing/14-recipes.md` by page type, adapted to the evidence you actually have.
   Specific guides: pricing and case studies (`09`), mobile, waitlists and integrations (`10`), audiences and trust
   (`11`), AI, physical products and portfolios (`12`), conversion forms (`13`), dark aesthetics (`16`), blogs and
   editorial (`17`).
5. **Hero and sections** — `knowledge/landing/02-hero.md`, `knowledge/landing/03-sections.md`.
6. **Motion** — `knowledge/landing/06-motion.md` and the base code in `knowledge/landing/15-motion-recipes.md`:
   a few moments with a purpose, a reduced version, transform and opacity only.
7. **Accessibility, performance and SEO** — `knowledge/landing/07-accessibility-performance-and-seo.md` and
   `knowledge/14-seo-and-content.md`, including multilingual SEO when the site has more than one language.
8. **Make it feel human** — `knowledge/13-human-design.md`: cover the logo, read only the headlines, name the
   intentional decisions.
9. **Review** — `knowledge/landing/08-review.md` plus `node scripts/slop.mjs`, `node scripts/a11y-static.mjs` and
   the contrast of every color pair.

Deliver: the implemented page (or the design), the copy, the visual idea in one sentence and the review result with
what is still missing (for example real data marked `[data: …]`).
