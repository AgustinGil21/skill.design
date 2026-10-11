# Formularios

Un formulario es una conversación: pregunta lo mínimo, en el orden en que la persona piensa, y avisa los problemas
donde ocurren y cuando ya importan.

## Reglas

- **Etiqueta arriba del campo, siempre visible.** El placeholder es un ejemplo, nunca la etiqueta (desaparece al
  escribir, tiene poco contraste y los lectores de pantalla no siempre lo leen).
- **La ayuda va entre la etiqueta y el campo**, no en un tooltip: "Solo minúsculas, números y guiones"
  ([Hashnode](https://mobbin.com/screens/b7a1bb30-1f89-4b6c-9c1e-ad6349c62827)).
- **Marcá lo que es distinto.** Si casi todo es obligatorio, marcá lo opcional con "(opcional)"
  ([Stripe en Claude](https://mobbin.com/screens/6e3d049f-83d9-4d35-912e-3763c1030a49)); si casi todo es opcional,
  marcá lo obligatorio. No mezclar asteriscos sueltos sin explicar.
- **Un campo por idea y el ancho del campo dice el largo esperado**: código postal corto, dirección larga.
- **Agrupá con títulos de sección** cuando hay más de 5–6 campos ("¿A dónde lo mandamos?" / "¿Cómo te contactamos?",
  [Apple](https://mobbin.com/screens/c51018c6-56dd-4b9d-b8f2-44021298b983)). Los títulos como pregunta guían.
- **Una columna.** Dos columnas solo para pares que se leen juntos (Nombre / Apellido, Vencimiento / CVC).
- **El botón dice lo que pasa**: "Crear cuenta", "Guardar cambios", "Suscribirme", nunca "Enviar" u "OK".

## Validación

- **Cuándo:** al salir del campo (blur) o al enviar. Nunca mientras escribe la primera vez, y nunca mostrar todos
  los "Este campo es obligatorio" al abrir el formulario
  ([anti-ejemplo: Copy.ai](https://mobbin.com/screens/4ab58eec-6cef-4abc-b172-e8943044e1ae)).
  Una vez que un campo mostró error, sí se revalida mientras escribe, para que el error desaparezca apenas se corrige.
- **Dónde:** debajo del campo, con borde e ícono en el campo y el texto en rojo
  ([Apple](https://mobbin.com/screens/c51018c6-56dd-4b9d-b8f2-44021298b983),
  [Stripe](https://mobbin.com/screens/6e3d049f-83d9-4d35-912e-3763c1030a49)). El color nunca solo: ícono + texto.
- **Qué dice:** qué está mal y cómo arreglarlo. "Ingresá como máximo 35 caracteres" > "Valor inválido".
- **Reglas de contraseña como lista viva** con ✓ / ✕ por regla mientras escribe
  ([Relevance AI](https://mobbin.com/screens/20d3040b-464f-4ec9-b37f-6d94043cf3da),
  [GoFundMe](https://mobbin.com/screens/39fa9fa2-7e8b-457f-b386-fd26b2f8383b)). Mostrar las reglas antes del error.
- **Login: error genérico a propósito** ("Email o contraseña incorrectos") en los dos campos, para no revelar qué
  cuentas existen ([Reddit](https://mobbin.com/screens/ad4fcadb-3fc8-475b-aaf7-b1905fde03c5)).
- **Al enviar con errores:** foco al primer campo con error y, si son varios o el formulario es largo, un resumen
  arriba con enlaces a cada campo (accesibilidad: `aria-describedby` del error en el campo, `aria-invalid="true"`).

## Botón deshabilitado: con cuidado

Muchos productos deshabilitan "Continuar" hasta que todo es válido
([Substack](https://mobbin.com/screens/286c847a-7843-4ff8-a13f-4fd526bd635f),
[Otter](https://mobbin.com/screens/84f863fc-a31b-452d-9006-bdfdb6db3db9)). Problema: un botón deshabilitado no explica
por qué, no recibe foco y tiene poco contraste. Preferir:

1. Botón habilitado; al tocarlo, validar y llevar al primer error. O
2. Deshabilitado **solo** si lo que falta está a la vista y es obvio (un único campo), con el motivo escrito cerca.

## Atajos que respetan a la persona

- Autocompletado del navegador (`autocomplete="email"`, `"new-password"`, `"one-time-code"`, `"postal-code"`).
- Tipo de teclado correcto en móvil (`inputmode="numeric"`, `type="email"`).
- Mostrar / ocultar contraseña con un ojo dentro del campo.
- Pegar siempre permitido (también en confirmación de contraseña y códigos).
- No pedir "Confirmar email" ni "Confirmar contraseña" si hay mostrar contraseña o verificación por email.
- Guardar el borrador de formularios largos; avisar antes de salir con cambios sin guardar.

## Formularios largos y configuración

- Secciones con título y descripción a la izquierda y campos a la derecha (estilo "settings"), o tarjetas por
  sección con su propio "Guardar" ([Hashnode](https://mobbin.com/screens/b7a1bb30-1f89-4b6c-9c1e-ad6349c62827)).
- Si se guarda todo junto: barra fija abajo que aparece solo cuando hay cambios ("Tenés cambios sin guardar ·
  Descartar · Guardar").
- Autoguardado para preferencias simples (interruptores), con confirmación sutil ("Guardado") y deshacer.
