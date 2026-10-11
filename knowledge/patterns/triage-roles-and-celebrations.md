# Triage inboxes, roles and celebrations

Three patterns about work flowing through people: **triage inboxes** (email, support, requests) where items arrive and
must be handled; **roles and permission matrices** that decide who can do what; and **moments of achievement** when
work is done. They connect: who handles an item depends on roles, and finishing the queue is the moment a product may
celebrate — or should not.

For the deeper model of effective permissions, inheritance and delegation, see
[permissions, identity and scope](permissions-identity-and-scope.md).

## The problem and who has it

- **Agents, operators and anyone with an inbox** process items quickly, often all day, often with a team.
- **Administrators** configure roles that affect many people's access at once.
- **Everyone** finishes things; some products celebrate, and some celebrations are noise.

## Questions to ask before deciding

- **How many items arrive, how fast, and how urgent are they?**
- **Is handling individual or shared** (several operators on the same queue)?
- **What does "done" mean**: answered, resolved, archived, closed by the customer?
- **How do roles map to real responsibilities**, and how many people does a role change affect?
- **Is a completed item truly finished** or only a step in a longer process?

## Triage inboxes

### Alternatives

| Situation | Option |
| --- | --- |
| Personal email-like flow | List + reading pane, keyboard triage |
| Team support queue | Shared queue with assignment, status, priority and SLA |
| Requests needing approval | Approval queue with batch actions (see [batches and approvals](batches-approvals-and-captions.md)) |
| Low volume | A simple list with filters |

### Anatomy and behavior

