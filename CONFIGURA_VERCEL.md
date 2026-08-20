# La Expedición de Emiliano — versión 5.0

## Qué cambia

- Las primeras 12 misiones ya no repiten siempre la misma mecánica.
- Hay retos de reparto, reconocimiento, completar grupos, detectar errores, equilibrar, pensar al revés, historias y un guardián de mundo.
- Al completar cada misión, NOVA muestra un feedback pedagógico que comienza con “Recuerda que al dividir,” y conecta la regla con lo que Emiliano acaba de hacer.
- El feedback usa IA, pero tiene un texto local de respaldo para que el juego siga funcionando si la API tarda o falla.
- El progreso sigue guardándose en `localStorage` para continuar después de apagar la tablet.

## Estructura en GitHub

- `index.html`
- `styles.css`
- `app.js`
- `package.json`
- `api/health.js`
- `api/tutor.js`

## Vercel

Mantén estas variables en Project → Settings → Environment Variables:

- `OPENAI_API_KEY`
- `OPENAI_MODEL` (opcional; si no existe se usa el modelo configurado por defecto en `api/tutor.js`)

No pongas la clave en GitHub.

## Prueba rápida

1. Sube esta carpeta a GitHub.
2. Espera el deployment de Vercel.
3. Abre `/api/health` y confirma `aiConfigured: true`.
4. Completa una misión y revisa que aparezca el bloque “NOVA · LO QUE ACABAS DE DESCUBRIR”.


## Configuración dentro del juego

La opción **Reiniciar aventura** ya no aparece en la pantalla principal. Ahora está dentro del botón **⚙️ Configuración**, junto con el control de sonido. El reinicio pide confirmación antes de borrar el progreso local.


## Versión 6.0 — Dividir en mi cuaderno

Después de completar las 36 misiones aparece **Aventura 2: Dividir en mi cuaderno**.

El módulo:
- guarda su progreso de forma independiente en `localStorage`;
- enseña el algoritmo escrito usando **MIRO → DIVIDO → MULTIPLICO → RESTO → BAJO → REPITO**;
- hace que Emiliano escriba físicamente cada paso en el cuaderno;
- NOVA explica en cada paso **por qué**, **para qué** y **cómo**;
- incluye 12 divisiones progresivas, entre ellas `3225 ÷ 25`;
- incorpora divisores de dos cifras, residuo y un caso con cero en el cociente;
- permite preguntarle a NOVA sobre el paso exacto del cuaderno usando la misma `OPENAI_API_KEY`.

No necesitas crear nuevas variables de entorno en Vercel.
