(() => {
  const $ = (s) => document.querySelector(s);
  const gameArea = $('#gameArea');
  const checkBtn = $('#checkBtn');
  const hintBtn = $('#hintBtn');
  const soundBtn = $('#soundBtn');
  const resetBtn = $('#resetBtn');
  const rewardCard = $('#rewardCard');
  const rewardTitle = $('#rewardTitle');
  const rewardText = $('#rewardText');
  const progressBar = $('#progressBar');
  const progressText = $('#progressText');
  const missionNumber = $('#missionNumber');
  const missionTitle = $('#missionTitle');
  const missionPrompt = $('#missionPrompt');
  const toast = $('#toast');

  let soundOn = true;
  let mission = Number(localStorage.getItem('emilianoMission') || 0);
  if (mission > 2) mission = 0;
  let selectedCreature = null;
  let selectedAnswer = null;

  const missions = [
    {
      title: 'Reparte en partes iguales',
      prompt: 'Tenemos 8 criaturas y 2 refugios. Cada refugio debe recibir la misma cantidad.',
      total: 8,
      groups: 2,
      emoji: '🦎',
      groupName: 'Refugio',
      hint: 'Prueba poniendo una criatura en cada refugio, una por una.',
      reward: 'Descubriste que repartir 8 entre 2 da 4.'
    },
    {
      title: 'Alimenta a los ajolotes',
      prompt: 'Hay 12 camarones para 3 ajolotes. Reparte exactamente la misma cantidad para cada uno.',
      total: 12,
      groups: 3,
      emoji: '🦐',
      groupName: 'Ajolote',
      hint: 'Reparte por turnos: uno para el primero, uno para el segundo y uno para el tercero.',
      reward: '12 repartido entre 3 es igual a 4.'
    },
    {
      title: 'Descubre la división',
      prompt: 'Ya sabes repartir. Ahora elige el resultado correcto.',
      equation: [15, 3, 5],
      answers: [3, 4, 5, 6],
      hint: 'Piensa: ¿qué número multiplicado por 3 da 15?',
      reward: '¡15 ÷ 3 = 5! Ya estás usando el símbolo de división.'
    }
  ];

  function audioTone(freq = 440, duration = .08, type = 'sine', gain = .05) {
    if (!soundOn) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = audioTone.ctx || (audioTone.ctx = new AudioCtx());
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.value = gain;
    osc.connect(g).connect(ctx.destination);
    osc.start();
    g.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + duration);
    osc.stop(ctx.currentTime + duration);
  }

  function playSuccess() {
    [523, 659, 784].forEach((f, i) => setTimeout(() => audioTone(f, .16, 'sine', .06), i * 90));
  }
  function playTap() { audioTone(380, .05, 'triangle', .035); }
  function playOops() { audioTone(180, .12, 'sawtooth', .025); }

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast.t);
    showToast.t = setTimeout(() => toast.classList.remove('show'), 1900);
  }

  function setProgress() {
    const pct = Math.round((mission / missions.length) * 100);
    progressBar.style.width = pct + '%';
    progressText.textContent = pct + '%';
  }

  function renderMission() {
    selectedCreature = null;
    selectedAnswer = null;
    rewardCard.hidden = true;
    const m = missions[mission];
    missionNumber.textContent = mission + 1;
    missionTitle.textContent = m.title;
    missionPrompt.textContent = m.prompt;
    setProgress();

    if (m.equation) renderEquation(m);
    else renderSharing(m);
  }

  function makeCreature(emoji, i) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'creature';
    b.textContent = emoji;
    b.dataset.id = String(i);
    b.setAttribute('aria-label', 'Objeto ' + (i + 1));
    b.addEventListener('click', () => {
      playTap();
      document.querySelectorAll('.creature.selected').forEach(x => x.classList.remove('selected'));
      selectedCreature = b;
      b.classList.add('selected');
    });
    return b;
  }

  function renderSharing(m) {
    gameArea.innerHTML = '<p class="instruction">Toca una criatura y luego toca el lugar donde quieres ponerla.</p>';
    const bank = document.createElement('div');
    bank.className = 'creature-bank';
    bank.id = 'bank';
    for (let i=0; i<m.total; i++) bank.appendChild(makeCreature(m.emoji, i));

    const zones = document.createElement('div');
    zones.className = 'zones' + (m.groups === 2 ? ' two' : '');
    for (let i=0; i<m.groups; i++) {
      const zone = document.createElement('div');
      zone.className = 'zone';
      zone.tabIndex = 0;
      zone.dataset.group = i;
      zone.innerHTML = `<h4>${m.groupName} ${i+1}</h4><div class="zone-items"></div>`;
      const place = () => {
        if (!selectedCreature) { showToast('Primero toca una criatura ✨'); return; }
        playTap();
        zone.querySelector('.zone-items').appendChild(selectedCreature);
        selectedCreature.classList.remove('selected');
        selectedCreature = null;
      };
      zone.addEventListener('click', place);
      zone.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') place(); });
      zones.appendChild(zone);
    }
    gameArea.append(bank, zones);
  }

  function renderEquation(m) {
    gameArea.innerHTML = `
      <p class="instruction">Elige una respuesta.</p>
      <div class="equation" aria-label="${m.equation[0]} dividido entre ${m.equation[1]}">
        <span>${m.equation[0]}</span><span>÷</span><span>${m.equation[1]}</span><span>=</span><span>?</span>
      </div>
      <div class="answer-grid"></div>`;
    const grid = gameArea.querySelector('.answer-grid');
    m.answers.forEach(n => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'answer-btn';
      b.textContent = n;
      b.addEventListener('click', () => {
        playTap();
        grid.querySelectorAll('.answer-btn').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        selectedAnswer = n;
      });
      grid.appendChild(b);
    });
  }

  function isSharingCorrect(m) {
    const zones = [...document.querySelectorAll('.zone-items')];
    const counts = zones.map(z => z.children.length);
    const target = m.total / m.groups;
    return document.querySelector('#bank').children.length === 0 && counts.every(c => c === target);
  }

  function success() {
    playSuccess();
    gameArea.classList.remove('shake');
    gameArea.classList.add('celebrate');
    setTimeout(() => gameArea.classList.remove('celebrate'), 600);
    const m = missions[mission];
    rewardCard.hidden = false;
    rewardTitle.textContent = mission === missions.length - 1 ? '¡Misión completada, Emiliano!' : '¡Lo lograste, Emiliano!';
    rewardText.textContent = m.reward;

    const next = mission + 1;
    progressBar.style.width = Math.round((next / missions.length) * 100) + '%';
    progressText.textContent = Math.round((next / missions.length) * 100) + '%';
    checkBtn.textContent = next >= missions.length ? 'Jugar otra vez' : 'Siguiente misión';
    checkBtn.dataset.next = 'true';
  }

  function incorrect() {
    playOops();
    gameArea.classList.remove('shake');
    void gameArea.offsetWidth;
    gameArea.classList.add('shake');
    showToast('Todavía no está igual. Mira los grupos e inténtalo otra vez 🙂');
  }

  checkBtn.addEventListener('click', () => {
    if (checkBtn.dataset.next === 'true') {
      checkBtn.dataset.next = '';
      checkBtn.textContent = 'Comprobar';
      mission = (mission + 1) % missions.length;
      localStorage.setItem('emilianoMission', String(mission));
      renderMission();
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    const m = missions[mission];
    if (m.equation) {
      if (selectedAnswer === null) { showToast('Elige una respuesta primero 👆'); return; }
      selectedAnswer === m.equation[2] ? success() : incorrect();
    } else {
      isSharingCorrect(m) ? success() : incorrect();
    }
  });

  hintBtn.addEventListener('click', () => {
    playTap();
    showToast(missions[mission].hint);
  });

  soundBtn.addEventListener('click', () => {
    soundOn = !soundOn;
    soundBtn.textContent = soundOn ? '🔊' : '🔇';
    soundBtn.setAttribute('aria-pressed', String(soundOn));
    if (soundOn) playTap();
  });

  resetBtn.addEventListener('click', () => {
    mission = 0;
    localStorage.removeItem('emilianoMission');
    checkBtn.dataset.next = '';
    checkBtn.textContent = 'Comprobar';
    renderMission();
    showToast('Aventura reiniciada 🚀');
  });

  renderMission();
})();
