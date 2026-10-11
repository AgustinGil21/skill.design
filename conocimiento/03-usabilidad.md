# Usabilidad: heurísticas y leyes

## Las 10 heurísticas de Nielsen, aplicadas

| # | Heurística | Qué revisar | Señal de que falla |
| --- | --- | --- | --- |
| 1 | Visibilidad del estado | Guardado, cargando, progreso, ítem activo, conexión | La persona pregunta "¿se guardó?" o vuelve a tocar el botón |
| 2 | Lenguaje del mundo real | Palabras de la persona, no de la base de datos | Aparecen "job", "spec", "entity", códigos de error |
| 3 | Control y libertad | Deshacer, cancelar, volver, salir de cualquier flujo | Pasos sin "Atrás", acciones sin deshacer |
| 4 | Consistencia y estándares | Mismo término, ícono y lugar para lo mismo | "Borrar" y "Eliminar"; botón principal a veces a la izquierda |
| 5 | Prevención de errores | Restricciones, valores por defecto, confirmar lo irreversible | Formatos libres que después fallan |
| 6 | Reconocer antes que recordar | Opciones visibles, recientes, sugerencias | Hay que acordarse de un código o de dónde estaba algo |
| 7 | Flexibilidad y eficiencia | Atajos, ⌘K, acciones en lote, plantillas | El experto hace 10 clics para lo de todos los días |
| 8 | Estética y minimalismo | Solo lo necesario para esta pregunta | Pantallas con todo al mismo nivel |
| 9 | Ayudar con los errores | Qué pasó, por qué y cómo arreglarlo, en el lugar | "Error 500", "Algo salió mal" |
| 10 | Ayuda y documentación | Ayuda contextual, buscable, orientada a tareas | La ayuda es un PDF o un enlace genérico |

**Puntuar** cada una de 0 a 4 en cada pantalla importante y priorizar por severidad × frecuencia.

## Leyes y efectos útiles

- **Hick:** más opciones = más tiempo para decidir. Reducir, agrupar, destacar la recomendada.
- **Fitts:** objetivos grandes y cerca son más rápidos. Acción principal grande y donde ya está el cursor o el
  pulgar; bordes y esquinas de pantalla son objetivos "infinitos" en escritorio.
- **Jakob:** la gente espera que el producto funcione como los que ya usa.
- **Miller / carga cognitiva:** no pedir que se recuerden más de unas pocas cosas; agrupar en bloques.
- **Tesler (complejidad irreducible):** la complejidad no desaparece; que la absorba el sistema, no la persona.
- **Doherty:** respuestas < 400 ms mantienen el ritmo; si no se puede, dar señal inmediata.
- **Pico-final:** se recuerdan el momento más intenso y el final; cuidar el cierre de cada flujo (confirmación clara,
  siguiente paso).
- **Gradiente de meta:** el progreso visible ("3 de 5") motiva a terminar.
- **Von Restorff:** lo distinto se recuerda; usar el contraste solo para lo importante.
- **Posición serial:** se recuerdan el primero y el último de una lista; ordenar en consecuencia.
- **Proximidad / similitud (Gestalt):** lo que está cerca o se parece se lee como grupo; el espacio agrupa mejor que
  los bordes.
- **Efecto estético-usabilidad:** lo prolijo se percibe como más fácil; no esconde problemas reales.
- **Postel:** aceptar entradas variadas (fechas, teléfonos con o sin espacios), devolver formato consistente.
- **Zeigarnik:** las tareas incompletas se recuerdan; mostrar pendientes para retomarlas.

## Divulgación progresiva

Mostrar primero lo que necesita la mayoría; lo avanzado detrás de "Más opciones", en un panel o en un segundo paso.
Nunca esconder algo que la mayoría necesita para completar la tarea.

## Valores por defecto

El valor por defecto es la decisión que toman casi todos. Elegirlo con datos y a favor de la persona (privacidad,
seguridad, el formato más común), y mostrar qué se eligió.

## Reconocer el contexto

- Recordar lo último elegido (vista, filtros, pestaña) por persona.
- Volver al lugar exacto después de editar o de un error.
- Llenar con lo que ya se sabe (país por ubicación, email de la cuenta).

## Cómo validar

- **5 personas** encuentran la mayoría de los problemas graves de un flujo.
- **Tareas concretas** ("Invitá a Ana como editora"), no "¿qué te parece?".
- Medir: éxito de la tarea, tiempo, errores, y dónde dudan.
- Pruebas de primer clic y de cinco segundos para jerarquía y etiquetas.
