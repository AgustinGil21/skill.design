# Wallets, transfers to new recipients, and crypto

Sending money to someone new, and holding assets the person controls (self-custody), are the two moments in money apps
where one mistake can be permanent. This pattern covers recipient verification, scam warnings, review steps, fees and
networks, recovery phrases and signing requests. It extends [money and progress](money-and-progress.md) (amounts,
transfers, transaction lists) and the money section of [product archetypes](../39-product-archetypes.md).

## The problem and who has it

- **Bank and payment app users** paying a new person or business: invoice fraud and impersonation scams target this
  exact step.
- **Crypto wallet users**, from first-timers to experts, sending tokens, swapping, connecting to apps and signing
  transactions they often cannot read.
- **The product**: liable in some markets for scam losses, judged on trust, and unable to reverse on-chain transfers.

What makes it different from other forms: **irreversibility**, **adversaries** (attackers design inputs to fool
people) and **unreadable identifiers** (account numbers, 42-character addresses).

## Questions to ask before deciding

- **Is the transfer reversible?** Bank rails sometimes allow recall; blockchain transfers do not.
- **Can the recipient be verified?** Name-check services (Confirmation of Payee in the UK, similar checks elsewhere),
  name services for addresses (ENS-style names), the person's own history.
- **Who holds the keys?** A custodial app (an exchange) can recover access; a self-custody wallet cannot.
- **What does the person need to understand** to make this decision, and what can the product check for them?
- **What attacks are common here?** Impersonation calls, invoice redirection, address poisoning, malicious approvals.

## Alternatives and how to choose

| Situation | Option | Why | Cost |
| --- | --- | --- | --- |
| Paying a saved, verified recipient | Fast path, short review | Frequent, low novelty | Must still show the recipient clearly |
| First payment to a new recipient | Verification + specific warning + full review | Highest-risk moment | One or two extra steps |
| Name check returns a close match or no match | Stop and explain options (check with the recipient, edit, continue at own risk) | Most fraud lives here | Some legitimate payments slowed |
| Crypto send to an address never used before | "New address" warning with the full address | Address poisoning and typos | One extra confirmation |
| Pasted address similar to one in history | Strong warning showing both addresses with differences highlighted | Lookalike addresses are the attack | Rare false alarms |
| Signing an approval that grants spending rights | Plain-language summary of what is granted, to whom, how much; unlimited approvals flagged | People sign what they cannot read | Needs transaction decoding or simulation |

## Anatomy and behavior: paying someone new

