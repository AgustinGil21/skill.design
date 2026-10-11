# Diseño de interfaces: conocimiento base

Lo que hace falta para diseñar interfaces claras, accesibles y fáciles de usar, sin "slop". Independiente de
cualquier proyecto: sirve para web, escritorio y móvil, y está pensado para convertirse en una skill que se use en
todas las sesiones.

## Cómo usarlo

- **Antes de diseñar:** [07-proceso.md](07-proceso.md) y el archivo de [patrones/](patrones/) del tipo de pantalla.
- **Mientras se diseña:** [00-principios.md](00-principios.md), [05-sistema-visual.md](05-sistema-visual.md),
  [04-escritura-de-interfaz.md](04-escritura-de-interfaz.md), [09-tipografia.md](09-tipografia.md),
  [10-color.md](10-color.md), [17-composicion-y-layout.md](17-composicion-y-layout.md).
- **Marca y que se sienta humano:** [11-marca-e-identidad.md](11-marca-e-identidad.md),
  [13-diseno-humano.md](13-diseno-humano.md), [12-psicologia-y-persuasion-etica.md](12-psicologia-y-persuasion-etica.md).
- **Antes de dar algo por terminado:** [06-revision.md](06-revision.md), [02-accesibilidad.md](02-accesibilidad.md)
  y [01-anti-slop.md](01-anti-slop.md).
- **Funciones con conexiones, procesos largos o límites:** [08-estado-real-y-verificacion.md](08-estado-real-y-verificacion.md).
- **Landings y sitios de marketing:** [landing/README.md](landing/README.md).
- **Para criticar algo existente:** [03-usabilidad.md](03-usabilidad.md) y la sección final de
  [07-proceso.md](07-proceso.md).

## Base

| Archivo | De qué trata |
| --- | --- |
| [00-principios.md](00-principios.md) | Los 13 principios que mandan sobre todo lo demás |
| [01-anti-slop.md](01-anti-slop.md) | Señales de diseño genérico o hecho en piloto automático y cómo evitarlas |
| [02-accesibilidad.md](02-accesibilidad.md) | WCAG 2.2 AA en la práctica, web y móvil, y cómo revisar |
| [03-usabilidad.md](03-usabilidad.md) | Heurísticas de Nielsen aplicadas, leyes de UX, divulgación progresiva |
| [04-escritura-de-interfaz.md](04-escritura-de-interfaz.md) | Botones, títulos, errores, vacíos, confirmaciones, tono |
| [05-sistema-visual.md](05-sistema-visual.md) | Jerarquía, tipografía, color, espacio, forma, íconos, movimiento |
| [06-revision.md](06-revision.md) | Lista de revisión y escala de severidad |
| [07-proceso.md](07-proceso.md) | Cómo diseñar paso a paso y cómo criticar |
| [08-estado-real-y-verificacion.md](08-estado-real-y-verificacion.md) | Tabla de estados, coherencia entre vistas, errores por etapa, niveles de verificación |
| [09-tipografia.md](09-tipografia.md) | Elegir y combinar familias, escalas, medidas, detalles de oficio, carga |
| [10-color.md](10-color.md) | Paletas en OKLCH, contraste, paletas con carácter, modo oscuro, color en datos |
| [11-marca-e-identidad.md](11-marca-e-identidad.md) | Plataforma de marca, voz, elementos núcleo, activos distintivos, guía de marca |
| [12-psicologia-y-persuasion-etica.md](12-psicologia-y-persuasion-etica.md) | Cómo procesamos y decidimos, sesgos con uso honesto, patrones oscuros, confianza |
| [13-diseno-humano.md](13-diseno-humano.md) | Raíces del slop y cómo diseñar y escribir para que se note una persona detrás |
| [14-seo-y-contenido.md](14-seo-y-contenido.md) | Intención de búsqueda, estructura, técnico, asistentes de IA, contenido que dura |
| [15-accesibilidad-avanzada.md](15-accesibilidad-avanzada.md) | Personas y herramientas, nombres y estados, foco, anuncios, cognitiva, cómo probar |
| [16-investigacion-y-pruebas.md](16-investigacion-y-pruebas.md) | Qué método para qué pregunta, entrevistas, pruebas, analítica, A/B |
| [17-composicion-y-layout.md](17-composicion-y-layout.md) | Composición, grillas, espaciado, adaptación, densidad |
| [18-sistemas-de-diseno.md](18-sistemas-de-diseno.md) | Tokens, componentes, estados, temas, usar una librería sin perder identidad |
| [19-imagen-iconos-e-ilustracion.md](19-imagen-iconos-e-ilustracion.md) | Fotografía, capturas, íconos, ilustración, 3D, imágenes con IA |
| [fuentes.md](fuentes.md) | De dónde sale cada cosa y cómo seguir sumando |

