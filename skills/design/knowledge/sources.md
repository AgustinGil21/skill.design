# Sources and evidence

Where the knowledge in this base comes from, what each kind of source can and cannot prove, and how to add, revise and
retire knowledge without turning popularity into dogma.

## What it is and why it matters

A knowledge base is only as trustworthy as its relationship with evidence. The most common way design guidance goes
wrong is not by being invented; it is by **overstating what its sources prove**: treating "many products do this" as
"this is right", treating a single study as a universal law, or treating an old convention as current practice.

This file defines:

- The kinds of sources used and what each demonstrates.
- How to record a claim with its evidence.
- The known biases of the corpus.
- How to add, revise and retire guidance.

## Kinds of sources and what they prove

| Source | What it proves | What it does not prove |
| --- | --- | --- |
| **A standard** (WCAG, platform guidelines) | What is required for conformance or expected on a platform | That meeting it produces a good experience |
| **A peer-reviewed study** | That an effect was observed under specific conditions | That it transfers to every interface, audience and context |
| **A practitioner study** (usability research firms, industry reports) | Patterns observed across tests, often well grounded | Exact numbers for your product; conditions are not always disclosed |
| **A screenshot of a real product** | That a pattern exists and how one product implemented it | That it works, that it is the best option, or that it suits your context |
| **A recurring pattern across many products** | That people are likely to have seen it (an expectation) | That it is correct; popular patterns include dark patterns |
| **Your own research and analytics** | What happened with your people and product | That it generalizes beyond them |
| **Expert reasoning** | A plausible explanation and a hypothesis | Evidence; it must be marked as reasoning |

When writing guidance, name the kind of source behind each claim, implicitly or explicitly: "WCAG requires…",
"Usability research consistently finds…", "Most products studied place…", "We recommend… because…".

## Mobbin: the screen and flow corpus

Real screens, flows and site sections from web and iOS products. References in [patterns](patterns/) link to Mobbin
(`mobbin.com/screens/…`, `mobbin.com/flows/…`, `mobbin.com/sites/sections/…`).

Researched in October 2026: roughly 900 screens, flows and sections in nine rounds, plus about 150 from earlier
research, from more than 200 products, including:

- **Work and collaboration:** Notion, Linear, Asana, ClickUp, Coda, Slite, Craft, Dovetail, Attio, Twenty, folk,
  Wrike, Todoist, Height, Campsite, Calendly, HubSpot, Salesforce, Xero, Deel, Remote, Workable.
- **Development and infrastructure:** Vercel, Supabase, Cloudflare, Clerk, PlanetScale, Railway, Render, Resend, AWS,
  Laravel Cloud, Mintlify, Retool, Better Stack.
- **AI and agents:** Claude, ChatGPT, Gemini, Perplexity, Langdock, Sana, WRITER, Dropbox Dash, Lindy, Gumloop,
  StackAI, Relevance AI, Mistral, Devin, v0, Base44, Cohere, Zapier.
- **Creation and media:** Krea, Midjourney, Luma, Leonardo, Higgsfield, Magnific, Adobe Express, Synthesia, Descript,
  VEED, Riverside, ElevenLabs, Frame.io, Vimeo, Loom, Canva, Figma, Sketch, Mural, Gamma, Pitch.
- **Consumer and mobile:** Telegram, X, Instagram, Spotify, Strava, AllTrails, Cash App, Monzo, PayPal, Waymo, Grab,
  foodpanda, Fresha, GitHub mobile, Fiverr, Blinkist, Raycast, Meetup, Instacart, Starbucks, Notion mobile.
- **Payments, scheduling and support:** Stripe, Squarespace, Faire, Kiwi.com, Calendly, Zoom, Disney+, Jasper,
  Intercom, Zendesk, DoorDash Merchant, Loom, Postman, Cal.com.
- **Finance and health:** Wise, KOHO, Zing, Mercury, Copilot, YNAB, Gusto, Expensify, Midday, Fitbit, Garmin Connect,
  Tonal, Cal AI, adidas Running.
