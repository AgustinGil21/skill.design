# Failed and uncertain payments

When a payment fails, the first question in the person's mind is not "why?" but "did I lose my money?". This pattern
covers how to answer that question honestly, how to distinguish a confirmed decline from an unknown outcome before
offering a retry, how to recover the purchase, and how to handle recurring charges that fail.

Complements [checkout and scheduling](checkout-and-scheduling.md), [money and progress](money-and-progress.md) and
[empty, loading and error states](empty-loading-and-error-states.md).

## The problem and who has it

- **Buyers** whose card was declined, whose bank asked for confirmation, or whose connection dropped while paying.
- **Subscribers** whose renewal failed because a card expired.
- **Businesses** losing sales and customers, and handling duplicate charges and chargebacks.

When this is handled badly: people pay twice, abandon a purchase they wanted, lose a cart, or lose access to a
service without warning.

## Questions to ask before deciding

- **Does the system know whether money was taken?** Declined, authorized-then-voided, captured, or unknown?
- **Is the reason known**, and can the person act on it?
- **Is retrying safe?** Could a retry create a second charge?
- **What is at stake if the purchase is lost** (a limited item, a booking, a subscription)?
- **For recurring payments**: how long until service is affected, and who should be told?

## Confirmed decline vs. unknown outcome

| Outcome | What the system knows | What to show | Retry? |
| --- | --- | --- | --- |
| **Declined** | No money taken | "Your bank declined the payment. You weren't charged." | Yes, with another method or after fixing the cause |
| **Authorization failed after a hold** | A hold may appear temporarily | "You weren't charged. If you see a pending amount, your bank will release it within [time]." | Yes |
| **Unknown** (timeout, lost connection) | Not known yet | "We couldn't confirm your payment. Don't pay again — we're checking with your bank." | Not until the status is known |
| **Charged, but the order failed** | Money taken, nothing delivered | "You were charged but your order wasn't completed. We're refunding 42.00 EUR (3–5 business days) — or we can complete the order now." | No; offer to complete or refund |

Never show "Payment failed, try again" when the outcome is unknown.

## Anatomy and behavior

- **Say what happened to the money first**: "You weren't charged", or "If the card ••2652 was debited, it will be
  returned within 24 h" — the question that causes the most anxiety
  ([Zomato](https://mobbin.com/screens/2225c0f4-21e4-4ebb-a71f-1cf8aa070700),
  [GoPay](https://mobbin.com/screens/bfe3c74e-626b-45e9-809c-e67594c1a7d6)).
- **The reason when known** ("Your bank declined the transaction", "Insufficient funds", "Card expired") with what to
  do for each; when unknown, say so and suggest the likely causes
  ([Kraken](https://mobbin.com/screens/8ba824e1-ab12-4510-93cb-80092cdc74b6)).
- **Two clear ways forward**: "Try again" and "Use another payment method"; the amount and the order stay visible.
- **Keep what was being bought**: the cart, booking or form are intact on return.
- **An alternative that saves the purchase** when one exists ("Order now and pay on delivery";
  [Swiggy](https://mobbin.com/screens/e08b3475-36cb-42e1-bdac-fe046f07e2b0)).
- **Calm tone without blame**; no jokes about money problems.
- **Anti-examples**: a notice that overlaps "Processing payment…" with no action
  ([Honest Greens](https://mobbin.com/screens/a298e48b-aec3-4ab8-8e84-975c2b0a96e9)); a single "OK" that leaves the
  person with no path ([PayPal](https://mobbin.com/screens/37ec5e8d-89e2-4d64-bd82-ae9855d83d35),
  [Klima](https://mobbin.com/screens/17faf8bd-c567-42cf-9fc3-32b2a450a4ff)).

### Decline reasons and actions

| Reason | Message (by function) | Action |
| --- | --- | --- |
| Insufficient funds | The bank declined for funds | Another method |
| Expired card | The card's expiry date has passed | Update card |
| Incorrect details | A detail didn't match (security code, postal code) | Edit details |
| Bank requires authentication | The bank needs confirmation | Retry with authentication |
| Fraud prevention | The bank blocked it to protect the account | Contact bank, or another method |
| Unknown | The bank didn't give a reason | Another method, or contact the bank |

Some decline reasons should not be shown in full for security reasons; keep messages useful without exposing
fraud-detection details.

## Recurring payments that fail

- **A notice on the account and in the relevant place** with the amount, the date and "Update card" as the primary
  action ([Warby Parker](https://mobbin.com/screens/1011a84c-072f-494a-ae2e-66691a7c22cf)).
- **How long until service is affected**: "We'll try again on 14 Oct. If it fails, your plan pauses on 21 Oct."
- **Notify the billing contact**, not only the user, by email.
- **Dunning sequence**: a few clear reminders before suspension, not daily pressure.
- **What happens on suspension**: data kept, read-only access, how to reactivate.

## Tracking the money

After any failure, people need to know where their money is:

- A payment detail page with status history ("Authorized 10:41 · Voided 10:42").
- Expected refund times stated by method.
- A support path pre-filled with the payment reference.

## States and edge cases

- Bank authentication abandoned midway.
- Returning to the app after the bank app, in another tab.
- Partial payments (split between gift card and card) where one part fails.
- Currency conversion holds that differ from the final charge.

## Accessibility specifics

- Errors announced and associated with the payment method.
- Retry and alternative actions keyboard reachable and named.
- No time limits that expire while people fetch another card, or a clear extension.

## Copy

- Money status first, cause second, action third.
- No blame ("Your card was declined", not "You entered a bad card").
- In every language, use the local banking vocabulary.

## Common mistakes and why they happen

- **"Try again" on unknown outcomes** — causing double charges.
- **Losing the cart** after a failure.
- **Generic errors** because the payment provider's codes were not mapped.
- **Suspending without warning** on recurring failures.

## Worked comparison

**Weak.** A connection drops after "Pay". The screen says "Payment failed. Try again." The person pays again; both
payments go through. The refund takes a week.

**Strong.** "We couldn't confirm your payment yet. Don't pay again — we're checking with your bank. This usually takes
less than a minute." Thirty seconds later: "Payment confirmed. Order #8841 is placed." If it had failed: "Your bank
declined the payment. You weren't charged. Try another card."

## How to verify and measure

- **Measure** duplicate charges, recovered purchases after failure, recurring payment recovery, chargebacks, support
  contacts about payment status.
- **Test** with payment provider test scenarios: declines by reason, timeouts, authentication abandoned.

## References

- Zomato — [money status first](https://mobbin.com/screens/2225c0f4-21e4-4ebb-a71f-1cf8aa070700)
- GoPay — [money status first](https://mobbin.com/screens/bfe3c74e-626b-45e9-809c-e67594c1a7d6)
- Kraken — [reasons and suggestions](https://mobbin.com/screens/8ba824e1-ab12-4510-93cb-80092cdc74b6)
- Swiggy — [alternative that saves the purchase](https://mobbin.com/screens/e08b3475-36cb-42e1-bdac-fe046f07e2b0)
- Warby Parker — [recurring payment failure](https://mobbin.com/screens/1011a84c-072f-494a-ae2e-66691a7c22cf)
- Honest Greens — [anti-example: overlapping notice](https://mobbin.com/screens/a298e48b-aec3-4ab8-8e84-975c2b0a96e9)
- PayPal — [anti-example: single OK](https://mobbin.com/screens/37ec5e8d-89e2-4d64-bd82-ae9855d83d35)
- Klima — [anti-example: single OK](https://mobbin.com/screens/17faf8bd-c567-42cf-9fc3-32b2a450a4ff)
