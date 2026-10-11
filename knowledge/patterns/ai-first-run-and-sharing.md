# AI first run and sharing results

The first time someone opens an AI assistant decides whether they understand what it can do for them; the moment they
share a result decides who else sees it, in what form and with what data. This pattern complements
[AI chat and agents](ai-chat-and-agents.md) and [file upload and sharing](file-upload-and-sharing.md).

## The problem and who has it

- **New people** facing an empty prompt box do not know what to ask, and either ask something trivial or something the
  system cannot do. Both end in disappointment.
- **People with results** (an answer, a document, an image, a deck) want to share them — with a colleague, publicly, or
  as a file — and often do not realize what else travels with them (sources, private data, the whole conversation).

## Questions to ask before deciding

- **Is a conversation the right first experience**, or would a direct action, a template or a guided task be better?
- **What can the system do with this person's data and connected tools** today?
- **What will a first failure look like**, and how does the person recover?
- **When sharing**: is it a snapshot or a live link? The answer, the conversation, or a document? Who can see it, and can
  it be revoked? Does it include private sources?

## Alternatives for the first run

| Situation | Option | Why |
| --- | --- | --- |
| Open-ended assistant with many capabilities | Prompt plus specific suggestions | Shows range without limiting |
| Assistant for a narrow job | A guided task ("Summarize a meeting: upload the recording") | Removes guessing |
| Assistant inside another product | Suggestions based on the current screen | Relevant from the first moment |
| Uncertain value | A worked example the person can run on sample data | Shows a result before asking for effort |

## Anatomy and behavior: the empty assistant

