# Tipografía en profundidad

La tipografía es el 90 % de una interfaz y la mitad de la personalidad de una marca. Elegirla y usarla bien es lo
que más separa un diseño cuidado de uno genérico.

## 1. Elegir la familia

Preguntas, en orden:

1. **¿Qué tiene que hacer?** Interfaz densa (legibilidad a 13–15 px, números tabulares, muchos pesos), lectura larga
   (cuerpo cómodo a 17–20 px), titulares de marca (carácter a tamaño grande).
2. **¿Qué tiene que decir?** Precisión (grotescas neutras, mono), calidez (humanistas, serif suaves), lujo o
   editorial (serif de alto contraste), juego (redondeadas, display con forma), oficio (serif de transición,
   slab).
3. **¿Funciona en el idioma?** Acentos, ñ, ¿, ¡, comillas, y otros alfabetos si hace falta.
4. **¿Tiene lo técnico?** Pesos necesarios, itálica real, números tabulares y proporcionales, variable, buena
   métrica en pantalla, licencia web.

### Familias por intención (punto de partida, no receta)

| Intención | Tipo de letra | Ejemplos de familias de uso libre o comunes |
| --- | --- | --- |
| Interfaz neutra y precisa | Grotesca / neo-grotesca | Inter, Geist, IBM Plex Sans, Public Sans |
| Cálida y humana | Humanista | Source Sans 3, Nunito Sans, Figtree, Atkinson Hyperlegible (legibilidad) |
| Editorial / premium | Serif de alto contraste para títulos | Fraunces, Playfair Display, Instrument Serif, Newsreader |
| Lectura larga | Serif de texto | Source Serif 4, Literata, Lora, Charter |
| Técnica / datos | Monoespaciada | JetBrains Mono, IBM Plex Mono, Geist Mono |
| Carácter fuerte de marca | Display con forma propia | Space Grotesk, Syne, Bricolage Grotesque, Unbounded |

Verificar siempre la licencia y el soporte de caracteres en la fuente oficial antes de usar.

### Cómo evitar lo genérico

- Inter / Roboto / Arial en todo, sin decisión, es la tipografía "por defecto de la IA". Puede ser la elección
  correcta para una interfaz, pero entonces el carácter tiene que venir de otro lado (un titular con otra familia,
  el tamaño, el peso, el color).
