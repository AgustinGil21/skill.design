# Navegación y configuración

## Arquitectura: una pregunta por pantalla

Cada pantalla responde una sola pregunta: el inicio "¿qué hago ahora?", una lista "¿cuál abro?", un detalle "¿está
bien o lo cambio?", la configuración "¿qué ajusto?". Cuando una pantalla mezcla varias preguntas, se parte.

## Barra lateral (web y escritorio)

Orden que repiten casi todas las herramientas de trabajo:

1. **Arriba: selector de espacio / proyecto** con logo o inicial; adentro del menú: cambiar, crear y configurar el
   espacio ([Webflow](https://mobbin.com/screens/e6ef30e7-d8d2-450f-b039-1fd1ccc0bdd3)).
2. **Búsqueda** con su atajo (⌘K).
3. **3–5 destinos de trabajo diario** sin título de grupo (Inicio, Bandeja, el objeto principal, el asistente).
4. **Grupos con título corto** para lo que define el espacio y para lo compartido.
5. **Abajo:** ayuda, invitar, progreso de puesta en marcha o del plan, configuración y cuenta.

- Ítem activo con fondo y peso, no solo color.
- Contadores y estados en el borde derecho del ítem (número para revisar, punto de actividad).
- Plegable a íconos con tooltips; la preferencia se recuerda.
- No más de ~12 ítems visibles; lo raro va adentro de "Más" o de configuración.
- Configuración, facturación y miembros **no** compiten con el trabajo diario: van abajo o en su propia sección.

## Barra superior y migas

- Migas de pan cuando hay jerarquía de más de dos niveles; el último nivel no es enlace.
- Título de la página con sus acciones a la derecha (acción principal sólida, secundarias en contorno, el resto
  en ⋯).
- Pestañas para vistas hermanas del mismo objeto (Resumen / Actividad / Configuración); la pestaña activa en la URL.

## Configuración

- **Página propia con sub-navegación agrupada**: "Tu cuenta" (perfil, notificaciones, seguridad) / "Espacio"
  (general, miembros, integraciones, facturación) / "Otros"
  ([Slite](https://mobbin.com/screens/0f790cac-d25a-47b5-a2ad-16e544eddbe6),
  [Dovetail](https://mobbin.com/screens/899aba45-de7d-4564-8f03-8dd4fb82098f),
  [Unify](https://mobbin.com/screens/29fc6dd6-e213-47e8-b484-f0b74cbe8eef)).
- "← Volver a la app" arriba de la sub-navegación cuando la configuración reemplaza la barra principal.
- **Filas de ajuste:** título + valor actual o descripción a la izquierda, acción a la derecha ("Cambiar
  contraseña", "Administrar suscripción"; [ElevenLabs](https://mobbin.com/screens/a5dede03-9f19-42f1-a596-99c1e6357769)).
  Escanear de arriba a abajo sin abrir nada.
- **Secciones en tarjetas** con título, una línea de qué hace y su estado ("Activado"), y el botón de esa sección
  ([Base44](https://mobbin.com/screens/f51c9f4d-cbbb-40c2-ba83-860a0eb58fb5)).
- **Funciones de otro plan:** visibles, deshabilitadas, con qué plan las incluye y "Mejorar plan" en la misma
  tarjeta ([Render](https://mobbin.com/screens/f826ab4a-b578-464f-bff5-a935257fcdd1)); no esconderlas.
- **Zona de peligro al final**, separada, con el botón en rojo y su consecuencia en una línea
  ([Sketch](https://mobbin.com/screens/08bf4dc0-8a97-4a99-ad07-0d669ab9b36c)).
- **Guardar:** interruptores se guardan solos con aviso; campos de texto con "Guardar" por sección o barra de
  cambios sin guardar. Nunca un "Guardar" global lejos de lo que se editó.
- Configuración simple de cuenta puede ser un diálogo con filas que abren el detalle
  ([Pitch](https://mobbin.com/screens/0e1c8c93-4926-4e37-a1e6-8381abd098ac)).

## Conexiones e integraciones

- Tarjetas por servicio con logo, una línea y estado ("Conectado" con punto, o "Conectar"); conectadas arriba,
  disponibles abajo.
- Conectar como asistente de pasos: elegir método → hacerlo → confirmar qué se va a usar.
- Estado honesto: conectada, vencida (reconectar), sin cuota (sigue conectada), error.

## Móvil

Ver [movil.md](movil.md): barra de pestañas abajo, 3–5 destinos.
