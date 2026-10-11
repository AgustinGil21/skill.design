# Research guide: how to add knowledge to this skill

How to grow the knowledge base the way it was built: start from a question, look at how real products solve it,
work out **why** their designers decided what they did, compare approaches, and turn the reasoning into a knowledge
file that helps an agent decide — not a gallery of screenshots.

[WRITING-GUIDE.md](WRITING-GUIDE.md) defines the structure and rules of each file type. This guide covers the step
before: the research.

## 1. Start from a design question

Research without a question collects pictures. Write the question in one line, framed as a decision:

- "How should a product confirm a destructive bulk action: confirmation, undo, or trash?"
- "How do mobile apps let people choose a time slot when availability is sparse?"
- "How do B2B tools show usage limits before people hit them?"

Then write what you already know and what you need: the situations, audiences and platforms the answer must cover,
and the decisions an agent will face.

## 2. Find real examples

### Mobbin (when a Mobbin tool is available)

Mobbin has three kinds of search; use the one that matches the question:

| Search | Use for | Example query |
| --- | --- | --- |
| Screens | A single view or state | "empty state for first project with a primary action" |
| Flows | A multi-step journey | "cancel subscription flow with retention offer" |
| Sections | Landing-page blocks | "pricing table with monthly yearly toggle" |

How to search well:

- **Search by job, not by look**: "invite teammates with roles", not "modern modal".
- **Filter by platform** (iOS, Android, web) and run the same query on each when the answer may differ.
- **Look inside and outside the category**: products from the same domain show conventions; products from other
  domains show alternatives (games are good at onboarding, banks at confirmation, editors at shortcuts).
- **Collect 10–20 examples**, more when the space is varied. Note the product name, the link, the platform and the
  state shown.
- **Search for failures too**: anti-examples teach as much as good ones. Mark them clearly.

Keep every Mobbin link exactly as the tool returns it, with the product name.

### Other sources

| Source | What it gives | Notes |
| --- | --- | --- |
| Using the real product | Behavior, states, timing, errors | Screenshots with `scripts/screenshots.mjs` or a browser tool; never real personal data |
| Public websites | Whole pages: structure, pacing, copy, type, color, motion | `scripts/reference-capture.mjs <urls>` scrolls to the end and captures every slice (see `workflows/reference.md`) |
| Platform guidelines (Apple Human Interface Guidelines, Material Design, Windows and GNOME guidelines) | Platform conventions and the reasons behind them | Cite the guideline, check the current version |
| Standards (WCAG 2.2, WAI-ARIA Authoring Practices) | Requirements and accessible patterns | Quote criterion numbers exactly |
| Public design systems (GOV.UK, Atlassian, Shopify Polaris, IBM Carbon and others) | Documented decisions, often with research behind them | Good for "why", not only "what" |
| Research publications (Nielsen Norman Group, Baymard Institute, academic HCI papers) | Evidence about behavior | Do not invent numbers; cite or describe qualitatively |
| Library and framework documentation | What is technically possible | Check current documentation before writing code examples |

Never invent statistics, studies or URLs. When evidence is weak, say so in the file.

## 3. Understand the designer: why did they do it this way?

This is the core of the work. For each strong example, reconstruct the decision as if you had to defend it in a
design critique.

### Questions to ask of every example

1. **Who is this for, and in what situation?** Expert or novice, daily or occasional, phone or desktop, calm or under
   pressure.
2. **What is at stake?** Money, data, time, safety, reputation, nothing much.
3. **What problem does this design solve?** Restate it without naming the solution.
4. **What did the designer prioritize?** Speed, safety, clarity, discovery, conversion, brand, density.
5. **What did they give up?** Every decision costs something: an extra step, hidden options, less flexibility.
6. **What constraints shaped it?** Platform conventions, business model, legal requirements, technical limits, the
   existing design system, localization.
7. **What would break it?** Long names, translations, no data, many items, slow networks, screen readers, touchpads.
8. **Is this a convention, a deliberate difference, or an accident?** If most products do it, it is probably a
   convention people rely on; if one product does it differently, look for the reason.

### Reading the signals

