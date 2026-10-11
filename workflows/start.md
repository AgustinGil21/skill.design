# Workflow: understand the project before designing

What a senior designer does in the first hours on a project: find out what the product is, for whom, with what
stakes and in what tone; study the brand that already exists; say what was inferred and how sure it is; ask what
cannot be inferred; and only then offer ways to help. Skipping this is how generic design happens: a cheerful
gradient on a payroll tool, a dense admin table on a kids app.

Run it **once per project** (or when the product changes), not before every small task. If `DESIGN-CONTEXT.md`
exists at the project root, read it, check that it is still true, and skip to step 6.

## 1. Gather evidence

Do this **before** asking the person anything: questions come after investigation, and only for what evidence cannot
answer. Asking "which part?" or "what kind of help?" without having looked at the project is the junior move.

- Run `node scripts/design-scan.mjs <project>`: product description, stack, languages, brand assets, fonts, most
  used colors, tokens, visible copy and raw domain signals. It is an index of where to look, not a conclusion.
- Note what the person already told you in the conversation: it outranks anything inferred.
- **Design files**: if the README, docs or the person mention Figma (or another design tool) and a tool to read it is
  available, read the relevant frames and variables (`knowledge/34-references-and-design-tools.md`).
- **See the product**: if it is running or has a public URL, capture key screens with
  `node scripts/screenshots.mjs <urls>` (phone and desktop, light and dark) or a browser tool, and look at them
  (`knowledge/33-looking-at-the-real-interface.md`). Ask before starting servers or installing anything. If you could
  not see it, say so in the summary.

## 2. Interpret it with two parallel perspectives

**Rule**: if subagents are available and the project has more than about 30 source files (the scan prints how many
files it read), launch `product-researcher` and `brand-analyst` **in the same message, in parallel**, before writing
your summary. Do not replace them with your own quick read: they open the screens, data model and assets that the
scan only points to, and they disagree with each other in useful ways. Pass each the absolute path of this skill's
folder, the project path, the scan output and the screenshot paths if any. In Claude Code they may be named with a
plugin prefix (for example `design:product-researcher`).

- **`product-researcher`**: what the product is, audiences, jobs, stakes, tone, with confidence levels and
  questions.
- **`brand-analyst`**: the identity as it really is in code and assets, what to preserve, inconsistencies, gaps,
  fit with tone.

Without subagents, do both investigations yourself following those agent files as instructions. For a tiny project
or a question that does not depend on audience or tone, a quick read is enough; say so.

## 3. Synthesize like a senior designer

Merge both reports into `templates/design-context.md`. Then think, do not just collate:

- **Where do the two perspectives disagree?** (The researcher sees a product for parents; the brand speaks like a
  B2B tool.) The disagreement is often the most important design finding.
- **What do the stakes demand?** Money, health, children, safety and legal consequences constrain tone more than the
  category does (`knowledge/30-product-domains-and-tone.md`).
- **What is genuinely uncertain and decision-critical?** Separate it from what is uncertain but irrelevant to the
  task at hand.

## 4. Tell the person what you understood

Before designing, show a short summary — not the whole document:

```
What I understood
- Product: management platform for amateur sports clubs (members, fees, training, players' medical records). Likely.
- Main users: club admins at a desk; coaches on phones at training. Likely / guess.
- Stakes: players' medical data and minors' information → privacy and calm matter. Confirmed.
- Tone: serious but warm, practical, familiar address in Spanish. Likely.
- Brand: burgundy as lead color, Playfair Display headings with a grotesque for text. Two blues and many reds compete
  with it.
What I need from you
1. …
```

Use the person's language. Mark each line with its confidence.

## 5. Ask what cannot be inferred

Ask when a **decision-critical** fact is a guess: the primary audience, the age of users, the tone the brand wants,
whether a visible identity is deliberate or legacy, the markets, the goal of the work. Rules:

- **Few questions** (one to four), most important first; never a questionnaire.
- **Options, not open fields**: two to four concrete answers per question plus "other", each with what would change
  in the design. Use the tool's question interface when available.
- **Offer a default**: "If you prefer not to decide now, I'll assume B and mark it."
- **Do not ask what you can find out** by reading the code, and do not ask about what does not affect the task.

## 6. Offer ways to help

When the person's request is open ("help me with the design", "what do you think of the app?"), offer modes with
what each produces, and recommend one based on what you found:

| Mode | What you get | Workflow |
| --- | --- | --- |
| **Critique and report** | Prioritized findings with evidence and fixes, saved as a report | `workflows/review.md` |
| **Ideas and directions** | Two to four distinct directions with a recommendation | `workflows/ideate.md` |
| **Feedback on your idea** | Honest strengths, risks, alternatives, recommendation | `workflows/ideate.md` |
| **Demo** | A quick prototype to see and compare ideas | `workflows/prototype.md` |
| **Build it** | Implementation in the project's code | `workflows/create.md` or `workflows/landing.md` |
| **Brand study** | Full brand audit and, if wanted, a direction | `workflows/brand.md` |

When the request is already specific ("build the pricing page"), do not show the menu: do it, and mention in one
line the other options that could help ("I can also show two directions as a demo before building").

## 7. Keep the context alive

- Offer to save the context as `DESIGN-CONTEXT.md`; write it only if the person agrees.
- Update it when the person corrects something or the product changes; mark the date.
- Every later decision cites it ("calm tone because players' medical data is involved").

## Failure modes to avoid

- **Stereotyping by category** ("finance → navy and serious") instead of reasoning from audience and stakes.
- **Presenting guesses as facts.**
- **Asking everything** instead of investigating first.
- **Ignoring the existing brand** and proposing a new one nobody asked for.
- **Analysis paralysis**: for a small, clear task, a short read and an explicit assumption is enough.
