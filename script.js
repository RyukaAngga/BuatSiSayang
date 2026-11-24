// ==========================================================================
// SCRAPBOOK INTERACTION SCRIPT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Interaksi Tombol Amplop (Hero Section) Menuju surprise.html
  const envelopeBtn = document.getElementById('envelopeBtn');
  if (envelopeBtn) {
    envelopeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetUrl = envelopeBtn.getAttribute('href');
      
      // Animasi klik sebelum navigasi
      envelopeBtn.classList.add('clicked');
      
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 450);
    });
  }

  // 2. Interaksi Musik & Piringan Hitam Vinyl (Section 2)
  const vinylBtn = document.getElementById('vinylBtn');
  const vinylRecord = document.getElementById('vinylRecord');
  const bgMusic = document.getElementById('bgMusic');

  // Mulai dalam keadaan berputar perlahan sesuai video
  let isPlaying = false;
  if (vinylRecord) {
    vinylRecord.classList.add('spinning');
  }

  if (vinylBtn && bgMusic) {
    vinylBtn.addEventListener('click', () => {
      if (isPlaying) {
        bgMusic.pause();
        isPlaying = false;
        if (vinylRecord) vinylRecord.classList.remove('spinning');
      } else {
        bgMusic.play().then(() => {
          isPlaying = true;
          if (vinylRecord) vinylRecord.classList.add('spinning');
        }).catch(() => {
          // Jika file audio belum dimasukkan pengguna ke folder assets/audio/
          isPlaying = !isPlaying;
          if (vinylRecord) {
            vinylRecord.classList.toggle('spinning', isPlaying);
          }
        });
      }
    });

    // Dengarkan event audio
    bgMusic.addEventListener('play', () => {
      isPlaying = true;
      if (vinylRecord) vinylRecord.classList.add('spinning');
    });

    bgMusic.addEventListener('pause', () => {
      isPlaying = false;
    });
  }

  // 3. Interaksi Video Polaroid (Section 3)
  const birthdayVideo = document.getElementById('birthdayVideo');
  const videoPlaceholder = document.getElementById('videoPlaceholder');

  if (videoPlaceholder && birthdayVideo) {
    videoPlaceholder.addEventListener('click', () => {
      birthdayVideo.play().then(() => {
        videoPlaceholder.classList.add('hidden');
      }).catch(() => {
        // Jika file video belum disematkan, sembunyikan placeholder untuk melihat frame
        videoPlaceholder.classList.add('hidden');
      });
    });

    birthdayVideo.addEventListener('play', () => {
      videoPlaceholder.classList.add('hidden');
    });

    birthdayVideo.addEventListener('pause', () => {
      if (birthdayVideo.currentTime === 0) {
        videoPlaceholder.classList.remove('hidden');
      }
    });
  }

  // 4. Parallax Halus saat Scroll (Hormati prefers-reduced-motion)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const filmstrip = document.querySelector('.filmstrip-wrapper');
      if (filmstrip && scrollY > 200 && scrollY < 1200) {
        const offset = (scrollY - 400) * 0.04;
        filmstrip.style.transform = `rotate(${-3.5 + offset * 0.08}deg) translateY(${offset}px)`;
      }
    }, { passive: true });
  }

});
