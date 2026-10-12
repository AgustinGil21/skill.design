# Workflow: write or fix copy

> **Context first.** If this is the first design task in the project and there is no `DESIGN-CONTEXT.md`, run
> `workflows/start.md` (or at least its evidence step) so audience, stakes, tone and brand guide every decision below.

1. Read `knowledge/04-interface-writing.md` (interface) and, for marketing,
   `knowledge/landing/04-persuasive-writing.md`. For any product in more than one language, or any language other
   than English, also read `knowledge/24-content-and-localization.md`.
2. Identify the product's language, voice and form of address from existing copy or the brand guide, and keep them.
   Write in that language directly; do not write in English and translate in your head.
3. For each piece of copy: what does the person need to know or do at that moment? Write only that.
4. Quick rules, stated by function so they hold in any language:
   - Buttons name the outcome of the action and the object it acts on; in a dialog, the confirming button repeats
     the action ("Delete project", not "OK").
   - Errors say what happened, why if it is known, and how to continue, without blaming the person.
   - Empty states say what will appear here and how to start.
   - Confirmations state the concrete consequence ("14 files will be deleted. This can't be undone.").
   - No hollow words or adjective triads (`knowledge/13-human-design.md`).
   - Variables, plurals and gender handled by the localization system, never by concatenating fragments.
5. Run `node scripts/slop.mjs <files> --lang <languages>` to catch generic phrases.
6. When fixing existing copy, deliver a before/after table with the reason for each change.