1. **Recipient details** with input formats for the rail (sort code and account, IBAN, BSB), validated as typed.
2. **Verification** with a clear in-progress state ("Checking the details with the Confirmation of Payee service";
   [ANZ Plus](https://mobbin.com/flows/526d53d9-6d75-4809-ae8d-d05a1de39b9d)) and an honest result: "We've matched the
   name below with the receiving bank. It's still important to check you're sending money to who you think you are."
   ([Starling](https://mobbin.com/flows/796e17ad-63ee-428e-8a15-91c3d0a4e919)). A match reduces risk; it does not
   prove the payment is safe, and the copy says so.
3. **Context warnings where fraud happens**: "We've never spoken to you on the phone. If anyone on the phone says it's
   Starling, it's a scam." ([Starling](https://mobbin.com/flows/588805d1-2dab-47f1-8ebb-2235862c1b2b)); "You haven't
   paid any money into this account this year."
4. **Amount** with available balance and limits ([ANZ Plus](https://mobbin.com/flows/526d53d9-6d75-4809-ae8d-d05a1de39b9d)).
5. **Review**: recipient name and full identifiers, amount, fees, arrival time, reference.
6. **Result** with the real state (sent, pending, scheduled), date and time with time zone, and a receipt
   ([ANZ Plus receipt](https://mobbin.com/flows/526d53d9-6d75-4809-ae8d-d05a1de39b9d)).

## Anatomy and behavior: crypto send

1. **Recipient**: name-service search, people, recent addresses, paste and scan
   ([Phantom](https://mobbin.com/flows/3316db6f-f0a1-4c33-b8a3-c6e3facb6ca5),
   [Binance](https://mobbin.com/flows/4d6db478-6145-4733-8bb5-eefd42483382)).
2. **New-address check**: "You haven't transacted with this address before. Please confirm that the address is
   correct before continuing." ([Uniswap](https://mobbin.com/flows/e0f61b46-6290-4a24-bc69-69e826490112)).
3. **Lookalike check** on paste: compare with history and flag near-matches (same first and last characters) with
   both addresses shown and the differences highlighted.
4. **Amount** with the asset, fiat equivalent, "Max" that accounts for fees.
5. **Network and fee** explained where they appear: "This is the cost to process your transaction on the blockchain.
   Uniswap does not receive any share of these fees." ([Uniswap](https://mobbin.com/flows/e0f61b46-6290-4a24-bc69-69e826490112)).
6. **Review**: amount, network, fee, and the **full** recipient address. Phantom's summary shows "CwiH…DTnF"
   ([Phantom](https://mobbin.com/flows/3316db6f-f0a1-4c33-b8a3-c6e3facb6ca5)): truncation in the final review is the
   exact weakness address poisoning exploits; show it complete, grouped for reading, with the name if verified.
7. **Irreversibility stated once, plainly**: "Once sent, this can't be reversed." Binance adds a one-time safety sheet
   ([Binance](https://mobbin.com/flows/4d6db478-6145-4733-8bb5-eefd42483382)); one specific sentence at review is
   more effective than a sheet people learn to dismiss.
8. **Pending as its own state** in activity until confirmed
   ([Phantom activity](https://mobbin.com/flows/3316db6f-f0a1-4c33-b8a3-c6e3facb6ca5)); no success animation before
   confirmation.

## Recovery phrases and keys

- **Backup is part of setup**, with options explained: cloud backup protected by a password, or writing the phrase
  down, or both ([Uniswap](https://mobbin.com/flows/05420153-08fe-4b86-841a-5856c9850d92),
  [Coinbase Wallet](https://mobbin.com/flows/d3cb548a-9c26-4f44-9345-babf2d5d91a2)). Explain what a recovery phrase is
  in one sentence ("a set of words required to access your wallet, like a password").
- **Persistent status** when not backed up ("Not backed up" in the profile; Coinbase Wallet), never a nag on every
  screen.
- **Revealing the phrase is gated**: warnings in plain language, an acknowledgment, system authentication, and the
  words hidden until the person chooses to reveal them
  ([Phantom](https://mobbin.com/flows/1c019b72-1213-4f94-ae9d-b3dd5f0fbd78),
  [Phantom show](https://mobbin.com/flows/f9206cbe-976b-48b9-9112-6ed7fcc0dd03)).
- **Copy to clipboard** for a recovery phrase is risky (other apps can read the clipboard); avoid it, or warn and
  clear the clipboard after a short time.
- **Never ask for the phrase** anywhere except the restore flow, and say so ("We will never ask you for these words").
- **Private key export** follows the same gates, with stronger warnings.

## Signing and approvals

- **Translate what is signed**: "Allow [app] to spend up to 500 USDC from this wallet" rather than raw data.
- **Flag unlimited approvals** and unknown contracts; offer a limited amount.
- **Simulation** (showing balance changes before signing) helps but has limits: it can be fooled, and a hardware
  wallet's own screen is a stronger check against a compromised computer. Say what was checked.
- **Approval fatigue**: if people sign constantly, they stop reading. Batch where possible and keep warnings for what
  is unusual.
- **A place to review and revoke approvals** ("Token allowances"; Coinbase Wallet).

## States and edge cases

- Verification service unavailable: say so; let the person decide with that information, or wait.
- Name partially matches (a nickname, a business vs. trading name): show what was returned and the options.
- Network congestion: fee changes between review and signing; re-show the new fee before sending.
- Wrong network for the asset: block, explain, never let funds go to an unsupported network silently.
- Stuck or dropped transaction: explain what the network is doing and the options.
- Device lost: the recovery path is explained before it is needed.
- Scam in progress (someone on the phone): a clear way to stop and contact the real support.

## Accessibility specifics

- Long identifiers are read in groups by screen readers and can be copied; never as images.
- Warnings are not only red: an icon and text; announced when they appear (WCAG 4.1.3).
- Authentication alternatives to biometrics.
- No time limits on review screens; if a quote expires, say so and refresh without losing input (WCAG 2.2.1).
- Amounts with currency names available to screen readers, not only symbols.

## Copy

- **Verification**: what was checked and what it does not prove.
- **Warnings**: specific to the situation and short ("You have never sent money to this address").
- **Irreversibility**: one sentence, at the decision point.
- **Buttons**: "Send 1 USDC", "Pay £170.00", "Sign approval for 500 USDC".
- **Never**: "Success!" for pending, jokes, celebration of trades, "Don't miss out" around prices.
- In other languages: keep financial and security terms consistent with the local banking vocabulary.

## Common mistakes and why they happen

- **Truncated identifiers in review**, because full addresses do not fit the design.
- **Generic warning sheets** shown every time, because compliance asked for a warning.
- **Celebration on send**, copied from consumer apps.
- **Copy to clipboard for secrets**, because it is convenient.
- **No pending state**, because the backend returned "submitted" and the UI called it done.

## Worked comparison

**Weak.** "Send" → paste address → amount → "Summary: To 0x7094…2242 · Network fee $2.52" → "Send" → confetti and
"Success!".

**Strong.** "Send" → paste address → "You haven't sent to this address before" and, because the pasted address shares
its first and last characters with one in history, a warning showing both with the differing characters highlighted →
amount with "Max (minus fee)" → review with the full address in groups, network, fee explained, "Once sent, this can't
be reversed" → "Send 0.25 ETH" → activity shows "Pending" until confirmed, then "Sent" with a link to the transaction.

## How to verify and measure

- Test the flow with lookalike addresses, partial name matches and slow networks.
- Measure: scam reports and losses, sends cancelled at the warning (a warning that never stops anyone may be noise; one
  that stops everyone may be too broad), support contacts, backup completion.
- Usability test the recovery flow before people need it.

## References

- Starling — [adding a payee with name check](https://mobbin.com/flows/796e17ad-63ee-428e-8a15-91c3d0a4e919) ·
  [payee page with scam warning](https://mobbin.com/flows/588805d1-2dab-47f1-8ebb-2235862c1b2b)
- ANZ Plus — [payment with Confirmation of Payee](https://mobbin.com/flows/526d53d9-6d75-4809-ae8d-d05a1de39b9d)
- Phantom — [sending a token](https://mobbin.com/flows/3316db6f-f0a1-4c33-b8a3-c6e3facb6ca5) ·
  [recovery phrase](https://mobbin.com/flows/1c019b72-1213-4f94-ae9d-b3dd5f0fbd78) ·
  [showing recovery phrase](https://mobbin.com/flows/f9206cbe-976b-48b9-9112-6ed7fcc0dd03)
- Uniswap — [transfer with new-address warning](https://mobbin.com/flows/e0f61b46-6290-4a24-bc69-69e826490112) ·
  [recovery phrase information](https://mobbin.com/flows/05420153-08fe-4b86-841a-5856c9850d92)
- Coinbase Wallet — [view recovery phrase](https://mobbin.com/flows/d3cb548a-9c26-4f44-9345-babf2d5d91a2)
- Binance — [sending to a wallet](https://mobbin.com/flows/4d6db478-6145-4733-8bb5-eefd42483382)