- **Commerce, maps and social:** lululemon, adidas, Amazon, Walmart, Zillow, Tripadvisor, Turo, GetYourGuide, Discord,
  Behance, Apple Podcasts, Brink, Queue, Substack.
- **Automations and templates:** n8n, Tines, HoneyBook, Plain, Pipedrive, ManyChat, Bonsai, PandaDoc, Kit, Wix,
  Fibery.
- **Files, data and audit:** Google Drive, PandaDoc, Frame, Fabric, Zoho CRM, 1Password, PlanetScale, Vanta, Front,
  Klaviyo, Grok, Customer.io, Unify, AutoSend, Buffer, mymind, Optimal Workshop.
- **Publishing and photos:** Bluesky, LinkedIn, Glassdoor, Fable, Apple Photos, VSCO, GoPro Quik.
- **Bookings, inboxes and permissions:** Deliveroo, Zomato, TheFork, Grab, Uber Eats, Google Maps, Superhuman, Notion
  Mail, Front, Plain, Intercom, Lemni, Langdock, Vanta, Airwallex, Remote, Workable.
- **Shortcuts and what's new:** Height, Replit, Amie, Frame.io, Discord, Zoho CRM, Canny, Gumloop, Tally, Leonardo,
  Visual Electric, Webflow.
- **Comparison, support, reviews and camera:** Asana, Clockwise, Toggl Track, Chatbase, Teachable, Snowflake, Savee,
  LangChain, WhatsApp, DoorDash, Glovo, UNIQLO, Under Armour, Blinkit, Postmates, Snapchat, Shopee, Google Photos,
  Apple Invites, Gorgias, Mistral AI, PlayAI.
- **Events, learning and surveys:** Posh, GroupMe, Partiful, Meetup, Nextdoor, Speechify, Udemy, Mimo, Nibble,
  Greenlight, Maze, Sprig, Typeform, Hotjar.
- **Calls, privacy and downloads:** Microsoft Teams, Whereby, Dialpad, Wrangle, Google Meet, Zoom, Pinterest, Airbnb,
  Monarch, Adobe, Motion, Shop, Skillshare, HBO Max, Apple TV, Headspace, Glow.
- **Failed payments, family, referrals and achievements:** Swiggy, Kraken, Warby Parker, Honest Greens, Klima, Tubi,
  Plex, Prime Video, Paramount+, YouTube, Spotify Kids, Amazon Alexa, Vinted, Trip.com, Origin, Stake, Setel, Everyday
  Rewards, Nike Run Club, Quizlet, Xbox, Me+.
- **Enterprise and accessibility:** v0, Rows, Okta, Deel, Semrush, Elicit, Canva, Starling, Waymo, Tide Guide, Gojek,
  Character AI.
- **Video, advanced search and live activities:** Patreon, The Leap, Vimeo, TikTok, Arcade, Air, beehiiv, Qatalog, Exa,
  Unity, Juicebox, Braintrust, Lugg, Wonder, Hevy, Runbuds.
- **Profile, brand and versions:** Preply, Magnific, Clay, Luma, Mailchimp, Bloom, Strut, Jobber, Substack, Hume AI,
  Google AI Studio, Adaline.
- **Batches, approvals, captions, AI and sharing:** OpenAI Platform, ElevenLabs, Databricks, AWS, Shopify, Jira, GitLab,
  Toggl Track, Riverside, VEED, Synthesia, Loom, Hulu, Deel, SchoolAI, Copy.ai, Perplexity, Whop, Kajabi, Luma AI,
  Causal, Microsoft Copilot.
