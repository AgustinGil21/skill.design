# Messaging

Messaging between people — direct messages, group chats, conversations with businesses or support — is one of the most
personal and most frequent interactions in products. People expect it to be instant, reliable and private, and they
notice immediately when a message is lost, misattributed or seen by the wrong person.

## The problem and who has it

- **People talking to friends or colleagues** in real time or asynchronously.
- **Customers talking to businesses** (support, sales, marketplaces).
- **Teams coordinating work** in channels and threads.
- **People at risk of harassment** who need control over who can reach them.

## Questions to ask before deciding

- **What kind of conversation**: social, support, work, marketplace negotiation?
- **One-to-one, small group, or large channel?**
- **Synchronous or asynchronous?** Do people expect instant replies?
- **What delivery guarantees exist**, and what does "sent", "delivered" and "read" mean?
- **Can messages be edited or deleted**, and what do others see?
- **What safety tools are needed** (block, report, message requests)?
- **What privacy around presence** (online status, read receipts)?

## Models of conversation

| Model | Example | Design emphasis |
| --- | --- | --- |
| **Social direct messages** | Friends chatting | Speed, expression (reactions, media), safety from strangers |
| **Support conversation** | Customer and agent | Context (order, account), handoffs, case status, response times |
| **Work channels** | Team discussion | Threads, mentions, search, notifications control |
| **Marketplace** | Buyer and seller | Structured actions (offers), safety, keeping transactions on platform |

## Anatomy and behavior

- **Header**: avatar, name, status ("Online", "Active 4 h ago") and call or video actions
  ([Instagram](https://mobbin.com/screens/db4e29c8-e47e-47ce-8f01-b7a98376c6e7)).
- **Context about the person at the start of a conversation** (who they are, since when, follow or view profile;
  [Substack](https://mobbin.com/screens/4510eb05-7ff6-4246-a149-ea1ff2d13bcf),
  [X](https://mobbin.com/screens/2d55fb20-142e-4ffd-9b1a-d44474448acd)).
- **Bubbles**: mine on the end side in the accent color, the other person's on the start side in neutral (mirrored in
  right-to-left); consecutive messages grouped (one avatar and one time per group).
- **Date separators** ("Today", "Thursday") and a time per group; "Sent" / "Read" only on my latest message.
- **Quoted replies** above the message ("Replying to…") and reactions attached to the bubble.
- **Composer at the bottom**: + (attach), growing text field, emoji or GIF, and a microphone that becomes "Send" when
  typing ([BFF](https://mobbin.com/screens/db352f6d-4d7d-41f1-a678-e66ee043da83)).
- **Attachments as a menu with icons and names** (photo, camera, audio, file) or a grid of product actions ("Create
  offer", "Quick reply"; [Fiverr](https://mobbin.com/screens/7e7fd05b-ea0f-4f4c-8e3a-39c3f5f0e66c)).
- **Suggested replies** as chips above the composer when they apply
  ([LinkedIn](https://mobbin.com/screens/2d4e03dd-3898-439e-b84a-43716f24a0b3)).
- **System events in small centered text** ("You turned on disappearing messages · Change").
- **Link previews; audio messages with waveform and duration.**

## Delivery, editing and deletion

| State | Meaning | Display |
| --- | --- | --- |
| Sending | Not yet confirmed by the server | A subtle clock, the message in place |
| Sent | The server has it | A single check or "Sent" |
| Delivered | It reached the recipient's device | Optional second indicator |
| Read | The recipient opened it (if both allow read receipts) | "Read" or a distinct indicator |
| Failed | It did not leave | "Not sent · Retry", the text kept |

- **Failed messages** stay in place with retry; never silently disappear.
- **Edited messages** show "Edited", with history if the context requires (work, legal).
- **Deleted messages**: say whether it is deleted for everyone or only for me, and show a placeholder ("This message was
  deleted") so the conversation stays coherent.
- **Order** follows the server time, with care when offline messages arrive late.

## Interpersonal safety

- **Message requests** from people who are not connected, separate from the main inbox.
- **Block and report** reachable from the conversation and the profile, with what each does explained (see
  [safety and moderation](safety-and-moderation.md)).
- **Control over presence and read receipts**; respecting that not everyone wants to show "online".
- **Hiding sensitive previews** on lock screens.
- **Media from strangers** blurred by default where appropriate.

## Edge cases

- Very long messages, code, links without spaces.
- Mixed languages and scripts in one conversation; right-to-left bubbles.
- Huge group chats: mentions, muting, threads.
- Messages arriving while scrolled up: "New messages ↓" instead of jumping.

## Accessibility specifics

- Messages read with author and time by screen readers; grouping does not hide authorship.
- New messages announced politely, without reading every message in busy chats.
- Composer and attachments keyboard accessible; voice messages with transcripts where possible.
- Reactions with accessible names.

## Copy

- Status labels short and consistent.
- Safety actions explained in plain words.
- System messages in the person's language.

## Common mistakes and why they happen

- **Optimistic messages that vanish on failure.**
- **Deleted messages that leave gaps** in context.
- **No message requests** — strangers land in the main inbox.
- **Read receipts forced on.**

## Worked comparison

**Weak.** On a train, a message shows as sent but never arrived; no indicator; later it is gone from the conversation.

**Strong.** The message shows a clock while sending; after the timeout, "Not sent · Retry" with the text kept; when the
connection returns, it retries automatically and shows "Sent".

## How to verify and measure

- **Test** with poor connectivity, large groups, right-to-left languages, screen readers.
- **Measure** failed sends, retries, block and report usage, message request acceptance.

## References

- Instagram — [conversation header](https://mobbin.com/screens/db4e29c8-e47e-47ce-8f01-b7a98376c6e7)
- Substack — [context at the start](https://mobbin.com/screens/4510eb05-7ff6-4246-a149-ea1ff2d13bcf)
- X — [context at the start](https://mobbin.com/screens/2d55fb20-142e-4ffd-9b1a-d44474448acd)
- BFF — [composer](https://mobbin.com/screens/db352f6d-4d7d-41f1-a678-e66ee043da83)
- Fiverr — [product actions in attachments](https://mobbin.com/screens/7e7fd05b-ea0f-4f4c-8e3a-39c3f5f0e66c)
- LinkedIn — [suggested replies](https://mobbin.com/screens/2d4e03dd-3898-439e-b84a-43716f24a0b3)
