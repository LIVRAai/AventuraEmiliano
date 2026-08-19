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

## Interfaz de NOVA

El saludo visible del tutor es intencionalmente breve: **“Pregúntame, yo puedo ayudarte.”** La lógica pedagógica detallada permanece en `api/tutor.js` y no se muestra al niño.


## Ajuste NOVA 4.1

Al abrir `Preguntar a NOVA`, el chat solo muestra `Pregúntame, yo puedo ayudarte.`. La aplicación no crea mensajes automáticos atribuidos a Emiliano. Los mensajes `EMILIANO` aparecen únicamente cuando él escribe y envía una pregunta o pulsa voluntariamente un botón rápido. Tampoco se inicia una conversación automáticamente después de errores.


## Guardado automático del progreso

La versión 4.2 guarda el avance de Emiliano automáticamente en el navegador de la tablet usando `localStorage`.

Se conserva:
- misión actual;
- criaturas desbloqueadas;
- reparto hecho dentro de una misión;
- respuesta seleccionada;
- intentos;
- conversación reciente con NOVA;
- misión ya resuelta aunque aún no haya pulsado “Siguiente misión”;
- preferencia de sonido.

El guardado ocurre después de cada interacción importante y también cuando la página pasa a segundo plano o se cierra.

Esto sobrevive a apagar y encender la tablet siempre que Emiliano vuelva a entrar al mismo dominio y con el mismo navegador. Si se borran los datos del navegador, se usa modo privado, cambia de navegador o cambia de dispositivo, este guardado local no estará disponible. Para sincronizar entre dispositivos haría falta una cuenta o almacenamiento en la nube.

## NOVA 4.3 — tutor compañero de aprendizaje

NOVA ahora prioriza conversación natural y acompañamiento durante el aprendizaje. Responde primero a la pregunta real de Emiliano, puede conversar brevemente sobre la misión o el animal, recuerda hasta 12 mensajes recientes y cambia de estrategia cuando una explicación no funciona.

La metodología sigue siendo clara, concreta, visual, progresiva y centrada en división, pero NOVA ya no está obligado a responder siempre con un único micro-paso ni a terminar siempre con una pregunta.

El backend tampoco crea una pregunta por defecto: `/api/tutor` exige que llegue un mensaje real enviado por Emiliano o por uno de los botones rápidos.
