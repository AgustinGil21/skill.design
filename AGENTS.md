# Skill de diseño — instrucciones para cualquier agente

Este archivo es para agentes que no cargan skills automáticamente (Codex, Cursor, Gemini, Copilot, etc.).
Las instrucciones completas están en [SKILL.md](SKILL.md): leelo primero y seguí su enrutador.

Resumen:

- Cuando la tarea toque interfaces, sitios, landings, textos de interfaz, accesibilidad, tipografía, color o marca,
  usá esta skill.
- No cargues todo: `SKILL.md` indica qué flujo (`flujos/*.md`) leer según la tarea, y el flujo indica qué archivos de
  `conocimiento/` abrir.
- Herramientas sin dependencias (Node ≥ 18):
  - `node scripts/contraste.mjs <texto> <fondo>`
  - `node scripts/slop.mjs <rutas>`
  - `node scripts/a11y-estatico.mjs <rutas>`
- Definiciones de subagentes en `agentes/` (director de arte, revisor de usabilidad, auditor de accesibilidad,
  redactor de interfaz): podés leerlas como instrucciones de rol si tu herramienta no tiene subagentes.

Para usarla desde un proyecto, agregá al `AGENTS.md` del proyecto una línea como:

```
Para cualquier trabajo de diseño, interfaz, accesibilidad o textos, seguí la skill en ~/Documents/Programming/Skills/diseno/SKILL.md
```
