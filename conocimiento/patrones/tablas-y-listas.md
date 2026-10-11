# Tablas y listas de datos

Una tabla responde "¿cuál de todos?" y "¿qué hago con estos?". Todo lo que ayuda a encontrar va arriba; todo lo que
actúa sobre lo elegido aparece recién cuando hay algo elegido.

## Anatomía

1. **Encabezado de página:** título con el total ("4 suscriptores"), frescura de los datos ("Actualizado hace 21
   min", [Substack](https://mobbin.com/screens/862f4828-a616-4834-8e0c-097671c9b4e8)) y la acción principal a la
   derecha ("Agregar", "Importar / Exportar").
2. **Vistas guardadas** como pestañas o chips arriba ("Todos", "Nuevos", "Sin actividad 30 días";
   [Calendly](https://mobbin.com/screens/4a027267-d133-4f24-9533-bb3e8eee1dfb),
   [Hotjar](https://mobbin.com/screens/ff3024b1-5264-483e-afa7-460a0224ff89)).
3. **Barra de herramientas:** búsqueda, Filtro, Ordenar, Columnas/Visualización, y a la derecha descargar.
   Los filtros activos se ven como chips que se pueden quitar
   ([Deel](https://mobbin.com/screens/3bc65840-9e16-4227-82fa-6068da77bf1b)).
4. **Tabla:** primera columna = identidad (avatar/ícono + nombre + dato secundario), estados como insignias con
   color + texto, números alineados a la derecha con cifras tabulares, fechas relativas con la absoluta en el
   título.
5. **Pie:** "Mostrando 1–25 de 217", filas por página, paginación; o agregados por columna (conteo, máximo, % vacío;
   [Twenty](https://mobbin.com/screens/4896dd71-fc2f-4222-b22b-2bab9b3ec225)).

## Selección y acciones en lote

- Casilla por fila + casilla en el encabezado (con estado indeterminado).
- Al elegir, aparece una **barra flotante abajo** con "N seleccionados", "Seleccionar los 217", las acciones y una
  X para soltar ([Calendly](https://mobbin.com/screens/4a027267-d133-4f24-9533-bb3e8eee1dfb),
  [Hotjar](https://mobbin.com/screens/ff3024b1-5264-483e-afa7-460a0224ff89),
  [Wrangle](https://mobbin.com/screens/51f10d5c-7b68-46a6-b4b2-da44b0053186)), o reemplaza la barra de
  herramientas ([Xero](https://mobbin.com/screens/c38e93b2-8b11-453d-b6bb-0e0498dbf714)).
- **Decí si la acción no aplica a todos**: "2 elegidos · 1 se puede borrar" (Xero). Mejor que fallar en silencio.
- Destructiva al final, en rojo y separada.
- Después de la acción: aviso con el resultado ("2 emails enviados") y deshacer si se puede.

## Acciones por fila

- Lo frecuente visible al pasar el mouse (o siempre en táctil); lo demás en un menú ⋯ al final de la fila.
- En el menú: acciones comunes arriba, destructivas abajo, separadas y en rojo
  ([Substack](https://mobbin.com/screens/862f4828-a616-4834-8e0c-097671c9b4e8)).
- Clic en la fila abre el detalle (página o panel lateral); la casilla no debe abrir el detalle.

## Densidad y legibilidad

- Alto de fila 40–48 px en escritorio; opción de densidad compacta para tablas de trabajo intensivo.
- Truncar con "…" y mostrar el valor completo en el título; nunca cortar números.
- Encabezado fijo al hacer scroll; primera columna fija si hay scroll horizontal.
- Sin bordes verticales pesados: separadores horizontales finos o zebra muy suave.
- Celdas vacías con "—", no en blanco.

## Estados

- **Cargando:** filas esqueleto con la forma de los datos, no un spinner en el centro.
- **Vacío de verdad:** explicación + acción ("Agregá tu primer contacto").
- **Vacío por filtro:** "Ningún resultado para 'xyz'" + "Limpiar filtros". No confundir con el anterior.
- **Error:** dentro del área de la tabla, con reintentar; la barra de herramientas sigue usable.

## Accesibilidad

- `<table>` real con `<th scope>`; ordenar con botón en el encabezado y `aria-sort`.
- Fila clicable = un enlace o botón real en la celda principal, no `onClick` en el `<tr>`.
- La barra de acciones en lote se anuncia (`aria-live="polite"` con "3 seleccionados").
