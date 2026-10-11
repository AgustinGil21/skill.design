# Herramientas para desarrolladores: claves, permisos y registros

## Claves de API

- **Lista de claves** con nombre, quién la creó, permisos, fecha de creación, vencimiento, **último uso** y estado
  ([Copy.ai](https://mobbin.com/screens/2a8a06af-b6da-4fb7-9b93-03b10d4a87a5),
  [Midday](https://mobbin.com/screens/9e457f8a-1f4f-4446-af95-1941664bc0aa)). La clave se muestra recortada
  (`sk-…vXg8`) para reconocerla.
- **Crear**: nombre (para saber para qué es), permisos y vencimiento opcional.
- **Mostrar la clave una sola vez**, con el aviso destacado ("No la vas a poder ver de nuevo"), botón **Copiar** que
  confirma ("Copiado") y cierre explícito ("Ya la guardé" / "Cerrar y ocultar para siempre",
  [Gamma](https://mobbin.com/screens/3762fc5a-915b-4783-a48b-01f01c95c49a),
  [ElevenLabs](https://mobbin.com/screens/f636cd71-171c-4266-9dd8-ff6412264b84)).
- **Permisos por recurso** con niveles (Ninguno / Leer / Escribir), resumen ("3 permisos elegidos"), y el mínimo
  necesario como defecto ([OpenAI](https://mobbin.com/screens/701c79c6-3a8d-4309-a6f5-373634664a6d)).
- **Revocar** con consecuencia clara ("Las integraciones que la usen van a dejar de funcionar"); "Rotar" cuando
  existe (nueva clave + período de convivencia).
- **Nunca** mostrar claves completas en listas, registros, URLs ni errores.
- Enlace a documentación y ejemplo de uso al lado ("Ver documentación de la API").

## Webhooks e integraciones técnicas

- URL de destino, eventos a escuchar (con descripción), secreto para firmar (mostrado una vez), estado.
- **Enviar evento de prueba** y ver la respuesta.
- **Registro de entregas** con estado HTTP, duración, cuerpo enviado y respuesta, y "Reintentar".

## Registros (logs) y auditoría

- Filtros por fecha, tipo, persona y resultado; búsqueda de texto.
- Cada fila: cuándo (absoluto y relativo), quién, qué hizo, sobre qué, resultado, y el detalle desplegable con el
  JSON formateado y copiable.
- Exportar (CSV/JSON) del rango filtrado.
- Seguir en vivo (tail) con pausa automática al hacer scroll hacia arriba.

## Configuración por pasos para algo técnico

- Pasos numerados plegables (1. Generar clave · 2. Configurar archivo · 3. Listo) con el estado de cada uno
  ([Profound](https://mobbin.com/screens/f8e0b41f-c1db-41f8-b11b-cfe61dfaf8d4)).
- Bloques de código con copiar, lenguaje elegible y los valores de la persona ya completados.
- Verificar al final ("Probar conexión") en vez de dejar a la persona adivinando si quedó bien.
