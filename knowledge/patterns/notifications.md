# Notifications and inbox

Notifications interrupt people to tell them something happened or something needs them. Every notification spends
attention, which is the scarcest resource a product has. A good notification system decides **whether** to interrupt,
**through which channel**, **how urgently**, and **when to stop** — and it treats "seen", "read", "acted on" and
"resolved" as different states.

## The problem and who has it

- People who need to act: they were mentioned, assigned, asked for approval.
- People waiting for something: an export, a long process, a reply.
- People who want awareness without interruption: activity in their projects.

When notifications fail: important ones are missed among noise, people turn everything off, people act on stale
notifications (already resolved by someone else), or sensitive content appears on lock screens.

## Questions to ask before deciding

- **Does this event require action from this person, or is it awareness?**
- **How urgent is it**, and what happens if it is seen an hour or a day later?
- **Can the person act on it**, or only someone else?
- **How often will it fire** for an active person?
- **Could it be stale** by the time it is seen (already resolved, already done)?
- **Is the content sensitive** (health, money, private messages)?
- **Which channels** does the person use and prefer?

## Alternatives and how to choose

### Urgency × importance × ability to act

| Situation | Channel | Example |
| --- | --- | --- |
| Urgent, important, the person can act now | Push or real-time alert, plus inbox | "Your payment to a supplier failed; it's due today" |
| Important, not urgent | Inbox, maybe email | "Laila asked for your review on 'Q3 plan'" |
| Awareness | Inbox only, or digest | "3 files were added to Brand" |
| Result of something the person started | In context (the item) plus inbox; push if they left | "Your export is ready" |
| Product news, marketing | Separate channel, opt-in | "New feature: templates" |
| Security events | Email and in-app, cannot be fully disabled | "New sign-in from a new device" |

### Contextual or centralized?

- **In context**: a badge on the item, an inline banner where the person works. Best for status of things they are
  looking at.
- **Inbox**: a central list of what needs attention. Best for cross-cutting events.
- **External** (email, push, chat apps): best when the person is not in the product and the event cannot wait.

## When not to notify

- When nothing needs to be done and the information is visible where people look anyway.
- For achievements, product news or marketing inside a work inbox.
- Repeatedly for the same thing: group or update the existing notification.
- For events the person caused themselves (unless it is the result of a long process).

## Interruption budget

Treat notifications as a budget. For each type, estimate how many a typical active person receives per day. If the
total is high, people will stop reading them. Reduce by:

- Grouping ("Jane uploaded 4 files to Brand 1").
- Digests for awareness events.
- Muting threads or projects.
- Stopping notifications about things already resolved.

## Anatomy and behavior

### The inbox

