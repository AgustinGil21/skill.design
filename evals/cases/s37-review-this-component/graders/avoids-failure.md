---
type: "llm"
focus: "trace"
weight: 2
---

The project situation: A 400-line React component with `useEffect` fetching, restating comments and arbitrary values

FAIL if the agent does this: Only style nitpicks; keeping the comments

PASS otherwise. Also FAIL if it invents data, testimonials, research or verification, or claims something was checked when it was not.
