# Brand and identity

How a designer builds and applies a brand: not a logo, but the sum of what is promised, how it is said and how it
looks, repeated without contradiction over time. This file covers diagnosing a brand, choosing between creative
territories, voice, the core visual elements, distinctive assets and how to test them, the brand inside the product,
and brand guides.

## What it is and why it matters

A brand is the set of associations people hold about a company or product. Design shapes those associations through
every touchpoint: the name, the logo, the colors, the words, the product itself, the support email, the invoice.

Good brand work:

- **Makes the product recognizable** without reading the name.
- **Sets expectations** that the product then meets (or the brand becomes a liability).
- **Differentiates** with something true and specific.
- **Gives the team a filter** for decisions: "Would we say it this way?"

## 1. Diagnose before creating

Most brand work is not a blank page. Before proposing anything, learn what exists.

- **Current associations**: what do customers, prospects and staff think of when they hear the name? Ask them;
  collect words from reviews, support conversations and sales calls.
- **Category codes**: the colors, words, shapes and imagery every competitor uses. Codes help people recognize the
  category; matching all of them makes the brand invisible.
- **Existing assets**: what is already recognized (a color, a shape, a character, a phrase)? Recognized assets are
  expensive to build and cheap to lose.
- **Gaps between promise and experience**: where the brand says one thing and the product does another.

## 2. The platform (before anything visual)

Write it on one page:

