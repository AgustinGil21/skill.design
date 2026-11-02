# Slop catalog: flows and dark patterns

Generated flows copy what is common, and much of what is common in sign-up, paywalls, checkout, cancelling and
notifications is manipulative. These items are banned unconditionally when they deceive or pressure, and banned by
default otherwise. Read with the [catalog rules](README.md).

Background: [psychology and ethical persuasion](../12-psychology-and-ethical-persuasion.md) ·
[sign-in and accounts](../patterns/sign-in-and-accounts.md) · [onboarding](../patterns/onboarding.md) ·
[usage, limits and subscriptions](../patterns/usage-limits-and-subscriptions.md) ·
[checkout](../patterns/checkout-and-scheduling.md) · [privacy](../patterns/privacy-and-data-controls.md) ·
[notifications](../patterns/notifications.md) · [gamification](../patterns/badges-and-gamification.md) ·
[trials and cancelling](../patterns/cancellation-and-retention.md) · [wallets and crypto](../patterns/wallets-and-crypto.md) ·
[feeds](../patterns/feeds-and-social-posting.md).

Laws change; several of these items are also legal requirements in some markets (consumer protection and
subscription rules in the EU, the UK and several US states). Check the current rules for the markets the product
serves; never treat this file as legal advice.

## Sign-up and sign-in

| Tell | Why it is a problem | Do instead |
| --- | --- | --- |
| Account required before showing any value | People leave; data collected before trust | Let people try or browse first; ask for an account when there is something to save |
| Sign-up form with name, company, role, phone and team size | Data grab | Email (or a provider) first; ask the rest later, when it changes something |
| Password rules shown only after failing | Frustration | Rules visible before typing; allow paste and password managers; offer passkeys |
| "Sign up with Google" as the only option | Excludes people and creates lock-in | Several methods, including email |
| Email verification that blocks everything | Stops people at the door | Let them continue; verify before it matters |
| Pre-checked marketing consent | Consent that is not consent | Unchecked, separate, specific |
| "I agree to the Terms and the Privacy Policy and to receive marketing" in one checkbox | Bundled consent | Separate choices |

## Onboarding and paywalls

| Tell | Why it is a problem | Do instead |
| --- | --- | --- |
| A long quiz that ends in a paywall with no way to see the product | Sunk-cost pressure | Say early that a subscription is needed and what is free |
| Paywall whose close button is tiny, grey, delayed or hidden | Obstruction | A visible close from the start |
| "Limited-time offer" with a countdown that resets | False urgency | Real deadlines only, stated with the date |
| Trial that hides the price after the trial | Surprise charge | State the price, the charge date and how to cancel next to the start button |
| Trial reminder toggle off by default | Designed for forgotten trials | Reminder on by default, or always sent |
| Weekly price shown to make annual look cheap, with the annual total in small text | Misleading anchor | Show what is charged and when, at the same size |
| "Most popular" on the plan the company prefers | Invented social proof | Recommend by fit, with reasons |
| Annual plan pre-selected without saying it charges a year up front | Surprise | Make the commitment explicit |

## Checkout and payments

| Tell | Why it is a problem | Do instead |
| --- | --- | --- |
| Fees, taxes or shipping revealed at the last step | Drip pricing; a leading reason for abandonment | The total, as early as it can be known |
| Pre-added items (insurance, donations, extras) in the cart | Sneaking | Offer them unchecked |
| Forced account creation to buy | Abandonment; Baymard's research names it as a common reason | Guest checkout as a prominent option |
| "Pay" button that does not show the amount | People commit without the number | "Pay €48.20" |
| Success screen while the payment is still pending | Lies about state | Pending, confirmed and failed as distinct states |
| "Only 2 left!" or "12 people are looking" without real data | Fake scarcity and social pressure | Real stock and real activity, or nothing |

## Subscriptions and cancelling

