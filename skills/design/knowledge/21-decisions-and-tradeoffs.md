# Decisions and trade-offs

How a designer chooses between options, and how they make the choice visible so others can trust it, challenge it
and revisit it. Design is a sequence of decisions under constraints; this file is about doing that deliberately
instead of by habit.

## What it is and why it matters

Every design embodies dozens of decisions: what goes first, which control to use, what to show and hide, what happens
when something fails. Most are made implicitly, by reaching for the first familiar solution. That is fine for small
reversible choices. It is not fine for decisions that are expensive to change, that affect many people, or that
trade one group's convenience for another's.

Deciding well improves:

- **Quality.** The first idea is the most available one, not the best one. Comparing options reveals better ones.
- **Speed later.** A recorded decision does not get relitigated every meeting.
- **Trust.** Stakeholders accept a choice more easily when they see the alternatives and the reasons.
- **Learning.** When the result disappoints, a recorded decision tells you which assumption failed.

## Kinds of decisions

Not every decision deserves the same effort. Sort them first.

| Kind | Reversibility | Reach | Effort to put in | Example |
| --- | --- | --- | --- | --- |
| **Trivial** | Easy | Small | Decide quickly, follow the system | Icon spacing inside a button |
| **Local** | Easy | One screen | Quick comparison, maybe a sketch | Whether a filter applies instantly or on "Apply" |
| **Structural** | Hard | A flow or the product | Real alternatives, criteria, a recorded trade-off | Navigation by object or by task |
| **One-way door** | Very hard or impossible | Many people, data, money or trust | Alternatives, evidence, testing, sign-off | Deleting data, pricing structure, account model, public URLs |

The distinction between two-way and one-way doors is the most useful one: if you can walk back through it cheaply,
decide fast and learn; if you cannot, slow down.

## Generating real alternatives

A comparison is only as good as the options in it. Two variations of the same idea ("blue button or green button")
are not alternatives. Real alternatives differ in **structure**, **interaction model** or **strategy**.

### Techniques that produce genuinely different options

- **Change the unit.** Organize by object (projects, clients) vs. by task (send invoices, approve expenses) vs. by
  time (today, this week).
- **Change the moment.** Ask now vs. ask later; validate before vs. after; decide for the person vs. let them decide.
- **Change who does the work.** The person, the system (automation, defaults), another person (a reviewer, support).
- **Change the representation.** Table, list, cards, map, calendar, timeline, chart, a single sentence.
- **Change the commitment.** Act immediately with undo; preview then confirm; draft then publish.
- **Remove the step.** What if this screen, field or decision did not exist?
- **Borrow from another domain.** How does a bank, an airline, a game or a hospital solve a similar tension?

Aim for three options, one of which is "the minimum that would solve the problem" and one of which is "what we would
do with no constraints". The middle option often wins, but you only see it clearly with the extremes beside it.

## Choosing criteria

Criteria come from the [frame](20-problem-framing.md), not from taste. The usual ones:

| Criterion | Question |
| --- | --- |
| **Task success** | Does it make the main task faster and less error-prone for the people who matter most? |
| **Frequency fit** | Does it suit how often the task happens (daily efficiency vs. occasional clarity)? |
| **Risk** | What happens when someone makes a mistake with it? Can they recover? |
| **Learnability** | Can a first-time person use it without explanation? |
| **Expert efficiency** | Does it slow down people who use it fifty times a day? |
| **Accessibility** | Does it work with keyboard, screen reader, zoom, motion sensitivity, cognitive load? |
| **Content fit** | Does it hold up with real data: long names, empty states, thousands of rows, translations? |
| **Consistency** | Does it match the product's system and what people know from elsewhere? |
| **Build and maintain cost** | How much does it cost to build, test and keep working? |
| **Reversibility** | If it turns out wrong, how expensive is it to change? |

Pick the four to six criteria that matter for this decision and say which ones dominate. A comparison that weighs
everything equally hides the real reasoning.

## Comparing options

### A decision table

| | Option A: inline editing | Option B: edit panel | Option C: separate edit page |
| --- | --- | --- | --- |
| Task success (quick fixes to one field) | Best: no context change | Good | Weak: loses the list context |
| Risk (accidental edits) | Higher: easy to change a value by mistake | Low | Low |
| Accessibility | Needs careful focus and announcement work | Straightforward with a dialog or panel pattern | Straightforward |
| Content fit (long text fields) | Poor: cramped | Good | Best |
| Build cost | Medium-high | Medium | Low |
| **Verdict** | For short, frequent fields (status, owner, date) | **For records with mixed fields: chosen** | For long-form content only |

A table makes the trade-off visible: option B wins not because it is best everywhere but because it is good enough on
the criteria that dominate and bad on none.

### When the table is not enough

- **When criteria conflict sharply**, name the conflict and apply the precedence in
  [principles](00-principles.md): safety, access and honesty outrank efficiency and consistency.
- **When two options are close**, choose the more reversible one, or the one that teaches you more.
- **When you lack evidence on the dominant criterion**, get it before deciding if the decision is one-way; decide and
  monitor if it is two-way.

## Deciding with incomplete evidence

You will rarely have all the evidence you want. Good designers decide anyway, and are explicit about the gaps.

1. **State what you know, what you believe and what you are guessing.** Evidence from testing or data, beliefs from
   experience or reasoning, guesses with nothing behind them.
2. **Identify the assumption the decision depends on most.** "Option B wins if most edits involve more than one
   field."
