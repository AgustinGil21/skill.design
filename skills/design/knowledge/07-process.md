# Process: how a designer works through a problem

How a senior designer moves from a request to a shipped, verified result. Not a fixed sequence of phases, but a set of
activities that repeat in loops, ordered by what is most uncertain. Use it for a new screen, a flow, a redesign or a
review.

## What it is and why it matters

Process exists to reduce two kinds of waste: building the wrong thing, and building the right thing badly. A good
process does not mean many steps; it means doing the step that reduces the biggest risk next, at the lowest cost that
gives a trustworthy answer.

The common failure is a linear process applied mechanically: research, then wireframes, then visual design, then
handoff, each phase finished before the next starts. Real design problems do not work that way. A prototype reveals
that the frame was wrong; a technical constraint changes the structure; a test shows that the copy, not the layout,
is the problem. A good process expects to go back.

## The activities

These activities happen in every project, in proportions that depend on its size and risk. The order below is the
usual starting order, not a contract.

| Activity | Purpose | Output | Skip or shrink when |
| --- | --- | --- | --- |
| **Frame** | Know the problem, people, constraints and success | A one-sentence frame, success and guardrail | Never skip; shrink to five minutes for small tweaks |
| **Understand** | Learn the context, content, current behavior | Notes, real data samples, evidence | The context is already well known and documented |
| **Explore** | Generate genuinely different directions | Sketches, flows, two or three options | The decision is trivial or fully constrained |
| **Decide** | Choose a direction with explicit trade-offs | A recorded decision | — |
| **Detail** | Make the chosen direction complete: states, copy, edge cases, accessibility | Screens, specs, states table | — |
| **Test** | Check the riskiest assumptions with people or data | Findings, changes | Risk is low and reversible; test after release instead |
| **Build together** | Turn the design into product with engineering | Working software, adjusted design | — |
| **Verify** | Confirm the real result works as intended | Verification notes, fixes | — |
| **Learn** | See what happened after release and feed it back | Metrics, observations, next steps | — |

### 1. Frame

Restate the request as a problem, name who has it, what success looks like and what must not get worse. Sort
constraints into fixed, negotiable and imagined. See [problem framing](20-problem-framing.md).

The frame is a hypothesis. Revisit it whenever new evidence contradicts it, and say so out loud: "We framed this as a
speed problem; testing shows it is a trust problem."

### 2. Understand

- **Who uses it, how often, in what context** (desktop or phone, in a hurry or focused, expert or first time, in which
  language).
- **What happens before and after** this screen or flow.
- **What real content it will hold.** Get real examples: actual names, amounts, volumes, the longest strings, the
  empty case, the case with 2,000 items, the translations.
- **What exists today**, including workarounds people use (spreadsheets, notes, messaging). Workarounds are the most
  honest description of an unmet need.
- **Constraints**: platform, component library, performance, legal, data available from the system.

### 3. Explore

Generate real alternatives before converging. Two or three directions that differ in structure or interaction model,
not in color. See [decisions and trade-offs](21-decisions-and-tradeoffs.md) for techniques.

**Use references for decisions, not for looks.** When studying how other products solve a similar problem (for
example in Mobbin, which collects real screens and flows from web and iOS products), look at **organization and
behavior**: what is visible, how things are grouped, where each action lives, how empty, error and loading states
are handled. Note the pattern most products share, since it is what people already know, and note the variants that
solve something better. Then ask whether their context matches yours: a pattern that works for a social app may not
fit a medical record. See the relevant file in [patterns](patterns/).

### 4. Decide

Compare the directions on the criteria that matter for this problem. Choose, and record what you gave up and what
would make you change your mind. Share the decision with whoever needs to agree before investing in detail.

### 5. Detail

The chosen direction is not done until every part of it is designed:

- **Hierarchy and layout** with real content ([composition and layout](17-composition-and-layout.md)).
- **Copy**, written now, not at the end ([interface writing](04-interface-writing.md)). Copy shapes structure: a label
  that needs a paragraph of explanation signals a structural problem.
- **States**: ideal, empty (first time and no results), loading, partial, error, no permission, offline, conflict,
  uncertain, success. For anything with data or processes, fill in the states table template before building
  ([states, transitions and concurrency](23-states-transitions-and-concurrency.md)).
- **Extreme data**: long text, 0, 1, many, other languages, right-to-left.
- **Accessibility, built in**: keyboard path, focus order and destinations, names, announcements, contrast, zoom,
  motion ([accessibility](02-accessibility.md)). Accessibility is part of detailing, not a separate later phase.
