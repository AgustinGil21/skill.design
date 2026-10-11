# Usability: heuristics, laws and their limits

How a designer uses the classic usability heuristics and the so-called laws of UX: as lenses for finding problems
and as reasons behind decisions, not as rules to apply blindly. Each heuristic and law below comes with what it is
good for, what it does not prove, and where it conflicts with others.

## What it is and why it matters

Usability is how well specific people can achieve specific goals with a product, in a specific context: effectively
(they succeed), efficiently (without wasted effort) and with satisfaction (without frustration). The three words that
matter are *specific people*, *specific goals* and *specific context*: a design is not usable in general, only for
someone doing something somewhere.

Heuristics and laws are compressed experience. They help a designer:

- **Spot problems quickly** in a review, before testing with people.
- **Explain a decision** with a reason others recognize.
- **Predict trouble** in a design that has not been built yet.

They do not replace watching people use the product. A design can satisfy every heuristic and still fail because the
frame was wrong or the vocabulary was not the person's.

## Nielsen's ten heuristics, applied

| # | Heuristic | What to check | Sign that it fails |
| --- | --- | --- | --- |
| 1 | **Visibility of system status** | Saving, loading, progress, the active item, connection, what is selected | People ask "did it save?" or press the button again |
| 2 | **Match between the system and the real world** | The person's words and concepts, in a natural order | "Job", "entity", "spec", error codes appear |
| 3 | **User control and freedom** | Undo, cancel, back, a way out of every flow | Steps with no "Back", actions with no undo, modals with no close |
| 4 | **Consistency and standards** | Same term, icon and place for the same thing; platform conventions | "Delete" and "Remove" for the same action; the primary button moves |
| 5 | **Error prevention** | Constraints, good defaults, confirmation for the irreversible | Free-text formats that fail later; destructive actions next to frequent ones |
| 6 | **Recognition rather than recall** | Visible options, recent items, suggestions | People must remember a code or where something was |
| 7 | **Flexibility and efficiency of use** | Shortcuts, command palette, bulk actions, templates | Experts take ten clicks for their daily task |
| 8 | **Aesthetic and minimalist design** | Only what this moment needs, with clear hierarchy | Screens where everything is at the same level |
| 9 | **Help users recognize, diagnose and recover from errors** | What happened, why, and how to fix it, in place | "Error 500", "Something went wrong" |
| 10 | **Help and documentation** | Contextual, searchable, task-oriented help | Help is a PDF or a generic link |

### Using them in a review

Score each heuristic from 0 (no problem) to 4 (catastrophic) on each important screen, and record every problem
with evidence and a proposed fix. Prioritize by severity and frequency, but do not let frequency bury a rare problem
that is irreversible or that blocks a group of people entirely (see [review](06-review.md)).

A heuristic review by one person finds a fraction of the problems; several reviewers working independently and then
merging find considerably more. It is still a prediction: confirm the important findings with people.

## Laws and effects, with their limits

Each "law" below is a well-known finding or model from psychology and human-computer interaction. Use them as
reasons, and remember they describe tendencies under certain conditions, not universal truths.

| Law or effect | What it says | Useful for | Limits |
| --- | --- | --- | --- |
| **Hick's law** | Decision time grows with the number and complexity of choices | Reducing, grouping and highlighting a recommended option | It describes choosing among equally likely options; with familiar, well-ordered lists (an alphabetical country list) people find items fast regardless of length. Fewer options is not always better: removing a needed option forces a workaround |
| **Fitts's law** | Time to reach a target depends on its distance and size | Large primary actions near where attention and the pointer or thumb already are; screen edges and corners as easy targets on desktop | It models pointing, not deciding. A big button that people do not understand is still slow |
| **Jakob's law** | People expect a product to work like the others they use | Following conventions for common patterns | It favors the familiar, not the best; conventions differ by platform, region and audience |
| **Miller's "seven plus or minus two" / cognitive load** | Working memory is limited | Not asking people to remember things between screens; chunking | Often misquoted as "menus must have at most seven items". It concerns memory, not visible options; a visible list can be longer if it is well organized |
| **Tesler's law (conservation of complexity)** | Every system has complexity that cannot be removed, only moved | Moving complexity into the system (defaults, automation) rather than onto the person | Moving it into the system can hide it; hidden complexity resurfaces as surprising behavior |
| **Doherty threshold** | Fast responses keep people in flow | Responding within a fraction of a second, or giving immediate feedback when you cannot | The exact threshold is often quoted as 400 ms; treat it as a guide, not a guarantee |
| **Peak-end rule** | Experiences are remembered by their most intense moment and their end | Caring about the end of every flow: a clear confirmation and next step | It describes memory, not usability; a pleasant ending does not fix a broken middle |
| **Goal-gradient effect** | People speed up as they approach a goal | Visible progress ("Step 3 of 5") | Fake progress (pre-filled steps) is manipulative |
| **Von Restorff (isolation) effect** | What stands out is remembered | Reserving contrast for what matters | When everything is highlighted, nothing stands out |
| **Serial position effect** | First and last items in a list are remembered best | Placing key items at the start and end of navigation | Matters for memory, less for scanning lists with clear labels |
| **Gestalt: proximity and similarity** | Things close together or alike are read as a group | Grouping with space before borders and boxes | Inconsistent spacing creates false groups |
| **Aesthetic-usability effect** | Attractive designs are perceived as easier to use | Investing in visual quality | It can hide real problems in testing: people blame themselves instead of the design |
| **Postel's law (robustness)** | Be liberal in what you accept, conservative in what you send | Accepting dates, phone numbers and names in the formats people type; showing them consistently | Accepting ambiguous input ("03/04") without resolving it can create errors |
| **Zeigarnik effect** | Unfinished tasks stay in mind | Showing pending items so people can return to them | Constant reminders become pressure and noise |

