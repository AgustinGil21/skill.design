# Datos, tableros y precios

## Tableros (dashboards)

Un tablero responde "¿cómo vamos y qué necesita atención?". No es un depósito de todos los gráficos posibles.

- **Arriba, el período y la comparación**: selector de rango ("Últimos 30 días", 7D / 30D / 3M / 12M) y "Comparar
  con período anterior" ([Navattic](https://mobbin.com/screens/a5be5a57-9c24-49a2-9ce5-ccd5edc17a1b),
  [Whop](https://mobbin.com/screens/0bb8b25f-0c3d-47c3-b20a-1447e7dbab9e),
  [Mixpanel](https://mobbin.com/screens/bef56b40-0756-4135-a99c-72692615331b)). Filtros como chips al lado.
- **Tarjetas de indicador (KPI):** nombre con ⓘ que explica la métrica, valor grande, variación con signo, color e
  ícono (▲ +12 % frente a…), y si entra, una mini línea. 3–5 tarjetas, no 12
  ([AirOps](https://mobbin.com/screens/ef4f113f-b98a-49b6-a028-4b43d9de78df)).
- **"Actualizado hace 1 min"** y botón actualizar; si los datos tienen demora, decirlo.
- **Cada gráfico con título que dice qué mide** y una línea de descripción ("Qué tan seguido aparece tu marca en
  respuestas de IA").
- **Personalizar:** elegir y ordenar tarjetas arrastrando, en un panel lateral
  ([Base44](https://mobbin.com/screens/0043a974-d804-4b6c-ad10-44e48f9cd909)).
- **Explorar una métrica** en su propia vista con comparaciones (año anterior, promedio 7 días) a la derecha
  ([Steep](https://mobbin.com/screens/1f477d37-7951-4fb6-bf21-ccaf275da8b7)).
- **Datos de ejemplo marcados** como tales ("Usando datos de demo · Continuar configuración").
- **Sin datos:** el gráfico vacío con su eje y "Todavía no hay visitas en este período", no un 0 % gigante.

## Gráficos

- Elegir por la pregunta: evolución → línea; comparar categorías → barras horizontales ordenadas; parte de un
  todo → barra apilada al 100 % (las tortas solo con 2–3 partes); distribución → histograma; relación → dispersión.
- Ejes que empiezan en 0 para barras; para líneas puede no empezar en 0 si se aclara.
- Etiquetas directas sobre las series en vez de leyendas lejanas cuando entran.
- Pocos colores: uno para lo importante, gris para el resto, el mismo color para la misma serie en toda la app.
- Paletas aptas para daltonismo; nunca rojo vs verde como única diferencia; patrones o etiquetas además del color.
- Tooltip con el valor exacto, la fecha y la comparación; navegable con teclado y con tabla alternativa para
  lectores de pantalla.
- Números grandes abreviados (3,2 k, 1,4 M) con el valor exacto en el tooltip; formato local (coma decimal en
  español).

## Precios y planes

- **Interruptor mensual / anual** arriba con el ahorro escrito ("Ahorrá 20 %")
  ([Coda](https://mobbin.com/screens/567ef516-bbfe-4cae-b5a5-0c2b6dded7e3),
  [Melio](https://mobbin.com/screens/67518093-a65c-482d-92cb-93b57cc6f88c)).
- **3–4 planes**, el recomendado destacado ("Más elegido", borde o fondo) y el **plan actual marcado**
  ("Tu plan", botón deshabilitado; [Webflow](https://mobbin.com/screens/f598251e-1a27-4d42-bc55-b0308650382c),
  [Linear](https://mobbin.com/screens/881e0a06-83c5-437d-90ea-fa58c5f69c6a)).
- **Para quién es cada plan** en una línea ("Para equipos que…") antes de la lista de funciones.
- **"Todo lo del plan anterior, más:"** para no repetir listas.
- Precio con unidad clara ("por persona / mes", "facturado anualmente") y total anual si se paga anual
  ([Workable](https://mobbin.com/screens/69659b14-f151-49df-a6b8-24eedb7912dc)).
- **Tabla de comparación** debajo, agrupada por tema, con ⓘ en cada fila y la columna del plan actual resaltada
  ([Slite](https://mobbin.com/screens/6ab05b0e-db3d-4cc9-956d-9ffa785476de)).
- Botones con verbo distinto por estado: "Tu plan", "Mejorar", "Hablar con ventas".
- Prueba gratis: días restantes visibles y qué pasa al terminar.
- Nada de patrones oscuros: sin precios escondidos, sin cancelación difícil, sin cuentas regresivas falsas.
