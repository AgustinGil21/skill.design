# Sistemas de diseño

Un sistema es la memoria de las decisiones: hace que lo nuevo salga coherente sin volver a pensar todo.

## 1. Capas

1. **Tokens primitivos**: la paleta completa, la escala tipográfica, los espaciados, radios, sombras, duraciones
   (`--naranja-500`, `--espacio-4`).
2. **Tokens semánticos**: el rol (`--color-accion`, `--color-texto-suave`, `--color-peligro-fondo`,
   `--radio-control`). Los componentes usan solo estos; cambiar de tema es cambiar este mapeo.
3. **Componentes**: botón, campo, menú, diálogo, tabla… con todas sus variantes y estados.
4. **Patrones**: combinaciones que resuelven tareas (formulario de registro, lista con filtros, estado vacío) —
   ver [patrones/](patrones/).
5. **Guías**: cuándo usar qué, voz, accesibilidad, ejemplos y contraejemplos.

## 2. Estados de cada componente

Por defecto · hover · foco visible · activo/presionado · seleccionado · deshabilitado · cargando · error · vacío ·
solo lectura. Si falta alguno, aparece improvisado en el producto.

## 3. Reglas que evitan el desorden

- **Una forma de hacer cada cosa**: un solo botón primario, una sola manera de mostrar errores.
- **Nombres por función**, no por apariencia (`boton-peligro`, no `boton-rojo`).
- **Pocas variantes**: si un componente tiene 12 variantes, probablemente son 3 componentes o 9 excepciones.
- **Accesibilidad dentro del componente** (teclado, ARIA, contraste) para que se herede gratis.
- **Documentar el porqué** de cada decisión, no solo el qué.
- **Versionar** y anunciar cambios; deprecar con tiempo.

## 4. Usar una librería (por ejemplo, componentes basados en Radix / shadcn)

- Aprovechar lo que resuelven bien (accesibilidad, teclado, foco) y **personalizar los tokens**, no reescribir
  componentes.
- Mantener el estilo base de la librería y darle identidad con tipografía, color, radios y espaciado definidos en
  tokens.
- Evitar que todos los productos hechos con la misma librería se vean iguales: la identidad va en los tokens y en los
  momentos de marca, no en reinventar el botón.

## 5. Temas

- Claro / oscuro / alto contraste como mapas distintos de los mismos tokens semánticos.
- Marcas o clientes distintos (marca blanca): cambiar primitivos y mapeo, no componentes.
- Probar cada tema contra contraste y estados.

## 6. Señales de que el sistema falla

- Valores sueltos en el código (`#3b82f6`, `13px`, `margin: 7px`).
- Componentes "casi iguales" duplicados.
- Pantallas que se ven de productos distintos.
- Nadie sabe cuál es la versión vigente.
