# Templates and automation builders

Templates let people start from something instead of nothing; automation builders let them make the product do work
on its own. Both promise to save effort and both can cost more than they save: a template that needs everything
replaced, an automation that sends duplicate messages to customers at 3 a.m. This pattern covers galleries, choosing
the right automation representation, step contracts, testing without real effects, publishing and versions, and
debugging.

## The problem and who has it

- **People starting something new** (a document, a project, a form) who want a good starting point.
- **People automating repetitive work**: notifications, data sync, follow-ups, approvals.
- **Operations people** who must understand and fix automations someone else built.

When these fail: templates are abandoned after a look, automations misfire silently, nobody can tell why a step did
not run, and editing a live automation breaks it for everyone.

## Questions to ask before deciding

- **How different are people's needs?** A template that fits 80 % or one that fits nobody well?
- **What will the person have to replace** in a template, and is that obvious?
- **How complex are the automations people need**: one trigger and one action, or branches and loops?
- **What happens when a step fails or runs twice?**
- **Can automations be tested without real effects** (sending emails, charging cards)?
- **Who maintains automations** after their creator leaves?

## Alternatives and how to choose

### Automation representation

| Need | Representation | Why | Cost |
| --- | --- | --- | --- |
| "When X happens, do Y" | **Rule form** ("When a form is submitted, send an email to…") | Readable as a sentence | Limited logic |
| A short sequence | **Step list** (vertical list of steps) | Easy to scan and reorder | Branches get awkward |
| Branches, parallel paths, loops | **Node graph on a canvas** | Shows complex structure | Hard to read, hard with keyboard |
| Recurring simple schedules | **Schedule settings** on the object | No builder needed | Not general |

Most people need rules or lists; graphs serve power users. Offering a graph for "send an email when a form is
submitted" makes simple things look hard.

## Template galleries

