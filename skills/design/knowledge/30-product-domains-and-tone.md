# Product domains, audiences and tone

How a senior designer works out what a product is, who it is for and what tone it needs — and why the category alone
never answers that. "Finance" does not mean navy and serious; "kids" does not mean bright and bouncy. A budgeting
app for teenagers and a treasury tool for CFOs are both finance. A strategy game may need denser tables than a B2B
dashboard. The domain is a **starting hypothesis**, refined by audience, situation, stakes and the existing brand.

The `product-researcher` agent follows this file; `workflows/start.md` puts it into a process.

## The reasoning chain

> domain → audience and situation → stakes → interaction requirements → tone and visual expression

1. **Domain**: what the product is about (money, health, play, work, learning…).
2. **Audience and situation**: who exactly, with what expertise, how often, on which device, in which emotional
   state, under what time pressure, alone or supervised.
3. **Stakes**: what goes wrong if the interface misleads — lost money, exposed health data, a child contacted by a
   stranger, a ruined match day, a wasted minute. Stakes constrain tone more than the category.
4. **Interaction requirements**: density, speed, precision, confirmation, recovery, privacy cues, accessibility needs.
5. **Tone and expression**: voice, color, type, imagery, motion — chosen last, to serve the above, and filtered
   through the existing brand.

Skipping to step 5 from step 1 is stereotyping.

## Reading a project for evidence

Inspect representative evidence, not the whole repository. Each source tells part of the story:

| Inspect | What it can establish | What it cannot establish alone |
| --- | --- | --- |
| README, docs, onboarding copy | Stated purpose, positioning, vocabulary | Whether the positioning is current or how customers see it |
| Routes, navigation, main screens | Main objects, tasks, workflow priorities | Actual frequency of use |
| Data models, schemas, roles, permissions | Domain concepts, relationships, who has authority | Emotional needs or preferred tone |
| Components, tokens, theme configuration | Implemented conventions and reuse | Whether defaults were chosen deliberately |
| Logos, images, illustrations, fonts | Identity ingredients and recurring motifs | Recognition or market perception |
| Error, empty, billing and security copy | How the product behaves under pressure | Whether the writing works for real users |
| Tests, stories, fixtures | Intended states, edge cases, variations | How common those cases are in production |
| Research, analytics, support evidence (if available) | Observed problems and behavior | Conclusions beyond the sample |

`node scripts/design-scan.mjs <project>` indexes most of this; its domain signals are word counts, nothing more.

### Signals that mislead

- **Starter-template residue**: default copy, the component library's demo colors, unused pages.
- **The README as gospel**: it may describe an old vision or a pitch, not the product.
- **The framework as audience**: "it uses React Native, so it's for young people" is not evidence.
- **Designing for the buyer instead of the operator**: the person who pays is often not the person who uses it daily.
- **One loud feature**: a "medical" form in a sports club app does not make it a health product.

### Stopping rule

Investigate until the remaining unknowns no longer change the immediate decision. A button-label fix does not need a
product investigation; a redesign does.

## Confidence per claim

Confidence is per claim, not global: you may be sure of the domain, fairly sure of the audience, and unsure of the
tone.

| Level | Meaning |
| --- | --- |
| **Confirmed / high** | Stated explicitly by the product or the person, and consistent with the implementation |
| **Likely / medium** | Several independent signals agree, but intent is undocumented |
| **Guess / low** | Sparse, contradictory or inherited evidence, or compatible with materially different audiences |

At low confidence on something that changes the work, **ask** — and continue the independent work while waiting.
Ask a question that changes a decision, with options:

> "Should this feel like a practical record-keeping tool or a supportive coach? The ledger screens suggest the
> former; the onboarding copy suggests the latter."

Avoid "What vibe do you want?": it hands the designer's synthesis back to the person.

## Tone as dimensions, not adjectives

"Friendly" or "professional" are too vague to design with. Place the product on independent dimensions, with
evidence for each:

