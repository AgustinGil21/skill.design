# Developer tools: API keys, webhooks and logs

Developer-facing interfaces — API keys, webhooks, logs, technical setup — are used by people who are technical but
busy, often switching between environments, often under pressure when something breaks in production. Good developer
tools make scope and environment unmistakable, make dangerous actions previewable, and make diagnosis possible without
guessing.

## The problem and who has it

- **Developers integrating** for the first time: they need a working example quickly.
- **Operators running integrations**: they rotate keys, investigate failures, respond to incidents.
- **Security and admins**: they audit who has access to what.

When these tools fail: keys leak or get revoked while in use, production is changed when testing was intended, webhooks
fail silently, and debugging means opening a support ticket.

## Questions to ask before deciding

- **Is the person exploring or operating production?**
- **Which environment** is active (test, staging, production), and how obvious is it?
- **What can a key access**, across projects and organizations?
- **What depends on a key** before it is revoked?
- **Are webhook deliveries safe to retry** (could they cause duplicate effects on the receiving side)?

## First integration vs. ongoing operation

| Moment | Needs | Design |
| --- | --- | --- |
| First integration | A working example fast | Guided setup with the person's values pre-filled, copyable code, a "Test connection" |
| Ongoing operation | Visibility and control | Lists with last use, scopes, environments; logs; alerts |
| Incident | Diagnosis | Delivery logs, error explanations, retry and replay |

## Environments and scope, always visible

- **The environment is part of the interface**: a persistent badge ("Test mode" / "Production"), distinct colors and
  wording, and confirmation when switching for destructive actions.
- **Keys carry their environment** in their prefix and label (`sk_test_…`, `sk_live_…`).
- **Scope across projects**: say which project or organization a key belongs to.

## API keys

- **A list of keys** with name, creator, permissions, created date, expiry, **last used** and status
  ([Copy.ai](https://mobbin.com/screens/2a8a06af-b6da-4fb7-9b93-03b10d4a87a5),
  [Midday](https://mobbin.com/screens/9e457f8a-1f4f-4446-af95-1941664bc0aa)). The key is shown truncated
  (`sk-…vXg8`) so it can be recognized.
- **Create**: a name (to know what it is for), permissions and an optional expiry.
- **Show the key only once**, with a prominent notice ("You won't be able to see it again"), a **Copy** button that
  confirms ("Copied") and an explicit close ("I've saved it" / "Close and hide forever",
  [Gamma](https://mobbin.com/screens/3762fc5a-915b-4783-a48b-01f01c95c49a),
  [ElevenLabs](https://mobbin.com/screens/f636cd71-171c-4266-9dd8-ff6412264b84)).
  If the person loses it, the answer is to create a new one — say so.
- **Permissions per resource** with levels (None / Read / Write), a summary ("3 permissions selected"), and the minimum
  necessary as the default ([OpenAI](https://mobbin.com/screens/701c79c6-3a8d-4309-a6f5-373634664a6d)).
- **Never show full keys** in lists, logs, URLs or errors.
- **Documentation and a usage example** next to it ("See API documentation").

### Credential lifecycle

| Action | Design |
| --- | --- |
| Create | Name, scopes, environment, expiry; shown once |
| Use | Last-used time and source (IP, service) |
| Rotate | Create a new key, keep the old one valid for a stated overlap period, then revoke |
| Expire | Warn owners before expiry by email and in the product |
| Revoke | Preview impact first |

### Previewing the impact of revoking

"Revoke" should show what depends on the key: "Used 1,248 times in the last 24 h, mostly from 'billing-service'
(203.0.113.4). Integrations using it will stop working immediately." Offer rotation instead when it is in active use.

## Webhooks and technical integrations

- Destination URL, events to listen to (with descriptions), a signing secret (shown once), status.
- **Send a test event** and see the response.
- **Delivery log** with HTTP status, duration, payload sent and response, and "Resend".

### Retries and duplicates

- Automatic retries with backoff, with the schedule visible ("Retry 3 of 5 in 10 min").
- **Resending can cause duplicate effects** on the receiving side; document that deliveries can arrive more than once
  and include an event ID for deduplication; warn on manual resend.
- Disabled endpoints after repeated failures should notify the owner.

### Diagnosis oriented to causes

Showing raw JSON is not diagnosis. Translate common failures:

| Symptom | Likely cause shown |
| --- | --- |
| 401 from the receiving server | "Your endpoint rejected the signature — check the signing secret" |
| Timeout | "Your endpoint took longer than 10 s to respond" |
| 404 | "The URL doesn't exist — was the endpoint moved?" |
| No deliveries at all | "No events matched your subscription in the last 24 h" |

## Logs and audit trails

- Filters by date, type, person and result; text search.
- Each row: when (absolute and relative, with time zone), who, what, on what, result, and an expandable detail with the
  formatted, copyable JSON.
- Export (CSV/JSON) of the filtered range.
- Live follow (tail) with automatic pause when scrolling up.
- Sensitive values masked in logs.

## Step-by-step technical setup

- Numbered collapsible steps (1. Generate key · 2. Configure file · 3. Done) with each step's status
  ([Profound](https://mobbin.com/screens/f8e0b41f-c1db-41f8-b11b-cfe61dfaf8d4)).
- Code blocks with copy, selectable language and the person's values already filled in.
- Verify at the end ("Test connection") instead of leaving people guessing.

## States and edge cases

- Keys created by people who left the organization.
- Keys with no recent use (suggest revoking).
- Rate limits reached: say which limit and when it resets.
- Webhooks failing because of the receiving server vs. because of the platform.

## Accessibility specifics

- Code blocks are readable by screen readers, with copy buttons named ("Copy curl example").
- Status of keys and deliveries in text, not only color.
- Logs as tables with headers; expandable rows operable by keyboard.

## Copy

- Precise and technical where appropriate, but each error explains its likely cause and next step.
- Environment names consistent everywhere.

## Common mistakes and why they happen

- **Ambiguous environments** — test and production look identical.
- **Revoke without impact preview.**
- **Raw errors without interpretation.**
- **Full keys in logs.**
- **Resend without duplicate warnings.**

## Worked comparison: a valid connection that receives no events

**Weak.** The webhook shows "Active". The developer waits; nothing arrives. The log is empty. They open a ticket.

**Strong.** The webhook page shows "Active · No deliveries in 24 h" and explains: "No events matched your
subscription. You're subscribed to 'invoice.paid' in Test mode; your test account has no paid invoices. Send a test
event?" The test event arrives and appears in the log.

## How to verify and measure

- **Measure** time to first successful API call, test-connection success, revocation of active keys (accidents),
  webhook failure rates and time to resolve.
- **Test** with a developer new to the product, and an incident simulation.

## References

- Copy.ai — [API key list](https://mobbin.com/screens/2a8a06af-b6da-4fb7-9b93-03b10d4a87a5)
- Midday — [API key list](https://mobbin.com/screens/9e457f8a-1f4f-4446-af95-1941664bc0aa)
- Gamma — [show key once](https://mobbin.com/screens/3762fc5a-915b-4783-a48b-01f01c95c49a)
- ElevenLabs — [show key once](https://mobbin.com/screens/f636cd71-171c-4266-9dd8-ff6412264b84)
- OpenAI — [permissions per resource](https://mobbin.com/screens/701c79c6-3a8d-4309-a6f5-373634664a6d)
- Profound — [step-by-step technical setup](https://mobbin.com/screens/f8e0b41f-c1db-41f8-b11b-cfe61dfaf8d4)
