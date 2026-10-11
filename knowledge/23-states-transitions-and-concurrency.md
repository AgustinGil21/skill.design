# States, transitions and concurrency

How a designer handles the moments between "the person did something" and "the system is done", and the moments when
the world changes underneath the screen. Most interfaces are designed as a set of still pictures; real products are
in motion, with requests in flight, data going stale, other people editing the same thing and connections dropping.
This file is about designing that motion honestly.

It complements [real state and verification](08-real-state-and-verification.md), which covers showing the system's
real condition, and [empty, loading and error states](patterns/empty-loading-and-error-states.md), which covers
specific screen states.

## What it is and why it matters

Every action that involves a server, another person, a device or time passes through several states. Designers who
only draw the start and the end leave the middle to chance, and the middle is where people double-pay, lose work,
overwrite a colleague's changes or give up because they cannot tell whether anything happened.

Designing states and transitions well improves:

- **Trust.** People believe the interface because it never claims more than it knows.
- **Safety.** No duplicate charges, no silent data loss, no actions applied twice.
- **Speed.** Optimistic updates make frequent actions feel instant when it is safe.
- **Recovery.** When something fails, people know what happened and what to do, and their work is preserved.

## The life of an action

An action is not a single moment. Name its phases explicitly:

| Phase | What is true | What the person needs to know |
| --- | --- | --- |
| **Intent** | The person decided to act (clicked, submitted) | That the system received the gesture |
| **Pending** | The request is on its way or being processed | That it is in progress, and whether they can leave |
| **Accepted** | The system received it and will process it | That it is queued or underway, not yet done |
| **Confirmed** | The system finished and the effect is real | That it is done, and what the result is |
| **Failed** | The system knows it did not happen | What failed, whether anything partially happened, how to retry |
| **Unknown** | The system cannot tell whether it happened (timeout, lost connection) | That the outcome is uncertain, and how to find out safely |

The **unknown** phase is the one most designs forget, and it is the most dangerous. A payment request that times out
may or may not have been charged. Showing "Payment failed, try again" in that state invites a double charge. The
honest message is "We couldn't confirm your payment yet. Don't pay again: we'll update this page in a moment", with a
way to check the status.

## Optimistic and pessimistic updates

### Optimistic: show the result before confirmation

The interface applies the change immediately and reconciles when the server answers. A "like" turns on instantly, a
task moves to "Done" instantly, a message appears in the conversation instantly.

**Use it when:**

- The action is frequent and the person expects it to feel instant.
- Failure is rare.
- Failure is cheap and easy to explain and roll back.
- The action does not affect money, other people's access or irreversible states.

**Design the rollback.** When the server rejects an optimistic change, the interface must undo it visibly and say
why, without losing what the person typed. A task that silently jumps back from "Done" to "In progress" looks like a
bug; "Couldn't mark as done: this task has unfinished subtasks" is a design.

**Mark what is not yet confirmed** when it matters. A sent message can show a subtle "sending" state until the server
confirms, then a "sent" state; if it fails, a clear "not sent · retry" stays attached to the message, keeping the
text.

### Pessimistic: wait for confirmation

The interface shows a pending state and only shows the result after the server confirms.

**Use it when:**

- The action moves money, grants or revokes access, deletes data, sends to many people or is otherwise costly to
  get wrong.
- Failure is common or complex (validation that depends on the server).
- The result depends on the server (a generated report, a price calculation).

**Design the wait.** Disable repeated submission for that specific action (not the whole page), show progress in
place, and keep the person informed if it takes long. See the feedback timing in
[empty, loading and error states](patterns/empty-loading-and-error-states.md).

### Choosing

| Action | Choice | Why |
| --- | --- | --- |
| Starring an item | Optimistic | Frequent, cheap, rare failure |
| Reordering a personal list | Optimistic, with rollback | Feels broken if slow; failure is cheap |
| Sending a chat message | Optimistic display, with visible "sending/sent/failed" per message | People expect instant feedback, but must know when a message did not go |
| Paying an invoice | Pessimistic | Money; duplicates are harmful |
| Changing someone's role | Pessimistic | Affects another person's access immediately |
| Deleting a project | Pessimistic, or deferred deletion with undo | Irreversible effects; undo only if the deletion is actually delayed |

## Duplicates and idempotency

People double-click, retry when nothing seems to happen, refresh pages and re-submit forms. The system must handle
it; the interface must not invite it.

- **Disable the specific control** while its request is pending, and show why ("Paying…"), instead of leaving it
  clickable.
- **Make the request safe to repeat** (idempotent) on the system side when the action is costly. Designers should ask
  engineering whether a repeated submission creates two orders; if it does, that is a design problem too.
- **Detect likely duplicates** and ask: "You sent the same amount to Ana Pereira 2 minutes ago. Send again?"
- **Never tell people to retry an action whose outcome is unknown** without first checking whether it happened.

