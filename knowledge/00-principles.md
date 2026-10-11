# Principles

The principles that guide every other decision in this knowledge base. They are not a checklist to tick: they are
the questions a senior designer keeps asking while working, and the way they settle an argument when two good ideas
point in different directions.

Every principle below has three parts: **what it says**, **why it holds**, and **where it stops holding**. A
principle without its limits becomes a dogma, and dogmas produce designs that follow the rules and still fail the
person using them.

## How to read this file

### Requirement, principle, heuristic, convention

Not every "rule" in design carries the same weight. Mixing them up is one of the most common sources of bad
decisions, because it makes a matter of taste sound like a law and a law sound like a preference.

| Kind | What it is | Example | Can you break it? |
| --- | --- | --- | --- |
| **Requirement** | Demanded by a standard, a law or a hard technical fact | Text contrast of at least 4.5:1 (WCAG 1.4.3, AA); a payment must not be charged twice | No. If the design cannot meet it, the design changes |
| **Principle** | A durable reason about people and tasks that holds across products | Show the real state of the system; let people undo | Rarely, and only by naming which principle wins instead and why |
| **Heuristic** | A rule of thumb that is usually right, derived from principles | "One primary action per screen"; "validate on blur" | Yes, when the situation that justified it is absent |
| **Convention** | What many products do, which shapes what people expect | The logo in the top-left links home; a magnifying glass means search | Yes, but you pay in learning cost, so you need a gain that beats it |

When you write or review a recommendation, say which kind it is. "The button must be blue" is none of these unless a
brand system makes it a requirement for that product.

### Precedence when principles conflict

When principles point in different directions, resolve the conflict in this order. Each level only yields to the
ones above it.

1. **Safety, legality and irreversible harm.** Do not let people lose money, data, access or privacy in ways they
   did not understand and cannot undo.
2. **Access.** People must be able to perceive, operate and understand it (accessibility requirements, language,
   devices).
3. **Honesty.** The interface tells the truth about state, cost and consequences.
4. **The task.** The person can complete what they came to do, with as few errors as the situation allows.
5. **Efficiency and comfort.** Speed for frequent work, low effort, good defaults.
6. **Consistency.** With the world first, then with the product itself.
7. **Brand and expression.** Character, delight, memorability.

This order is not a ranking of importance in general: brand matters enormously for a landing page. It is the order
in which a principle is allowed to override another **when they actually collide** in the same decision. A brand
color that fails contrast loses (access beats expression). A faster flow that hides a fee loses (honesty beats
efficiency). A consistent pattern that blocks the task loses (task beats consistency).

## 1. The person's task first, the screen second

**What it says.** Before drawing anything, know who the person is, what they are trying to achieve, in which
situation (in a hurry, on a phone, with one hand, with a screen reader, in a second language, on a slow connection)
and what they do today without the product. Judge the design by whether the task gets faster, more certain and less
error-prone, not by how it looks in a screenshot.

**Why.** A screen is a means. A beautiful screen that answers the wrong question is worse than a plain one that
answers the right one, because it also convinces the team that the work is done.

**Questions to ask.**

