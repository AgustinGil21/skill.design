# Team invites, help and feedback

Three patterns about people around the product: **inviting** colleagues into a workspace, **helping** people when they
are stuck, and **asking** them for feedback. All three are easy to make annoying — invitations that fail silently,
help that sends people in circles, surveys that interrupt work — and all three shape whether people trust the product
enough to bring others into it.

## The problem and who has it

- **Admins and team leads** invite people, choose roles and manage costs.
- **Invited people** receive emails or links and must join the right workspace.
- **People who are stuck** need an answer quickly, in context, sometimes from a human.
- **Product teams** need feedback that represents reality, not just the happiest or angriest users.

## Questions to ask before deciding

- **Does inviting someone cost money** or change the plan?
- **What can each role do**, and how will the inviter understand it?
- **Are invitations restricted** (company domains, SSO, approval)?
- **What do people get stuck on most**, and can self-service solve it?
- **When is asking for feedback appropriate**, and from whom (not only those who succeeded)?

## Invitations

### Alternatives

| Situation | Option | Cost |
| --- | --- | --- |
| A few known colleagues | Email invitations with roles | Requires knowing emails |
| Many people from the same company | Domain-based joining or SSO provisioning | Admin setup; less control per person |
| Open collaboration | Invite link with role and expiry | Links can be forwarded |
| Bulk onboarding | CSV import or directory sync | Mapping and error handling |

### Anatomy and behavior

