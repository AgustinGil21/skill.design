# Problem framing

How a designer turns a request into a problem worth solving, before any screen exists. Framing decides more about
the quality of the result than any visual choice: a well-executed answer to the wrong question is still the wrong
answer, and it is usually more expensive than a rough answer to the right one.

## What it is and why it matters

Requests rarely arrive as problems. They arrive as solutions ("add a dark mode", "we need a dashboard", "put a chat
on the pricing page"), as complaints ("users don't find the export"), as metrics ("activation dropped 8 points"), or
as copies of something seen elsewhere ("make it like the onboarding of that other app"). Each of these contains a
problem, but not in a form you can design for.

Framing is the work of extracting that problem, checking that it is real and important, separating what is fixed
from what is negotiable, and stating what success would look like. It improves these decisions:

- **Whether to build anything at all.** Some problems are better solved with copy, a default, a policy, a support
  article or by removing something.
- **Which part of the problem to solve first.** A problem usually has several causes with different costs.
- **How to know you succeeded.** Without a stated outcome, every result looks like success to whoever built it.
- **What to protect.** Every change can break something that works today; framing names it.

## The parts of a frame

A complete frame answers seven questions. You do not need a document for small tasks, but you need the answers.

| Part | Question | Example |
| --- | --- | --- |
| **Who** | Which people, in which role and situation? | Clinic receptionists booking appointments by phone, during calls |
| **Goal** | What are they trying to achieve, in their words? | "Find the next free slot for this doctor while the patient waits on the line" |
| **Obstacle** | What goes wrong today, observably? | They open three calendars, the call lasts 4 minutes, patients hang up |
| **Cause** | Why does it go wrong? (a hypothesis until checked) | Availability is split by doctor and by room; nothing shows both together |
| **Cost** | What does the obstacle cost, and to whom? | Lost bookings, longer queues, stressed staff |
| **Constraints** | What is fixed, and what only looks fixed? | The room system cannot change this quarter (fixed); the calendar layout can (negotiable) |
| **Success** | What will be observably different when it works? | Receptionists find a slot during the call without switching screens |

### The one-sentence frame

Compress the frame into one sentence before designing:

> **[Who]** needs to **[goal]** because **[why it matters]**, and today **[obstacle]**, probably because
> **[cause]**.

"Receptionists need to find the next free slot for a given doctor during a phone call, because patients hang up when
they wait, and today they switch between three calendars, probably because doctor availability and room availability
live in separate views."

If you cannot write this sentence, you do not have a frame yet. If you can only write it with vague words ("users
need a better experience"), the frame is not specific enough to guide decisions.

## From request to problem

### Ask "what would this let you do?" until it stops changing

The classic technique is asking "why" repeatedly. A gentler and more useful version is asking what the requested
solution would allow the person to do, until the answer is an outcome they care about rather than a feature.

| Request | "What would that let them do?" | Problem underneath |
| --- | --- | --- |
| "Add a filter by status to the orders table" | See the orders that need action today | Nothing surfaces the orders that are blocked or late |
| "Export to Excel" | Send the numbers to the accountant every month | There is no way to share a monthly summary with someone outside the product |
| "Add a dark mode" | Use the app at night in the warehouse without glare | The bright interface is hard to read in dim environments (dark mode may or may not be the best answer) |
| "We need a chatbot on the help page" | Get answers without waiting for an email reply | Support response time is slow and the help content does not answer the top questions |
| "Make the sign-up shorter" | Start using the product sooner | People abandon before seeing any value (shortening the form is one of several options) |

Stop when the answer is something the person would recognize as their own goal. Going further ("why do they want to
send numbers to the accountant?" "to pay taxes") eventually leaves the scope of the product, which is useful context
but not a design problem.

### Separate symptom, cause and solution

Teams often mix three different things in one sentence: "Users drop off at step 3 because the form is too long, so we
should split it." That sentence contains:

- A **symptom**, which is observed: drop-off at step 3.
- A **cause**, which is a hypothesis: the form is too long.
- A **solution**, which is one option among several: split it.

Keep them apart. The symptom may have other causes (step 3 asks for a document people do not have at hand; the step
loads slowly on mobile; a validation error is invisible). Each cause leads to a different solution. Checking the
cause first is usually cheaper than building the solution and discovering it did not move the symptom.

### Distinguish the problem you were given from the problem that exists

Sometimes the stated problem is real but small, and a bigger one sits next to it. A request to "make the invoice
download faster" may reveal that people download invoices only to check one number that could be shown on the
screen. Mention the bigger problem; do not silently swap it in. The person who asked may have reasons, budget or
authority limits you do not know about.

## Constraints: fixed, negotiable and imagined

Every project has constraints. Framing sorts them, because each kind is handled differently.

| Kind | Example | How to handle it |
| --- | --- | --- |
| **Fixed** | A law requires explicit consent; the payment provider controls the card form | Design the best experience inside it and record it as a constraint |
| **Negotiable** | "The release is in two weeks"; "we can't change the API" | Make the cost visible ("in two weeks we can ship A without B; B prevents X") and let the owner decide |
| **Imagined** | "Users won't read more than one line"; "we have to match the competitor" | Check them. Many disappear when someone asks where they came from |

Write down which constraints you treated as fixed. When a design looks strange later, that record explains it, and
when the constraint changes, it tells you what can now improve.

## Success: outcomes, not outputs

An **output** is what the team ships (a new filter, a redesigned page). An **outcome** is what changes for people
(receptionists book during the call). Frame success as an outcome, then decide how to observe it.

| Weak success statement | Why it is weak | Stronger version |
| --- | --- | --- |
| "Launch the new onboarding" | It is an output; it succeeds even if nobody benefits | "New workspaces create their first real project in their first session" |
| "Increase engagement" | Engagement can rise because the product became harder to use | "People complete the weekly report in less time, with fewer support questions" |
| "Users love it" | Not observable, easy to claim | "In testing, 5 of 6 receptionists booked a slot during a simulated call without help" |
| "Conversion goes up" | Can go up with dark patterns that create refunds later | "Paid conversion rises without an increase in refunds or cancellations in the first 30 days" |

Pair every success measure with a **guardrail**: something that must not get worse. Faster checkout must not raise
payment errors; a shorter form must not lower the quality of leads; more notifications opened must not raise the
rate of people turning notifications off. See [measurement and learning](26-measurement-and-learning.md).

## When not to build

Framing is the moment to consider that the best design may be no new interface at all. Consider these before adding
screens:

| Problem | Non-interface solution worth considering first |
| --- | --- |
| People do not understand a setting | Rewrite its label and description; choose a better default |
| A rare, complex task confuses people | A guided support conversation or a help article may serve better than a permanent feature |
| A feature is unused and causes confusion | Remove it or hide it behind an advanced section |
| A problem only affects internal staff | An internal tool or a process change may be cheaper than changing the product for everyone |
| People make a costly mistake | A safer default or a constraint in the system may prevent it without any new UI |
| The cause is a policy (refund rules, approval chains) | Changing the policy may fix what no interface can |

Deciding not to build is a design decision. Record it with the same rigor as any other, including what would make
you revisit it.

## Who else has a stake

A frame that only considers the person using the screen misses the people who make the experience work or bear its
consequences:

- **People affected but not present.** The patient waiting on the phone; the recipient of a message; the child whose
  account a parent manages; the person whose data appears in someone else's search.
- **People who operate the service.** Support agents who answer the questions the interface creates; moderators;
  the warehouse team that ships what the checkout promises.
- **People who decide and pay.** The administrator who buys the tool for a team often never uses the daily screens.

For each, ask: what do they need, and what could this change make worse for them? See
[service design and journeys](28-service-design-and-journeys.md).

## A method for a new case

1. **Collect the raw request** as it arrived, with whoever asked and what triggered it.
2. **Find the observable obstacle.** Ask for evidence: a support ticket, a recording, a metric, a conversation, a
   screenshot. If there is none, the problem is a hypothesis; say so.
3. **Ask what the solution would let people do**, until the answer is a goal they would recognize.
4. **Separate symptom, cause and solution.** List at least two plausible causes.
5. **Sort the constraints** into fixed, negotiable and imagined.
6. **Write the one-sentence frame** and the success statement with a guardrail.
7. **List who else has a stake** and what could get worse for them.
8. **Decide the cheapest way to reduce the biggest uncertainty** before designing in detail: a conversation, a look
   at the data, a quick prototype (see [research and testing](16-research-and-testing.md)).
9. **Share the frame** with whoever asked. Disagreement at this stage is cheap; disagreement after the build is not.

## Framing under uncertainty

You will often frame with incomplete information. That is normal; pretending otherwise is the problem.

- **Mark what you know, what you believe and what you are guessing.** "We know 40 % of carts are abandoned at
  shipping (analytics). We believe it is the cost (three support tickets). We are guessing it is the delivery date."
- **Prefer reversible first steps.** When the cause is uncertain, start with the change that is cheapest to undo and
  that would teach you the most.
- **State what would change your mind.** "If people still abandon after we show the cost earlier, the cause is not the
  surprise; look at delivery dates next."

## Worked comparison

**Request:** "Add a search bar to the team members page."

**Weak framing.** The team designs a search bar with autocomplete, filters by role and a highlighted match. It ships.
Usage is low. Nobody knows whether that is a success or a failure, because nobody stated what problem it solved.

**Strong framing.**

- *What would it let them do?* "Find a colleague to give them access to a project." Further: "Admins give access
  dozens of times a week, and the members page has 900 people."
- *Observable obstacle.* Admins scroll and use the browser's find, which misses people listed by email instead of
  name. Two support tickets mention giving access to the wrong person with a similar name.
- *Causes.* (a) No way to find people quickly; (b) people are listed inconsistently; (c) access is granted from the
  members page instead of from the project, which is where the need arises.
- *Frame.* "Admins need to grant project access to the right colleague quickly, because they do it dozens of times a
  week, and today they search a 900-person list where similar names cause mistakes, probably because access is managed
  far from the project where the need appears."
- *Success and guardrail.* Admins grant access in seconds from the project itself; wrong-person grants do not
  increase.
- *Result.* The main change is an "Add people" control inside each project, with search by name or email that shows
  each person's email and team to disambiguate. The members page also gets search, as a secondary improvement.

The search bar still exists, but it is no longer the whole answer, and the team knows how to tell whether it worked.

## Common mistakes

- **Accepting the solution as the problem.** "Add X" becomes the spec, and nobody asks what X is for.
- **Framing too broadly.** "Improve the onboarding experience" cannot guide a single decision.
- **Framing too narrowly.** "Make the button bigger" skips the question of why people miss it.
- **Inventing evidence.** Turning "I think users hate this" into "users hate this" in the frame. Mark beliefs as
  beliefs.
- **Ignoring the people who are not on screen.** Support, operations, recipients, people who are affected but absent.
- **No guardrail.** Success measured on one number invites solutions that move it by harming something else.
- **Framing once and never again.** New evidence during design can change the frame; update it out loud.

## Checklist

- [ ] The raw request and its trigger are recorded.
- [ ] There is observable evidence of the obstacle, or it is marked as a hypothesis.
- [ ] Symptom, cause and solution are separated, with at least two plausible causes.
- [ ] The one-sentence frame names who, goal, why, obstacle and probable cause.
- [ ] Constraints are sorted into fixed, negotiable and imagined.
- [ ] Success is an outcome with a guardrail, not an output.
- [ ] Non-interface solutions were considered.
- [ ] People affected but not present are listed.
- [ ] The frame was shared with whoever asked before detailed design started.