- **Three columns**: folders and views on the start side (Open · Later · Done, with counts), the list in the middle, the
  conversation on the end side; plus a collapsible fourth panel for details when there is context
  ([Front](https://mobbin.com/screens/570723aa-6d10-4a00-935b-7ecb459c46a5),
  [Plain](https://mobbin.com/screens/6b03543c-d8bd-403c-a3eb-3c43783a0a23),
  [Intercom](https://mobbin.com/screens/b1a806f1-b212-45a8-b525-fea3fa01b961)).
- **List rows**: sender, subject, the start of the text, relative time, unread in bold with an indicator, tags and
  priority.
- **Triage actions by hand and by keyboard**: archive, snooze with quick dates and a calendar, mark read, assign; on
  hover, configurable ([Notion Mail](https://mobbin.com/screens/f008f21c-d507-4499-8573-036fd4cecb9d)).
- **A fixed shortcuts panel to learn** while using, which can be turned off
  ([Superhuman](https://mobbin.com/screens/0e821e22-026a-4641-a91b-ac63b0c9e4bc)).
- **Case history inside the thread**: status, priority and assignment changes as small events between messages (Plain).
- **A summary at the top of long threads** with "Was this helpful?" (Plain), and a suggested draft to approve or reject
  ([Lemni](https://mobbin.com/screens/31c9c03a-dff3-4ab4-9710-b2990d13adbe)).
- **Internal notes distinct from replies** (another color and "Only your team sees this").
- **Reply at the bottom** with the chosen channel (Email ▾) and the send shortcut shown.

### Moving to the next item: speed vs. accidents

Many inboxes move automatically to the next item after archiving. It is fast, and it can cause accidents: a second
keypress meant for the archived item lands on the next one.

- Make auto-advance a preference, or advance only after explicit triage actions.
- Show clearly which item is now active.
- Offer undo for triage actions, with the item name ("Archived 'Refund for order 4412' · Undo").
- Keep focus in a predictable place for keyboard and screen reader users.

### Shared queues: collisions and responsibility

- **Assignment** makes responsibility explicit; unassigned items have a visible owner of last resort.
- **Collision detection**: "Marco is viewing / replying to this" to avoid double replies.
- **SLA and waiting time** visible per item, in the team's time zone.
- **Status vs. location**: "Done" for the operator may not mean "resolved" for the customer; keep them distinct.

## Roles and permissions

### Matrix design

- **Permissions as rows grouped by area** (collapsible), **roles as columns**
  ([StackAI](https://mobbin.com/screens/4a80b0e2-e462-407e-8842-d0fd15510391),
  [Workable](https://mobbin.com/screens/685952a1-2424-45a1-856d-f5dfc82680e5)).
- **Each permission with a line explaining what it enables** ("Share agents with groups you're not a member of";
  [Langdock](https://mobbin.com/screens/66158752-4b06-43f5-ab8c-0bee0cfe6ea3)).
- **Levels instead of yes/no** where they apply (No access · View · Edit), with icon and text, not only color
  ([Vanta](https://mobbin.com/screens/6dd83a18-ede6-44a5-adc5-2ebff239c7de)).
- **Fixed permissions visible but not editable** (the owner always has everything: disabled checkboxes with an
  explanation).
- **Role detail in a side panel**: description, how many people have it (a link), permissions by area with "Partial
  access", and "Duplicate role" to create a custom one ([Airwallex](https://mobbin.com/screens/20f6cf65-6657-48c5-8ab9-448a58540679)).
- **Creating a role as a short wizard** (Name → Information access → Permissions → People;
  [Remote](https://mobbin.com/screens/bd9deea8-912f-4247-986a-9430d4640f0e)).
- **Explicit "Save changes" and "Restore defaults"**, because a change affects many people; say how many ("Affects 34
  people").
- **Dependent permissions** (edit requires view) turn on automatically and say so.

### Previewing the impact of a role change

Before saving changes to a role:

- Show who is affected and what they gain or lose ("12 people will lose access to Billing").
- Warn when someone would lose access they are using right now.
- Prevent locking out the last administrator.

## Moments of achievement

### What deserves celebration

| Event | Celebrate? | How |
| --- | --- | --- |
| Inbox at zero | Lightly | A calm message and illustration ([Front](https://mobbin.com/screens/d45e3c73-35a6-4917-b5fa-50c84e4b65d2), [ClickUp](https://mobbin.com/screens/c64ec457-7285-4a1f-886d-a149b8a0d49b)) |
| A rare milestone (finishing a course, completing setup) | Yes | A moment of delight, maybe confetti ([Codecademy](https://mobbin.com/screens/c827145c-7d03-4771-908c-6a6c4be2abc7)) |
| A routine, repeated action | No | A plain confirmation |
| An administrative step in a longer process | No | Say what is next; the real outcome has not happened |

- **Celebrate what the person chose to achieve**, in proportion.
- **Show what was done** (a list with checks, "100% complete", a score;
  [Remote](https://mobbin.com/screens/8054afb4-36e4-4e84-81e3-c4c6d30380fd),
  [Duolingo](https://mobbin.com/screens/5c97a190-7800-4f7d-b672-c7259474a2b7)).
- **A clear next step** ("What's next?", "Go to dashboard", "Review") — achievement is not a dead end.
- **Undo stays available** even when celebrating (ClickUp "Notification deleted · Undo").
- **Respect reduced motion**: no confetti or large animations when it is on.

### Apparent success with work still pending

The most misleading celebration is for something that looks finished and is not: "Application submitted 🎉" when
documents are still missing; "All caught up!" when items were only snoozed. Celebrate only completed outcomes, and say
what remains.

## States and edge cases

- New items arriving while triaging (insert without moving the current item).
- Items reassigned while open by someone else.
- Role changes taking effect for people currently signed in (refresh their access, explain).
- Celebrations in other cultures and languages: avoid idioms and culturally specific symbols.

## Accessibility specifics

- Keyboard shortcuts documented, remappable or disableable (2.1.4), and not conflicting with screen reader keys.
- Focus moves predictably after triage actions; announcements say what happened and what is now active.
- Permission matrices as tables with row and column headers; levels conveyed by text.
- Celebrations announced politely, without motion when reduced motion is on.

## Copy

- Triage confirmations name the item.
- Permission descriptions say what people can do, in task terms.
- Celebrations short, specific and followed by a next step.

## Common mistakes and why they happen

- **Auto-advance accidents.**
- **Permission matrices without explanations.**
- **Role changes without impact preview.**
- **Celebrating routine actions** — gamification copied from consumer apps.
- **"Done" that is not resolved.**

## Worked comparison

**Same team:** five support agents sharing a queue.

**Weak.** No assignment; two agents reply to the same customer with different answers; archiving moves to the next
ticket and an agent's second "E" archives an unread urgent ticket; the queue shows confetti at zero even though half the
tickets were snoozed.

**Strong.** Assignment on open; "Marco is replying" indicator; archive advances only when the agent opts in, with an
undo naming the ticket; zero state reads "No open tickets · 6 snoozed until tomorrow".

## How to verify and measure

- **Measure** handling time, double replies, reopened tickets, undo use after triage actions, permission-related support
  requests.
- **Test** keyboard triage, role changes with real teams, and celebrations with reduced motion.

## References

- Front — [three-column inbox](https://mobbin.com/screens/570723aa-6d10-4a00-935b-7ecb459c46a5)
- Plain — [inbox with case history and summary](https://mobbin.com/screens/6b03543c-d8bd-403c-a3eb-3c43783a0a23)
- Intercom — [inbox](https://mobbin.com/screens/b1a806f1-b212-45a8-b525-fea3fa01b961)
- Notion Mail — [triage actions](https://mobbin.com/screens/f008f21c-d507-4499-8573-036fd4cecb9d)
- Superhuman — [shortcuts panel](https://mobbin.com/screens/0e821e22-026a-4641-a91b-ac63b0c9e4bc)
- Lemni — [suggested draft](https://mobbin.com/screens/31c9c03a-dff3-4ab4-9710-b2990d13adbe)
- StackAI — [permission matrix](https://mobbin.com/screens/4a80b0e2-e462-407e-8842-d0fd15510391)
- Workable — [permission matrix](https://mobbin.com/screens/685952a1-2424-45a1-856d-f5dfc82680e5)
- Langdock — [permission descriptions](https://mobbin.com/screens/66158752-4b06-43f5-ab8c-0bee0cfe6ea3)
- Vanta — [permission levels](https://mobbin.com/screens/6dd83a18-ede6-44a5-adc5-2ebff239c7de)
- Airwallex — [role detail panel](https://mobbin.com/screens/20f6cf65-6657-48c5-8ab9-448a58540679)
- Remote — [create role wizard](https://mobbin.com/screens/bd9deea8-912f-4247-986a-9430d4640f0e)
- Front — [inbox zero](https://mobbin.com/screens/d45e3c73-35a6-4917-b5fa-50c84e4b65d2)
- ClickUp — [calm completion with undo](https://mobbin.com/screens/c64ec457-7285-4a1f-886d-a149b8a0d49b)
- Codecademy — [rare milestone](https://mobbin.com/screens/c827145c-7d03-4771-908c-6a6c4be2abc7)
- Remote — [what was done](https://mobbin.com/screens/8054afb4-36e4-4e84-81e3-c4c6d30380fd)
- Duolingo — [score and progress](https://mobbin.com/screens/5c97a190-7800-4f7d-b672-c7259474a2b7)
