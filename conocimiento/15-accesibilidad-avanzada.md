# Accesibilidad avanzada

Lo que va más allá de la lista básica de [02-accesibilidad.md](02-accesibilidad.md): cómo funciona en la práctica
para personas reales, con sus herramientas.

## 1. Quiénes y cómo

| Situación | Herramienta o adaptación | Qué rompe la experiencia |
| --- | --- | --- |
| Ceguera | Lector de pantalla (VoiceOver, NVDA, JAWS, TalkBack), navegación por títulos y regiones | Imágenes sin texto, botones sin nombre, orden ilógico, contenido que aparece sin anunciarse |
| Baja visión | Zoom 200–400 %, alto contraste, tamaño de sistema | Texto que no escala, scroll horizontal, contraste bajo |
| Daltonismo | — | Color como única señal |
| Motricidad | Teclado, switch, voz, punteros alternativos | Objetivos chicos, arrastrar sin alternativa, tiempos cortos, atajos de una tecla |
| Sordera | Subtítulos, transcripción | Video y audio sin texto |
| Cognitiva / aprendizaje | Lenguaje simple, consistencia, pocos pasos | Textos complejos, cambios inesperados, tiempos, demasiadas opciones |
| Vestibular / epilepsia | Reducir movimiento | Parallax, zoom, destellos |
| Temporal o situacional | Un brazo ocupado, sol en la pantalla, conexión lenta | Lo mismo que lo anterior: diseñar accesible ayuda a todos |

## 2. Nombres, roles y estados

- **Usar HTML nativo primero** (`button`, `a`, `input`, `select`, `details`, `dialog`): trae teclado, foco y
  semántica gratis. ARIA solo cuando no hay elemento nativo — "ningún ARIA es mejor que ARIA mal usado".
- **Cada control con nombre accesible** que coincida con el texto visible (WCAG 2.5.3) — importante para control
  por voz.
- **Estados anunciados**: `aria-expanded`, `aria-pressed`, `aria-selected`, `aria-current="page"`, `aria-invalid`
  + mensaje con `aria-describedby`.
- **Íconos solos** con `aria-label` o texto oculto; íconos decorativos con `aria-hidden="true"`.

## 3. Foco

- **Visible siempre** y con contraste 3:1; no taparlo con barras fijas (WCAG 2.4.11).
- **Orden lógico** = orden visual.
- **Diálogos**: el foco entra al abrir, queda adentro, Esc cierra y el foco vuelve al botón que lo abrió.
- **Cambios de vista**: mover el foco al nuevo título; en aplicaciones de una sola página, anunciar el cambio de
  página.
- **Nada de `tabindex` positivo**.

## 4. Anunciar cambios dinámicos

- Regiones vivas (`aria-live="polite"`, `role="status"`) para resultados de búsqueda, guardados, errores de envío y
  progreso — con mensajes cortos y sin anunciar cada paso.
- `role="alert"` solo para lo urgente.
- Toasts: que duren lo suficiente o se puedan revisar después; no poner acciones únicas solo en un toast.

## 5. Componentes complejos

Seguir los patrones de la guía oficial de prácticas de ARIA (APG) para: menús, pestañas, acordeones, combobox,
listas de opciones, árboles, grillas, carruseles, diálogos y tooltips. Cada uno tiene su teclado esperado (flechas,
Inicio/Fin, Esc, Enter/Espacio).

## 6. Formularios

- Etiquetas visibles y asociadas; instrucciones antes del campo, no solo en el placeholder.
- Errores: al enviar, resumen arriba con enlaces a cada campo + mensaje junto al campo; el foco al resumen o al
  primer error.
- No pedir de nuevo lo ya ingresado (WCAG 3.3.7) y permitir pegar contraseñas y códigos (autenticación accesible,
  3.3.8).
- Agrupar opciones relacionadas con `fieldset` y `legend`.

## 7. Cognitiva y lenguaje

- Lenguaje simple (nivel de lectura de secundaria para contenido general), frases cortas, una idea por párrafo.
- Consistencia: misma navegación y mismos nombres en todas las páginas (WCAG 3.2.3 y 3.2.4); ayuda en el mismo
  lugar (3.2.6).
- Sin límites de tiempo, o que se puedan extender.
- Avisar consecuencias antes de acciones importantes y permitir revisar y deshacer.

## 8. Cómo probar

1. **Automático** (axe, Lighthouse, WAVE): detecta ~30–40 % de los problemas. Necesario, no suficiente.
2. **Teclado solo**: recorrer todo con Tab, Shift+Tab, Enter, Espacio, Esc y flechas.
3. **Lector de pantalla**: VoiceOver (macOS/iOS) o NVDA (Windows); navegar por títulos, regiones, enlaces y
   formularios.
4. **Zoom 200 % y 400 %**, ancho de 320 px, texto agrandado en el sistema.
5. **Reducir movimiento, alto contraste, modo oscuro** activados.
6. **Con personas con discapacidad**: lo único que revela lo que las herramientas no ven.

## 9. Documentar

- Declaración de accesibilidad con el nivel buscado, lo que se sabe que falta y un contacto para reportar barreras.
- Registrar en cada revisión qué se probó y con qué (ver niveles de verificación en
  [08-estado-real-y-verificacion.md](08-estado-real-y-verificacion.md)).
