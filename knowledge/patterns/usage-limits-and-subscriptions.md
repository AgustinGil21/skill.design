# Usage, limits and subscriptions

Usage pages, limits, upgrade prompts and cancellation are where a product's economics meet its users. People need to
understand what they are consuming, what it will cost, what happens at the limit, and how to change or leave their
plan. Done honestly, these screens build trust; done badly, they generate surprise bills, angry support tickets and
chargebacks.

## The problem and who has it

- **People using a metered product** (AI credits, storage, messages, seats) who need to know whether they will run
  out.
- **Buyers and finance** who pay the bill and are often not the users.
- **People hitting a limit** in the middle of work.
- **People leaving** who should be able to cancel without a fight.

## Questions to ask before deciding

- **What are the units**, and do people understand them (credits, tokens, minutes)? How do they translate into money
  and into tasks ("about 40 meetings")?
- **What is estimated, accrued and billed**, and when does each update?
- **Are limits hard (blocking) or soft (overage charges)?** Are there budgets people can set?
- **How fast can usage change?** A fixed 80 % warning may arrive too late if consumption accelerates.
- **What happens to data and features on downgrade** or when a limit is reached?
- **Who should be notified**: the user, the admin, the billing contact?

## Cost model: making units meaningful

| Unit | Problem | Translation |
| --- | --- | --- |
| Tokens, credits | Abstract | "About 40 meeting summaries left this month" |
| Storage (GB) | Hard to relate to content | "About 1,200 photos at current average size" |
| API calls | Developer-only meaning | Usage by endpoint and by key |
| Seats | Clear, but changes with team | "14 of 15 seats used" with who |

Show both the unit and its meaning when the unit is abstract.

## Anatomy and behavior: the usage page

