// ==========================================================================
// SURPRISE.JS — Fairytale Scrapbook Multi-Scene Interactive Script
// Menggunakan Anime.js untuk animasi halus, ringan, dan bebas emoji
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. INISIALISASI ANIME.JS: ANIMASI BACKGROUND & KADO DONGENG
  // ------------------------------------------------------------------------
  if (typeof anime !== 'undefined') {
    
    // Animasi Goyang Kanan-Kiri Kado (Pendulum Fairytale Sway)
    anime({
      targets: '.fairytale-gift-item',
      rotate: function(el, i) {
        return i % 2 === 0 ? [-5, 5] : [5, -5];
      },
      translateX: function(el, i) {
        return i % 2 === 0 ? [-4, 4] : [4, -4];
      },
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: function(el, i) {
        return 2800 + i * 400;
      }
    });

    // Animasi Dua Burung Melayang Halus di Langit (Kanan-Atas & Kiri-Bawah)
    anime({
      targets: '.fairytale-bird-right',
      translateY: [-10, 10],
      translateX: [-5, 5],
      rotate: [-3, 3],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad',
      duration: 3800
    });

    anime({
      targets: '.fairytale-bird-left',
      translateY: [10, -10],
      translateX: [5, -5],
      rotate: [3, -3],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad',
      duration: 4200
    });

    // Animasi Pernapasan Awan Halus (Cloud Breathing)
    anime({
      targets: '.fairytale-clouds',
      scale: [1, 1.025],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 6000
    });

  }

  // ------------------------------------------------------------------------
  // 2. MANAJEMEN SCENE (PILIHAN MENU, SURAT, PHOTOBOOTH, KUIS)
  // ------------------------------------------------------------------------
  const scenes = {
    menu: document.getElementById('sceneMenu'),
    letter: document.getElementById('sceneLetter'),
    photobooth: document.getElementById('scenePhotobooth'),
    quiz: document.getElementById('sceneQuiz')
  };

  function switchScene(targetSceneKey) {
    Object.values(scenes).forEach(scene => {
      if (scene) scene.classList.remove('active');
    });

    const target = scenes[targetSceneKey];
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Transisi Masuk Halus dengan Anime.js
      if (typeof anime !== 'undefined') {
        anime({
          targets: target,
          opacity: [0, 1],
          translateY: [16, 0],
          easing: 'easeOutCubic',
          duration: 450
        });
      }
    }
  }

  // Tombol Menu Pilihan Hadiah
  const btnOpenLetter = document.getElementById('btnOpenLetter');
  const btnOpenPhotobooth = document.getElementById('btnOpenPhotobooth');
  const btnOpenQuiz = document.getElementById('btnOpenQuiz');

  if (btnOpenLetter) {
    btnOpenLetter.addEventListener('click', () => {
      switchScene('letter');
    });
  }

  if (btnOpenPhotobooth) {
    btnOpenPhotobooth.addEventListener('click', () => {
      switchScene('photobooth');
    });
  }

  if (btnOpenQuiz) {
    btnOpenQuiz.addEventListener('click', () => {
      switchScene('quiz');
      showQuizStep('quizStepQuestion');
    });
  }

  // Tombol Kembali ke Menu Pilihan Hadiah (Back Buttons)
  const backToMenuButtons = document.querySelectorAll('.btn-back-to-menu');
  backToMenuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchScene('menu');
      resetLetterState();
    });
  });

  // ------------------------------------------------------------------------
  // 3. INTERAKSI SURAT CINTA (TARIK SURAT DENGAN ANIME.JS)
  // ------------------------------------------------------------------------
  const letterSheetContainer = document.getElementById('letterSheetContainer');
  const clickToReadPill = document.getElementById('clickToReadPill');

  function openLetter() {
    if (!letterSheetContainer) return;
    letterSheetContainer.classList.add('pulled');

    if (typeof anime !== 'undefined') {
      anime({
        targets: '#letterSheetContainer',
        translateY: '-80px',
        easing: 'easeOutCubic',
        duration: 900
      });
    }
  }

  function resetLetterState() {
    if (!letterSheetContainer) return;
    letterSheetContainer.classList.remove('pulled');

    if (typeof anime !== 'undefined') {
      anime({
        targets: '#letterSheetContainer',
        translateY: '120px',
        duration: 400,
        easing: 'easeOutQuad'
      });
    }
  }

  if (clickToReadPill) {
    clickToReadPill.addEventListener('click', (e) => {
      e.stopPropagation();
      openLetter();
    });
  }

  if (letterSheetContainer) {
    letterSheetContainer.addEventListener('click', () => {
      if (!letterSheetContainer.classList.contains('pulled')) {
        openLetter();
      }
    });
  }

  // ------------------------------------------------------------------------
  // 4. INTERAKSI KUIS HADIAH ([ ✓ ] SUKA vs [ ✗ ] SALAH PENCET)
  // ------------------------------------------------------------------------
  const quizSteps = {
    quizStepQuestion: document.getElementById('quizStepQuestion'),
    quizStepWrong: document.getElementById('quizStepWrong'),
    quizStepCelebration: document.getElementById('quizStepCelebration')
  };

  function showQuizStep(stepId) {
    Object.values(quizSteps).forEach(step => {
      if (step) step.classList.remove('active');
    });
    const activeStep = quizSteps[stepId];
    if (activeStep) {
      activeStep.classList.add('active');

      if (typeof anime !== 'undefined') {
        anime({
          targets: activeStep,
          opacity: [0, 1],
          scale: [0.95, 1],
          easing: 'easeOutCubic',
          duration: 400
        });
      }
    }
  }

  const btnQuizYes = document.getElementById('btnQuizYes');
  const btnQuizNo = document.getElementById('btnQuizNo');
  const btnRetryQuiz = document.getElementById('btnRetryQuiz');
  const heartsContainer = document.getElementById('heartsContainer');

  if (btnQuizNo) {
    btnQuizNo.addEventListener('click', () => {
      showQuizStep('quizStepWrong');
      // Efek Goncang Lucu dengan Anime.js
      if (typeof anime !== 'undefined') {
        anime({
          targets: '.wrong-card',
          translateX: [-10, 10, -8, 8, -4, 4, 0],
          easing: 'easeInOutSine',
          duration: 550
        });
      }
    });
  }

  if (btnRetryQuiz) {
    btnRetryQuiz.addEventListener('click', () => {
      showQuizStep('quizStepQuestion');
    });
  }

  if (btnQuizYes) {
    btnQuizYes.addEventListener('click', () => {
      showQuizStep('quizStepCelebration');
      spawnCelebrationVectorHearts();

      // Animasi Pop-up WhatsApp Masuk Halus
      if (typeof anime !== 'undefined') {
        anime({
          targets: '#waNotificationCard',
          translateY: [40, 0],
          opacity: [0, 1],
          easing: 'easeOutElastic(1, .8)',
          duration: 900,
          delay: 350
        });
      }
    });
  }

  // Efek Hati Melayang Berbasis Vector SVG Murni (Tanpa Emoji)
  function spawnCelebrationVectorHearts() {
    if (!heartsContainer) return;
    heartsContainer.innerHTML = '';
    const heartColors = ['#d32032', '#f6c0c8', '#faedd9', '#e63946', '#ff758f'];

    for (let i = 0; i < 20; i++) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('class', 'floating-vector-heart');
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z');
      svg.appendChild(path);

      svg.style.left = `${Math.random() * 80 + 10}%`;
      svg.style.top = `${Math.random() * 30 + 55}%`;
      svg.style.fill = heartColors[Math.floor(Math.random() * heartColors.length)];
      heartsContainer.appendChild(svg);

      if (typeof anime !== 'undefined') {
        anime({
          targets: svg,
          translateY: -(180 + Math.random() * 140),
          translateX: (Math.random() - 0.5) * 80,
          scale: [0.5, 1.3],
          opacity: [0.95, 0],
          rotate: (Math.random() - 0.5) * 60,
          duration: 2200 + Math.random() * 900,
          easing: 'easeOutCubic',
          complete: () => svg.remove()
        });
      } else {
        setTimeout(() => svg.remove(), 2500);
      }
    }
  }

  // ------------------------------------------------------------------------
  // 5. FLOATING MUSIC TOGGLE AUDIO
  // ------------------------------------------------------------------------
  const surpriseAudio = document.getElementById('surpriseAudio');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  let isAudioPlaying = false;

  if (musicToggleBtn && surpriseAudio) {
    const startAudioOnFirstTouch = () => {
      if (!isAudioPlaying) {
        surpriseAudio.play().then(() => {
          isAudioPlaying = true;
          musicToggleBtn.classList.add('playing');
        }).catch(() => {
          // Autoplay dicegah browser
        });
      }
      document.removeEventListener('click', startAudioOnFirstTouch);
      document.removeEventListener('touchstart', startAudioOnFirstTouch);
    };

    document.addEventListener('click', startAudioOnFirstTouch, { once: true });
    document.addEventListener('touchstart', startAudioOnFirstTouch, { once: true });

    musicToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isAudioPlaying) {
        surpriseAudio.pause();
        isAudioPlaying = false;
        musicToggleBtn.classList.remove('playing');
      } else {
        surpriseAudio.play().then(() => {
          isAudioPlaying = true;
          musicToggleBtn.classList.add('playing');
        }).catch(() => {
          isAudioPlaying = false;
        });
      }
    });

    surpriseAudio.addEventListener('pause', () => {
      isAudioPlaying = false;
      musicToggleBtn.classList.remove('playing');
    });

    surpriseAudio.addEventListener('play', () => {
      isAudioPlaying = true;
      musicToggleBtn.classList.add('playing');
    });
  }

});
