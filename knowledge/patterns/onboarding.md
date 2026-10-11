# Onboarding

The goal of onboarding is not to "show the product". It is to get a person to their first real result as soon as
possible — the moment the product proves its value with their own data — and to make clear what comes next.
Onboarding covers sign-up, setup questions, the first screen, guidance, sample data and activation, and it differs a
lot between a person trying a product alone and an organization rolling it out to a team.

## The problem and who has it

- **Individuals trying a product** decide in minutes whether it is worth their time.
- **Invited people** arrive into an existing workspace with a task already in mind ("review this document").
- **Administrators implementing for a team** need setup, integrations, permissions and data import before anyone gets
  value — sometimes over weeks.
- **Returning people** who abandoned setup and come back days later.

When onboarding fails, people leave before seeing value, configure things wrongly, or complete every setup step and
still never use the product for real.

## Questions to ask before deciding

- **What is the first real value for each type of person**, and how long does it take today?
- **What must be configured before value is possible**, and what can wait?
- **What information does the person have at hand**, and what will they need to look for?
- **Who else must act** (an admin approving, a colleague accepting an invite, IT connecting SSO)?
- **Is setup individual or organizational?**
- **Which questions actually change the experience**, and which are only for marketing?

## Alternatives and how to choose

| Situation | Option | Why | Cost |
| --- | --- | --- | --- |
| Value possible immediately | **Drop people into the product** with a first action highlighted | Fastest to value | Less guidance |
| Value needs a few choices | **Short setup** (1–3 screens) that changes what is shown | Tailored start | Each question adds friction |
| Value needs data | **Import, templates or sample data** | Avoids the blank page | Sample data can confuse if not labeled |
| Organizational setup | **Setup checklist for admins**, with progress, saved across sessions | Long, multi-person work | Must handle dependencies and waiting |
| Invited person with a task | **Go straight to the task**, with light context | Matches their intent | Less product education |
| Complex product | **Learn by doing** with contextual hints | Retained better than tours | Requires designing hints in context |

## When to use what

- Guided tours of many steps on first launch are mostly skipped and forgotten; prefer learning by doing.
- Personalization questions that do not change anything are a cost with no benefit to the person.
- Sample data helps people see what a full product looks like, but must be clearly labeled and removable.

## Anatomy and behavior

### Sign-up

- **The minimum to create the account**: email plus password, or "Continue with Google / Apple / Microsoft". Name and
  company later, when needed.