| Signal in the design | What it often reveals |
| --- | --- |
| The primary action is visually dominant and others are links | A clear main path; the business cares about one outcome |
| A confirmation names the object and the count ("Delete 12 files?") | High cost of mistakes; trust matters |
| Undo instead of confirmation | Frequent, reversible actions; speed over ceremony |
| Dense tables with keyboard hints | Expert, repeated use |
| Progressive disclosure ("Advanced settings") | Mixed audience; the simple path serves most people |
| Copy that explains consequences | Regulated or high-stakes domain |
| Platform-native controls | Respect for platform expectations over brand expression |
| Strong brand expression in a functional area | Consumer product competing on feel; check that clarity survived |

Write the reasoning down as hypotheses ("likely chose undo because…"), not as facts about the company's intent.

## 4. Compare approaches and find the decision rules

Group examples by **approach**, not by product:

| Approach | Products | Best when | Costs |
| --- | --- | --- | --- |
| Confirmation dialog | … | Rare, irreversible, large scope | Habituation; slower |
| Undo toast | … | Frequent, reversible | Missed toasts; needs real reversibility |
| Trash with restore | … | Mistakes noticed late | Storage; permanent deletion path needed |

From the comparison, derive **decision rules** an agent can apply: "If the action is frequent and reversible, prefer
undo; if irreversible and large, confirm with the count; if mistakes are noticed late, add a trash." Add the
exceptions you found. These rules are the real deliverable.

## 5. Check the edges

Before writing, check each approach against:

- **States**: empty, loading, error, partial, no permission, offline, conflict.
- **Accessibility**: keyboard, screen readers, focus, contrast, motion, target size.
- **Platforms and input**: phone, tablet, desktop, touch, mouse, touchpad.
- **Languages**: text expansion, plurals, right-to-left, formats.
- **Ethics**: does any example rely on dark patterns? Name them as anti-examples.

## 6. Write it into the skill

1. Choose the file: an existing pattern in `knowledge/patterns/`, a foundation in `knowledge/`, a landing guide in
   `knowledge/landing/`, or a new file if the topic is genuinely new. Prefer extending over creating.
2. Follow the structure for that file type in [WRITING-GUIDE.md](WRITING-GUIDE.md): problem, questions before
   deciding, alternatives with trade-offs, when not to use, anatomy, states, edge cases, accessibility, copy by
   function, common mistakes, worked comparison, how to verify, references.
3. Write in English, stating rules by function so they work in any language; keep examples fictional.
4. Cite the real examples with their exact Mobbin links next to the point they illustrate, and mark anti-examples.
5. Separate requirements (WCAG criteria), recommendations and conventions.
6. Add the new file to the map in `SKILL.md` and to `knowledge/README.md`.
7. Run `node --test scripts/tests/` (it checks paths, links and names) and `node scripts/slop.mjs <file>`.
8. If the research changes how agents should behave, add a scenario to `evals/scenarios.md` and run it.

## 7. Research notes template

Keep notes outside the skill (they are raw material), then distill them into the knowledge file.

```
Question: [the decision in one line]
Platforms and audiences: [ ]
Searches run: [queries, platforms, tools]

Example: [product] — [link] — [platform] — [state]
  Problem it solves:
  Priority and what it gave up:
  Constraints:
  Why the designer likely chose this:
  What would break it:
  Convention, difference or accident:

Approaches found: [names, products per approach]
Decision rules: [if … then …, with exceptions]
Anti-examples: [product, link, why]
Open questions: [what the evidence does not settle]
```

## 8. Using agents for research

- Research tasks can be delegated to a subagent or another model (for example Codex): give it the question, the
  sources to use, the notes template and this guide, and ask for notes, not finished files.
- Review what comes back: check every link exists and matches the product, every claim has a source or is marked as
  a hypothesis, and the reasoning holds against the edges in section 5.
- Never paste research output into the skill without distilling it into decision rules.

## Common mistakes

- Collecting screenshots without a question.
- Describing what a design looks like instead of why it works.
- Treating one popular product as proof.
- Inventing statistics or links.
- Copying a product's look into a "pattern".
- Writing rules without exceptions.
- Forgetting to update the indexes and run the tests.
