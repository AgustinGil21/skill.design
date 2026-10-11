# Principios

Lo que guía todas las decisiones. Si una regla de otro archivo choca con esto, gana esto.

## 1. Primero la tarea, después la pantalla

Antes de dibujar: quién es la persona, qué quiere lograr, en qué contexto (apurada, en el celular, con una mano,
con lector de pantalla) y qué hace hoy sin el producto. El diseño se juzga por si la tarea sale más rápida y con
menos errores, no por cómo se ve en una captura.

## 2. Una pregunta por pantalla

Cada pantalla responde una sola pregunta ("¿qué hago ahora?", "¿cuál abro?", "¿está bien?", "¿qué ajusto?").
Lo que responde otra pregunta va a otra pantalla, a un panel o a un plegable.

## 3. Lo frecuente a la vista, lo raro a un clic

Ordenar por frecuencia e importancia, no por cómo está hecho por dentro. Una acción diaria nunca dentro de un menú;
una configuración de una vez nunca en el camino de todos los días. Mostrar todo es lo mismo que no destacar nada.

## 4. Una acción principal por contexto

En cada pantalla, diálogo o tarjeta hay una acción que la mayoría quiere: es la única sólida y está donde termina la
lectura. Las demás son secundarias. Dos botones principales compitiendo es una decisión sin tomar.

## 5. Decir dónde estoy, qué pasó y qué sigue

Estado visible siempre: dónde estoy (título, ítem activo, migas), qué está pasando (cargando, guardando, generando,
con cuánto falta) y qué puedo hacer después. Nunca silencio después de una acción.

## 6. Perdonar

Deshacer en vez de confirmar. Conservar lo escrito ante errores. Valores por defecto sensatos. Confirmación fuerte
solo para lo irreversible. La persona tiene que poder explorar sin miedo a romper.

## 7. Prevenir antes que explicar

Mejor un control que no permite el error (un selector de fechas, un campo con formato) que un mensaje después. Mejor
un texto de ayuda antes que un error. Mejor un error claro en el lugar que un "Algo salió mal" genérico.

## 8. Consistencia con el mundo, después con uno mismo

Usar los patrones que la gente ya conoce (Jakob: pasa la mayor parte del tiempo en otros productos). Una misma
palabra, ícono, color o atajo significa lo mismo en todo el producto. Innovar solo donde el producto aporta algo
nuevo, no en cómo funciona un menú.

## 9. Accesible desde el principio

Teclado, lector de pantalla, contraste, tamaño de toque, movimiento reducido y texto ampliado no son una etapa final:
son requisitos como cualquier otro. Lo que es accesible casi siempre es más usable para todos.

## 10. Honesto

Nada de datos inventados, urgencia falsa, costos escondidos, opciones preseleccionadas que perjudican, cancelaciones
difíciles ni estados que mienten. Si algo no se sabe, decir "No disponible". La confianza es la experiencia.

## 11. Con criterio, no con relleno

Cada elemento tiene que justificar su lugar: si se saca y nadie lo extraña, sobraba. Nada de decoración genérica
para que "se vea moderno". Ver [01-anti-slop.md](01-anti-slop.md).

## 12. El estado real es parte del diseño

La interfaz muestra lo que el sistema realmente está haciendo, con la acción que lo resuelve, y lo cuenta igual en
todas las vistas. Estados parecidos (sin cuota vs desconectado) no se mezclan. Ver
[08-estado-real-y-verificacion.md](08-estado-real-y-verificacion.md).

## 13. Probarlo de verdad

Revisar en el dispositivo real, con datos reales (nombres largos, listas vacías, 1.000 filas, errores), en claro y en
oscuro, con teclado y con el texto agrandado. Una pantalla que solo funciona con datos de ejemplo perfectos no está
terminada.
