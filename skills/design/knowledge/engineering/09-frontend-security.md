# Front-end security

Security failures in the front end are design failures with legal consequences: a profile field that runs a script, an
API key in the bundle, a link that hands the page to another site, a confirmation that can be clicked from an invisible
frame. Generated code is especially prone to them because it optimizes for "it works". This file covers what the
interface layer must get right; it does not replace a security review of the backend.

## Untrusted content

| Risk | What goes wrong | Do instead |
| --- | --- | --- |
| **Cross-site scripting (XSS)** | User or third-party content rendered as HTML runs scripts in other people's sessions | Render text as text (frameworks escape by default). Never pass untrusted input to `dangerouslySetInnerHTML`, `v-html`, `{@html}`, `innerHTML` or `document.write` |
| Rich text and Markdown | Comments, descriptions and notes with formatting need HTML | Sanitize on output with a maintained sanitizer (DOMPurify or the platform's Sanitizer API where available), with an allow-list of tags and attributes; prefer structured rich text (a document model) over raw HTML |
| URLs from users | `javascript:` and `data:` URLs in links and images | Validate the protocol (`https:`, `mailto:` …) before rendering a link |
| Third-party embeds | Scripts and iframes with full access | `sandbox` on iframes, subresource integrity (`integrity`) on third-party scripts, the fewest third parties possible |
| Template injection in emails and notifications | User names rendered into HTML emails | Escape in templates; never build HTML by concatenating strings |

## Secrets and data in the client

- **Nothing secret in the bundle**: API keys with write access, service tokens and private keys never reach the
  browser or the app binary. Public keys (a publishable payments key, a public analytics ID) are fine by design.
  Framework environment variables exposed to the client (`NEXT_PUBLIC_`, `VITE_`, `PUBLIC_`) are public.
- **Tokens**: session cookies with `HttpOnly`, `Secure` and `SameSite`; avoid long-lived tokens in `localStorage`
  (readable by any script that runs).
- **Personal data**: do not log it to the console, analytics or error trackers; mask it in screenshots and session
  replays.
- **Authorization lives on the server**: hiding a button is a design decision, not a permission check.

## Links, frames and navigation

- `rel="noopener noreferrer"` on links that open new tabs to other sites (modern browsers imply `noopener` for
  `target="_blank"`, but be explicit in shared components).
- **Clickjacking**: pages with sensitive actions must not be framed by other sites (`frame-ancestors` in the content
  security policy).
- **Open redirects**: validate redirect targets after sign-in against an allow-list.

## Headers and policies (with the backend or hosting)

- **Content Security Policy (CSP)**: restrict where scripts, styles, images and frames come from; prefer nonces or
  hashes over `unsafe-inline`; start in report-only mode. Design and code choices affect it: inline styles and
  scripts, third-party widgets and analytics all need to fit the policy.
- `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy` for camera,
  microphone and location.
- **Trusted Types** (where supported) to make DOM XSS sinks fail unless values are sanitized.

## Forms and authentication flows

- Passwords: allow paste and password managers (`autocomplete="current-password"`/`new-password"`), offer passkeys,
  show strength without arbitrary rules ([sign-in and accounts](../patterns/sign-in-and-accounts.md)).
- One-time codes: `autocomplete="one-time-code"`, never in URLs.
- Rate limits and lockouts explained in the interface without revealing whether an account exists.
- CSRF protection on state-changing requests (framework defaults, `SameSite` cookies, tokens).

## Supply chain

Dependencies are the largest attack surface of most front ends: exact versions, release-age delays, approved install
scripts and an update tool ([tooling and supply chain](06-tooling-and-supply-chain.md)). Third-party scripts loaded at
runtime (tag managers, chat widgets) run with the page's privileges: keep them few and reviewed.

## Worked comparison

**Situation:** a CRM shows notes written by agents, with formatting.

**Weak.** Notes are saved as HTML and rendered with `dangerouslySetInnerHTML`; a note containing an image tag with an
error handler runs a script for everyone who opens the contact. The mapping API key with write access is in
`NEXT_PUBLIC_MAPS_KEY`.

**Strong.** Notes are stored as a structured rich-text document and rendered as React elements; legacy HTML notes pass
through a sanitizer with an allow-list (paragraphs, lists, links with validated `https:` URLs). The map uses a
restricted public key; anything with write access goes through the server. A content security policy blocks inline
scripts as a second line of defense.

## Checklist

- [ ] No untrusted input in HTML sinks; rich text sanitized with an allow-list; URL protocols validated.
- [ ] No secrets in client code or public environment variables; tokens in secure cookies.
- [ ] No personal data in logs, analytics or replays.
- [ ] Sensitive pages cannot be framed; redirects validated.
- [ ] CSP planned with the backend; third-party scripts minimized and pinned with integrity.
- [ ] Authentication forms support password managers, passkeys and one-time code autofill.
