# Flujo: crear una pantalla, flujo o componente

## 1. Entender (no saltear)

- ¿Quién lo usa, en qué situación, qué intenta lograr? ¿Qué pasa antes y después de esta pantalla?
- ¿Qué datos reales va a mostrar? Pedirlos o leerlos del código/API.
- ¿Qué restricciones hay? Stack, librería de componentes, tokens existentes, idioma, plataforma.
- Leer el código y el diseño existente del proyecto: **el sistema del proyecto manda** sobre gustos propios.
- Si falta algo crítico, preguntar una vez y de forma concreta; si no, decidir y declarar el supuesto.

Completar `plantillas/brief.md` (en la cabeza o por escrito según el tamaño).

## 2. Buscar el patrón

- Abrir el archivo de `conocimiento/patrones/` que corresponde (ver mapa en `SKILL.md`).
- Tomar lo que se repite en los ejemplos y las variantes que resuelven algo mejor; anotar los anti-ejemplos.

## 3. Estructurar

- Leer `conocimiento/00-principios.md` si no está fresco.
- Definir la jerarquía: ¿qué es lo primero que se ve?, ¿cuál es la acción principal?, ¿qué va escondido?
- Usar divulgación progresiva (`conocimiento/03-usabilidad.md`).
- Para datos o procesos: completar `plantillas/tabla-de-estados.md` **antes** de implementar
  (`conocimiento/08-estado-real-y-verificacion.md`).

## 4. Escribir los textos

- Títulos, botones, vacíos, errores y confirmaciones con `conocimiento/04-escritura-de-interfaz.md`.
- Botones con verbo + objeto; errores con qué pasó y cómo seguir.

## 5. Aplicar el sistema visual

- Usar los tokens del proyecto. Si no hay sistema: `conocimiento/18-sistemas-de-diseno.md` para crear uno mínimo
  (color, tipografía, espaciado, radios) y `09-tipografia.md`, `10-color.md`, `17-composicion-y-layout.md` para
  decidir valores.
- Jerarquía con tamaño y peso antes que color; espacio para agrupar antes que bordes.
- Íconos de un solo set y con texto cuando no son universales (`19-imagen-iconos-e-ilustracion.md`).

## 6. Hacerlo accesible mientras se construye

- HTML semántico, nombres accesibles, foco visible y ordenado, contraste, estados anunciados.
- Componentes complejos según los patrones de la guía APG (ver `15-accesibilidad-avanzada.md`).
- Movimiento solo con propósito y con `prefers-reduced-motion`.

## 7. Implementar

- Seguir convenciones del repositorio (estructura, nombres, tests, gestor de paquetes).
- Componentes de la librería existente antes que nuevos; personalizar con tokens.
- Escribir/actualizar tests si el proyecto los tiene.

## 8. Verificar y cerrar

1. `node scripts/a11y-estatico.mjs <archivos tocados>` y `node scripts/slop.mjs <archivos tocados>`.
2. Contraste de colores nuevos con `node scripts/contraste.mjs`.
3. Ver el resultado real: teclado, zoom 200 %, ancho de 320 px, modo oscuro si existe, reducir movimiento.
4. Pasar `conocimiento/06-revision.md`.
5. Informar qué se hizo, qué supuestos se tomaron y qué nivel de verificación se alcanzó.