- **Beside or below, what they get** ("Your plan includes…",
  [TheyDo](https://mobbin.com/flows/836f1a88-b18b-4de3-a4be-7cd5c366eb94)); discreet social proof.
- **Live password strength** next to the field.
- **Email verification that does not block**: let people in and verify in parallel, or a 6-digit code with paste and
  autofill support. Block only what requires verified identity (inviting others, payments).
- See [sign-in and accounts](sign-in-and-accounts.md).

### Personalization questions

- **Only if they truly change something** (templates, examples, language, what is shown first). Questions that only
  serve marketing go at the end, optional and skippable.
- **One screen per topic, one to three questions each**, with a progress bar
  ([TheyDo](https://mobbin.com/flows/836f1a88-b18b-4de3-a4be-7cd5c366eb94)).
- **Chips** to choose a role or kind of work, with "Or type it" as a way out — better than a 20-option dropdown.
- **"You can change this anytime"** under choices that look permanent (workspace name, URL).
- **Avoid a single giant form** with ten checkboxes
  ([Clay](https://mobbin.com/flows/2400b4a4-33a7-4fed-b865-249983fda759) comes close to that limit).

### The first screen after entering

- **A greeting plus two to four ways to start** as cards ("Start from scratch", "Use a template", "Import"),
  [TheyDo](https://mobbin.com/flows/836f1a88-b18b-4de3-a4be-7cd5c366eb94).
- **Templates with previews**, so people do not start from a blank page.
- **A "Getting started" checklist** with progress ("2 of 5"), each step with its button ("Start", "Finish",
  "Completed"), which can be hidden ("Don't show again")
  ([Apollo](https://mobbin.com/flows/24008106-068d-4871-b191-6b273c32a304),
  [Fabric](https://mobbin.com/flows/772503ea-af2e-49a2-8455-92ad96f10dc5)).
- **Progress also at the bottom of the sidebar** while incomplete (Apollo "Onboarding hub 8%", Langdock "62% done"),
  with a way to dismiss it.
- **Help resources** (a short tutorial, templates, community) in a side column, not covering the work
  ([Clay](https://mobbin.com/flows/2400b4a4-33a7-4fed-b865-249983fda759)).

### Guided tours and hints

- Prefer **learning by doing** (the first real step, with contextual help) over a seven-bubble tour nobody reads.
- If there is a tour: three or four steps at most, skippable, restartable from help, each step pointing at something
  that can be used.
- **Contextual hints** the first time someone enters a feature, not all on day one (see
  [micro-interactions](micro-interactions.md)).

### Sample data

- A sample project or content clearly marked "Example", removable in one action, so the screen is not empty and people
  see what a full product looks like.
- **From example to own data**: make it easy to replace sample content ("Replace with your data · Import"), and do not
  mix sample records into reports or exports.

## Individual vs. organizational onboarding

| Aspect | Individual | Organizational |
| --- | --- | --- |
| Duration | Minutes | Days or weeks |
| Who acts | One person | Admin, IT, team leads, members |
| First value | Own first result | First team workflow running |
| Blockers | Missing information | Approvals, SSO, integrations, data migration |
| Design | Short setup, templates, first action | Checklist with owners, saved progress, invitations, status of dependencies |

For organizational setup:

- **Assign steps to people** ("IT: connect SSO") and show who is pending.
- **Show dependencies** ("Members can be invited after SSO is connected").
- **Let people work in parallel** where possible.
- **Celebrate the team milestone**, not every checkbox.

## What to ask and when to block

- Ask only what is needed for the next step; ask the rest when it becomes relevant (a tax ID before the first invoice).
- Block only when proceeding would cause harm or a broken experience; otherwise allow skipping with a reminder.
- Let people resume exactly where they left, on any device.

## Activation vs. retention

- **Activation** is reaching first value; **retention** is coming back. Completing a setup checklist is neither.
- Define activation per product as a behavior ("created and sent the first invoice"), not a setup step ("filled in the
  profile").
- Some products take weeks to show value (analytics after data accumulates). Bridge the wait with expectations ("Your
  first weekly report arrives on Monday") and early partial value.

## States and transitions

- Abandoned mid-setup: on return, "Welcome back. You were setting up payments — continue?".
- Waiting on someone else: show what is pending and who is responsible.
- Skipped steps: available later from the checklist and settings.
- Errors in setup (an integration fails): explain, keep progress, offer to continue other steps.

## Edge cases

- People invited to several workspaces at once.
- Invited people who already have an account with another email.
- Setup in a language different from the organization's default.
- Accessibility users facing tours that trap focus.

## Accessibility specifics

- Tours and hints are keyboard reachable, dismissible, do not trap focus and are announced.
- Checklists use lists with completion states in text.
- Progress indicators have text equivalents ("2 of 5 complete").
- Timed or animated onboarding respects reduced motion and has no time limits.

## Copy

- First screens speak to the person's goal, not the product's features.
- Steps say what the person will get ("Connect your bank to see payments automatically").
- "You can change this later" where true.
- In other languages, keep onboarding copy native, not literally translated marketing.

## Common mistakes and why they happen

- **Long sign-up forms** — because sales wants qualification data up front.
- **Tours instead of doing** — because tours are easy to add without changing the product.
- **Questions that change nothing.**
- **Treating checklist completion as activation.**
- **Ignoring invited users** who arrive with a specific task.

## Worked comparison

**Same product:** an invoicing tool.

**Weak onboarding.** Sign-up asks for name, company, size, role, industry, phone and how they heard about the product;
then a 7-step tour; then an empty dashboard. Many people leave before creating an invoice.

**Strong onboarding.** Sign-up with email or Google. One question: "Who do you invoice? Companies / Individuals /
Both" (it changes the default invoice template and tax fields). The first screen: "Create your first invoice" with a
sample client and line items ready to edit, plus "Import clients". Tax ID requested only when the first invoice is
sent. Activation is defined as "first invoice sent"; it is measured along with time to that point.

## How to verify and measure

- **Measure** time to first value, share of people reaching it, drop-off per step, and retention of activated people.
- **Separate** individual sign-ups from invited people and organizational setups.
- **Test** first-run with people who have never seen the product, with their own data when possible.

## References

- TheyDo — [sign-up, personalization and first screen](https://mobbin.com/flows/836f1a88-b18b-4de3-a4be-7cd5c366eb94)
- Clay — [setup form and help column](https://mobbin.com/flows/2400b4a4-33a7-4fed-b865-249983fda759)
- Apollo — [getting started checklist](https://mobbin.com/flows/24008106-068d-4871-b191-6b273c32a304)
- Fabric — [getting started checklist](https://mobbin.com/flows/772503ea-af2e-49a2-8455-92ad96f10dc5)