| Dimension | One end | Other end |
| --- | --- | --- |
| Formality | Formal (institutional address) | Familiar (informal address, contractions) |
| Warmth | Neutral, matter-of-fact | Warm, personal |
| Energy | Calm | Energetic |
| Humor | None | Playful |
| Directness | Diplomatic, cushioned | Direct, short |
| Technical specificity | Plain language | Expert vocabulary |
| Expression (visual) | Restrained | Expressive |
| Density | Airy, one thing at a time | Dense, many things at once |

Tone varies **by moment** within one product. Test any proposed voice in contrasting moments: welcome, routine
instruction, empty state, success, error, sensitive or irreversible action, payment. A voice that only works in the
hero is incomplete. A game can be playful in menus and calm on the payment screen; a bank can be warm in education
and precise in transfers.

Form of address and formality also depend on the language and market (see
[content and localization](24-content-and-localization.md)).

## Domains: starting tendencies

These are **tendencies to investigate, not prescriptions**. Existing brand evidence, task demands, culture,
accessibility and product maturity override them. Density means useful information for the task, not smaller text.

| Domain | Audience and context | Tone tendency | Trust needs | Density | Color and type tendencies | Avoid |
| --- | --- | --- | --- | --- | --- | --- |
| **Kids** | Define developmental stage, reading ability, supervision and buyer separately | Concrete, encouraging, predictable | Clear consequences; child and adult controls separated | Low per step; repeated recognizable patterns | Distinct functional colors; very legible type; generous targets | Treating all children alike; text-only instructions; reward pressure; hidden purchases |
| **Teens** | Developing autonomy; peer visibility; shared devices | Direct, respectful, culturally aware | Audience visibility, privacy, understandable reporting | Moderate; familiar patterns, clear controls | Expressive accents where fitting; readable everyday type | Forced slang; infantilizing; assuming public sharing is welcome |
| **Personal finance** | Budgeting, debt, irregular income, varied literacy | Calm, practical, non-judgmental | Data freshness, categories, understandable amounts and consequences | Overview with drill-down | Stable semantic colors; clear aligned numerals | Shame; unexplained scores; decorative charts; estimates shown as facts |
| **Banking and payments** | Infrequent high-consequence actions; frequent checking | Precise, composed, explicit | Recipient, amount, fees, status, recovery | Focused transactions; detailed review and history | Clear numeric type; restrained state colors; established brand preserved | Ambiguous "Done"; hidden pending states; celebrating uncertain transfers |
| **Health and clinical care** | Patients, carers, clinicians, administrators are different audiences | Clear, respectful; technical depth by role | Provenance, dates, privacy, accurate status, next steps | Low for patients; can be high for trained clinicians | Strong legibility; consistent semantic emphasis; no faint status cues | Treating patients and clinicians alike; decorative reassurance without information |
| **Mental health and wellbeing** | Variable energy, distress, privacy needs | Supportive, optional, non-judgmental | Agency, confidentiality limits, clear service capability | Low to moderate; few choices at once | Calm can help, but warmth need not mean pastels | Forced positivity; streak guilt; claiming to understand feelings; hidden exit or skip |
| **B2B administration** | Trained operators, managers, several roles, repeated tasks | Concise, exact, task-focused | Scope, permissions, audit, reversible actions | Moderate to high, grouped and filterable | Quiet surfaces; compact readable type; aligned numbers | Card and whitespace excess; hidden bulk scope; unclear role context |
| **Developer tools** | Experts debugging, configuring, comparing technical states | Literal, specific, candid | Reproducibility, environments, versions, logs, secret handling | High where scanning benefits | Sans for navigation, monospace for code and identifiers | Monospace everywhere; decorative terminal imagery replacing real examples |
| **Games: competitive and action** | Fast decisions under time and motor pressure | Brief, instantly readable in play | Input feedback, connection state, fair readable signals | Minimal HUD in play; richer between rounds | Strong separation from the scene; configurable cues | Low-contrast HUDs; color-only meaning; menus or motion intruding in action |
| **Games: strategy and simulation** | Planning, comparing, managing resources, long sessions | Systematic, explanatory, precise | Rules, forecasts, cause and effect | High, layered, filterable | Tabular numerals; consistent resource coding | Hiding essential numbers; decorative fonts in dense tables |
| **Games: narrative and RPG** | Story, exploration, inventory, dialogue | World-consistent, with clear functional language | Save state, choices, consequences | Moderate; high in inventory | Expressive display type with readable dialogue and subtitles | Lore obscuring actions; tiny subtitles; ambiguous saves; inaccessible timed choices |
| **Games: casual, cozy, puzzle** | Short sessions or relaxed play; broad skill range | Inviting, low-pressure, clear | Progress kept, mechanics understandable, honest rewards | Low to moderate | Cohesive expressive palettes with clear interaction contrast | Assuming relaxed means low contrast; forced timers; infantilizing adults |
| **AI tools and agents** | Exploring, delegating, reviewing uncertain output | Capable, candid about uncertainty | Sources, action scope, preview, cancel, provenance, recovery | Separate input, progress, output and review | Readable long-form; suggestion clearly distinct from execution | Anthropomorphic certainty; fake progress; hidden tool actions; chat as the only interface |
| **E-commerce** | Browsing, comparing, buying, returning | Specific, helpful, fairly persuasive | Total cost, stock, delivery, seller, returns | Moderate detail; higher in comparisons | Product imagery leads; clear price and variants | Hidden charges; false scarcity; layouts burying size, specs or shipping |
| **Luxury** | Considered purchases, service expectations | Assured, precise; restrained or expressive per house | Authenticity, provenance, materials, service | Spacious storytelling with complete purchase details | Brand-specific art direction; excellent imagery; readable utility text | Automatic black and gold; thin unreadable type; withholding information as "exclusivity" |
| **Education** | Learners, teachers, parents, administrators | Explanatory, encouraging, age-appropriate | Correct feedback, meaningful progress, recoverable mistakes | Chunked for learners; denser for teachers | Clear reading hierarchy; consistent instructional cues | Engagement confused with learning; punishing streaks; gamification without purpose |
| **Government and public services** | Everyone: varied literacy, language, disability, devices, stress | Plain, respectful, direct | Eligibility, documents, deadlines, status, authority | Focused steps with accessible detail | Established service identity; robust type and contrast | Clever navigation; unexplained bureaucracy; needless accounts |
| **Nonprofit and fundraising** | Beneficiaries, donors, volunteers, partners | Human, specific, dignified | Use of funds, credible impact, consent, recurring payment clarity | Clear paths per audience; evidence on demand | Authentic, permitted imagery | Pity imagery; invented impact; beneficiaries as promotional material |
| **Media and news** | Scanning, long reading, developing stories | Editorial voice with clear attribution | Sources, author, timestamps, corrections, news vs. opinion | Dense index; comfortable article reading | Strong editorial hierarchy; restrained functional color | Sensational cues; hidden dates; ads confused with content |
| **Social and community** | Public, private and semi-private interaction | Community-specific; system messages very clear | Audience boundaries, identity, moderation, reporting, consent | Moderate to high feeds with legible controls | Content leads; visible audience indicators | Engagement pressure; hidden audience changes; unclear block or report effects |
| **Productivity** | Repeated sessions, interruptions, solo or team | Quiet, concise, supportive | Save and sync state, ownership, undo | Adjustable; high for experts | Stable hierarchy; restrained accents | Celebrating every action; unpredictable rearranging; hidden sync conflicts |
| **Travel** | Discovery, comparison, booking, disruption on the move | Inspiring when browsing; precise when things go wrong | Total price, time zones, cancellation, confirmation | High in comparison; focused in booking and trip management | Imagery for exploration; clear dates, times, maps, status | Ambiguous local times; stale availability; romance replacing practical details |
| **Food and delivery** | Hunger, speed, dietary needs, group orders | Appetizing and practical | Ingredients, allergens, substitutions, fees, delivery status | Moderate browsing; clear customization | Accurate appealing photos; readable modifiers | Unclear allergens; hidden fees; color-only dietary labels |
| **Fitness and sport** | Beginners to athletes, rehabilitation, teams and clubs | Encouraging, concrete, adaptable | Accurate records, understandable plans, control over goals | Low during activity; richer afterwards | At-a-glance numerals; contrast usable outdoors | Body shame; universal intensity; pressure to ignore discomfort |
| **Clubs and memberships** | Volunteer admins, coaches, members, parents of minors | Practical, warm, community-minded | Fees and payments, minors' data, roles, communication consent | Dense for admins; simple for members | Club identity (colors, crest) carried with care; readable admin type | Corporate coldness for members; consumer fluff in admin tools; exposing minors' data |

