LA EXPEDICIÓN DE EMILIANO — versión con Tutor IA

ARCHIVOS PRINCIPALES
- index.html ........ interfaz del juego
- styles.css ........ diseño, animaciones y móvil/tablet
- app.js ............ misiones, divisiones, sonidos y conexión a /api/tutor
- server.mjs ........ servidor que protege la clave y llama a OpenAI
- .env.example ...... muestra EXACTAMENTE dónde debes pegar una clave NUEVA
- CONFIGURA_LA_IA.md  instrucciones paso a paso
- .gitignore ........ evita subir .env por accidente
- package.json ...... dependencias y comandos

IMPORTANTE
La clave de OpenAI NO va en index.html ni app.js.
Lee CONFIGURA_LA_IA.md.

EJECUCIÓN
1. Crea .env a partir de .env.example
2. Pega una clave NUEVA en OPENAI_API_KEY=
3. npm install
4. npm start
5. abre http://localhost:3000
