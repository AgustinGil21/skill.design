# Flujo: auditoría de accesibilidad (WCAG 2.2 AA)

Leer `conocimiento/02-accesibilidad.md` y `conocimiento/15-accesibilidad-avanzada.md`.

## 1. Alcance

- Qué páginas o flujos (elegir los críticos: registro, compra, tarea principal, formularios).
- Nivel objetivo (por defecto WCAG 2.2 AA).
- Qué se puede probar: código, sitio en ejecución, solo capturas. Decir el límite.

## 2. Automático (detecta una parte, no todo)

- `node scripts/a11y-estatico.mjs <carpeta o archivos>` sobre el código.
- Si el sitio corre y hay herramientas disponibles: axe, Lighthouse, Pa11y o similares.
- `node scripts/contraste.mjs` para cada par de colores de texto/fondo y componentes.

## 3. Manual (lo que importa de verdad)

1. **Teclado**: Tab/Shift+Tab por todo; Enter/Espacio activan; Esc cierra; flechas en menús, pestañas y listas;
   foco visible y nunca tapado; sin trampas de foco.
2. **Estructura**: un `h1`, títulos en orden, regiones (`header`, `nav`, `main`, `footer`), enlace para saltar.
3. **Nombres y estados**: cada control con nombre que coincide con su texto visible; `aria-expanded`, `aria-current`,
   errores asociados.
4. **Formularios**: etiquetas visibles, errores que dicen cómo corregir, no repetir datos, se puede pegar.
5. **Contraste y color**: 4,5:1 texto, 3:1 grande y componentes; nada solo por color.
6. **Zoom y adaptación**: 200 % y 400 %, 320 px de ancho, espaciado de texto ampliado (1.4.12).
7. **Movimiento y tiempo**: reducir movimiento, pausar lo que se mueve > 5 s, sin destellos, tiempos extensibles.
8. **Multimedia**: subtítulos, transcripción, sin sonido automático.
9. **Contenido dinámico**: cambios anunciados (`role="status"`), foco tras abrir/cerrar diálogos y cambiar vista.
10. **Táctil**: objetivos ≥ 24×24 px (mejor 44), alternativas a arrastrar y a gestos complejos.
11. **Lector de pantalla** (VoiceOver/NVDA) en el flujo crítico, si se puede ejecutar.

## 4. Informe

Con `plantillas/informe-de-revision.md`, agregando por hallazgo:

- Criterio WCAG (número y nombre) y nivel.
- Quién queda afectado (ver tabla de `15-accesibilidad-avanzada.md`).
- Evidencia (archivo:línea, selector o captura) y cómo se detectó (script / manual / herramienta).
- Arreglo con código cuando aplica.

Cerrar con: lo que **no** se pudo probar y por qué. Nunca afirmar "cumple WCAG" sin pruebas manuales; decir "no se
encontraron problemas en lo probado".
