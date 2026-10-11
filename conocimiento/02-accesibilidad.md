# Accesibilidad

Objetivo mínimo: **WCAG 2.2 nivel AA**. No es una auditoría al final: es una forma de diseñar y construir.
Lo que sigue es lo que más se rompe y cómo hacerlo bien.

## Percibir

- **Contraste de texto:** 4,5:1 texto normal; 3:1 texto grande (≥ 24 px, o ≥ 18,66 px en negrita). El placeholder
  y el texto deshabilitado que transmite información también cuentan.
- **Contraste de no-texto:** 3:1 para bordes de campos, íconos que significan algo, foco y partes de gráficos.
- **El color nunca solo:** error = color + ícono + texto; estado = color + palabra; enlaces dentro de texto
  subrayados o con otra señal además del color.
- **Imágenes:** `alt` que dice lo que comunica la imagen; `alt=""` si es decorativa. Íconos sin texto con
  `aria-label`. Gráficos con resumen en texto o tabla.
- **Video y audio:** subtítulos, transcripción; video con controles y sin reproducción automática con sonido.
- **Texto ampliado:** la interfaz funciona al 200 % de zoom y con el tamaño de letra del sistema agrandado, sin
  cortar ni superponer texto. Reflow a 320 px de ancho sin scroll horizontal (salvo tablas, mapas, editores).
- **Modo oscuro y alto contraste** con los mismos niveles de contraste; respetar `forced-colors`.

## Operar

- **Todo con teclado:** cada acción alcanzable con Tab / Shift+Tab, Enter / Espacio, flechas en grupos (menús,
  pestañas, radios, listas), Esc para cerrar. Sin trampas de foco salvo en diálogos (donde el foco sí queda
  adentro).
- **Foco visible** siempre, con contraste 3:1 y que no quede tapado por barras fijas (WCAG 2.2: Focus Not Obscured).
- **Orden de foco** igual al orden visual y lógico.
- **"Saltar al contenido"** como primer enlace en páginas con navegación.
- **Tamaño de objetivo:** mínimo 24×24 px en web (WCAG 2.2 AA), recomendable 44×44; en móvil 44 pt / 48 dp.
- **Arrastrar con alternativa** (WCAG 2.2: Dragging Movements): reordenar con botones o menú, mover con flechas,
  recortar con campos numéricos.
- **Gestos complejos con alternativa** simple (deslizar → menú; pellizcar → botones de zoom).
- **Tiempo:** sin límites de tiempo, o con aviso y forma de extenderlo. Toasts con acciones duran lo suficiente y se
  pausan al pasar el mouse o con foco.
- **Movimiento:** respetar `prefers-reduced-motion` (sin parallax, sin animaciones grandes, sin auto-scroll);
  nada que parpadee más de 3 veces por segundo; carruseles y videos con pausa.
- **Atajos de una sola tecla** desactivables o solo activos con foco en el componente.

## Entender

- **Idioma** declarado (`lang`) en la página y en fragmentos de otro idioma.
- **Etiquetas visibles** en todos los campos, asociadas (`<label for>`); el placeholder no es etiqueta.
- **Errores** identificados en texto, junto al campo, con sugerencia de corrección; `aria-invalid` y
  `aria-describedby`; foco al primer error al enviar.
- **Nada cambia solo** al enfocar o al cambiar un valor (sin enviar formularios al elegir de un select).
- **Navegación consistente** entre páginas; ayuda en el mismo lugar (WCAG 2.2: Consistent Help).
- **No pedir lo mismo dos veces** en un flujo (WCAG 2.2: Redundant Entry); autocompletar con lo ya dado.
- **Autenticación accesible** (WCAG 2.2): sin pruebas cognitivas obligatorias; permitir pegar contraseñas,
  gestores de contraseñas, passkeys y códigos por email.
- **Lenguaje claro:** frases cortas, palabras comunes, una idea por oración.

## Robusto

- **HTML semántico primero**: `button` para acciones, `a` para navegar, `nav`, `main`, `header`, encabezados en
  orden (un `h1`, sin saltos), listas como listas, tablas como tablas.
- **ARIA solo cuando no hay elemento nativo**, y bien: roles completos (pestañas: `tablist`/`tab`/`tabpanel` con
  `aria-selected` y `aria-controls`), estados actualizados (`aria-expanded`, `aria-pressed`, `aria-current`).
- **Regiones vivas** para lo que cambia sin recargar: `role="status"` / `aria-live="polite"` para avisos,
  `role="alert"` para errores urgentes. Anunciar resultados de búsqueda, guardado, carga terminada.
- **Diálogos** con `role="dialog"`, `aria-modal`, título asociado, foco inicial y retorno de foco.
- **Componentes de librerías accesibles** (Radix, React Aria, Headless UI) antes que construir desde cero.

## Cómo revisar (rápido, en cada pantalla)

1. Recorrer todo con Tab: ¿se ve el foco?, ¿el orden tiene sentido?, ¿se puede hacer todo?
2. Zoom al 200 % y ventana de 320 px.
3. Escala de grises: ¿se entiende sin color?
4. Verificador de contraste en textos chicos, placeholders, íconos y bordes.
5. Lector de pantalla (VoiceOver: ⌘F5) en el flujo principal: ¿se anuncian nombres, estados y cambios?
6. `prefers-reduced-motion` activado.
7. Herramienta automática (axe, Lighthouse) para lo mecánico; atrapa ~30–40 %, el resto es manual.

## Móvil

- VoiceOver / TalkBack: cada control con nombre y rol; acciones de deslizar expuestas como acciones accesibles.
- Dynamic Type / tamaño de fuente del sistema hasta los tamaños de accesibilidad.
- Objetivos 44×44 pt; separación entre ellos.
- No depender de agitar, inclinar ni gestos con varios dedos.

Más allá de la lista: [15-accesibilidad-avanzada.md](15-accesibilidad-avanzada.md).
