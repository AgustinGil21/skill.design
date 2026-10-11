# Tracking processes and working offline

Two patterns about time and uncertainty: **tracking** something that is happening (an order, a delivery, an
application, a long process) and **working without a connection**. Both require honesty about what the system knows,
what it expects and what might go wrong, and both must preserve people's work when conditions change.

For transitions and concurrency in general, see [states, transitions and concurrency](../23-states-transitions-and-concurrency.md);
for downloaded content, see [downloads and offline content](downloads-and-offline-content.md).

## The problem and who has it

- **People waiting** for a delivery, a ride, a refund, a visa, an export, a deployment.
- **People working in poor connectivity**: field workers, travelers, rural areas, underground transit.

When tracking fails: people call support to ask "where is it?", plan around wrong estimates, or miss that something
needs their action. When offline fails: work is lost, actions are duplicated, or people do not know what was saved.

## Questions to ask before deciding

- **What are the real stages** of the process, including branches (rejected, returned, needs information)?
- **How reliable are estimates**, and can they get worse?
- **When does the process need the person** (more information, a decision, presence)?
- **Which actions can work offline**, and which are unsafe to apply late?
- **How do conflicts get resolved** when offline changes meet online changes?

## Tracking

### Is the delivery model the right one?

Delivery apps solve "where is my thing and when will it arrive?" very well, and the pattern transfers to renders,
imports, applications and deployments — with care. A delivery moves forward; an application can go back ("needs more
information"), stall waiting for a human, or branch (approved, rejected). Do not force a linear progress bar on a
process that is not linear.

### Anatomy and behavior

- **At the top, the answer**: status in words + estimated time as a range ("Arrives 13:09–13:19") and whether it is on
  time ("On time", [Keeta](https://mobbin.com/screens/56299fbf-b2d0-48be-867d-c434ca5af134),
  [Grab](https://mobbin.com/screens/bcfa763e-74d6-4b71-9add-b54464f5453f)).
- **A line of stages with icons** (received → preparing → on the way → delivered), the current one marked and the done
  ones complete ([Instacart](https://mobbin.com/screens/1ea1bd7a-7b38-4ad2-8215-80154f0d81a7),
  [Starbucks](https://mobbin.com/screens/bfe624e0-32cc-4caf-a550-0b773bac34d3)).
- **A sentence about what is happening now** ("The courier is waiting for your order at the restaurant"), more useful
  than the technical stage name.
- **Contact and help one tap away** (call, chat, Help), and what the person can still do (change address, cancel).
- **An explicit promise and what happens if it is broken** ("If it arrives after 13:34, you get a voucher", Keeta).
- **Details collapsed below** (items, receipt, address) so they do not compete with the status.
- **On completion**: clear confirmation, proof (photo, PIN) and the next step (rate, view receipt).
- **Notifications on stage changes**, not every minute.
- **Avoid inserting promotions** between the status and the useful information (anti-example:
  [Grab](https://mobbin.com/screens/bcfa763e-74d6-4b71-9add-b54464f5453f) with an offers banner in the middle).

### Uncertain and worsening estimates

- **Show ranges**, not false precision.
- **Update estimates honestly** when they change, and say why ("Delayed 20 min due to traffic").
- **Never hide a delay** by freezing the estimate.
- **Stalled processes**: when nothing has happened for longer than usual, say so and offer help ("Your application has
  been under review longer than usual. Contact us").

### Stages that branch or go back

| Situation | Display |
| --- | --- |
| Needs the person's action | A prominent "Action needed: upload proof of address" with a deadline |
| Returned to an earlier stage | "Returned to review: missing signature on page 2" |
| Waiting for a human | "With the review team · usually 2–3 business days" |
| Rejected or failed | The reason and what can be done next |

## Working offline

### A contract per action

Decide, for each action, what happens offline:

| Action | Offline behavior |
| --- | --- |
| Reading previously loaded content | Works, with an "as of" indication |
| Drafting text, notes, forms | Saved locally, synced later |
| Sending a message | Queued, shown as "Waiting to send" |
| Booking a limited resource (a shift, a seat) | Not allowed offline, or queued with re-validation and clear risk |
| Payments | Not allowed offline |
| Deleting shared data | Queued with confirmation on reconnect, or not allowed |

### Saved locally, pending, confirmed

| State | Meaning | Display |
| --- | --- | --- |
| Saved on this device | Safe locally, not yet synced | "Saved on this device" |
| Pending sync | Will be sent when online | "Waiting to sync (3 changes)" |
| Syncing | In progress | "Syncing…" |
| Synced | Confirmed by the server | "Synced 2 min ago" |
| Conflict | Changed elsewhere too | "Resolve conflict" with comparison |
| Failed | Rejected by the server (permission lost, validation) | Reason, the local version kept |

### Anatomy and behavior

- **A persistent but non-blocking notice** ("Offline", a bar at the top,
  [Particle](https://mobbin.com/screens/fa68f741-7d4e-4962-9c7e-15e3bf70d084)) and **keep showing what was already
  loaded**; do not replace the screen with an error.
- **Distinguish "offline" from "the server failed"**: different copy and actions (anti-example: "Network error: could
  not parse response" with technical jargon).
- **Content available offline marked**, with download state and storage management
  ([Notion](https://mobbin.com/screens/e9e94681-2120-4697-aadd-814c1f9464c1),
  [Headspace](https://mobbin.com/screens/43d841d6-90be-4f12-8082-874271af24ea)).
- **Actions done offline queued**, with visible state ("Will send when you're back online") and automatic retry.
- **Connected devices or services**: "Offline · seen 18 min ago · Reconnect"
  ([ChatGPT](https://mobbin.com/screens/635cf9e7-fad6-4e72-b13d-20c138e4af00)).
- **When something physical needs checking**, a list of what to check before retrying ("Make sure your phone is on the
  same network…", [Philips Hue](https://mobbin.com/screens/33c875bb-1b3c-4e08-8457-64e04e1ba387)) + Help + Retry.
- **Avoid** "Oh no! Something went wrong on board" without a cause or a concrete way out
  ([Plenty of Fish](https://mobbin.com/screens/05df64cf-e3b6-475c-a746-9c8dfe33eb88)).

### Conflicts and permissions

- When offline edits conflict with online changes, keep both and ask (see
  [states, transitions and concurrency](../23-states-transitions-and-concurrency.md)).
- When permission was revoked while offline, the sync fails for those items: explain and keep the local copy so work
  is not lost.

## Accessibility specifics

- Status and estimates as text; stage changes announced.
- Offline and sync states announced when they change, not repeatedly.
- Action-needed items reachable and prominent.

## Copy

- Status in plain words, estimates as ranges, delays with reasons.
- Offline states that say what is safe ("Your notes are saved on this device").

## Common mistakes and why they happen

- **Linear progress for non-linear processes.**
- **Frozen or optimistic estimates.**
- **Offline errors replacing content.**
- **Queued actions shown as done.**
- **Lost work on sync failures.**

## Worked comparison: a field inspection without connection

**Weak.** An inspector fills a 40-question form in a basement; submitting shows "Network error" and clears the form.

**Strong.** The form shows "Offline — saved on this device"; submitting queues it ("Will submit when you're back
online"); outside, it syncs and confirms "Submitted 14:32"; if the inspection was reassigned meanwhile, it says so and
keeps the answers for the new assignee.

## How to verify and measure

- **Test** with network throttling, airplane mode mid-action, and reconnection; with long-running processes and
  delays.
- **Measure** "where is my order" contacts, estimate accuracy, lost-work reports, sync conflicts.

## References

- Keeta — [status, estimate range and promise](https://mobbin.com/screens/56299fbf-b2d0-48be-867d-c434ca5af134)
- Grab — [status; anti-example promotions banner](https://mobbin.com/screens/bcfa763e-74d6-4b71-9add-b54464f5453f)
- Instacart — [stages line](https://mobbin.com/screens/1ea1bd7a-7b38-4ad2-8215-80154f0d81a7)
- Starbucks — [stages line](https://mobbin.com/screens/bfe624e0-32cc-4caf-a550-0b773bac34d3)
- Particle — [offline notice](https://mobbin.com/screens/fa68f741-7d4e-4962-9c7e-15e3bf70d084)
- Notion — [offline content](https://mobbin.com/screens/e9e94681-2120-4697-aadd-814c1f9464c1)
- Headspace — [offline content and storage](https://mobbin.com/screens/43d841d6-90be-4f12-8082-874271af24ea)
- ChatGPT — [connected device offline](https://mobbin.com/screens/635cf9e7-fad6-4e72-b13d-20c138e4af00)
- Philips Hue — [checks before retrying](https://mobbin.com/screens/33c875bb-1b3c-4e08-8457-64e04e1ba387)
- Plenty of Fish — [anti-example: vague error](https://mobbin.com/screens/05df64cf-e3b6-475c-a746-9c8dfe33eb88)
