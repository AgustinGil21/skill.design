# Writing guide for the knowledge base

How every file in `knowledge/` is written and extended. It applies to people and to agents editing the skill.

## The goal

This knowledge base does not exist to describe what screens usually look like. It exists to teach **how a senior
designer decides**: what they ask before drawing anything, which alternatives they weigh, what each one costs, when
a rule stops applying, which states and people change the answer, and how they check that they got it right.

The test of a good file: someone who reads it and then faces a case the file never mentions can **reason** their
way to a good solution, instead of copying a screen that looks similar.

A file that lists components, sizes and examples without explaining the decision behind them is incomplete, even
if everything it says is correct.

## Language: English first, language-independent by design

The skill is written in **English**. Its guidance must work for products in **any language** and must not depend on
the language of this repository, of the person asking, or of the product being designed.

- **Explain copy by its function, not by its words.** "The button names the outcome of the action" is a rule that
  transfers to every language; a list of good English verbs is only an illustration of it. Always state the rule
  first and give the English example second.
- **Mark examples as examples.** When an example depends on English grammar or idiom (verb-first buttons,
  sentence case, contractions), say so and say what the equivalent decision is in other languages.
- **Cover what changes across languages and locales** whenever the topic touches text or data: text expansion and
  contraction, plural rules with more than two forms, grammatical gender and agreement, formality and address
  (for example you; tú, vos, usted; du, Sie; tu, vous), word order inside variables, capitalization conventions,
  right-to-left scripts, scripts without spaces, line breaking, number, currency, date, time, address and name
  formats, sorting and search across accents and scripts.
- **Never hard-code one locale as the norm.** Not "the date format", but "the person's locale format"; not "first
  name and last name", but "the name as the person writes it".
- **Detectors and word lists are per language.** Anything that matches words (for example generic marketing
  phrases) is organized by language so more languages can be added without changing the rule.
- The final output of the skill is written in the language of the product or of the person asking, following the
  guidance above. The knowledge itself stays in English.

## What every file must contain

### Patterns (`knowledge/patterns/`)

Every pattern follows this order. Headings can be adapted to the topic, but no block is dropped without a reason.

1. **The problem and who has it.** The task, the context and the person's mental model. What it costs the person
   and the business when this is solved badly.
2. **Questions to ask before deciding.** The concrete questions a designer asks before choosing: frequency, risk,
   reversibility, data volume, who else is involved, where the person comes from, what they already know, which
   device and input they use.
3. **Alternatives and how to choose.** The real options (including "don't build this") with a table
   *situation → option → why → what it costs*. Never a single answer for every case.
4. **When to use it and when not to.** With counterexamples: situations where the popular pattern makes the task
   worse.
5. **Anatomy and behavior.** The parts, their order and behavior, with the reason behind each decision. Existing
   Mobbin references belong here.
6. **States and transitions.** Empty, loading, partial, error, no permission, offline, conflict, success, uncertain
   success. What the person sees in each and how they move between them.
7. **Edge cases and extreme content.** Long names, zero and thousands of items, translations, data that changes
   while being viewed, simultaneous actions, permissions lost in the middle of a task.
8. **Accessibility specific to the pattern.** Not the generic checklist: keyboard, focus order and destination,
   screen reader announcements, touch targets, motion, cognition. Cite the WCAG criterion when it is a requirement.
9. **Copy.** Labels, buttons, errors and confirmations for the pattern, explained by function, with good and bad
   examples, and what changes in other languages.
10. **Common mistakes and why they happen.** Not just "don't do X": why people do it (business pressure, copying
    another product, designing for the happy path) and how to avoid it.
11. **Worked comparison.** The same content solved badly and well, explained step by step. The content must be
    realistic and from the same domain in both versions.
12. **How to verify and measure.** What to test with people, what to check by hand, which metrics show it works and
    which ones mislead (for example, more clicks is not always better).
13. **References.** The existing Mobbin links and standards, never invented ones.

### Foundations (`knowledge/*.md`)

Same spirit, in this shape:

1. What it is and why it matters (which decisions it improves).
2. The concepts, each with its reason and its limits.
3. How to decide: criteria, decision tables, questions.
4. Conflicts and trade-offs with other principles, and how to resolve them.
5. A step-by-step method that applies to a new case.
6. Worked comparisons, good and bad, with realistic content.
7. Common mistakes and signs of quality.
8. A checklist.

### Landing pages (`knowledge/landing/`)

Like the foundations, with emphasis on: the visitor's intent and stage of decision, which objection each block
answers, which evidence is needed and what to do when it does not exist, alternative structures and when not to
apply a recipe.

## Content rules

- **No absolute without its exception.** Instead of "never use a global Save", write "by default, save per section
  or immediately; a global Save is justified when changes depend on each other and must be validated together".
  "Never" and "always" are reserved for real requirements (for example, never convey meaning by color alone).
- **Separate requirement, recommendation and convention.** Requirement: a standard demands it (cite the WCAG
  criterion, for example "1.4.3 Contrast (Minimum), AA"). Recommendation: good practice with reasons. Convention:
  what many products do; it sets expectations but does not prove it is right.
- **Many products doing it proves it exists, not that it fits.** Every reference comes with why it works in that
  context and when it does not transfer.
- **Do not invent data.** No statistics, studies, conversion figures or quotes. When mentioning a known finding
  (Hick, Fitts, Nielsen's sample sizes), name it and state its limits.
- **Do not invent links.** Keep existing Mobbin references exactly as they are. Do not add new URLs that have not
  been verified.
- **Realistic content in examples.** Plausible names, amounts, dates and copy from the domain, and varied across
  cultures. No "Lorem ipsum", "Acme", "User 1" or round invented figures presented as real.
- **Explain the why.** Every recommendation answers "why?" and "what do we lose if we don't?".
- **Fix what the analysis flagged as wrong** (see `.work/analisis-astra.md` while it exists), for example
  contradictions between files or code samples that do not do what they promise.

## Style

- Clear, direct English with plain words. Established technical terms (WCAG, ARIA, OKLCH, token) are fine,
  explained the first time they appear.
- `#` for the file title, `##` for sections, `###` for subsections.
- Tables for decisions and comparisons, lists for criteria, paragraphs for reasoning. A file made only of bullets
  does not explain decisions.
- Lines up to about 120 characters.
- No emojis.
- Relative internal links that exist, for example `[forms](patterns/forms.md)`.

## Length

Deep does not mean padded: every line has to teach something. As a reference, a complete file usually needs:

- Foundations: 300 to 600 lines.
- Patterns: 250 to 450 lines.
- Landing pages: 250 to 450 lines.
- Indexes (`README.md`): what it takes to orient, without repeating the content.

## Before calling a file done

- [ ] It answers the questions in its section of the analysis.
- [ ] It has alternatives with when to use and when not to.
- [ ] It has states, edge cases and pattern-specific accessibility.
- [ ] It treats copy by function and covers what changes across languages.
- [ ] It has at least one worked comparison with the same content.
- [ ] It has no absolute without an exception and no invented data or links.
- [ ] Internal links exist (`node --test scripts/tests/` passes).
