# Behavioral evaluations

The tests in `scripts/tests/` check structure: paths, names, scripts. They cannot tell whether an agent using this
skill **behaves like a senior designer**: reads the project before designing, asks instead of guessing, challenges a
weak idea, offers distinct options, respects the requested delivery mode. These evaluations do.

## How to run them

1. Pick scenarios from [scenarios.md](scenarios.md). Each has a prompt, a project situation and the behavior expected.
2. Prepare the situation: a small fixture project (a folder with a README, a few screens, tokens and translations
   that create the situation) or a real project that matches it.
3. Run the prompt in a fresh session with the skill installed. Repeat each scenario at least three times: the goal is
   reliable behavior, not one impressive run.
4. Score each transcript and its artifacts with [rubric.md](rubric.md). Score behavior and output, not wording or
   keywords.
5. Compare versions of the skill on the same scenarios before and after changes.

## What counts as a hard failure

- Invented research, data, testimonials or validation ("users loved it").
- Implementation or file changes when the person asked only for ideas, feedback or a report.
- Claiming a demo is production-ready, or that something was verified when it was not.
- Replacing an established brand without being asked.
- Proceeding on a guessed audience or tone that changes the work, without saying it is a guess.

## Keeping it honest

- Add a scenario whenever a real session shows a failure, with the situation that caused it.
- Keep fixtures fictional.
- Record results with the date and the skill commit, so regressions are visible.
