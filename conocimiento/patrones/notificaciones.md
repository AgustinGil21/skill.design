# Notificaciones y bandeja de entrada

## Bandeja

- **Panel desde la barra** (campana con número) o página propia para productos donde es trabajo central.
- **Pestañas por importancia, no por tipo técnico**: "Donde te necesitan" / "Para ver"
  ([Slite](https://mobbin.com/screens/5da0de72-bedb-4c86-9cc9-905eb129b95d)), "Todas / Menciones"
  ([Air](https://mobbin.com/screens/b3e74362-1af4-4022-bdf2-a56b09d786f3)), "No leídas / Todas"
  ([Langdock](https://mobbin.com/screens/dc3adbc9-3ae0-45fd-9f43-c8ab60a19052)).
- **Cada notificación:** quién + qué hizo + sobre qué (enlace), extracto si es un comentario, hora relativa, punto de
  no leída a la derecha. Agrupar las parecidas ("Jane subió 4 archivos a Marca 1").
- **Acción directa en la notificación** cuando hay una obvia ("Descargar", "Ir a facturación";
  [Causal](https://mobbin.com/screens/9a5e4576-8324-4778-b510-ac081f65311b),
  [fal](https://mobbin.com/screens/d7f3f613-38ca-49f3-a382-e51c1f1d435c)).
- **"Marcar todo como leído"** y ajustes de notificaciones a un clic desde el panel.
- **Archivar / Hecho** por notificación para usarla como lista de pendientes
  ([ClickUp](https://mobbin.com/screens/f1374e47-4168-46b0-baab-445916244ac6)).
- **Final de la lista explícito**: "Esas son todas tus notificaciones del último mes".
- Agrupar por fecha (Hoy, Ayer, Esta semana).

## Qué merece notificación

- Algo que la persona tiene que hacer (la mencionaron, le asignaron algo, espera su aprobación).
- Algo que estaba esperando (terminó un proceso largo, una exportación está lista).
- No: novedades del producto, logros, recordatorios de marketing dentro de la bandeja de trabajo.

## Indicadores

- Número solo si la cantidad importa; si no, un punto.
- Tope "99+".
- El indicador desaparece al ver, no hace falta abrir cada una.
- Actividad en curso (procesos largos) como indicador animado sutil en la sección correspondiente, que respete
  `prefers-reduced-motion`.

## Avisos del sistema

- Avisos del navegador o del sistema operativo solo después de pedir permiso con contexto ("¿Te avisamos cuando
  termine el render?"), nunca al entrar.
- Cada canal (email, push, Slack) configurable por tipo de evento.