## Patrones

| Archivo | Cubre |
| --- | --- |
| [navegacion-y-configuracion.md](patrones/navegacion-y-configuracion.md) | Barra lateral, barra superior, configuración, integraciones |
| [formularios.md](patrones/formularios.md) | Etiquetas, validación, errores, contraseñas, formularios largos |
| [tablas-y-listas.md](patrones/tablas-y-listas.md) | Vistas, filtros, selección, acciones en lote, densidad |
| [estados-vacios-carga-y-error.md](patrones/estados-vacios-carga-y-error.md) | Vacíos, esqueletos, progreso, errores, páginas de error, toasts |
| [capas-dialogos-y-confirmaciones.md](patrones/capas-dialogos-y-confirmaciones.md) | Qué capa usar, diálogos, paneles, menús, confirmar vs deshacer |
| [busqueda-y-comandos.md](patrones/busqueda-y-comandos.md) | ⌘K, búsqueda web y móvil, sin resultados, atajos |
| [notificaciones.md](patrones/notificaciones.md) | Bandeja, qué notificar, indicadores, avisos del sistema |
| [puesta-en-marcha.md](patrones/puesta-en-marcha.md) | Registro, personalización, primeros pasos, tours |
| [archivos-y-compartir.md](patrones/archivos-y-compartir.md) | Subir archivos, importar, compartir y permisos |
| [movil.md](patrones/movil.md) | Pestañas, hojas inferiores, deslizar, permisos del sistema, toque |
| [ia-chat-y-agentes.md](patrones/ia-chat-y-agentes.md) | Campo de pedido, respuestas, agentes, configurar agentes, generación, confianza |
| [datos-tableros-y-precios.md](patrones/datos-tableros-y-precios.md) | Tableros, gráficos, planes y precios |
| [asistentes-de-pasos-y-colaboracion.md](patrones/asistentes-de-pasos-y-colaboracion.md) | Wizards, revisión final, comentarios, presencia |
| [acceso-y-cuenta.md](patrones/acceso-y-cuenta.md) | Login, passkeys, códigos, 2FA, cuenta |
| [fechas-y-filtros.md](patrones/fechas-y-filtros.md) | Rangos de fechas, fechas sueltas, filtros |
| [editores-y-herramientas-creativas.md](patrones/editores-y-herramientas-creativas.md) | Lienzo, inspector, línea de tiempo, versiones, exportar |
| [paginas-de-producto.md](patrones/paginas-de-producto.md) | Landing: hero, secciones de valor, prueba social |
| [uso-limites-y-suscripcion.md](patrones/uso-limites-y-suscripcion.md) | Uso y cuotas, medidores, avisos de límite, mejorar plan, cancelar |
| [tableros-y-detalle-de-registros.md](patrones/tableros-y-detalle-de-registros.md) | Kanban, detalle de registro, edición en el lugar, texto enriquecido |
| [pagos-y-agenda.md](patrones/pagos-y-agenda.md) | Checkout, métodos de pago, suscripciones, elegir día y hora |
| [equipo-ayuda-y-opiniones.md](patrones/equipo-ayuda-y-opiniones.md) | Invitar al equipo, centro de ayuda, pedir opiniones |
| [seguimiento-y-sin-conexion.md](patrones/seguimiento-y-sin-conexion.md) | Seguir un proceso en curso, trabajo sin conexión |
| [interacciones-finas.md](patrones/interacciones-finas.md) | Reordenar arrastrando, tooltips y pistas, vistas previas |
| [desarrolladores-y-claves.md](patrones/desarrolladores-y-claves.md) | Claves de API, permisos, webhooks, registros, configuración técnica |
| [mensajes-perfiles-y-reproductores.md](patrones/mensajes-perfiles-y-reproductores.md) | Chat entre personas, perfiles, reproductores de audio y video |
| [comercio-y-mapas.md](patrones/comercio-y-mapas.md) | Ficha de producto, carrito, búsqueda en mapa |
| [preferencias.md](patrones/preferencias.md) | Idioma y región, apariencia, preferencias de notificaciones |
| [plantillas-y-automatizaciones.md](patrones/plantillas-y-automatizaciones.md) | Galería de plantillas, constructor de flujos |
| [finanzas-y-progreso.md](patrones/finanzas-y-progreso.md) | Montos y transferencias, movimientos, metas y rachas |
| [publicar-explorar-archivos-y-auditoria.md](patrones/publicar-explorar-archivos-y-auditoria.md) | Escribir una publicación, explorador de archivos, registro de actividad |
| [importar-etiquetas-y-recortar.md](patrones/importar-etiquetas-y-recortar.md) | Importar CSV, administrar etiquetas, recortar imágenes |
| [reservas-atajos-y-novedades.md](patrones/reservas-atajos-y-novedades.md) | Reservar turnos, atajos de teclado, changelog |
| [bandejas-roles-y-logros.md](patrones/bandejas-roles-y-logros.md) | Bandeja de entrada y triage, roles y permisos, celebrar logros |
| [comparar-soporte-y-resenas.md](patrones/comparar-soporte-y-resenas.md) | Tabla comparativa de planes, pedir soporte, escribir reseñas |
| [camara-y-elegir-fotos.md](patrones/camara-y-elegir-fotos.md) | Cámara, selector de fotos y videos |
| [eventos-cuestionarios-y-constructor-de-formularios.md](patrones/eventos-cuestionarios-y-constructor-de-formularios.md) | Ficha de evento y RSVP, cuestionarios, armar formularios y encuestas |
| [llamadas-privacidad-y-descargas.md](patrones/llamadas-privacidad-y-descargas.md) | Videollamadas, privacidad y datos personales, descargas sin conexión |
| [pagos-fallidos-familia-y-referidos.md](patrones/pagos-fallidos-familia-y-referidos.md) | Pagos rechazados, controles parentales, programa de referidos |
| [empresas-insignias-y-ajustes-de-accesibilidad.md](patrones/empresas-insignias-y-ajustes-de-accesibilidad.md) | Plan empresa y hablar con ventas, insignias y logros, ajustes de accesibilidad en la app |
| [subir-video-busqueda-avanzada-y-actividades-en-vivo.md](patrones/subir-video-busqueda-avanzada-y-actividades-en-vivo.md) | Subir y publicar video, constructor de consultas, actividades en vivo |
| [perfil-marca-e-historial-de-versiones.md](patrones/perfil-marca-e-historial-de-versiones.md) | Perfil de cuenta web, kit de marca y voz, historial y restaurar versiones |
| [lotes-aprobaciones-y-subtitulos.md](patrones/lotes-aprobaciones-y-subtitulos.md) | Trabajos en lote y colas, aprobaciones y pedidos de cambios, editor de subtítulos |
| [primera-vez-con-ia-y-compartir-resultados.md](patrones/primera-vez-con-ia-y-compartir-resultados.md) | Pantalla vacía de un asistente de IA, compartir y exportar resultados |

## Landing pages

Carpeta propia: [landing/](landing/README.md) — estrategia y estructura, hero, secciones, escritura persuasiva,
dirección de arte y creatividad, animación, accesibilidad/rendimiento/SEO y revisión antes de publicar.

## Uso dentro de la skill

Esta carpeta es la base de conocimiento de la skill (`../SKILL.md`). Los agentes no la cargan entera: el enrutador
de `SKILL.md` y los flujos de `../flujos/` indican qué archivo abrir según la tarea. Todo es independiente de
proyectos: los ejemplos son de productos públicos y las reglas valen para cualquier stack.
