# AI products: chat, agents and generation

AI is a design material with three properties that change everything: **it takes time**, **it is sometimes wrong in
plausible ways**, and **it can act on the person's behalf**. Design has to show what it is doing, calibrate how much to
trust it, let people correct it, and never hide control. This pattern covers choosing the interaction, the composer,
responses, evidence, agents that act, generation, configuring assistants and evaluating results.

## The problem and who has it

- People who want an answer, a draft or a transformation faster than doing it themselves.
- People delegating multi-step tasks to an agent.
- People generating media (images, video, audio).
- Builders configuring assistants for others.

When AI interfaces fail: people trust wrong answers, cannot tell what the AI did, lose work to an action they did not
approve, waste credits on unclear prompts, or abandon a blank chat box that promised more than the system can do.

## Questions to ask before deciding

- **Is a chat the right interaction?** Or would a button, a form, inline suggestions or a direct edit be better?
- **What can the system actually do** with the data and tools it has?
- **How costly is a wrong result**: a typo in a draft, or a wrong number in a financial report?
- **What actions can it take**, and which are reversible?
- **What does it cost** (credits, money, time)?
- **Whose data does it use**, and is that data used for training?

## Alternatives and how to choose

| Task | Interaction | Why |
| --- | --- | --- |
| Open-ended questions, exploration | **Chat** | Flexible, conversational |
| A known transformation (summarize, translate, fix grammar) | **A button or menu action** on the content | One click, predictable |
| Suggestions while working | **Inline suggestions** (ghost text, highlights) to accept or reject | Stays in flow |
| Filling structured data | **Form with AI-prefilled values** marked as suggestions | Reviewable field by field |
| Multi-step work | **Agent with a plan, approvals and a log** | Delegation with control |
| Media creation | **Generation workspace** with prompt, parameters and gallery | Iteration |

A blank chat is the most flexible interface and the least discoverable. Use it when the space of requests is truly
open, and pair it with suggestions that the system can actually fulfill.

## When to ask, propose or abstain

| Situation | The system should |
| --- | --- |
| The request is ambiguous and a wrong guess is costly | **Ask** a clarifying question |
| The request is clear and the result is reviewable | **Propose** a result for review |
| The request is clear, low risk and reversible | **Act**, and show what it did with undo |
| The system lacks data or ability | **Abstain** and say what is missing |
| The request is harmful or out of policy | **Decline** with a short explanation |

## The composer (request field)