## Stale data

Data on screen starts aging the moment it loads. Whether that matters depends on how fast it changes and what
decisions people make with it.

| Data | How fast it changes | Risk of acting on stale data | Design |
| --- | --- | --- | --- |
| A static help article | Rarely | None | Nothing special |
| A team's task list | Minutes | Two people pick the same task | Live updates, or a "Updated just now / New changes · Refresh" notice |
| Stock availability in a store | Seconds to hours | Selling something out of stock | Check again at checkout; say clearly if it changed |
| A shared document | Seconds | Overwriting someone's work | Real-time collaboration or conflict detection on save |
| A dashboard of yesterday's sales | Daily | Low | Show "Data as of 06:00 today" |
| An account balance | Any time | Spending money that is no longer there | Refresh before money actions; show "as of" time when cached |

### Patterns for staleness

- **Timestamp:** "Updated 3 minutes ago" or "Data as of 09:00". Cheap and honest. Use the person's locale and time
  zone.
- **Refresh notice:** "3 new orders · Show" instead of moving content under the person's cursor. Never reorder a list
  while someone is reading or about to click it.
- **Revalidate at the decision point:** re-check price, stock or availability right before the irreversible step, and
  explain any change ("The price changed from 84.00 to 89.00 since you added it").
- **Live updates:** for collaborative and operational screens, with care not to move what the person is interacting
  with.
- **Keep showing old data while refreshing**, marked as refreshing, rather than replacing it with a spinner. An empty
  screen during a refresh loses context.

## Conflicts: when two people change the same thing

### Detecting conflicts

There are three broad approaches, with very different experiences:

| Approach | What happens | Good for | Cost |
| --- | --- | --- | --- |
| **Last write wins** | The later save silently overwrites the earlier one | Personal data, low-stakes fields | Silent data loss when two people edit; usually unacceptable for shared work |
| **Conflict detection on save** | The system notices the record changed since it was loaded and asks what to do | Forms, records edited occasionally by several people | The person must resolve the conflict, which needs a good comparison view |
| **Real-time collaboration** | Changes merge continuously; people see each other's presence | Documents, boards, designs edited together | Technical complexity; needs presence, cursors and per-change history |

### Designing conflict resolution

When a conflict is detected on save:

1. **Keep the person's changes.** Never discard what they typed.
2. **Explain what happened in human terms.** "Laila changed this record while you were editing (2 minutes ago)."
3. **Show the differences field by field**, only for fields that conflict. Fields changed by only one person merge
   automatically.
4. **Offer clear choices per conflict:** keep mine, keep theirs, or edit a combined value.
5. **Confirm the result** and record both changes in history.

### Preventing conflicts

- **Presence:** show who else is viewing or editing ("Laila is editing").
- **Soft locks:** "Laila is editing this section" with the option to request or take over, for content where merging
  is hard.
- **Smaller units:** let people edit fields or sections independently instead of whole records.

## Cancel and retry

### Cancel

"Cancel" means different things in different phases, and the interface should say which:

| Phase when cancelled | What actually happens | What to tell the person |
| --- | --- | --- |
| Before sending | Nothing was sent | "Cancelled" |
| Pending, cancellable | The request is stopped before it takes effect | "Cancelled. Nothing was changed" |
| In progress, partially done | Some effects already happened | "Stopped. 120 of 400 records were updated. Revert those 120?" |
| Already confirmed | Too late to cancel; only reversal is possible | "Already sent. You can [recall / refund / revert]" |

The dangerous case is offering "Cancel" when the server will finish anyway. If cancellation cannot be guaranteed,
the label should be "Stop waiting" or "Hide", not "Cancel".

### Retry

- **Retry automatically** only when repeating is safe and the failure is likely transient (a network blip on a read
  request).
- **Retry with the person's consent** for writes, especially costly ones, after confirming the first attempt did not
  succeed.