### Counterexamples (keep the table honest)

- A strategy game can need more data density than an enterprise dashboard.
- A bank's financial-education section can be warmer than a teen app's moderation notice.
- An established bank with purple gradients in its identity keeps them: anti-slop signals are questions, not
  verdicts, when the brand evidence is real.
- A children's product is often bought and configured by adults: the parent area needs adult design.
- A health product for clinicians can be dense and technical; for patients, calm and plain.

## Hybrid and multi-audience products

Many products serve several audiences with different tones: a club platform for admins, coaches and parents; a
marketplace for buyers and sellers; a clinic system for staff and patients. Design per surface:

- Identify which audience each surface serves.
- Keep one brand, with tone varying by surface and moment.
- Make audience boundaries visible where privacy or authority differs.

## Questions worth asking (when evidence is not enough)

- Who performs this task, and who pays for the product?
- What triggers someone to open this screen, and in what state of mind?
- What is expensive to get wrong, and for whom?
- Is this used repeatedly during a shift, daily, or occasionally?
- Which existing behavior or look must remain familiar?
- Should this moment feel [option A] or [option B]? (with the evidence for each)
- What should improve: completion, comprehension, confidence, speed, something else?

Offer two to four options per question and say what changes with each answer.

## Worked example (fictional evidence)

