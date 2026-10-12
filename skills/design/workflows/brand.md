# Workflow: brand, typography and color

> **Context first.** If this is the first design task in the project and there is no `DESIGN-CONTEXT.md`, run
> `workflows/start.md` (or at least its evidence step) so audience, stakes, tone and brand guide every decision below.

0. **Study what exists** — if the project already has an identity, audit it first with the `brand-analyst` agent or
   `knowledge/32-reading-an-existing-brand.md` (`templates/brand-audit.md`). Decide with the person whether the work
   is to **evolve** the brand (keep the equity) or **replace** it; never replace silently.
1. **Platform** — `knowledge/11-brand-and-identity.md`: purpose, audience, promise, difference, personality
   (traits with their opposites), proof. Start from what people already associate with the brand, not from a blank
   page.
2. **Territories** — sketch two or three distinct creative territories and choose with explicit criteria
   (recognition, fit with the product's tasks, credibility, ability to scale), as described in
   `knowledge/11-brand-and-identity.md` and `knowledge/landing/05-art-direction-and-creativity.md`.
3. **Voice** — a "we say / we don't say" table with real examples, written as rules that hold in every language the
   brand speaks; note how formality and address change per language (`knowledge/24-content-and-localization.md`).
4. **Typography** — `knowledge/09-typography.md`: choose by intent, one or two families with roles, a type scale,
   tested with real copy in every script the product needs; check license and language coverage.
5. **Color** — `knowledge/10-color.md`: a lead color, tinted neutrals and semantic colors in OKLCH; tokens by role;
   test contrast with `node scripts/contrast.mjs` (white and black text on every color); a dark version; check
   that the brand color does not collide with functional meanings such as error or success.
6. **Shape, imagery and motion** — `knowledge/11-brand-and-identity.md` and
   `knowledge/19-imagery-icons-and-illustration.md`.
7. **Distinctive assets** — choose one or two and define how they are always used; plan how to test that people
   actually recognize them.
8. **Tokens** — turn everything into tokens (`knowledge/18-design-systems.md`) in the project's format (CSS
   variables, Tailwind, JSON).
9. **Test** — apply it to three real pieces (a screen, a landing section, an empty state) and review them with
   `knowledge/13-human-design.md`.

Deliver: the platform on one page, the voice table, the typography and color specification with tokens, the
territory that was chosen and why, and the three test pieces.
