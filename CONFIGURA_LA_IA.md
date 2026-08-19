# Configurar NOVA con OpenAI — GitHub + Vercel

## IMPORTANTE
La clave de OpenAI **NO se pega en index.html, app.js, server.mjs ni GitHub**.

Si una clave ya fue compartida públicamente o pegada en un chat/repositorio, revócala y crea una nueva antes de continuar.

## 1. Sube el proyecto a GitHub

El archivo `.gitignore` ya excluye:

- `.env`
- `.env.*`
- `node_modules/`

Antes de hacer push, confirma que tu archivo `.env` no aparece entre los archivos del repositorio.

## 2. Importa el repositorio en Vercel

En Vercel:

1. New Project
2. Importa el repositorio de GitHub
3. Deja el proyecto en la raíz donde están `package.json`, `server.mjs` e `index.html`
4. Antes o después del primer deploy, abre **Settings → Environment Variables**

## 3. Pega la clave en Vercel

Crea estas variables:

```text
OPENAI_API_KEY=TU_CLAVE_NUEVA
OPENAI_MODEL=gpt-5.6-luna
```

Recomendación: habilítalas para **Production** y **Preview**.

No necesitas configurar `PORT` en Vercel. Vercel gestiona el puerto de ejecución.

## 4. Redeploy

Después de agregar o cambiar una variable de entorno, realiza un nuevo deployment para que la función use el nuevo valor.

## 5. Comprobar que NOVA está conectado

Abre:

```text
https://TU-DOMINIO.vercel.app/api/health
```

Deberías ver algo parecido a:

```json
{
  "ok": true,
  "aiConfigured": true,
  "model": "gpt-5.6-luna"
}
```

Después abre el juego y prueba **🤖 Tutor IA — NOVA**.

## Desarrollo local opcional

Crea un archivo `.env` solo en tu computador:

```text
OPENAI_API_KEY=TU_CLAVE_NUEVA
OPENAI_MODEL=gpt-5.6-luna
PORT=3000
```

Luego:

```bash
npm install
npm start
```

Y abre `http://localhost:3000`.
