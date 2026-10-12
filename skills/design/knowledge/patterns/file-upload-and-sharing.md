# File upload and sharing

Uploading looks like one action but is a lifecycle: choosing, validating, transferring, processing and becoming
available. Sharing looks like one dialog but is a permissions decision: who gets access, to what, through which
mechanism, for how long. Both fail in ways people discover late — a file that "uploaded" but never processed, a link
the recipient cannot open, a folder shared with more people than intended.

## The problem and who has it

- **People adding files**: documents, images, videos, datasets.
- **People sharing work** with colleagues, clients or the public.
- **Recipients** who receive a link and need to open it.

## Questions to ask before deciding

- **Which files, sizes and quantities** are realistic?
- **What happens after upload**: processing (thumbnails, transcoding, scanning, extraction)? How long?
- **What about duplicates and replacements?**
- **Who should get access, and how**: by identity (invitation) or by possession (link)?
- **Is access inherited** from folders or workspaces?
- **Will the content change after sharing?** Do recipients see the latest version?
- **Can access be revoked or expire?**

## The file lifecycle

| State | Meaning | Display |
| --- | --- | --- |
| Selected | Chosen, not yet validated | Listed with name and size |
| Rejected | Fails type, size or count rules | The reason in the row; others continue |
| Uploading | Transferring | Progress per file; pause or cancel |
| Uploaded | Transfer done, not yet usable | "Processing…" |
| Processing | Server work (thumbnails, scanning) | Stage when known |
| Available | Usable | Check, open action |
| Failed | Upload or processing failed | Reason and retry |
| Duplicate detected | Same name or content exists | Replace / keep both / skip |

"Uploaded" is not "available". Show the processing state so people do not share or use files that are not ready.

## Uploading: anatomy and behavior

- **A drop zone plus a "Choose files" button** — not drag only: dragging does not exist on touch and is hard with a
  keyboard.
