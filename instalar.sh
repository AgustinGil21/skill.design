#!/usr/bin/env bash
# Instala la skill de diseño para Claude Code (y Codex si existe) usando enlaces simbólicos:
# la carpeta original sigue siendo la única fuente de verdad.
# Uso: ./instalar.sh            instala
#      ./instalar.sh --quitar   desinstala (solo borra los enlaces que apuntan acá)
set -euo pipefail

ORIGEN="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NOMBRE="diseno"

enlazar() {
  local destino="$1"
  mkdir -p "$(dirname "$destino")"
  if [ -L "$destino" ]; then
    rm "$destino"
  elif [ -e "$destino" ]; then
    echo "Ya existe y no es un enlace, no lo toco: $destino" >&2
    return 1
  fi
  ln -s "$2" "$destino"
  echo "Enlazado: $destino -> $2"
}

quitar() {
  local destino="$1"
  if [ -L "$destino" ] && [[ "$(readlink "$destino")" == "$ORIGEN"* ]]; then
    rm "$destino"
    echo "Quitado: $destino"
  fi
}

if [ "${1:-}" = "--quitar" ]; then
  quitar "$HOME/.claude/skills/$NOMBRE"
  for agente in "$ORIGEN"/agentes/*.md; do quitar "$HOME/.claude/agents/$(basename "$agente")"; done
  quitar "$HOME/.codex/skills/$NOMBRE"
  exit 0
fi

# Claude Code: skill global y subagentes globales
enlazar "$HOME/.claude/skills/$NOMBRE" "$ORIGEN"
for agente in "$ORIGEN"/agentes/*.md; do
  enlazar "$HOME/.claude/agents/$(basename "$agente")" "$agente"
done

# Codex (si está instalado): carpeta de skills del usuario
if [ -d "$HOME/.codex" ]; then
  enlazar "$HOME/.codex/skills/$NOMBRE" "$ORIGEN"
fi

echo
echo "Listo. Verificá con: node \"$ORIGEN/scripts/contraste.mjs\" '#000' '#fff'"
echo "Otros agentes: apuntalos a $ORIGEN/AGENTS.md desde el AGENTS.md de cada proyecto."
