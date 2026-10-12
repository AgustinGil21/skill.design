# Workflow: quick demos and prototypes

A demo makes an idea tangible so it can be judged, compared or tested before it is built for real. It answers a
question; it is not a first draft of production. Build the smallest thing that answers the question, with real
content, and be explicit about what is simulated.

Read the design context first (`workflows/start.md`). For larger demos or several variants, delegate to the
`prototyper` agent, passing the skill folder path, the design context and the question.

A **demo** communicates an idea; a **prototype** investigates a question. They can share code, but they succeed
differently: a demo succeeds when the person understands and can choose; a prototype succeeds when it produces
evidence. Before building, write in two or three lines: the hypothesis or question, the task to try, what is real
and what is simulated, which states are included or deliberately left out, what result would count against the
idea, and whether any code is meant to survive.

## 1. Decide whether to demo, build or just talk

| Situation | Best move |
| --- | --- |
| The person cannot picture the idea, or directions must be compared | Demo |
| The flow or interaction is the uncertain part (timing, gestures, transitions) | Demo with that interaction working |
| The idea is clear, low risk and fits existing patterns | Build it directly |
| The question is strategic (what to build, for whom) | Talk and frame first; a demo would be premature |
| A test with people is planned | Demo with realistic content and the tasks they will do |

## 2. Choose fidelity and place

| Format | Good for | Cost |
| --- | --- | --- |
| ASCII or text sketch in the conversation | Structure and hierarchy, very early | Minutes; no visual judgment possible |
| Single self-contained HTML file | Directions, flows, visual feel; easy to share | Fast; does not use the real components |
| Variants side by side on one page | Comparing two to four directions | Slightly more; keeps the comparison fair |
| A route or story inside the project | Using real components, tokens and data shapes | Needs the project running; must stay out of production paths |

Standalone demos go in a `design-demos/` folder (or where the person says), never over real screens unless asked.

## 3. Build it honestly

- **Real content** in the product's language and formats, with long and empty values.
- **The states that matter** for the question (empty, loading, error, success); a visible state switcher is fine.
- **The brand and tone** from the design context, or a clearly marked neutral system if comparing structure only.
- **Accessible basics**: semantic HTML, keyboard, focus, contrast, reduced motion.
- **Label what is fake**: "Demo — simulated data" in the demo itself.
- **Variants that differ for real**, each labeled with its idea and trade-off.

## 4. Check it

- **Never hand back a demo you have not looked at.** Run
  `node scripts/screenshots.mjs file:///absolute/path/to/demo.html` (it works with the installed Chrome, no
  Playwright needed) or open it with a browser tool, read the images on phone and desktop, and fix what is broken.
  Only if no browser is available at all, say so explicitly.
- `node scripts/slop.mjs <files>` and `node scripts/a11y-static.mjs <files>`.
- Look at it on a narrow width and with the keyboard.

## 5. Present it and decide what's next

Say where it is and how to open it, the question it answers, what each variant tries, what is simulated, and what you
noticed while building it (problems a demo often reveals). Then recommend: test it with people
(`knowledge/16-research-and-testing.md`), refine, build it for real (`workflows/create.md`), or drop it.

When the demo becomes the real thing, rebuild it properly in the project's architecture rather than promoting
prototype code as is.
