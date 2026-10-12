# Service design and journeys

How a designer looks beyond the screen to the whole experience: journeys that cross channels, people, devices,
waiting times and back-office processes. Many of the worst experiences are not caused by a bad screen but by gaps
between screens: the email that never arrives, the support agent who cannot see what the customer did, the order
that waits for a manual approval nobody knows about.

## What it is and why it matters

A **service** is everything an organization does to deliver value to a person over time: the product's screens, but
also emails, phone calls, physical locations, deliveries, invoices, support, and the internal processes and systems
behind them. A **journey** is the path a person takes through that service to achieve a goal.

Service design matters because:

- **People experience the whole, not the parts.** A perfect checkout followed by a missing delivery is a bad
  experience.
- **Many problems live in handoffs**: between channels (web to phone), between teams (sales to onboarding), between
  systems (the order system to the warehouse).
- **Front-stage and back-stage are connected.** What staff can see and do determines what customers experience.

## Journeys and blueprints

### Journey map

A journey map follows one person through one goal over time, showing:

- **Stages**: discover, decide, start, use, get help, renew or leave.
- **Actions** at each stage.
- **Touchpoints**: where they interact (website, app, email, phone, store, package).
- **Thoughts and feelings**: what they worry about, what confuses them, what delights them — from research, not
  imagination.
- **Pain points and opportunities.**

### Service blueprint

A blueprint adds what happens behind the scenes:

| Layer | Contents |
| --- | --- |
| **Customer actions** | What the person does |
| **Front-stage** | What the person sees and interacts with: screens, staff, messages |
| **Line of visibility** | — |
| **Back-stage** | What staff and systems do that the person does not see |
| **Support processes** | Internal systems, partners, policies |
| **Evidence** | Physical and digital artifacts: emails, receipts, packages |

Blueprints reveal where the experience depends on invisible work: a manual check that takes two days, a system that
does not share data with another, a policy that forces a phone call.

## Designing across channels

People move between channels; the service should move with them.

- **Continuity**: a task started on the phone can be continued on the computer, with progress preserved.
- **Shared context**: a support agent can see what the person did in the app; the person does not repeat themselves.
- **Consistent information**: prices, statuses and policies are the same in every channel.
- **Channel choice**: people can choose the channel that suits them (self-service, chat, phone, in person), especially
  for complex or emotional situations.
- **Accessible channels**: a phone-only process excludes deaf people; a web-only process excludes people without
  internet. Offer alternatives.

## Waiting, handoffs and invisible processes

Waiting is part of most services: approvals, deliveries, verifications, manual reviews.

- **Make waits visible**: what is happening, who is doing it, how long it usually takes. See
  [tracking and offline](patterns/tracking-and-offline.md).
- **Set expectations honestly** and update them when they change.
- **Notify at meaningful moments**, not at every internal step.
- **Design handoffs**: when responsibility moves from one team or system to another, the person should not notice a
  gap — or should be told clearly who now owns their request.
- **Escalation paths**: when something is stuck, there is a way to reach a person who can unblock it.

## Recovery: when the service fails

Every service fails sometimes. The quality of recovery shapes trust more than the failure itself.

- **Detect failures before the person does** where possible (a delayed shipment, a failed payment), and inform them
  proactively.
- **Own the problem**: say what happened and what you are doing, without blame.
- **Make it right**: fix the issue and, where appropriate, compensate.
- **Learn**: feed the failure into the blueprint to prevent recurrence.

## People who operate the service

Staff are users too. Back-office tools, support consoles and operational dashboards shape the customer experience
directly.

- **Give staff the context they need**: the customer's history, current status, previous contacts.
- **Let staff fix problems**, not just log them: permissions and tools to resolve common issues.
- **Design for staff accessibility and workload**: support tools are used all day.

## Multilingual and multi-regional services

- **Every channel in the person's language**: the app, emails, SMS, support, documents. A localized app with English-only
  emails breaks the service.
- **Local processes**: payment methods, identity verification, delivery and legal requirements differ by country and
  change the journey, not just the copy.
- **Time zones**: support hours, deadlines and notifications in the person's time zone.

## A method

1. **Pick one goal and one type of person**, from research.
2. **Map the current journey** end to end, including channels outside the product, with evidence (interviews, support
   tickets, data).
3. **Add the back-stage**: what staff and systems do at each step.
4. **Mark pain points, waits, handoffs and failure points.**
5. **Prioritize** by impact on people and frequency.
6. **Design the improved journey**, including changes outside the interface (policies, processes, staff tools).
7. **Prototype the service**: role-play, walk through it with staff, run a pilot.
8. **Measure** across the whole journey, not just one screen.

## Worked comparison

**Service:** replacing a broken appliance under warranty.

**Screen-focused design.** A beautiful warranty claim form in the app. After submitting: "Claim received". Then
nothing for nine days, while the claim waits for a manual review in another department that has no access to the
photos uploaded in the app and asks the customer by email to send them again. The customer calls support, who cannot
see the claim status.

**Service-focused design.**

- Blueprint reveals the manual review, the photo gap and the support blindness.
- Photos flow from the app to the review tool; reviewers see everything the customer submitted.
- The claim page shows stages ("Received · Under review (usually 2–3 days) · Approved · Replacement shipped") and who
  is handling it.
- Support sees the same status and history.
- If review takes longer than usual, the customer is told why and when to expect an answer.
- Messages arrive in the customer's language and channel of choice.

## Common mistakes

- **Optimizing screens while the journey breaks between them.**
- **Ignoring back-stage processes** that cause waits and errors.
- **Making people repeat information** across channels.
- **Forgetting staff as users.**
- **Localizing the app but not emails, support and documents.**

## Checklist

- [ ] The journey is mapped end to end, across channels, from research.
- [ ] The back-stage (staff, systems, policies) is mapped for critical steps.
- [ ] Waits, handoffs and failure points are visible and designed.
- [ ] Context follows the person across channels; nobody repeats information.
- [ ] Staff tools give context and the ability to fix problems.
- [ ] Every channel works in the person's language and time zone.
- [ ] Recovery from failure is designed and measured.
