# Capas: diálogos, paneles, menús y confirmaciones

Cada capa interrumpe. Elegir la más liviana que alcance.

| Necesidad | Capa |
| --- | --- |
| Elegir una opción o acción corta | Menú desplegable / popover |
| Ver o editar el detalle sin perder la lista | Panel lateral (sheet) |
| Tarea corta y enfocada (2–5 campos) | Diálogo |
| Tarea larga o con varios pasos | Página propia o pantalla completa |
| Avisar algo que ya pasó | Toast |
| Avisar algo que bloquea | Banner en línea o diálogo de alerta |

## Diálogos

- Título que nombra la tarea ("Invitar a tu equipo"), no "Atención".
- Una acción principal a la derecha (o abajo en móvil), "Cancelar" secundario. En macOS y la web el orden más
  común es Cancelar · Acción.
- Se cierra con Esc, con la X y al hacer clic afuera **solo si no hay cambios**; con cambios, preguntar.
- Foco al primer campo al abrir; foco de vuelta al botón que lo abrió al cerrar; foco atrapado adentro.
- Nunca un diálogo encima de otro diálogo.

## Confirmar antes o deshacer después

- **Por defecto: hacer y ofrecer "Deshacer"** (borrar un ítem, archivar, mover). La confirmación previa se vuelve
  ruido y la gente aprende a aceptar sin leer.
- **Confirmar solo lo irreversible y caro**: borrar un proyecto, una cuenta, datos de otros.

## Confirmación de algo irreversible

Patrón muy repetido ([Cloudflare](https://mobbin.com/screens/aa928ac1-4a1d-4b8c-9ccb-be35211cdca8),
[Clerk](https://mobbin.com/screens/71516c8f-ca28-4b68-bca8-01b6ea6e46ec),
[Lindy](https://mobbin.com/screens/9f1d4d52-a8f7-48b7-89e5-b113b6aa6419),
[Relevance AI](https://mobbin.com/screens/552cef13-e0e1-41d4-8715-9b5b7d65cb43)):

1. Título con verbo + objeto: "Borrar el proyecto «Aurora»".
2. Consecuencias concretas: qué se pierde (versiones, archivos, miembros) y que no se puede deshacer.
3. Escribir el nombre (o "BORRAR") para habilitar el botón, con botón copiar al lado del texto a escribir
   (Cloudflare, [Resend](https://mobbin.com/screens/778f011b-60b4-4584-b317-1e2353024e0c)). Para borrados en lote,
   escribir la cantidad ([HubSpot](https://mobbin.com/screens/36379d53-ae81-4379-a218-a3e05659194a)).
4. Botón rojo con el verbo exacto ("Borrar proyecto"), deshabilitado hasta que coincida.
5. Si existe papelera o período de gracia, decirlo ("Se puede recuperar durante 30 días").

## Paneles laterales

- Para detalle y edición contextual; la lista sigue visible para comparar o pasar al siguiente.
- Ancho 400–560 px; en pantallas chicas, pantalla completa.
- Navegar entre ítems con ↑ ↓ o "Anterior / Siguiente" sin cerrar el panel.
- Paneles que conviven con el trabajo (asistente, comentarios) empujan el contenido en vez de taparlo.

## Menús

- Agrupados con separadores; ícono a la izquierda solo si todos lo tienen; atajo a la derecha.
- Destructivas al final y en rojo.
- Navegables con teclado (↑ ↓, Enter, Esc, primera letra).
