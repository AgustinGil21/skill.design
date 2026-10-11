# Sistema visual: tipografía, color, espacio, forma y movimiento

Pocas decisiones, sostenidas en todo el producto. El estilo se nota en la consistencia, no en la cantidad de adornos.

## Jerarquía

- Cada pantalla tiene **un punto de entrada** (título o lo principal), un **segundo nivel** (secciones, datos clave)
  y un **tercer nivel** (detalle, metadatos).
- Se construye con **tamaño, peso, color y espacio**, en ese orden de preferencia. El color es la herramienta más
  cara: reservarla para estado y acción.
- Prueba: en escala de grises y desenfocando la vista, ¿se distinguen los tres niveles?

> En profundidad: [09-tipografia.md](09-tipografia.md), [10-color.md](10-color.md),
> [17-composicion-y-layout.md](17-composicion-y-layout.md), [19-imagen-iconos-e-ilustracion.md](19-imagen-iconos-e-ilustracion.md).

## Tipografía

- **Una familia** para interfaz (sans legible: Inter, Geist, SF, Roboto…) y como mucho una segunda con rol claro
  (titulares de marca o monoespaciada para código y tiempos).
- **Escala corta y modular**, por ejemplo 12 · 14 · 16 · 20 · 24 · 32 · 40. Interfaces densas: base 14; contenido
  de lectura: base 16–18.
- **Pesos:** regular para texto, medium para etiquetas y énfasis, semibold para títulos. Evitar más de tres.
- **Interlineado:** 1,4–1,6 para texto; 1,1–1,25 para titulares grandes.
- **Largo de línea:** 50–75 caracteres para lectura.
- **Cifras tabulares** en tablas, tiempos, precios y contadores (`font-variant-numeric: tabular-nums`).
- Titulares grandes con tracking ligeramente negativo; mayúsculas sostenidas solo en etiquetas muy cortas y con
  tracking positivo.
- Nada debajo de 12 px en web (11 pt en iOS) salvo marcas legales.

## Color

- **Neutros** para casi todo (fondos, superficies, bordes, texto en 3 niveles: principal, secundario, terciario).
- **Un color de acento** para la acción principal, el foco y la selección.
- **Colores semánticos** con significado fijo: éxito (verde), advertencia (ámbar), error (rojo), información (azul).
  Nunca usar el rojo para algo que no sea error o destructivo.
- **Tokens, no valores sueltos**: `--background`, `--foreground`, `--muted`, `--border`, `--primary`,
  `--destructive`… definidos para claro y oscuro.
- **Modo oscuro** no es invertir: superficies que se aclaran al subir de nivel, saturación más baja en acentos,
  sombras reemplazadas por bordes o superficies más claras, sin negro puro de fondo.
- Contraste según [02-accesibilidad.md](02-accesibilidad.md).
- Estados con fondo suave + texto del mismo tono (insignias), no saturados a pleno.

## Espacio

- **Escala de 4 px** (4 · 8 · 12 · 16 · 24 · 32 · 48 · 64).
- **Proximidad agrupa:** más espacio entre grupos que dentro de ellos. El espacio separa mejor que las líneas.
- Márgenes laterales consistentes; ancho máximo de contenido de lectura ~680–760 px; tablas y lienzos a lo ancho.
- **Densidad según el uso:** herramientas de trabajo intensivo pueden ser densas (filas de 32–40 px); productos de
  uso ocasional, más aireados.

## Forma y profundidad

- **Un radio** (o dos: chico para controles, mediano para tarjetas/diálogos). Sostenerlo en todo.
- **Profundidad con intención:** sin sombra para lo que está en el plano; sombra suave para lo que flota (menús,
  popovers); sombra marcada solo para diálogos. Bordes finos para separar superficies del mismo plano.
- No meter tarjetas dentro de tarjetas; usar espacio y títulos.

## Íconos

- Una sola familia, mismo grosor y tamaño (16 px en interfaz densa, 20 px en general).
- Con texto al lado salvo en controles universales (cerrar, buscar, más); los íconos solos llevan tooltip y
  `aria-label`.
- Un ícono = un significado en todo el producto.

## Movimiento

- **Para explicar, no para decorar:** de dónde viene algo, a dónde fue, qué cambió.
- **Duraciones:** 100–150 ms para cambios de estado chicos (hover, toggle); 200–300 ms para paneles y diálogos;
  > 400 ms casi nunca en interfaz.
- **Curvas:** ease-out para entrar, ease-in para salir; resortes suaves para arrastres.
- Sin animar el layout mientras se lee o se escribe; sin rebotes en scroll de chats ni listas que cambian.
- Respetar `prefers-reduced-motion` (reemplazar movimiento por fundidos o nada).

## Componentes

- Usar una librería sólida y accesible (shadcn/Radix, React Aria, Material, componentes nativos del sistema) y
  **mantener su diseño**: personalizar tokens, no reinventar controles.
- Cada componente con todos sus estados: normal, hover, foco, presionado, deshabilitado, cargando, error, vacío.
- Botones: principal (sólido), secundario (contorno o tenue), terciario (texto), destructivo (rojo), con un tamaño
  por contexto y ancho estable mientras carga.
