# Móvil (iOS y Android)

El pulgar manda: lo frecuente abajo y al alcance, lo raro arriba o en menús. Respetar los gestos y convenciones de
cada sistema vale más que la originalidad.

## Navegación

- **Barra de pestañas abajo** con 3–5 destinos principales, ícono + texto siempre (sin texto se adivina). La activa
  rellena y con color.
- Cada pestaña mantiene su propia pila: volver a tocarla vuelve al inicio de esa pestaña y sube al tope.
- Volver: gesto de borde (iOS) y botón atrás del sistema (Android) funcionan siempre; no romperlos con pantallas
  modales innecesarias.
- Título grande que se achica al hacer scroll (iOS) para pantallas de nivel superior; títulos normales adentro.
- Acción principal de la pantalla: arriba a la derecha (iOS) o botón flotante (Android / apps de creación).

## Hojas inferiores (bottom sheets)

- Para elegir opciones, filtros o ver el detalle sin perder el contexto (mapa, lista)
  ([Strava](https://mobbin.com/screens/ff743f3b-70ee-49f7-ab41-f1dd17bd1f3d),
  [Cash App](https://mobbin.com/screens/f70ac04e-6599-4cd0-b4b6-9178f7fc177b)).
- Agarradera arriba, título, cerrar con X o deslizando hacia abajo; altura media que se expande a completa.
- Opciones como filas grandes con ícono + título + descripción
  ([ChatGPT](https://mobbin.com/screens/cf94f6ed-ad32-48c1-ad40-e8ee75e9615a)), o como tarjetas visuales cuando la
  diferencia es visual ([AllTrails](https://mobbin.com/screens/acba9f6e-6d6b-4432-807f-6b59c249e141),
  [Fi](https://mobbin.com/screens/b590abf4-f9cb-41e0-87d1-c980e3d698a8)).
- Botón principal abajo, de ancho completo, dentro de la zona del pulgar
  ([Grab](https://mobbin.com/screens/2069f68f-09c9-4de2-ba5f-e4cc6a456d3b)).
- No apilar hojas sobre hojas.

## Acciones al deslizar

- Deslizar una fila revela acciones; la destructiva en rojo al extremo, las demás con color propio y texto
  ([Telegram](https://mobbin.com/screens/7b4ae82f-5122-4626-82c9-a6ef11bea8dc),
  [Shopee](https://mobbin.com/screens/cc2f6159-8bee-4851-b2d7-c76b0f37a12f)).
- **Siempre tener otra forma de llegar** a esas acciones (mantener presionado, menú ⋯, modo Editar): el deslizar no
  se descubre y no existe para lectores de pantalla sin acciones personalizadas.
- Deslizar completo = acción por defecto, solo si es reversible (archivar sí, borrar con deshacer).
- Dejar que la persona elija qué hace cada deslizar en ajustes
  ([GitHub](https://mobbin.com/screens/37a63823-8a0b-479b-bf6a-7354a718618d)).

## Permisos del sistema

- **Nunca pedir al abrir la app.** Pedir en el momento en que se necesita, con una pantalla previa que explica para
  qué ("Para avisarte cuando llegue tu auto", [Waymo](https://mobbin.com/screens/682f61a7-dd62-4771-aa6b-493ccf16725d),
  [Microsoft Copilot](https://mobbin.com/screens/0cd130d9-7007-475a-9379-c65d6bea2a05)).
- Un beneficio concreto por permiso, en una línea.
- Ofrecer la alternativa menor ("Solo ubicación aproximada",
  [World App](https://mobbin.com/screens/1b03f389-e105-4cf0-bef2-5fad252db9fb)) y "Ahora no".
- Si lo negó: explicar qué no va a funcionar y llevar a Ajustes con un botón
  ([PayPal](https://mobbin.com/screens/983f9dfc-bbc5-42dd-965d-abcac68bda66)); no volver a molestar en cada pantalla.

## Puesta en marcha en móvil

- **Pantalla de bienvenida corta**: marca, una frase de valor y dos botones ("Iniciar sesión" / "Crear cuenta",
  [Raycast](https://mobbin.com/flows/1c30eb52-9997-4a33-a50d-05dc3e7a8f09)). Nada de 5 pantallas deslizables de
  beneficios antes de dejar entrar.
- **Preguntas de personalización con "Paso 1 de 4"**, barra arriba, "Saltar" visible y "Lo podés cambiar después"
  ([Blinkist](https://mobbin.com/flows/a9e95e3d-961b-422b-b217-d3fe6fe34e0f)).
- **Opciones como filas grandes tocables**, no desplegables; el botón "Siguiente" abajo, en la zona del pulgar.
- **Prueba gratis honesta**: línea de tiempo "Hoy empieza · el día 5 te avisamos · el día 7 se cobra", precio
  anual y mensual, "Cancelás cuando quieras" (Blinkist). Es el mejor ejemplo de transparencia en pagos.
- Llegar al inicio con contenido ya personalizado, no a una pantalla vacía.

## Configuración en móvil

- **Lista agrupada** con títulos de sección (Preferencias, Suscripción, Soporte, Acerca de;
  [Meetup](https://mobbin.com/screens/3acc9970-f3ca-43f3-959e-c72d76090d76),
  [Gentler Streak](https://mobbin.com/screens/ca366da8-1c89-41cb-96c8-5805528dc313)).
- **Cada fila**: ícono opcional, título, **valor actual a la derecha** ("Imperial", "Activado", "Modo oscuro") y
  › si abre otra pantalla; interruptor si es sí/no y se aplica al instante.
- **Subtítulo debajo del título** cuando la opción no se explica sola
  ([Google TV](https://mobbin.com/screens/13577f13-8ff2-4789-ab1b-5a95a0df46d8): "Avisar antes de usar datos
  móviles").
- **Texto al pie de un grupo** para explicar consecuencias.
- **Accesibilidad como sección propia** (colores accesibles, signos +/− además del color;
  [Copilot](https://mobbin.com/screens/87e61ef3-fb87-4e97-a062-87886023ce01)).
- Versión de la app al final (útil para soporte); legales y "Acerca de" abajo; cerrar sesión y borrar cuenta al
  final, separados.

## Medidas y toque

- Área tocable mínima 44×44 pt (iOS) / 48×48 dp (Android), aunque el ícono sea más chico.
- Separación entre objetivos táctiles ≥ 8 pt.
- Respetar áreas seguras (notch, isla, barra de inicio); contenido importante fuera de los bordes.
- Texto base 16–17 pt; nada por debajo de 11–12 pt.
- Soportar el tamaño de letra del sistema (Dynamic Type / escala de fuente) sin romper el diseño.

## Teclado y formularios

- Tipo de teclado según el dato; botón de retorno con la acción ("Siguiente", "Buscar", "Enviar").
- El campo enfocado nunca queda tapado por el teclado; el botón principal sube con él.
- Códigos de un solo uso con autocompletado del sistema desde SMS o email.

## Rendimiento percibido

- Respuesta táctil inmediata (estado presionado, háptica sutil en confirmaciones).
- Listas con carga incremental y esqueletos; tirar para actualizar donde el contenido cambia.
- Trabajo sin conexión con cola y estado visible ("Se enviará cuando vuelva la conexión").
