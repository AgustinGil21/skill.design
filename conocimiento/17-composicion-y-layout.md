# Composición, grillas y adaptación

## 1. Principios de composición

- **Jerarquía**: un punto de entrada claro por pantalla o sección (lo más grande, contrastado o aislado).
- **Proximidad**: lo relacionado junto, lo distinto separado; el espacio agrupa mejor que las líneas y cajas.
- **Alineación**: pocos ejes, todo apoyado en ellos; lo desalineado por poco se ve como error.
- **Contraste de escala**: diferencias grandes (titular 4× el cuerpo) se ven intencionales; diferencias chicas,
  dudosas.
- **Ritmo**: alternar densidad y aire, ancho completo y columnas, imagen y texto.
- **Espacio negativo**: el aire es un elemento; no llenarlo "porque queda vacío".
- **Equilibrio**: simétrico (calma, formal) o asimétrico (tensión, dinamismo); la asimetría pide más control.
- **Recorrido de la mirada**: de lo más fuerte a la acción; nada compite con el botón principal.

## 2. Grillas

- **Columnas**: 12 en escritorio, 8 en tableta, 4 en móvil, con canaletas de 16–32 px y márgenes laterales
  generosos (≥ 16 px en móvil, 5–8 % del ancho en escritorio).
- **Ancho máximo de contenido**: 1200–1440 px para layouts; 65ch para texto.
- **Grilla editorial**: romperla a propósito (una imagen que sangra, un titular que cruza columnas) cuando se domina.
- **Grilla de base de espaciado**: múltiplos de 4 u 8 (4, 8, 12, 16, 24, 32, 48, 64, 96, 128).
- **Bento**: celdas de tamaños distintos sobre una grilla común; lo importante, más grande.

## 3. Espaciado con significado

- Menos espacio dentro de un grupo que entre grupos (regla de proximidad aplicada a números).
- Secciones de landing: 96–160 px de separación en escritorio, 64–96 en móvil.
- Componentes: padding interno proporcional al tamaño del texto.
- Usar tokens (`--espacio-2`, `--espacio-4`…) en vez de valores sueltos.

## 4. Adaptación (responsive)

- **Diseñar el contenido primero en móvil**, después expandir; no esconder en móvil lo que importa.
- **Puntos de quiebre por contenido**, no por dispositivo: cuando el texto queda muy largo o la grilla se aprieta.
- **Consultas de contenedor** (`@container`) para que un componente se adapte al espacio que tiene, no a la
  pantalla.
- **Tipografía y espacios fluidos** con `clamp()` para transiciones suaves.
- **Tablas** → tarjetas o desplazamiento horizontal con primera columna fija; **navegación** → menú compacto;
  **paneles laterales** → hojas o pantallas.
- **Orientación y pantallas grandes**: no estirar líneas de texto; usar el espacio para mostrar más contexto.
- **Áreas seguras** en móvil (muesca, barra inferior) con `env(safe-area-inset-*)`.

## 5. Densidad

- **Cómoda** para uso ocasional y marketing; **compacta** para herramientas de uso intensivo (tablas, editores).
- Ofrecer la elección cuando el público es mixto.
- La densidad alta pide más rigor: alineación perfecta, tipografía chica pero legible, separadores sutiles.

## 6. Errores comunes

- Todo centrado en una columna estrecha (aburre y desperdicia la pantalla grande).
- Tarjetas dentro de tarjetas dentro de tarjetas.
- Márgenes distintos en cada sección.
- Bordes y sombras para separar lo que el espacio ya separa.
- Contenido pegado al borde de la pantalla en móvil.
