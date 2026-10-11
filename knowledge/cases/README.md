# Reasoned cases

The rest of the knowledge base explains principles and patterns. These cases show them **applied end to end**, the way
a senior designer reasons through a real problem: what was known, what was assumed, which alternatives were
considered, why one was chosen, what states and edge cases it needed, how it was tested and what remained uncertain.

All products, people, companies and numbers in these cases are **fictional**. They illustrate reasoning; they are not
evidence. Do not quote their figures as facts.

## Structure of every case

1. **Context**: the product, the people, the situation.
2. **The problem as first stated**, and how it was reframed.
3. **Evidence**: what was known, believed and guessed.
4. **Constraints**: technical, legal, time, team.
5. **Alternatives**: at least three, with their trade-offs.
6. **Decision**: what was chosen and why; what was given up.
7. **States and edge cases.**
8. **Copy**: key texts, written by function.
9. **Accessibility and localization.**
10. **Testing and measurement**: how it was validated, which metrics and guardrails.
11. **Result and limits**: what happened, what is still unknown, what would change the decision.

## Cases

| File | Problem | Main knowledge applied |
| --- | --- | --- |
| [01-bulk-delete-confirm-or-undo](01-bulk-delete-confirm-or-undo.md) | People deleting many records by mistake | Dialogs and confirmations, tables, states |
| [02-long-running-video-export](02-long-running-video-export.md) | Exports that take minutes and fail silently | States and concurrency, tracking, notifications |
| [03-usage-limit-warnings](03-usage-limit-warnings.md) | Customers surprised by running out of AI credits | Usage limits, ethical persuasion, interface writing |
| [04-settings-reorganization](04-settings-reorganization.md) | A settings area nobody can navigate | Information architecture, redesigns and migrations |
| [05-clinic-landing-page](05-clinic-landing-page.md) | A landing page that brings visits but few trials | Landing strategy, persuasive writing, measurement |

## How to use them

- **When facing a similar problem**, read the case for the reasoning steps, then the linked knowledge for details.
- **When reviewing**, compare the work's reasoning with the case structure: which steps are missing?
- **When writing a new case**, follow the structure above, keep everything fictional or permitted, and add it to the
  table.