## When heuristics conflict

Heuristics regularly pull in opposite directions. The designer's job is to notice the conflict and resolve it for
this person and task, not to pick the heuristic they like best.

| Conflict | Example | How to resolve |
| --- | --- | --- |
| **Minimalism (8) vs. visibility (1, 6)** | Hiding actions in a menu cleans the screen but makes them unrecognizable | Visible by frequency and importance; hidden only what is rare and low-stakes |
| **Efficiency (7) vs. consistency (4)** | A shortcut that only exists in one area | Shortcuts that follow platform conventions; document them where they are used |
| **Error prevention (5) vs. control (3)** | Blocking an action vs. letting people do it and undo it | Block only what is irreversible or invalid; otherwise allow and offer undo |
| **Recognition (6) vs. minimalism (8)** | Showing recent items and suggestions adds elements | Show them where people need to choose; hide them where they do not |
| **Match the real world (2) vs. consistency (4)** | The person's word differs from the platform's standard term | Prefer the person's word in content; follow platform conventions in system controls |
| **Familiarity (Jakob) vs. a better solution** | A new interaction would be faster but unfamiliar | Innovate only where the gain is large and learnable; offer the familiar path too |

## Reduce, group, compare or search?

"Too many options" is one of the most common complaints, and "remove options" is the most common reflex. It is only
one of four answers:

| Situation | Answer | Example |
| --- | --- | --- |
| Many options, most rarely used | **Reduce**: show the frequent ones, put the rest behind "More" | A share menu with the five most used destinations |
| Many options of different kinds | **Group** them under clear labels | Settings organized by topic |
| Several options people must choose between | **Make them comparable**: same attributes, side by side | Plans with the same rows of features and prices |
| Many items of the same kind, known by name | **Search** or type-ahead | Choosing a country, a contact, a product code |

Removing options that some people need does not reduce complexity; it moves it into workarounds and support tickets.

## Novices, intermediates and experts

Most people are neither beginners nor experts for long: they become intermediates who use a part of the product
regularly. Design for that majority, and give the edges what they need.

| Group | Needs | Design response |
| --- | --- | --- |
| **First-time** | Orientation, confidence, a first success | Clear labels, good empty states, sensible defaults, optional guidance |
| **Intermediate** | Recognition, consistency, speed on familiar tasks | Stable layouts, remembered choices, visible frequent actions |
| **Expert** | Speed, density, bulk actions, keyboard | Shortcuts, command palette, bulk actions, density options, saved views |

Showing more helps experts and can overwhelm beginners; showing less helps beginners and slows experts. Progressive
disclosure and accelerators (shortcuts that coexist with the visible path) let one design serve both.

## Progressive disclosure

Show first what most people need; put advanced options behind "More options", in a panel or in a later step.

- **Do not hide what most people need to complete the task.** Disclosure is for the advanced and the rare.
- **Make the hidden discoverable**: a clearly labeled control, not a gesture or an unlabeled icon.
- **Remember the state** when people open advanced options regularly.
- **Do not split dependent decisions** across disclosure levels so that people miss a setting that changes the result.

## Defaults

The default is the decision most people will make, because most people do not change it. That makes it powerful and
a responsibility.

- **Choose the default in favor of the person**: their privacy, their security, the most common correct choice.
- **Show what was chosen** so it is visible and changeable.
- **Match the default to risk and reversibility**:

| Risk of a wrong default | Reversibility | Default strategy |
| --- | --- | --- |
| Low | Easy | Choose the most common option silently |
| Low | Hard | Choose it, and make it visible |
| High | Easy | Choose the safe option, explain how to change it |
| High | Hard | Do not default; ask explicitly, with a recommendation |

- **Inferred defaults** (country from location, language from browser, currency from region) are guesses. Use them
  when the cost of a wrong guess is low and the correction is easy; ask when a wrong guess is costly (for example, tax
  residence, legal jurisdiction).

## Recognizing context

- Remember the last choice (view, filters, tab) per person.
- Return people to the exact place after editing or after an error.
- Fill in what is already known (email from the account, recent addresses), and let people change it.
- Do not ask twice for the same information in one flow.

## When simplifying makes things worse

Simplification is not always improvement. Watch for these cases:

- **Removing the information people use to decide.** A "clean" checkout without delivery dates causes abandonment
  later.
- **Merging distinct concepts.** One "Share" button for inviting editors and creating public links hides a privacy
  decision.
- **Hiding state.** A minimal interface that does not show sync status makes people distrust it.
- **Reducing steps by increasing risk.** One-click actions for costly operations.
- **Forcing one path.** Removing the expert shortcut because beginners did not use it.

## Validating usability

- **About five people per distinct group** find most of the serious problems in a flow, in the classic qualitative
  testing guidance. This holds for finding problems iteratively, not for measuring rates or comparing designs
  statistically, and it assumes participants share the relevant characteristics. With several distinct groups (for
  example administrators and members), test each.
- **Concrete tasks**, not opinions: "Invite Ana as an editor to the Q3 report", not "What do you think of this page?".
- **Measure** task success, time, errors and where people hesitate.
- **First-click and five-second tests** for hierarchy and labels.
- **Cognitive walkthrough**: step through the task as a first-time person and ask at each step: will they know what to
  do? Will they see how? Will they understand the feedback?
- **Separate observation from interpretation**: "She scrolled past the button twice" is an observation; "the button is
  not visible enough" is an interpretation; "make it bigger" is a hypothesis. Keep all three, labeled.

See [research and testing](16-research-and-testing.md).

## Accessibility and usability

Accessibility requirements and usability heuristics reinforce each other: visible focus is status visibility for
keyboard users; labels are recognition; clear errors help everyone and are required (WCAG 3.3.1 Error
Identification, A; 3.3.3 Error Suggestion, AA). A usability review that ignores accessibility misses the people for
whom problems are most severe. See [accessibility](02-accessibility.md).

## Worked comparison

**Screen:** export settings for a reporting tool, used weekly by finance analysts and occasionally by managers.

**Weak design.** To "reduce clutter", the team shows only an "Export" button. Format, date range and columns are
hidden behind an icon with three dots. Analysts export every week, open the menu, re-select the same options each
time, and sometimes forget to change the date range, sending last month's numbers.

- Minimalism (8) was applied at the cost of visibility (1) and recognition (6).
- No remembered state; the defaults are wrong for the main users.
- The most consequential option (date range) is hidden, which causes a costly error.

**Strong design.**

- The export panel shows the date range prominently with the current selection in words ("1–30 September 2026"),
  because it is the most consequential choice.
- Format and columns remember the last choice per person, with a summary line ("CSV · 14 columns · Edit").
- A saved preset "Monthly close" for analysts; managers see the simple defaults.
- The button names the result: "Export September as CSV".
- Tested with four analysts and two managers: analysts export in two clicks; managers understand what they will get
  before exporting.

## Common mistakes

- **Treating laws as rules**: "Hick's law says fewer options", without asking whether the options were needed.
- **Minimalism over visibility**: hiding frequent and important things to look clean.
- **Designing for the first visit only**, forgetting intermediates and experts.
- **Defaults chosen for the business at the person's expense.**
- **Reviews without evidence**: problems listed without where and why.
- **Testing for opinions** instead of tasks.

## Checklist

- [ ] The ten heuristics were reviewed on the key screens, with evidence and severity.
- [ ] Conflicts between heuristics were noticed and resolved explicitly.
- [ ] "Too many options" was answered by reducing, grouping, comparing or searching, not only by removing.
- [ ] First-time, intermediate and expert needs are served (disclosure plus accelerators).
- [ ] Defaults favor the person and match risk and reversibility; inferred defaults are easy to correct.
- [ ] Choices and positions are remembered where it helps.
- [ ] Simplifications did not remove decision-critical information or merge distinct concepts.
- [ ] Key findings were confirmed with people doing real tasks.