**Evidence**: routes `/members`, `/fees`, `/training`, `/medical`, `/matches`; roles admin, coach, player, guardian;
Spanish and English translations with informal address ("Accedé a la cuenta de tu club"); burgundy and gold palette;
Playfair Display on marketing.

**Reasoning**: domain = sports club management (confirmed by routes and roles). Audiences = volunteer admins at a
desk (likely), coaches on phones at training (likely), players and guardians (confirmed by roles). Stakes = minors'
medical data and fee payments (confirmed) → privacy and calm in those areas. Tone = familiar and warm in member
surfaces, concise and exact in admin tables (likely). Brand = club heritage (burgundy, gold, serif) → keep it, apply
it with restraint in dense admin views.

**Question for the person**: "Do coaches mostly use it on their phones during training, or after, at a computer?
(a) during → large targets, offline-tolerant attendance, minimal typing; (b) after → keyboard flows and denser
tables."

## Common failures

- "B2B means cold"; "teen means slang"; "mental health means pastel"; "luxury means thin serif".
- Cheerful copy at moments of loss or error.
- Marketing enthusiasm applied to task-heavy screens.
- Inventing demographic personas instead of reading evidence.
- Asking the person what the repository already answers.
- One tone for every surface of a multi-audience product.

## Checklist

- [ ] Domain, audiences, situations and stakes stated with evidence and confidence.
- [ ] Tone placed on dimensions, varied by moment and surface where needed.
- [ ] The existing brand considered before proposing expression.
- [ ] Domain tendencies checked against counterexamples.
- [ ] Decision-critical guesses turned into questions with options.
