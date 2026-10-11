# SEO y contenido encontrable

El SEO bien hecho es, sobre todo, buen contenido bien estructurado y rápido. Complementa
[landing/07-accesibilidad-rendimiento-y-seo.md](landing/07-accesibilidad-rendimiento-y-seo.md).

## 1. Intención de búsqueda primero

- Cada página responde **una intención**: informativa ("cómo hacer X"), comparativa ("X vs Y", "mejor X para Y"),
  transaccional ("precio de X", "probar X"), de navegación (el nombre de la marca).
- Mirar qué aparece hoy para esa búsqueda: el formato que gana (guía, lista, herramienta, video) dice qué espera la
  gente.
- Una página por intención; dos páginas compitiendo por lo mismo se canibalizan.

## 2. Estructura de la página

- **Título** (≈ 50–60 caracteres, palabra clave al principio, marca al final), único por página.
- **Metadescripción** (≈ 150–160), escrita como invitación con el beneficio; no siempre se usa, pero orienta.
- **Un `h1`** que coincida con la intención; `h2`/`h3` con las preguntas que la gente hace.
- **Respuesta directa arriba** (en 1–2 frases) y después el desarrollo: sirve a quien lee y a los buscadores con
  respuestas destacadas y a los asistentes de IA que citan fuentes.
- **Contenido único y útil**: datos propios, ejemplos, capturas, experiencia real. Lo que repite lo que ya está en
  todos lados no posiciona ni se cita.
- **Enlaces internos** con texto descriptivo hacia páginas relacionadas; migas de pan.
- **Imágenes** con nombre de archivo y texto alternativo descriptivos, dimensiones y formato moderno.
- **URL** corta, legible, en minúsculas, con guiones.

## 3. Técnico

- **HTML renderizado del lado del servidor o estático** para el contenido principal; no depender de JavaScript para
  mostrar el texto.
- **Core Web Vitals** dentro de los umbrales (LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1).
- **Diseño adaptable** (los buscadores indexan la versión móvil).
- **Canónica** en cada página; `hreflang` para idiomas; sitemap XML; robots.txt sin bloquear recursos necesarios.
- **Datos estructurados** (JSON-LD) solo con información visible y real: Organización, Producto, Artículo, Preguntas
  frecuentes, Migas, Reseñas reales.
- **Códigos de estado correctos**: 404 real para lo que no existe, 301 para lo que se mudó.
- **HTTPS** y sin contenido mixto.

## 4. Para asistentes de IA y respuestas generativas

- Contenido claro, con afirmaciones verificables, datos propios, autoría visible y fecha de actualización: es lo que
  más se cita.
- Estructura escaneable (títulos-pregunta, listas, tablas) y definiciones explícitas.
- Información de la marca consistente en todo el sitio y en perfiles externos.
- Consultar las guías oficiales vigentes de cada buscador antes de aplicar prácticas específicas: cambian seguido.

## 5. Contenido que dura

- Guías y herramientas útiles (calculadoras, plantillas, comparativas honestas) atraen enlaces naturales.
- Actualizar lo que envejece y decirlo ("Actualizado el …").
- Autoría real con perfil del autor (experiencia demostrable).
- Nada de texto escrito para buscadores en vez de personas: se nota y se castiga.

## 6. Redes y compartir

- Open Graph y tarjeta de redes: título, descripción e imagen 1200×630 diseñada (legible en miniatura).
- Imagen distinta por página importante; no el logo solo.
- Probar cómo se ve el enlace en las plataformas donde más se comparte.
