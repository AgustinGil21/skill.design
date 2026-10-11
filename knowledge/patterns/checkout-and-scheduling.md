# Checkout and scheduling

Two flows where people commit something scarce: **checkout** (money) and **scheduling** (time). Both deal with values
that change while people decide — prices, stock, available slots — and both end with a commitment that must be
confirmed honestly. This pattern covers the structure of checkout, the price contract, payment states, external
authentication, and choosing dates and times across time zones.

For failed payments, see [failed payments](failed-payments.md); for money entry and transfers, see
[money and progress](money-and-progress.md); for bookings with holds and waitlists, see
[bookings, shortcuts and what's new](bookings-shortcuts-and-whats-new.md).

## The problem and who has it

- **Buyers** who want to pay quickly and be sure of the total.
- **People booking time** with a professional, a service or a room.
- **Businesses** losing revenue to abandonment, chargebacks and no-shows.

When these flows fail: surprise costs at the last step, double charges, a slot that disappears at confirmation,
meetings at the wrong hour because of time zones.

## Questions to ask before deciding

- **Guest checkout or account required?** What does an account give the buyer?
- **One page or several steps?** How many decisions (shipping, billing, gift, delivery date)?
- **What can change** between adding to cart and paying: price, stock, shipping cost, taxes?
- **Which payment methods** matter in each market (cards, wallets, bank transfers, cash on delivery, local methods)?
- **Does payment require leaving** to an external provider (3-D Secure, bank apps, wallets)?
- **For scheduling**: whose time zone? Can the slot be taken by someone else while deciding? Recurring?

## Alternatives and how to choose

### Checkout structure

| Situation | Option | Why | Cost |
| --- | --- | --- | --- |
| Few decisions, returning buyers | **One page** with sections | Fast, everything visible | Long on mobile |
| Many decisions (shipping options, gifts) | **Steps** (Shipping → Payment → Review) | Focus | More screens; needs review |
| Express wallets available | **Express buttons first** (wallets) | Skips forms | Less control over data collected |
| Guest buyers | **Guest checkout**, offering an account after purchase | Removes a barrier | Fewer accounts |

### The price contract

The total is a promise. Decide and show:

- **What is included** (taxes, shipping, fees) and what is estimated ("Estimated tax").
- **When it is locked** (at order placement, at payment authorization).
- **What happens if it changes** during checkout: say so explicitly ("Shipping increased from 4.90 to 6.90 EUR because
  of the new address").

## Anatomy and behavior: checkout

- **Two columns on desktop**: details on the start side, a **fixed summary** on the end side (items, subtotal,
  discounts, shipping, taxes, **total** emphasized) ([Squarespace](https://mobbin.com/screens/74fdbbc4-e844-4598-9c8c-9f2a0b462a94),
  [Faire](https://mobbin.com/screens/3714f110-5f74-4db7-94e7-d0596cbf52f1)). On mobile, a collapsible summary at the top
  with the total visible.
- **The final total before paying**, with every charge; nothing appears at the last step. If tax is estimated, say so.
- **Payment methods as a list of options** (fast wallets first), with the card form only inside the chosen option
  ([lululemon](https://mobbin.com/screens/36ef1596-819b-42c6-80d2-69f22490238f),
  [H&M](https://mobbin.com/screens/abaa44a8-a93e-40a6-ae20-2afb0b9acd7a)). Offer the methods common in each market.
- **Card fields**: number with brand detection, expiry with help ("Front of the card"), security code with help
  ("3 digits on the back" — or 4 on the front for some cards), browser autofill (`cc-number`, `cc-exp`, `cc-csc`).
- **"Same as shipping address"** checked by default for billing.
- **Discount code collapsed** ("Have a code?"): an always-open field sends people off to search for coupons.
- **A button with the amount and the verb**: "Pay 155.01 EUR", "Confirm payment", "Book trip"
  ([Kiwi](https://mobbin.com/screens/2c15e0f0-16b9-4673-b4c8-ddf6122a3a34)).
- **A review step** with "Edit" per block (see [wizards](wizards-and-collaboration.md)) when the order is complex.
- **Security without theater**: a lock and "Encrypted payment" next to the button; no dubious seals.
- **Subscriptions**: when it renews, how much, and how to cancel, near the button ("Renews on 11 Mar 2027 at 20.00 USD
  + tax").
- **Nothing pre-selected** that adds cost or subscribes to marketing (anti-example:
  [Shop](https://mobbin.com/screens/12f6dc2c-2a7c-4a4d-ba52-0bbe2b9613df) with "Subscribe to news" checked).
- **Payment errors** at the field or method, with what to do ("The card was declined. Try another or contact your
  bank"), keeping everything entered.
- **"Hold the price" or save the cart** when the decision is large (Kiwi).

### Payment states

| State | Meaning | Display |
| --- | --- | --- |
| Submitting | Request sent | "Processing payment…" with the button disabled |
| Awaiting authentication | The bank asks for confirmation (3-D Secure, app) | "Confirm the payment in your bank app" with a way back |
| Authorized | Funds reserved, not captured | "Payment authorized — you'll be charged when it ships" |
| Captured | Charged | Order confirmation |
| Pending (bank transfer, cash) | Waiting for the money | "Order reserved until 14 Oct; pay with this reference" |
| Failed | Declined | Reason and alternatives (see [failed payments](failed-payments.md)) |
| Unknown | No confirmation | "We couldn't confirm your payment. Don't pay again — we're checking." |

### Returning from an external provider

When payment requires leaving (a bank app, a wallet, a redirect):

- Say before leaving what will happen and that the person will come back.
- On return, show the result clearly, including "cancelled by you" and "timed out".
- If the person returns in another tab or device, the order status must still resolve.
- Never charge twice because the person pressed "Pay" again after returning.

### Changing availability during checkout

Stock and slots can disappear while people decide. Re-check at the decision point and explain changes: "One item is
no longer available in size M. Choose another size or remove it" — before payment, not after.

## Anatomy and behavior: scheduling

- **Context on one side** (with whom, what, duration, where), **calendar in the middle**, **times for the chosen day**
  on the other side ([Bonsai](https://mobbin.com/screens/cf7017df-f48d-4014-83d3-9537733997a2),
  [Kajabi](https://mobbin.com/screens/3023c90f-db92-407d-b628-d49fb8fb569d)).
- **Days with availability marked**, the rest dimmed and not selectable (with a text equivalent).
- **Time zone visible and editable**, with times converted (and a zone suffix when ambiguous); a 24-hour option
  following the locale ([Zoom](https://mobbin.com/screens/c77a8c31-632c-4e30-8450-16dfc49b876e)).
- **Several days in columns** when comparing helps ("No availability" explicit on empty days).
- **Selectable duration** as a segmented control (15 / 30 min) before the times
  ([Braintrust](https://mobbin.com/screens/1c22e358-c09d-4b64-8ef5-c4925dd53643)).
- **"Previous / next day"** to move without returning to the calendar.
- **A way out when no time fits**: "Can't find a time? Request another" (Kajabi).
- **Setting availability** with a preview beside it of how the other person sees it
  ([HubSpot](https://mobbin.com/screens/54c4c8d3-21c4-4ab6-8a6f-3653b944a61a)).
- **Confirmation** with date, time and zone, add to calendar, reschedule and cancel.

### Slots that change while choosing

- Refresh availability when the person selects a time, and again on confirm.
- If the slot was taken: "That time was just booked. Here are the nearest available: 10:30, 11:00, 14:00."
- Hold a slot briefly during a longer form ("Held for 10 minutes") and say when the hold expires.

### Time zones and recurrence

- Show times in the person's zone and, when relevant, in the host's ("15:00 your time · 10:00 in São Paulo").
- Recurring appointments must keep their local time across daylight saving changes, and say so.
- Avoid ambiguous formats; write the date with the month name in the person's language.

## Edge cases

- Currency and tax differences by region; prices displayed in local currency but charged in another.
- Gift orders with different billing and shipping countries.
- Buyers without cards (bank transfer, cash on delivery, local wallets).
- Schedules spanning midnight in another zone; last slot of the day.
- Daylight saving transitions.

## Accessibility specifics

- Payment forms with labels, autofill, and errors associated with fields.
- External authentication steps reachable and announced; no time limits too short to complete.
- Calendars operable by keyboard; available days announced; time slots as buttons with full date and time names.
- Review and confirmation before financial commitments (WCAG 3.3.4, AA).

## Copy

- Buttons with amounts and verbs.
- Totals with all charges named.
- Times with zones and dates written unambiguously.

## Common mistakes and why they happen

- **Costs revealed late** — taxes and fees calculated at the end.
- **Mandatory accounts.**
- **Pre-checked add-ons.**
- **Double charges** after returning from external authentication.
- **Slots that disappear at confirmation without alternatives.**
- **Time zone confusion.**

## Worked comparison: the last slot taken during payment

**Weak.** A person selects the last 18:00 slot for a haircut, fills a form, pays — and gets "Slot unavailable" after
being charged; the refund takes days.

**Strong.** Selecting 18:00 holds it for 10 minutes ("Held until 17:42"). If the hold expires or the slot is taken
before payment, the person sees alternatives before paying. Payment is authorized and captured only when the booking
is confirmed.

## How to verify and measure

- **Measure** checkout completion, abandonment per step, payment errors by method, duplicate charges, chargebacks;
  booking completion, slots lost at confirmation, no-shows, reschedules.
- **Test** with external authentication, slow networks, several currencies and time zones.

## References

- Squarespace — [fixed order summary](https://mobbin.com/screens/74fdbbc4-e844-4598-9c8c-9f2a0b462a94)
- Faire — [fixed order summary](https://mobbin.com/screens/3714f110-5f74-4db7-94e7-d0596cbf52f1)
- lululemon — [payment methods as options](https://mobbin.com/screens/36ef1596-819b-42c6-80d2-69f22490238f)
- H&M — [payment methods as options](https://mobbin.com/screens/abaa44a8-a93e-40a6-ae20-2afb0b9acd7a)
- Kiwi — [button with amount, hold the price](https://mobbin.com/screens/2c15e0f0-16b9-4673-b4c8-ddf6122a3a34)
- Shop — [anti-example: pre-checked subscription](https://mobbin.com/screens/12f6dc2c-2a7c-4a4d-ba52-0bbe2b9613df)
- Bonsai — [scheduling layout](https://mobbin.com/screens/cf7017df-f48d-4014-83d3-9537733997a2)
- Kajabi — [scheduling layout and way out](https://mobbin.com/screens/3023c90f-db92-407d-b628-d49fb8fb569d)
- Zoom — [time zone and 24-hour option](https://mobbin.com/screens/c77a8c31-632c-4e30-8450-16dfc49b876e)
- Braintrust — [duration selector](https://mobbin.com/screens/1c22e358-c09d-4b64-8ef5-c4925dd53643)
- HubSpot — [availability with preview](https://mobbin.com/screens/54c4c8d3-21c4-4ab6-8a6f-3653b944a61a)