- **The field is the protagonist**, centered, with a short greeting by name ("Hi, Alex") and a placeholder that invites
  a concrete request ([WRITER](https://mobbin.com/screens/c3f8b744-4ff6-4f1c-8d95-5d9f56da86a3),
  [SchoolAI](https://mobbin.com/screens/9f4e0804-c3ff-4456-aa14-07c8d7ad852f)).
- **Suggestions that teach what it can do**, specific to the product and the person's data ("How many vacation days do
  I have left?"; [Deel](https://mobbin.com/screens/db357932-0e83-43e7-89ff-5f47a06ef246)), not "Write a poem".
  **Every suggestion must work**: an example that fails on first click destroys trust.
- **Group suggestions by intent** (Understand · Create · Explore;
  [Bard](https://mobbin.com/screens/0b456c9e-559e-4e13-8783-d9c9a4423bc7)) or by task with quoted examples
  ([Copy.ai](https://mobbin.com/screens/7a691954-e171-4668-8329-5f8aa5b7c9fe)).
- **Tools as chips under the field** (Create document · Generate image · Research;
  [Langdock](https://mobbin.com/screens/80e91145-fa23-4920-82d9-08a0fcf3208c)) and connected sources with their icons
  ([Sana](https://mobbin.com/screens/fe7c21c5-9cf7-4a97-9d8a-7acf3cb6297d)).
- **A "+" menu** to attach, mention pages or people, and choose modes (research;
  [Notion](https://mobbin.com/screens/7f5c8c5c-01c0-4b83-a505-cf3fe0bd49bc)).
- **Limits and privacy in one line** near the field ("It can make mistakes; check what matters", "Your data isn't
  shared"), and longer notices dismissible with "Don't show again" (Bard).
- **Remaining usage visible but discreet** ("10 meetings and 20 messages this month", Sana).
- **Tips that go away** ("Use # to cite your knowledge base"; Copy.ai).
- **Conversation scope** when it is shared ("Chat shared with the whole team · Make private").
- **Anti-example**: a grid of twelve generic suggestions that pushes the field out of view.

### Calibrating expectations

- Say what the assistant has access to ("I can see your projects and calendar; not your email").
- Say what it cannot do, at the moment someone tries ("I can't send emails yet; here's a draft to copy").
- Avoid marketing language that overpromises ("knows everything about your business").

### The first failed attempt

The first response that misses shapes the whole relationship. Design it:

- Explain why it missed when the system knows ("I couldn't find a contract named 'Lisboa'. Did you mean 'Lisbon
  Coffee 2026'?").
- Offer a better next step: a suggested rephrase, a source to connect, a related capability.
- Make feedback one click, and show that it matters.

## Sharing a result

### What exactly is shared

| Shared object | Updates? | Includes |
| --- | --- | --- |
| A single answer (snapshot) | No | The answer as it is now |
| The whole conversation | Maybe (live link) | All messages, possibly attachments |
| A generated document or file | Depends | The content, maybe sources |
| A live link to a workspace object | Yes | Whatever the object contains now and later |

Make the choice explicit, and preview what the recipient will see.

### Anatomy and behavior

- **Options grouped by intent** in tabs: Collaborate · Share link · Export · Embed
  ([Gamma](https://mobbin.com/screens/8665be6a-dd30-4335-aca3-589b43ed7760)).
- **A link with explicit scope and "Copy"** with confirmation ("Anyone with the link can view and remix";
  [Luma AI](https://mobbin.com/screens/e37a44b9-647c-43e0-b39b-700415b201f6)); private with a token vs. public "not for
  sensitive information" ([Causal](https://mobbin.com/screens/f29fcd70-6062-419e-adcd-e9af071f1718)).
- **An image ready for social media generated on the spot**, with selectable aspect ratio (1:1 · 3:4 · 16:9), light or
  dark theme and "Copy image" / "Download" ([Perplexity](https://mobbin.com/screens/081b09a1-df6a-42c5-aa8c-72a1330aba70)).
- **Per network, what each needs**: direct sharing where possible, "Download for Instagram / TikTok" where not
  ([Patreon](https://mobbin.com/screens/7a092dd0-bbae-432a-842e-23b5693062ee)).
- **Exports with their limits stated** ("Some effects don't appear in PDF or PowerPoint") and what to install (fonts);
  "It's safe to close this panel" while generating (Gamma).
- **A privacy reminder in the moment** ("Check there's no sensitive information";
  [Copilot](https://mobbin.com/screens/dde10dff-04c6-4b7f-b1f7-da7cbda04ce8)).
- **Choose what to share** when there are variants (offer, page range;
  [Kajabi](https://mobbin.com/screens/2ee7d436-91d1-40d1-b9ad-b7254f9ada36)).
- **After publishing**, celebrate and offer sharing in the same place ("Your post is ready to share", Patreon).
- **Hiding the product's branding** ("Made with…") as a plan option, stated openly.

### Private sources and revocation

- If an answer used private documents, the shared version should not expose content the recipient cannot access —
  either omit those citations, or warn before sharing ("This answer cites 2 documents your recipients can't open").
- **Revoke and update**: list active links with their scope and "Disable link"; say whether people who already opened
  it keep a copy.
- **Expiry**: optional link expiration for sensitive shares.

### Previewing as the recipient

"View as recipient" shows exactly what someone with the link sees, including language, missing permissions and
branding.

## States and edge cases

- Suggestions loading or unavailable (connected sources still indexing): say so.
- Sharing while generation is still running.
- Links opened by people in other organizations or without accounts.
- Exports in other languages and scripts (fonts in PDFs).

## Accessibility specifics

- Suggestions are buttons with full text as their names.
- Share dialogs follow dialog patterns; copied confirmation announced.
- Generated share images have alternative text.

## Copy

- Suggestions written as real requests in the person's language.
- Share scope stated in plain words ("Anyone with the link can view").

## Common mistakes and why they happen

- **Generic suggestions** that do not use the person's context.
- **Suggestions that fail.**
- **Sharing the whole conversation** when only the answer was meant.
- **Leaking private sources** in shared answers.
- **Links that cannot be revoked.**

## Worked comparison

**Same assistant:** an HR assistant connected to the company's policies and the person's records.

**Weak.** An empty box with "Ask me anything" and suggestions like "Write a haiku about Mondays". Sharing an answer
creates a public link to the whole conversation, including the person's salary question.

**Strong.** "Hi, Alex. Ask about your time off, payslips or company policies." Suggestions: "How many vacation days do
I have left?", "When is the next payday?", "What's the parental leave policy?" Each works on first click. Sharing
offers "Share this answer" (snapshot, policy citations only, personal data removed) with a preview as recipient.

## How to verify and measure

- **Measure** first-session success (a useful answer), suggestion click-through and success, share volume and link
  revocations, reports of accidental exposure.
- **Test** first run with people who have never used the assistant, and sharing with recipients outside the
  organization.

## References

- WRITER — [empty assistant](https://mobbin.com/screens/c3f8b744-4ff6-4f1c-8d95-5d9f56da86a3)
- SchoolAI — [empty assistant](https://mobbin.com/screens/9f4e0804-c3ff-4456-aa14-07c8d7ad852f)
- Deel — [suggestions using the person's data](https://mobbin.com/screens/db357932-0e83-43e7-89ff-5f47a06ef246)
- Bard — [suggestions by intent and dismissible notices](https://mobbin.com/screens/0b456c9e-559e-4e13-8783-d9c9a4423bc7)
- Copy.ai — [suggestions by task and tips](https://mobbin.com/screens/7a691954-e171-4668-8329-5f8aa5b7c9fe)
- Langdock — [tools as chips](https://mobbin.com/screens/80e91145-fa23-4920-82d9-08a0fcf3208c)
- Sana — [connected sources and usage](https://mobbin.com/screens/fe7c21c5-9cf7-4a97-9d8a-7acf3cb6297d)
- Notion — [plus menu](https://mobbin.com/screens/7f5c8c5c-01c0-4b83-a505-cf3fe0bd49bc)
- Gamma — [share options by intent](https://mobbin.com/screens/8665be6a-dd30-4335-aca3-589b43ed7760)
- Luma AI — [link scope](https://mobbin.com/screens/e37a44b9-647c-43e0-b39b-700415b201f6)
- Causal — [private vs. public links](https://mobbin.com/screens/f29fcd70-6062-419e-adcd-e9af071f1718)
- Perplexity — [share image](https://mobbin.com/screens/081b09a1-df6a-42c5-aa8c-72a1330aba70)
- Patreon — [per-network sharing](https://mobbin.com/screens/7a092dd0-bbae-432a-842e-23b5693062ee)
- Copilot — [privacy reminder](https://mobbin.com/screens/dde10dff-04c6-4b7f-b1f7-da7cbda04ce8)
- Kajabi — [choose what to share](https://mobbin.com/screens/2ee7d436-91d1-40d1-b9ad-b7254f9ada36)
