# Reservas, atajos de teclado y novedades

## Reservar (mesa, turno, lugar)

- **Los tres datos que deciden juntos arriba**: personas · fecha · hora, como chips o selectores en una fila, y
  editables en cualquier momento ([Deliveroo](https://mobbin.com/flows/273b91d4-ed45-4e31-bdcd-44c392e46a3a),
  [Google Maps](https://mobbin.com/flows/0d96c444-c82b-4655-984e-a1cc9ad5f4a8)).
- **Horarios disponibles como botones**, los no disponibles atenuados o punteados (no escondidos, para que se
  entienda el hueco), agrupados por franja (Almuerzo / Cena) con "Ver todos"
  ([Zomato](https://mobbin.com/flows/786683de-379e-4460-8e0f-994f73d34a7e),
  [Uber Eats](https://mobbin.com/flows/0bbd24f0-3731-461d-b07c-01b4e355ff5b)).
- **Reservar desde la lista** tocando un horario de la tarjeta, sin pasar por la ficha
  ([TheFork](https://mobbin.com/flows/21d0ad29-148f-481c-894d-9e9d22885fb8)).
- **Calendario con días con disponibilidad resaltados** y los pasados o completos apagados (Deliveroo).
- **Resumen fijo y editable en la revisión** ("Dom 1 feb · 11:45 · 2 personas · Editar"), datos de contacto
  precargados, pedidos especiales opcionales ([Grab](https://mobbin.com/flows/781fe4f1-a471-4688-b940-36d532d2e822)).
- **Reglas antes de confirmar**: tolerancia, cuánto dura la reserva, política de cancelación, cargos; y "Confirmación
  inmediata · Sin cargo · Cancelación gratis" junto al botón (TheFork).
- **Retención con tiempo visible** cuando el lugar queda apartado ("Te guardamos la mesa 4:46", Uber Eats).
- **Marketing apagado por defecto** en las casillas de la revisión.
- **Confirmación**: qué, cuándo, dónde, a dónde se mandó el comprobante, y acciones útiles (agregar al calendario,
  cómo llegar, compartir, administrar o cancelar). Anti-ejemplo: publicidad de otro producto en la confirmación
  (Zomato).

## Atajos de teclado

- **Referencia abrible con `?` o ⌘/** desde cualquier lugar, con búsqueda y agrupada por contexto (Global, Lista,
  Detalle, Editor; [Amie](https://mobbin.com/screens/bd60d05d-f8f8-4a5f-801b-533c35f06c9f),
  [Frame.io](https://mobbin.com/screens/7bf0c9af-dd42-4511-a35e-15e097df461b)).
- **Teclas como `<kbd>`** separadas ("⌘" "K"), con el símbolo del sistema operativo de quien mira (⌘ en Mac, Ctrl
  en Windows).
- **Contexto aclarado** cuando un atajo solo funciona en un lugar ("Funcionan con un mensaje seleccionado",
  [Discord](https://mobbin.com/screens/d747e905-e01f-488a-9edb-cfefdbd958d5)).
- **Personalizar**: cada acción con su atajo y "Editar" / "Agregar atajo"; grabar la combinación presionándola;
  avisar conflictos; "Mostrar solo personalizados" y "Restablecer"
  ([Height](https://mobbin.com/screens/227ea05e-2f27-4ad6-8bbf-fa8915d896f3),
  [Replit](https://mobbin.com/screens/ff45e13e-7ef5-4178-9434-dd7382fcff1c)).
- **Poder desactivar los atajos de una sola tecla** (WCAG 2.1.4) — interfieren con lectores de pantalla y dictado
  ([Zoho CRM](https://mobbin.com/screens/8291b6de-66e5-495e-91a8-c8a2b6525956) tiene el interruptor).
- **Atajos mostrados en contexto**: en tooltips y menús al lado de la acción, no solo en la referencia.
- **Límites dichos**: "Los atajos globales solo funcionan en la app de escritorio" (Discord, Fabric).

## Novedades (changelog)

- **Entradas en orden cronológico inverso** con fecha (y versión si aplica), título que dice qué se puede hacer
  ahora, una o dos líneas y una imagen o video del cambio
  ([Visual Electric](https://mobbin.com/screens/d9619b46-9e89-4981-bef1-ad85c5074d79)).
- **Etiqueta de tipo** (Nuevo · Mejorado · Corregido) y filtros por tipo ([Canny](https://mobbin.com/screens/32a827a7-bbaf-4184-942d-d52462742365),
  [Webflow](https://mobbin.com/screens/e3459bdb-c87e-4603-97d4-15b5865629ca)).
- **Lo importante arriba y lo menor plegado** ("Mejoras de la plataforma", "Errores corregidos" en acordeones;
  [Gumloop](https://mobbin.com/screens/48782b0a-881f-44cf-81cf-c4bcbc6b8e30)).
- **Llevar a probarlo**: botón que abre la función ("Empezar a crear", "Ver en Studio") o "Más información".
- **Selector de versión** cuando hay muchas ([Leonardo](https://mobbin.com/screens/e0cbc005-7d2a-47e3-b7de-33effee96097)).
- **Dentro del producto**: punto discreto en "Novedades" cuando hay algo sin ver, y panel lateral
  ([Tally](https://mobbin.com/screens/cd537297-7313-4098-ad1a-0595d1781b81)); no un modal que interrumpe al
  entrar (anti-ejemplo: [Suno](https://mobbin.com/screens/e5128125-a731-4a11-9100-bbbf940922b6)).
- **RSS y búsqueda**; enlace a la hoja de ruta ("Lo que viene") si existe.
- Escribir para quien usa, no para el equipo: "Ahora podés unir dos imágenes", no "Refactor del pipeline".
