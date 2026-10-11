# Research and testing with people

How a designer learns from people instead of guessing: choosing the question first, the method second, recruiting the
right people, running sessions without leading them, turning observations into decisions, and knowing what the
evidence does and does not prove. No lab is needed; asking well and watching carefully are.

## What it is and why it matters

Research reduces uncertainty about decisions. That is its only purpose in product design. A study that does not
change, confirm or stop a decision was an expense, not research.

Good research improves:

- **Framing**: whether the problem is real, who has it and how they solve it today.
- **Direction**: which of several approaches fits people's mental models and context.
- **Detail**: whether people can complete tasks, understand copy and trust the flow.
- **Learning after release**: what actually happened, and why.

## Start from the decision, not the method

Before choosing a method, write down:

1. **The decision that depends on the study.** "Whether to build bulk editing as a toolbar or a separate flow."
2. **What you currently believe** and how confident you are.
3. **What result would change the decision**, and what result would confirm it.
4. **The cost of being wrong.** High cost justifies more rigor; low cost justifies deciding and watching.
5. **The deadline.** A perfect study delivered after the decision is useless.

If you cannot name a decision, you are probably doing exploratory research. That is legitimate early on, but say so,
and timebox it.

## Which method for which question

| Question | Method | Typical participants | Gives you |
| --- | --- | --- | --- |
| What problem do people have, and how do they solve it today? | In-depth interviews, contextual inquiry (watching people work in their real environment) | About 5 to 8 per distinct profile, until new sessions stop adding new themes | The why, workarounds, vocabulary, context |
| Can people use this? | Moderated usability test with tasks | About 5 per round per distinct group | Problems, their causes, severity |
| Is the message understood? | Five-second test, first-click test, comprehension questions | Often 15 to 30 for a clearer signal | First impressions, where people would start |
| How do people group and name things? | Card sorting (open or closed) | Often 15 to 30 | Mental models, vocabulary |
| Can people find things in the navigation? | Tree testing | Often 30 or more for stable percentages | Findability of a structure, without visual design |
| Which version performs better at scale? | A/B test, analytics | Depends on traffic and effect size; calculate before starting | How much, not why |
| How satisfied are people? | Short surveys (a satisfaction scale, the System Usability Scale, one open question) | Hundreds for stable numbers | Trends and segments |
| What do people actually do? | Analytics, session recordings, heatmaps (with consent and masking) | Everyone who consents | Behavior at scale |
| Will people want this at all? | Fake door, concierge test (doing it by hand first), pre-orders | Depends | Real commitment rather than stated interest |

The participant numbers above are common rules of thumb, not statistical guarantees. Qualitative methods aim to find
problems and understand causes; their sample sizes are about diminishing returns. Quantitative methods aim to measure;
their sample sizes must be calculated for the precision you need.

**Qualitative to understand why; quantitative to know how much.** Combine them: analytics shows where people drop off;
sessions show why.

## Recruiting

Who you talk to decides what you learn. Most bad research is bad recruiting.

- **Recruit by behavior and context, not demographics.** "Has booked a medical appointment for someone else in the
  last month" beats "women 35–50".
- **Include the people the decision affects most**, including those at the edges: first-time users, experts, people
  using assistive technology, people working in a second language, people on low-end devices or slow connections.
- **Screen out the wrong people**: colleagues, people who work in design or research, people who already know the
  product deeply when you are testing first use.
- **Watch for selection bias.** Recruiting only from your newsletter means talking to your fans. Recruiting only
  people who completed sign-up misses the ones who gave up.
- **Pay or thank people fairly**, and be clear about what the session involves and how their data is used.
- **Recruit in the languages and regions you serve.** A flow tested only in English may fail in German because of
  length, or in Japanese because of conventions, in ways no English session reveals.

## Interviews

- **Ask about specific past behavior**, not hypothetical futures. "Tell me about the last time you…" instead of "Would
  you use…?". People are poor predictors of their own future behavior and generous when asked to imagine.
