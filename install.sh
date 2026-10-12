#!/usr/bin/env bash
# Installs the design skill from a clone, using symbolic links so this folder stays the single source of truth:
#   Claude Code:              ~/.claude/skills/design and ~/.claude/agents/*.md
#   Codex and other agents:   ~/.agents/skills/design (the shared skills folder)
# Prefer the plugins when you only use the skill (they update themselves); see README.md.
# Usage: ./install.sh            install
#        ./install.sh --remove   uninstall (only removes links that point here)
set -euo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL="$REPO/skills/design"
NAME="design"

link() {
  local target="$1"
  mkdir -p "$(dirname "$target")"
  if [ -L "$target" ]; then
    rm "$target"
  elif [ -e "$target" ]; then
    echo "Already exists and is not a link, leaving it alone: $target" >&2
    return 1
  fi
  ln -s "$2" "$target"
  echo "Linked: $target -> $2"
}

unlink_if_ours() {
  local target="$1"
  if [ -L "$target" ] && [[ "$(readlink "$target")" == "$REPO"* ]]; then
    rm "$target"
    echo "Removed: $target"
  fi
}

# Older installs linked the skill into ~/.codex/skills, which Codex no longer prefers.
unlink_if_ours "$HOME/.codex/skills/$NAME"

if [ "${1:-}" = "--remove" ]; then
  unlink_if_ours "$HOME/.claude/skills/$NAME"
  for agent in "$REPO"/agents/*.md; do unlink_if_ours "$HOME/.claude/agents/$(basename "$agent")"; done
  unlink_if_ours "$HOME/.agents/skills/$NAME"
  exit 0
fi

# Claude Code: global skill and global subagents
link "$HOME/.claude/skills/$NAME" "$SKILL"
for agent in "$REPO"/agents/*.md; do
  link "$HOME/.claude/agents/$(basename "$agent")" "$agent"
done

# Codex and other agents that read the shared skills folder
link "$HOME/.agents/skills/$NAME" "$SKILL"

echo
echo "Done. Check with: node \"$SKILL/scripts/contrast.mjs\" '#000' '#fff'"
echo "Agents without skills support: point to $REPO/AGENTS.md from each project's AGENTS.md."
