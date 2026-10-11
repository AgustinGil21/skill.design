# Proceso: cómo diseñar una pantalla o un flujo

Orden de trabajo que evita la mayoría de los problemas. Sirve para una pantalla nueva, un rediseño o una revisión.

## 1. Entender (antes de dibujar)

- ¿Quién la usa, con qué frecuencia y en qué contexto (escritorio, celular, apurado, experto o primera vez)?
- ¿Qué pregunta responde esta pantalla? ¿Cuál es la tarea principal y cuáles son secundarias?
- ¿Qué pasa antes y después? (de dónde llega, a dónde va)
- ¿Qué contenido real va a tener? Conseguir ejemplos reales: textos, cantidades, casos raros.
- ¿Qué restricciones hay? (plataforma, librería de componentes, rendimiento, legales)

## 2. Buscar referencias

- Buscar cómo lo resuelven productos muy usados del mismo tipo (Mobbin: pantallas y recorridos, web e iOS).
- Mirar **organización y comportamiento**, no estética: qué está a la vista, qué agrupan, dónde está cada acción,
  cómo manejan vacío, error y carga.
- Anotar el patrón que se repite en la mayoría: es lo que la gente ya conoce.
- Revisar el archivo de patrones correspondiente en [patrones/](patrones/).

## 3. Estructurar

- Listar el contenido y las acciones; ordenar por frecuencia e importancia.
- Elegir la acción principal (una).
- Decidir qué va a la vista, qué a un clic (menú, plegable, panel) y qué a otra pantalla.
- Bocetar en bloques (sin estilo): jerarquía y ubicación.
- Escribir los textos reales ahora, no al final ([04-escritura-de-interfaz.md](04-escritura-de-interfaz.md)).

## 4. Diseñar los estados

Ideal, vacío (primera vez / sin resultados), cargando, parcial, error, sin permiso, sin conexión, éxito.
Si hay conexiones, procesos largos o límites: **tabla de estados reales** (estado · qué ve · qué puede hacer ·
dónde) antes de implementar ([08-estado-real-y-verificacion.md](08-estado-real-y-verificacion.md)).
Datos extremos: textos largos, 0 / 1 / muchos, otros idiomas.

## 5. Aplicar el sistema visual

- Componentes de la librería del proyecto, sin reinventar.
- Tokens de color, espacio, tipografía y radio ([05-sistema-visual.md](05-sistema-visual.md)).
- Claro y oscuro.
- Revisar contra [01-anti-slop.md](01-anti-slop.md).

## 6. Hacerla accesible

Teclado, foco, nombres, contraste, zoom, movimiento ([02-accesibilidad.md](02-accesibilidad.md)).

## 7. Verificar en lo real

- Construida, en el navegador o el dispositivo, con datos reales.
- Capturas en los anchos soportados, claro y oscuro.
- Recorrer el flujo completo con teclado y con lector de pantalla.
- Pasar la [lista de revisión](06-revision.md).
- Si es posible, 3–5 personas haciendo una tarea concreta.

## 8. Registrar

- Hasta qué nivel quedó verificado (diseño, simulado, integración, recorrido real) y qué falta confirmar.
- Qué se decidió y por qué (en el plan o el documento del proyecto).
- De cada referencia usada, qué decisión aporta (jerarquía, distribución, acción, estado); "inspirado en X" no
  alcanza.
- Patrones nuevos que valga la pena reutilizar: agregarlos a [patrones/](patrones/) con su referencia.

## Al criticar una pantalla existente

1. Qué pregunta debería responder y cuál responde hoy.
2. Heurísticas de Nielsen puntuadas 0–4 ([03-usabilidad.md](03-usabilidad.md)).
3. Problemas con severidad (1–4) y frecuencia, cada uno con evidencia (qué se ve) y propuesta concreta.
4. Lo que funciona bien (para no romperlo).
5. Orden de arreglo: severidad × frecuencia, y lo barato primero si empata.