- **Open questions** that do not suggest an answer. "How did you decide?" rather than "Was price the main factor?".
- **Silence is a tool.** Pause after answers; people often add the most useful part.
- **Ask them to show you**: their screen, their spreadsheet, their notebook, their workaround.
- **Do not sell or defend** the product during the interview.
- **Record verbatim quotes** with consent; patterns emerge across sessions, not within one.
- **Probe contradictions gently.** "Earlier you mentioned you always check with your manager; in this case you
  didn't. What was different?"

## Usability tests

### Planning

- **Realistic tasks with a goal, not instructions.** "You want to invite a colleague to edit your project" instead of
  "Click Invite".
- **Choose tasks by risk**: the main task, the most error-prone, the most consequential.
- **Decide the fidelity**: paper or sketch for structure, clickable prototype for flows, the real product (or a coded
  prototype) for details, timing and accessibility.
- **Pilot the session** with one person first. A confusing task wording or a broken prototype wastes every session
  after it.

### Moderating

- **Think-aloud**: ask people to say what they are thinking. Remind them gently when they go quiet.
- **Do not help.** When asked "Should I click here?", answer "What would you do if I weren't here?". When people are
  stuck for a long time, note it, and decide in advance when to step in so one blocker does not ruin the session.
- **Ask about expectations**: "What did you expect to happen?" after surprising moments.
- **Neutral reactions.** No "great!" when they succeed; it teaches them what you want.
- **Assisted success is not success.** If you helped, record the task as failed or assisted, not completed.

### Measuring

- Task completion (yes, with help, no), time, errors, hesitation points.
- A short ease question after each task (for example on a 1–7 scale).
- Severity of each problem: blocks the task, causes errors, causes hesitation, cosmetic.

### Iterating

Three rounds of about five people, with fixes between rounds, usually teach more than one round of fifteen, because
each round tests the fixes of the previous one and reveals the problems the first ones were hiding.

## Five-second and first-click tests

- **Five-second test**: show a screen for five seconds, then ask what it was, what they remember and what they would
  do. Useful for heroes, landing pages and dashboards that must communicate at a glance.
- **First-click test**: "Where would you click to…?". A correct first click strongly predicts task success; a wrong
  one predicts trouble.

## Analytics with judgment

- **Define events by goal** (sign-up, activation, key use), not by "track everything".
- **Funnels by step** show where people leave; segment by source, device, language and plan.
- **Pair numbers with sessions or interviews** to understand why each drop happens.
- **Watch for misleading metrics**: more clicks may mean confusion; more time on page may mean people cannot find what
  they need; fewer support tickets may mean people gave up.
- **Privacy**: consent, anonymization, masking sensitive data in recordings, retention limits.

See [measurement and learning](26-measurement-and-learning.md).

## A/B tests and experiments

- **A written hypothesis**: "If we show the annual price next to the monthly price, more people choose annual because
  they see the saving."
- **One meaningful change per test**, or a deliberate multi-variant design.
- **Sample size calculated before starting**, for the smallest effect worth detecting.
- **Run full cycles** (usually at least one or two weeks) to cover weekly patterns.
- **Do not stop at the first "significant" result**; stopping early inflates false positives.
- **Watch side effects and guardrails**: cancellations, refunds, support contacts, accessibility complaints.
- **When traffic is low**, A/B tests cannot detect realistic effects in reasonable time. Use qualitative testing,
  sequential rollouts and careful before/after comparisons instead, and be honest about their weaker evidence.

## Expert review when there is no time for people

- Heuristics ([usability](03-usability.md)), the review checklist ([review](06-review.md)), accessibility
  ([advanced accessibility](15-advanced-accessibility.md)).
- **Cognitive walkthrough**: for each step, will the person know what to do? Will they see how? Will they understand
  the feedback?
- Useful and cheap, but it predicts problems; it does not observe them. Mark findings as predictions.

## From observations to decisions: synthesis

### Keep observation, interpretation and recommendation separate

| Layer | Example |
| --- | --- |
| **Observation** (what happened) | "4 of 6 participants scrolled past the 'Add people' button; 2 asked where to invite someone." |
| **Interpretation** (what it likely means) | "The button does not read as the way to invite; its label and position do not match the task." |
| **Recommendation** (what to change) | "Rename to 'Invite people' and place it next to the member list title." |
| **Confidence** | "High: consistent across participants and matches support tickets." |