- **One row or card per limited resource** (seats, projects, runs, tokens, storage) with what it is, "You used X",
  percentage, "X / limit" and period ("per day", "per month")
  ([StackAI](https://mobbin.com/screens/a2976bbf-d4f1-407f-8c56-88779215f037),
  [HubSpot](https://mobbin.com/screens/e01319c5-9a17-41fe-9ae0-782aeeeee9e2)).
- **"X left" is more useful than "you used X"** when people decide whether it is enough ("49 posts available · 1
  used", [Remote](https://mobbin.com/screens/63031996-b350-4fef-a2d4-3c86e9fa40e1)).
- **A budget with a reset date** ("0.13 / 10.00 USD · resets in 28 days · Edit budget",
  [OpenAI](https://mobbin.com/screens/2bf4f941-a9a7-4308-aa0c-864135823830)).
- **Spending over time** with a period selector and breakdown by feature, person or model
  ([Obvious](https://mobbin.com/screens/80d9fa7d-5ed7-44e8-b1b3-2756cbc330a8),
  [LangChain](https://mobbin.com/screens/86925057-b5b9-4c85-9787-9dcbee1d7b76)).
- **A detailed log** of consumption with date, category, what generated it and amount, linking to the source
  ([Gumloop](https://mobbin.com/screens/690a3101-806b-4ddb-b670-0bc190897916)).
- **A period statement**: included in plan, usage charges, remaining balance, daily average
  ([Cofounder](https://mobbin.com/screens/e9c05b3d-54e8-44db-9995-15ab9a95078a)).
- **Configurable limits** per person, agent or project, with "No limit" as an explicit value.
- **Where the data comes from** when there may be delays or differences ("Calculated from runs", LangChain).

### Pending, estimated and billed

| State | Meaning | Display |
| --- | --- | --- |
| Estimated | Projected from current rate | "Projected for this month: ~42.00 USD" |
| Accrued | Used but not yet invoiced | "Used so far: 18.40 USD" |
| Pending | Charges being processed | "Pending: 3.20 USD (updates within 1 hour)" |
| Billed | On an invoice | "Invoiced on 1 Oct: 37.80 USD" |

A balance that looks sufficient can be misleading if pending charges are not included. Say what is included.

## Meters

- A neutral bar until near the limit, a warning near it and an error at 100 % — always with text, not only color.
- Tabular figures; clear units (do not mix "credits" and "tokens" without explaining the relationship).
- **If data is unavailable**, "Not available" and why — never a bar at zero that looks real.
- An exhausted quota is not a disconnected account (see
  [real state and verification](../08-real-state-and-verification.md)).

## Limit warnings

- **Before reaching the limit**: a warning in the place of work, without blocking. Base it on **velocity** as well as
  percentage: "At this rate you'll run out on 18 Oct, before your reset on 1 Nov."
- **At the limit**: explain what is blocked, from when work can continue, and the options (wait, upgrade, use another
  account). Do not hide the reset date behind "Upgrade".
- **Never block in the middle of work without saving it.**
- **Notify the right person**: users and admins, by their preferred channel.
- **Free trials**: days remaining visible, and what happens at the end (what is lost and what is not, whether a charge
  happens automatically).

### Limits, budgets and warnings

| Mechanism | Behavior | Use when |
| --- | --- | --- |
| **Hard limit** | Stops usage | Protecting against runaway costs, free plans |
| **Soft limit with overage** | Continues and charges | Business-critical usage |
| **Budget** | Person-set cap with alerts | People who want control |
| **Warning only** | Informs, does not stop | Low risk |

## Asking people to upgrade

- **At the moment people touch the feature**, saying what the feature does and which plans include it
  ([Typeform](https://mobbin.com/screens/9821f587-0516-4d25-88ca-7391518b6326),
  [Circle](https://mobbin.com/screens/e2e3b12a-c0a9-4874-89b1-8f159c0907f4)).
- **The concrete reason** ("Your plan allows one newsletter",
  [Ghost](https://mobbin.com/screens/dde09f1b-a7d1-4cd8-9dcf-ec8d6af8a217)) and the price of the step up.
- **A dignified way out**: "Continue with the free plan" / "Later" visible at a readable level
  ([Mixpanel](https://mobbin.com/screens/3e027c63-0ec7-4abd-b5bd-513d979c3925),
  [Elicit](https://mobbin.com/screens/9a85989e-62da-4b19-8121-6aa72fb87740)).
- **The benefit of what is unlocked**, not a list of fifteen generic features.
- **Do not ask repeatedly** after people decline.

## Consequences of changing plans

- **Upgrade**: prorated charge today, new renewal amount.
- **Downgrade**: features lost, what happens to resources over the new limits (read-only? archived? deleted after a
  date?), effective date. Never delete data silently.
- **Buyer different from user**: the user can request an upgrade from the admin ("Ask Laila to upgrade") instead of
  hitting a dead end.

See [plans and pricing tables](plans-and-pricing-tables.md).

## Cancelling

- **Findable** in plan settings, with its own button
  ([Disney+](https://mobbin.com/flows/07613377-f2a2-45b1-8440-c422450b41ab),
  [Open](https://mobbin.com/flows/f9200ba9-accf-4eb9-a210-0c50d7375f99)).
- **Pause** as an alternative when it exists, next to cancel, not hidden.
- **A short, optional reason survey** (say "Optional"); at most one retention offer, without guilt.
- **After cancelling**: until when access continues, confirmation by email, "Reactivate" in one click, and the account
  status updated ("Cancelling · access until 1 Sep").
- **Cancellation by the same channel** used to subscribe: if people signed up online, they cancel online. Subscriptions
  through app stores are cancelled in the store; say so and link to it.
- **Not allowed**: cancellation only by phone or chat, endless steps, deceptive buttons, guilt.

## States and edge cases

- Usage data delayed; partial data during outages.
- Usage spikes from automations or mistakes (alert immediately).
- Several currencies; taxes added at billing.
- Shared pools of credits across a team.
- Grace periods and past-due states.

## Accessibility specifics

- Meters with text values and labels ("Storage: 8.2 of 10 GB used").
- Warnings announced when they appear in the work area.
- Upgrade dialogs dismissible and focus-managed.

## Copy

- Units translated into tasks.
- Warnings with dates and rates, not only percentages.
- Cancellation copy calm and factual.

## Common mistakes and why they happen

- **Abstract units without meaning.**
- **Balances that ignore pending charges.**
- **Fixed-percentage warnings** that arrive too late.
- **Reset dates hidden behind upsells.**
- **Downgrades that delete data silently.**
- **Cancellation mazes** — retention pressure.

## Worked comparison: an apparently sufficient balance

**Weak.** "Credits: 120 left" at 09:00. An automation runs every hour and consumes 30 credits; charges are processed
with a 2-hour delay. At 11:30 the account hits zero mid-task; the display still says 60.

**Strong.** "Credits: about 60 available (120 minus 60 pending) · At the current rate, you'll run out around 11:00.
Automation 'Lead enrichment' uses most credits. Pause it or add credits." The admin also gets an email.

## How to verify and measure

- **Measure** surprise-bill tickets, limit hits during work, upgrade conversions and their refund rate, cancellation
  completion and reactivation.
- **Test** comprehension: can people say how much they will pay this month?

## References

- StackAI — [usage per resource](https://mobbin.com/screens/a2976bbf-d4f1-407f-8c56-88779215f037)
- HubSpot — [usage per resource](https://mobbin.com/screens/e01319c5-9a17-41fe-9ae0-782aeeeee9e2)
- Remote — [what's left](https://mobbin.com/screens/63031996-b350-4fef-a2d4-3c86e9fa40e1)
- OpenAI — [budget with reset date](https://mobbin.com/screens/2bf4f941-a9a7-4308-aa0c-864135823830)
- Obvious — [spending over time](https://mobbin.com/screens/80d9fa7d-5ed7-44e8-b1b3-2756cbc330a8)
- LangChain — [spending breakdown and data source](https://mobbin.com/screens/86925057-b5b9-4c85-9787-9dcbee1d7b76)
- Gumloop — [detailed usage log](https://mobbin.com/screens/690a3101-806b-4ddb-b670-0bc190897916)
- Cofounder — [period statement](https://mobbin.com/screens/e9c05b3d-54e8-44db-9995-15ab9a95078a)
- Typeform — [upgrade at the feature](https://mobbin.com/screens/9821f587-0516-4d25-88ca-7391518b6326)
- Circle — [upgrade at the feature](https://mobbin.com/screens/e2e3b12a-c0a9-4874-89b1-8f159c0907f4)
- Ghost — [concrete reason](https://mobbin.com/screens/dde09f1b-a7d1-4cd8-9dcf-ec8d6af8a217)
- Mixpanel — [dignified way out](https://mobbin.com/screens/3e027c63-0ec7-4abd-b5bd-513d979c3925)
- Elicit — [dignified way out](https://mobbin.com/screens/9a85989e-62da-4b19-8121-6aa72fb87740)
- Disney+ — [cancellation flow](https://mobbin.com/flows/07613377-f2a2-45b1-8440-c422450b41ab)
- Open — [cancellation flow](https://mobbin.com/flows/f9200ba9-accf-4eb9-a210-0c50d7375f99)