- **Visual system**: the project's components and tokens, light and dark ([visual system](05-visual-system.md)).
- **Anti-slop review**: every element earns its place ([anti-slop](01-anti-slop.md)).

### 6. Test

Test the assumptions that would hurt the most if wrong. Not everything needs testing; the riskiest things do.

| Risk | Cheapest trustworthy test |
| --- | --- |
| People do not understand the structure or labels | Tree test or first-click test |
| People cannot complete the task | Task-based test with a clickable prototype, about five people per distinct group |
| People do not trust the flow (money, privacy) | Moderated sessions with think-aloud, focusing on hesitation |
| The interaction feels slow or awkward | A coded or high-fidelity prototype, on a real device |
| The copy is misunderstood | Comprehension test: show the screen, ask what will happen next |
| Nobody wants it | A conversation, a fake door, a concierge test before building |

See [research and testing](16-research-and-testing.md).

### 7. Build together

Design does not end at handoff. Work with engineering from framing onward:

- **Share uncertainty early.** Engineers often know constraints and cheaper alternatives that change the design.
- **Specify behavior, not just pictures**: states, transitions, validation, focus, responsiveness, content limits,
  what happens on failure. See [handoff and engineering](27-design-handoff-and-engineering.md).
- **Negotiate scope with trade-offs visible.** "If we cut the conflict view, two people editing the same record will
  silently overwrite each other. If we must cut something, cut the bulk edit instead."
- **Review the built result**, not just the design file. Many problems only appear with real data, real latency and
  real devices.

### 8. Verify

- Look at the built result in the browser or on the device, with real data.
- Check the supported widths, light and dark, the longest language.
- Go through the full flow with a keyboard and with a screen reader where possible.
- Go through the [review checklist](06-review.md).
- Record the level of verification reached and what remains unconfirmed
  ([real state and verification](08-real-state-and-verification.md)).

### 9. Learn after release

- Check the success measures and guardrails defined in the frame
  ([measurement and learning](26-measurement-and-learning.md)).
- Read support tickets and feedback about the change in the first weeks.
- Watch for workarounds: people exporting data to do something the product should do.
- Decide: keep, adjust, or roll back. Update the decision record.

## Ordering by uncertainty

The most useful process question is: **what is the biggest thing we don't know, and what is the cheapest way to find
out?**

| If the biggest unknown is… | Do this next | Not this |
| --- | --- | --- |
| Whether the problem is real or important | Look at evidence: tickets, data, conversations | Detailed screens |
| Which direction works | Sketch two or three options, test the riskiest one cheaply | Polishing one direction |
| Whether people understand the structure | Tree test or paper prototype | Visual design |
| Whether it is technically feasible | Talk to engineering, spike the risky part | Detailed specs |
| How it feels to use | A realistic prototype on a device | More static screens |
| Whether the copy works | Comprehension test with real copy | Lorem ipsum layouts |
| How it behaves with real data | Build a thin version with real data | Mockups with perfect sample data |

## Choosing fidelity

Fidelity is a tool, not a stage. Match it to the question.

| Fidelity | Answers | Fails to answer | Cost |
| --- | --- | --- | --- |
| **Words** (a description, a list of steps) | Is this the right flow? What is missing? | How it looks or feels | Minutes |
| **Sketches** | Which structure? What goes where? | Details, copy, feel | Minutes to an hour |
| **Wireframes** | Hierarchy, layout, content fit | Visual quality, motion | Hours |
| **Clickable prototype** | Can people complete the task? | Performance, real data behavior | Hours to days |
| **High-fidelity mockups** | Visual quality, brand fit, final copy | Behavior with real data | Days |
| **Coded prototype** | Feel, timing, real data, accessibility | Long-term maintainability | Days |

High fidelity too early attracts feedback on colors when the question is structure, and makes the team reluctant to
throw work away. Low fidelity too late leaves behavior and states undesigned.

## Critique: giving and receiving it

Critique is how design gets better between iterations. It works only when it is about the problem, not about taste.

### Running a critique

1. **State the problem and the criteria** before showing the work. "Receptionists need to find a slot during a call.
   We care most about speed and avoiding double bookings."
2. **Say what kind of feedback you need** and at what stage. "Structure only; visual style is not decided."
3. **Show the alternatives you discarded**, briefly.
4. **Collect feedback as observations and questions**, not solutions: "I couldn't tell which slot was selected" is
   more useful than "make it blue".
5. **Close with decisions and owners**: what changes, what stays, what needs more evidence.

### Giving feedback

