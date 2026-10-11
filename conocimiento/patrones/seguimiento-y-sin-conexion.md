# Seguimiento de procesos y trabajo sin conexión

## Seguimiento de algo que está pasando (pedido, envío, trámite, proceso largo)

Las apps de delivery resuelven muy bien "¿dónde está lo mío y cuándo llega?". El patrón sirve igual para un
render, una importación, un trámite o un despliegue.

- **Arriba, la respuesta**: estado en palabras + hora estimada como rango ("Llega 13:09–13:19") y si va en tiempo
  ("A tiempo", [Keeta](https://mobbin.com/screens/56299fbf-b2d0-48be-867d-c434ca5af134),
  [Grab](https://mobbin.com/screens/bcfa763e-74d6-4b71-9add-b54464f5453f)).
- **Línea de etapas con íconos** (recibido → preparando → en camino → entregado), la actual marcada y las hechas
  completas ([Instacart](https://mobbin.com/screens/1ea1bd7a-7b38-4ad2-8215-80154f0d81a7),
  [Starbucks](https://mobbin.com/screens/bfe624e0-32cc-4caf-a550-0b773bac34d3)).
- **Una frase sobre qué está pasando ahora** ("El repartidor espera tu pedido en el local"), más útil que el nombre
  técnico de la etapa.
- **Contacto y ayuda a un toque** (llamar, chat, "Ayuda" arriba a la derecha), y lo que la persona puede hacer
  todavía (cambiar dirección, cancelar).
- **Promesa explícita y qué pasa si no se cumple** ("Si llega después de 13:34, te damos un cupón", Keeta).
- **Detalle plegado abajo** (ítems, recibo, dirección) para no competir con el estado.
- **Al terminar**: confirmación clara, prueba (foto, PIN) y siguiente paso (calificar, ver recibo).
- **Avisos en cambios de etapa**, no en cada minuto.
- Evitar meter promociones entre el estado y la información útil (anti-ejemplo:
  [Grab](https://mobbin.com/screens/bcfa763e-74d6-4b71-9add-b54464f5453f) con un banner de ofertas en el medio).

## Sin conexión

- **Aviso persistente pero no bloqueante** ("Sin conexión", barra arriba,
  [Particle](https://mobbin.com/screens/fa68f741-7d4e-4962-9c7e-15e3bf70d084)) y **seguir mostrando lo que ya
  estaba cargado**; no reemplazar la pantalla por un error.
- **Distinguir "sin conexión" de "el servidor falló"**: textos y acciones distintas (anti-ejemplo: "Error de red: no
  se pudo interpretar la respuesta" con jerga técnica).
- **Contenido disponible sin conexión** marcado, con su estado de descarga y gestión del espacio
  ([Notion](https://mobbin.com/screens/e9e94681-2120-4697-aadd-814c1f9464c1),
  [Headspace](https://mobbin.com/screens/43d841d6-90be-4f12-8082-874271af24ea)).
- **Acciones hechas sin conexión en cola**, con estado visible ("Se enviará al volver la conexión") y reintento
  automático.
- **Dispositivos o servicios conectados**: "Sin conexión · visto hace 18 min · Reconectar"
  ([ChatGPT](https://mobbin.com/screens/635cf9e7-fad6-4e72-b13d-20c138e4af00)).
- **Cuando hay que resolver algo físico**, una lista de qué revisar antes de reintentar ("Fijate que el teléfono
  esté en la misma red…", [Philips Hue](https://mobbin.com/screens/33c875bb-1b3c-4e08-8457-64e04e1ba387)) + Ayuda +
  Reintentar.
- Evitar el "¡Oh no! Algo salió mal a bordo" sin causa ni salida concreta
  ([Plenty of Fish](https://mobbin.com/screens/05df64cf-e3b6-475c-a746-9c8dfe33eb88)).
