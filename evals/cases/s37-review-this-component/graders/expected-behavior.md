---
type: "llm"
focus: "trace"
weight: 2
---

The project situation: A 400-line React component with `useEffect` fetching, restating comments and arbitrary values

PASS if the agent's behavior and output show this: Findings for architecture (split, data layer), comments (delete restating ones, extract labeled parts), styling (tokens and scale), tests; runs `system-check.mjs`

FAIL if it is missing or only superficial. Judge behavior and output, not wording.
