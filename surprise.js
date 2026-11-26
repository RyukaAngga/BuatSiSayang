// ==========================================================================
// SURPRISE.JS — Logika Interaksi Multi-Scene Scrapbook Halaman Kejutan
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. MANAJEMEN SCENE (PILIHAN MENU, SURAT, PHOTOBOOTH, KUIS)
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
      // Reset kuis ke pertanyaan awal
      showQuizStep('quizStepQuestion');
    });
  }

  // Tombol Kembali ke Menu Pilihan Hadiah (Back Buttons)
  const backToMenuButtons = document.querySelectorAll('.btn-back-to-menu');
  backToMenuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchScene('menu');
      // Reset surat saat keluar
      resetLetterState();
    });
  });

  // ------------------------------------------------------------------------
  // 2. INTERAKSI SURAT CINTA (TARIK SURAT & TANGAN MEMEGANG)
  // ------------------------------------------------------------------------
  const letterSheetContainer = document.getElementById('letterSheetContainer');
  const clickToReadPill = document.getElementById('clickToReadPill');

  function openLetter() {
    if (letterSheetContainer) {
      letterSheetContainer.classList.add('pulled');
    }
  }

  function resetLetterState() {
    if (letterSheetContainer) {
      letterSheetContainer.classList.remove('pulled');
    }
  }

  if (clickToReadPill) {
    clickToReadPill.addEventListener('click', (e) => {
      e.stopPropagation();
      openLetter();
    });
  }

  // Juga bisa ditarik jika menyentuh pucuk surat sebelum ditarik
  if (letterSheetContainer) {
    letterSheetContainer.addEventListener('click', () => {
      if (!letterSheetContainer.classList.contains('pulled')) {
        openLetter();
      }
    });
  }

  // ------------------------------------------------------------------------
  // 3. INTERAKSI KUIS HADIAH ([ ✓ ] SUKA vs [ ✗ ] SALAH PENCET)
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
    }
  }

  const btnQuizYes = document.getElementById('btnQuizYes');
  const btnQuizNo = document.getElementById('btnQuizNo');
  const btnRetryQuiz = document.getElementById('btnRetryQuiz');
  const heartsContainer = document.getElementById('heartsContainer');

  if (btnQuizNo) {
    btnQuizNo.addEventListener('click', () => {
      showQuizStep('quizStepWrong');
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
      spawnCelebrationHearts();
    });
  }

  // Efek Hati Melayang saat Selebrasi
  function spawnCelebrationHearts() {
    if (!heartsContainer) return;
    heartsContainer.innerHTML = '';
    const emojis = ['💖', '💕', '✨', '💐', '❤️', '🥰'];

    for (let i = 0; i < 16; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      heart.style.left = `${Math.random() * 85 + 5}%`;
      heart.style.top = `${Math.random() * 40 + 50}%`;
      heart.style.animationDelay = `${Math.random() * 0.8}s`;
      heart.style.animationDuration = `${1.8 + Math.random() * 1.2}s`;
      heartsContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 3000);
    }
  }

  // ------------------------------------------------------------------------
  // 4. FLOATING MUSIC TOGGLE AUDIO
  // ------------------------------------------------------------------------
  const surpriseAudio = document.getElementById('surpriseAudio');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  let isAudioPlaying = false;

  if (musicToggleBtn && surpriseAudio) {
    // Coba autoplay saat user pertama kali menyentuh layar
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
