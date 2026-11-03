# Behavioral evaluations

The tests in `skills/design/scripts/tests/` check structure: paths, names, scripts. They cannot tell whether an agent using this
skill **behaves like a senior designer**: reads the project before designing, asks instead of guessing, challenges a
weak idea, offers distinct options, respects the requested delivery mode. These evaluations do.

## How to run them

### Automated (Claude Code)

Every scenario in [scenarios.md](scenarios.md) is turned into a `claude plugin eval` case in [cases/](cases/) by
`node evals/build-cases.mjs`: a scaffold that writes the scenario's fixture into an empty workspace, the prompt, an LLM
grader for the expected behavior, an LLM grader for the failure to catch, and an indicator that the design skill
fired. Regenerate after editing a scenario or a fixture (a test fails when the cases are out of date).

From the repository root:

```bash
# All cases, three runs per arm, with and without the skill (the delta is what the skill adds):
claude plugin eval . --scaffold --allow-tools Write Edit Bash

# A few scenarios, one run, while iterating:
claude plugin eval . --tag scenario-27 scenario-35 --runs 1 --scaffold --allow-tools Write Edit Bash --threshold 0
```

- `--scaffold` runs the generated `fixture.sh` scripts (they only write the fixture's files); `--allow-tools` grants the
  tools that build scenarios need. Results and an HTML report go to `evals/cases/results/` (ignored by git).
- **Runs are real model calls and use the account's quota fast.** Each case runs the agent twice (with and without
  the skill) plus a judge; 16 cases on the default model used a five-hour subscription limit in about fifteen minutes.
  `--max-cost-usd` estimates list price; it does not protect a subscription's usage limit.
- **Cheap by default**: pick two to four scenarios with `--tag`, run one arm (`--ablation none`) when you only need to
  know whether behavior changed, use a smaller model for the agent and the judge, and no concurrency:

  ```bash
  claude plugin eval . --tag scenario-35 scenario-42 --ablation none --model sonnet --judge-model haiku -j 1 \
    --scaffold --allow-tools Write Edit Bash --threshold 0
  ```

  Keep full runs (every case, both arms, the default model) for before a release, and spread them over time.
- Scenario 22 is not generated: it needs live URLs and a browser.
- Record notable results in [results.md](results.md) with the skill commit.

### Automated (Codex)

`node evals/run-codex.mjs [--scenarios 27,35] [--runs 1]` runs the same generated cases with `codex exec`: each run
gets the fixture, the working copy of the skill linked as a project skill (`.agents/skills/design`) and a one-line
`AGENTS.md` pointer, and is graded by a Claude judge with the case's LLM graders. There is no baseline arm; compare
scores with the Claude runs and across skill versions. Results go to `evals/cases/results/codex-<timestamp>/`.

### Manual (any agent)

1. Pick scenarios from [scenarios.md](scenarios.md). Each has a prompt, a project situation and the behavior expected.
2. Prepare the situation: copy a fixture from [fixtures/](fixtures/README.md) to a temporary folder, or create a small
   fixture project that creates the situation.
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
