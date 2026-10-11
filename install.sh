#!/usr/bin/env bash
# Installs the design skill for Claude Code (and Codex if present) using symbolic links:
# this folder stays the single source of truth.
# Usage: ./install.sh            install
#        ./install.sh --remove   uninstall (only removes links that point here)
set -euo pipefail

SOURCE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
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
  if [ -L "$target" ] && [[ "$(readlink "$target")" == "$SOURCE"* ]]; then
    rm "$target"
    echo "Removed: $target"
  fi
}

if [ "${1:-}" = "--remove" ]; then
  unlink_if_ours "$HOME/.claude/skills/$NAME"
  for agent in "$SOURCE"/agents/*.md; do unlink_if_ours "$HOME/.claude/agents/$(basename "$agent")"; done
  unlink_if_ours "$HOME/.codex/skills/$NAME"
  exit 0
fi

# Claude Code: global skill and global subagents
link "$HOME/.claude/skills/$NAME" "$SOURCE"
for agent in "$SOURCE"/agents/*.md; do
  link "$HOME/.claude/agents/$(basename "$agent")" "$agent"
done

# Codex (if installed): the user's skills folder
if [ -d "$HOME/.codex" ]; then
  link "$HOME/.codex/skills/$NAME" "$SOURCE"
fi

echo
echo "Done. Check with: node \"$SOURCE/scripts/contrast.mjs\" '#000' '#fff'"
echo "Other agents: point to $SOURCE/AGENTS.md from each project's AGENTS.md."
