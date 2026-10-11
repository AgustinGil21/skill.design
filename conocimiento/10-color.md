# Color en profundidad

El color organiza (qué es qué), comunica (estado, peligro, éxito) y da carácter. En ese orden de importancia.

## 1. Estructura de una paleta

- **Neutros (80–90 % de la superficie)**: una escala de 10–12 pasos, ligeramente teñida hacia el color de marca o
  hacia cálido/frío, nunca gris puro sin intención.
- **Un color de marca / acento**: para la acción principal, el foco, lo seleccionado. Escala de 10–12 pasos.
- **Semánticos**: éxito, advertencia, error, información — cada uno con fondo suave, borde, texto e ícono.
- **Opcional, uno o dos de apoyo** para gráficos, categorías, ilustración.

Regla 60-30-10 como punto de partida para una pieza de marketing: 60 % base, 30 % secundario, 10 % acento.

## 2. Construir escalas con OKLCH

Trabajar en **OKLCH** (luminosidad, croma, tono) en vez de HEX o HSL: los pasos se ven uniformes y el contraste es
predecible.

```css
:root {
  --marca-50:  oklch(97% 0.02 45);
  --marca-100: oklch(93% 0.04 45);
  --marca-300: oklch(80% 0.10 45);
  --marca-500: oklch(65% 0.17 45);  /* base */
  --marca-700: oklch(48% 0.14 45);
  --marca-900: oklch(30% 0.08 45);
  --neutro-50: oklch(98% 0.004 60);
  --neutro-900: oklch(20% 0.01 60);
}
```

- Mantener el tono (H) casi fijo y bajar el croma (C) en los extremos claros y oscuros.
- Verificar el contraste final en sRGB: algunos valores OKLCH quedan fuera de gama en pantallas comunes.
- Nombrar por **rol** en el uso (`--fondo`, `--texto`, `--texto-suave`, `--borde`, `--accion`, `--peligro`) y por
  escala en la definición.

## 3. Contraste

| Qué | Mínimo (WCAG 2.2 AA) |
| --- | --- |
| Texto normal | 4,5:1 |
| Texto grande (24 px o 18,66 px negrita) | 3:1 |
| Bordes de campos, íconos que informan, foco | 3:1 contra lo adyacente |
| Texto deshabilitado o decorativo | exento, pero que se entienda que está deshabilitado |

- El método APCA (borrador para futuras versiones) da mejores resultados en modo oscuro y texto chico: usarlo como
  segunda opinión, no como cumplimiento.
- **Texto sobre imagen**: medir en la zona más clara/oscura real; usar velo, sombra suave o caja.
- **El color nunca es la única señal**: error = color + ícono + texto.
- Probar con simuladores de daltonismo (deuteranopía y protanopía son las más comunes): rojo/verde juntos como
  única diferencia falla.

## 4. Paletas con carácter (y cómo no caer en lo genérico)

Lo genérico hoy: degradé violeta-azul, azul SaaS (#3B82F6) sobre blanco, negro con brillos neón violeta.

Caminos con carácter:

- **Un color protagonista inesperado para el rubro**, usado con convicción: amarillo de Mailchimp con un negro
  cálido ("Cavendish Yellow" + "Peppercorn"; [Mailchimp](https://mobbin.com/sites/sections/c8d952df-f1ff-456c-b797-d9838627301e));
  naranja intenso a pantalla completa ([Raw Materials](https://mobbin.com/sites/sections/f8f4b266-6f1c-4821-a57f-610a525137f5)).
- **Neutros cálidos** (hueso, papel, arena) en vez de blanco puro y gris frío: se siente más humano y editorial.
- **Monocromía + un acento**: casi todo en escala de un tono, el acento solo en la acción.
- **Paletas tomadas de algo real**: una fotografía, un material, un lugar, un objeto del rubro; da coherencia
  natural.
- **Colores con nombre propio** dentro de la marca (le da identidad y ayuda a usarlos bien).
- **Paleta amplia pero accesible**: muchos colores, cada uno probado con texto blanco y negro
  ([Canva](https://mobbin.com/sites/sections/9665e99f-9b88-4608-8ed7-6b05549186e9) lo muestra en su guía).

Combinaciones de partida (ajustar en OKLCH y probar contraste):

| Carácter | Base | Texto | Acento |
| --- | --- | --- | --- |
| Editorial cálido | hueso / papel | casi negro cálido | rojo ladrillo o terracota |
| Técnico sobrio | casi negro azulado | gris claro | un verde ácido o naranja |
| Natural | crema | verde bosque oscuro | mostaza |
| Lúdico | color pleno (amarillo, coral) | negro | blanco + un segundo color fuerte |
| Lujo | negro o marfil | marfil o negro | un metal (dorado apagado) usado muy poco |

## 5. Modo oscuro

- No es invertir: fondos en gris muy oscuro (no negro puro, salvo OLED o intención), superficies elevadas un poco
  más claras (la "luz" sube), texto en blanco no puro (~90 %).
- Bajar la saturación de acentos y semánticos; los colores saturados vibran sobre negro.
- Rehacer las sombras: en oscuro casi no se ven, usar bordes sutiles o superficies más claras.
- Verificar contraste de nuevo: el gris secundario suele fallar.
- Respetar la preferencia del sistema y permitir cambiarla ([patrones/preferencias.md](patrones/preferencias.md)).

## 6. Color en datos

- **Categóricos**: hasta 6–8 colores distinguibles, de luminosidad diferente (que también funcionen en gris).
- **Secuenciales**: un tono de claro a oscuro.
- **Divergentes**: dos tonos con un neutro al centro (bajo / medio / alto).
- Etiquetas directas en las series en vez de leyendas lejanas.

## 7. Psicología del color (con cuidado)

Las asociaciones existen pero dependen de la cultura y el contexto; no son reglas.

- Rojo: urgencia, error, energía, (en algunas culturas) suerte. Verde: éxito, dinero, natural.
- Azul: calma, confianza — por eso está en todos lados y no distingue.
- Amarillo/naranja: atención, calidez, optimismo; difícil para texto.
- Negro y blanco: sobriedad, lujo, tecnología.
- Lo que más importa no es el "significado" sino la **consistencia**: que el mismo color signifique siempre lo
  mismo dentro del producto.