- **Categories on the side** (by use case, industry or integration, with counts) and **search at the top**
  ([Todoist](https://mobbin.com/screens/e7d37224-c886-4246-817f-baaf8c9f239a),
  [Bonsai](https://mobbin.com/screens/ad10aec7-7826-40f8-a24c-c583e2ca8dc6),
  [StackAI](https://mobbin.com/screens/4de81a4a-1e45-4aa4-834e-261d8a5b26f4)).
- **"Start from scratch" as the first card**, at the same level as templates (Bonsai "Blank form", StackAI "New
  project"; [Attio](https://mobbin.com/screens/4114d03e-1be6-4ec2-96ba-f52f21faf159) puts it at the bottom with a
  shortcut).
- **Cards**: a real preview of the result, name, one line about what it is for and what it includes ("1 project · 1
  filter · 2 labels"), use-case tags, author.
- **On hover**: "Use template" and "Preview" ([PandaDoc](https://mobbin.com/screens/24cf9d2e-ec3d-440b-9131-b5ea95b31f15),
  [Kit](https://mobbin.com/screens/e68501f6-d531-44f4-95b7-17020742a3a2)).
- **Source tabs**: All / Yours / Your organization's / For you (StackAI); saved favorites.
- **Curated sections** at the top ("Featured", "Popular", "Seasonal") with "See all"
  ([Adobe Express](https://mobbin.com/screens/695b842e-f913-440f-8223-de3aa242f976)).
- **Faceted filters** when there are many (format, style, size, price).
- **On choosing**: create with example data marked as such and go straight to editing, not to a list.

### Is the template a good fit?

- Say what the person will need to change ("Replace the 6 example clients and your logo").
- Say what it requires (integrations, plan, data).
- Show costs if any (credits, paid fonts).
- Templates in the person's language and regional formats (a German invoice template, not a translated US one).

## Automation builders

### Anatomy and behavior

- **A canvas with nodes from top to bottom** (trigger → steps → conditions with Yes/No branches → end), with "+"
  between nodes to insert ([HoneyBook](https://mobbin.com/screens/a228b19a-d72d-457a-8c00-0100daf4d98f),
  [Twenty](https://mobbin.com/screens/539342b6-0804-4bdb-ac10-719181d348a3)).
- **Each node**: an icon by type, a human title ("Wait 5 minutes", "File viewed within 1 day") and a type subtitle;
  **errors marked on the node** ([HoneyBook](https://mobbin.com/screens/a228b19a-d72d-457a-8c00-0100daf4d98f)).
- **A side panel to configure the selected node**, in plain language with help for that step
  ([Plain](https://mobbin.com/screens/3c99a739-393a-4af7-b5bc-68e70a732cae)).
- **Start by choosing the trigger** as cards ("When an event happens", "On a date";
  [Pipedrive](https://mobbin.com/screens/e30a2008-4540-47cd-b439-966ae8349342)).
- **Flow status visible at the top**: Draft / Active, "Unsaved changes", "This flow isn't published · Publish"
  ([Attio](https://mobbin.com/screens/23cbd6b3-c15a-461f-876c-ae6d25706326)).
- **Test before activating** ("Run test") and a **run history** tab ("Executions",
  [n8n](https://mobbin.com/screens/2abe0186-60e5-4b17-8202-0abeabf875f8)) with each step's result.
- **Canvas controls** (zoom, fit, minimap, undo) at the bottom; drag to pan.
- **Variables from earlier steps** insertable as chips (`{{weather.location}}`), not typed by hand
  ([Tines](https://mobbin.com/screens/06e11170-b950-42af-a52c-9cb3c0094199)).
- **A guided example at the start** with a working flow and steps to complete it (Tines "Welcome").
- **Simple / advanced mode** when audiences differ ("Go to basic builder",
  [ManyChat](https://mobbin.com/screens/53179bd2-ea8d-4454-88c6-cf6f9840bf9f)).

### The contract of each step

For each step, the builder should make clear:

- **Input**: what data it receives and from where.
- **Output**: what it produces, available to later steps.
- **Effects**: what it changes in the world (sends, writes, charges).
- **Failure behavior**: stop the flow, skip, retry (how many times), or alert someone.
- **Idempotency**: whether running it twice causes a duplicate effect.

### Simulate vs. execute

"Run test" must say whether it executes real actions:

| Mode | Effects |
| --- | --- |
| **Simulate** | No external effects; shows what would happen with sample or real input |
| **Test with real data, safe actions** | Reads real data, sends only to the builder's own email |
| **Execute** | Real effects |

Label buttons accordingly ("Simulate", "Send test to me", "Run now").

### Publishing and versions

- Editing an active automation should create a **draft** that does not affect running instances until published.
- **Versions** with who published what and when, and the ability to roll back.
- **In-flight runs**: say which version they use when a new version is published.

### Debugging

- A run history with each step's input, output, duration and status.
- **Re-run from a failed step** when safe.
- **Explain failures in plain language** ("The 'Send email' step failed: the contact has no email address"), with
  technical detail collapsed.
- **Alerts** to an owner when an automation fails repeatedly.

### Dependencies and ownership

- Automations depend on connections, permissions and fields. When one breaks (a disconnected account, a deleted field,
  a creator who left), mark the automation as broken and notify its owner.
- Show who owns each automation and allow transferring ownership.

## States and transitions

- Draft, active, paused, broken (with reason), archived.
- Running, succeeded, failed, partially succeeded, retried, skipped.
- Template: loading preview, applied with example data, example data replaced.

## Edge cases

- An automation triggering itself (loops): detect and stop.
- Bursts of triggers (an import creating 1,000 records): batch or rate-limit, and warn.
- Time zones in scheduled automations; daylight saving changes.
- Templates with content in another language than the workspace.

## Accessibility specifics

- A canvas needs an alternative list view that is navigable by keyboard and screen reader, with the same editing
  capabilities.
- Node errors conveyed in text.
- Variable chips have accessible names and can be inserted by keyboard.
- Template previews have text descriptions.

## Copy

- Nodes titled as actions in plain language.
- Test buttons say exactly what they do.
- Failure messages name the step and the cause.

## Common mistakes and why they happen

- **A graph builder for simple rules** — powerful tools look impressive.
- **Tests that send real emails.**
- **Editing live automations directly.**
- **Silent failures** with no alerts.
- **Templates full of irrelevant example content.**

## Worked comparison: an automation that sends duplicate messages

**Situation:** "When an order is updated, send the customer a shipping confirmation."

**Weak.** The trigger fires on every update (address correction, internal note, status change). Customers receive
three "Your order has shipped" emails. Nobody notices for a week because there is no run history.

**Strong.** The builder offers the trigger "When order status changes to Shipped", explains the difference with "When
an order is updated", marks the email step as "sends to customers, not idempotent", and the run history shows each
send. A duplicate-protection option ("Send at most once per order") is on by default.

## How to verify and measure

- **Measure** template use and completion (created vs. abandoned), automation activation, failure rates, time to fix
  failures, duplicates.
- **Test** building a simple rule and a branched flow, with keyboard-only list view, and debugging a failure.

## References

- Todoist — [template categories](https://mobbin.com/screens/e7d37224-c886-4246-817f-baaf8c9f239a)
- Bonsai — [blank first and categories](https://mobbin.com/screens/ad10aec7-7826-40f8-a24c-c583e2ca8dc6)
- StackAI — [template sources](https://mobbin.com/screens/4de81a4a-1e45-4aa4-834e-261d8a5b26f4)
- Attio — [start from scratch](https://mobbin.com/screens/4114d03e-1be6-4ec2-96ba-f52f21faf159)
- PandaDoc — [template hover actions](https://mobbin.com/screens/24cf9d2e-ec3d-440b-9131-b5ea95b31f15)
- Kit — [template hover actions](https://mobbin.com/screens/e68501f6-d531-44f4-95b7-17020742a3a2)
- Adobe Express — [curated sections](https://mobbin.com/screens/695b842e-f913-440f-8223-de3aa242f976)
- HoneyBook — [node canvas and errors](https://mobbin.com/screens/a228b19a-d72d-457a-8c00-0100daf4d98f)
- Twenty — [node canvas](https://mobbin.com/screens/539342b6-0804-4bdb-ac10-719181d348a3)
- Plain — [node configuration panel](https://mobbin.com/screens/3c99a739-393a-4af7-b5bc-68e70a732cae)
- Pipedrive — [trigger cards](https://mobbin.com/screens/e30a2008-4540-47cd-b439-966ae8349342)
- Attio — [flow status and publish](https://mobbin.com/screens/23cbd6b3-c15a-461f-876c-ae6d25706326)
- n8n — [executions history](https://mobbin.com/screens/2abe0186-60e5-4b17-8202-0abeabf875f8)
- Tines — [variables as chips](https://mobbin.com/screens/06e11170-b950-42af-a52c-9cb3c0094199)
- ManyChat — [simple and advanced modes](https://mobbin.com/screens/53179bd2-ea8d-4454-88c6-cf6f9840bf9f)
