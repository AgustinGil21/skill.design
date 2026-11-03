# Design leadership: principles, vision, critiques and reviews

At large companies, the work that shapes products most is not a screen: it is the principles that decide hundreds of
small trade-offs, the vision that aligns teams, the critiques that raise quality, and the reviews that let a decision
stick. This file covers how to write product design principles, frame a vision, run a critique, prepare and run a
design review with stakeholders, run a heuristic evaluation, and record decisions.

Related: [critique, feedback and options](31-critique-feedback-and-options.md), [decisions and trade-offs](21-decisions-and-tradeoffs.md),
[process](07-process.md), [problem framing](20-problem-framing.md).

## Product design principles

Principles are decision tools for a specific product, not values posters. "Simple", "delightful" and "user-centered"
decide nothing, because nobody argues for the opposite.

**A useful principle**:

- Is **specific to the product** and its people.
- **Chooses between two good things** ("Speed over completeness: show the answer now and refine it", "The record is the
  truth: nothing important lives only in a notification").
- Comes with **an example of a decision it settles** and, ideally, one it would have prevented.
- Is **few**: three to six.

**How to write them.**

1. Collect recent decisions where the team argued; find the trade-offs that keep coming back.
2. Draft each principle as "X over Y" or a short directive, with a one-paragraph why.
3. Test each against three past decisions: would it have helped decide? If not, rewrite or drop it.
4. Review with product and engineering leads; publish where decisions are made (design system docs, PR templates).
5. Revisit when the product's strategy changes.

## Vision work

A vision shows where the product could be in one to three years so teams can make today's decisions point the same
way. It is a direction, not a spec.

- **Grounded**: built from research, strategy and the problems people have now.
- **Concrete**: a few key moments (stories, storyboards, a prototype of the future flow), not abstract posters.
- **Honest about bets**: what has to be true for it to work, and what would make you change course.
- **Connected to now**: the first steps that move toward it, and what not to build because it leads elsewhere.

## Running a design critique

A critique improves the work; it is not approval and not a popularity contest.

1. **Set the frame** (presenter, 2–3 minutes): the problem, the people, the constraints, the stage (exploring,
   refining, final), and the specific feedback wanted.
2. **Clarifying questions only** first.
3. **Feedback against the goals**: "Given that coaches use this on a phone during training, the tap targets…" — not
   "I like" or "I'd do". Separate what works, what might not, and questions.
4. **Facilitator** keeps time, stops solutioning in the room, makes sure quieter people speak, and closes with a
   summary.
5. **Presenter decides** what to do with the feedback and says so afterwards.

Anti-patterns: critique as approval, feedback without the goal, the highest-paid person's taste deciding, redesigning
in the meeting, critiquing visual polish at the exploration stage.

## Design reviews with stakeholders

A review exists to **get a decision**. Prepare it like an argument.

- **Before**: know who decides and what they care about; send a one-page pre-read (problem, options, recommendation,
  trade-offs, open questions); talk to key people beforehand so nothing important surprises them.
- **In the room**: the decision needed in the first minute; the problem and evidence; two or three real options with
  costs; the recommendation; risks and how they will be measured; what you need from them.
- **After**: write the decision, who made it, the reasons, and what would make you revisit it; share it.

Show work at the fidelity that matches the question: flows and sketches for direction, prototypes for interaction,
polished screens only for final visual sign-off.

## Heuristic evaluation

A structured expert review against heuristics ([usability](03-usability.md)), cheaper than testing and good at finding
obvious problems; it does not replace research with people.

1. Define scope (flows, screens, devices) and the user and task for each flow.
2. Ideally, three to five evaluators review independently (one evaluator finds a fraction of the problems).
3. Each finding: location, heuristic, description, evidence, severity, fix.
4. Merge, deduplicate and rate severity together.
5. Report with priorities and what needs testing with people to confirm.

## Recording decisions

Design decisions get revisited when nobody remembers why. Keep short decision records: context, options, decision,
reasons, consequences, date, owner, what would make us revisit. Store them where the team works (repository, wiki)
([decisions and trade-offs](21-decisions-and-tradeoffs.md)).

## Working across functions

- **Product**: align on the problem and success metrics before solutions; disagree with evidence.
- **Engineering**: involve them from framing; design within constraints and negotiate them openly
  ([handoff](27-design-handoff-and-engineering.md)).
- **Research, content, legal, support, marketing**: bring them in where their knowledge changes the design, not at the
  end for sign-off.

## Worked comparison

**Situation:** a team keeps arguing about whether the invoicing app should show every option on the invoice screen.

**Weak.** Principles on the wall: "Simple. Delightful. Powerful." The argument continues in every review, decided by
whoever is most senior in the room, and no one writes down why.

**Strong.** A principle: "The common invoice in under a minute; everything else one step away" — with two past
decisions it would have settled (moving tax exemptions into an "Advanced" section; keeping the client picker on the
first screen). The next review starts with "We need a decision on the default fields", shows two options with costs,
and ends with a written decision record that names what would make the team revisit it.

## Checklist

- [ ] Principles are specific, choose between good things, and come with example decisions.
- [ ] A vision is grounded, concrete, honest about bets and connected to next steps.
- [ ] Critiques have a frame, feedback against goals and a facilitator.
- [ ] Reviews start with the decision needed, show real options and end with a written decision.
- [ ] Heuristic evaluations use several evaluators and rate severity together.
- [ ] Decisions are recorded with reasons and revisit conditions.
