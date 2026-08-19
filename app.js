(() => {
  const $ = (s) => document.querySelector(s);
  const gameArea = $('#gameArea');
  const checkBtn = $('#checkBtn');
  const hintBtn = $('#hintBtn');
  const aiTutorBtn = $('#aiTutorBtn');
  const aiTutorCard = $('#aiTutorCard');
  const aiTutorTitle = $('#aiTutorTitle');
  const aiTutorChat = $('#aiTutorChat');
  const aiTutorForm = $('#aiTutorForm');
  const aiTutorInput = $('#aiTutorInput');
  const aiTutorSendBtn = $('#aiTutorSendBtn');
  const aiTutorQuickBtns = [...document.querySelectorAll('[data-tutor-prompt]')];
  const aiStatus = $('#aiStatus');
  const soundBtn = $('#soundBtn');
  const resetBtn = $('#resetBtn');
  const settingsBtn = $('#settingsBtn');
  const settingsModal = $('#settingsModal');
  const closeSettingsBtn = $('#closeSettingsBtn');
  const rewardCard = $('#rewardCard');
  const rewardTitle = $('#rewardTitle');
  const rewardText = $('#rewardText');
  const rewardEmoji = $('#rewardEmoji');
  const animalFact = $('#animalFact');
  const progressBar = $('#progressBar');
  const progressText = $('#progressText');
  const missionNumber = $('#missionNumber');
  const missionTotal = $('#missionTotal');
  const missionTitle = $('#missionTitle');
  const missionPrompt = $('#missionPrompt');
  const storyLine = $('#storyLine');
  const animalEmoji = $('#animalEmoji');
  const animalName = $('#animalName');
  const worldIcon = $('#worldIcon');
  const worldName = $('#worldName');
  const worldProgress = $('#worldProgress');
  const chapterText = $('#chapterText');
  const toast = $('#toast');
  const intro = $('#intro');
  const app = $('#app');
  const startBtn = $('#startBtn');
  const skipIntroBtn = $('#skipIntroBtn');
  const finalCard = $('#finalCard');
  const replayBtn = $('#replayBtn');
  const mapBtn = $('#mapBtn');
  const worldModal = $('#worldModal');
  const closeMapBtn = $('#closeMapBtn');
  const worldMap = $('#worldMap');
  const animalCardBtn = $('#animalCardBtn');
  const fieldGuideBtn = $('#fieldGuideBtn');
  const animalModal = $('#animalModal');
  const closeAnimalBtn = $('#closeAnimalBtn');
  const animalModalTitle = $('#animalModalTitle');
  const animalProfile = $('#animalProfile');
  const guideModal = $('#guideModal');
  const closeGuideBtn = $('#closeGuideBtn');
  const fieldGuideGrid = $('#fieldGuideGrid');
  const guideProgress = $('#guideProgress');
  const fieldAnimalName = $('#fieldAnimalName');
  const profileType = $('#profileType');
  const profileHabitat = $('#profileHabitat');
  const profileDiet = $('#profileDiet');
  const profilePower = $('#profilePower');
  const novaFeedbackCard = $('#novaFeedbackCard');
  const novaFeedbackStatus = $('#novaFeedbackStatus');
  const novaFeedbackText = $('#novaFeedbackText');
  const nextTeaser = $('#nextTeaser');
  const rewardNextBtn = $('#rewardNextBtn');

  const worlds = [
    { name: 'Bosque de los Repartos', icon: '🌿', color: '#70f0a7', subtitle: 'Aprender a repartir' },
    { name: 'Ríos Secretos', icon: '💧', color: '#58e6ff', subtitle: 'Formar grupos iguales' },
    { name: 'Océano Profundo', icon: '🌊', color: '#78a6ff', subtitle: 'Usar el símbolo ÷' },
    { name: 'Desierto de las Tablas', icon: '🏜️', color: '#ffd84d', subtitle: 'Dividir con rapidez' },
    { name: 'Tierras Heladas', icon: '❄️', color: '#cdd6ff', subtitle: 'Números más grandes' },
    { name: 'Santuario Perdido', icon: '🗿', color: '#ff9fe0', subtitle: 'El gran desafío' }
  ];

  const animalProfiles = {
    'Gecko': {type:'Reptil', habitat:'Bosques, zonas rocosas y también lugares cercanos a personas en regiones cálidas.', region:'Regiones tropicales y subtropicales de varios continentes.', diet:'Principalmente insectos y otros pequeños invertebrados.', power:'Sus dedos tienen estructuras diminutas que le permiten adherirse a muchas superficies.'},
    'Panda rojo': {type:'Mamífero', habitat:'Bosques montañosos frescos con abundante bambú.', region:'Himalaya oriental y suroeste de China.', diet:'Sobre todo bambú; también frutos, huevos e insectos.', power:'Su larga cola le ayuda a mantener el equilibrio y a cubrirse del frío.'},
    'Rana de cristal': {type:'Anfibio', habitat:'Bosques húmedos, normalmente cerca de quebradas y ríos.', region:'América Central y norte de América del Sur.', diet:'Pequeños insectos y otros invertebrados.', power:'En muchas especies, la piel del vientre es tan translúcida que permite ver órganos internos.'},
    'Perezoso': {type:'Mamífero', habitat:'Copas de árboles en bosques tropicales.', region:'América Central y América del Sur.', diet:'Hojas, brotes y, según la especie, algunos frutos.', power:'Ahorra muchísima energía moviéndose lentamente y tiene adaptaciones para vivir colgado.'},
    'Tucán': {type:'Ave', habitat:'Bosques tropicales y subtropicales.', region:'México, América Central y América del Sur.', diet:'Principalmente frutos; también insectos y pequeños animales.', power:'Su enorme pico es sorprendentemente liviano y sirve para alcanzar alimento.'},
    'Coatí': {type:'Mamífero', habitat:'Bosques, matorrales y zonas arboladas.', region:'Desde el sur de Norteamérica hasta América del Sur, según la especie.', diet:'Frutos, insectos, huevos y pequeños animales.', power:'Su hocico largo y flexible funciona como una herramienta para buscar comida.'},
    'Ajolote': {type:'Anfibio', habitat:'Canales y lagos de agua dulce.', region:'Es nativo del sistema de Xochimilco, en Ciudad de México.', diet:'Gusanos, larvas, pequeños crustáceos y otros animales acuáticos.', power:'Puede regenerar extremidades y otros tejidos; además conserva rasgos juveniles al llegar a adulto.'},
    'Ornitorrinco': {type:'Mamífero', habitat:'Ríos, arroyos y lagos de agua dulce.', region:'Este de Australia y Tasmania.', diet:'Larvas de insectos, gusanos y pequeños animales acuáticos.', power:'Pone huevos y detecta señales eléctricas de sus presas con el pico.'},
    'Nutria marina': {type:'Mamífero marino', habitat:'Costas frías, bosques de kelp y aguas poco profundas.', region:'Océano Pacífico Norte.', diet:'Erizos, moluscos, cangrejos y otros invertebrados marinos.', power:'Puede usar piedras como herramientas para romper caparazones.'},
    'Delfín rosado': {type:'Mamífero acuático', habitat:'Grandes ríos, lagunas y bosques inundados de agua dulce.', region:'Cuencas del Amazonas y del Orinoco.', diet:'Peces, crustáceos y otros animales acuáticos.', power:'Tiene un cuello muy flexible para maniobrar entre ramas y vegetación inundada.'},
    'Capibara': {type:'Mamífero · roedor', habitat:'Humedales, sabanas inundables y orillas de ríos.', region:'Gran parte de América del Sur.', diet:'Pastos y plantas acuáticas.', power:'Es el roedor vivo más grande y nada muy bien.'},
    'Manatí': {type:'Mamífero acuático', habitat:'Ríos, estuarios y costas cálidas poco profundas.', region:'América y África, según la especie.', diet:'Plantas acuáticas y vegetación.', power:'Puede pasar horas alimentándose de plantas y está completamente adaptado a la vida acuática.'},
    'Pulpo Dumbo': {type:'Molusco · cefalópodo', habitat:'Fondos oceánicos muy profundos.', region:'Océanos de distintas partes del mundo.', diet:'Pequeños crustáceos, gusanos y otros animales del fondo.', power:'Nada moviendo unas aletas que parecen orejas.'},
    'Medusa': {type:'Cnidario', habitat:'Mares y océanos; algunas especies también viven en agua dulce.', region:'Prácticamente todo el planeta.', diet:'Plancton, huevos, larvas y pequeños animales.', power:'Su cuerpo gelatinoso se mueve contrayendo una campana y muchas especies poseen células urticantes.'},
    'Cangrejo yeti': {type:'Crustáceo', habitat:'Zonas profundas cercanas a fuentes hidrotermales o filtraciones frías.', region:'Océanos profundos.', diet:'Bacterias, materia orgánica y pequeños organismos, según la especie.', power:'Sus pinzas y patas pueden estar cubiertas de filamentos donde crecen bacterias.'},
    'Isópodo gigante': {type:'Crustáceo', habitat:'Fondo del mar a cientos de metros de profundidad.', region:'Océanos tropicales y templados profundos.', diet:'Restos de animales y otras fuentes de alimento del fondo marino.', power:'Es un pariente gigante de las cochinillas terrestres y posee 14 patas.'},
    'Tiburón duende': {type:'Pez cartilaginoso', habitat:'Aguas oceánicas profundas.', region:'Registrado en distintos océanos del mundo.', diet:'Peces, calamares y crustáceos.', power:'Puede lanzar sus mandíbulas hacia adelante con enorme rapidez para capturar presas.'},
    'Calamar vampiro': {type:'Molusco · cefalópodo', habitat:'Aguas profundas con muy poco oxígeno.', region:'Océanos tropicales y templados.', diet:'Partículas orgánicas que caen desde capas superiores, llamadas “nieve marina”.', power:'Puede vivir donde el oxígeno es demasiado bajo para muchos otros animales.'},
    'Fénec': {type:'Mamífero', habitat:'Desiertos arenosos y zonas áridas.', region:'Norte de África, especialmente el Sahara.', diet:'Insectos, pequeños vertebrados, frutos y raíces.', power:'Sus enormes orejas detectan sonidos y ayudan a liberar calor.'},
    'Saiga': {type:'Mamífero · antílope', habitat:'Estepas y semidesiertos abiertos.', region:'Asia Central.', diet:'Hierbas y otras plantas.', power:'Su gran nariz ayuda a filtrar polvo y a acondicionar el aire antes de que llegue a los pulmones.'},
    'Diablo espinoso': {type:'Reptil', habitat:'Desiertos y matorrales secos.', region:'Australia.', diet:'Principalmente hormigas.', power:'Puede conducir agua entre sus escamas hasta la boca mediante diminutos canales.'},
    'Jerbo': {type:'Mamífero · roedor', habitat:'Desiertos y estepas secas.', region:'Norte de África y Asia, según la especie.', diet:'Semillas, plantas e insectos.', power:'Sus patas traseras largas le permiten desplazarse con grandes saltos.'},
    'Sidewinder': {type:'Reptil · serpiente', habitat:'Desiertos de arena y grava.', region:'Suroeste de Estados Unidos y noroeste de México.', diet:'Roedores, lagartos y otros pequeños animales.', power:'Se mueve lateralmente, reduciendo el contacto de su cuerpo con la arena caliente.'},
    'Órix': {type:'Mamífero · antílope', habitat:'Desiertos, sabanas secas y zonas semidesérticas.', region:'África y la península arábiga, según la especie.', diet:'Pastos, hojas y otras plantas.', power:'Está adaptado a soportar calor intenso y periodos con poca agua disponible.'},
    'Leopardo de las nieves': {type:'Mamífero · felino', habitat:'Montañas altas, rocosas y frías.', region:'Asia Central y del Sur.', diet:'Cabras y ovejas silvestres, marmotas y otros animales.', power:'Su enorme cola le da equilibrio y también puede envolver su cuerpo para conservar calor.'},
    'Buey almizclero': {type:'Mamífero · bóvido', habitat:'Tundra ártica.', region:'Groenlandia y zonas árticas de Norteamérica; también ha sido introducido en otras regiones.', diet:'Hierbas, juncos, musgos y otras plantas.', power:'Posee una capa interna de pelo extremadamente aislante llamada qiviut.'},
    'Búho nival': {type:'Ave rapaz', habitat:'Tundra abierta y regiones árticas.', region:'Ártico de América del Norte, Europa y Asia.', diet:'Lemmings, otros pequeños mamíferos y aves.', power:'Su plumaje espeso llega incluso hasta patas y dedos para protegerlo del frío.'},
    'Pingüino emperador': {type:'Ave marina', habitat:'Hielo marino y océano alrededor de la Antártida.', region:'Antártida.', diet:'Peces, kril y calamares.', power:'Forma grupos muy compactos para conservar calor durante el invierno antártico.'},
    'Liebre ártica': {type:'Mamífero', habitat:'Tundra fría, costas y terrenos rocosos.', region:'Regiones árticas de Norteamérica y Groenlandia.', diet:'Plantas leñosas, brotes, hojas y hierbas.', power:'Sus patas grandes funcionan como “raquetas” sobre la nieve.'},
    'Zorro ártico': {type:'Mamífero', habitat:'Tundra ártica y costas frías.', region:'Regiones circumpolares del Ártico.', diet:'Lemmings, aves, huevos, peces y carroña.', power:'Su pelaje extremadamente denso cambia de aspecto con las estaciones en muchas poblaciones.'},
    'Pangolín': {type:'Mamífero', habitat:'Bosques, sabanas y matorrales.', region:'África y Asia, según la especie.', diet:'Hormigas y termitas.', power:'Es el único mamífero cubierto por grandes escamas de queratina y puede enrollarse como defensa.'},
    'Picozapato': {type:'Ave', habitat:'Pantanos, marismas y humedales con vegetación alta.', region:'África tropical oriental y central.', diet:'Peces grandes, anfibios y otros animales acuáticos.', power:'Su enorme pico le permite capturar presas grandes en aguas poco profundas.'},
    'Dragón de Komodo': {type:'Reptil · lagarto', habitat:'Bosques secos, sabanas y zonas de matorral.', region:'Varias islas de Indonesia.', diet:'Ciervos, jabalíes, carroña y otros animales.', power:'Es el lagarto vivo más grande del planeta.'},
    'Casuario': {type:'Ave no voladora', habitat:'Selvas tropicales húmedas.', region:'Nueva Guinea, islas cercanas y noreste de Australia.', diet:'Principalmente frutos; también pequeños animales y hongos.', power:'Tiene patas muy fuertes y un casco prominente sobre la cabeza.'},
    'Tardígrado': {type:'Animal microscópico · invertebrado', habitat:'Películas de agua en musgos, líquenes y suelos húmedos; también existen especies de agua dulce y marinas.', region:'Se encuentran en ambientes de todo el planeta, incluso en regiones extremas.', diet:'Depende de la especie: algunas perforan células de algas o plantas y otras comen microorganismos o pequeños animales.', power:'Tiene ocho patas y puede entrar en un estado de latencia llamado “tun” cuando el ambiente se vuelve muy seco o extremo.', size:'Normalmente mide menos de 1 milímetro.', note:'También lo llaman “oso de agua”.'},
    'Atlas Animal': {type:'Ecosistema conectado', habitat:'Todos los hábitats recuperados durante la expedición.', region:'Planeta Tierra.', diet:'No es un animal: representa la red de vida del planeta.', power:'Recordar que cada especie depende de su ambiente y se relaciona con otras formas de vida.'}
  };

  const missions = [
    // CAPÍTULO 1 — entender la división desde acciones diferentes
    {
      w:0,type:'share',challengeLabel:'REPARTIR',title:'El primer código',
      story:'Dos geckos llegaron al campamento. El Atlas necesita que repartas su alimento sin dejar a ninguno atrás.',
      prompt:'Reparte 6 insectos entre 2 geckos por partes iguales.',
      total:6,groups:2,emoji:'🦗',group:'Gecko',animal:'Gecko',animalEmoji:'🦎',
      hint:'Da un insecto a cada gecko por turnos.',reward:'6 ÷ 2 = 3.',
      feedbackRule:'al dividir, repartimos una cantidad en grupos iguales',
      feedbackAction:'Aquí tomaste 6 insectos y necesitabas dividirlos entre 2 geckos. Fuiste repartiendo hasta que cada gecko quedó con 3.',
      teaser:'En la siguiente misión volverás a repartir, pero será la última vez seguida. Después el Atlas cambiará la forma del reto.',
      fact:'Los geckos pueden trepar superficies gracias a estructuras microscópicas en sus dedos.'
    },
    {
      w:0,type:'share',challengeLabel:'REPARTIR',title:'La merienda del panda rojo',
      story:'Un puente de bambú solo se abrirá si los dos pandas reciben exactamente lo mismo.',
      prompt:'Reparte 8 trozos de bambú entre 2 pandas rojos.',
      total:8,groups:2,emoji:'🎋',group:'Panda',animal:'Panda rojo',animalEmoji:'🦝',
      hint:'Alterna: uno aquí, uno allá, hasta terminar.',reward:'8 ÷ 2 = 4.',
      feedbackRule:'al dividir, todos los grupos deben quedar con la misma cantidad',
      feedbackAction:'Aquí tenías 8 trozos de bambú y necesitabas dividirlos entre 2 pandas. Al terminar, cada panda recibió 4 trozos.',
      teaser:'Ahora cambia el juego: no vas a repartir nada. Tendrás que descubrir cuál reparto ya está bien hecho.',
      fact:'El panda rojo pasa mucho tiempo en los árboles y usa su larga cola para mantener el equilibrio.'
    },
    {
      w:0,type:'distributionChoice',challengeLabel:'ENCUENTRA EL REPARTO',title:'Ranas bajo la lluvia',
      story:'Tres ranas de cristal encontraron tres repartos diferentes. Solo uno mantiene el equilibrio del bosque.',
      prompt:'¿Cuál reparto representa 9 insectos divididos entre 3 ranas por partes iguales?',
      total:9,groups:3,emoji:'🪰',group:'Rana',animal:'Rana de cristal',animalEmoji:'🐸',
      options:[
        {id:'A',groups:[4,3,2]},
        {id:'B',groups:[3,3,3]},
        {id:'C',groups:[2,4,3]}
      ],correct:'B',hint:'Busca la opción donde las 3 ranas tengan exactamente la misma cantidad.',reward:'9 ÷ 3 = 3.',
      feedbackRule:'al dividir, un reparto correcto deja todos los grupos iguales',
      feedbackAction:'Aquí no tuviste que mover los 9 insectos. Reconociste que 3, 3 y 3 era el único reparto donde las 3 ranas quedaban iguales.',
      teaser:'La próxima misión tendrá un grupo incompleto. Tu reto será descubrir qué le falta.',
      fact:'Algunas ranas de cristal tienen la piel del vientre tan transparente que se pueden ver órganos internos.'
    },
    {
      w:0,type:'completeGroup',challengeLabel:'COMPLETA EL GRUPO',title:'Hojas para los perezosos',
      story:'Tres perezosos necesitan la misma cantidad de hojas. Dos grupos ya están completos, pero uno quedó a medias.',
      prompt:'Dos perezosos tienen 4 hojas cada uno. El tercero tiene 2. ¿Cuántas hojas le faltan para quedar igual?',
      total:12,groups:3,target:4,preview:[4,4,2],answers:[1,2,3],correct:2,emoji:'🍃',group:'Perezoso',animal:'Perezoso',animalEmoji:'🦥',
      hint:'Mira los grupos que ya tienen 4. ¿Cuántas faltan para que 2 llegue a 4?',reward:'12 ÷ 3 = 4.',
      feedbackRule:'al dividir, cada grupo debe alcanzar la misma cantidad',
      feedbackAction:'Aquí viste que dos perezosos tenían 4 hojas y uno solo tenía 2. Descubriste que necesitaba 2 hojas más para que los 3 grupos quedaran en 4.',
      teaser:'En la siguiente misión NOVA hará un reparto con un error. Tú tendrás que detectarlo.',
      fact:'Los perezosos se mueven lentamente y gran parte de su vida transcurre en los árboles.'
    },
    {
      w:0,type:'findError',challengeLabel:'DETECTA EL ERROR',title:'El desayuno de los tucanes',
      story:'NOVA intentó repartir los frutos de los tucanes, pero el Atlas detectó que algo quedó desequilibrado.',
      prompt:'Cada tucán debería tener 5 frutos. ¿Cuál tucán recibió 1 fruto de más?',
      total:15,groups:3,target:5,preview:[5,6,4],correct:1,emoji:'🫐',group:'Tucán',animal:'Tucán',animalEmoji:'🦜',
      hint:'Compara cada grupo con 5. Busca el que llegó a 6.',reward:'15 ÷ 3 = 5.',
      feedbackRule:'al dividir, podemos comprobar el reparto comparando cada grupo con la cantidad que debería tener',
      feedbackAction:'Aquí sabías que cada tucán debía tener 5 frutos. Detectaste que uno tenía 6, así que ese reparto todavía no estaba equilibrado.',
      teaser:'El último reto del bosque será distinto: verás el total y los grupos, pero tendrás que descubrir cuánto corresponde a cada uno.',
      fact:'El gran pico del tucán es ligero porque contiene una estructura interna parecida a una espuma ósea.'
    },
    {
      w:0,type:'groupSize',challengeLabel:'DESCUBRE CUÁNTO TOCA',title:'La puerta de cuatro huellas',
      story:'Cuatro coatíes rodean la salida del bosque. Esta vez el Atlas no quiere que muevas cada fruto uno por uno.',
      prompt:'Hay 16 frutos y 4 coatíes. Si todos reciben lo mismo, ¿cuántos frutos le corresponden a cada uno?',
      total:16,groups:4,answers:[3,4,5,6],correct:4,emoji:'🍇',group:'Coatí',animal:'Coatí',animalEmoji:'🐾',
      hint:'Piensa en 4 grupos iguales que juntos formen 16.',reward:'16 ÷ 4 = 4. ¡Primer mundo recuperado!',
      feedbackRule:'al dividir, el resultado nos dice cuánto le corresponde a cada grupo',
      feedbackAction:'Aquí tenías 16 frutos y 4 coatíes. Sin mover cada fruto, descubriste que 4 para cada coatí forma exactamente los 16.',
      teaser:'Bosque recuperado. En los Ríos Secretos empezarás a conectar los dibujos con el símbolo ÷.',
      fact:'Los coatíes usan su hocico flexible para buscar alimento entre hojas y suelo.'
    },

    // CAPÍTULO 2 — conectar representaciones, corregir y pasar a números
    {
      w:1,type:'representationChoice',challengeLabel:'UNE DIBUJO Y DIVISIÓN',title:'Señal del ajolote',
      story:'Una luz aparece bajo el agua. El ajolote encontró el símbolo 12 ÷ 3, pero necesita saber qué dibujo representa esa idea.',
      prompt:'¿Cuál dibujo representa 12 dividido entre 3 grupos iguales?',
      total:12,groups:3,equation:[12,3,4],emoji:'🦐',animal:'Ajolote',animalEmoji:'🦎',
      options:[
        {id:'A',groups:[4,4,4]},
        {id:'B',groups:[3,3,3]},
        {id:'C',groups:[5,4,3]}
      ],correct:'A',hint:'12 ÷ 3 significa formar 3 grupos iguales usando los 12 objetos.',reward:'12 ÷ 3 = 4.',
      feedbackRule:'al dividir, el símbolo ÷ representa el mismo reparto en grupos iguales que ya aprendiste a hacer',
      feedbackAction:'Aquí viste 12 ÷ 3 y elegiste el dibujo con 3 grupos de 4. El dibujo y la operación estaban contando exactamente la misma historia.',
      teaser:'Ahora el Atlas hará la pregunta al revés: ya conocerás cuánto quedó en cada grupo y deberás descubrir el total.',
      fact:'El ajolote puede regenerar partes de su cuerpo y conserva rasgos larvarios durante su vida.'
    },
    {
      w:1,type:'reverseTotal',challengeLabel:'PIENSA AL REVÉS',title:'El ornitorrinco curioso',
      story:'Dos ornitorrincos ya terminaron de repartir su alimento. El Atlas borró el número que decía cuántos bocados había al inicio.',
      prompt:'Hay 2 ornitorrincos y cada uno terminó con 5 bocados. ¿Cuántos bocados había antes de repartir?',
      groups:2,each:5,answers:[8,10,12],correct:10,emoji:'🪱',group:'Ornitorrinco',animal:'Ornitorrinco',animalEmoji:'🦆',
      hint:'Junta los dos grupos de 5: 5 + 5.',reward:'10 ÷ 2 = 5.',
      feedbackRule:'al dividir, también puedes comprobar la respuesta juntando otra vez los grupos',
      feedbackAction:'Aquí viste 2 grupos de 5 y descubriste que juntos forman 10. Eso confirma que si 10 se divide entre 2, a cada grupo le corresponden 5.',
      teaser:'La siguiente misión tendrá un reparto casi correcto. Solo tendrás que hacer un movimiento para equilibrarlo.',
      fact:'El ornitorrinco es un mamífero que pone huevos.'
    },
    {
      w:1,type:'balance',challengeLabel:'EQUILIBRA EL REPARTO',title:'Nutrias en equipo',
      story:'Cinco nutrias recibieron peces, pero una ola movió uno de lugar. El reparto quedó 4, 4, 3, 4 y 5.',
      prompt:'¿Qué movimiento deja a las 5 nutrias con 4 peces cada una?',
      total:20,groups:5,target:4,preview:[4,4,3,4,5],emoji:'🐟',group:'Nutria',animal:'Nutria marina',animalEmoji:'🦦',
      actions:[
        {id:'A',label:'Mover 1 pez de la nutria 5 a la nutria 3'},
        {id:'B',label:'Mover 1 pez de la nutria 1 a la nutria 2'},
        {id:'C',label:'Dar 1 pez más a la nutria 5'}
      ],correct:'A',hint:'Busca una nutria que tenga 1 de más y otra que tenga 1 de menos.',reward:'20 ÷ 5 = 4.',
      feedbackRule:'al dividir, puedes corregir un reparto hasta que todos los grupos tengan la misma cantidad',
      feedbackAction:'Aquí el reparto casi estaba listo: una nutria tenía 5 y otra 3. Moviste 1 pez de la que tenía de más a la que tenía de menos y todas quedaron con 4.',
      teaser:'Ahora aparecerá una historia. Tendrás que descubrir qué división se esconde dentro de ella.',
      fact:'Las nutrias marinas pueden usar piedras como herramientas para abrir alimento con caparazón.'
    },
    {
      w:1,type:'storyChoice',challengeLabel:'RESUELVE EL MISTERIO',title:'Delfines rosados',
      story:'Tres delfines rosados encontraron 18 peces y entraron en tres túneles distintos. Para abrir el paso, cada túnel debe recibir la misma cantidad.',
      prompt:'Si los 18 peces se reparten entre 3 delfines por igual, ¿cuántos recibe cada uno?',
      total:18,groups:3,answers:[5,6,7,9],correct:6,emoji:'🐟',group:'Delfín',animal:'Delfín rosado',animalEmoji:'🐬',
      hint:'La historia dice 18 en total y 3 grupos iguales. Eso es 18 ÷ 3.',reward:'18 ÷ 3 = 6.',
      feedbackRule:'al dividir, una historia puede esconder el total y la cantidad de grupos',
      feedbackAction:'Aquí la historia te dio 18 peces y 3 delfines. Reconociste que debías repartir 18 entre 3 y descubriste que a cada uno le correspondían 6.',
      teaser:'El siguiente código aparecerá casi sin dibujos. Vas a usar todo lo que ya entendiste para resolverlo con números.',
      fact:'El delfín del Amazonas puede presentar tonos rosados y vive en sistemas de agua dulce sudamericanos.'
    },
    {
      w:1,type:'equation',challengeLabel:'CÓDIGO NUMÉRICO',title:'La piedra del capibara',
      story:'El capibara encontró una piedra con un código escrito solo con números. Ya no hay que mover todos los objetos para entenderlo.',
      prompt:'Elige el resultado correcto para abrir el paso.',equation:[24,6,4],answers:[3,4,5,6],animal:'Capibara',animalEmoji:'🦫',
      hint:'Imagina 24 objetos repartidos en 6 grupos iguales. También puedes pensar: 6 × ¿qué número? = 24.',reward:'24 ÷ 6 = 4.',
      feedbackRule:'al dividir, puedes usar la idea de grupos iguales aunque ya no veas todos los objetos',
      feedbackAction:'Aquí resolviste 24 ÷ 6 usando números. La lógica seguía siendo la misma: 24 repartido en 6 grupos deja 4 en cada grupo.',
      teaser:'Se acerca el Guardián del Río. La última misión mezclará dibujos, símbolo ÷ y resultado en un solo desafío.',
      fact:'El capibara es el roedor vivo más grande del mundo y está muy adaptado a la vida cerca del agua.'
    },
    {
      w:1,type:'boss',challengeLabel:'GUARDIÁN DEL MUNDO',title:'La compuerta del manatí',
      story:'Una enorme compuerta bloquea el río. El manatí activó tres cerraduras: reparto, operación y resultado. Emiliano debe conectar las tres.',
      prompt:'Supera las 3 cerraduras del Guardián del Río.',equation:[28,4,7],total:28,groups:4,animal:'Manatí',animalEmoji:'🦭',
      boss:{
        distributions:[
          {id:'A',groups:[8,7,7,6]},
          {id:'B',groups:[7,7,7,7]},
          {id:'C',groups:[6,8,7,7]}
        ],
        operations:[
          {id:'A',label:'28 ÷ 4'},
          {id:'B',label:'28 × 4'},
          {id:'C',label:'28 − 4'}
        ],
        results:[5,6,7,8],
        correct:{distribution:'B',operation:'A',result:7}
      },
      hint:'Primero busca 4 grupos iguales. Después elige la operación que significa repartir 28 entre 4.',reward:'28 ÷ 4 = 7. ¡Los Ríos Secretos están conectados!',
      feedbackRule:'al dividir, la situación, los grupos, el símbolo ÷ y el resultado representan la misma idea',
      feedbackAction:'Aquí conectaste tres cosas: 28 objetos en 4 grupos iguales, la operación 28 ÷ 4 y el resultado 7. Las tres formas describen el mismo reparto.',
      teaser:'Ríos Secretos recuperados. El Océano Profundo te espera con códigos nuevos y criaturas cada vez más extrañas.',
      fact:'Los manatíes son mamíferos acuáticos herbívoros y pasan gran parte del día alimentándose.'
    },

    // CAPÍTULO 3 — símbolo división y tablas 2-6
    {w:2,type:'equation',title:'Luces en la oscuridad',story:'El submarino desciende. Un pulpo Dumbo aparece donde casi no llega la luz.',prompt:'Descifra 14 ÷ 2.',equation:[14,2,7],answers:[5,6,7,8],animal:'Pulpo Dumbo',animalEmoji:'🐙',hint:'La mitad de 14 es...',reward:'14 ÷ 2 = 7.',fact:'Los pulpos Dumbo viven a grandes profundidades y reciben su apodo por sus aletas parecidas a orejas.'},
    {w:2,type:'equation',title:'La medusa luminosa',story:'Una medusa ilumina tres caminos. Solo uno conduce al siguiente código.',prompt:'Resuelve 21 ÷ 3.',equation:[21,3,7],answers:[6,7,8,9],animal:'Medusa',animalEmoji:'🪼',hint:'3 × 7 = ¿?',reward:'21 ÷ 3 = 7.',fact:'Muchas medusas se desplazan contrayendo y relajando su campana gelatinosa.'},
    {w:2,type:'equation',title:'El guardián yeti',story:'Junto a una fuente caliente del fondo marino aparece un extraño cangrejo cubierto de filamentos.',prompt:'Resuelve 32 ÷ 4.',equation:[32,4,8],answers:[6,7,8,9],animal:'Cangrejo yeti',animalEmoji:'🦀',hint:'4 × ¿qué número? = 32.',reward:'32 ÷ 4 = 8.',fact:'El cangrejo yeti vive cerca de fuentes hidrotermales y posee abundantes filamentos en sus pinzas.'},
    {w:2,type:'equation',title:'El gigante del fondo',story:'Un isópodo gigante pasa lentamente junto al casco del submarino.',prompt:'Resuelve 35 ÷ 5.',equation:[35,5,7],answers:[5,6,7,8],animal:'Isópodo gigante',animalEmoji:'🪲',hint:'Cuenta de 5 en 5 hasta llegar a 35.',reward:'35 ÷ 5 = 7.',fact:'Los isópodos gigantes son parientes marinos de las cochinillas de humedad y viven en aguas profundas.'},
    {w:2,type:'equation',title:'Sombra de tiburón',story:'Una silueta con hocico largo cruza la oscuridad: es un tiburón duende.',prompt:'Resuelve 42 ÷ 6.',equation:[42,6,7],answers:[6,7,8,9],animal:'Tiburón duende',animalEmoji:'🦈',hint:'6 × 7 = 42.',reward:'42 ÷ 6 = 7.',fact:'El tiburón duende posee mandíbulas que pueden proyectarse rápidamente hacia adelante para capturar presas.'},
    {w:2,type:'equation',title:'El calamar vampiro',story:'El último portal del océano pulsa con una luz roja. Un calamar vampiro flota frente a él.',prompt:'Resuelve 48 ÷ 6.',equation:[48,6,8],answers:[6,7,8,9],animal:'Calamar vampiro',animalEmoji:'🦑',hint:'¿Cuántas veces cabe 6 en 48?',reward:'48 ÷ 6 = 8. ¡Océano Profundo restaurado!',fact:'El calamar vampiro vive en zonas del océano con muy poco oxígeno y no es realmente un vampiro.'},

    // CAPÍTULO 4 — tablas 7,8,9
    {w:3,type:'equation',title:'El zorro de grandes orejas',story:'El aire caliente mueve la arena. Un fénec escucha algo debajo de las dunas.',prompt:'Resuelve 56 ÷ 7.',equation:[56,7,8],answers:[6,7,8,9],animal:'Fénec',animalEmoji:'🦊',hint:'7 × 8 = 56.',reward:'56 ÷ 7 = 8.',fact:'Las grandes orejas del fénec ayudan a detectar sonidos y también a disipar calor.'},
    {w:3,type:'equation',title:'La ruta del saiga',story:'Una manada cruza la llanura. Su nariz parece de otro planeta.',prompt:'Resuelve 63 ÷ 7.',equation:[63,7,9],answers:[7,8,9,10],animal:'Saiga',animalEmoji:'🐐',hint:'7 × 9 = 63.',reward:'63 ÷ 7 = 9.',fact:'El saiga tiene una nariz grande y flexible que ayuda a filtrar polvo y acondicionar el aire.'},
    {w:3,type:'equation',title:'Pasos en la arena',story:'Un lagarto espinoso deja un patrón de ocho huellas cerca de una roca brillante.',prompt:'Resuelve 64 ÷ 8.',equation:[64,8,8],answers:[6,7,8,9],animal:'Diablo espinoso',animalEmoji:'🦎',hint:'8 × 8 = 64.',reward:'64 ÷ 8 = 8.',fact:'El diablo espinoso australiano puede conducir agua por canales microscópicos entre sus escamas hacia la boca.'},
    {w:3,type:'equation',title:'El corredor nocturno',story:'Cuando cae la noche, un pequeño jerbo salta entre las piedras del desierto.',prompt:'Resuelve 72 ÷ 8.',equation:[72,8,9],answers:[7,8,9,10],animal:'Jerbo',animalEmoji:'🐭',hint:'8 × 9 = 72.',reward:'72 ÷ 8 = 9.',fact:'Los jerbos tienen patas traseras largas adaptadas para desplazarse a saltos.'},
    {w:3,type:'equation',title:'La serpiente lateral',story:'Una serpiente avanza de lado para moverse sobre la arena suelta.',prompt:'Resuelve 81 ÷ 9.',equation:[81,9,9],answers:[7,8,9,10],animal:'Sidewinder',animalEmoji:'🐍',hint:'9 × 9 = 81.',reward:'81 ÷ 9 = 9.',fact:'Algunas víboras del desierto usan un movimiento lateral que reduce el contacto con la arena caliente.'},
    {w:3,type:'equation',title:'El arco de piedra',story:'Una enorme puerta emerge entre las dunas. Es la salida del cuarto mundo.',prompt:'Resuelve 90 ÷ 9.',equation:[90,9,10],answers:[8,9,10,11],animal:'Órix',animalEmoji:'🦌',hint:'9 × 10 = 90.',reward:'90 ÷ 9 = 10. ¡Desierto superado!',fact:'Los órix están adaptados a ambientes secos y pueden soportar largos periodos con poca agua disponible.'},

    // CAPÍTULO 5 — números mayores
    {w:4,type:'equation',title:'Huellas sobre la nieve',story:'Una sombra cruza una pendiente imposible. Es un leopardo de las nieves.',prompt:'Resuelve 84 ÷ 7.',equation:[84,7,12],answers:[10,11,12,13],animal:'Leopardo de las nieves',animalEmoji:'🐆',hint:'7 × 12 = 84.',reward:'84 ÷ 7 = 12.',fact:'El leopardo de las nieves tiene una cola muy larga que le ayuda con el equilibrio y puede usarla como abrigo.'},
    {w:4,type:'equation',title:'El buey de la tormenta',story:'El viento se vuelve más fuerte. Un buey almizclero permanece firme frente a la nieve.',prompt:'Resuelve 96 ÷ 8.',equation:[96,8,12],answers:[10,11,12,13],animal:'Buey almizclero',animalEmoji:'🐂',hint:'8 × 12 = 96.',reward:'96 ÷ 8 = 12.',fact:'Los bueyes almizcleros poseen un pelaje muy denso que los protege del frío intenso.'},
    {w:4,type:'equation',title:'El búho silencioso',story:'Un búho nival aterriza junto a una baliza congelada del Atlas.',prompt:'Resuelve 108 ÷ 9.',equation:[108,9,12],answers:[10,11,12,13],animal:'Búho nival',animalEmoji:'🦉',hint:'9 × 12 = 108.',reward:'108 ÷ 9 = 12.',fact:'El búho nival tiene plumaje claro que le ayuda a camuflarse en paisajes nevados.'},
    {w:4,type:'equation',title:'La colonia de pingüinos',story:'Una fila de pingüinos emperador protege una cápsula matemática del viento.',prompt:'Resuelve 120 ÷ 10.',equation:[120,10,12],answers:[10,11,12,14],animal:'Pingüino emperador',animalEmoji:'🐧',hint:'Dividir entre 10 puede ayudarte a pensar cuántas decenas hay.',reward:'120 ÷ 10 = 12.',fact:'Los pingüinos emperador forman grupos compactos para conservar calor durante condiciones extremas.'},
    {w:4,type:'equation',title:'La liebre blanca',story:'Una liebre cambia de dirección sobre el hielo y deja once marcas junto al código.',prompt:'Resuelve 121 ÷ 11.',equation:[121,11,11],answers:[9,10,11,12],animal:'Liebre ártica',animalEmoji:'🐇',hint:'11 × 11 = 121.',reward:'121 ÷ 11 = 11.',fact:'La liebre ártica tiene patas grandes y pelaje grueso que la ayudan a vivir en regiones frías.'},
    {w:4,type:'equation',title:'La bóveda de hielo',story:'El glaciar se abre y revela el acceso al Santuario Perdido.',prompt:'Resuelve 132 ÷ 11.',equation:[132,11,12],answers:[10,11,12,13],animal:'Zorro ártico',animalEmoji:'🦊',hint:'11 × 12 = 132.',reward:'132 ÷ 11 = 12. ¡Tierras Heladas recuperadas!',fact:'El zorro ártico cambia el grosor de su pelaje según la estación y está muy adaptado al frío.'},

    // CAPÍTULO 6 — desafío final divisores mayores
    {w:5,type:'equation',title:'La armadura viviente',story:'Dentro del Santuario aparece un pangolín. Sus escamas reflejan símbolos del Atlas.',prompt:'Resuelve 144 ÷ 12.',equation:[144,12,12],answers:[10,11,12,13],animal:'Pangolín',animalEmoji:'🦔',hint:'12 × 12 = 144.',reward:'144 ÷ 12 = 12.',fact:'Los pangolines son mamíferos cubiertos de escamas de queratina y pueden enrollarse para protegerse.'},
    {w:5,type:'equation',title:'El ave de mirada seria',story:'Un picozapato bloquea una pasarela antigua y observa el siguiente código.',prompt:'Resuelve 156 ÷ 12.',equation:[156,12,13],answers:[11,12,13,14],animal:'Picozapato',animalEmoji:'🦤',hint:'12 × 13 = 156.',reward:'156 ÷ 12 = 13.',fact:'El picozapato es un ave de humedales africanos conocida por su enorme pico en forma de zapato.'},
    {w:5,type:'equation',title:'El guardián de Komodo',story:'Un dragón de Komodo descansa frente a una puerta de piedra marcada con treces.',prompt:'Resuelve 169 ÷ 13.',equation:[169,13,13],answers:[11,12,13,14],animal:'Dragón de Komodo',animalEmoji:'🦎',hint:'13 × 13 = 169.',reward:'169 ÷ 13 = 13.',fact:'El dragón de Komodo es el lagarto vivo más grande del mundo.'},
    {w:5,type:'equation',title:'El casuario del corredor',story:'Un casuario cruza rápidamente un corredor cubierto de hojas metálicas.',prompt:'Resuelve 180 ÷ 12.',equation:[180,12,15],answers:[12,13,14,15],animal:'Casuario',animalEmoji:'🐦',hint:'12 × 15 = 180.',reward:'180 ÷ 12 = 15.',fact:'El casuario es un ave no voladora con patas fuertes y un casco prominente sobre la cabeza.'},
    {w:5,type:'equation',title:'La criatura diminuta',story:'Emiliano reconoce la criatura de inmediato: hace unos días estuvo hablando del tardígrado. El Atlas activa el modo microscopio y lo convierte en el guardián del penúltimo código.',prompt:'Resuelve 196 ÷ 14.',equation:[196,14,14],answers:[12,13,14,15],animal:'Tardígrado',animalEmoji:'🔬',hint:'14 × 14 = 196.',reward:'196 ÷ 14 = 14.',fact:'El tardígrado, también llamado oso de agua, es un animal microscópico de ocho patas. Muchas especies pueden entrar en un estado de latencia llamado “tun” cuando pierden casi toda el agua de su cuerpo.'},
    {w:5,type:'equation',title:'El corazón del Atlas',story:'Todas las criaturas aparecen alrededor del núcleo. Solo falta un código. Emiliano, este es el final de la expedición.',prompt:'Resuelve el último código: 225 ÷ 15.',equation:[225,15,15],answers:[12,13,14,15],animal:'Atlas Animal',animalEmoji:'🌍',hint:'15 × 15 = 225.',reward:'225 ÷ 15 = 15. ¡El Atlas está completo!',fact:'Cada especie del planeta forma parte de una red de vida conectada con su ambiente y con otras especies.'}
  ];

  const SAVE_KEY = 'emilianoGameStateV2';

  function readSavedGame() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  const savedGame = readSavedGame();
  let soundOn = savedGame?.soundOn ?? (localStorage.getItem('emilianoSound') !== 'off');
  let mission = Number(savedGame?.mission ?? localStorage.getItem('emilianoMission') ?? 0);
  if (!Number.isFinite(mission) || mission < 0 || mission >= missions.length) mission = 0;
  if (localStorage.getItem('emilianoUnlocked') === null) {
    localStorage.setItem('emilianoUnlocked', String(savedGame?.unlocked ?? mission));
  }
  let selectedCreature = null;
  let selectedAnswer = null;
  let attemptCount = 0;
  let tutorRequestId = 0;
  let feedbackRequestId = 0;
  let tutorHistory = [];
  let tutorBusy = false;
  let currentMissionCompleted = false;
  let gameCompleted = Boolean(savedGame?.gameCompleted);
  let mechanicState = {};
  let currentFeedback = '';

  function collectShareState() {
    const bank = $('#bank');
    if (!bank) return null;
    const bankIds = [...bank.children].map(el => Number(el.dataset.id));
    const groups = [...document.querySelectorAll('.zone-items')].map(zone =>
      [...zone.children].map(el => Number(el.dataset.id))
    );
    return { bankIds, groups };
  }

  function saveGameState() {
    const state = {
      version: 3,
      mission,
      unlocked: unlockedCount(),
      soundOn,
      introSeen: localStorage.getItem('emilianoIntroSeen') === 'yes',
      selectedAnswer,
      mechanicState,
      attemptCount,
      tutorHistory: tutorHistory.slice(-12),
      tutorOpen: !aiTutorCard.hidden,
      shareState: missions[mission]?.type === 'share' ? collectShareState() : null,
      currentMissionCompleted,
      currentFeedback,
      gameCompleted,
      savedAt: Date.now()
    };
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
      localStorage.setItem('emilianoMission', String(mission));
      localStorage.setItem('emilianoUnlocked', String(state.unlocked));
      localStorage.setItem('emilianoSound', soundOn ? 'on' : 'off');
    } catch {}
  }

  function clearCurrentMissionState() {
    selectedCreature = null;
    selectedAnswer = null;
    mechanicState = {};
    attemptCount = 0;
    tutorHistory = [];
    currentMissionCompleted = false;
    currentFeedback = '';
    gameCompleted = false;
  }

  missionTotal.textContent = missions.length;
  soundBtn.textContent = soundOn ? '🔊 Activado' : '🔇 Desactivado';
  soundBtn.setAttribute('aria-pressed', String(soundOn));

  function audioTone(freq = 440, duration = .08, type = 'sine', gain = .05, delay = 0) {
    if (!soundOn) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = audioTone.ctx || (audioTone.ctx = new AudioCtx());
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    const startAt = ctx.currentTime + delay;
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startAt);
    g.gain.setValueAtTime(gain, startAt);
    osc.connect(g).connect(ctx.destination);
    osc.start(startAt);
    g.gain.exponentialRampToValueAtTime(.0001, startAt + duration);
    osc.stop(startAt + duration);
  }

  function playSuccess() {
    [523, 659, 784, 1047].forEach((f, i) => audioTone(f, .22, 'sine', .055, i * .085));
  }
  function playStart() {
    [220, 330, 440, 660].forEach((f, i) => audioTone(f, .3, 'triangle', .04, i * .11));
  }
  function playTap() { audioTone(390, .05, 'triangle', .03); }
  function playOops() { audioTone(180, .10, 'sine', .02); }

  function showToast(msg, duration = 2100) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast.t);
    showToast.t = setTimeout(() => toast.classList.remove('show'), duration);
  }

  function openApp(withSound = true) {
    if (withSound) playStart();
    intro.classList.add('intro-exit');
    setTimeout(() => {
      intro.hidden = true;
      app.hidden = false;
      renderMission();
      window.scrollTo(0, 0);
    }, 420);
    localStorage.setItem('emilianoIntroSeen', 'yes');
    saveGameState();
  }

  function currentWorldIndex() { return missions[mission].w; }

  function profileFor(m) {
    return animalProfiles[m.animal] || {type:'Animal', habitat:'Hábitat por descubrir.', region:'', diet:'Alimentación por descubrir.', power:m.fact || 'Cada especie tiene adaptaciones especiales.'};
  }

  function animalVisualMarkup(m, extraClass = '') {
    if (m.animal === 'Tardígrado') {
      return `<span class="tardigrade-art ${extraClass}" role="img" aria-label="Ilustración de un tardígrado">
        <svg viewBox="0 0 180 120" aria-hidden="true">
          <defs><linearGradient id="tg" x1="0" x2="1"><stop stop-color="#ffd27b"/><stop offset="1" stop-color="#ff8fb7"/></linearGradient></defs>
          <g fill="none" stroke="url(#tg)" stroke-width="11" stroke-linecap="round">
            <path d="M48 40 L24 18 M43 55 L18 54 M50 73 L26 96 M79 80 L65 108 M112 78 L126 107 M137 66 L161 91 M139 48 L166 38 M124 34 L139 14"/>
          </g>
          <path d="M42 28 C70 6 126 14 145 44 C160 68 134 94 93 96 C53 98 25 77 30 54 C33 42 36 34 42 28Z" fill="url(#tg)"/>
          <path d="M61 33 C72 50 70 72 61 86 M92 24 C101 46 100 74 94 91 M122 30 C130 49 129 70 121 86" stroke="rgba(120,46,85,.35)" stroke-width="4" fill="none"/>
          <circle cx="54" cy="48" r="4" fill="#301b45"/><circle cx="72" cy="44" r="4" fill="#301b45"/>
        </svg>
      </span>`;
    }
    return `<span class="emoji-art ${extraClass}" role="img" aria-label="${m.animal}">${m.animalEmoji}</span>`;
  }

  function fillRewardProfile(m) {
    const p = profileFor(m);
    fieldAnimalName.textContent = m.animal;
    profileType.textContent = p.type;
    profileHabitat.textContent = p.habitat;
    profileDiet.textContent = p.diet;
    profilePower.textContent = p.power;
  }

  function showAnimalProfile(m) {
    const p = profileFor(m);
    animalModalTitle.textContent = m.animal;
    animalProfile.innerHTML = `
      <div class="profile-hero">
        <div class="profile-visual">${animalVisualMarkup(m, 'profile-art')}</div>
        <div><span class="profile-kicker">PERSONAJE DEL ATLAS</span><h3>${m.animal}</h3><p>${p.note || m.fact}</p></div>
      </div>
      <div class="profile-facts">
        <article><span>🧬 ¿QUÉ ES?</span><strong>${p.type}</strong></article>
        <article><span>📍 ¿DÓNDE VIVE?</span><strong>${p.habitat}</strong><small>${p.region || ''}</small></article>
        <article><span>🍽️ ¿QUÉ COME?</span><strong>${p.diet}</strong></article>
        <article><span>⚡ HABILIDAD ESPECIAL</span><strong>${p.power}</strong></article>
        ${p.size ? `<article><span>📏 TAMAÑO</span><strong>${p.size}</strong></article>` : ''}
      </div>
      <div class="math-link"><span>÷</span><div><small>LA REGLA DE LA EXPEDICIÓN</small><strong>Para seguir avanzando, Emiliano debe resolver el código de división de esta criatura.</strong></div></div>`;
    animalModal.hidden = false;
    document.body.classList.add('modal-open');
    playTap();
  }

  function unlockedCount() {
    return Math.max(0, Math.min(missions.length, Number(localStorage.getItem('emilianoUnlocked') || 0)));
  }

  function buildFieldGuide() {
    const unlocked = unlockedCount();
    guideProgress.innerHTML = `<strong>${unlocked} / ${missions.length}</strong><span>criaturas y archivos recuperados</span>`;
    fieldGuideGrid.innerHTML = '';
    missions.forEach((m, i) => {
      const open = i < unlocked;
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `guide-animal ${open ? 'unlocked' : 'locked'}`;
      card.disabled = !open;
      card.innerHTML = open
        ? `<div class="guide-animal-visual">${animalVisualMarkup(m)}</div><small>MISIÓN ${i+1}</small><strong>${m.animal}</strong><span>${profileFor(m).type}</span>`
        : `<div class="guide-lock">?</div><small>MISIÓN ${i+1}</small><strong>Por descubrir</strong><span>Resuelve la división</span>`;
      if (open) card.addEventListener('click', () => { guideModal.hidden = true; showAnimalProfile(m); });
      fieldGuideGrid.appendChild(card);
    });
  }

  function setProgress(extra = 0) {
    const completed = Math.min(mission + extra, missions.length);
    const pct = Math.round((completed / missions.length) * 100);
    progressBar.style.width = pct + '%';
    progressText.textContent = pct + '%';
  }

  function renderWorldHeader(m) {
    const w = worlds[m.w];
    const firstIndex = missions.findIndex(x => x.w === m.w);
    const inWorld = mission - firstIndex + 1;
    const count = missions.filter(x => x.w === m.w).length;
    worldIcon.textContent = w.icon;
    worldName.textContent = w.name;
    chapterText.textContent = `CAPÍTULO ${m.w + 1}`;
    worldProgress.textContent = `${inWorld}/${count}`;
    document.documentElement.style.setProperty('--world-accent', w.color);
  }

  function restoreSharingState(saved) {
    if (!saved?.shareState?.groups) return;
    const bank = $('#bank');
    if (!bank) return;
    saved.shareState.groups.forEach((ids, groupIndex) => {
      const target = document.querySelector(`.zone[data-group="${groupIndex}"] .zone-items`);
      if (!target) return;
      ids.forEach(id => {
        const creature = bank.querySelector(`.creature[data-id="${id}"]`);
        if (creature) target.appendChild(creature);
      });
    });
    updateZoneCounts();
  }

  function restoreGenericState(saved) {
    mechanicState = saved?.mechanicState && typeof saved.mechanicState === 'object' ? saved.mechanicState : {};
    selectedAnswer = saved?.selectedAnswer ?? null;

    document.querySelectorAll('[data-select-answer]').forEach(btn => {
      btn.classList.toggle('selected', String(btn.dataset.selectAnswer) === String(selectedAnswer));
    });

    document.querySelectorAll('[data-boss-kind]').forEach(btn => {
      const kind = btn.dataset.bossKind;
      btn.classList.toggle('selected', String(btn.dataset.bossValue) === String(mechanicState?.[kind] ?? ''));
    });
  }

  function restoreTutorState(saved) {
    tutorHistory = Array.isArray(saved?.tutorHistory) ? saved.tutorHistory.slice(-12) : [];
    resetTutorChat();
    tutorHistory.forEach(item => {
      if (item?.role === 'user' || item?.role === 'assistant') {
        appendTutorMessage(item.role === 'user' ? 'user' : 'assistant', String(item.content || ''));
      }
    });
    aiTutorCard.hidden = !(saved?.tutorOpen && tutorHistory.length);
  }

  function equationForMission(m) {
    if (Array.isArray(m.equation) && m.equation.length >= 3) return m.equation.slice(0, 3);
    if (Number.isFinite(m.total) && Number.isFinite(m.groups) && m.groups !== 0) {
      return [m.total, m.groups, m.total / m.groups];
    }
    if (Number.isFinite(m.groups) && Number.isFinite(m.each)) {
      return [m.groups * m.each, m.groups, m.each];
    }
    return null;
  }

  function fallbackMissionFeedback(m) {
    const eq = equationForMission(m);
    if (m.feedbackRule && m.feedbackAction) {
      const ending = eq ? ` Por eso, ${eq[0]} ÷ ${eq[1]} = ${eq[2]}.` : '';
      return `Recuerda que ${m.feedbackRule}. ${m.feedbackAction}${ending}`;
    }
    if (eq) {
      return `Recuerda que al dividir, buscamos cuánto corresponde a cada grupo cuando todos deben quedar iguales. Aquí resolviste ${eq[0]} ÷ ${eq[1]} y descubriste que quedan ${eq[2]} en cada grupo. Por eso, ${eq[0]} ÷ ${eq[1]} = ${eq[2]}.`;
    }
    return 'Recuerda que al dividir, necesitamos organizar una cantidad en grupos iguales y comprobar que todos queden equilibrados.';
  }

  function showMissionFeedback(text, { loading = false, status = 'IDEA CLAVE' } = {}) {
    novaFeedbackCard.classList.toggle('loading', loading);
    novaFeedbackStatus.textContent = status;
    novaFeedbackText.textContent = text;
  }

  function showNextTeaser(m) {
    const next = missions[mission + 1];
    if (!next) {
      nextTeaser.hidden = true;
      return;
    }
    nextTeaser.hidden = false;
    const teaser = m.teaser || `La siguiente misión es “${next.title}” con ${next.animal}.`;
    nextTeaser.innerHTML = `<span>LO QUE VIENE</span>${teaser}`;
  }

  function showSavedReward(saved = null) {
    const m = missions[mission];
    rewardCard.hidden = false;
    rewardEmoji.innerHTML = animalVisualMarkup(m, 'reward-art');
    rewardTitle.textContent = mission === missions.length - 1 ? '¡Último código recuperado, Emiliano!' : '¡Código recuperado, Emiliano!';
    rewardText.textContent = m.reward;
    animalFact.textContent = m.fact;
    fillRewardProfile(m);
    currentFeedback = saved?.currentFeedback || currentFeedback || fallbackMissionFeedback(m);
    showMissionFeedback(currentFeedback, { status: 'RECUERDA ESTO' });
    showNextTeaser(m);
    rewardNextBtn.textContent = mission === missions.length - 1 ? 'Completar el Atlas →' : 'Descubrir siguiente misión →';
    checkBtn.hidden = true;
    hintBtn.hidden = true;
    setProgress(1);
  }

  function renderMission({ restore = true } = {}) {
    const saved = restore ? readSavedGame() : null;
    const sameMission = saved && Number(saved.mission) === mission;
    selectedCreature = null;
    selectedAnswer = sameMission ? (saved.selectedAnswer ?? null) : null;
    mechanicState = sameMission && saved?.mechanicState ? saved.mechanicState : {};
    attemptCount = sameMission ? Number(saved.attemptCount || 0) : 0;
    currentMissionCompleted = Boolean(sameMission && saved.currentMissionCompleted);
    currentFeedback = sameMission ? String(saved.currentFeedback || '') : '';
    aiTutorCard.hidden = true;
    tutorHistory = [];
    resetTutorChat();
    aiStatus.textContent = 'LISTO';
    aiStatus.className = 'ai-status';
    rewardCard.hidden = true;
    finalCard.hidden = true;
    checkBtn.hidden = false;
    hintBtn.hidden = false;
    checkBtn.dataset.next = '';
    checkBtn.textContent = 'Comprobar';

    const m = missions[mission];
    renderWorldHeader(m);
    missionNumber.textContent = mission + 1;
    missionTitle.textContent = m.title;
    missionPrompt.textContent = m.prompt;
    storyLine.textContent = m.story;
    animalEmoji.innerHTML = animalVisualMarkup(m);
    animalName.textContent = m.animal;
    animalCardBtn.setAttribute('aria-label', `Conocer a ${m.animal}`);
    setProgress();

    renderChallenge(m);

    if (sameMission) {
      if (m.type === 'share') restoreSharingState(saved);
      else restoreGenericState(saved);
      restoreTutorState(saved);
      if (currentMissionCompleted) showSavedReward(saved);
      if (saved.gameCompleted && mission === missions.length - 1) {
        gameCompleted = true;
        completeGame(false);
      }
    }
    saveGameState();
  }

  function makeCreature(emoji, i) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'creature';
    b.textContent = emoji;
    b.dataset.id = String(i);
    b.setAttribute('aria-label', 'Objeto ' + (i + 1));
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      playTap();
      document.querySelectorAll('.creature.selected').forEach(x => x.classList.remove('selected'));
      selectedCreature = b;
      b.classList.add('selected');
      saveGameState();
    });
    return b;
  }

  function renderSharing(m) {
    gameArea.innerHTML = `${renderMechanicIntro(m)}<p class="instruction">Toca un objeto y luego toca el animal que debe recibirlo.</p>`;
    const bankWrap = document.createElement('div');
    bankWrap.className = 'bank-wrap';
    bankWrap.innerHTML = '<span class="bank-label">Objetos por repartir</span>';
    const bank = document.createElement('div');
    bank.className = 'creature-bank';
    bank.id = 'bank';
    for (let i = 0; i < m.total; i++) bank.appendChild(makeCreature(m.emoji, i));
    bankWrap.appendChild(bank);

    const zones = document.createElement('div');
    zones.className = 'zones';
    zones.style.setProperty('--group-count', Math.min(m.groups, 5));
    for (let i = 0; i < m.groups; i++) {
      const zone = document.createElement('div');
      zone.className = 'zone';
      zone.tabIndex = 0;
      zone.setAttribute('role', 'button');
      zone.dataset.group = i;
      zone.innerHTML = `<div class="zone-head"><span class="zone-animal">${m.animalEmoji}</span><strong>${m.group} ${i + 1}</strong></div><div class="zone-items"></div><span class="zone-count">0</span>`;
      const place = () => {
        if (!selectedCreature) { showToast('Primero toca uno de los objetos ✨'); return; }
        playTap();
        zone.querySelector('.zone-items').appendChild(selectedCreature);
        selectedCreature.classList.remove('selected');
        selectedCreature = null;
        updateZoneCounts();
        saveGameState();
      };
      zone.addEventListener('click', place);
      zone.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          place();
        }
      });
      zones.appendChild(zone);
    }
    gameArea.append(bankWrap, zones);
  }

  function updateZoneCounts() {
    document.querySelectorAll('.zone').forEach(zone => {
      zone.querySelector('.zone-count').textContent = zone.querySelector('.zone-items').children.length;
    });
  }

  function selectSingle(container, button, value) {
    playTap();
    container.querySelectorAll('[data-select-answer]').forEach(x => x.classList.remove('selected'));
    button.classList.add('selected');
    selectedAnswer = value;
    saveGameState();
  }

  function itemsMarkup(count, emoji) {
    return Array.from({ length: Math.max(0, Number(count) || 0) }, () => `<span>${emoji}</span>`).join('');
  }

  function miniGroupsMarkup(counts, m) {
    return `<div class="mini-groups" style="--mini-count:${Math.min(counts.length, 5)}">${counts.map((count, i) => `
      <div class="mini-group">
        <span class="mini-animal">${m.animalEmoji}</span>
        <div class="mini-items">${itemsMarkup(count, m.emoji || '●')}</div>
        <span class="mini-count">${count}</span>
      </div>`).join('')}</div>`;
  }

  function renderMechanicIntro(m, question = m.prompt) {
    return `<div class="mechanic-kicker">⚡ ${m.challengeLabel || 'DESAFÍO DEL ATLAS'}</div><p class="mechanic-question">${question}</p>`;
  }

  function renderEquation(m) {
    const [a,b] = m.equation;
    gameArea.innerHTML = `
      ${renderMechanicIntro(m, 'Elige el número que completa el código.')}
      <div class="code-console">
        <span class="console-dot"></span><span class="console-dot"></span><span class="console-dot"></span>
        <small>CÓDIGO DEL ATLAS</small>
        <div class="equation" aria-label="${a} dividido entre ${b}">
          <span>${a}</span><span class="operator">÷</span><span>${b}</span><span>=</span><span class="question">?</span>
        </div>
      </div>
      <div class="answer-grid"></div>`;
    const grid = gameArea.querySelector('.answer-grid');
    m.answers.forEach(n => {
      const bttn = document.createElement('button');
      bttn.type = 'button';
      bttn.className = 'answer-btn';
      bttn.textContent = n;
      bttn.dataset.selectAnswer = String(n);
      bttn.addEventListener('click', () => selectSingle(grid, bttn, n));
      grid.appendChild(bttn);
    });
  }

  function renderDistributionChoice(m, showEquation = false) {
    const equation = showEquation && m.equation
      ? `<div class="code-console" style="margin-bottom:12px"><small>CÓDIGO</small><div class="equation" style="font-size:2rem;margin:8px 0"><span>${m.equation[0]}</span><span class="operator">÷</span><span>${m.equation[1]}</span></div></div>`
      : '';
    gameArea.innerHTML = `${renderMechanicIntro(m)}${equation}<div class="choice-stack"></div>`;
    const stack = gameArea.querySelector('.choice-stack');
    m.options.forEach(option => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'visual-choice';
      btn.dataset.selectAnswer = option.id;
      btn.innerHTML = `<strong>OPCIÓN ${option.id}</strong>${miniGroupsMarkup(option.groups, m)}`;
      btn.addEventListener('click', () => selectSingle(stack, btn, option.id));
      stack.appendChild(btn);
    });
  }

  function renderCompleteGroup(m) {
    gameArea.innerHTML = `
      ${renderMechanicIntro(m)}
      ${miniGroupsMarkup(m.preview, m)}
      <p class="instruction" style="margin-top:14px">¿Cuántas ${m.emoji} faltan en el último grupo?</p>
      <div class="number-choice-grid"></div>`;
    const grid = gameArea.querySelector('.number-choice-grid');
    m.answers.forEach(n => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'number-choice';
      btn.dataset.selectAnswer = String(n);
      btn.textContent = n;
      btn.addEventListener('click', () => selectSingle(grid, btn, n));
      grid.appendChild(btn);
    });
  }

  function renderFindError(m) {
    gameArea.innerHTML = `${renderMechanicIntro(m)}<div class="error-groups"></div>`;
    const grid = gameArea.querySelector('.error-groups');
    m.preview.forEach((count, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'error-group';
      btn.dataset.selectAnswer = String(i);
      btn.innerHTML = `<span class="animal">${m.animalEmoji}</span><strong>${m.group} ${i + 1}</strong><div class="mini-items">${itemsMarkup(count, m.emoji)}</div><span class="mini-count">${count} frutos</span>`;
      btn.addEventListener('click', () => selectSingle(grid, btn, i));
      grid.appendChild(btn);
    });
  }

  function renderGroupSize(m) {
    gameArea.innerHTML = `
      ${renderMechanicIntro(m)}
      <div class="scene-total"><span class="scene-total-label">TOTAL: ${m.total}</span><div class="scene-items">${itemsMarkup(m.total, m.emoji)}</div></div>
      <div class="scene-animals" style="--animal-count:${m.groups}">${Array.from({length:m.groups},(_,i)=>`<div class="scene-animal"><span>${m.animalEmoji}</span><small>${m.group} ${i+1}</small></div>`).join('')}</div>
      <div class="number-choice-grid four"></div>`;
    const grid = gameArea.querySelector('.number-choice-grid');
    m.answers.forEach(n => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'number-choice';
      btn.dataset.selectAnswer = String(n);
      btn.textContent = n;
      btn.addEventListener('click', () => selectSingle(grid, btn, n));
      grid.appendChild(btn);
    });
  }

  function renderReverseTotal(m) {
    const counts = Array.from({length:m.groups},()=>m.each);
    gameArea.innerHTML = `
      ${renderMechanicIntro(m)}
      ${miniGroupsMarkup(counts, m)}
      <p class="instruction" style="margin-top:14px">Junta mentalmente los grupos. ¿Cuál era el total?</p>
      <div class="number-choice-grid"></div>`;
    const grid = gameArea.querySelector('.number-choice-grid');
    m.answers.forEach(n => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'number-choice';
      btn.dataset.selectAnswer = String(n);
      btn.textContent = n;
      btn.addEventListener('click', () => selectSingle(grid, btn, n));
      grid.appendChild(btn);
    });
  }

  function renderBalance(m) {
    gameArea.innerHTML = `
      ${renderMechanicIntro(m)}
      <div class="balance-board">
        <div class="balance-current">${miniGroupsMarkup(m.preview, m)}</div>
        <div class="balance-actions"></div>
      </div>`;
    const actions = gameArea.querySelector('.balance-actions');
    m.actions.forEach(action => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'balance-action';
      btn.dataset.selectAnswer = action.id;
      btn.textContent = action.label;
      btn.addEventListener('click', () => selectSingle(actions, btn, action.id));
      actions.appendChild(btn);
    });
  }

  function renderStoryChoice(m) {
    gameArea.innerHTML = `
      ${renderMechanicIntro(m)}
      <div class="story-problem"><div class="story-icon">${m.animalEmoji}</div><p>${m.story}</p></div>
      <div class="number-choice-grid four"></div>`;
    const grid = gameArea.querySelector('.number-choice-grid');
    m.answers.forEach(n => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'number-choice';
      btn.dataset.selectAnswer = String(n);
      btn.textContent = n;
      btn.addEventListener('click', () => selectSingle(grid, btn, n));
      grid.appendChild(btn);
    });
  }

  function renderBoss(m) {
    mechanicState = mechanicState && typeof mechanicState === 'object' ? mechanicState : {};
    gameArea.innerHTML = `
      ${renderMechanicIntro(m)}
      <div class="boss-card">
        <div class="boss-head"><span>${m.animalEmoji}</span><div><small>GUARDIÁN DEL RÍO</small><strong>Abre las 3 cerraduras</strong></div></div>
        <div class="boss-round" data-round="distribution"><span>CERRADURA 1 · REPARTO</span><div class="choice-stack boss-distributions"></div></div>
        <div class="boss-round" data-round="operation"><span>CERRADURA 2 · OPERACIÓN</span><div class="boss-option-grid boss-operations"></div></div>
        <div class="boss-round" data-round="result"><span>CERRADURA 3 · RESULTADO</span><div class="boss-option-grid boss-results"></div></div>
      </div>`;

    const dist = gameArea.querySelector('.boss-distributions');
    m.boss.distributions.forEach(option => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'visual-choice';
      btn.dataset.bossKind = 'distribution';
      btn.dataset.bossValue = option.id;
      btn.innerHTML = `<strong>OPCIÓN ${option.id}</strong>${miniGroupsMarkup(option.groups, {...m, emoji:'🐟'})}`;
      btn.addEventListener('click', () => {
        playTap();
        dist.querySelectorAll('[data-boss-kind="distribution"]').forEach(x=>x.classList.remove('selected'));
        btn.classList.add('selected');
        mechanicState.distribution = option.id;
        saveGameState();
      });
      dist.appendChild(btn);
    });

    const ops = gameArea.querySelector('.boss-operations');
    m.boss.operations.forEach(option => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'boss-option';
      btn.dataset.bossKind = 'operation';
      btn.dataset.bossValue = option.id;
      btn.textContent = option.label;
      btn.addEventListener('click', () => {
        playTap();
        ops.querySelectorAll('.boss-option').forEach(x=>x.classList.remove('selected'));
        btn.classList.add('selected');
        mechanicState.operation = option.id;
        saveGameState();
      });
      ops.appendChild(btn);
    });

    const results = gameArea.querySelector('.boss-results');
    m.boss.results.forEach(value => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'boss-option';
      btn.dataset.bossKind = 'result';
      btn.dataset.bossValue = String(value);
      btn.textContent = value;
      btn.addEventListener('click', () => {
        playTap();
        results.querySelectorAll('.boss-option').forEach(x=>x.classList.remove('selected'));
        btn.classList.add('selected');
        mechanicState.result = value;
        saveGameState();
      });
      results.appendChild(btn);
    });
  }

  function renderChallenge(m) {
    switch (m.type) {
      case 'share': return renderSharing(m);
      case 'distributionChoice': return renderDistributionChoice(m, false);
      case 'representationChoice': return renderDistributionChoice(m, true);
      case 'completeGroup': return renderCompleteGroup(m);
      case 'findError': return renderFindError(m);
      case 'groupSize': return renderGroupSize(m);
      case 'reverseTotal': return renderReverseTotal(m);
      case 'balance': return renderBalance(m);
      case 'storyChoice': return renderStoryChoice(m);
      case 'boss': return renderBoss(m);
      case 'equation':
      default: return renderEquation(m);
    }
  }

  function isSharingCorrect(m) {
    const bank = $('#bank');
    const zones = [...document.querySelectorAll('.zone-items')];
    const counts = zones.map(z => z.children.length);
    const target = m.total / m.groups;
    return bank && bank.children.length === 0 && counts.every(c => c === target);
  }

  function isMissionCorrect(m) {
    if (m.type === 'share') return isSharingCorrect(m);
    if (m.type === 'boss') {
      return String(mechanicState.distribution) === String(m.boss.correct.distribution)
        && String(mechanicState.operation) === String(m.boss.correct.operation)
        && Number(mechanicState.result) === Number(m.boss.correct.result);
    }
    if (m.type === 'equation') return Number(selectedAnswer) === Number(m.equation[2]);
    return String(selectedAnswer) === String(m.correct);
  }

  function hasMissionAnswer(m) {
    if (m.type === 'share') return true;
    if (m.type === 'boss') return mechanicState.distribution != null && mechanicState.operation != null && mechanicState.result != null;
    return selectedAnswer !== null && selectedAnswer !== undefined;
  }

  function getAttemptSummary(m) {
    if (m.type === 'share') {
      const bank = $('#bank');
      const counts = [...document.querySelectorAll('.zone-items')].map(z => z.children.length);
      const remaining = bank ? bank.children.length : m.total;
      return `Repartió los objetos así: [${counts.join(', ')}]. Quedan ${remaining} objetos sin repartir.`;
    }
    if (m.type === 'boss') {
      return `En el guardián eligió reparto ${mechanicState.distribution ?? 'sin elegir'}, operación ${mechanicState.operation ?? 'sin elegir'} y resultado ${mechanicState.result ?? 'sin elegir'}.`;
    }
    if (selectedAnswer === null || selectedAnswer === undefined) return 'Todavía no ha elegido una respuesta.';
    return `Eligió ${selectedAnswer} en un reto de tipo ${m.challengeLabel || m.type}.`;
  }

  function resetTutorChat() {
    aiTutorChat.innerHTML = `
      <div class="tutor-message nova-message">
        <span>NOVA</span>
        <p>Pregúntame, yo puedo ayudarte.</p>
      </div>`;
  }

  function appendTutorMessage(role, text, pending = false) {
    const wrap = document.createElement('div');
    wrap.className = `tutor-message ${role === 'user' ? 'emi-message' : 'nova-message'}${pending ? ' pending' : ''}`;
    const label = document.createElement('span');
    label.textContent = role === 'user' ? 'EMILIANO' : 'NOVA';
    const p = document.createElement('p');
    p.textContent = text;
    wrap.append(label, p);
    aiTutorChat.appendChild(wrap);
    aiTutorChat.scrollTop = aiTutorChat.scrollHeight;
    return wrap;
  }

  function setTutorBusy(isBusy) {
    tutorBusy = isBusy;
    aiTutorBtn.disabled = isBusy;
    aiTutorSendBtn.disabled = isBusy;
    aiTutorInput.disabled = isBusy;
    aiTutorQuickBtns.forEach(btn => btn.disabled = isBusy);
  }

  async function requestTutor(reason = 'question', question = '') {
    if (tutorBusy) return;
    const m = missions[mission];

    // NOVA nunca inventa mensajes en nombre de Emiliano.
    // Solo enviamos al tutor una pregunta que Emiliano haya escrito
    // o una acción rápida que él haya pulsado voluntariamente.
    const userQuestion = String(question || '').trim().slice(0, 180);
    if (!userQuestion) return;

    const requestId = ++tutorRequestId;
    const previousHistory = tutorHistory.slice(-12);

    aiTutorCard.hidden = false;
    aiTutorTitle.textContent = 'Estoy aquí, Emiliano';
    appendTutorMessage('user', userQuestion);
    tutorHistory.push({ role: 'user', content: userQuestion });
    saveGameState();
    const pending = appendTutorMessage('assistant', 'Estoy mirando tu ejercicio…', true);

    aiStatus.textContent = 'PENSANDO';
    aiStatus.className = 'ai-status loading';
    setTutorBusy(true);

    const eq = equationForMission(m);
    const payload = {
      mode: 'chat',
      reason,
      question: userQuestion,
      history: previousHistory,
      missionNumber: mission + 1,
      missionTitle: m.title,
      challengeLabel: m.challengeLabel || '',
      animal: m.animal,
      story: m.story,
      prompt: m.prompt,
      hint: m.hint,
      type: m.type,
      equation: eq ? { dividend: eq[0], divisor: eq[1], quotient: eq[2] } : null,
      sharing: Number.isFinite(m.total) && Number.isFinite(m.groups) ? { total: m.total, groups: m.groups, quotient: m.total / m.groups } : null,
      attempt: getAttemptSummary(m),
      attemptCount
    };

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'No fue posible conectar con NOVA.');
      if (requestId !== tutorRequestId) return;

      const message = data.message || 'Miremos el total y luego formemos grupos iguales. ¿Cuántos grupos pide la misión?';
      pending.remove();
      appendTutorMessage('assistant', message);
      tutorHistory.push({ role: 'assistant', content: message });
      tutorHistory = tutorHistory.slice(-12);
      saveGameState();
      aiStatus.textContent = 'LISTO';
      aiStatus.className = 'ai-status';
      playTap();
    } catch (err) {
      if (requestId !== tutorRequestId) return;
      pending.remove();
      const message = err.message.includes('configurada')
        ? 'NOVA todavía no está conectado. Un adulto debe revisar OPENAI_API_KEY en Vercel.'
        : 'No pude conectarme ahora. Podemos seguir con la pista normal y volver a intentarlo después.';
      appendTutorMessage('assistant', message);
      aiStatus.textContent = 'SIN CONEXIÓN';
      aiStatus.className = 'ai-status error';
    } finally {
      if (requestId === tutorRequestId) {
        setTutorBusy(false);
        aiTutorInput.focus({ preventScroll: true });
      }
    }
  }

  async function requestMissionFeedback(m) {
    const requestId = ++feedbackRequestId;
    const fallback = fallbackMissionFeedback(m);
    currentFeedback = fallback;
    showMissionFeedback(fallback, { loading: true, status: 'CONECTANDO LA IDEA...' });
    saveGameState();

    const eq = equationForMission(m);
    const learnedBefore = missions
      .slice(Math.max(0, mission - 3), mission)
      .map(x => x.feedbackRule)
      .filter(Boolean);

    const payload = {
      mode: 'feedback',
      missionNumber: mission + 1,
      missionTitle: m.title,
      challengeLabel: m.challengeLabel || '',
      animal: m.animal,
      story: m.story,
      prompt: m.prompt,
      type: m.type,
      equation: eq ? { dividend: eq[0], divisor: eq[1], quotient: eq[2] } : null,
      sharing: Number.isFinite(m.total) && Number.isFinite(m.groups)
        ? { total: m.total, groups: m.groups, quotient: m.total / m.groups }
        : null,
      feedbackRule: m.feedbackRule || 'al dividir, buscamos cuánto corresponde a cada grupo cuando todos deben quedar iguales',
      feedbackAction: m.feedbackAction || (eq ? `Aquí resolviste ${eq[0]} ÷ ${eq[1]} y descubriste que cada grupo queda con ${eq[2]}.` : 'Aquí organizaste la cantidad de la misión en grupos iguales.'),
      learnedBefore
    };

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'No fue posible generar el feedback.');
      if (requestId !== feedbackRequestId || !currentMissionCompleted) return;

      currentFeedback = data.message || fallback;
      showMissionFeedback(currentFeedback, { status: 'RECUERDA ESTO' });
      saveGameState();
    } catch {
      if (requestId !== feedbackRequestId || !currentMissionCompleted) return;
      currentFeedback = fallback;
      showMissionFeedback(currentFeedback, { status: 'RECUERDA ESTO' });
      saveGameState();
    }
  }

  function success() {
    playSuccess();
    gameArea.classList.remove('shake');
    gameArea.classList.add('celebrate');
    setTimeout(() => gameArea.classList.remove('celebrate'), 600);

    const m = missions[mission];
    rewardCard.hidden = false;
    rewardEmoji.innerHTML = animalVisualMarkup(m, 'reward-art');
    rewardTitle.textContent = mission === missions.length - 1 ? '¡Último código recuperado, Emiliano!' : '¡Código recuperado, Emiliano!';
    rewardText.textContent = m.reward;
    animalFact.textContent = m.fact;
    fillRewardProfile(m);
    showNextTeaser(m);

    localStorage.setItem('emilianoUnlocked', String(Math.max(unlockedCount(), mission + 1)));
    currentMissionCompleted = true;
    gameCompleted = false;
    setProgress(1);

    checkBtn.hidden = true;
    hintBtn.hidden = true;
    rewardNextBtn.textContent = mission === missions.length - 1 ? 'Completar el Atlas →' : 'Descubrir siguiente misión →';

    currentFeedback = fallbackMissionFeedback(m);
    showMissionFeedback(currentFeedback, { loading: true, status: 'CONECTANDO LA IDEA...' });
    saveGameState();
    requestMissionFeedback(m);
    rewardCard.scrollIntoView({behavior:'smooth', block:'nearest'});
  }

  function incorrect(m) {
    attemptCount += 1;
    saveGameState();
    playOops();
    gameArea.classList.remove('shake');
    void gameArea.offsetWidth;
    gameArea.classList.add('shake');
    if (m.type === 'share') showToast('Aún no están iguales. Cuenta cada grupo y vuelve a ajustar 🙂', 2600);
    else showToast('Ese código no abrió la puerta. Prueba otra estrategia o usa una pista.', 2600);

    // No abrimos NOVA ni escribimos por Emiliano automáticamente.
    // Si quiere ayuda, puede tocar “Preguntar a NOVA”.
  }

  function completeGame(playAudio = true) {
    rewardCard.hidden = true;
    gameArea.hidden = true;
    checkBtn.hidden = true;
    hintBtn.hidden = true;
    finalCard.hidden = false;
    progressBar.style.width = '100%';
    progressText.textContent = '100%';
    localStorage.setItem('emilianoMission', String(missions.length - 1));
    gameCompleted = true;
    currentMissionCompleted = true;
    saveGameState();
    if (playAudio) [392,523,659,784,1047].forEach((f,i)=>audioTone(f,.35,'sine',.05,i*.11));
    finalCard.scrollIntoView({behavior:'smooth', block:'center'});
  }

  function buildWorldMap() {
    worldMap.innerHTML = '';
    const currentW = currentWorldIndex();
    worlds.forEach((w, i) => {
      const completed = i < currentW;
      const active = i === currentW;
      const card = document.createElement('div');
      card.className = `map-world ${completed ? 'done' : ''} ${active ? 'active' : ''}`;
      card.innerHTML = `<div class="map-world-icon">${w.icon}</div><div><small>CAPÍTULO ${i+1}</small><strong>${w.name}</strong><span>${w.subtitle}</span></div><b>${completed ? '✓' : active ? '▶' : '🔒'}</b>`;
      worldMap.appendChild(card);
    });
  }

  function advanceMission() {
    if (mission === missions.length - 1) {
      completeGame();
      return;
    }
    mission += 1;
    clearCurrentMissionState();
    localStorage.setItem('emilianoMission', String(mission));
    saveGameState();
    renderMission({ restore: false });
    window.scrollTo({top: 0, behavior: 'smooth'});
    playTap();
  }

  checkBtn.addEventListener('click', () => {
    const m = missions[mission];

    if (!hasMissionAnswer(m)) {
      showToast(m.type === 'boss' ? 'Completa las 3 cerraduras antes de comprobar 👆' : 'Primero elige una respuesta 👆');
      return;
    }

    isMissionCorrect(m) ? success() : incorrect(m);
  });

  rewardNextBtn.addEventListener('click', advanceMission);

  hintBtn.addEventListener('click', () => {
    playTap();
    showToast(missions[mission].hint, 3200);
  });

  aiTutorBtn.addEventListener('click', () => {
    playTap();
    aiTutorCard.hidden = false;
    saveGameState();

    // Abrir el tutor no crea ninguna pregunta automática.
    // Emiliano decide qué quiere preguntar.
    aiTutorInput.focus({ preventScroll: true });
    aiTutorCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  aiTutorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = aiTutorInput.value.trim();
    if (!question) return;
    aiTutorInput.value = '';
    playTap();
    requestTutor('question', question);
  });

  aiTutorQuickBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      playTap();
      requestTutor(btn.dataset.reason || 'question', btn.dataset.tutorPrompt || '');
    });
  });

  soundBtn.addEventListener('click', () => {
    soundOn = !soundOn;
    localStorage.setItem('emilianoSound', soundOn ? 'on' : 'off');
    saveGameState();
    soundBtn.textContent = soundOn ? '🔊 Activado' : '🔇 Desactivado';
    soundBtn.setAttribute('aria-pressed', String(soundOn));
    if (soundOn) playTap();
  });

  resetBtn.addEventListener('click', () => {
    playTap();

    const confirmed = window.confirm(
      '¿Quieres reiniciar la aventura? Se borrará el progreso guardado de Emiliano en este dispositivo.'
    );

    if (!confirmed) return;

    mission = 0;
    clearCurrentMissionState();
    localStorage.setItem('emilianoMission', '0');
    localStorage.setItem('emilianoUnlocked', '0');
    localStorage.removeItem(SAVE_KEY);

    settingsModal.hidden = true;
    document.body.classList.remove('modal-open');

    gameArea.hidden = false;
    renderMission({ restore: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('La expedición comenzó de nuevo 🚀');
  });

  replayBtn.addEventListener('click', () => {
    mission = 0;
    clearCurrentMissionState();
    localStorage.setItem('emilianoMission', '0');
    localStorage.setItem('emilianoUnlocked', '0');
    localStorage.removeItem(SAVE_KEY);
    gameArea.hidden = false;
    renderMission({ restore: false });
    window.scrollTo({top:0, behavior:'smooth'});
  });

  settingsBtn.addEventListener('click', () => {
    playTap();
    settingsModal.hidden = false;
    document.body.classList.add('modal-open');
  });

  closeSettingsBtn.addEventListener('click', () => {
    settingsModal.hidden = true;
    document.body.classList.remove('modal-open');
  });

  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) closeSettingsBtn.click();
  });

  mapBtn.addEventListener('click', () => {
    playTap();
    buildWorldMap();
    worldModal.hidden = false;
    document.body.classList.add('modal-open');
  });
  closeMapBtn.addEventListener('click', () => {
    worldModal.hidden = true;
    document.body.classList.remove('modal-open');
  });
  worldModal.addEventListener('click', (e) => {
    if (e.target === worldModal) closeMapBtn.click();
  });

  animalCardBtn.addEventListener('click', () => showAnimalProfile(missions[mission]));

  closeAnimalBtn.addEventListener('click', () => {
    animalModal.hidden = true;
    document.body.classList.remove('modal-open');
  });
  animalModal.addEventListener('click', (e) => {
    if (e.target === animalModal) closeAnimalBtn.click();
  });

  fieldGuideBtn.addEventListener('click', () => {
    buildFieldGuide();
    guideModal.hidden = false;
    document.body.classList.add('modal-open');
    playTap();
  });
  closeGuideBtn.addEventListener('click', () => {
    guideModal.hidden = true;
    document.body.classList.remove('modal-open');
  });
  guideModal.addEventListener('click', (e) => {
    if (e.target === guideModal) closeGuideBtn.click();
  });

  startBtn.addEventListener('click', () => openApp(true));
  skipIntroBtn.addEventListener('click', () => openApp(false));

  // Guarda incluso si se cierra el navegador, se bloquea la tablet o cambia de app.
  window.addEventListener('pagehide', saveGameState);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') saveGameState();
  });

  const initialSaved = readSavedGame();
  if (initialSaved && (Number(initialSaved.mission) > 0 || Number(initialSaved.unlocked) > 0 || initialSaved.currentMissionCompleted)) {
    startBtn.textContent = `▶️ Continuar misión ${mission + 1}`;
    skipIntroBtn.textContent = 'Entrar sin sonido';
  }

  // La intro aparece al abrir, pero el botón continúa exactamente donde Emiliano quedó.
})();
