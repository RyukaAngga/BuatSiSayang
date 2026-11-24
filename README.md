# Birthday Scrapbook

A handcrafted, mobile-first birthday scrapbook website built with vanilla HTML, CSS, and JavaScript. Designed to feel like a real paper scrapbook — layered textures, torn edges, stickers, and interactive elements.

[![Live Demo](https://img.shields.io/badge/Live-Demo-d32032?style=for-the-badge)](https://buatsisayang.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Red paper background, animated flowers, newspaper clippings, and an interactive envelope link |
| 2 | **Music** | Gingham tablecloth texture with layered paper, a filmstrip of memories, clickable vinyl record, and a Spotify-style lyrics card |
| 3 | **Calendar & Video** | Birthday date highlighted on a December 2026 calendar, plus a polaroid-framed video player |

## Tech Stack

- **HTML5** / **CSS3** / **Vanilla JS** — no frameworks, no build step
- CSS custom properties, keyframe animations, `prefers-reduced-motion` support
- Mobile-first layout (max-width 480px, centered on desktop)
- Deployed on **Vercel** with `vercel.json` for clean URLs and asset caching

## Project Structure

```
birthday-site/
├── index.html          # Main scrapbook page
├── surprise.html       # Surprise / interactive page
├── style.css           # All styles
├── script.js           # Interactions (envelope, vinyl, video)
├── vercel.json         # Vercel deployment config
├── assets/
│   ├── backgrounds/    # Paper textures (red-paper, gingham, white-paper)
│   ├── stickers/       # Decorative assets (flowers, filmstrip, pushpin, ribbon, etc.)
│   ├── audio/          # Background music
│   ├── photos/         # Photo assets
│   └── videos/        # Video memories
└── README.md
```

## Local Setup

```bash
# Clone the repository
git clone https://github.com/RyukaAngga/BuatSiSayang.git
cd BuatSiSayang

# Open in browser — no build needed
# Use any local server, for example:
npx serve .
```

## License

Made with care. Personal use.
