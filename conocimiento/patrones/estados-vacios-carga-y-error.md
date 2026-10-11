# Estados: vacío, cargando, error y éxito

Cada pantalla tiene al menos cinco estados: ideal, vacío, cargando, parcial y error. Diseñar solo el ideal es la
causa más común de interfaces que se sienten rotas.

## Vacío

Tres tipos, tres respuestas:

| Tipo | Ejemplo | Qué mostrar |
| --- | --- | --- |
| Primera vez | "Todavía no hay proyectos" | Para qué sirve + **una** acción principal + ayuda opcional |
| Sin resultados | Búsqueda o filtro sin coincidencias | Qué se buscó + "Limpiar filtros" / sugerencias |
| Terminado | Bandeja en cero | Confirmación tranquila ("Estás al día") sin acción forzada |

- **Estructura:** ilustración chica o ícono (no protagonista), título que dice el beneficio ("Juntá tu inspiración",
  [Mobbin](https://mobbin.com/screens/f68b3864-e437-43b2-88b7-43a13f634513)), una frase, un botón
  ([Laravel Cloud](https://mobbin.com/screens/5a0b71b3-f06f-4b14-af43-b862c1550a8f),
  [Fabric](https://mobbin.com/screens/a4f06792-edb8-4ea3-8c04-f99a2f771acc)).
- **Mostrá cómo se va a ver lleno**: una vista previa de la pantalla con datos de ejemplo
  ([ClickUp Goals](https://mobbin.com/screens/3f3c2432-3db0-4cfc-b469-2a088d38dde5)).
- **Ayuda como segunda capa:** invitar a alguien, ver un tutorial, hablar con soporte, en una fila discreta debajo
  ([Steep](https://mobbin.com/screens/b026462f-39da-445e-b451-36da6d487c49)).
- **Vacío dentro de un constructor:** decir dónde va a aparecer el resultado ("Agregá filtros; los resultados
  aparecen acá", [HubSpot](https://mobbin.com/screens/1f61dd9a-ad64-47ed-bdef-f840c67cdfbc)).
- **Humor, poco y si la marca lo tiene** ([Typeform](https://mobbin.com/screens/648d4700-8592-4be4-8b65-5931ac44fd17)).
- **Evitar:** caja punteada enorme con un enlace chiquito como única acción
  ([Literal](https://mobbin.com/screens/fb36989d-05af-4136-bb73-634a2e0ba1f9)); "No hay datos" sin salida; tres
  botones que compiten.

## Cargando

- **< 300 ms:** no mostrar nada (un indicador que parpadea es peor que esperar).
- **300 ms – 2 s:** esqueleto con la forma del contenido, o el botón en estado "Guardando…" con su ancho fijo.
- **2 – 10 s:** progreso con lo que está pasando ("Analizando 3 de 12 archivos").
- **> 10 s:** etapas con tilde, tiempo estimado, y que la persona pueda irse y recibir aviso al terminar.
- Actualizaciones optimistas para acciones que casi nunca fallan (marcar, mover, renombrar), con reversión clara
  si fallan.
- Nunca bloquear toda la pantalla por algo que afecta una parte.

## Error

- **Donde ocurrió**: en el campo, la fila, la tarjeta o el paso; no un banner genérico arriba.
- **Tres partes:** qué pasó (en el idioma de la persona), por qué si ayuda, y qué hacer (Reintentar, Editar,
  Contactar). Detalle técnico plegado y copiable.
- **No culpar** ("Ingresaste mal...") ni dramatizar ("¡Ups! Algo salió terriblemente mal").
- Conservar lo que la persona escribió. Perder un formulario por un error de red es imperdonable.
- Errores de red: reintento automático con espera creciente y aviso "Sin conexión, reintentando…".

## Páginas de error (404, 500, sin permiso)

- **Dentro del marco de la app** (barra lateral y búsqueda siguen ahí), no una página en blanco
  ([Coinbase](https://mobbin.com/screens/a7b3ff5b-38e8-4d00-8b50-0900ee10f423)).
- **Título que dice qué pasó** en palabras de la persona ("No encontramos esta página", "No tenés acceso a este
  proyecto"), una línea con la causa probable y **salidas**: volver al inicio, buscar, pedir acceso, reintentar.
- **Errores del servidor:** "Reintentar" como acción principal; estado del servicio si hay una página de estado.
- **Sin permiso:** quién lo puede dar y un botón "Pedir acceso".
- **Objeto borrado:** decirlo ("Este video fue borrado el 3 oct") y ofrecer la papelera si existe.
- Error dentro de una sección (un panel, un gráfico) con su propio reintentar, sin tumbar la página
  ([Care.com](https://mobbin.com/screens/5bea7e07-ed66-498c-9862-a7e7110507f2)).
- Evitar: "¡Whoops!", ilustraciones grandes que empujan las salidas fuera de la vista, códigos sin explicación.

## Éxito y avisos efímeros (toasts)

- Confirmación breve, abajo (o arriba a la derecha), que no tapa la acción siguiente
  ([Laravel](https://mobbin.com/screens/5a0b71b3-f06f-4b14-af43-b862c1550a8f),
  [Klarna](https://mobbin.com/screens/ab5556c1-f9bd-4e69-92fb-2c9e0b2edda3)).
- **Deshacer dentro del aviso** para acciones reversibles, en vez de pedir confirmación antes.
- Duración ~4–6 s; más si tiene acción; pausa al pasar el mouse; se puede cerrar.
- `role="status"` (o `alert` si es error); no robar el foco.
- No usar toasts para errores que requieren acción: esos van en línea.
