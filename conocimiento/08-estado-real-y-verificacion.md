# Estado real y verificación

Una interfaz clara muestra el estado correcto, propone una acción que lo resuelve y cuenta la misma historia en
todas partes. Un botón perfectamente dibujado que propone la acción equivocada es un error de diseño.

## 1. Tabla de estados antes de implementar

Obligatoria para funciones con autenticación, procesos largos o asíncronos, cuotas y límites, conexiones con
servicios externos o sincronización. Una fila por estado real, no por pantalla:

| Estado | Qué ve la persona | Qué puede hacer | Dónde se muestra |
| --- | --- | --- | --- |
| Sin conectar | "Sin conectar" | Conectar | Configuración |
| Esperando autorización | "Esperando que autorices en el navegador" | Pegar el token / Cancelar | Diálogo de conexión |
| Validando | "Validando…" | (esperar) | Tarjeta y diálogo |
| Conectada | "Conectada" + cuenta | Probar / Volver a validar | Tarjeta |
| Conectada, cuota agotada | "Llegó al límite · sigue conectada · se renueva el…" | Esperar / usar otra cuenta | Tarjeta, barra, donde se cortó la tarea |
| Credenciales inválidas | "Vencida o inválida" | Reconectar | Tarjeta y donde falló |
| Conectada, sin datos de consumo | "No disponible" | (nada; no inventar) | Panel de consumo |

Ejemplo de una cuenta de IA. Lo importante: **estados que se parecen no son intercambiables**. Cuota agotada no es
desconexión. Pedir "Reconectar" ahí propone algo que no resuelve el problema.

## 2. La misma historia en todas partes

- Un mismo dato (estado de una conexión, de un trabajo, de un pago) se muestra igual en configuración, barra
  lateral, chat, diálogos y notificaciones. Si una tarjeta dice "Conectada" y otro panel dice "Sin conectar", la
  interfaz entera pierde credibilidad aunque cada parte esté bien por separado.
- Una sola fuente de verdad para cada estado; las vistas la leen, no la recalculan cada una a su manera.
- Cuando el estado cambia por una acción de la persona, se refleja al instante en todas las vistas, sin esperar
  al próximo refresco periódico.

## 3. Información global en un lugar fijo, el bloqueo donde ocurre

- Lo que afecta a todo el trabajo (consumo, cuota, conexión, sincronización) vive en un lugar persistente, por
  ejemplo abajo de la barra lateral, plegable si no hace falta siempre completo.
- Cuando ese estado bloquea una tarea, se explica **también** en el lugar donde se cortó (el chat, el render, el
  formulario), con la acción posible ahí mismo.
- El detalle y las acciones de administración quedan en configuración.

## 4. Progreso y errores por etapa real

- Cada etapa de un proceso tiene su texto: abrir, esperar autorización, recibir, guardar, validar. Si falla una,
  el mensaje nombra **esa** etapa ("No pudimos validar la cuenta"), no una anterior que ya salió bien ("No se pudo
  abrir el login").
- Esto requiere que el sistema informe la etapa: no se arregla solo con texto.

## 5. Alternativas en el momento del problema

- La salida alternativa (pegar un código, otro método, otro proveedor) está disponible al inicio, durante la
  espera y después del error, sin cerrar ni empezar de nuevo.
- Al cambiar de método se cancela el intento anterior, para que un resultado tardío no contradiga lo que la
  persona acaba de elegir.

## 6. Mensajes con lo que se sabe y nada más

Estructura: qué pasó · cómo afecta la tarea · qué se puede hacer ahora · cuándo se puede seguir (si se sabe).

> "Claude alcanzó su límite de uso. La cuenta sigue conectada. Se renueva el lunes a las 9:00. Podés esperar o
> elegir otro proveedor."

- Si no se sabe un dato (fecha de reinicio, porcentaje), decirlo ("Sin fecha de renovación disponible"). Nunca
  completar el diseño con un valor inventado.
- Sin códigos internos (`provider_unavailable`), sin "Algo salió mal", sin confundir conceptos (cuota de uso no
  es saldo exacto de tokens).
- Nombres de SDK, comandos y mecanismos internos fuera del recorrido normal; aparecen solo en el detalle técnico
  plegado, cuando ayudan a resolver.

## 7. Identidad y estado son señales distintas

- El logo o ícono identifica qué es (más rápido que una inicial); debe leerse bien chico y en claro y oscuro.
- El estado se dice con texto (y badge o color como refuerzo). Nunca solo un punto de color, nunca deducido del
  logo.

## 8. Actualización sin ruido

- Refrescar con la frecuencia que el dato realmente cambia (ej.: cada minuto), compartiendo la consulta entre
  vistas y pestañas, y además al instante cuando una acción lo cambia.
- La estructura no se mueve al actualizar; cifras con números tabulares; sin animaciones constantes; respetar
  movimiento reducido.

## 9. Niveles de verificación (decir cuál se alcanzó)

| Nivel | Qué prueba | Qué no prueba |
| --- | --- | --- |
| Diseño revisado | Jerarquía, textos, estados dibujados, accesibilidad visual | Que funcione |
| Interacción con datos simulados | Que la UI reacciona bien a cada estado | Que los estados reales lleguen así |
| Integración probada | Que el sistema real produce esos estados | El recorrido completo de una persona |
| Recorrido real completado | Que alguien llegó al resultado con el sistema real | — |

Una interfaz puede verse perfecta y pasar tests simulados y fallar con el proceso real (otra URL, otro formato de
salida, un requisito del entorno). Al informar un trabajo, decir hasta qué nivel llegó y qué falta confirmar; no
presentar los cuatro como equivalentes.

## 10. Qué estados revisar como mínimo

Claro y oscuro · anchos relevantes · contenido largo · cargando · desconectado · cerca del límite y agotado · datos
no disponibles · error y recuperación · cancelar y cambiar de método. Más contraste, teclado, nombres accesibles,
desbordes, y no capturar a mitad de una transición.