- **An email field with chips**: paste several separated by comma, space or Enter; each becomes a removable chip,
  validated in place ([Loom](https://mobbin.com/screens/8116a277-83e6-4dfe-a0f0-ea3f114f76cd),
  [Postman](https://mobbin.com/screens/cf4e94fe-c396-438e-8155-450e0edd96ba)). Alternative: rows of email + role with
  "+ Add another" ([Plane](https://mobbin.com/screens/130bedb4-39d9-4f45-829f-44bae2809187)).
- **Roles with a one-line description** inside the selector ("Member: creates tasks and sees what others do",
  [Emergent](https://mobbin.com/screens/7705fc6b-efdd-4784-bbc8-d07d743ea2c1)). With many roles, a side panel with the
  description of the chosen ones ([Stripe](https://mobbin.com/screens/1e0f6e41-7b86-4d2f-8649-31174798903f)). See
  [permissions, identity and scope](permissions-identity-and-scope.md).
- **An invite link** as an alternative, stating which role it grants, when it expires and how to revoke it (Loom:
  "expires in 7 days · Delete · Copy").
- **Invitation expiry** stated ("Valid for 14 days", [Dub](https://mobbin.com/screens/ac1488f1-e4ef-45b0-94da-ab4ec135e145)).
- **Skippable during onboarding**: "I'll do it later" visible at the same level.
- **Cost before inviting** when seats are paid ("Requires a paid plan", "+10.00 USD/month per person"), with the
  total change.
- **Pending invitations visible** in the members list with "Resend" and "Cancel invitation".

### The invitation lifecycle

| State | What the inviter sees | What the invitee experiences |
| --- | --- | --- |
| Sent | "Pending · sent 2 days ago" | An email in their language with who invited them and to what |
| Bounced | "Couldn't deliver to ana@exmple.com · Edit" | — |
| Already a member | "Laila Haddad is already a member" (before sending) | — |
| Has an account with another email | — | Option to join with their existing account |
| Blocked by domain policy | "Only @lisboacafe.pt addresses can join" | A clear message instead of a dead link |
| Accepted | Moves to members | Lands in the workspace, ideally at what they were invited to |
| Expired | "Expired · Resend" | "This invitation expired. Ask Laila for a new one." |

Report results per address after sending: "3 invitations sent. 1 couldn't be delivered."

## Help

### Self-service or a human?

| Situation | Best channel |
| --- | --- |
| A common how-to question | Contextual articles and search |
| A problem with the person's specific data or account | A human, with context attached |
| Urgent (money, access, outage) | Fast channel (chat or phone), stated hours |
| Bug reports | A form that captures context automatically (page, browser, recent errors) |
| Emotional or complex situations | A human, early |

- **Never trap people in self-service loops**: if two answers did not help, offer a human.
- **Send context with the request** so people do not repeat themselves.

### Anatomy and behavior

- **A fixed place** (a "?" in the bar or footer) that opens contextual help without leaving the work
  ([Google Meet](https://mobbin.com/screens/ed541031-5ab5-44e0-8cf8-7074b06836ea): search, articles for that screen,
  troubleshooting). Consistent help location is a requirement (WCAG 3.2.6, A).
- **Search first**, then topics, then human contact ([Teachable](https://mobbin.com/screens/89ed5000-ddb7-4132-81a5-612ff3c978bb),
  [DoorDash](https://mobbin.com/screens/cbfbe73b-9ba7-40d9-a200-8ad4cc10abcd)).
- **Channels by urgency**, with hours and response times ("Call us, 24 h" for urgent; "Send a message, Mon–Fri 8–16"
  for the rest; DoorDash) — in the person's time zone.
- **My requests** with status (open, closed) and last update (Slack, DoorDash).
- **An optional short tour** with its duration ("2 min", [Melio](https://mobbin.com/screens/7fbaecc4-6b79-4f31-ae86-9d783549cd63)).
- **Articles suggested** by the current screen and error; "Was this helpful?" at the end of each article.
- **Help in the person's language**, or a clear note when an article is only available in another language.

### Help during a blocked task

When people are blocked (an error, a missing permission), help should appear where they are, not on a separate site:
the error itself links to the relevant article or contact, with the error details pre-filled.

## Feedback

- **At the right moment**: after using a feature (not on entering), once, and without interrupting a task in progress.
- **One question plus an optional comment** (five faces or a 1–5 / 1–7 scale with labeled ends) and nothing more
  ([Wix](https://mobbin.com/screens/541b3c98-6a42-4f10-95d1-8c570e423ae7),
  [Mural](https://mobbin.com/screens/b14567dc-3fee-4eb5-b488-aa725d8bc145)).
- **Specific**: "How did the editor work for you today?" beats "How likely are you to recommend us?".
- **Skip or close** always available; if closed, do not ask again soon.
- **Contact and research participation optional and unchecked**
  ([Confluence](https://mobbin.com/screens/c9cb1a2f-4db9-4167-bcbc-2e82cd5b126d)).
- **Accessible scales**: labeled buttons (not only emojis), text at the ends ("Not at all satisfied" / "Very
  satisfied"), keyboard navigable.
- **Thank in one line and close**; if the comment asks for something, say what happens to it.
- **A permanent "Send feedback"** button for people who want to give feedback unprompted.

### Sampling and bias

- Asking only after successes overstates satisfaction; asking only after errors understates it. Sample across
  situations, or say which situation the feedback represents.
- Frequent users answer more; weight or segment results.
- **Close the loop**: tell people when their feedback led to a change.

## States and edge cases

- Bulk invites with partial failures.
- Invitees who already belong to the workspace under another email.
- Help requests submitted offline (queue them).
- Feedback widgets on small screens (do not cover content).

## Accessibility specifics

- Chip inputs announce added and removed addresses; errors per chip are announced.
- Help panels are reachable by keyboard and do not trap focus.
- Feedback scales are radio groups with labels.

## Copy

- Invitation emails: who invited, to what, what they can do, when it expires, in the invitee's language when known.
- Help: answers in plain language with steps.
- Feedback questions: specific, neutral, short.

## Common mistakes and why they happen

- **Silent invitation failures** — bounces never surfaced.
- **Hidden seat costs.**
- **Help that never reaches a human.**
- **Surveys that interrupt work** — scheduled by time instead of by moment.
- **Biased feedback samples treated as truth.**

## Worked comparison

**Same task:** a team lead invites five colleagues.

**Weak.** One email field per person, a generic "Member" role with no explanation, "Invitations sent!" even though one
address had a typo and another person was already a member; the plan silently adds five paid seats.

**Strong.** Paste five addresses as chips; one flagged "Already a member", one flagged as invalid; roles with
descriptions; "Adds 3 paid seats (+30.00 USD/month)"; after sending, "3 invitations sent"; pending invitations listed
with resend and cancel.

## How to verify and measure

- **Measure** invitation acceptance, bounce rate, time to first action of invited people; help search success, contact
  rate after viewing articles; feedback response rate and its representativeness.
- **Test** invitations with real email clients, in several languages, with domain restrictions.

## References

- Loom — [email chips and invite link](https://mobbin.com/screens/8116a277-83e6-4dfe-a0f0-ea3f114f76cd)
- Postman — [email chips](https://mobbin.com/screens/cf4e94fe-c396-438e-8155-450e0edd96ba)
- Plane — [rows with roles](https://mobbin.com/screens/130bedb4-39d9-4f45-829f-44bae2809187)
- Emergent — [roles with descriptions](https://mobbin.com/screens/7705fc6b-efdd-4784-bbc8-d07d743ea2c1)
- Stripe — [role descriptions panel](https://mobbin.com/screens/1e0f6e41-7b86-4d2f-8649-31174798903f)
- Dub — [invitation expiry](https://mobbin.com/screens/ac1488f1-e4ef-45b0-94da-ab4ec135e145)
- Google Meet — [contextual help](https://mobbin.com/screens/ed541031-5ab5-44e0-8cf8-7074b06836ea)
- Teachable — [search-first help](https://mobbin.com/screens/89ed5000-ddb7-4132-81a5-612ff3c978bb)
- DoorDash — [channels by urgency](https://mobbin.com/screens/cbfbe73b-9ba7-40d9-a200-8ad4cc10abcd)
- Melio — [short optional tour](https://mobbin.com/screens/7fbaecc4-6b79-4f31-ae86-9d783549cd63)
- Wix — [one-question feedback](https://mobbin.com/screens/541b3c98-6a42-4f10-95d1-8c570e423ae7)
- Mural — [one-question feedback](https://mobbin.com/screens/b14567dc-3fee-4eb5-b488-aa725d8bc145)
- Confluence — [optional research participation](https://mobbin.com/screens/c9cb1a2f-4db9-4167-bcbc-2e82cd5b126d)
