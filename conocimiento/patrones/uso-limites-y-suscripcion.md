# Uso, límites y suscripción

## Página de uso

- **Una fila o tarjeta por recurso limitado** (puestos, proyectos, ejecuciones, tokens, almacenamiento) con: qué es,
  "Usaste X", porcentaje, "X / límite" y período ("por día", "por mes")
  ([StackAI](https://mobbin.com/screens/a2976bbf-d4f1-407f-8c56-88779215f037),
  [HubSpot](https://mobbin.com/screens/e01319c5-9a17-41fe-9ae0-782aeeeee9e2)).
- **"Quedan X" es más útil que "usaste X"** cuando la persona decide si le alcanza ("49 publicaciones disponibles · 1
  usada", [Remote](https://mobbin.com/screens/63031996-b350-4fef-a2d4-3c86e9fa40e1)).
- **Presupuesto con fecha de reinicio** ("$0,13 / $10 · se reinicia en 28 días · Editar presupuesto",
  [OpenAI](https://mobbin.com/screens/2bf4f941-a9a7-4308-aa0c-864135823830)).
- **Gasto en el tiempo** con selector de período y desglose por función, persona o modelo
  ([Obvious](https://mobbin.com/screens/80d9fa7d-5ed7-44e8-b1b3-2756cbc330a8),
  [LangChain](https://mobbin.com/screens/86925057-b5b9-4c85-9787-9dcbee1d7b76)).
- **Registro detallado** de consumos con fecha, categoría, qué lo generó y cantidad, con enlace al origen
  ([Gumloop](https://mobbin.com/screens/690a3101-806b-4ddb-b670-0bc190897916)).
- **Recibo del período**: incluido en el plan, cargos por uso, saldo restante, promedio diario
  ([Cofounder](https://mobbin.com/screens/e9c05b3d-54e8-44db-9995-15ab9a95078a)).
- **Límites configurables** por persona, agente o proyecto, con "Sin límite" como valor explícito.
- **De dónde salen los datos** si puede haber demora o diferencias ("Se calcula a partir de las ejecuciones",
  LangChain).

## Medidores

- Barra con color neutro hasta ~80 %, advertencia cerca del límite y error al 100 %; siempre con texto, no solo
  color.
- Cifras con números tabulares; unidades claras (no mezclar "créditos" y "tokens" sin explicar la relación).
- Si no hay dato, "No disponible" y por qué, nunca una barra en 0 que parece real.
- Ver [../08-estado-real-y-verificacion.md](../08-estado-real-y-verificacion.md): cuota agotada ≠ cuenta
  desconectada.

## Avisos de límite

- **Antes de llegar:** aviso cerca del 80–90 % en el lugar del trabajo, sin bloquear.
- **Al llegar:** explicar qué se bloqueó, desde cuándo se puede seguir y las opciones (esperar, mejorar el plan,
  usar otra cuenta). No esconder la fecha de reinicio detrás del "Mejorar".
- **Prueba gratuita:** días restantes visibles y qué pasa al terminar (qué se pierde y qué no).

## Pedir que mejore el plan

- **En el momento en que se toca la función**, diciendo qué hace esa función y en qué planes está
  ([Typeform](https://mobbin.com/screens/9821f587-0516-4d25-88ca-7391518b6326),
  [Circle](https://mobbin.com/screens/e2e3b12a-c0a9-4874-89b1-8f159c0907f4)).
- **El motivo concreto** ("Tu plan permite un boletín",
  [Ghost](https://mobbin.com/screens/dde09f1b-a7d1-4cd8-9dcf-ec8d6af8a217)) y el precio del salto.
- **Salida digna siempre**: "Seguir con el plan gratis" / "Más tarde" visible al mismo nivel que se lee
  ([Mixpanel](https://mobbin.com/screens/3e027c63-0ec7-4abd-b5bd-513d979c3925),
  [Elicit](https://mobbin.com/screens/9a85989e-62da-4b19-8121-6aa72fb87740)).
- Mostrar el beneficio de lo que se desbloquea, no una lista de 15 funciones genéricas.
- Nada de bloquear en mitad de un trabajo sin guardar lo hecho.

## Cancelar

- **Encontrable** en la configuración del plan, con un botón propio
  ([Disney+](https://mobbin.com/flows/07613377-f2a2-45b1-8440-c422450b41ab),
  [Open](https://mobbin.com/flows/f9200ba9-accf-4eb9-a210-0c50d7375f99)).
- **Pausar** como alternativa cuando existe, al lado de cancelar, no escondida.
- **Encuesta de motivo corta y opcional** (decirlo: "Es opcional"); una oferta de retención como mucho, sin
  culpa ("Nos rompe el corazón…").
- **Después de cancelar:** hasta cuándo sigue el acceso, confirmación por email, "Reactivar" a un clic, y el
  estado actualizado en la cuenta ("Cancelándose · acceso hasta el 1 sep").
- Prohibido: cancelación solo por teléfono o chat, pasos infinitos, botones engañosos, culpa.