Mixing the layers makes findings impossible to challenge, because nobody can tell what was seen from what was
inferred.

### Rate confidence

- **High**: consistent across participants and confirmed by another source (data, tickets).
- **Medium**: consistent across several participants, no other source.
- **Low**: one participant, or the researcher's interpretation of an ambiguous moment.

### Handling contradictory results

- **Different groups, different needs.** Administrators and members may genuinely want different things; that is a
  finding, not noise.
- **Stated vs. observed.** People say they want more options and then get lost in them. Trust behavior over opinion
  for usability; trust opinion for preferences and values.
- **Small numbers.** Two of five people struggling is a signal, not a percentage. Do not report "40 % failed".
- **Qualitative vs. quantitative disagreement.** Sessions show confusion; analytics show high completion. Possible
  causes: the people who struggle succeed eventually, or analytics count completions that were later undone. Look
  closer before choosing a side.

### When to stop

Stop researching when the next session is unlikely to change the decision: themes repeat, the riskiest assumptions
have evidence, and the remaining uncertainty is cheaper to resolve after release.

## Research across languages and cultures

- Test with people in the languages you ship, ideally with native moderators or translators who understand the goal.
- Translate tasks for meaning, not word for word; a task that sounds natural in one language may sound odd in another.
- Cultural norms affect sessions: in some cultures people avoid criticizing the moderator's work; politeness can mask
  problems. Emphasize that you are testing the product, not them, and watch behavior closely.
- Prices, examples and scenarios in tasks should be local.

## Ethics

- Informed consent: what will happen, what is recorded, how it is used, how to withdraw.
- Minimize data: record only what you need; mask sensitive information.
- Protect vulnerable participants: minors, patients, people in distress. Some studies need extra care or approval.
- Never deceive participants in ways that harm them; fake-door tests should explain themselves when people click.

## Recording and sharing

- **One short document per study**: decision it informs, question, method, participants (by behavior, not identity),
  findings with evidence (quotes, clips), confidence, recommendations, what remains unknown.
- **A findings repository** organized by topic, so knowledge survives between projects and people.
- **Share clips, not just conclusions.** A 30-second clip of someone struggling convinces more than a slide.

## Worked comparison

**Decision:** whether to replace a three-step onboarding with a single screen.

**Weak study.** The team sends a survey to existing customers asking "Would you prefer a shorter onboarding?". 82 %
say yes. They ship the single screen. Activation does not change; support tickets about misconfigured accounts rise.

- Asked a hypothetical question about preference.
- Asked people who had already completed onboarding, not people who abandoned it.
- No observation of behavior; no guardrail.

**Strong study.**

- *Decision and belief:* we believe people abandon at step 2 because it asks for data they don't have at hand.
- *Evidence first:* analytics show most abandonment at step 2; session recordings show people opening another tab and
  not returning.
- *Sessions:* six people who signed up recently and abandoned, recruited by behavior; tasks with realistic data.
  Observation: five of six left to find their tax ID; two came back.
- *Decision:* keep the steps, but make the tax ID optional at sign-up and request it before the first invoice, when
  people have it at hand.
- *Guardrail:* misconfigured-account tickets.
- *After release:* activation and the guardrail are tracked.

## Common mistakes

- **Method first, question second.**
- **Asking about the future** instead of observing the past and present.
- **Leading questions and helpful moderators.**
- **Recruiting whoever is available.**
- **Reporting percentages from five people.**
- **Mixing observation, interpretation and recommendation.**
- **Research that ends in a slide deck nobody uses for a decision.**

## Checklist

- [ ] The study names the decision it informs, the current belief and what would change it.
- [ ] The method fits the question (why vs. how much) and the cost of being wrong.
- [ ] Participants are recruited by behavior, including people at the edges and in the languages served.
- [ ] Tasks are realistic goals, piloted before the sessions.
- [ ] Moderation does not lead; assisted success is recorded as such.
- [ ] Findings separate observation, interpretation and recommendation, with confidence.
- [ ] Contradictions are investigated, not averaged away.
- [ ] Consent, privacy and participant wellbeing are handled.
- [ ] Results are recorded and shared with evidence, and tied to the decision.
