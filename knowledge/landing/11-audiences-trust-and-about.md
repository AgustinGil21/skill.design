# Audience pages, security and trust, and the About page

Three kinds of content that answer "is this for someone like me?", "can I trust you with my data?" and "who are you?".
Each is often handled as an afterthought — a grid of industries, a row of badges, a paragraph of history — and each
can carry real persuasive weight when designed from the visitor's question.

## Sections and pages by audience, role or industry

### When to segment

Segment when audiences differ in **problem, proof or objection**, not just in name. If the only change between
"For agencies" and "For startups" is the word, segmentation adds clicks without meaning.

| Signal | Segment? |
| --- | --- |
| Different jobs to be done (sales vs. support teams) | Yes, by role |
| Different regulations or vocabulary (banking, healthcare) | Yes, by industry |
| Different buying process (self-serve vs. procurement) | Yes, by company size |
| Same problem, same proof, different label | No — one page with varied examples |

### Patterns

- **Choose the audience and show its benefit**: tabs or cards by role that change the content, with that role's
  figures ("Sales reps: +60 % meetings · 10 h saved on research";
  [Amplemarket](https://mobbin.com/sites/sections/85de217d-baba-4edb-8805-3d2a76f2244b)).
- **Few options with a stance** ("For teams that publish, measure and win": Enterprise · Agencies · Startups, the
  chosen one open with what matters to that audience; [Ploy](https://mobbin.com/sites/sections/2c493008-c3a6-42fc-b5a9-ed736484cb85)).
- **An industry-specific sentence**, not the same sentence with another word ("The calls that hurt most go
  unanswered" for banking; [Giga](https://mobbin.com/sites/sections/3d319855-f6a3-4f40-ab76-cf4cc860b765)).
- **An image of the audience's real context** with a product fragment over it
  ([Slash](https://mobbin.com/sites/sections/be15de50-350a-4226-b2ce-0d02cbef1b4a)).
- **When there are many, a compact grid** with an icon and one line, separating "Solutions" (by team) from
  "Industries" ([Canva](https://mobbin.com/sites/sections/e1809f9a-8dd4-4011-938b-4b3f1f1e863b)).
- **Each audience gets its own page** (hero, cases and numbers for that audience); the general landing only links.
- **Anti-example**: industry cards with abstract images and "Learn more" with no data from the industry
  ([Zendesk](https://mobbin.com/sites/sections/a7beb694-c7f2-4d1e-bc8f-b109efb061c7)).

### What an audience page needs

- A hero written in that audience's vocabulary, naming their problem.
- Proof from that audience: their industry's customers, their size, their region.
- The features that matter to them first; the rest linked.
- Their specific objections (compliance for healthcare, client management for agencies).
- An action that fits their buying process (trial for small teams, demo for enterprise).

### Tabs vs. pages

Tabs on the main landing are good for a quick "this is for you too"; pages are needed for depth and search. Tabs must
follow the ARIA tabs pattern and work without JavaScript failing silently; the content of hidden tabs should not be
the only place important information lives.

## Security and trust

### What visitors need to know

Trust content answers concrete questions from buyers, IT and legal reviewers: where is data stored, who can access
it, is it encrypted, is it used to train AI, what happens if something goes wrong, which certifications apply, how to
report a vulnerability.

### Patterns

- **Certifications with what they mean**, not only the badge: "SOC 2 Type II: our controls were audited by a third
  party" ([Dovetail](https://mobbin.com/sites/sections/3ee471e1-fbad-429e-953e-57a309b5ebfd),
  [Miro](https://mobbin.com/sites/sections/49ef29d7-9efd-4672-9784-cef76f57ebe1)).
- **Honest status**: "In progress", "Pending" when not yet obtained ([Serus](https://mobbin.com/sites/sections/d674ddba-26f4-40ad-a39f-f710227c0085),
  [Customer.io](https://mobbin.com/sites/sections/4d7ccf09-e699-46f8-b59c-a0b8ac745dec)).
- **Concrete handling facts**: encryption at rest and in transit, where data is stored (choose EU or US), who accesses
  it, whether it trains AI ([Sana](https://mobbin.com/sites/sections/7a8c2178-cea1-4a2d-b91d-780654319e23)).
- **A link to the trust center** (policies, subprocessors, reports, service status, vulnerability disclosure).
- **Third-party reviews** with source and score (4.8/5) next to security when the audience is enterprise.
- **Placement**: near pricing or the enterprise plan, and in the footer; not in the hero unless security is the
  product.

### Tone

Calm and precise. Security copy that sounds like marketing ("military-grade encryption", "bank-level security")
reduces trust with technical reviewers. Say what is done, in plain terms, with links to details.

### Markets

Regulations differ (GDPR in the EU, sector rules like HIPAA in US healthcare, data residency requirements in several
countries). Show what applies to each market's visitors, and do not imply compliance that has not been verified.

## The About page

### What visitors look for

Prospective customers check that a real, stable team exists; candidates look for culture and mission; journalists and
partners look for facts. The page should serve all three quickly.

### Patterns

- **The mission in one concrete sentence** as the headline ("We're building documentation for the age of intelligent
  systems"; [GitBook](https://mobbin.com/sites/sections/b8ff9683-7390-4621-8ea3-22a7f0a92c8c)).
- **A short, specific origin story** (who, what problem they lived, when;
  [Amplemarket](https://mobbin.com/sites/sections/f7489dc4-e65f-4ba7-818c-543d503ed9df)).
- **A timeline** with milestones and a photo for each moment ([Mews](https://mobbin.com/sites/sections/8b7d9d81-339d-4b24-a381-476d6d1b347f),
  [Handshake](https://mobbin.com/sites/sections/ec153601-7b86-4380-946e-655696b65bbd)).
- **The real team** in real photos (not stock avatars), and facts that give scale ("5 years, 30+ people";
  [Fibery](https://mobbin.com/sites/sections/3ee821a0-7e64-4eb1-b05f-8f147cc3ef7c) does it with humor).
- **Values with examples** of how they are applied, not a list of words.
- **Next step**: open roles, press kit, contact, office addresses.
- **Anti-example**: a long block of text on a colored background with no images or structure
  ([Quicken](https://mobbin.com/sites/sections/3e479ea1-bede-431d-8b4a-7c244ce2b3f7)).

### Team photos and privacy

Ask each person for consent to appear; offer an option without a photo; keep the list current when people leave.

## Worked comparison

**Weak security section:** six certification badges in a row, "Bank-level security" as the headline, no link to
details, one badge for a certification still in progress shown as obtained.

**Strong security section:** "Your data stays in the EU unless you choose otherwise" as the headline; four facts
(encryption, data location, access controls, no training on customer data) each in one sentence; two certifications
with what they mean and one marked "In progress, expected Q2"; a link to the trust center and the status page.

## Common mistakes

- **Segmenting by label instead of by problem.**
- **Audience pages that change only the headline.**
- **Badges without meaning, or claimed before they are obtained.**
- **Marketing language in security content.**
- **About pages that are only a wall of text, or only stock photos.**

## Checklist

- [ ] Segmentation reflects different problems, proof or objections.
- [ ] Each audience page has its own vocabulary, proof and action.
- [ ] Security content answers concrete questions, plainly, with honest status.
- [ ] Trust center linked; regulations per market accurate.
- [ ] About page with mission, origin, real team (with consent) and next steps.