- **Back off**: do not hammer a failing service; tell the person when the next attempt happens ("Trying again in 30 s ·
  Try now").
- **Change something before retrying** when the failure was not transient: a retry button for a validation error is a
  trap.

## Partial results

Batch actions, imports, syncs and multi-step processes often succeed partly. Treat partial success as its own state,
never as success or failure.

- **Say exactly what happened:** "362 contacts imported, 14 skipped, 2 failed."
- **Make the failures actionable:** a list of the skipped and failed items with the reason for each and a way to fix
  and retry only those.
- **Decide whether partial is acceptable.** For independent items (sending 400 newsletters), partial is fine. For
  dependent items (transferring a set of records that must stay consistent), the operation should be all-or-nothing,
  and the interface should say so before starting.

See [batches, approvals and captions](patterns/batches-approvals-and-captions.md) and
[import, tags and cropping](patterns/import-tags-and-cropping.md).

## Offline and intermittent connections

Treat connectivity as a spectrum, not a switch: fast, slow, flaky, offline, and "connected but the server is down".

- **Say which one it is.** "You're offline" and "Our servers are having trouble" lead to different actions.
- **Decide per action** what works offline: reading cached data, drafting, queuing actions to send later, or
  nothing.
- **Show queued actions as queued**, not as done: "Will send when you're back online (2 messages)".
- **Never queue actions that are unsafe to apply late** (accepting a shift that may be taken by then, buying an item
  with limited stock) without re-validating when the connection returns.

See [tracking and offline](patterns/tracking-and-offline.md).

## Long-running work

Work that takes more than a few seconds (exports, video processing, AI generation, large imports) changes the
contract:

- **Let people leave.** Run it in the background, show it in a consistent place (a jobs panel, the item itself), and
  notify when done.
- **Show progress honestly.** A real percentage or count when known; stages when not ("Uploading · Processing ·
  Ready"); never a fake progress bar that stalls at 99 %.
- **Make it findable after reload or on another device.** The job belongs to the account, not to the browser tab.
- **Handle the person coming back to a finished, failed or partially finished job.**

## Accessibility of state changes

- **Announce changes the person cannot see** using a status message (WCAG 4.1.3 Status Messages, AA): "Saved",
  "3 results", "Upload failed". Use polite announcements for routine updates and assertive ones only for urgent
  errors.
- **Do not move focus unexpectedly** when content updates in the background (3.2.1 On Focus and 3.2.2 On Input, A).
- **Do not rely on color or animation alone** to show pending, failed or conflicting states (1.4.1 Use of Color, A).
- **Give time:** if a session or a hold expires, warn before it does and allow extending it (2.2.1 Timing Adjustable,
  A).
- **Live-updating lists** should not steal focus or reorder under the keyboard focus; offer "Show new items" instead.

## Copy for uncertain states

The words matter most when the system is unsure. Rules by function, in any language:

- **Say what you know and what you don't.** "We sent your request. We haven't heard back from the bank yet."
- **Say what the person should do, and what not to do.** "Don't submit again; we'll update this screen."
- **Avoid false certainty in both directions.** Not "Success!" before confirmation; not "Failed" when it is unknown.
- **Give a time expectation when you have one.** "This usually takes under a minute."
- **Keep the person's work visible** in every error message context.

| Situation | Misleading | Honest |
| --- | --- | --- |
| Payment timed out | "Payment failed. Try again." | "We couldn't confirm your payment. Don't pay again yet — we're checking with your bank." |
| Save rejected because of a conflict | "Error saving." | "Laila changed this record while you were editing. Review the differences to save your changes." |
| Import partly done | "Import complete!" | "362 contacts imported. 16 need your attention." |
| Queued while offline | "Sent" | "Waiting to send — you're offline" |

## Worked comparison

**Scenario:** an expense app where an employee submits a 1,240.00 MXN expense report from a train with a weak
connection.

**Weak design.** The "Submit" button shows a spinner. The connection drops; after 30 seconds the app shows "Something
went wrong" and returns to the form. The employee taps "Submit" again. The first request had reached the server; now
there are two reports, both sent to the manager, who approves both.

**Strong design.**

- The button changes to "Submitting…" and is disabled for this report only.
- The request carries an identifier so the server ignores a repeat of the same submission.
- When the connection drops before an answer, the report shows "Submission not confirmed — checking" and the app
  checks the report's status when the connection returns, instead of offering to submit again.
- If the server had received it, the report shows "Submitted · waiting for approval". If not, it shows "Not
  submitted — your report is saved. Submit again" with the data intact.
- The manager's view never shows two copies of the same report.

The difference is not visual. It is the decision to treat "unknown" as a real state.

## Common mistakes

- **Two states only.** Designing "loading" and "done" and nothing in between.
- **Merging unknown with failed.** Inviting people to repeat actions that may already have happened.
- **Optimism without rollback.** Showing success instantly and then silently reverting.
- **Spinners that replace content.** Losing the screen's context during every refresh.
- **Reordering lists under the cursor.** Live updates that make people click the wrong thing.
- **"Cancel" that cannot cancel.** Labels that promise more control than the system has.
- **Last write wins on shared data.** Silent loss of a colleague's work.

## Checklist

- [ ] Each important action has its phases named, including "unknown".
- [ ] Optimistic updates are used only where failure is rare and cheap, with a visible rollback.
- [ ] Costly actions are protected against duplicates in the interface and in the system.
- [ ] Data shows its age where acting on stale data is risky, and is revalidated at decision points.
- [ ] Shared data has a conflict strategy other than silent overwrite.
- [ ] Cancel and retry labels match what the system can actually do.
- [ ] Partial results are reported item by item, with a way to fix and retry only failures.
- [ ] Offline, slow and server-down states are distinguished.
- [ ] State changes are announced accessibly without stealing focus.
- [ ] The `templates/states-table.md` table is filled in before building.