- **Purpose**: why it exists, in one sentence without hollow words.
- **Audience**: who it speaks to first.
- **Promise**: what the person gets, in verifiable terms.
- **Difference**: what it does differently that can be demonstrated (not "quality" or "innovation").
- **Personality**: three traits, each with its opposite to prevent caricature ("direct, not cold"; "playful, not
  childish"; "expert, not arrogant").
- **Proof**: the facts that support everything above.

If two brands in the category could sign the same page, there is no brand yet.

## 3. Choosing between creative territories

A territory is a coherent creative direction: a concept, with the visual and verbal language that follows from it.
Explore two or three genuinely different territories before committing.

**Example:** a cooperative bank for small farmers.

| Territory | Concept | Visual language | Voice | Risk |
| --- | --- | --- | --- | --- |
| **The field ledger** | Practical, earthy, record-keeping | Warm paper tones, ledger lines, sturdy serif | Plain, numerate, unhurried | Can look old-fashioned |
| **Shared harvest** | Community and cooperation | Photography of members, rich greens and ochres | Warm, "we" voice | Can drift into generic agricultural clichés |
| **Weather and seasons** | Planning around cycles | Data-driven graphics, a seasonal color system | Calm, forward-looking | More abstract; needs strong execution |

Choose with explicit criteria:

- **Fit with the truth** of the product and the audience.
- **Distinctiveness** in the category.
- **Credibility**: does the audience believe it from this company?
- **Range**: does it work in the product, in a contract, on a billboard, in a support email?
- **Production**: can the team keep producing it with quality?
- **Languages and markets**: does the concept travel? Wordplay and cultural references often do not.

See [decisions and trade-offs](21-decisions-and-tradeoffs.md) and
[art direction](landing/05-art-direction-and-creativity.md).

## 4. Voice and tone

- **Voice is fixed** (who speaks); **tone changes** with the situation (celebrating, reporting an error, charging
  money).
- **Write a "we say / we don't say" table** with real examples from the interface and from marketing.
- **Write the voice as rules that hold in every language** the brand uses, then add per-language notes: the form of
  address (for example informal or formal "you" and their equivalents), how directness and humor are perceived, and
  words to avoid. Voice is carried by rhythm and register, which do not translate word for word; write natively.
- **Same formality everywhere** within a language; same words for the same things.
- **Humor in low-stakes moments**; never in payment errors, security or data loss.

See [interface writing](04-interface-writing.md) and [content and localization](24-content-and-localization.md).

## 5. Core visual elements

| Element | Decision | Sign it works |
| --- | --- | --- |
| **Logo** | Full version, reduced version, symbol only; clear space; minimum size | Recognizable at 16 px and in one color |
| **Typography** | One or two families with roles ([typography](09-typography.md)), covering the scripts used | The brand is recognizable with the logo covered |
| **Color** | A lead color, neutrals and semantic colors ([color](10-color.md)) | Colors have names and defined uses |
| **Shape** | Radii, stroke weights, angles, a graphic gesture of its own | It repeats in icons, illustration and components |
| **Imagery** | Type (photo, 3D, illustration, screenshot), light, framing, treatment | Ten images together look like one family |
| **Motion** | Curves, speed, personality (firm, soft, calm; never bouncy by default) | It feels the same in a button and in a video |
| **Sound** (if any) | Notification tones, music | Brief, optional, coherent |

## 6. Distinctive assets

Distinctive assets make a brand recognizable without reading its name: a color, a shape, a character, a typeface, a
pattern, a sound, a phrase.

- **Choose one or two** and use them **always**, with discipline, for years. Changing everything every season erases
  memory.
- **Test whether they actually distinguish.** Show people the asset without the name (a color field, the shape, the
  sound) and ask which brand it belongs to. An asset that people attribute to a competitor, or to nobody, is not
  distinctive yet.
- **Keep an unoriginal asset when people recognize it.** A plain wordmark that people know is worth more than a clever
  new symbol nobody knows. Novelty is not the goal; recognition is.
- **Protect assets in the product**: if the brand color is the distinctive asset, it should not be diluted by being
  used for every interactive element.

## 7. Tensions to manage

| Tension | What to watch |
| --- | --- |
| **Recognition vs. renewal** | Refresh execution without abandoning recognized assets |
| **Brand vs. functional semantics** | A red brand color colliding with error states (see [color](10-color.md)) |
| **Personality vs. credibility** | Playfulness that undermines trust in money, health or security |
| **Consistency vs. local relevance** | A global identity that must feel natural in each market and language |
| **Expression vs. task** | Brand moments that slow down daily work |

## 8. The brand inside the product

- In the interface, the brand lives in **precise details**: the accent, the headline typeface, the tone of copy, empty
  states, motion, a moment of achievement — not in decoration that gets in the way.
- **Work screens are calm**; **brand moments** (welcome, achievement, empty states, friendly errors) are where more
  expression is allowed.
- **Coherence between marketing and product**: if the landing page promises warmth and the product is gray and cold,
  trust breaks.
- **Expression by product moment**:

| Moment | Brand expression |
| --- | --- |
| First visit, onboarding | High: set the tone |
| Daily work | Low: precision and calm |
| Achievement, milestones | Medium: a moment of character |
| Errors and money | Minimal: clarity and care |

## 9. Partnerships, white label and migration

- **Co-branding**: define which brand leads, how logos sit together, whose voice speaks.
- **White label**: the product carries a client's brand. Build the system so primitives and mappings change while
  components stay; test each client's colors for contrast and semantic collisions.
- **Rebrands and migrations**: plan the transition (old and new together for a time, redirects, updated screenshots,
  communication to customers), protect recognized assets and explain the change. See
  [redesigns and migrations](29-redesigns-and-migrations.md).

## 10. Brand guide (and public brand page)

- **Name and how it is written** ("Linear is one word, capital L";
  [Linear](https://mobbin.com/sites/sections/2b3525f7-06a6-451d-b957-743a8619d672)).
- **Logo**: versions, correct and incorrect uses shown visibly
  ([monday.com](https://mobbin.com/sites/sections/8557b050-ed48-41a9-9e73-3f0cf8df3c16)), clear space, allowed
  backgrounds.
- **Color** with values (HEX/RGB/CMYK), names and uses
  ([Discord](https://mobbin.com/sites/sections/76199585-720a-4513-b0cf-37309cf479b4)).
- **Typography** with roles and licenses
  ([Aave](https://mobbin.com/sites/sections/194a20c4-7e03-4839-86b3-30981d8db06e)).
- **Messaging, sub-brands, motion and partnerships** as navigable sections
  ([Base](https://mobbin.com/sites/sections/6de5663b-9e67-4beb-87d1-4af18c4dbd4a)).
- **Voice rules per language.**
- **Download everything in one package**, with an intellectual property notice.

## Signs of a generic brand

- A two-word name joined with internal capitals plus a letter logo in a gradient square.
- A purpose like "empowering people to…".
- A blue or purple palette, default typography, featureless illustrated people.
- No element that repeats recognizably.

## Worked comparison

**Same company:** a regional chain of veterinary clinics.

**Generic direction.** A paw-print logo in a teal gradient, "Caring for your best friend", stock photos of smiling
dogs, a rounded sans. Every veterinary brand in the region could use it.

**Specific direction.** Diagnosis shows that clients value that the same vet follows their pet over years, and that
the clinics are open late. Platform: "The vet who knows your animal's history, open until 22:00." Distinctive asset: a
deep night-blue and a moon symbol that refers to late hours. Photography of the real vets with their real patients
(with permission). Voice: calm, knowledgeable, never cutesy. In the booking app, the brand shows in the night-blue
accent and in the vet's name and photo on every appointment — the promise made visible in the product.

## Common mistakes

- **Starting with the logo** instead of the platform.
- **Ignoring existing recognition** and throwing it away in a redesign.
- **Territories that are variations of one idea.**
- **Distinctive assets that nobody tested.**
- **A brand that lives only in marketing** while the product looks like a template.
- **One voice translated literally** into every language.

## Checklist

- [ ] Current associations, category codes and existing assets were diagnosed.
- [ ] The platform fits on one page and is specific and provable.
- [ ] Two or three distinct territories were compared with explicit criteria.
- [ ] Voice rules work in every language, with per-language notes.
- [ ] Core visual elements are defined and work at small sizes and in one color.
- [ ] Distinctive assets are few, consistent and tested for recognition.
- [ ] The brand appears in the product through precise details, calibrated by moment.
- [ ] Partnerships, white label and migrations have rules.
- [ ] A brand guide exists and is easy to download and apply.
