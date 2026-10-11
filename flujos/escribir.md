# Flujo: escribir o corregir textos

1. Leer `conocimiento/04-escritura-de-interfaz.md` (interfaz) y, si es marketing,
   `conocimiento/landing/04-escritura-persuasiva.md`.
2. Detectar la voz del producto (textos existentes, guía de marca) y la forma de tratamiento; mantenerlas.
3. Para cada texto: ¿qué tiene que saber o hacer la persona en ese momento? Escribir solo eso.
4. Reglas rápidas:
   - Botones: verbo + objeto ("Guardar cambios", "Crear proyecto"); en diálogos, el botón repite la acción
     ("Borrar proyecto", no "Aceptar").
   - Errores: qué pasó + por qué (si se sabe) + cómo seguir; sin culpar.
   - Vacíos: qué va a haber acá + cómo empezar.
   - Confirmaciones: la consecuencia concreta ("Se borran 14 archivos. No se puede deshacer.").
   - Sin palabras huecas ni tríadas (`conocimiento/13-diseno-humano.md`, sección 3).
5. Correr `node scripts/slop.mjs <archivos>` para detectar frases genéricas.
6. Entregar antes/después en tabla cuando se corrige algo existente, con el motivo de cada cambio.
