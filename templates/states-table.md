# States table

Fill this in before building anything with data, connections or processes.
See `knowledge/23-states-transitions-and-concurrency.md` and `knowledge/08-real-state-and-verification.md`.

| State | When it happens | What the person sees | What they can do | Exact copy |
| --- | --- | --- | --- | --- |
| First time (empty) | | | | |
| Loading | | | | |
| With data | | | | |
| A lot of data | | | | |
| Stale data (being refreshed) | | | | |
| Partial (something failed) | | | | |
| Error (everything failed) | | | | |
| No permission | | | | |
| Offline | | | | |
| Conflict (someone else changed it) | | | | |
| Limit or quota reached | | | | |
| Long-running process | | | | |
| Uncertain result (sent, not confirmed) | | | | |
| Success / done | | | | |

**Where each global state is shown** (a single source of truth): [fixed place]

**Which other views show the same data** (they must match): [list]

**Transitions that need care** (for example optimistic update rolled back, cancel after the server already
finished): [list]
