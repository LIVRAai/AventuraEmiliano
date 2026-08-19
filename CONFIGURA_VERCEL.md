# La Expedición de Emiliano — GitHub + Vercel

## Estructura importante

Vercel debe recibir esta estructura en la raíz del repositorio:

- index.html
- styles.css
- app.js
- package.json
- api/
  - health.js
  - tutor.js

La carpeta `api` es la que convierte `/api/health` y `/api/tutor` en funciones de Vercel.

## Variables de entorno en Vercel

En Project → Settings → Environment Variables:

- `OPENAI_API_KEY` = tu clave NUEVA de OpenAI
- `OPENAI_MODEL` = `gpt-5.6-luna`

Actívalas para Production and Preview.

No pongas la clave en GitHub, index.html, app.js ni ningún archivo público.

## Después de subir los cambios a GitHub

Vercel debe crear automáticamente un deployment nuevo. Si no lo hace, entra a Deployments y pulsa Redeploy.

## Prueba 1 — Backend

Abre:

`https://TU-DOMINIO.vercel.app/api/health`

Debe responder algo como:

```json
{"ok":true,"aiConfigured":true,"model":"gpt-5.6-luna"}
```

Si `/api/health` da 404, la carpeta `api` no está en la raíz que Vercel está desplegando.

Si `aiConfigured` es false, la variable `OPENAI_API_KEY` no está disponible en ese deployment.

## Prueba 2 — Tutor

Entra al juego y pulsa `Tutor IA`.

Si falla, revisa Vercel → Logs y filtra por `/api/tutor`.


## NOVA: tutor conversacional

Esta versión convierte NOVA en un tutor conversacional. Emiliano puede escribir preguntas libres o usar botones rápidos como **No entiendo**, **Con objetos**, **Un paso** y **Otra forma**.

El archivo `api/tutor.js` contiene las reglas pedagógicas del tutor. Esas reglas exigen enseñanza concreta, estructurada, paso a paso y sin mencionar etiquetas diagnósticas. La clave sigue leyendo `OPENAI_API_KEY` desde Vercel.

Después de subir esta versión a GitHub, espera el nuevo deployment de Vercel o ejecuta **Redeploy**. No necesitas cambiar la variable `OPENAI_API_KEY`.
