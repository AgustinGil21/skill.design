# Enterprise plans, contacting sales and quotes

Enterprise plans and "Talk to sales" flows serve organizations that need more than a self-serve plan: security,
compliance, volume pricing, contracts. They are often designed as afterthoughts — a vague "Contact us" button leading
to a long form — which wastes the time of both buyers and sales teams. This pattern covers when to offer self-service
vs. sales, how to present enterprise value, the contact form, quotes and what happens after.

## The problem and who has it

Enterprise buying usually involves several people:

| Role | Cares about |
| --- | --- |
| **Champion / user** | Whether the product solves the team's problem |
| **Administrator / IT** | SSO, provisioning, security, integrations |
| **Security and legal** | Compliance, data residency, contracts |
| **Buyer / finance** | Price, terms, invoicing, procurement |

When these flows fail: buyers cannot find out what enterprise includes, forms ask for too much or too little, leads
go unanswered, and buyers who could have self-served are pushed into slow sales cycles.

## Questions to ask before deciding

- **What genuinely requires sales** (custom contracts, volume pricing, procurement) vs. what could be self-serve?
- **What does enterprise add**, concretely?
- **Can a price range be published?**
- **What information does sales need** to respond well, and what can be asked later?
- **How fast will someone respond**, in which time zones and languages?

## Self-service or sales?

| Situation | Better path |
| --- | --- |
| Standard plan, card payment, up to a few dozen seats | Self-service checkout |
| Invoicing, purchase orders, annual contracts | Self-service with invoicing option, or sales |
| Security review, custom terms, data residency | Sales, with self-serve documentation available |
| Very large rollouts with migration | Sales with solutions support |

Offer both paths where possible: "Buy now" and "Talk to sales", with clear guidance on which fits.

## Anatomy and behavior

- **The enterprise plan says what it adds, concretely**: SSO, roles, audit log, data residency, service level
  agreements, "Your data isn't used for training" — each with one line
  ([v0](https://mobbin.com/screens/c5359b78-0310-49f8-b752-5bf7e9a71ec5),
  [Asana](https://mobbin.com/screens/fa8eeb47-c226-42da-a4ee-5559d8b29da0)).
- **Honest pricing**: "From 15,000 USD/year" or "Custom", with what determines the price; never an unexplained dash
  ([Rows](https://mobbin.com/screens/d14bf207-dc62-4e28-a16c-37f8576498a2) shows a dash: better to say it).
- **A short form in place** (a panel or dialog) rather than sending people to an external site: what they need, how
  many people, a free-text field with a counter, and which email receives the confirmation
  ([Okta](https://mobbin.com/screens/7ccca7ab-2108-4b70-91fe-6ed9a80bd9e2),
  [Superhuman](https://mobbin.com/screens/51d47445-4b4b-45df-9ae8-953a92bc897e)).
- **Known data pre-filled** (name, email, team) and phone optional.
- **A quote builder when possible**: number of users + modules with unit prices → "Request quote"
  ([Deel](https://mobbin.com/screens/f90e6c2e-702b-4d3a-a77e-962f9aff1e39)).
- **Steps marked when there are two** ("Step 2 of 2"), with contact preference (chat, email, phone;
  [Semrush](https://mobbin.com/screens/a43cad14-ee8b-46af-9b22-ec9a90a3060f)).
- **What happens next**: "We'll reply within 1 business day" or book a time directly.
- **Sober social proof** (real customer logos with permission), no invented testimonials.

### Self-serve documentation for evaluators

Security and legal reviewers often need documents before talking to anyone:

- A security page with certifications, data handling and subprocessors.
- Downloadable documentation (security questionnaires, data processing agreements) with or without a form, depending
  on sensitivity.
- Accessibility conformance information.

### Field-by-field justification

Each field must earn its place, judged not only by abandonment but by how it improves the response:

| Field | Keep if | Otherwise |
| --- | --- | --- |
| Company size | Routes to the right team | Ask later |
| Phone | People prefer calls in that market | Optional |
| Use case | Changes the response | Optional free text |
| Budget | Rarely helps; feels intrusive | Remove |
| Job title | Routing needs it | Optional |

Freelancers and small companies may not have corporate emails; do not reject personal domains unless there is a real
reason, and explain if you do.

## States and transitions

- Submitted: confirmation with what happens next and when.
- Booked: calendar confirmation with time zone and the person they will meet.
- No slots available: offer email follow-up.
- Submission failed: keep the text; offer email as an alternative.
- Follow-up: the request appears in the account if the person is signed in.

## Edge cases

- Requests from regions without sales coverage: say so and offer alternatives.
- Existing customers asking to upgrade: route to their account manager.
- Languages: forms and responses in the buyer's language, or a clear note.

## Accessibility specifics

- Forms with labels and errors; scheduling widgets accessible (see [checkout and scheduling](checkout-and-scheduling.md)).
- Downloadable documents accessible (tagged PDFs) or provided as web pages.

## Copy

- Concrete benefits, not "enterprise-grade".
- Response times as commitments the team can meet.
- Prices and currencies per region.

## Common mistakes and why they happen

- **"Contact us" with no information** — to force a conversation.
- **Long forms** — to qualify leads at the buyer's expense.
- **No response expectations.**
- **Sales-only for things that could be bought online.**

## Worked comparison

**Weak.** "Enterprise — Contact us" leads to a 12-field external form (budget, phone required, corporate email only).
After submitting: "Thanks!" and silence for a week.

**Strong.** "Enterprise · from 15,000 USD/year · SSO, audit log, EU data residency, 99.9 % uptime SLA". "Talk to sales"
opens a panel: team size, what you need (chips), optional message. Then "Book a 30-minute call" with available times
in the buyer's zone, or "We'll email you within 1 business day". Security documents downloadable on the same page.

## How to verify and measure

- **Measure** lead response time, conversion to meetings and deals, self-serve vs. sales mix, abandonment per field.
- **Test** with evaluators in different roles (IT, legal, finance).

## References

- v0 — [enterprise plan benefits](https://mobbin.com/screens/c5359b78-0310-49f8-b752-5bf7e9a71ec5)
- Asana — [enterprise plan benefits](https://mobbin.com/screens/fa8eeb47-c226-42da-a4ee-5559d8b29da0)
- Rows — [anti-example: unexplained price dash](https://mobbin.com/screens/d14bf207-dc62-4e28-a16c-37f8576498a2)
- Okta — [short contact form in place](https://mobbin.com/screens/7ccca7ab-2108-4b70-91fe-6ed9a80bd9e2)
- Superhuman — [short contact form in place](https://mobbin.com/screens/51d47445-4b4b-45df-9ae8-953a92bc897e)
- Deel — [quote builder](https://mobbin.com/screens/f90e6c2e-702b-4d3a-a77e-962f9aff1e39)
- Semrush — [contact preference](https://mobbin.com/screens/a43cad14-ee8b-46af-9b22-ec9a90a3060f)
