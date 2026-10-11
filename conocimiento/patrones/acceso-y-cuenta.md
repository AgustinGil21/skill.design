# Acceso: registro, login y verificación

## Login

- **Un camino principal, los demás claros y secundarios.** Lo más usado primero (Google / Microsoft / Apple, o email);
  separador "o"; el resto ([Workable](https://mobbin.com/screens/35802b2a-095f-48a3-a161-bab66a7c6f2b),
  [Notion](https://mobbin.com/screens/ef4aba01-ca49-4180-9ef3-96c3fc6be970)).
- **Email primero, después el método**: con el email se decide si hay SSO, passkey o contraseña, y el email queda
  arriba con "Cambiar" ([Gemini](https://mobbin.com/screens/a54ac6e1-8604-4624-a1d6-960e7db5556d)).
- **Enlace mágico o código por email** como alternativa a la contraseña ("Mandame un enlace",
  [Better Stack](https://mobbin.com/screens/6e4462ee-35ac-4263-8fd9-7ca9b00b6e00)), con "Reenviar en 18 s"
  ([Notion](https://mobbin.com/screens/ef4aba01-ca49-4180-9ef3-96c3fc6be970)).
- **Passkey** ofrecida como opción visible y, una vez creada, como la primera.
- **SSO** con su propio botón ("Ingresar con SSO") para cuentas de empresa.
- "¿Olvidaste tu contraseña?" junto al campo de contraseña, no al final de la página.
- Mostrar / ocultar contraseña; "Recordar mi email" en vez de "Mantener sesión" ambiguo.
- **Errores:** "Email o contraseña incorrectos" (sin revelar cuál); después de varios intentos, explicar el bloqueo
  y cuánto dura.
- Captcha solo cuando hay señales de abuso, no siempre.
- Mensajes de estado previos arriba ("Cambiaste tu contraseña, ingresá de nuevo",
  [Workable](https://mobbin.com/screens/35802b2a-095f-48a3-a161-bab66a7c6f2b)).

## Códigos (2FA, verificación)

- 6 cajas o un solo campo con `autocomplete="one-time-code"`, pegado de los 6 dígitos de una vez, avance
  automático, y enviar solo al completar ([Grammarly](https://mobbin.com/screens/2b6ddcc9-e973-49d8-94ad-78c19495b64d)).
- Decir a dónde se mandó y cuánto dura ("Vence en 15 minutos"), "Reenviar" con espera visible, "Usar otro método".
- Pedir el código en un paso propio después de la contraseña, no como tercer campo desde el inicio (anti-ejemplo:
  pedirlo junto con email y contraseña).
- Códigos de recuperación descargables al activar 2FA, con aviso de guardarlos.

## Activar la verificación en dos pasos

- **Pasos numerados en una sola vista o un asistente corto** (1. Escanear · 2. Ingresar código · 3. Guardar códigos
  de recuperación; [Todoist](https://mobbin.com/screens/1cb4595c-0588-4f2e-832e-909a80a99f66) lo resuelve en una
  pantalla, [Expensify](https://mobbin.com/screens/43e91a56-edb6-44a7-a230-9851bb39e41a) en panel lateral "Paso 2
  de 3").
- **QR + clave manual con "Copiar"**, agrupada en bloques legibles (`5NNC NXC2 GOKO`), para quien configura desde el
  mismo teléfono ("¿No podés escanear? Ingresá la clave", [YNAB](https://mobbin.com/screens/6f491d7e-8c14-40ce-a37a-bba0046ed393)).
- **Nombrar apps recomendadas** con enlace, sin obligar ninguna ([Uber](https://mobbin.com/screens/686c8f04-5d33-4b81-b84e-af4cf520a045)).
- **Verificar el código antes de activar**, con confirmación en el campo ("Verificación completa").
- **Códigos de recuperación** listados, copiar todos / descargar, y el porqué ("Si perdés el teléfono, los vas a
  necesitar"). No dejar terminar sin haberlos visto.
- **"Recordar este dispositivo"** opcional y con el plazo dicho ([Gusto](https://mobbin.com/screens/38ee08b2-726c-40b4-83cd-eead522d1c5d)).
- Estado en la configuración ("Activado · 0 dispositivos de confianza · 2/10 códigos usados") con "Regenerar
  códigos" y "Desactivar" (que pide confirmar identidad).

## Registro

- Lo mínimo; verificar después. Ver [puesta-en-marcha.md](puesta-en-marcha.md).
- Términos como texto debajo del botón ("Al continuar aceptás…"), no casilla obligatoria, salvo que la ley lo pida.

## Cuenta

- Cambiar email o contraseña con confirmación de la identidad actual.
- Sesiones activas con dispositivo, lugar y "Cerrar sesión" por cada una.
- Exportar mis datos y borrar la cuenta, encontrables, con consecuencias claras.
