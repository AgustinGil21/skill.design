# Review checklist and severity

How a designer reviews a screen or flow before calling it done, or reviews someone else's work: what to check, what
evidence each check needs, how to rate severity so the most harmful problems are fixed first, and how to report what
was not evaluated.

A checklist is a memory aid, not a substitute for judgment. Every item below exists because it is frequently missed;
passing all of them does not prove a design is good, and failing one does not always mean it is bad. Record the
reasoning either way.

## What it is and why it matters

Reviews catch problems while they are cheap to fix. They fail in three common ways:

- **Unscoped**: nobody says which screens, people, devices and languages were reviewed, so "reviewed" means
  something different to each reader.
- **Unevidenced**: a box is ticked because the reviewer believes it is fine, not because they checked.
- **Misprioritized**: findings are ordered by how easy they are to fix or by visual prominence, not by harm.

This file addresses all three.

## Before reviewing: define the scope

Write down, in a few lines:

- **What**: screens, flows, states, components.
- **Who**: the people and roles the review considers (first-time, expert, administrator, member), including people
  using assistive technology.
- **Where**: devices, widths, themes, languages and locales.
- **How**: code, running product, prototype or screenshots; which scripts and tools; which manual tests.
- **Against what**: the frame and success criteria, the design system, WCAG 2.2 AA.

## How to mark each item

| Mark | Meaning |
| --- | --- |
| **Pass** | Checked, with evidence, and it holds |
| **Fail** | Checked, with evidence, and it does not hold → becomes a finding |
| **Not evaluated** | In scope but not checked (say why: no access, time, could not reproduce) |
| **Not applicable** | Out of scope for this screen (say why) |

"Not evaluated" is honest and useful: it tells the next person what still needs checking. A checklist with only passes
and no "not evaluated" usually means some passes were assumed.

## The checklist

Each section names the evidence that makes a "pass" trustworthy.

### 1. Purpose and structure

- [ ] The screen has a clear primary question; in a few seconds it is clear what this is and what can be done here.
- [ ] There is one clear primary action, or a deliberate hierarchy between legitimate intents.
- [ ] Frequent and important things are visible; rare things are one step away; risky things are separated.
- [ ] Location is evident (title, active navigation item, breadcrumbs where depth requires them).
- [ ] The structure matches the people's vocabulary and model ([information architecture](22-information-architecture.md)).

*Evidence:* a five-second or first-click test, or a description of what is seen first, second and third, with a
screenshot.

### 2. States

- [ ] Empty (first time and no results), loading, partial, error, no permission, offline, conflict, uncertain and
      success states are designed.
- [ ] Real and extreme data: long names, 0 / 1 / 1,000 items, the longest language, large numbers, right-to-left if
      shipped.
- [ ] Every action has a visible response; nothing ends in silence.

*Evidence:* the states table (`templates/states-table.md`) and screenshots of each state, from the real product or a
prototype with realistic data.

### 3. Interaction

- [ ] Actions can be undone where truly reversible; irreversible ones have a confirmation stating consequences.
- [ ] Errors appear where the problem is, say how to fix it, and keep what was typed.
- [ ] Frequent actions are fast (shortcuts, bulk actions) in tools used intensively.
- [ ] There are no unnecessary modals or routine confirmations.
- [ ] Duplicate submissions are prevented for costly actions.

*Evidence:* walking the flow, including the error and cancel paths.

### 4. Copy

- [ ] Buttons name the outcome; titles name the place or the question.
- [ ] One term per concept; no internal jargon; a consistent form of address in each language.
- [ ] Messages say what is known and nothing more (success, pending, unknown, partial).
- [ ] No filler or forced enthusiasm ([anti-slop](01-anti-slop.md)).
- [ ] Strings are complete messages with variables and plural rules ([content and localization](24-content-and-localization.md)).

*Evidence:* the copy read in place, and `scripts/slop.mjs` output with each finding decided.

### 5. Visual

- [ ] Hierarchy holds in grayscale.
- [ ] System tokens for color, spacing, radius and type; no one-off values.
- [ ] Consistent alignment and spacing; nothing one or two pixels off.
- [ ] Light and dark (and any other themes) reviewed.
- [ ] No slop signals without a reason.

*Evidence:* screenshots in each theme and a grayscale view.

### 6. Accessibility ([accessibility](02-accessibility.md))

- [ ] Everything works with a keyboard; focus is visible, ordered and not obscured.
- [ ] AA contrast for text, icons, field borders and focus.
- [ ] Labels, accessible names and states are correct; changes are announced.
- [ ] 200 % zoom and 320 px width work.
- [ ] Reduced motion is honored; nothing depends on color alone.
- [ ] Targets of at least 24×24 px on the web (44 recommended); 44 pt / 48 dp on mobile.

*Evidence:* `scripts/a11y-static.mjs` and `scripts/contrast.mjs` output, keyboard walk-through notes, screen reader
notes, per criterion.

### 7. Adaptation

- [ ] Works at the smallest supported width and on large screens (no 200-character lines).
- [ ] Nothing depends on hover on touch devices.
- [ ] Performance: immediate response to every tap; no layout shifts while loading.
- [ ] Works with the longest language and, if shipped, right-to-left.

*Evidence:* screenshots at each width and language; a performance measurement on a modest device.

### 8. Real state ([real state and verification](08-real-state-and-verification.md))

- [ ] Every real state has its own message and action; no action proposes something that does not solve the problem.
- [ ] The same state looks the same in every view and changes everywhere at once.
- [ ] Errors name the stage that failed; alternatives are available without starting over.
- [ ] The level of verification reached is reported.

