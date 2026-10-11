# Lista de revisión

Para revisar cualquier pantalla o flujo antes de darlo por terminado. Si algo no se cumple, anotar por qué.

## 1. Propósito y estructura

- [ ] La pantalla responde una sola pregunta y se entiende en 5 segundos qué es y qué se puede hacer.
- [ ] Hay una acción principal clara; las secundarias no compiten.
- [ ] Lo frecuente está a la vista; lo raro, a un clic.
- [ ] La ubicación es evidente (título, ítem activo, migas).

## 2. Estados

- [ ] Vacío (primera vez y sin resultados), cargando, parcial, error, éxito y sin conexión diseñados.
- [ ] Datos reales y extremos: nombres largos, 0 / 1 / 1.000 ítems, textos en otro idioma, números grandes.
- [ ] Después de cada acción hay respuesta visible.

## 3. Interacción

- [ ] Se puede deshacer o, si es irreversible, hay confirmación con consecuencias.
- [ ] Los errores aparecen en el lugar, dicen cómo arreglarlo y conservan lo escrito.
- [ ] Atajos y ⌘K para lo frecuente (en herramientas de uso intensivo).
- [ ] No hay modales innecesarios ni confirmaciones de rutina.

## 4. Texto

- [ ] Botones con verbo + objeto; títulos que nombran el lugar o la pregunta.
- [ ] Un término por concepto; sin jerga interna; tratamiento consistente.
- [ ] Sin frases de relleno ni entusiasmo forzado ([01-anti-slop.md](01-anti-slop.md)).

## 5. Visual

- [ ] Jerarquía clara en escala de grises.
- [ ] Tokens del sistema (color, espacio, radio, tipografía); nada suelto.
- [ ] Alineaciones y espaciados consistentes; nada a 1–2 px de estar alineado.
- [ ] Claro y oscuro revisados.
- [ ] Ninguna señal de slop: gradientes genéricos, emojis como íconos, tarjetas idénticas de relleno.

## 6. Accesibilidad ([02-accesibilidad.md](02-accesibilidad.md))

- [ ] Todo con teclado, foco visible y en orden.
- [ ] Contraste AA en texto, íconos, bordes de campos y foco.
- [ ] Etiquetas, nombres accesibles y estados (`aria-*`) correctos; cambios anunciados.
- [ ] Zoom 200 % y 320 px de ancho sin romper.
- [ ] `prefers-reduced-motion` respetado; nada depende solo del color.
- [ ] Objetivos táctiles de 24 px mínimo (web) / 44 pt (móvil).

## 7. Adaptación

- [ ] Funciona en el ancho más chico que se soporta y en pantallas grandes (sin líneas de 200 caracteres).
- [ ] En táctil no hay nada que dependa del hover.
- [ ] Rendimiento: respuesta inmediata a cada toque, sin saltos de layout al cargar.

## 8. Estado real ([08-estado-real-y-verificacion.md](08-estado-real-y-verificacion.md))

- [ ] Cada estado real tiene su texto y su acción; ninguna acción propone algo que no resuelve el problema.
- [ ] El mismo estado se ve igual en todas las vistas y cambia en todas al instante.
- [ ] Los errores nombran la etapa que falló; la alternativa está disponible sin empezar de nuevo.
- [ ] Se informó hasta qué nivel quedó verificado.

## 9. Confianza

- [ ] Nada inventado (datos, estados, testimonios).
- [ ] Costos, límites y consecuencias visibles antes de actuar.
- [ ] Sin patrones oscuros.

## Severidad para priorizar

| Nivel | Significa |
| --- | --- |
| 4 · Catastrófico | Impide completar la tarea o pierde datos |
| 3 · Grave | La tarea sale con mucho esfuerzo o errores frecuentes |
| 2 · Menor | Molesta o demora, pero sale |
| 1 · Cosmético | Detalle visual sin impacto en la tarea |

Arreglar primero lo de mayor severidad × frecuencia.