- **A panel from the top bar** (a bell with a count) or its own page when it is central to the work.
- **Tabs by importance, not technical type**: "Needs you" / "For your information"
  ([Slite](https://mobbin.com/screens/5da0de72-bedb-4c86-9cc9-905eb129b95d)), "All / Mentions"
  ([Air](https://mobbin.com/screens/b3e74362-1af4-4022-bdf2-a56b09d786f3)), "Unread / All"
  ([Langdock](https://mobbin.com/screens/dc3adbc9-3ae0-45fd-9f43-c8ab60a19052)).
- **Each notification**: who + what they did + on what (a link), an excerpt for comments, relative time, an unread
  indicator. Group similar ones.
- **A direct action in the notification** when there is an obvious one ("Download", "Go to billing";
  [Causal](https://mobbin.com/screens/9a5e4576-8324-4778-b510-ac081f65311b),
  [fal](https://mobbin.com/screens/d7f3f613-38ca-49f3-a382-e51c1f1d435c)).
- **"Mark all as read"** and notification settings one click away from the panel.
- **Archive / Done** per notification, to use the inbox as a to-do list
  ([ClickUp](https://mobbin.com/screens/f1374e47-4168-46b0-baab-445916244ac6)).
- **An explicit end of the list**: "That's all your notifications from the last month".
- **Grouping by date** (Today, Yesterday, This week).

### Attention states

These are different states and should not be merged:

| State | Meaning | Example |
| --- | --- | --- |
| Delivered | It exists in the inbox | — |
| Seen | The person opened the inbox and it was visible | The badge count clears |
| Read | The person opened the notification | The unread dot clears |
| Acted on | The person did what was asked | Approved the request |
| Resolved | The underlying need is gone (by anyone) | Someone else approved it |
| Expired | It no longer applies | The event already happened |

- **The badge clears when the inbox is seen**, not when every item is opened.
- **Resolved or expired notifications update or disappear**: "Approved by Marco 2 h ago" instead of an actionable
  "Approve" button that will fail.

### Indicators

- A number only when the quantity matters; otherwise a dot.
- A cap such as "99+".
- Activity in progress (long processes) as a subtle indicator in the relevant section, respecting reduced motion.

### System notifications (push, browser, OS)

- Ask for permission **in context**, after explaining the benefit ("Want us to tell you when your render finishes?"),
  never on first launch.
- Each channel configurable per event type (see [preferences](preferences.md)).
- **Privacy on lock screens**: for sensitive content, show "New message from your clinic" rather than the message text;
  let people choose.
- **Deep links** open the exact item, and work even if the person is signed out (after signing in).

## States and transitions

- New notification while the panel is open: insert at the top without moving what the person is reading; announce
  politely.
- Notification whose target was deleted: show it as such ("This comment was deleted").
- Notification for something the person can no longer access: explain.
- Offline: queue state changes (read, archived) and sync later.

## Edge cases

- Bursts of events (an import creating 500 items): one summary notification.
- Notifications in the person's language even when the triggering content is in another.
- Time zones in times and "today/yesterday" grouping.
- People in many workspaces: indicate which workspace each notification belongs to.

## Accessibility specifics

- The bell has an accessible name with the count ("Notifications, 3 unread").
- New notifications announced politely; not every one when many arrive.
- The panel is a dialog or a region reachable by keyboard; actions in each notification are reachable.
- Unread state conveyed by text, not only a dot.

## Copy

- Who did what, on what, and why it matters to the reader ("Laila assigned you 'Q3 budget review' · due Friday").
- Avoid vague text ("You have a new notification").
- In other languages, notification templates need full sentences with variables (names, counts, objects) and plural
  rules; see [content and localization](../24-content-and-localization.md).

## Common mistakes and why they happen

- **Everything notifies** — because each team adds its events.
- **Stale actionable notifications** — because state is not updated after resolution.
- **Permission prompts on first launch.**
- **Marketing in the work inbox.**
- **Sensitive content on lock screens.**
- **Measuring opens** instead of usefulness.

## Worked comparison: a useful mention vs. repeated noise

**Same team:** a design team reviewing a file with 40 comments a day.

**Weak.** Every comment on any file the person follows triggers an email and a push. The designer receives 60
notifications a day, turns all of them off, and misses the one where the client asked for a change before launch.

**Strong.** Direct mentions and assignments: push and inbox. Replies in threads the person participates in: inbox.
Other activity: a daily digest. Threads can be muted. When a review request is resolved by someone else, its
notification updates to "Resolved by Marco". The designer receives about five notifications a day and reads all of
them.

## How to verify and measure

- **Measure usefulness**: actions taken from notifications, time to act on "needs you" items.
- **Guardrails**: opt-outs per event type, disabled push permissions, uninstalls.
- **Do not optimize opens alone**: more opens can mean more noise.
- **Test** with a realistic volume of events, not three sample notifications.

## References

- Slite — [tabs by importance](https://mobbin.com/screens/5da0de72-bedb-4c86-9cc9-905eb129b95d)
- Air — [all and mentions](https://mobbin.com/screens/b3e74362-1af4-4022-bdf2-a56b09d786f3)
- Langdock — [unread and all](https://mobbin.com/screens/dc3adbc9-3ae0-45fd-9f43-c8ab60a19052)
- Causal — [direct action in a notification](https://mobbin.com/screens/9a5e4576-8324-4778-b510-ac081f65311b)
- fal — [direct action in a notification](https://mobbin.com/screens/d7f3f613-38ca-49f3-a382-e51c1f1d435c)
- ClickUp — [archive and done](https://mobbin.com/screens/f1374e47-4168-46b0-baab-445916244ac6)