- What is the person trying to get done, in their own words? ("Pay the supplier before Friday", not "use the
  payments module".)
- What triggers the task? Where do they come from, and what do they already know when they arrive?
- What happens if they fail, or succeed slowly? Who else is affected?
- How often do they do it: once, monthly, fifty times a day?
- What are they doing at the same time? (Driving, on a call, supervising a class, switching between three tools.)

**Where it stops holding.** Some screens exist for the organization, not for the individual: compliance steps,
consent, security checks. They still need to be designed around the person, but "the person would rather skip it" is
not a reason to remove them. Design them to be as short and understandable as possible instead.

## 2. Frame the problem before solving it

**What it says.** A request usually arrives as a solution ("add a filter", "make a dashboard", "we need a chat").
Restate it as a problem before accepting it, and check whether that solution is the best answer to the problem.

**Why.** The most expensive design mistakes are not visual. They are building the right screen for the wrong
problem. A filter request often means "I can't find the five items I care about", which a better default sort or a
saved view solves with less complexity.

**How.** Write one sentence: "[Who] needs to [do what] because [why], and today [what goes wrong]." If you cannot
write it, you are not ready to design. See [problem framing](20-problem-framing.md).

**Where it stops holding.** When the solution is a constraint, not a guess: a regulator requires a specific
disclosure, a partner API only allows a specific flow. Accept the constraint and design the best experience inside
it, but write down that it is a constraint so nobody mistakes it for a design choice later.

## 3. Each screen answers a clear question, and related questions can share it

**What it says.** Each screen, panel or dialog should have a primary question it answers: "What should I do now?",
"Which one do I open?", "Is this correct?", "What do I adjust?". Content that answers a different question belongs
elsewhere: another screen, a panel, a collapsible section, or a later step.

**Why.** When a screen tries to answer several unrelated questions at the same level, nothing stands out and the
person has to work out the structure themselves.

**Where it stops holding.** "One question per screen" is a heuristic, not a law. Splitting a task across many screens
has a cost: the person loses context, cannot compare, and has to remember what they saw. Questions that are answered
together belong together:

| Situation | Keep together | Split |
| --- | --- | --- |
| Reviewing an order before paying | Items, address, shipping cost and total: the person checks them as one decision | — |
| Editing a profile and changing a password | — | Different risk, different frequency, different verification |
| Comparing three plans | All three side by side: comparison needs simultaneity | — |
| A long application with independent sections | — | Steps or sections with saved progress |
| A dashboard for a daily check | The few numbers that answer "is anything wrong today?" | Deep analysis of each number |

The test is not the number of questions; it is whether the person needs the answers at the same time to make one
decision.

## 4. Frequent things in view, rare things one step away

**What it says.** Order by how often something is used and how much it matters, not by how the system is built
internally. A daily action should not hide in a menu; a one-time setting should not sit in the path of daily work.
Showing everything is the same as highlighting nothing.

**Why.** Every visible element competes for attention. Rare things in the main path slow down every visit; frequent
things in a menu add a step to every visit.

**How to decide.** Score each element on three axes, not one:

| | Low | High |
| --- | --- | --- |
| **Frequency** | Once a year | Many times a day |
| **Importance** | Nice to know | Wrong decision without it |
| **Risk** | Easily undone | Irreversible, costly, affects others |

- High frequency, any importance, low risk: visible and fast (a toolbar button, a keyboard shortcut).
- Low frequency, high importance: findable and explained (a settings section with a description).
- High risk, any frequency: deliberate (separated, clearly labeled, with confirmation or undo).
- Low frequency, low importance: behind "More" or in settings.

**Where it stops holding.** A rare action can still deserve visibility when missing it is costly: "Export your data
before the account closes", "Your certificate expires in 3 days". Rarity lowers visibility only when the cost of
not seeing it is also low.

## 5. One primary action per context

**What it says.** In each screen, dialog or card there is usually one action most people want next. It is the only
solid, high-emphasis button, and it sits where reading ends. The rest are secondary or tertiary.

**Why.** A clear primary action answers "what do I do now?" without reading everything. Two primary buttons
competing is a decision the designer did not make, passed on to the person.

**Where it stops holding.**

- **Genuinely different intents of similar weight.** A landing page can offer "Start free" for people ready to try
  and "Talk to sales" for organizations with procurement. Both are legitimate; one should still lead, chosen from
  who the page is for.
- **Lists of objects.** Each row can have its own action; the primary rule applies to the screen, not to every row.
- **Destructive choices.** In a confirmation to delete, the destructive action is the one the person came to do, but
  it is styled as destructive, not as a friendly primary; "Cancel" stays easy to reach.

## 6. Say where I am, what happened and what's next

**What it says.** State is always visible: where I am (title, active item, breadcrumbs), what is happening (loading,
saving, generating, how much is left) and what I can do next. An action is never followed by silence.

**Why.** People act on what they believe the system is doing. When the interface is silent, they guess, and guesses
lead to repeated clicks, duplicate payments, abandoned tasks and support tickets.

**Where it stops holding.** Constant status chatter is also noise. Routine successes that the person can see directly
(a toggle that flips, a row that appears) do not need an extra toast. Announce what the person cannot see or would
reasonably doubt.

## 7. Forgive: make actions reversible when you can, and say so when you can't

**What it says.** Prefer undo over confirmation. Keep what people typed when something fails. Choose sensible
defaults. Reserve strong confirmation for the irreversible. People must be able to explore without fear of breaking
things.

**Why.** Confirmation dialogs are read once and then clicked through by habit; undo protects people at the moment
they realize the mistake, which is after the action, not before.

**Where it stops holding: real reversibility.** Undo only works when the action can truly be reversed. Many actions
look reversible in the interface but have already produced effects outside it:

| Action | Truly reversible? | What to do |
| --- | --- | --- |
| Archiving a conversation | Yes | Act immediately, offer undo |
| Deleting a file that goes to a trash for 30 days | Yes, within the window | Act immediately, say where it went and for how long |
| Sending an email or message to other people | No, once delivered | Delay sending a few seconds with "Undo send", or confirm when the audience is large |
| Charging a card | No (only refunds, which are a new action) | Show the exact amount and recipient before confirming |
| Publishing to a public page that search engines may cache | Partially | Preview, then publish; "unpublish" removes it but cannot recall copies |
| Revoking an API key in use | No for the services that break | Show what uses it before revoking |

Design the protection for the real effect, not for what the button looks like.

## 8. Prevent before explaining

**What it says.** A control that cannot produce the error (a date picker for dates, a field that accepts the formats
people actually type) beats an error message afterwards. Help text before the error beats an error. A clear error in
place beats a generic "Something went wrong".

**Why.** Every error costs time, confidence and sometimes the whole task. Preventing it moves the work from the
person to the system.

**Where it stops holding.** Over-constraining input also causes errors: a phone field that rejects spaces, a name
field that rejects apostrophes or non-Latin characters, an address form that assumes one country's format. Prevention
must accept the variety of real input (see Postel's law in [usability](03-usability.md) and
[content and localization](24-content-and-localization.md)).

## 9. Consistent with the world first, then with yourself

**What it says.** Use patterns people already know (Jakob's law: people spend most of their time in other products).
The same word, icon, color or shortcut means the same thing everywhere in the product. Innovate where the product
brings something new, not in how a menu works.

**Why.** Every familiar pattern is something the person does not have to learn. Every inconsistency is a small doubt:
"Is 'Remove' the same as 'Delete' here?"

**Where it stops holding.**

- **When the convention is harmful.** Pre-checked marketing consent is common and wrong. Consistency with the world
  does not include its dark patterns.
- **When the convention does not fit the task.** A spreadsheet-like grid is familiar, but for a five-item checklist on
  a phone it is the wrong tool.
- **Internal consistency can freeze bad decisions.** "We always do it this way" is a reason to keep a pattern only if
  it still works; changing it needs a migration plan, not silence (see
  [redesigns and migrations](29-redesigns-and-migrations.md)).

## 10. Accessible from the start

**What it says.** Keyboard, screen readers, contrast, touch target size, reduced motion, enlarged text, captions and
plain language are not a final phase: they are requirements like any other. What is accessible is almost always more
usable for everyone.

**Why.** Retrofitting accessibility is expensive and usually incomplete, because many barriers are structural (focus
order, custom widgets, information conveyed only by position or color). Designing with it from the start costs
little.

**Where it stops holding.** It does not. This is a requirement, not a heuristic. What varies is the level (WCAG 2.2
AA is the default target) and the technique; see [accessibility](02-accessibility.md).

## 11. Honest

**What it says.** No invented data, false urgency, hidden costs, harmful pre-selected options, hard cancellations or
states that lie. If something is unknown, say it is unknown ("Not available", "We couldn't confirm the payment yet").
Trust is the experience.

**Why.** Dishonest patterns can move a metric for a while, but they create chargebacks, complaints, regulatory risk
and people who stop believing the interface, which makes every honest message less effective too.

**Where it stops holding.** It does not. What requires judgment is how to say uncomfortable truths without alarming
people needlessly (see [psychology and ethical persuasion](12-psychology-and-ethical-persuasion.md)).

## 12. With judgment, not with filler

**What it says.** Every element has to earn its place: if you remove it and nobody misses it, it was not needed. No
generic decoration to make it "look modern". See [anti-slop](01-anti-slop.md) and [human design](13-human-design.md).

**Where it stops holding.** "Remove until it breaks" is a good test, not a goal. Some things are there for people who
are not the majority (an explanation for first-time users, a link to accessibility settings, a way to contact a human).
Removing them looks clean and silently excludes someone. Remove based on evidence of use and need, not on visual
tidiness alone.

## 13. The real state is part of the design

**What it says.** The interface shows what the system is really doing, with the action that resolves it, and tells
the same story in every view. Similar-looking states (out of quota vs. offline vs. server error) are not merged into
one message, because each has a different cause and a different fix. See
[real state and verification](08-real-state-and-verification.md) and
[states, transitions and concurrency](23-states-transitions-and-concurrency.md).

## 14. Decide between real alternatives, and write down the trade-off

**What it says.** For any significant decision, put at least two genuinely different options on the table, compare
them on criteria that matter for this task, choose one, and record what you gave up and what would make you change
your mind.

**Why.** The first idea is usually the most familiar one, not the best one. A decision with a recorded trade-off can
be revisited when the context changes; a decision without one gets defended or reversed on taste. See
[decisions and trade-offs](21-decisions-and-tradeoffs.md).

## 15. Test it for real

**What it says.** Check on the real device, with real data (long names, empty lists, 1,000 rows, errors, the longest
language the product ships in), in light and dark, with a keyboard and with enlarged text. A screen that only works
with perfect sample data is not finished.

**Where it stops holding.** You cannot test everything. Choose what to test by risk: the flows where an error costs
the most, the states most likely to occur, the people most likely to be excluded. Say what you did not test.

## 16. Any language, any locale

**What it says.** Design so the product works in the languages and regions it serves, not only in the one the team
speaks. Text grows and shrinks in translation, plurals have more than two forms in many languages, names and
addresses vary, dates and numbers change format, some scripts read right to left.

**Why.** Layouts and copy that assume one language break the moment the product expands, and fixing them late is
expensive. Even monolingual products serve people with names, addresses and keyboards from other cultures.

**How.** State copy rules by function, test with the longest realistic strings, and never build sentences by
concatenating fragments. See [content and localization](24-content-and-localization.md).

## Worked comparison: three decisions that look similar

The same principle ("forgive: prefer undo over confirmation") leads to three different designs once you apply its
limits.

**Case A — Archiving an email.** Frequent, low risk, truly reversible. Act immediately, show "Conversation archived ·
Undo" for a few seconds, keep the archive findable. A confirmation dialog here would add friction to hundreds of
daily actions to prevent a mistake that undo already fixes.

**Case B — Transferring money to a new recipient.** Infrequent for that recipient, high risk, not reversible once
sent. Undo is not real. Show the recipient's name as the bank returns it, the exact amount and currency, the fee and
the arrival time on a review step, and confirm with an action that names the amount ("Send 1,250.00 EUR"). The
principle of honesty (precedence 3) and safety (precedence 1) override the general preference for fewer steps
(precedence 5).

**Case C — Changing a field on 400 records at once.** Moderate frequency, medium risk, technically reversible but
painful to undo by hand. Show a preview of what will change ("Status will change from Draft to Published on 400
records; 12 are locked and will be skipped"), apply in the background with progress, and offer a single "Revert this
change" for a limited time. Neither a plain confirmation nor a toast with undo fits: the person needs to see the scope
before acting.

A designer who only knew the rule would have built the same dialog three times. A designer who knows the reasons
builds three different flows and can explain each one.

## Common mistakes

- **Treating heuristics as laws.** "We can't have two buttons, the rule says one primary action." The rule exists to
  reduce ambiguity; if two intents genuinely coexist, design the hierarchy between them instead.
- **Treating requirements as preferences.** "Contrast is a bit low but it looks elegant." Contrast below the minimum
  is not a style; it excludes people.
- **Citing other products as proof.** "Big company X does it" shows the pattern exists, not that it fits this task,
  audience or risk.
- **Optimizing the happy path only.** Most of the design work, and most of the damage, lives in the states and edge
  cases.
- **Resolving conflicts by taste.** When two principles collide, name them, apply the precedence above and write down
  the trade-off.

## Checklist

- [ ] The problem is stated in one sentence, separate from the requested solution.
- [ ] I know who the person is, their situation, frequency of the task and the cost of failure.
- [ ] Each screen has a clear primary question; things answered together stay together.
- [ ] Visibility follows frequency, importance and risk, not the system's internal structure.
- [ ] There is one primary action per context, or a deliberate hierarchy between legitimate intents.
- [ ] State is visible: where I am, what is happening, what's next.
- [ ] Protection matches the real reversibility of each action.
- [ ] Input accepts the real variety of what people type, in every locale served.
- [ ] Accessibility and honesty requirements are met, not traded away.
- [ ] Significant decisions have a recorded alternative and trade-off.
- [ ] It was tested with real data, real devices and the longest language, and untested areas are named.
