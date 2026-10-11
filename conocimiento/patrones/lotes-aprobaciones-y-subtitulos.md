# Trabajos en lote, aprobaciones y editor de subtítulos

## Trabajos en lote y colas

- **Lista de lotes con nombre, creado, vence, estado y progreso** ("100 %", duración;
  [ElevenLabs](https://mobbin.com/screens/4a16bd1e-72af-43f7-8a35-e40723de44db),
  [Grok](https://mobbin.com/screens/bd1deff9-c4b4-4f12-b129-ccbdd3a6d55c)).
- **Detalle del lote al costado**: estado ("Validando"), conteos ("0 completados, 0 fallidos de 0"), archivos de
  entrada / salida / errores y línea de tiempo de eventos; "Cancelar lote" abajo
  ([OpenAI Platform](https://mobbin.com/screens/2405cd1e-66fd-4cf2-ae4e-f468328cad91)).
- **Resumen arriba al terminar**: destino, exitosos (con tamaño y %), fallidos; tabla de ítems con estado y error
  por fila, filtrable ([AWS](https://mobbin.com/screens/0dc7a3c3-26ec-45a8-8a79-69bb9fce85e8)). Avisar si el resumen
  se pierde al salir.
- **Historial de ejecuciones con gráfico** (éxitos / fallas por día) y **errores más frecuentes** agrupados por
  código ([Databricks](https://mobbin.com/screens/06b7cd16-d98c-423c-970d-ead120b13b54)); cómo se lanzó (a mano /
  programado).
- **Pausar, reanudar y cancelar con su diferencia explicada** ("Pausar detiene el procesamiento"; "Cancelar indica
  que no se va a retomar"; [Relevance AI](https://mobbin.com/screens/8735a63d-e92d-431c-975e-e169ecb2102d)) y
  pestañas por estado (En curso · Procesados · Cancelados).
- **Etapas del lote** como pasos (Elegir · Imprimir · Empaquetar · Listo) cuando el trabajo tiene fases
  ([Shopify](https://mobbin.com/screens/10bda18e-95a0-4c93-8be9-3b3775477e90)).
- **Progreso real**: "Editando 3 elementos · 0 % · empezó 12:05" se actualiza solo; anti-ejemplo: botón "Actualizar"
  para ver el avance ([Jira](https://mobbin.com/screens/58b43a1e-81f2-4808-b7eb-af8a5104fa91)).
- **Reintentar solo los fallidos** y descargar los resultados parciales; nunca rehacer todo por un error.
- Cola con orden y posición ("3 en cola · empieza en ~2 min") y límite de concurrencia dicho.

## Aprobaciones y pedidos de cambios

- **Estado del pedido arriba** (Abierto · En revisión · Aprobado · Cerrado) con quién lo abrió y hacia dónde va
  ([PlanetScale](https://mobbin.com/screens/78880fb1-c0dc-4307-a635-1fb9a0c5527e),
  [GitLab](https://mobbin.com/screens/b789ca62-550f-4b63-981f-35a051c94ad6)).
- **Dos acciones claras para quien revisa**: "Aprobar" y "Pedir cambios"; pedir cambios exige un comentario y dice a
  quién se avisa ("Alex va a recibir un aviso para corregir y reenviar";
  [Toggl Track](https://mobbin.com/screens/6e5941be-fd02-4fde-af30-bd91b951db8e)).
- **Línea de tiempo** con aperturas, comentarios, aprobaciones y cierres, cada uno con ícono de estado.
- **Pasos del proceso con plazos** ("En revisión por Legales · puede tardar hasta 5 días") y qué se usa mientras
  tanto ("Hasta que se apruebe, se usa la plantilla por defecto"; [Deel](https://mobbin.com/screens/04cf3d45-777b-4066-a5b2-b13598930ce7)).
- **Comentarios anclados al lugar exacto** (una zona de la imagen, una línea) y versión comentada (V2;
  [Air](https://mobbin.com/screens/f5d539dc-b847-4a45-83fb-b848a32e0410)); "Pedido de revisión" como tipo de hilo
  ([Fiverr](https://mobbin.com/screens/949a894c-dcf2-487d-83f3-2490844e395f)).
- **Revisar por partes** con "Marcar como visto" y "4/4 revisados" ([Devin](https://mobbin.com/screens/db4dc31e-376d-4bdd-907e-c99d56e8e964)).
- **Si la aprobación es opcional u obligatoria, decirlo** ("La aprobación es opcional"; GitLab) y quiénes deben
  aprobar.
- "Aprobar todo" solo cuando los pedidos son homogéneos ([Teams](https://mobbin.com/screens/e6210226-bf0f-4209-8bd5-08263435afa8)).

## Editor de subtítulos

- **Transcripción editable como texto** a un lado y video al otro; editar el texto corrige el subtítulo
  ([Descript](https://mobbin.com/screens/c373ca6f-8984-4d1b-bc34-2f562d341063),
  [Loom](https://mobbin.com/screens/338f7c21-31b1-497c-af79-adcc71234a44)).
- **Estilos como presets con vista previa real** (Clásico, Karaoke, Negrita resaltada, dos palabras) y alcance
  "Todas las escenas / Esta escena" ([Riverside](https://mobbin.com/screens/1afabe30-54d7-407f-8a5b-920749d2a1ae),
  [ElevenLabs](https://mobbin.com/screens/74e7e348-0bf9-483e-a87e-4596a665b67d)).
- **Ajustes finos agrupados**: tipografía, tamaño, mayúsculas, cantidad de líneas, resaltado automático, posición
  ([VEED](https://mobbin.com/screens/ff4717e3-e2e3-4a93-9f57-73a4434f95b6)), animación de entrada y salida con tiempo
  ([Synthesia](https://mobbin.com/screens/3e96b0c0-b1d5-4262-912e-d1b79b734f50)).
- **Pista de subtítulos en la línea de tiempo** con bloques recortables y "Dividir" / "Agregar subtítulo".
- **Limpieza asistida**: quitar silencios y muletillas mostrando cuántas ("3 muletillas quitadas") y tachadas en el
  texto para revisar (Loom).
- **Idioma de los subtítulos** elegible y traducciones como pistas aparte.
- **Legibilidad primero**: contraste con fondo u opacidad ajustable, tamaño mínimo, dos líneas como máximo, dentro
  del área segura del formato (9:16 deja espacio a la interfaz de la red).
- Del lado de quien mira: opciones de subtítulo (tamaño, color, fondo, opacidad, posición) con texto de muestra y
  "Restablecer" ([Paramount+](https://mobbin.com/screens/f7b29c41-bea6-46ee-9001-01f0fb1f92b2),
  [Hulu](https://mobbin.com/screens/7f399d48-8dc3-4f9b-ad07-2d29cc1058c0)).