- **A large field with an inviting question** ("What can I help with?") and **chips for common tasks** below
  ("Make a presentation", "Deep research", [WRITER](https://mobbin.com/screens/a179dc40-b3ac-4129-ad6a-90501042982a)).
  Suggestions must correspond to real capabilities and available data.
- **Inside the field, at the bottom**: attach (+), tools, mode, model selector, voice and send
  ([Langdock](https://mobbin.com/screens/5b7f19d0-390c-4dde-9bf0-61074747c920),
  [ClickUp](https://mobbin.com/screens/5059281b-aadf-4533-84da-6c7c399aeea5)).
- **A model selector with "Best / Auto" first** and a line per model saying what it is good for, not only its name
  ([Dropbox Dash](https://mobbin.com/screens/536f1280-e59b-43c4-8dd0-3f0e91e15695)).
- **Attachments as cards** with type and size above the text; invalid formats flagged immediately
  ([Cohere](https://mobbin.com/screens/fe5cd405-0afc-4b50-984b-9ffbc1454c68)).
- **@ to mention** context, files, agents or skills, with a filterable picker.
- Enter sends, Shift+Enter adds a line (show it); while responding, the send button becomes **Stop**.
- A discreet note that it can make mistakes, under the field, once — not on every message.

## Responses

- **Visible steps while working**: "Reading 'file.csv'", "Searching the web", a task list with checks
  ([Langdock](https://mobbin.com/screens/5b7f19d0-390c-4dde-9bf0-61074747c920),
  [Lindy](https://mobbin.com/screens/9f4affd5-f387-4149-860e-95c83f9bbba5)). Collapsible: a one-line summary, detail
  on opening.
- **Streaming text** without layout jumps; auto-scroll follows the end only if the person was already at the end.
- **Sources cited** as chips or a "Sources" section below the answer
  ([Sana](https://mobbin.com/screens/bb8ca2ad-dfef-4929-a56a-52771f782ae3)).
- **Actions per response**: copy, thumbs up / down, regenerate, read aloud, share.
- **If something changed in the product**, the response says so and offers **Undo / View changes** right there.
- **Long results** (a document, code, a site) in a **side panel** with its own view (Lindy: browser / terminal).

### Evidence and uncertainty

- **A cited source is not proof the answer is right.** The cited document may not support the claim. Where possible,
  show the quoted passage that supports each claim, and let people open it.
- **Distinguish retrieved facts from generated text**: data from the person's systems ("Revenue in Q3: 1.2 M EUR, from
  your accounting system") vs. inferences ("This suggests…").
- **Express uncertainty in words** when the system is unsure: "I couldn't find the contract for 2024; this summary
  covers 2025 only."
- **Never invent numbers or states.** "Not available" is better than a fabricated value.

## Agents that act

- **Explicit permission levels**: reading freely; changes with notice; external or destructive actions with approval.
  Approval lives in the conversation as a card with "Approve", "Always in this session" and "Reject with reason".
- **Scope of delegation visible**: what the agent can access, for how long, on whose behalf.
- **The chosen mode always visible** as a chip in the field.
- **A plan before acting** for multi-step tasks, editable by the person.
- **Notify when a long task finishes** if the person went elsewhere.
- **History with restore points** for each large change.

### Cancelling with effects already executed

When the person stops an agent midway, some actions may already have happened (emails sent, records changed). Show
exactly what was done and what was not, and offer to revert what can be reverted: "Stopped. Sent 3 of 10 emails;
updated 2 records (Revert)."

## Generation (images, video, audio)

- **A fixed prompt field at the bottom**, results above in chronological order
  ([Krea](https://mobbin.com/screens/20668dcd-83b3-4d37-bd93-f5097461f75d),
  [Luma](https://mobbin.com/screens/9e14fff0-3b96-4b93-80ab-cc989c187287),
  [Higgsfield](https://mobbin.com/screens/5b5bfd12-36bb-4329-b4db-035822fdfcf5)).
- **Parameters as chips inside the field** (style, aspect ratio, resolution, count, model), not a form.
- **Each result with actions on hover** (vary, upscale, download, favorite) and a "⋯" menu for the rest (regenerate,
  reuse parameters, share, delete last).
- **Reuse parameters** from a result to keep iterating.
- **Result detail**: large on one side; on the other, the prompt, settings, reference and actions ("Use image", "Create
  video", "Save as template"; [Magnific](https://mobbin.com/screens/c403df5c-8bd9-44ec-8032-5bbe5cc251db)).
- **While generating**: a card where the result will appear, with progress or stage.
- **Credits visible** and the cost before generating ("2,991 free generations left").
- **Multi-select** in the gallery with an action bar (download, move, delete)
  ([Midjourney](https://mobbin.com/screens/7ea54e8d-ac6f-40ca-ab87-c000dc01f815),
  [Leonardo](https://mobbin.com/screens/942e470d-673b-4936-8753-ea9ae245a7f6)).

## Configuring an agent or assistant

- **Configuration on one side, live test on the other**: every change can be tried in the adjacent chat without
  publishing ([Langdock](https://mobbin.com/screens/5865d4ff-e759-4dd9-9ca1-1fba27e53db0),
  [Mistral](https://mobbin.com/screens/f3b88b5d-3e9e-4aae-bcc5-0c70d4e48125),
  [Chatbase](https://mobbin.com/screens/3f3efe3a-9471-49d8-83d2-5e0e22239f24)).
- **Fields in the order people think**: name and icon → description → instructions → knowledge → actions or tools →
  model. Instructions with an example and guidance on writing them.
- **Limits (what it must not do) as their own field**, separate from instructions ("Rules", Mistral).
- **Test "as" someone** (customer view, test user) and see the event log next to the conversation
  ([Intercom](https://mobbin.com/screens/10951cba-f3ef-4958-b6bd-4eba9a8adbe5)).
- **Sample questions to test** with one click ([Gorgias](https://mobbin.com/screens/a68782b3-efaa-4aa5-9212-0d5761efda3a),
  [HubSpot](https://mobbin.com/screens/6da9c4b1-5fd7-4917-b9dd-8dca2f516a30)).
- **Save and publish states visible** ("Saved" · "Private" · "Publish agent"); if inactive, say where to activate it
  ("Sam_bot isn't active. Assign it to a channel", HubSpot).
- **Knowledge sources with status** ("Trained 5 minutes ago · 70 KB") and retrain.
- **Insertable variables as chips with a fallback value** ("Hi {Name}" → if missing, "Hi"; Intercom).
- **Steps with checks** when configured as a wizard (Identity · Behavior · Knowledge · Actions · Publish;
  [PlayAI](https://mobbin.com/screens/fb07bf7f-8d4a-42ea-9d60-15d607265efe)).
- "Compare models" or "Reset instructions" as secondary actions, not in the main path.

## Trust and data

- Say what data is used and what is not (privacy, training) where data is loaded.
- Show cost and limits before they run out, and what happens when they do.
- Translate provider errors into what the person can do ("Usage limit reached; it resets Monday 09:00").
- Label AI-generated content where people need to judge reliability.

## Languages

- AI systems may answer in a different language than asked, or mix languages. Default to the language of the request
  or the interface, and let people choose.
- Quality varies by language; do not promise equal quality in all languages without testing.
- Interface copy around AI (buttons, statuses, disclaimers) is localized like any other copy.

## Evaluating quality

- **Define what a good result is** for each task (correct, complete, in the right tone, citing the right source).
- **Build a set of test requests** with expected properties, including hard and adversarial ones, in every supported
  language.
- **Collect feedback** (thumbs, corrections, regenerations) and review samples regularly.
- **Watch for plausible wrong answers**: they are more harmful than obvious failures.

## States and transitions

- Thinking/working, streaming, done, stopped by the person, failed, partially done, waiting for approval, out of
  credits, provider down.
- Long tasks continue in the background and are findable later.

## Accessibility specifics

- Streaming text should not be announced token by token; announce when the response completes, or in paragraphs.
- Stop, regenerate and copy are keyboard reachable and named.
- Approval cards are focusable and announced.
- Generated images need alternative text (generated or written) and people can edit it.

## Copy

- Status steps in plain language ("Reading your invoices").
- Errors and refusals short, specific and with a way forward.
- Avoid anthropomorphic overpromising ("I'm sure"); be clear about limits.

## Common mistakes and why they happen

- **Chat for everything** — because it is easy to add.
- **Suggestions the system cannot fulfill.**
- **Citations that do not support the claim.**
- **Agents acting without visible scope or approvals.**
- **Hidden costs** until credits run out.
- **No evaluation** beyond demos.

## Worked comparison

**Same request:** "Update the prices of all summer products by 10 %" in a store admin with an AI assistant.

**Weak.** The agent replies "Done! Updated 140 products." Some products had locked prices, some were in other
currencies, and rounding produced odd values. No list of changes, no undo.

**Strong.** The agent proposes a plan: "I found 152 products tagged Summer. 140 can be updated; 12 have locked prices.
New prices will be rounded to .99. Preview changes?" The preview lists old and new prices; the person approves; the
agent applies them and reports "140 updated · Revert all", with a link to the change log.

## How to verify and measure

- **Measure** task success with AI vs. without, correction rate, regeneration rate, undo after agent actions,
  escalations to humans, credit exhaustion.
- **Test** with realistic, messy data and in all supported languages.

## References

- WRITER — [composer with task chips](https://mobbin.com/screens/a179dc40-b3ac-4129-ad6a-90501042982a)
- Langdock — [composer and visible steps](https://mobbin.com/screens/5b7f19d0-390c-4dde-9bf0-61074747c920)
- ClickUp — [composer controls](https://mobbin.com/screens/5059281b-aadf-4533-84da-6c7c399aeea5)
- Dropbox Dash — [model selector with descriptions](https://mobbin.com/screens/536f1280-e59b-43c4-8dd0-3f0e91e15695)
- Cohere — [attachments](https://mobbin.com/screens/fe5cd405-0afc-4b50-984b-9ffbc1454c68)
- Lindy — [steps and side panel](https://mobbin.com/screens/9f4affd5-f387-4149-860e-95c83f9bbba5)
- Sana — [sources](https://mobbin.com/screens/bb8ca2ad-dfef-4929-a56a-52771f782ae3)
- StackAI — [agent builder](https://mobbin.com/screens/3046e4c7-f5a2-4b71-9c1c-5c0569897913)
- Zapier — [agent builder](https://mobbin.com/screens/6761055d-8af5-4783-b678-c7fc77132fd5)
- Krea — [generation workspace](https://mobbin.com/screens/20668dcd-83b3-4d37-bd93-f5097461f75d)
- Luma — [generation workspace](https://mobbin.com/screens/9e14fff0-3b96-4b93-80ab-cc989c187287)
- Higgsfield — [generation workspace](https://mobbin.com/screens/5b5bfd12-36bb-4329-b4db-035822fdfcf5)
- Magnific — [result detail](https://mobbin.com/screens/c403df5c-8bd9-44ec-8032-5bbe5cc251db)
- Midjourney — [gallery multi-select](https://mobbin.com/screens/7ea54e8d-ac6f-40ca-ab87-c000dc01f815)
- Leonardo — [gallery multi-select](https://mobbin.com/screens/942e470d-673b-4936-8753-ea9ae245a7f6)
- Langdock — [configure with live test](https://mobbin.com/screens/5865d4ff-e759-4dd9-9ca1-1fba27e53db0)
- Mistral — [configure with rules](https://mobbin.com/screens/f3b88b5d-3e9e-4aae-bcc5-0c70d4e48125)
- Chatbase — [configure with live test](https://mobbin.com/screens/3f3efe3a-9471-49d8-83d2-5e0e22239f24)
- Intercom — [test as someone, variables](https://mobbin.com/screens/10951cba-f3ef-4958-b6bd-4eba9a8adbe5)
- Gorgias — [sample questions](https://mobbin.com/screens/a68782b3-efaa-4aa5-9212-0d5761efda3a)
- HubSpot — [sample questions and activation state](https://mobbin.com/screens/6da9c4b1-5fd7-4917-b9dd-8dca2f516a30)
- PlayAI — [configuration steps](https://mobbin.com/screens/fb07bf7f-8d4a-42ea-9d60-15d607265efe)
