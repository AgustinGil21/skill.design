# Card: landing page or marketing site

The compact version of `workflows/landing.md`. Read this first; open the landing guides only for the step you are
on.

## Sequence

1. **Context and slop.** Design context or evidence; `knowledge/slop/README.md` (core list) and
   `knowledge/slop/03-landing-and-marketing.md`. A landing page is where generated defaults show most.
2. **Strategy in five lines.** One goal; one audience and its stage of decision; the main objection; the real proof
   available (and what is missing, as `[data: …]`); the type of page.
3. **Copy before visuals.** Headline that says what the product does for whom (several options, keep two); sections
   in the order of the visitor's questions; one primary action. If it does not convince as plain text, do not style it.
4. **Visual idea in one sentence.** A concept from the product's world; one or two typefaces; a palette with one lead
   color from the brand; one kind of imagery (real product, real photos, commissioned illustration); one graphic
   gesture. Not the house style of the moment.
5. **System.** Foundations as tokens before sections (ask about a design system once if the site will grow).
6. **Build.** Read `cards/code.md`. Astro or static rendering unless the person chose otherwise; images sized and
   modern; fonts subset; motion on transform and opacity.
7. **Motion.** A few moments with a purpose; content visible without waiting; a reduced version for each. When the
   person asks for an animated, expressive page, choreograph scroll scenes (sideways travel, zoom, rotation, pinned
   scenes, a persistent object that transforms, mask reveals, color by section, subtle pointer depth) with
   `knowledge/landing/19-scroll-choreography.md`.
8. **Look and polish.** Phone and desktop screenshots, full page; the craft pass (`knowledge/polish.md`).
9. **Final pass.** `knowledge/slop/01-visual.md`, `knowledge/slop/02-copy.md`,
   `knowledge/slop/05-motion-and-interaction.md`; `knowledge/landing/08-review.md`; the scripts.

## Banned by default (the landing shortlist)

Pill badge above the headline · gradient text · purple or blue gradient backgrounds and blobs · centered hero with
two buttons and nothing else · tilted screenshot with a glow · logo strip or stats strip without real, sourced data ·
three or six icon cards · bento grid of tiny mock UIs · testimonial carousel with generated faces · every section
fading up on scroll · counting numbers · infinite marquees · FAQ with invented questions · "Ready to get started?"
band repeating the hero · hollow headlines, triads and hype verbs in any language · trivia promoted as selling
points ("Available in 3 languages!", "Dark mode", "Responsive", "Built with Next.js", feature counts, numbers about
the team).

**The prominence test**: for every highlight, badge, stat and feature, ask whether the visitor this page is for would
decide differently without it. If not, cut it or move it to the FAQ, specs or footer. What the page highlights must
describe what it presents and answer the visitor's questions, not fill space.

Keep one only with evidence (the brand's real identity, an explicit request) and say so.

## Open a file only when

| Step | Open |
| --- | --- |
| Strategy, structure, recipes by page type | `knowledge/landing/01-strategy-and-structure.md` · `knowledge/landing/14-recipes.md` |
| Headline and sections copy | `knowledge/landing/04-persuasive-writing.md` |
| Hero composition | `knowledge/landing/02-hero.md` |
| Art direction | `knowledge/landing/05-art-direction-and-creativity.md` |
| Motion | `knowledge/landing/06-motion.md` · `knowledge/landing/15-motion-recipes.md` |
| SEO, performance, accessibility | `knowledge/landing/07-accessibility-performance-and-seo.md` |
| Social cards, favicons, app store links | `knowledge/patterns/app-icons-and-brand-touchpoints.md` |
| Pricing, case studies, AI products, portfolios | `knowledge/landing/README.md` |

## Report

The page and its sections · the copy · the visual idea in one sentence · decisions and discarded alternatives · what
is still `[data: …]` · slop files used, fixed and kept · craft pass · scripts · verification level.