| Tell | Why it is a problem | Do instead |
| --- | --- | --- |
| Cancel only by phone, chat or email when people subscribed online | Obstruction; illegal in several markets | Cancel online, in the same place and with no more steps than subscribing |
| Cancel link buried under "Manage" → "Account" → "More" | Hidden exit | "Cancel subscription" visible in plan settings |
| Required "reason for leaving" survey before cancelling | Toll before exit | Optional survey, after or beside the cancel action |
| Several retention screens in a row | Attrition by fatigue | At most one offer, with "Cancel subscription" equally visible on the same screen |
| Retention offer with the primary button "Keep my benefits" and cancel as a grey link | Asymmetric choice | Equal visual weight for staying and cancelling |
| Guilt copy ("Your progress will be lost forever", "Goodbyes are tough", sad mascot) | Confirmshaming | Neutral facts: what changes, when access ends, what is kept |
| Cancelling a trial ends access immediately while paid users keep it until the period ends | Punishes cancelling early | Access until the end of the trial |
| A retention offer with a countdown ("expires in 23h 59m") shown while cancelling | Manufactured urgency at the moment of leaving | A plain offer with its terms, or none |
| Sad mascots, crying characters or "Goodbyes are tough" on the cancel screen | Emotional pressure | Facts: end date, data kept, how to come back |
| No confirmation after cancelling | Uncertainty, repeated attempts | On-screen and emailed confirmation with the end date, and a one-step way to resubscribe |
| App-store subscriptions with no explanation of where to cancel | Dead end | Explain and link to the store's subscription page |

## Consent and privacy

| Tell | Why it is a problem | Do instead |
| --- | --- | --- |
| Cookie banner with "Accept all" highlighted and "Reject" hidden behind settings | Asymmetric consent | "Accept" and "Reject" with equal weight on the first layer |
| Permission requests on first launch for everything | People deny or accept blindly | Ask at the moment of need, with the reason |
| "We value your privacy" followed by data sharing by default | Contradiction | Defaults that protect; plain explanation |
| Account deletion only by contacting support | Obstruction | Self-service deletion with clear consequences and export |

## Engagement and notifications

| Tell | Why it is a problem | Do instead |
| --- | --- | --- |
| Push notifications enabled by default for marketing | Spam; people turn off all notifications | Transactional by default, marketing opt-in |
| Notification copy that guilts ("You haven't practiced in 3 days 😢") | Guilt as a retention tool | Useful reminders the person asked for, with easy control over frequency |
| Streaks that reset to zero after one missed day | Punishment; anxiety; harmful for health, wellbeing and young people | Weekly goals, rest days, freezes, "best streak" kept |
| Infinite feeds with autoplay and no end | Compulsive use; under regulatory scrutiny in the EU | A natural end ("You're up to date"), autoplay off by default, time controls |
| Red badges on everything to pull people back | Badge fatigue; anxiety | Badges only for things that need the person |
| Variable rewards (random prizes, loot boxes) | Compulsion; harmful for children and money | Predictable, earned progress |
| Hearts, lives or energy that stop the core activity to sell refills | Interrupts people when they try hardest; a paywall disguised as a game rule | Let the core activity continue; charge for clear extras |
| Streak repairs and freezes sold for currency | Sells relief from anxiety the product created | Forgiveness built in, earned by activity |
| Mascot notifications that guilt ("These reminders don't seem to be working…") | Guilt as retention | Reminders at the person's chosen time, factual, easy to stop |
| Leaderboards public by default | Unwanted exposure | Opt-in, among people the person chose |
| Email unsubscribe that needs login or several steps | Obstruction | One-click unsubscribe |

## Money and risky actions

| Tell | Why it is a problem | Do instead |
| --- | --- | --- |
| Confetti or "Success!" after sending money that is still pending | Misreports the state | State the real status and what happens next |
| Truncated recipient addresses or account numbers in the review step | Address-poisoning and fraud rely on matching the first and last characters | Show the full identifier, highlight changes, verify the name when the rail allows it |
| Warnings that read like legal boilerplate | Ignored | A short, specific warning in context ("You have never paid this account") |
| "Confirm" with no summary of amount, recipient and fees | Blind commitment | A review step with everything that matters |
| "Copy to clipboard" for recovery phrases or private keys | Other apps can read the clipboard | Avoid it, or warn and clear it after a short time |
| Generic security sheets shown on every send | People learn to dismiss them | One specific warning when something is unusual (new recipient, lookalike address, unlimited approval) |

## Before calling a flow done

- [ ] Declining, closing, leaving and cancelling are as visible and as easy as accepting.
- [ ] Every price shows the total, when it is charged and how to stop it.
- [ ] No countdown, scarcity or social-pressure element without real data behind it.
- [ ] No guilt, shame or loss framing in declining or cancelling.
- [ ] Consent choices are separate, unchecked and equal in weight.
- [ ] States match reality: pending is pending, not success.
- [ ] The rules of the markets the product serves were checked (or flagged as not checked).