- **Landing pages (site sections), first round:** Vizcom, Craft, Maze, Shopify, Dub, Sana, Ramp, basement.studio, KODE
  Immersive, MANA Yerba Maté, Discord, Loom, Retool, Threads, Miro, Framer, Intercom, Hex, Twingate, Amplemarket, Unify,
  Tines, Harvey, Jasper, Superpower, Function, Escape Cafe, FLORA, ClassPass, Trawelt, The Leap, Kajabi, Copy.ai, Zoox,
  Podia, Lemon Squeezy, Harvest, Mixpanel, VanMoof, Fiasco, Zendesk, Mural, Seed, Wild, Giga, Oryzo, monday.com, Ploy,
  Pitch, User Interviews, Parker AI, V7, Fluz, Aave, Spade, SSENSE, AI in Design Report, Zellerfeld, Impossible Foods,
  re_, Assembly Coffee, Shader.
- **Landing pages, second round:** OpenPhone, Programa, Webflow, Circle, Stripe, Cofounder, Cartesia, Teak,
  incident.io, Granola, Apollo, Sequence, Headspace, Current, Rains, ISO Meet, Superr, Opacity, Harvest, Glide, Mews,
  Handshake, GitBook, Grain, Grammarly, Dovetail, Serus, Ploy, Slash, Runway, Melius, Norma, Daylight, Kalstore, Rivian,
  In Common With, Vucko, Cloudstudio, Unseen Studio, MOUTHWASH, Robot.com, Linear, Shade, Monologue, Shopify Supply,
  Homerun, Airtable.
- **Typography, color and brand:** Claude Type, Studio Freight, Frontify, Aave, Mailchimp, Discord, OFF+BRAND, Raw
  Materials, Canva, Linear, ElevenLabs, monday.com, Base, Runway, Amplemarket.

### What a screenshot demonstrates

A screenshot shows **one moment of one product**, often in one language, one region and one state. It demonstrates:

- That the pattern exists and is implemented in a particular way.
- The visual and structural choices made in that instance.

It does not demonstrate:

- That the pattern works (no task success data).
- What happens in other states (errors, empty, edge cases), unless captured.
- Why the product chose it (business constraints, legacy, experiments).
- That it is still current (products change).
- That it suits other contexts, audiences or languages.

## Known biases of this corpus

- **Popularity bias**: the corpus favors well-known, well-funded products, mostly from North American and European
  companies, mostly in English. Patterns that work for them may not work for small teams, other markets or other
  languages.
- **Platform bias**: web and iOS are represented; Android conventions are under-represented.
- **Happy-path bias**: libraries of screens collect more ideal states than failures, errors and edge cases.
- **Survivor bias**: we see the patterns of products that succeeded, not of those that failed with the same patterns.
- **Recency bias**: a snapshot in time; patterns change.
- **Dark patterns are present**: some captured flows include manipulative patterns. Inclusion in the corpus is not an
  endorsement; the guidance names anti-examples explicitly.

Compensate by stating the context of each reference, citing counterexamples, checking standards and research, and
testing with your own people.

## Observation, inference and validation

Every claim in the knowledge base sits at one of three levels:

| Level | Example | How to write it |
| --- | --- | --- |
| **Observation** | "Most of the 12 products studied put the plan comparison in a table with aligned rows." | "Most products studied…" with references |
| **Inference** | "Aligned rows reduce the memory load of comparing plans." | "This likely helps because…" |
| **Validation** | "In usability tests, people compared plans faster with aligned rows." | Cite the study or your own test |

Do not promote an observation to a validation by wording ("the best way to…") without the evidence.

## An evidence card for important claims

For claims that drive important decisions, keep a short record:

```
Claim: Show the annual total next to the monthly price on plan pages.
Kind: Recommendation.
Evidence: Observation in 9 of 11 pricing pages studied (Mobbin references); reasoning about cost transparency;
          consistent with consumer protection guidance on total price.
Counterevidence: Some products show only monthly prices successfully in markets with monthly billing norms.
Context where it holds: Subscriptions with annual billing options.
Last reviewed: October 2026.
```

## Standards and guides