3. **Ask how expensive it would be to check it.** A look at the logs, five conversations, a prototype test.
4. **Compare that cost with the cost of being wrong.** Cheap to check and costly to get wrong: check first. Expensive
   to check and cheap to reverse: decide and watch.
5. **Decide, and write the trigger that would make you revisit.** "If more than half the edits are single-field status
   changes, add inline editing for status."

## Recording the decision

A short record is enough. It prevents the most common failure of design decisions: being forgotten and then reversed
by someone who never knew the reasons.

```
Decision: Edit records in a side panel, not inline.
Context: Records mix short fields (status, owner) and long ones (notes, address). Edits are mostly multi-field.
Options considered: inline editing; side panel; separate page.
Chosen because: keeps list context, handles long fields, low risk of accidental edits, accessible with a known
pattern.
Trade-off accepted: one extra click for quick single-field changes.
Revisit if: logs show most edits change a single short field; then add inline editing for those fields only.
Owner and date: [name], [date].
```

Keep records near the work: in the design file, the ticket or the repository, wherever the team will look when the
question comes up again.

## Trade-offs that come up again and again

These tensions appear in almost every product. Knowing them in advance speeds up decisions.

| Tension | What each side protects | How designers usually resolve it |
| --- | --- | --- |
| **Simplicity vs. power** | Newcomers vs. experts | Progressive disclosure: simple defaults, power one step away; shortcuts for experts |
| **Speed vs. safety** | Frequent work vs. costly mistakes | Fast by default, with undo; friction only where the effect is irreversible |
| **Consistency vs. fit** | Learnability vs. the best tool for this task | Consistent unless the task differs in a way the person would notice and benefit from |
| **Discoverability vs. clutter** | Finding features vs. focusing on the task | Visibility by frequency, importance and risk |
| **Automation vs. control** | Effort saved vs. understanding and trust | Automate with a visible result and an easy override; ask when the cost of a wrong guess is high |
| **Personalization vs. predictability** | Relevance vs. a stable mental model | Personalize content, keep structure stable |
| **Density vs. comfort** | Seeing more vs. reading easily | Density for expert, repeated scanning; comfort for occasional reading; let people choose when both exist |
| **Brand expression vs. legibility** | Recognition vs. comprehension | Expression in moments of low task load (landing, empty states), restraint in dense work |
| **Business goal vs. person's interest** | Revenue vs. trust | Never resolved by deception; see [ethical persuasion](12-psychology-and-ethical-persuasion.md) |

## Presenting decisions to others

How a decision is presented decides whether it survives the meeting.

- **Start with the problem and the criteria**, not the solution. People argue less about the answer when they agree on
  the question.
- **Show the alternatives you discarded**, briefly, and why. It shows the choice was considered, and it gives critics a
  place to point.
- **Name the trade-off** before someone else does. "This costs one extra click for quick edits; here is why we accept
  it."
- **Separate what is decided from what is open.** "The panel is decided; the field order inside it is open."
- **Ask for the right kind of feedback.** "Does this solve the receptionist's problem?" invites better feedback than
  "What do you think?"

## Worked comparison

**Decision:** how should a team calendar app handle a booking that conflicts with an existing event?

**Weak decision process.** The designer adds a red warning "Conflict!" because a competitor does it. In testing,
people ignore the warning and double-book; others think the booking failed.

**Strong decision process.**

- *Frame.* People book shared rooms; conflicts cost meetings that cannot happen; most conflicts are accidental.
- *Options.* (A) Allow and warn. (B) Block the booking and suggest the nearest free slots. (C) Allow, but mark both
  events as conflicting and notify the other organizer.
- *Criteria that dominate.* Task success (getting a usable room), risk (two meetings in one room), accessibility (the
  conflict must not rely on color), cost of being wrong.
- *Comparison.* A fails on risk: warnings get ignored. C pushes the problem onto another person. B prevents the error
  and keeps the task moving if the suggestions are good.
- *Evidence gap.* Are there legitimate reasons to double-book? Checking with three office managers: yes, for
  overflow rooms where two small meetings share space.
- *Decision.* B by default, with an explicit "Book anyway" for rooms marked as shareable. Suggestions show the three
  closest free slots for the same room and the same slot in similar rooms.
- *Trade-off recorded.* Blocking adds friction for the rare legitimate double booking; accepted because accidental
  conflicts are far more common.
- *Revisit if:* "Book anyway" is used for non-shareable rooms through support requests, or suggestions are rarely
  chosen.

## Common mistakes

- **Fake alternatives.** Three versions that differ only in color or layout details. They create the appearance of
  rigor without its benefit.
- **Criteria chosen after the fact.** Picking the favorite, then listing the criteria it happens to win.
- **Equal weights.** Treating "build cost" and "irreversible data loss" as equally important.
- **Hiding the trade-off.** Presenting a choice as free of costs invites distrust when the cost appears.
- **Deciding one-way doors fast and two-way doors slow.** Spending a week on button copy and an afternoon on the
  data deletion flow.
- **No revisit trigger.** Decisions that cannot be challenged with evidence get challenged with opinions.

## Checklist

- [ ] The decision is classified (trivial, local, structural, one-way door) and the effort matches.
- [ ] At least two genuinely different options were considered, including a minimal one.
- [ ] Criteria come from the frame, and the dominant ones are named.
- [ ] The comparison is visible (table or short reasoning).
- [ ] Known, believed and guessed evidence are separated; the key assumption is named.
- [ ] The trade-off is stated, and what would trigger a revisit is recorded.
- [ ] The decision is recorded where the team will find it.
