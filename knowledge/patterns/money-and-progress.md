# Money and personal progress

Two patterns about numbers that matter personally: **money** (entering amounts, transfers, transaction lists) and
**progress** (goals, streaks, health and fitness metrics). In money, the design challenge is precision, certainty and
the state of the money; in progress, it is motivation without pressure. Both fail when the interface is ambiguous
about what a number means.

## The problem and who has it

- **People sending and receiving money**, often across currencies, sometimes under time pressure, sometimes to new
  recipients.
- **People reviewing their finances**: what came in, what went out, what is pending.
- **People tracking goals**: steps, savings, workouts, learning.

When money interfaces fail: wrong recipients, surprise fees, duplicate payments, panic over pending charges. When
progress interfaces fail: guilt, abandonment after a broken streak, or goals that ignore illness, rest and life.

## Questions to ask before deciding

- **What is the state of the money**: available, held, pending, settled, reversed?
- **What precision is needed**: decimals, rounding, currencies without decimals or with three?
- **What is known at confirmation time**: is the exchange rate guaranteed, for how long?
- **How do people identify recipients**, and how similar can two recipients look?
- **For goals**: what motivates this person, and what happens when they cannot meet the goal for good reasons?

## Entering an amount and transferring

- **The amount is the protagonist**: a large number at the top, a numeric keypad at the bottom, the primary button
  between them or above the keypad ([Wise](https://mobbin.com/screens/8c812490-e9a3-4ed1-b169-a118c88a3c57),
  [KOHO](https://mobbin.com/screens/20bd1b95-09b1-4b90-a7d9-d58cc386a3d5)).
- **Available balance under the field** ("You have 25.00 SGD"), tappable to use it all; amount shortcuts ($10 · $25 ·
  Max, [Base](https://mobbin.com/screens/7c2b104b-ae86-48d3-b5f7-1fbaff5c69e8)).
- **Before continuing, everything it costs and when it arrives**: fee, exchange rate, converted amount, what the
  recipient gets, and "Arrives today" / "in 2 days" ([Zing](https://mobbin.com/screens/11070299-ea95-4554-8adb-af607326223d),
  KOHO). No surprises on the final screen.
- **Choose which figure is fixed**: "You send" or "They receive exactly" (Wise); both fields editable and in sync.
- **The exchange rate with its caveat** ("Includes a conversion margin",
  [PayPal](https://mobbin.com/screens/32159587-552d-4aed-a283-9e8a1e43cf8c)) and how long it is guaranteed.
- **The recipient always visible at the top** (avatar, name, partly hidden account) and an optional note
  ([GoPay](https://mobbin.com/screens/d87fcd47-ca49-4fa6-ba23-054cc6190202)).
- **When the amount is invalid** (over balance or limit), say why next to the field.
- **Review before sending** as its own step; for large amounts, stronger confirmation (biometrics, or an action that
  names the amount: "Send 1,250.00 EUR").
- **Decimal comma or point by region**, with grouping separators while typing.
- **Anti-example**: a calculator with + − × ÷ on a transfer keypad adds complexity to a task that needs precision
  ([Satispay](https://mobbin.com/screens/380db90c-2b07-4021-9ce4-ac9fdecf10af)) — unless splitting bills is the
  purpose, and then it deserves its own mode.

### Amounts and precision

- Show amounts with the currency's correct decimals (JPY has none; some currencies have three).
- Round consistently and say where rounding happens ("Converted amounts are rounded to the cent").
- Distinguish identical symbols ("$" can be many currencies; use "USD", "CAD", "ARS" where ambiguous).
- Never let a formatted display hide the exact value used.

### Reviewing identity and consequences

- **Show the recipient name returned by the bank or system** when available ("Name on account: A. Pereira"), so people
  catch typos in account numbers.
- **Warn about lookalikes**: "You've never sent money to this account. Check the details before sending."
- **State irreversibility** plainly when it applies.

### Uncertain states

| State | Meaning | Display |
| --- | --- | --- |
| Processing | Sent to the network | "Sending · usually under 2 minutes" |
| Pending | Waiting for clearing | "Pending · expected 14 Oct" |
| Held | Funds reserved (card authorization) | "Held: 120.00 EUR · released if not charged" |
| Completed | Settled | "Completed 12 Oct, 10:42" |
| Unknown | No confirmation (timeout) | "We couldn't confirm this transfer yet. Don't send again; we'll update you." |
| Failed / returned | Did not arrive | Reason and what happens to the money |

## Transaction lists

- **Grouped by day** with headers ("Today", "Saturday 27 Jun") and, optionally, the day's total
  ([Monzo](https://mobbin.com/screens/8f921563-4da7-4e2b-98ea-e3e5e47b9229)).
- **Rows**: merchant logo or type icon, a clean name (not the raw bank description), detail in muted text, the amount at
  the end; **income with a + sign** (and a positive color as reinforcement), expenses in the text color rather than
  alarming red.
- **Original and converted currency** when they differ ([Wise](https://mobbin.com/screens/36ef1a77-b3dc-42a0-8fff-220a5714f74f)).
- **Pending separate from completed**, with an action in the row ("Cancel";
  [PayPal](https://mobbin.com/screens/5969e566-58ee-4417-bedc-be826d2a427a)); declines marked with the reason
  ([Careem](https://mobbin.com/screens/0f44880e-aa99-4055-89e2-056c52867c8f)).
- **Search and filters as chips** (type, amount, method, account) and saved views
  ([Mercury](https://mobbin.com/screens/6aa8686b-430d-49dd-a4df-6b9fadcba678)).
- **Category as a colored tag**, editable from the row ([Copilot](https://mobbin.com/screens/39d3efee-7a8a-4fa5-ae15-1065a33dfae1)).
- **An explicit end of the list** ("That's everything",
  [foodpanda](https://mobbin.com/screens/28fee3ea-cf93-47a5-8eaa-5ea289a82822)).
- **Balances**: available, held and pending shown separately when they differ.

## Progress, goals and streaks

- **A ring per goal with the number inside** ("12,018 of 10,000 steps"), and secondary metrics in cards
  ([Fitbit](https://mobbin.com/screens/59bc2882-bb6b-4964-aaa7-00defb0b42a4)).
- **A met goal marked unambiguously**: a check, "115 % of goal", a dashed goal line in the day's chart
  ([Garmin Connect](https://mobbin.com/screens/6bb49866-7232-4604-b0c6-c2a1fb49e058)).
- **Periods as a segmented control** (1 d · 7 d · 4 wk · 1 yr) above the chart.
- **A weekly streak with the days** (completed days filled) rather than just a number
  ([Strava](https://mobbin.com/screens/1c996718-ab94-4247-85b3-80885bab44c9),
  [Cal AI](https://mobbin.com/screens/1c2836f3-bfa9-4d62-bb0b-1ff046f42dd7)). Weekly streaks forgive more than daily
  ones and do not punish one bad day. Weekdays labeled per locale, starting on the locale's first day.
- **A target range instead of an exact number** where appropriate ("Weekly goal: 25–34",
  [Tonal](https://mobbin.com/screens/5e9461c9-d902-4e37-ad82-906753bc7583)).
- **Short context that interprets the data** ("You beat your goal; tomorrow is a good rest day"), with source and time.
- **An encouraging, honest initial state** instead of an empty chart without a message.
- **"Add goal"** at the end of the goals, not hidden in settings
  ([adidas Running](https://mobbin.com/screens/9d27ac65-a9fa-4bad-98e6-3b48462e1337)).

### Motivation without punishment

- **Pause without penalty**: illness, travel, injury — let people pause goals and streaks.
- **Retroactive corrections**: data that synced late or was entered wrong should be fixable without breaking history.
- **Wellbeing over pressure**: avoid guilt messages ("You let your streak die"); avoid variable rewards in health and
  money contexts (see [ethical persuasion](../12-psychology-and-ethical-persuasion.md)).
- **Goals people choose**, adjustable, with realistic defaults.

## Accessibility specifics

- Amounts read completely by screen readers, with sign and currency ("minus 42 euros 50").
- Rings and charts with the value in text; color is not the only signal of a met goal.
- Custom keypads operable by keyboard and screen reader, or the native numeric keyboard used instead.
- Confirmation actions accessible without gestures (an alternative to "swipe to send").

## Copy

- Fees and rates stated before, not after.
- Pending and held explained in plain language.
- Progress messages kind and specific.

## Common mistakes and why they happen

- **Costs revealed on the last screen.**
- **One balance for available, held and pending.**
- **"Failed, try again" for unknown outcomes.**
- **Red for every expense.**
- **Daily streaks that punish rest.**

## Worked comparison: a transfer to a new recipient

**Weak.** Amount, then the account number, then "Send". The fee appears in the confirmation email. The exchange rate
changed between screens. The recipient's name is not shown; one digit is wrong.

**Strong.** "You send 500.00 EUR · They receive 2,684.15 BRL · Fee 3.10 EUR · Rate guaranteed for 30 min · Arrives
tomorrow". The bank returns "Name on account: Ana P. Pereira" for confirmation. "First transfer to this account — check
the details." The button reads "Send 503.10 EUR".

## How to verify and measure

- **Measure** transfer errors, recipient corrections, support contacts about fees and pending states, duplicate
  payments; for progress, goal adjustments, pauses and retention after a missed day.
- **Test** with several currencies and locales, with screen readers, and with people under time pressure.

## References

- Wise — [amount as protagonist and fixed figure](https://mobbin.com/screens/8c812490-e9a3-4ed1-b169-a118c88a3c57)
- KOHO — [amount and arrival time](https://mobbin.com/screens/20bd1b95-09b1-4b90-a7d9-d58cc386a3d5)
- Base — [amount shortcuts](https://mobbin.com/screens/7c2b104b-ae86-48d3-b5f7-1fbaff5c69e8)
- Zing — [costs before continuing](https://mobbin.com/screens/11070299-ea95-4554-8adb-af607326223d)
- PayPal — [exchange rate caveat](https://mobbin.com/screens/32159587-552d-4aed-a283-9e8a1e43cf8c)
- GoPay — [recipient visible](https://mobbin.com/screens/d87fcd47-ca49-4fa6-ba23-054cc6190202)
- Satispay — [anti-example: calculator keypad](https://mobbin.com/screens/380db90c-2b07-4021-9ce4-ac9fdecf10af)
- Monzo — [grouped by day](https://mobbin.com/screens/8f921563-4da7-4e2b-98ea-e3e5e47b9229)
- Wise — [original and converted currency](https://mobbin.com/screens/36ef1a77-b3dc-42a0-8fff-220a5714f74f)
- PayPal — [pending with action](https://mobbin.com/screens/5969e566-58ee-4417-bedc-be826d2a427a)
- Careem — [declines with reason](https://mobbin.com/screens/0f44880e-aa99-4055-89e2-056c52867c8f)
- Mercury — [search and filter chips](https://mobbin.com/screens/6aa8686b-430d-49dd-a4df-6b9fadcba678)
- Copilot — [editable category](https://mobbin.com/screens/39d3efee-7a8a-4fa5-ae15-1065a33dfae1)
- foodpanda — [end of list](https://mobbin.com/screens/28fee3ea-cf93-47a5-8eaa-5ea289a82822)
- Fitbit — [goal rings](https://mobbin.com/screens/59bc2882-bb6b-4964-aaa7-00defb0b42a4)
- Garmin Connect — [goal met](https://mobbin.com/screens/6bb49866-7232-4604-b0c6-c2a1fb49e058)
- Strava — [weekly streak](https://mobbin.com/screens/1c996718-ab94-4247-85b3-80885bab44c9)
- Cal AI — [weekly streak](https://mobbin.com/screens/1c2836f3-bfa9-4d62-bb0b-1ff046f42dd7)
- Tonal — [target range](https://mobbin.com/screens/5e9461c9-d902-4e37-ad82-906753bc7583)
- adidas Running — [add goal](https://mobbin.com/screens/9d27ac65-a9fa-4bad-98e6-3b48462e1337)
