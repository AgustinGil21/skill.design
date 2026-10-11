# Flujo: revisar o criticar un diseño existente

Sirve para capturas, prototipos, URLs o código. El resultado es un informe accionable, no una opinión.

## 1. Contexto

- ¿Qué tarea resuelve la pantalla? ¿Para quién? ¿Qué se quiere lograr con la revisión (lanzar, mejorar conversión,
  ordenar)?
- Si es código: leer los componentes, estilos y textos; si se puede, ejecutarlo y mirarlo.
- Si es imagen: describir lo que se ve antes de juzgar.

## 2. Pasadas (en este orden)

1. **Propósito y estructura**: ¿se entiende qué es y qué hacer en 5 segundos? ¿Hay una acción principal?
   (`conocimiento/00-principios.md`, `07-proceso.md` → "Al criticar").
2. **Heurísticas**: las 10 de Nielsen y leyes de UX (`conocimiento/03-usabilidad.md`).
3. **Patrón del tipo de pantalla**: comparar contra el archivo de `conocimiento/patrones/` correspondiente.
4. **Estados**: vacío, carga, error, parcial, permisos, sin conexión (`08-estado-real-y-verificacion.md`).
5. **Textos**: claridad, verbos, errores, tono (`04-escritura-de-interfaz.md`).
6. **Visual**: jerarquía, tipografía, color, espaciado, alineación, consistencia (`05-sistema-visual.md`, `09`, `10`,
   `17`).
7. **Slop**: señales genéricas (`01-anti-slop.md`, `13-diseno-humano.md`) + `node scripts/slop.mjs`.
8. **Accesibilidad rápida**: contraste, foco, teclado, nombres (`02-accesibilidad.md`) + `node scripts/a11y-estatico.mjs`.
   Si se pide auditoría completa, seguir `flujos/accesibilidad.md`.
9. **Ética**: patrones oscuros, presión indebida (`12-psicologia-y-persuasion-etica.md`).

Para landings, agregar `conocimiento/landing/08-revision.md`.

## 3. Severidad (de `06-revision.md`)

- **Crítica**: impide completar la tarea, excluye a personas o engaña.
- **Alta**: causa errores frecuentes o abandono.
- **Media**: molesta o confunde, con salida.
- **Baja**: pulido.

## 4. Informe

Usar `plantillas/informe-de-revision.md`:

- Resumen en 3 líneas: lo mejor, lo peor, la primera cosa a arreglar.
- Hallazgos ordenados por severidad, cada uno con **evidencia** (dónde, captura o línea de código), **por qué
  importa** (principio o criterio) y **arreglo concreto** (texto nuevo, cambio de estructura, valor de token).
- Lo que está bien (para no romperlo).
- Qué se verificó y cómo (script, a mano, con captura).

## 5. Si además hay que arreglar

Aplicar los arreglos de mayor severidad primero, respetando el sistema existente, y volver a correr los scripts.