- **Say beforehand what is accepted**: formats, maximum size and count ("PNG, JPG or PDF · up to 20 MB · max 5",
  [OKX](https://mobbin.com/screens/3776bca3-ff7e-42dd-be47-06ca77400f86),
  [Fiverr](https://mobbin.com/screens/9feef30c-b0e1-4cde-ac17-6d149f641206),
  [Fireflies](https://mobbin.com/screens/0e45d455-f884-44a9-8600-16830793250e)).
- **A list of files with their own status**: name, size, type, progress, a check when done, remove or retry
  ([AirOps](https://mobbin.com/screens/3c80b45c-6d21-4bd7-9e60-41ab67ef25e5),
  [Lindy](https://mobbin.com/screens/7dcd57a7-d2e9-4742-bb0f-9e7b364c139b)).
- **Clear rejections per file**: "video.mov is larger than 20 MB" in the row, without losing the others.
- **Background upload** with a floating panel ("Uploading 1 file",
  [Fireflies](https://mobbin.com/screens/0e45d455-f884-44a9-8600-16830793250e)) so people can keep working.
- **A final button with the count** ("Upload 1 file", [Retool](https://mobbin.com/screens/cd65f886-e1ca-405a-b230-361b4499e25a)).
- **When dragging over the page**, the zone highlights ("Drop to upload").
- **Per-file metadata only when needed**, inside the same row ([Vanta](https://mobbin.com/screens/4544d6e1-996a-4ad0-9628-ae2ae7b52498)).
- **Large imports** (CSV, migrations) as steps: Upload → Map fields → Review → Finish
  ([Zoho](https://mobbin.com/screens/64aae743-c41b-4f30-a97a-c45d07f16f1e)); see
  [import, tags and cropping](import-tags-and-cropping.md).
- **Quota visible before uploading** when it exists ("0 % of storage used",
  [SoundCloud](https://mobbin.com/screens/768e3355-763b-4926-95de-f165d59d638b)).

### Resuming, duplicates and replacements

- **Large uploads should resume** after a lost connection, not restart.
- **Duplicates**: "contract.pdf already exists in this folder. Replace it, keep both (contract (2).pdf), or skip?"
- **Replacements**: keep version history so a replaced file can be restored (see
  [profile, brand kit and version history](profile-brand-kit-and-version-history.md)).
- **Verify** integrity for critical files and say when processing (virus scan, format conversion) changed something.

## Sharing: anatomy and behavior

A structure most products repeat
([Asana](https://mobbin.com/screens/71b098f6-f160-4d1c-8798-f793f92b2633),
[Perplexity](https://mobbin.com/screens/8f409869-4d08-42c4-8092-512f33a17277),
[Coda](https://mobbin.com/screens/4b7bcfd9-6a35-4ac8-b8de-7ea015ceac03),
[Dropbox Dash](https://mobbin.com/screens/8a353f34-8f05-4af0-9a63-1a9070931822)):

1. **Invite**: an email field (several, comma separated) + role selector + "Invite".
2. **Who has access**: a list with avatar, name, email and an editable role per person; "Owner" fixed; pending
   invitations marked ("Pending", "Resend invitation").
3. **General access**: "Only invited people" / "Anyone in the workspace" / "Anyone with the link", each with what they
   can do.
4. **Copy link** at the bottom, with "Copied" confirmation.

- **Explain each role in the menu**: "Editor: can add, edit and delete…", "Viewer: can view, not comment" (Asana).
  Remove access at the end of the menu, styled as destructive.
- **Public vs. private as two cards** with an icon and one line, when it is the main decision
  ([Higgsfield](https://mobbin.com/screens/86ab7ca2-9e84-479e-addb-bfb91fefbeed)).
- **Warn about non-obvious consequences** in the dialog ("People with access will also see the content included",
  Dropbox Dash).
- **Suggest people from the workspace** while typing.
- **Confirm with a toast** ("Permissions updated") without closing the dialog.

### Link, invitation or publication?

| Mechanism | Access by | Good for | Risk |
| --- | --- | --- | --- |
| **Invitation** | Identity (account) | Ongoing collaboration | Recipients need accounts |
| **Link with restrictions** | Possession + identity check (workspace members) | Sharing inside an organization | Confusion when outsiders receive it |
| **Public link** | Possession | Quick sharing | Forwarding to anyone; search indexing if posted |
| **Publication** | Anyone | Public content | Hard to recall copies |

### Effective access

People need to understand who can **actually** see something, including inherited access:

- Show inherited access ("3 people have access through the folder 'Clients'").
- When moving an item into a shared folder, warn: "Moving this into 'Clients' will give 12 people access."
- Explain why someone cannot be removed (access comes from a group or a parent folder).
- See [permissions, identity and scope](permissions-identity-and-scope.md).

### Previewing as the recipient

"Preview as recipient" or a clear statement of what a recipient will see prevents the most common sharing failure: the
recipient cannot open the link. Before sending, check whether the recipient has access, and offer to grant it.

### Revocation, expiry and change after sharing

- **Revoke** individual access and disable links; say whether copies already downloaded remain.
- **Expiry** for links when appropriate.
- **Live vs. snapshot**: say whether recipients see future changes.

## Edge cases

- Huge files and folders; thousands of files at once.
- Names with characters invalid on some systems; very long names (truncate in the middle).
- External recipients without accounts; recipients in blocked domains.
- Ownership transfer when the owner leaves.

## Accessibility specifics

- The file picker button is the primary path; drag and drop is an enhancement.
- Per-file progress and errors announced.
- Share dialogs with labeled role selectors; changes announced.

## Copy

- Accepted formats and sizes before upload.
- Roles described by what people can do.
- Access summaries in plain language ("Anyone at Lisboa Coffee with the link can view").

## Common mistakes and why they happen

- **"Uploaded" shown before processing finishes.**
- **Drag-only upload.**
- **Inherited access invisible.**
- **Links recipients cannot open.**
- **No revocation.**

## Worked comparison: a copied link the recipient cannot open

**Weak.** A person copies a link to a document and sends it to a client. The client sees "Request access". The sender
never knew the link was restricted to the workspace.

**Strong.** When copying, the dialog says "Only people at Lisboa Coffee can open this link." Adding the client's email
shows "ana@client.pt is outside your organization · Give view access?" and confirms "Ana can now view this document."

## How to verify and measure

- **Test** uploads on slow networks, with duplicates and large files; sharing with internal and external recipients.
- **Measure** upload failures, processing time, access requests after sharing (a sign links were misconfigured), and
  public link usage.

## References

- OKX — [accepted formats stated](https://mobbin.com/screens/3776bca3-ff7e-42dd-be47-06ca77400f86)
- Fiverr — [accepted formats stated](https://mobbin.com/screens/9feef30c-b0e1-4cde-ac17-6d149f641206)
- Fireflies — [formats and background upload](https://mobbin.com/screens/0e45d455-f884-44a9-8600-16830793250e)
- AirOps — [file list with status](https://mobbin.com/screens/3c80b45c-6d21-4bd7-9e60-41ab67ef25e5)
- Lindy — [file list with status](https://mobbin.com/screens/7dcd57a7-d2e9-4742-bb0f-9e7b364c139b)
- Retool — [button with count](https://mobbin.com/screens/cd65f886-e1ca-405a-b230-361b4499e25a)
- Vanta — [per-file metadata](https://mobbin.com/screens/4544d6e1-996a-4ad0-9628-ae2ae7b52498)
- Zoho — [import steps](https://mobbin.com/screens/64aae743-c41b-4f30-a97a-c45d07f16f1e)
- SoundCloud — [quota before upload](https://mobbin.com/screens/768e3355-763b-4926-95de-f165d59d638b)
- Asana — [share dialog and role descriptions](https://mobbin.com/screens/71b098f6-f160-4d1c-8798-f793f92b2633)
- Perplexity — [share dialog](https://mobbin.com/screens/8f409869-4d08-42c4-8092-512f33a17277)
- Coda — [share dialog](https://mobbin.com/screens/4b7bcfd9-6a35-4ac8-b8de-7ea015ceac03)
- Dropbox Dash — [share dialog with consequences](https://mobbin.com/screens/8a353f34-8f05-4af0-9a63-1a9070931822)
- Higgsfield — [public vs. private cards](https://mobbin.com/screens/86ab7ca2-9e84-479e-addb-bfb91fefbeed)
