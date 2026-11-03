# Tooling and supply chain

> Verified: 2026-11-02 · Review by: 2027-05-02 · Time-sensitive: pnpm settings and linter and formatter status.

The package manager, its security settings, version pinning, linting and formatting. Supply-chain attacks on npm
packages (compromised maintainers, malicious versions published for a few hours, typosquatting, install scripts) are
frequent, and generated projects are especially exposed because they install many packages with loose versions.

Check the current documentation of each tool before configuring it; defaults and file locations change between
major versions.

## Package manager

- **pnpm by default for new JavaScript projects** (the person can choose another): strict dependency access
  (no phantom dependencies), a content-addressable store, workspaces, and security settings that block common
  attacks. In an existing project, use the package manager its lockfile shows.
- **Pin the package manager** with the `packageManager` field in `package.json` so every machine and CI uses the same
  version.
- **Commit the lockfile** and install with the frozen lockfile in CI.

## Security settings (pnpm)

Where settings live changed: **from pnpm 11, `.npmrc` is read only for authentication and registry settings**; every
other setting goes in `pnpm-workspace.yaml` (or the global `config.yaml`) with camelCase keys. In pnpm 10 projects,
many of these settings could still be in `.npmrc`; check the version.

A secure starting point for `pnpm-workspace.yaml`:

```yaml
# Exact versions when adding dependencies (no ^ or ~).
saveExact: true

# Do not install versions published less than a day ago; most malicious releases are removed within hours.
minimumReleaseAge: 1440

# Fail instead of silently installing a version younger than the delay.
minimumReleaseAgeStrict: true

# Refuse a package whose publishing trust level dropped compared to earlier versions.
trustPolicy: no-downgrade

# Transitive dependencies may not come from git repositories or tarball URLs.
blockExoticSubdeps: true

# Install scripts run only for packages reviewed here; others fail the install.
strictDepBuilds: true
allowBuilds:
  esbuild: true
```

Recent pnpm versions turn several of these on by default (a one-day release age, blocked exotic subdependencies,
strict build approval). Setting them explicitly documents the intent, survives version changes, and makes
`minimumReleaseAge` strict.

What each one does, and the trade-off:

| Setting | Protects against | Trade-off |
| --- | --- | --- |
| `saveExact` | Unreviewed version changes on install | Updates are explicit (use an update tool) |
| `minimumReleaseAge` (minutes; pnpm defaults to 1440, non-strict unless set explicitly) | Freshly published malicious versions | Urgent security fixes wait; exclude specific packages with `minimumReleaseAgeExclude` when needed. One day is a common sweet spot; some teams use a week (10080) |
| `trustPolicy: no-downgrade` | A package suddenly published without the provenance it used to have | Legitimate CI migrations need `trustPolicyExclude` |
| `blockExoticSubdeps` | Dependencies pulled from arbitrary git or URLs | Rare legitimate cases need review |
| `strictDepBuilds` + `allowBuilds` | Malicious install scripts | Each package with a build script must be approved once |

`.npmrc` keeps only registry and authentication, with tokens from environment variables, never committed in plain
text.

For npm or Yarn projects, use their equivalents (exact saves, `ignore-scripts` with an allow-list, lockfile-only
installs in CI) and say which protections are missing compared to pnpm.

## Versions

- **Exact versions** in `package.json` (`"vite": "8.0.3"`, not `"^8.0.3"`).
- **Updates through a tool** that opens reviewable changes (Renovate or Dependabot) with a minimum release age
  matching the package manager's, grouped sensibly, with the changelog read for majors.
- **Audit** regularly (`pnpm audit` or the platform's alerts); fix or document each finding.
- **Fewer dependencies**: before adding a package, check whether the platform or an existing dependency already
  does it; check maintenance, size and install scripts.

## Linting and formatting

Choose fast, current tools; keep one source of truth for formatting.

| Tool | What it is | Status (late 2026) |
| --- | --- | --- |
| **Oxlint** (Oxc) | Rust linter, very fast, ESLint-compatible rules, type-aware linting added | Stable since 1.0 (June 2025) |
| **Oxfmt** (Oxc) | Rust formatter, Prettier-compatible output | Beta since February 2026, passes Prettier's JS/TS conformance tests; check whether 1.0 has shipped and whether the plugins you need (Svelte, Tailwind class sorting) are supported |
| **Biome** | Rust linter and formatter in one tool and one config | Stable; formatter close to Prettier's output |
| **ESLint** | The established linter with the largest plugin ecosystem | Keep for plugins nothing else covers, or alongside Oxlint |
| **Prettier** | The established formatter | Correct but much slower than the Rust tools; keep in projects that use it, or when a needed plugin exists only there |

Recommendations for new projects: **Biome** for one tool and one config, or **Oxlint + Oxfmt** for the fastest
setup — the person's choice. Keep framework-specific rules (React hooks, accessibility, Tailwind class order) covered
by whichever tool is chosen, and run them in CI and as a pre-commit check on changed files.

## TypeScript and editor setup

- `strict: true`, `noUncheckedIndexedAccess` where the team accepts it, and type-checking in CI.
- Path aliases kept consistent between the bundler, the test runner and TypeScript.
- An `.editorconfig` and the formatter configured to run on save.

## Checklist

- [ ] The package manager is pinned; the lockfile is committed; CI installs frozen.
- [ ] Security settings in place (pnpm: in `pnpm-workspace.yaml` from v11), `.npmrc` only for auth and registry.
- [ ] Exact versions; updates via a tool with a release-age delay.
- [ ] Install scripts allowed only for reviewed packages.
- [ ] A fast linter and formatter configured, with framework rules covered, in CI.
- [ ] TypeScript strict and checked in CI.
