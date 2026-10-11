# Animación y movimiento en landings

El movimiento tiene que **explicar** (cómo funciona algo, de dónde viene, qué cambió), **dirigir la mirada** o
**dar carácter** en un momento elegido. Si no hace ninguna de las tres, se saca.

## Para qué sí

- **Mostrar el producto funcionando**: un flujo que se completa, un resultado que se genera, un antes/después.
  Vale más que diez adjetivos.
- **Encadenar un relato** al bajar (sección fija que cambia de visual; ver [03-secciones.md](03-secciones.md)).
- **Respuesta al usuario**: hover, foco, clic, arrastre — inmediata (< 100 ms para empezar).
- **Un momento de marca**: la entrada del hero, una transición entre secciones, el cierre.

## Para qué no

- Hacer esperar para leer (titulares que aparecen letra por letra durante 2 s).
- Que todo entre con "fade + subir" al hacer scroll: después de la tercera sección es ruido.
- Secuestrar el scroll (que la rueda no baje la página sino que avance una animación sin control).
- Movimiento infinito en la zona de lectura (logos que corren, fondos que respiran) sin pausa.

## Tiempos y curvas (guía)

| Qué | Duración | Curva |
| --- | --- | --- |
| Respuesta a hover / foco / clic | 100–200 ms | salida suave (ease-out) |
| Entrada de un elemento | 200–400 ms | ease-out o resorte con poco rebote |
| Salida | 150–250 ms (más rápida que la entrada) | ease-in |
| Movimiento entre dos lugares | 300–500 ms | ease-in-out |
| Transición de sección o de página | 400–700 ms | ease-in-out |
| Escalonado entre elementos de un grupo | 30–60 ms entre cada uno, el total < 400 ms | — |

- Distancias cortas (8–24 px) para entradas; nada vuela desde fuera de la pantalla salvo que sea el concepto.
- Un mismo lenguaje en toda la página: mismas curvas y mismas duraciones por tipo de cosa.

## Técnica que no se nota (rendimiento)

- **Animar solo `transform` y `opacity`** (y `filter` con cuidado); nunca ancho, alto, márgenes o `top/left`, que
  recalculan el layout y traban.
- `will-change` solo en lo que se va a animar ya, y quitarlo después.
- **Disparar con `IntersectionObserver`** o con animaciones ligadas al scroll del navegador
  (`animation-timeline: view()` / `scroll()`) como mejora progresiva con `@supports`, en vez de escuchar `scroll` en
  JavaScript en cada fotograma.
- **Transiciones entre vistas** con la API de View Transitions como mejora: si el navegador no la soporta, el cambio
  igual funciona.
- **Pausar lo que no se ve**: video, 3D, Lottie y canvas se detienen fuera de pantalla y en pestañas ocultas.
- **3D y animaciones pesadas, diferidas**: cargan después del contenido, con imagen fija de reemplazo mientras tanto
  y si el dispositivo es lento.
- **Video**: `muted`, `playsinline`, `poster`, carga diferida, duración corta en bucle, peso de cientos de KB, no
  decenas de MB. Siempre con control de pausa visible.
- No bloquear el primer pantallazo: el titular y el botón se ven y funcionan antes de que corra cualquier
  animación.

## Accesibilidad del movimiento

- **Respetar `prefers-reduced-motion: reduce`**: sacar desplazamientos, parallax, zoom y animaciones al hacer scroll;
  dejar fundidos cortos o nada. El contenido final se muestra igual.
- **Pausar, detener u ocultar** todo lo que se mueve solo más de 5 s (WCAG 2.2.2): carruseles, franjas de logos,
  videos de fondo, fondos animados. Un botón visible, no solo al pasar el mouse.
- **Nada que destelle** más de 3 veces por segundo (WCAG 2.3.1).
- **Parallax suave** y nunca en elementos con texto largo; puede marear.
- **Texto animado letra por letra**: el texto completo tiene que estar en el DOM para el lector de pantalla (el
  contenedor con su texto real; las partes animadas ocultas a la tecnología asistiva).
- **Contadores**: el número final accesible desde el principio; no anunciar cada valor intermedio.
- **El foco no se pierde** en transiciones: después de un cambio de vista, el foco va al nuevo contenido.

## Ejemplos de movimiento con propósito

- Pestañas del hero que cambian la demo con botón de pausa del ciclo automático
  ([Sana](https://mobbin.com/sites/sections/7f35e77e-e242-4333-809d-49fc3156ba43)).
- Línea de progreso que avanza con los pasos ([Giga](https://mobbin.com/sites/sections/f850ffc1-be4a-4064-88d5-9b52d2ec9d52)).
- Visualización que se transforma con el relato ([Wild](https://mobbin.com/sites/sections/eef9343d-0d21-41e4-9524-54462b7612db)).
- Interfaz del producto que aparece por partes, como si alguien la estuviera usando
  ([Ramp](https://mobbin.com/sites/sections/c224c647-a876-44fc-ad18-ac01acee3004)).

## Proceso

1. Diseñar la página **quieta** y que funcione así.
2. Elegir 2–4 momentos de movimiento y para qué sirve cada uno.
3. Definir el lenguaje (curvas, duraciones) y la versión reducida.
4. Medir en un teléfono de gama media: si traba o baja el puntaje de rendimiento, simplificar.
