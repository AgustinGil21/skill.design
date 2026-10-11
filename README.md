# Skill de diseño

Diseño de interfaces y sitios de nivel experto para cualquier agente de IA (Claude Code, Codex, Cursor y otros) y
para cualquier proyecto: crear, revisar, auditar accesibilidad, escribir textos, definir marca y hacer landings, sin
diseño genérico.

## Qué incluye

```
diseno/
├── SKILL.md              Entrada para agentes: reglas, enrutador por tarea, mapa del conocimiento
├── AGENTS.md             Entrada para agentes que no cargan skills (Codex, Cursor, etc.)
├── flujos/               Cómo trabajar en cada modo
│   ├── crear.md          Pantallas, flujos, componentes
│   ├── landing.md        Landings y sitios de marketing
│   ├── revisar.md        Crítica y revisión con severidades
│   ├── accesibilidad.md  Auditoría WCAG 2.2 AA
│   ├── escribir.md       Textos de interfaz y marketing
│   └── marca.md          Identidad, tipografía, color, voz
├── conocimiento/         La base: 20 documentos, 43 de patrones, 16 de landings, con cientos de ejemplos reales
├── agentes/              Subagentes: director de arte, revisor de usabilidad, auditor de accesibilidad, redactor
├── plantillas/           Brief, tabla de estados, informe de revisión
├── scripts/              Herramientas sin dependencias (Node ≥ 18)
│   ├── contraste.mjs     Contraste WCAG (HEX, rgb, oklch)
│   ├── slop.mjs          Texto y estilos genéricos
│   ├── a11y-estatico.mjs Accesibilidad estática en HTML/JSX/Astro/Vue/Svelte/CSS
│   └── pruebas/          Pruebas de los scripts y de la estructura de la skill
└── instalar.sh           Instala con enlaces simbólicos (Claude Code y Codex)
```

## Instalar

```bash
cd ~/Documents/Programming/Skills/diseno
./instalar.sh
```

Crea enlaces simbólicos en `~/.claude/skills/diseno`, `~/.claude/agents/*.md` y, si existe Codex,
`~/.codex/skills/diseno`. La carpeta original sigue siendo la única fuente: lo que edites acá se ve en todos lados.
Para desinstalar: `./instalar.sh --quitar`.

Para otros agentes, agregar al `AGENTS.md` (o equivalente) de cada proyecto:

```
Para cualquier trabajo de diseño, interfaz, accesibilidad o textos, seguí la skill en ~/Documents/Programming/Skills/diseno/SKILL.md
```

## Usar

Pedidos de ejemplo (la skill elige el flujo sola):

- "Diseñá la pantalla de facturación con todos sus estados."
- "Revisá esta pantalla y decime qué arreglar primero." (con captura, URL o ruta del código)
- "Auditá la accesibilidad de `src/components`."
- "Hacé una landing para este producto, creativa y con buena animación."
- "Corregí los textos de error del formulario de registro."
- "Definí tipografía y paleta para esta marca."

Herramientas directas:

```bash
node scripts/contraste.mjs "#6b7280" "#ffffff"
node scripts/slop.mjs src/
node scripts/a11y-estatico.mjs src/
```

## Mantener

- Probar: `node --test scripts/pruebas/` (verifica los scripts, el frontmatter y que toda ruta citada exista).
- Sumar conocimiento: seguir "Cómo seguir sumando" en `conocimiento/fuentes.md`; nuevos patrones van en
  `conocimiento/patrones/` y se agregan al mapa de `SKILL.md` y al índice `conocimiento/README.md`.
- `SKILL.md` tiene que seguir siendo corto: el detalle va en `flujos/` y `conocimiento/`.
