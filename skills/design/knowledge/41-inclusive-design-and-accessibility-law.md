# Inclusive design and the law

> Verified: 2026-11-02 · Review by: 2027-05-02 · Time-sensitive: accessibility and children's protection law by market.

WCAG is the floor, not the goal. Real people include older adults with low vision and tremor, people who read with
difficulty, people on old phones and slow, metered connections, people in a second language, people under stress,
and children. Meanwhile, accessibility and children's protection have moved from guidelines to enforced law in several
markets. This file covers both: designing for the people WCAG does not fully describe, and the legal landscape a
designer must know enough about to flag.

Requirements live in [accessibility](02-accessibility.md) and [advanced accessibility](15-advanced-accessibility.md);
this file extends them. **Nothing here is legal advice**: name the rules that may apply, design to them, and tell the
person what a qualified reviewer should confirm.

## Designing beyond the checklist

| People | What changes for them | Design responses |
| --- | --- | --- |
| **Older adults** | Lower contrast sensitivity, smaller targets are harder, less familiarity with new gestures, more caution with money and security | Larger default text and targets, visible labels instead of icon-only controls, no hidden gestures for essential actions, explicit confirmation and undo, patient timeouts, help that reaches a human |
| **Low literacy and second-language readers** | Long sentences, jargon and idioms block them | Plain language (short sentences, common words, one idea per sentence), icons with labels, examples, consistent terms, content tested with real readers |
| **Cognitive and learning differences** (attention, memory, dyslexia) | Multi-step memory, time pressure and clutter overload them | One task per screen, progress and saved state, no time limits (or generous, extendable ones), consistent navigation, no CAPTCHAs that test cognition (WCAG 3.3.8) |
| **Slow devices and connections** | Heavy pages fail or drain data and battery | Small pages, server-rendered content, images that adapt, offline-tolerant flows, a lite mode where it matters ([performance](engineering/07-performance.md)) |
| **People under stress** (health, money, emergencies) | Reduced capacity to read and decide | The essential action first, plain status, reassurance through facts, no persuasion |
| **People with temporary or situational limits** (one hand, bright sun, noisy room) | The same barriers as permanent disabilities, briefly | Reachable controls, high contrast, captions and visual alternatives to sound |
| **Children** | Developmental stage, supervision, vulnerability to pressure | Age-appropriate content and defaults, no manipulative design, parental tools that respect the child ([family and parental controls](patterns/family-and-parental-controls.md)) |

Methods: include these people in research, test with assistive technology users, set larger defaults instead of
relying on settings, and review copy with plain-language guidance.

## Accessibility law (as of late 2026; verify current rules)

| Market | Rule | What it means for design and code |
| --- | --- | --- |
| **European Union** | **European Accessibility Act (EAA)**, applicable since 28 June 2025, enforced by each member state | Covers many consumer products and services (e-commerce, banking, e-books, transport, communications). The reference standard is EN 301 549, currently based on WCAG 2.1 AA. Enforcement has begun (for example, a French court ordered a large retailer in 2026 to make its site and app accessible within six months, with daily penalties). Services need an accessibility statement |
| **European Union, public sector** | Web Accessibility Directive | Public sector sites and apps, with accessibility statements and feedback mechanisms |
| **United States, public sector** | **ADA Title II** web rule (2024): WCAG 2.1 AA for state and local governments; compliance dates extended by the DOJ in 2026 to April 2027 (larger entities) and April 2028 (smaller ones) | Government sites, apps and documents |
| **United States, federal** | Section 508 | Federal agencies and their vendors |
| **United States, private businesses** | ADA Title III has no specific web regulation, but lawsuits are common and courts often use WCAG as the benchmark | Treat WCAG 2.2 AA as the target |
| **United Kingdom** | Equality Act 2010; Public Sector Bodies Accessibility Regulations | WCAG 2.2 AA for public bodies; reasonable adjustments for services |
| **Other markets** | Canada (Accessible Canada Act and provincial laws), Australia (DDA), and others | Check per market |

Design consequences: target **WCAG 2.2 AA** (it includes 2.1), publish an accessibility statement where required,
provide a feedback channel for barriers, make documents (PDFs) accessible or offer accessible alternatives, and keep
evidence of testing.

## Children's protection law (as of late 2026; verify current rules)

| Market | Rule | What it means for design |
| --- | --- | --- |
| **United States** | **COPPA** (under 13), amended in 2025 with compliance required from April 2026: separate verifiable parental consent for sharing children's data with third parties (including targeted advertising), data retention limits, a broader definition of personal information | Know whether the product is directed to children or knows users are under 13; consent flows for parents; minimal data; no third-party ad sharing without separate consent |
| **United Kingdom** | **Age Appropriate Design Code** (ICO): high privacy by default for under-18s, no nudges toward weaker privacy, geolocation off by default, profiling off by default, age-appropriate explanations; **Online Safety Act** children's codes (Ofcom), enforced since July 2025: risk assessments, "highly effective" age assurance for services with high-risk content, age-appropriate experiences | Privacy-protective defaults for young users; age assurance designed to be accurate, fair and private; safer feeds and messaging for children |
| **European Union** | GDPR rules for children's consent (age varies by country, 13–16); Digital Services Act protections for minors on platforms, including guidelines against addictive design and profiling-based ads to minors | Age-appropriate defaults; no profiling-based ads to minors on platforms; see [feeds](patterns/feeds-and-social-posting.md) |
| **US states** | Several states have age-appropriate design and app-store age laws, some under legal challenge | Check the product's states |

Design consequences: decide early whether children use the product; default to the most protective settings for young
users; design age assurance that asks for the least data needed and offers alternatives; avoid streaks, infinite
feeds, variable rewards and public metrics for children; write explanations a child can understand.

## Other law that shapes interfaces

Consent and cookies (GDPR, ePrivacy), subscriptions and cancelling
([trials and cancelling](patterns/cancellation-and-retention.md)), dark patterns in the EU Digital Services Act and the
expected Digital Fairness Act, payment authentication (PSD2 SCA), and sector rules (health, finance). The
[flows and dark patterns catalog](slop/07-flows-and-dark-patterns.md) lists the interface patterns these laws target.

## How to work with this

1. In the design context, record the markets, audiences (including children) and sectors.
2. Name the rules that may apply in the brief, with what they require of the design.
3. Design to the strictest applicable rule by default.
4. Flag what needs a legal or compliance review; do not present the design as compliant without it.

## Worked comparison

**Situation:** an online pharmacy serving Spain and Portugal; many customers are over 65.

**Weak.** Icon-only navigation, 14 px grey body text, a 10-minute session timeout during checkout, a CAPTCHA with
distorted letters, and prescriptions uploaded only by drag and drop. Nobody checked which law applies.

**Strong.** Labeled navigation and 18 px body text by default; checkout saves progress and warns before timeouts with a
way to extend; bot protection without a cognitive test; prescriptions by photo, file picker or a code from the doctor.
The brief records that the European Accessibility Act applies (e-commerce in the EU), targets WCAG 2.2 AA, plans an
accessibility statement and a feedback channel, and flags the health-data rules for legal review.

## Checklist

- [ ] Older adults, low literacy, slow devices and stress considered for the core journeys.
- [ ] WCAG 2.2 AA targeted; accessibility statement and feedback channel where required.
- [ ] Markets and applicable accessibility law identified and recorded.
- [ ] Whether children use the product decided; protective defaults and age assurance designed if so.
- [ ] Consent, subscription and dark-pattern rules checked for the markets served.
- [ ] Items needing legal review flagged to the person.