*Evidence:* the states table compared with what the system actually returns.

### 9. Trust and ethics

- [ ] Nothing invented (data, states, testimonials).
- [ ] Costs, limits and consequences are visible before acting.
- [ ] No dark patterns; accepting, declining and leaving are symmetric
      ([ethical persuasion](12-psychology-and-ethical-persuasion.md)).

*Evidence:* walking the money, consent and cancellation paths.

## Severity

Rate each finding by its effect on people, not by how it looks.

| Severity | Meaning | Examples |
| --- | --- | --- |
| **4 · Critical** | Blocks the task, causes data or money loss, excludes a group of people entirely, or misleads | Payment can be submitted twice; form cannot be completed with a keyboard; a fee is hidden until after payment |
| **3 · High** | The task succeeds only with great effort, or errors are frequent | Search misses items people look for daily; errors don't say how to fix them |
| **2 · Medium** | Annoys or slows, but the task gets done | Inconsistent labels; an extra step in a frequent flow |
| **1 · Low** | Cosmetic, no effect on the task | Misaligned icon; inconsistent radius |

### Distinguish the kind of problem

Severity mixes several kinds of harm. Name the kind, because each needs a different fix and a different owner:

| Kind | Description |
| --- | --- |
| **Barrier** | Some people cannot complete the task at all (accessibility, unsupported locale, device) |
| **Error-inducing** | The design leads people into wrong actions or wrong decisions |
| **Misleading** | The interface states something false or hides something material |
| **Friction** | The task works but costs more effort than it should |
| **Cosmetic** | Visual inconsistency without effect on the task |

### Prioritizing: severity, frequency and recoverability

A common shortcut is "severity × frequency". It works for friction, but it can bury the worst problems:

- **A rare but irreversible failure** (deleting the wrong account, sending money to the wrong person) does not wait
  because it is rare.
- **A barrier for a minority** (screen reader users cannot submit) is critical for them, regardless of how many people
  use screen readers.
- **Misleading problems** are critical even when nobody has complained yet.

A better order:

1. Critical findings of any frequency: barriers, irreversible harm, misleading content.
2. High-severity findings, by frequency.
3. Medium findings in frequent flows.
4. Everything else, cheapest first.

When two findings tie, fix the one that is cheaper or that unblocks other fixes.

## Writing findings

Each finding has:

- **What**: the problem, in one sentence.
- **Where**: screen, state, element; file and line, or a screenshot.
- **Evidence**: what was observed and how (test, script, walk-through).
- **Why it matters**: the principle, heuristic or WCAG criterion, and who is affected.
- **Severity and kind.**
- **Fix**: a concrete proposal (new copy, structure change, token value), with its trade-off if any.

Use `templates/review-report.md`.

## Calibrating severity

Severity ratings drift between reviewers. To keep them meaningful:

- **Rate against examples**: keep a few past findings per level as reference.
- **Two reviewers on important reviews**, rating independently, then reconciling disagreements.
- **Check ratings against reality**: if "medium" findings keep generating support tickets, the scale is too lenient.

## Verifying fixes

A review is not closed when fixes are written; it is closed when fixes are verified.

- Re-run the check that found the problem (the same script, the same keyboard path, the same screen reader step).
- Check for regressions in neighboring states (a fixed error message that now overlaps the field at 200 % zoom).
- Mark the finding as verified, with the evidence and the date.

## Worked comparison

**Review of a sign-up form.**

**Weak review.**

```
Looks good overall. Some suggestions:
- The button could be bigger.
- Maybe use a different shade of blue.
- Error messages are fine.
- Accessible.
```

No scope, no evidence, no severity; "accessible" claimed without testing; the most serious problems missed.

**Strong review.**

```
Scope: sign-up form, desktop 1280 px and mobile 390 px, light and dark, English and German.
Method: running staging build; keyboard; VoiceOver on macOS; a11y-static and contrast scripts.
Not evaluated: NVDA (not available); right-to-left (not shipped).

1. Critical · Barrier — The "Create account" button is a div; it cannot be reached by keyboard.
   Evidence: Tab skips it; a11y-static reports 2.1.1 at SignUp.tsx:48. WCAG 2.1.1, 4.1.2.
   Fix: use a native button.
2. High · Error-inducing — The password rules appear only after a failed submit; 3 of 5 test participants
   failed twice. Fix: show the rules under the field from the start, updating as they type.
3. Medium · Friction — In German, the button label is cut off at 390 px ("Konto erstell…").
   Fix: allow the button to wrap or grow; test with pseudo-localization.
4. Low · Cosmetic — Field radius 6 px vs. 8 px in the system tokens.

Works well: clear single-column layout; autocomplete attributes present; errors keep typed values.
```

## Common mistakes

- **Reviewing without a scope.**
- **Ticking boxes without evidence.**
- **Ranking by how visible or easy a problem is**, not by harm.
- **Mixing cosmetic and critical findings** in one undifferentiated list.
- **Never marking "not evaluated".**
- **Closing reviews without verifying the fixes.**

## Checklist for the review itself

- [ ] Scope (what, who, where, how, against what) is written down.
- [ ] Every item is marked pass, fail, not evaluated or not applicable, with evidence for passes and fails.
- [ ] Findings have location, evidence, reason, severity, kind and a concrete fix.
- [ ] Critical findings (barriers, irreversible harm, misleading content) are first regardless of frequency.
- [ ] What works well is recorded.
- [ ] Fixes are verified with the same check that found the problem.