- **WCAG 2.2** (W3C): success criteria at levels A and AA.
- **WAI-ARIA Authoring Practices Guide (APG)**: keyboard patterns and roles per widget.
- **Apple Human Interface Guidelines** and **Material Design 3**: platform conventions.
- **Nielsen Norman Group**: heuristics and usability research.
- **Laws of UX** (Jon Yablonski): a compilation of Hick, Fitts, Jakob, Miller, Tesler, Doherty and other models.
- **Core Web Vitals** and **search engine documentation**: consult the current version; they change.
- **Unicode CLDR** and **ICU MessageFormat**: locale data and plural rules for localization.
- **Fogg Behavior Model**, **self-determination theory**, **catalogs of deceptive design patterns**.

### Design systems (`design-system/`)

Researched in October 2026. Practitioner and community sources; claims are attributed in the files.

- **Design Tokens Community Group, Format Module 2025.10** (with Color and Resolver modules): first stable version,
  published 28 October 2025 as a Community Group report, not a W3C Standard. <https://www.designtokens.org/TR/2025.10/format/>
- **GOV.UK Design System, contribution criteria**: useful and unique at proposal; usable, consistent and versatile
  before publication. <https://design-system.service.gov.uk/community/contribution-criteria>
- **Nathan Curtis (EightShapes)**: team models for scaling a design system (solitary, centralized, federated), "The
  Fallacy of Federated Design Systems", and versioning design systems.
  <https://nathanacurtis.substack.com/p/the-fallacy-of-federated-design-systems-23b9a9a05542>
- **Brad Frost, Atomic Design** and his later reflections on where it fell short.
  <https://bradfrost.com/links/post/where-atomic-design-fell-short/>
- **Figma, "Design systems 104: making metrics matter"** and **"How Pinterest's design systems team measures
  adoption"**: detachment, overrides and usage as signals, without a standard healthy rate.
  <https://www.figma.com/blog/design-systems-104-making-metrics-matter/>
- **zeroheight, measuring the developer side of a design system**: coverage per product over raw instance counts.
  <https://zeroheight.com/help/guides/how-to-measure-the-dev-side-of-a-design-system/>
- **The Interactive Studio, "Cómo crear un design system paso a paso" (2026)**: foundations, components and patterns
  in practice, publishing as a living site, and an agency estimate of two to four months for a first functional
  version. <https://insights.theinteractive.studio/es/como-crear-un-design-system-paso-a-paso>

Standards and guides are updated. When this knowledge base cites a version or a threshold, verify it against the
current official source before treating it as binding.

## How to keep adding knowledge

1. **Start from a question**, not from browsing: "How do products handle partially failed imports?"
2. **Search the corpus** for concrete screens and flows (describe elements, not styles).
3. **Look at 8–12 results.** Keep the recurring pattern and the variants that solve something better; note the
   anti-examples.
4. **Look for counterexamples and failure states**, not only the ideal screen.
5. **Write the reasoning**: why the pattern works, when it does not transfer, which alternatives exist.
6. **Add it to the matching file** in [patterns](patterns/) with two to four example links and, if available, the
   anti-example, following [the writing guide](../WRITING-GUIDE.md).
7. **If it contradicts an existing rule**, decide which stays and why, and update both places.

## Revising and retiring guidance

Guidance becomes wrong when standards change, platforms change, or new evidence contradicts it.

- **Review dates**: important files carry an implicit review date through the version history; revisit standards-based
  content when standards are updated.
- **Contradicting cases**: when a well-documented case contradicts a rule, do not ignore it as an outlier. Either
  narrow the rule ("this holds when…") or retire it.
- **Retire explicitly**: when guidance is removed, record why, so it is not reintroduced by habit.

## Checklist

- [ ] Each important claim names its kind of source (standard, study, observation, reasoning).
- [ ] References to screens include context and, where relevant, counterexamples.
- [ ] Observations are not worded as validations.
- [ ] Corpus biases are compensated with standards, research and testing.
- [ ] Standards and thresholds are verified against current official versions.
- [ ] New knowledge follows the writing guide and updates contradicting rules.

## Adding more

To research and add knowledge, follow [RESEARCH-GUIDE.md](../RESEARCH-GUIDE.md).