- **Un contraste con intención**: serif expresiva en titulares + sans neutra en el texto
  ([Mailchimp](https://mobbin.com/sites/sections/28982227-0e30-418a-b6ce-37e80af7982c),
  [Frontify](https://mobbin.com/sites/sections/9dc7cb3d-08cc-4c17-bb89-4373060676f2)); o una sola familia variable
  usada en extremos de peso y tamaño.
- **Asignar roles y decirlo** (titulares / cuerpo / código; [Aave](https://mobbin.com/sites/sections/194a20c4-7e03-4839-86b3-30981d8db06e)).
- La tipografía puede ser la imagen: titulares gigantes que componen la página
  ([Studio Freight](https://mobbin.com/sites/sections/37214c10-d891-48bc-a46e-6050033671b4)), o una letra display
  como protagonista cuando el producto es de marca o moda.

## 2. Combinar

- **Máximo dos familias** (más una mono si hay código o datos). Una tercera solo con razón fuerte.
- **Contrastar en una dimensión, no en todas**: serif vs sans con proporciones parecidas (altura de x similar);
  o misma familia en pesos opuestos.
- **Evitar dos sans parecidas** (Inter + Helvetica): se ve como un error, no como una decisión.
- **Probar con texto real** del producto, no con "Lorem ipsum", y en los tamaños reales.

## 3. Escala

Una escala modular da ritmo y evita tamaños arbitrarios.

| Relación | Nombre | Uso |
| --- | --- | --- |
| 1,125 | Segunda mayor | Interfaces densas (tablas, paneles) |
| 1,2 | Tercera menor | Interfaces generales |
| 1,25 | Tercera mayor | Sitios con lectura y marketing moderado |
| 1,333 | Cuarta | Landings con titulares fuertes |
| 1,5–1,618 | Quinta / áurea | Editorial, titulares dramáticos |

Ejemplo con base 16 y 1,25: 12,8 · **16** · 20 · 25 · 31,25 · 39 · 48,8 · 61. Redondear a valores enteros.

- **Escala fluida** para landings: `font-size: clamp(2.5rem, 1.5rem + 4vw, 5rem)` en titulares, que crece con la
  pantalla sin saltos. El cuerpo, en cambio, casi fijo (16–18 px móvil, 17–20 px escritorio).
- **Usar `rem`**, no `px`, para respetar el tamaño que eligió la persona en el navegador.
- **Pocos pasos**: 5–7 tamaños en todo el producto.

## 4. Medidas que importan

- **Largo de línea**: 45–75 caracteres (ideal ~66) en lectura; `max-width: 65ch`.
- **Interlineado**: cuerpo 1,5–1,7; titulares 1,05–1,2 (más grande = más apretado); interfaz densa 1,4.
- **Espaciado entre letras**: titulares grandes −1 % a −3 %; mayúsculas sostenidas y textos muy chicos +2 % a +8 %;
  el cuerpo, en 0.
- **Pesos**: 400 cuerpo, 500–600 énfasis de interfaz, 700+ titulares. No usar 300 o menos en texto chico (pierde
  contraste).
- **Tamaño mínimo**: 16 px para campos de formulario en móvil (iOS hace zoom si es menor); 12–13 px solo para
  rótulos.
- **Contraste** de texto: 4,5:1 normal, 3:1 grande (24 px o 18,66 px negrita).

## 5. Detalles de oficio

- **Números tabulares** (`font-variant-numeric: tabular-nums`) en tablas, precios, contadores y relojes.
- **Comillas y signos reales**: « » o “ ” según el estilo, raya (—) para incisos, semirraya (–) para rangos
  (10–20), apóstrofo tipográfico (’), puntos suspensivos (…), espacio fino antes de unidades si el estilo lo usa.
- **Viudas y huérfanas**: `text-wrap: balance` en titulares y `text-wrap: pretty` en párrafos donde se soporte.
- **Mayúsculas** solo en rótulos cortos, con espaciado; nunca párrafos.
- **Itálica real** de la familia, no inclinada sintética.
- **Ligaduras y alternativas** (`font-feature-settings`) con criterio en titulares.
- **Alineación** a la izquierda para leer; centrado solo para 1–3 líneas; justificado casi nunca en web.
- **Jerarquía con pocos recursos**: primero tamaño y peso, después color; no subrayar lo que no es enlace.

## 6. Carga y rendimiento

- Subconjunto de caracteres por idioma, formato WOFF2, `font-display: swap` (u `optional` para lo no crítico).
- Precargar solo la fuente del texto que aparece primero.
- Ajustar las métricas de la fuente de reemplazo (`size-adjust`, `ascent-override`) para que no salte el texto al
  cargar.
- Fuentes variables cuando se usan 3+ pesos: un solo archivo.
- Alojar las fuentes propias en vez de pedirlas a un servicio externo cuando sea posible (rendimiento y
  privacidad).

## 7. Tipografía y accesibilidad

- Respetar el zoom y el tamaño del sistema; nada de tamaños fijos que no escalen.
- Letras con formas diferenciadas (I l 1, O 0) para datos y códigos; Atkinson Hyperlegible existe para eso.
- Evitar textos largos en mayúsculas, en itálica o en fuentes muy finas o muy condensadas.
- El espaciado de texto ajustable por el usuario no debe romper el diseño (WCAG 1.4.12: interlineado 1,5, párrafo
  2×, letras 0,12 em, palabras 0,16 em).