- Tie every comment to the frame: "Given that receptionists are on the phone, this two-step flow may be too slow."
- Separate severity: "blocks the task" vs. "polish".
- Say what works, so it is not changed by accident.
- Ask before prescribing: "What happens when the doctor has no slots this week?"

### Receiving feedback

- Listen for the problem behind the proposed solution. "Make the button bigger" often means "I didn't see it".
- Separate preference from evidence. Preference is useful information about one person; evidence is about many.
- Do not defend; explain the reasoning and the trade-off, then decide whether the feedback changes it.

## Critiquing an existing screen

When the task is to review rather than create, follow the review workflow (`workflows/review.md`). In summary:

1. What question should the screen answer, and which one does it answer today?
2. Heuristics and laws, including where they conflict ([usability](03-usability.md)).
3. Problems with severity and frequency, each with evidence (what is seen, where) and a concrete fix.
4. What works well, so it is not broken.
5. Order of fixes: severity first, then frequency, then cost; a rare but irreversible problem does not wait.

## Process at different scales

| Scale | What the process looks like |
| --- | --- |
| **A copy fix or small tweak** | Frame in one sentence, check states and languages, ship, verify |
| **A new screen in an existing flow** | Frame, look at the pattern file, two quick options, detail with states, build together, verify |
| **A new feature** | Full loop: frame, understand with evidence, explore, decide, detail, test the riskiest part, build, verify, learn |
| **A redesign of an existing product** | All of the above, plus protecting what works, migration and change communication ([redesigns and migrations](29-redesigns-and-migrations.md)) |
| **A new product** | Heavier framing and research, several rounds of exploration and testing before detailing |

## Recording

Keep a lightweight record next to the work:

- The frame and the success measures.
- Decisions with alternatives and trade-offs.
- Assumptions still unverified.
- The level of verification reached and what remains to confirm.
- For each reference used, which decision it informed (hierarchy, layout, action, state); "inspired by X" is not
  enough.
- New patterns worth reusing, added to [patterns](patterns/) with their reasoning.

## Worked comparison

**Request:** "Add bulk editing to the products table" in an inventory tool.

**Linear process.** The designer researches bulk editing in other products, designs a polished toolbar with ten bulk
actions, hands it off. Engineering says three actions are impossible without a new API; the designer removes them.
After release, store managers use only "change price", and some of them apply a price change to the wrong selection
because the selection was hidden after scrolling.

**Loop by uncertainty.**

- *Frame:* store managers adjust prices for seasonal ranges of 20 to 200 products; today they edit one by one; the
  risk is applying a change to the wrong products.
- *Biggest unknown:* which bulk changes people actually need. Cheapest check: support tickets and three short calls.
  Answer: price changes (by percentage or fixed amount) and moving products between categories; nothing else is
  frequent.
- *Explore:* (a) toolbar on selection; (b) a dedicated "bulk update" flow with a preview step; (c) import a
  spreadsheet.
- *Decide:* (b) for price changes, because the risk is high and a preview shows exactly what will change; (a) for
  category moves, which are low risk and reversible.
- *Detail:* the selection count is always visible ("48 products selected, 12 not on this page"); the preview shows old
  and new prices per product with a total count; partial failures list the products that did not update and why.
- *Build together:* engineering confirms price updates can be applied as one transaction; the design states that the
  change is all-or-nothing.
- *Test:* five store managers apply a 15 % discount to a range in a prototype; watch whether the preview catches a
  wrong selection before confirming.
- *Learn:* after release, track wrong-selection reports and how often the preview leads to edits before confirming.

## Common mistakes

- **Detailing before deciding.** Polishing the first idea instead of comparing it with others.
- **Research theater.** Collecting references or interviews without a question they answer.
- **Accessibility as a final phase.** Discovering at the end that the core interaction cannot work with a keyboard.
- **Designing with fake content.** Layouts that break with real names, amounts and translations.
- **Handoff as an ending.** Not reviewing what was built.
- **No learning loop.** Shipping without looking at what happened.

## Checklist

- [ ] The frame, success measures and guardrails are written down.
- [ ] Real content and the current behavior (including workarounds) were looked at.
- [ ] At least two genuinely different directions were explored for significant work.
- [ ] The decision and its trade-offs are recorded.
- [ ] The chosen direction is detailed with copy, states, extreme data and accessibility.
- [ ] The riskiest assumption was tested with the cheapest trustworthy method.
- [ ] Engineering was involved early; behavior is specified, not just pictures.
- [ ] The built result was verified with real data and devices, and the verification level is recorded.
- [ ] There is a plan to look at the results after release.
