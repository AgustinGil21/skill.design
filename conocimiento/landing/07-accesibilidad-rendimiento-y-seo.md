# Accesibilidad, rendimiento y SEO en landings

Una landing linda que tarda, que no se lee con lector de pantalla o que no aparece en buscadores, no cumple su
objetivo.

## Accesibilidad (WCAG 2.2 AA aplicado)

- **Estructura**: un solo `h1` (el titular), secciones con `h2`, sin saltar niveles; regiones `header`, `nav`,
  `main`, `footer`; enlace "Saltar al contenido" visible al recibir foco.
- **Contraste**: 4,5:1 texto normal, 3:1 texto grande y componentes. Texto sobre foto o video con velo o caja; revisar
  en el punto más claro de la imagen, no en el promedio.
- **Imágenes**: texto alternativo que dice lo que la imagen prueba; decorativas con `alt=""`. Las capturas con texto
  importante, ese texto también en el HTML.
- **Botones y enlaces**: "Empezar gratis" mejor que "Haz clic aquí"; varios "Leer más" necesitan contexto
  (`aria-label` o texto oculto). Área táctil ≥ 24×24 px (mejor 44).
- **Teclado**: todo usable con Tab/Enter/Espacio/Esc, orden lógico, foco siempre visible (no `outline: none` sin
  reemplazo), menús desplegables y acordeones con sus atributos ARIA.
- **Formularios**: etiqueta visible, error que dice cómo corregir, autocompletar (`autocomplete="email"`).
- **Movimiento**: ver [06-animacion.md](06-animacion.md) (reducir movimiento, pausar, sin destellos).
- **Video y audio**: subtítulos, sin sonido automático, controles accesibles.
- **3D, canvas y demos interactivas**: alternativa en texto o imagen con lo esencial; no atrapar el foco.
- **Zoom al 200 % y ancho de 320 px** sin perder contenido ni scroll horizontal.
- **Idioma** declarado (`lang`) y cambios de idioma marcados.

## Rendimiento (Core Web Vitals)

Objetivos en el percentil 75 de visitas reales: **LCP ≤ 2,5 s**, **INP ≤ 200 ms**, **CLS ≤ 0,1**.

- **LCP (lo más grande del primer pantallazo)**: la imagen del hero en formato moderno (AVIF/WebP), tamaño justo
  por pantalla (`srcset`/`sizes`), precargada y con prioridad alta; nunca con carga diferida. Si el hero es texto,
  que la tipografía no lo retrase.
- **CLS (saltos)**: ancho y alto (o `aspect-ratio`) en imágenes, videos e incrustaciones; espacio reservado para
  avisos y banners; tipografías con métricas de reemplazo ajustadas para que no salte el texto.
- **INP (respuesta)**: poco JavaScript en la carga; scripts de terceros (chat, analítica, A/B) diferidos; nada de
  trabajo pesado en el hilo principal al hacer clic.
- **Tipografías**: 2 familias como mucho, subconjunto de caracteres, `font-display: swap` u `optional`, archivos
  propios en vez de servicios externos cuando se pueda.
- **Imágenes debajo del pliegue** con carga diferida; videos con póster y `preload="none"` o `metadata`.
- **Medir en un teléfono de gama media con red móvil**, no solo en la computadora de diseño.

## SEO y para compartir

- **Título** (≈ 50–60 caracteres) y **metadescripción** (≈ 150–160) escritos para personas, únicos por página.
- **Un `h1` con la idea principal**; los `h2` con las palabras que la gente busca, sin forzar.
- **Texto real en el HTML**, no dentro de imágenes o canvas.
- **Datos estructurados** cuando aplican (Organización, Producto, Preguntas frecuentes, Reseñas reales).
- **Open Graph y tarjeta para redes**: imagen 1200×630 diseñada para la ocasión, título y descripción.
- **URL limpia**, canónica, y versiones por idioma con `hreflang`.
- **Rendimiento y accesibilidad también suman** al posicionamiento.

## Privacidad y confianza

- Aviso de cookies que permite rechazar con la misma facilidad que aceptar, y que no tapa el hero.
- Formularios que dicen qué se hace con el email y enlazan a la política.
- Sellos y certificaciones solo si son reales y verificables.
