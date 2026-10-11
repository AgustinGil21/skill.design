# Critique, feedback and presenting options

How senior designers talk about design: giving critique that improves the work, responding to other people's ideas,
presenting options so people can choose well, and pushing back without breaking trust. This is where junior and AI
designers fail most visibly: they flatter, they list everything, they never recommend, or they defend their taste
as if it were a principle.

For the review method and severity scale, see [review](06-review.md); for the process of critique sessions, see
[process](07-process.md); for decisions, [decisions and trade-offs](21-decisions-and-tradeoffs.md).

## What good critique is

Critique compares the work against **its goals**: the problem, the audience, the context, the constraints, the brand
and principles. Not against the critic's preferences.

| Weak critique | Strong critique |
| --- | --- |
| "I don't like the colors." | "The red buttons read as errors for coaches used to red = problem; the primary action needs another color." |
| "Make it pop." | "The primary action has the same weight as three secondary ones; nothing leads." |
| "It's too busy." | "Twelve metrics compete on the first screen; admins told us they check two daily." |
| "Looks great!" | "The fee status next to each member removes a trip to the payments screen — keep it." |

## Before giving feedback

- **Understand the goal and stage.** A sketch needs feedback on direction, not on pixels; a nearly finished screen
  needs feedback on details and states.
- **Ask what kind of feedback is wanted**, or infer it: direction, usability, visual craft, copy, accessibility.
- **Know the context**: audience, tone, stakes, constraints (`templates/design-context.md`).

## Structure of feedback

1. **What I understood**: restate the intent. If you misunderstood, the rest is wrong.
2. **What works**: specific, with why. This is information, not politeness: it tells people what to keep.
3. **Issues by impact**: the few that matter most first, each with evidence and the principle or goal at stake.
4. **Suggestions**: concrete changes, or questions that lead to them; alternatives where useful.
5. **Open questions and assumptions**: what would change the assessment.
6. **Recommendation and next step.**

Keep it proportionate: three important points beat twenty small ones. Offer the long list separately if needed.

## Separating kinds of judgment

| Kind | Example | How to say it |
| --- | --- | --- |
| **Requirement** | Contrast 2.8:1 on body text | "This fails WCAG 1.4.3; it must change." |
| **Evidence-based** | Users missed the filter in tests | "In the test, 4 of 5 missed it." |
| **Principle-based** | Two primary actions | "Two equal actions split attention; which one leads?" |
| **Convention** | Settings under the avatar | "People expect it there in this kind of product." |
| **Taste** | Preferring a serif | "This is taste: I'd try a serif because…, but it's not a problem." |

Saying which kind of judgment it is makes feedback negotiable where it should be and firm where it must be.

## Responding to someone's idea

People bring ideas in many forms: "what if we add a leaderboard?", a screenshot from another app, a sketch, a
feature request. A senior designer:

1. **Finds the need behind the idea** — and when it is not stated, names the most likely need as an assumption and
   gives feedback anyway, asking to confirm at the end, rather than replying with only a question. "A leaderboard"
   may mean "players don't come to training" or "coaches want to compare players". The need may have better
   solutions.
2. **Takes the idea seriously.** Looks for what is right in it before what is wrong.
3. **Tests it against the context**: audience, stakes, tone, brand, constraints. A leaderboard in a kids' sports app
   raises questions about pressure and privacy that it does not raise in an adult running app.
4. **Thinks through consequences**: states, edge cases, abuse, accessibility, localization, maintenance.
5. **Proposes alternatives when they are better for this case**, and says when the original is the best option.
6. **Recommends** and proposes a cheap way to learn more (a demo, a test, a pilot with one team).

### When the idea is good

Say it plainly and help make it great: execution details, states, risks to watch. Inventing objections to look
rigorous wastes time and erodes trust.

### When the idea is weak

Say why, with reasons tied to the goal, and offer a better path to the same need. "This would make the admins'
weekly task slower because…; what if instead…?" The person should leave with a better option, not just a no.

### When you disagree with a decision already made

Say it once, clearly, with reasons and the risk. If the decision stands, help execute it well and note the risk.
Repeating the objection on every turn is not seniority.

## Presenting options

People choose better between a few well-argued options than from one answer or ten variations.

- **Two to four options**, genuinely different in concept, structure or interaction.
- **Each option argued**: the idea, why it fits, risks, effort.
- **Compared on explicit criteria** that matter for this decision.
- **A recommendation**, with what is given up and what would change it.
- **Visible when possible**: sketches, references, demos.

### Anchoring and honesty

The order and framing of options influence choice. Do not build weak options to make the favorite look better
("decoy" options). If one option is clearly best, say so and show the others briefly as considered alternatives.

### How many options

| Situation | Options |
| --- | --- |
| Clear problem, established pattern | One recommendation + the main alternative considered |
| Open creative direction (brand, landing, concept) | Two or three directions |
| High-stakes structural decision | Two or three, with a way to test them |
| The person asked for "ideas" broadly | Three to four, including one bold option |

## Asking good questions

Questions are a senior designer's main tool at the start of work. Good questions:

- **Are specific**: "Do coaches enter attendance during training or after?" not "Tell me about your users."
- **Offer options when the person may not know how to answer**, with consequences.
- **Are few**, ordered by how much the answer changes the design.
- **Come after investigation**: never ask what the code, the product or the conversation already answers.

## Critique of AI-generated or template work

Generated designs share recognizable failures. Check them explicitly:

- Generic structure (hero + three cards + testimonials) regardless of the product.
- Purple-blue gradients, glassmorphism, emoji icons.
- Copy with hollow adjectives and triads.
- Missing states and edge cases.
- Invented data and testimonials.
- A tone unrelated to the audience.

See [anti-slop](01-anti-slop.md) and [human design](13-human-design.md).

## Feedback across languages and cultures

Directness norms differ. The content of feedback stays the same — the issue, the evidence, the recommendation — but
phrasing adapts: some cultures expect explicit criticism, others read it as rude. Match the person's register, keep
the substance.

## Common mistakes

- **Flattery** that hides problems.
- **Exhaustive lists** without priorities.
- **Taste disguised as principle.**
- **No recommendation** when options are presented.
- **Solving before understanding** the idea or the need.
- **Fixating on pixels** at the direction stage.
- **Re-litigating** decisions already made.

## Checklist

- [ ] The intent was restated before judging.
- [ ] Strengths were specific.
- [ ] Issues were ranked, with evidence and the kind of judgment.
- [ ] Alternatives were offered only where better.
- [ ] A recommendation and next step were given.
- [ ] The tone was direct, kind and proportionate.
