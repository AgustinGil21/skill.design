# Páginas de producto (landing, marketing)

Una landing persuade: tiene que decir qué es, para quién y por qué ahora, y dejar actuar sin fricción.

Resumen. La guía completa está en [../landing/README.md](../landing/README.md).

## Primer pantallazo (hero)

- **Titular que dice el resultado**, no la categoría ("Todo el club en un lugar", no "Plataforma integral de
  gestión"). 4–8 palabras.
- **Bajada de una o dos líneas** que dice qué hace y para quién
  ([incident.io](https://mobbin.com/sites/sections/1f8c9d4b-9f7f-4bfa-aed3-9a849b84831e),
  [Ditto](https://mobbin.com/sites/sections/9306f2a2-2b65-4f2e-bfd5-5a52790f175f)).
- **Una acción principal** ("Probar gratis") y como mucho una secundaria ("Ver demo"), con texto de riesgo bajo
  debajo si aplica ("Sin tarjeta").
- **El producto real** a la vista: captura o video del producto en uso, no ilustraciones abstractas ni manchas de
  gradiente ([Craft](https://mobbin.com/sites/sections/58c31ff2-407c-4d33-933f-3b0a08528728),
  [incident.io](https://mobbin.com/sites/sections/1f8c9d4b-9f7f-4bfa-aed3-9a849b84831e)).
- Prueba social cerca: logos reales o una cifra verificable ("8.000 equipos"). Nada inventado.

## Secciones de valor

- **Una idea por sección**: título que dice el beneficio, 2–3 líneas, captura de la función concreta
  ([Toggl](https://mobbin.com/sites/sections/60d20670-e53e-4426-a9ec-2a2c8ea852c3)).
- **Casos de uso como pestañas o acordeón** con la captura que cambia
  ([Employment Hero](https://mobbin.com/sites/sections/ea5feb3c-6436-41c9-934c-c5f4dcf2646c),
  [Miro](https://mobbin.com/sites/sections/fc66d00d-aa8a-4e17-a2d6-4755259b7b4f)).
- **Testimonios con nombre, cargo, empresa y foto real**, con una frase concreta (qué cambió), no "¡Excelente!".
- Precios ([datos-tableros-y-precios.md](datos-tableros-y-precios.md)), preguntas frecuentes, y un cierre que repite
  la acción principal.

## Lo que delata una landing hecha en piloto automático

- Titulares vacíos ("Potenciá tu flujo de trabajo", "El futuro de X está acá").
- Tríadas de adjetivos ("Simple. Rápido. Seguro.") y tres tarjetas con ícono + título + frase genérica.
- Gradientes violeta–azul, manchas difusas, glassmorphism y "brillos" sin razón.
- Capturas falsas o genéricas, estadísticas inventadas, logos sin permiso.
- Emojis como íconos de sección.
- Todo centrado y del mismo tamaño: sin jerarquía, sin ritmo.

Ver [../01-anti-slop.md](../01-anti-slop.md).

## Rendimiento y accesibilidad

- Carga del primer pantallazo < 2,5 s (LCP); imágenes con dimensiones y formatos modernos; video sin sonido,
  con pausa y póster.
- Contraste del texto sobre imágenes y gradientes (usar velo o caja).
- Animaciones de entrada sutiles, que respeten `prefers-reduced-motion`.
- Navegación con teclado del menú y de los acordeones.
