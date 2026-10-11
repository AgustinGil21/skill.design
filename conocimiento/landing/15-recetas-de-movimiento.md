# Recetas de movimiento (CSS base, accesible)

Código sin dependencias, pensado como punto de partida. Cada receta respeta "reducir movimiento" y funciona igual si
el navegador no soporta la parte avanzada. Con librerías de animación, aplicar las mismas reglas (consultar su
documentación actual antes de usarlas).

## 1. Tokens de movimiento

```css
:root {
  --dur-rapida: 150ms;   /* hover, foco, clic */
  --dur-media: 300ms;    /* entradas */
  --dur-lenta: 500ms;    /* cambios de sección */
  --curva-salida: cubic-bezier(0.16, 1, 0.3, 1);   /* entra suave, frena al final */
  --curva-entrada: cubic-bezier(0.7, 0, 0.84, 0);  /* para salidas */
  --curva-mover: cubic-bezier(0.65, 0, 0.35, 1);   /* de un lugar a otro */
  --distancia: 16px;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --dur-media: 1ms;
    --dur-lenta: 1ms;
    --distancia: 0px;
  }
}
```

Un solo lugar para el lenguaje de movimiento; con "reducir movimiento", todo queda quieto sin tocar cada regla.

## 2. Aparecer al entrar en pantalla (mejora progresiva)

```css
.aparece {
  /* Por defecto, visible: si nada de lo de abajo funciona, el contenido está. */
  opacity: 1;
  transform: none;
}

@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .aparece {
      animation: aparecer linear both;
      animation-timeline: view();
      animation-range: entry 10% cover 30%;
    }
  }
}

@keyframes aparecer {
  from { opacity: 0; transform: translateY(var(--distancia)); }
  to   { opacity: 1; transform: none; }
}
```

- Usarlo en 2–3 bloques clave, no en todos.
- El contenido nunca arranca oculto con JavaScript que podría no correr.

## 3. Respuesta de botones y tarjetas

```css
.boton {
  transition:
    transform var(--dur-rapida) var(--curva-salida),
    background-color var(--dur-rapida) var(--curva-salida);
}
.boton:hover { transform: translateY(-1px); }
.boton:active { transform: translateY(0) scale(0.98); }
.boton:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}
```

El foco visible es parte del diseño, no un detalle a quitar.

## 4. Franja de logos que se puede pausar

```css
.franja { overflow: hidden; }
.franja__pista {
  display: flex;
  gap: 48px;
  width: max-content;
  animation: deslizar 40s linear infinite;
}
.franja:hover .franja__pista,
.franja:focus-within .franja__pista,
.franja[data-pausada="true"] .franja__pista {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .franja__pista { animation: none; flex-wrap: wrap; width: auto; }
}
@keyframes deslizar {
  to { transform: translateX(-50%); }
}
```

- Botón visible "Pausar / Reanudar" que cambia `data-pausada` (WCAG 2.2.2: todo lo que se mueve solo más de 5 s se
  puede detener).
- La lista duplicada para el bucle va con `aria-hidden="true"` para no leerse dos veces.

## 5. Video de fondo responsable

```html
<video autoplay muted loop playsinline preload="none" poster="hero.avif">
  <source src="hero.webm" type="video/webm" />
  <source src="hero.mp4" type="video/mp4" />
</video>
<button type="button" class="pausar-video">Pausar video</button>
```

- Con "reducir movimiento", no reproducir: mostrar el póster (con JavaScript, consultando
  `matchMedia('(prefers-reduced-motion: reduce)')`).
- Pausar cuando sale de pantalla (`IntersectionObserver`) y cuando la pestaña se oculta.
- El texto encima con velo suficiente para 4,5:1 en el cuadro más claro del video.

## 6. Cambio de vista suave (View Transitions como mejora)

```js
function cambiarVista(actualizar) {
  const reducir = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || reducir) {
    actualizar();
    return;
  }
  document.startViewTransition(actualizar);
}
```

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: var(--dur-media);
  animation-timing-function: var(--curva-mover);
}
```

Después del cambio, mover el foco al título del contenido nuevo.

## 7. Contador que no molesta

- Mostrar el número final en el HTML (`<span>12.000</span>`); animar solo la presentación visual y, con "reducir
  movimiento", no animar.
- No usar `aria-live` en contadores: el lector de pantalla anunciaría cada valor.

## Errores comunes

- Animar `height`, `width`, `top` o `margin` (traba). Usar `transform`.
- `will-change` en todo (gasta memoria). Solo en lo que se anima ahora.
- Escuchar `scroll` en JavaScript para efectos que el CSS ya resuelve.
- Ocultar contenido con `opacity: 0` inicial que depende de JavaScript para aparecer.
- Duraciones largas en interacciones (un menú que tarda 600 ms en abrir se siente lento).
