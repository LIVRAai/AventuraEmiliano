# Configurar el Tutor IA de La Expedición de Emiliano

## Dónde pegar la clave

No pegues la clave en `index.html`, `app.js` ni `server.mjs`.

1. En esta misma carpeta, duplica `.env.example`.
2. Cambia el nombre de la copia a `.env`.
3. Abre `.env` y cambia esta línea:

```text
OPENAI_API_KEY=PEGA_AQUI_TU_NUEVA_CLAVE
```

por:

```text
OPENAI_API_KEY=sk-proj-TU_CLAVE_NUEVA_AQUI
```

No uses la clave que ya compartiste en el chat; revócala y crea una nueva.

## Ejecutar la web con IA

Necesitas Node.js instalado.

En una terminal, entra a esta carpeta y ejecuta:

```bash
npm install
npm start
```

Luego abre:

```text
http://localhost:3000
```

Importante: si abres `index.html` directamente con doble clic, el juego funciona, pero el Tutor IA no podrá conectarse porque `/api/tutor` necesita el servidor.

## Cómo funciona

El navegador nunca recibe la clave. La ruta es:

```text
Emiliano -> navegador -> /api/tutor -> servidor -> OpenAI
```

La IA solo genera pistas pedagógicas. La respuesta correcta de la división se comprueba localmente con JavaScript, no con IA.

## Modelo

Por defecto se usa:

```text
OPENAI_MODEL=gpt-5.6-luna
```

Puedes cambiarlo en `.env` sin modificar el código.
