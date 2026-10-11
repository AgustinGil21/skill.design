# Productos con IA: chat, agentes y generación

La IA es un material de diseño con tres propiedades que cambian todo: tarda, a veces se equivoca y hace cosas en
nombre de la persona. El diseño tiene que mostrar qué está haciendo, dejar corregir y nunca esconder el control.

## Campo de pedido (composer)

- **Un campo grande con pregunta que invita** ("¿En qué te ayudo?") y debajo **chips de tareas comunes**
  ("Hacer una presentación", "Investigación profunda", [WRITER](https://mobbin.com/screens/a179dc40-b3ac-4129-ad6a-90501042982a)).
- **Dentro del campo, abajo:** adjuntar (+), herramientas, modo, selector de modelo, voz y enviar
  ([Langdock](https://mobbin.com/screens/5b7f19d0-390c-4dde-9bf0-61074747c920),
  [ClickUp](https://mobbin.com/screens/5059281b-aadf-4533-84da-6c7c399aeea5)).
- **Selector de modelo con "Mejor / Automático"** primero y una línea por modelo diciendo para qué sirve, no solo
  el nombre ([Dropbox Dash](https://mobbin.com/screens/536f1280-e59b-43c4-8dd0-3f0e91e15695)).
- **Adjuntos como tarjetas** con tipo y tamaño encima del texto; formato inválido avisado en el momento
  ([Cohere](https://mobbin.com/screens/fe5cd405-0afc-4b50-984b-9ffbc1454c68)).
- **@ para mencionar** contexto, archivos, agentes o habilidades, con selector filtrable.
- Enter envía, Shift+Enter salta de línea; mientras responde, el botón enviar pasa a **Detener**.
- Aviso discreto de que puede equivocarse, debajo del campo, una vez; no en cada mensaje.

## Respuesta

- **Pasos visibles mientras trabaja**: "Leyendo «archivo.csv»", "Buscando en la web", lista de tareas con tilde
  ([Langdock](https://mobbin.com/screens/5b7f19d0-390c-4dde-9bf0-61074747c920),
  [Lindy](https://mobbin.com/screens/9f4affd5-f387-4149-860e-95c83f9bbba5)). Plegables: resumen de una línea,
  detalle al abrir.
- **Texto que aparece en streaming** sin saltos de layout; el scroll sigue al final solo si la persona estaba al
  final.
- **Fuentes citadas** como chips o "Fuentes" debajo de la respuesta
  ([Sana](https://mobbin.com/screens/bb8ca2ad-dfef-4929-a56a-52771f782ae3)).
- **Acciones por respuesta:** copiar, me gusta / no me gusta, regenerar, leer en voz alta, compartir.
- Si cambió algo en el producto, la respuesta lo dice y ofrece **Deshacer / Ver cambios** ahí mismo.
- Resultados largos (documento, código, sitio) en un **panel al costado** con su propia vista
  (Lindy: navegador / terminal).

## Agentes que actúan

- **Permisos explícitos por nivel**: leer libre; cambios con aviso; acciones externas o destructivas con
  aprobación. La aprobación vive en la conversación como tarjeta con "Aprobar", "Siempre en esta sesión" y
  "Rechazar con motivo".
- **El modo elegido siempre visible** como chip en el campo.
- **Avisar cuando termina** una tarea larga si la persona se fue a otro lado.
- **Historial con punto de restauración** por cada cambio grande.
- **Constructor de agentes:** configuración a un lado (instrucciones, conocimiento, herramientas, permisos) y
  **vista previa probando al otro** ([StackAI](https://mobbin.com/screens/3046e4c7-f5a2-4b71-9c1c-5c0569897913),
  [Zapier](https://mobbin.com/screens/6761055d-8af5-4783-b678-c7fc77132fd5)). Conocimiento como tarjetas por tipo
  de fuente (Web, Archivo, Tabla) con estado de procesamiento.

## Generación (imágenes, video, audio)

- **Campo de pedido abajo y fijo**, resultados arriba en orden cronológico
  ([Krea](https://mobbin.com/screens/20668dcd-83b3-4d37-bd93-f5097461f75d),
  [Luma](https://mobbin.com/screens/9e14fff0-3b96-4b93-80ab-cc989c187287),
  [Higgsfield](https://mobbin.com/screens/5b5bfd12-36bb-4329-b4db-035822fdfcf5)).
- **Parámetros como chips dentro del campo** (estilo, proporción, resolución, cantidad, modelo), no un formulario.
- **Cada resultado con acciones al pasar el mouse**: variar, mejorar resolución, descargar, favorito; menú ⋯ con
  el resto (regenerar, reusar parámetros, compartir, borrar al final).
- **Reusar parámetros** de un resultado para seguir iterando.
- **Detalle de un resultado:** grande a la izquierda, a la derecha el pedido, ajustes, referencia y acciones
  ("Usar imagen", "Crear video", "Guardar como plantilla"; [Magnific](https://mobbin.com/screens/c403df5c-8bd9-44ec-8032-5bbe5cc251db)).
- **Mientras genera:** tarjeta en el lugar donde va a aparecer el resultado, con progreso o etapa.
- **Créditos visibles** y el costo antes de generar ("2991 generaciones gratis restantes").
- **Selección múltiple** en la galería con barra de acciones (descargar, mover, borrar)
  ([Midjourney](https://mobbin.com/screens/7ea54e8d-ac6f-40ca-ab87-c000dc01f815),
  [Leonardo](https://mobbin.com/screens/942e470d-673b-4936-8753-ea9ae245a7f6)).

## Confianza

- Decir qué datos usa y qué no (privacidad, entrenamiento) en el lugar donde se cargan.
- Nunca inventar números o estados que no se tienen: "No disponible" es mejor que un dato falso.
- Mostrar el costo y el límite antes de que se agote, y qué pasa cuando se agota.
- Errores del proveedor traducidos a lo que la persona puede hacer ("Se agotó la cuota, se renueva el lunes 9:00").

## Configurar un agente o asistente

- **Configuración a la izquierda, prueba en vivo a la derecha**: cada cambio se puede probar en el chat de al lado
  sin publicar ([Langdock](https://mobbin.com/screens/5865d4ff-e759-4dd9-9ca1-1fba27e53db0),
  [Mistral](https://mobbin.com/screens/f3b88b5d-3e9e-4aae-bcc5-0c70d4e48125),
  [Chatbase](https://mobbin.com/screens/3f3efe3a-9471-49d8-83d2-5e0e22239f24)).
- **Campos en el orden en que se piensa**: nombre e ícono → descripción → instrucciones → conocimiento → acciones o
  herramientas → modelo. Instrucciones con ejemplo y "Más información" sobre cómo escribirlas.
- **Límites (qué no hace) como campo propio** separado de las instrucciones ("Reglas", Mistral).
- **Probar "como" alguien** (vista del cliente, usuario de prueba) y ver el registro de eventos al lado de la
  conversación ([Intercom](https://mobbin.com/screens/10951cba-f3ef-4958-b6bd-4eba9a8adbe5)).
- **Preguntas de ejemplo para probar** con un clic, que muestran cómo respondería
  ([Gorgias](https://mobbin.com/screens/a68782b3-efaa-4aa5-9212-0d5761efda3a),
  [HubSpot](https://mobbin.com/screens/6da9c4b1-5fd7-4917-b9dd-8dca2f516a30)).
- **Estado de guardado y de publicación visibles** ("Guardado" · "Privado" · "Publicar agente"); y si no está activo,
  decir dónde activarlo ("Sam_bot no está activo. Asignalo a un canal", HubSpot).
- **Fuentes de conocimiento con su estado** ("Entrenado hace 5 minutos · 70 KB") y reentrenar.
- **Variables insertables como chips con valor de respaldo** ("Hola {Nombre}" → si falta, "Hola"; Intercom).
- **Pasos con ✓ si se configura por asistente** (Identidad · Comportamiento · Conocimiento · Acciones · Publicar;
  [PlayAI](https://mobbin.com/screens/fb07bf7f-8d4a-42ea-9d60-15d607265efe)).
- "Comparar modelos" o "Restablecer instrucciones" como acciones secundarias, no en el camino principal.
