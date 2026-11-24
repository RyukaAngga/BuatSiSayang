<div align="center">

# 💖 Buat Si Sayang — Romantic Birthday Scrapbook

<p align="center">
  <strong>Website Scrapbook Digital Interaktif Khusus Hari Ulang Tahun Tersayang ✨</strong>
</p>

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Mobile First](https://img.shields.io/badge/Design-Mobile--First-FF69B4?style=for-the-badge)](#)
[![Made with Love](https://img.shields.io/badge/Made%20With-Love%20%E2%9D%A4%EF%B8%8F-red?style=for-the-badge)](#)

---

### 🌐 Live Demo & Preview
👉 **[Lihat Live Demo di Sini](https://buatsisayang.vercel.app/)** *(atau buka domain Vercel Anda setelah deploy)*

---

</div>

## 📖 Tentang Proyek

**Buat Si Sayang** adalah sebuah website kado ulang tahun bergaya scrapbook fisik (*vintage aesthetic scrapbook*) yang dibuat murni menggunakan **Vanilla HTML, CSS, dan JavaScript**. Website ini dirancang khusus dengan pendekatan **Mobile-First** agar tampil sempurna di layar smartphone selayaknya membuka album kenangan langsung di genggaman tangan, sekaligus tetap elegan dan berpusat di layar desktop.

Setiap detail dirancang dengan cermat menggunakan aset visual berkualitas tinggi: mulai dari sobekan kertas bertekstur, kain kotak-kotak merah (*gingham*), piringan hitam (*vinyl*) yang berputar lembut, pemutar lirik bertema Spotify, hingga kalender ulang tahun interaktif dan pemutar video polaroid.

---

## ✨ Fitur Utama

### 💌 1. Section 1 — Hero Section (The Love Letter)
- **Amplop Interaktif (`envelope-2.png`)**: Amplop surat cinta realistis yang dipegang tangan, dilengkapi efek melayang pelan (*subtle float*) dan animasi klik menuju kejutan `surprise.html`.
- **Bunga Hibiscus Berputar Halus**: Efek putaran 360° yang santai dan lembut di sudut layar.
- **Kliping Koran Vintage**: Potongan koran autentik di sudut kiri bawah dan kanan atas (`newspaper-2.png`).
- **Typography Scrapbook**: Kombinasi font tulisan tangan indah (*Italianno*, *Caveat*) dan mesin ketik (*Courier Prime*).

### 🎶 2. Section 2 — Music & Memories
- **Kain Gingham & Kertas Berlapis**: Latar kain kotak-kotak merah (*gingham-red.webp*) dilapisi kertas putih asli (*white-paper.webp*) dan lembar kolase (*paper-sec2.png*).
- **Filmstrip 4 Slot Kenangan**: Pita film vertikal dengan 4 slot foto kenangan, dihiasi **Pita Satin Merah Besar** di sudut kanan atas dengan simpul dan juntaian yang elegan.
- **Piringan Hitam Vinyl Berputar**: Piringan hitam berputar dengan teks melingkar *"Sampai Akhir Waktu"*, terhubung langsung dengan audio latar belakang yang dapat di-play/pause saat diklik.
- **Kartu Spotify Player Pink**: Bingkai soft pink berisi judul lagu **"Sampai Akhir Waktu" - Yovie & Nuno**, lirik romantis yang menyentuh, logo Spotify, dan jarum *pushpin* merah besar yang menancap di sudut kartu.

### 📅 3. Section 3 — Birthday Calendar & Memory Video
- **Kertas Sobek Khusus Sudut**: Aset `paper-sec3.png` yang menempel rapi di sudut kiri atas.
- **Kalender Ulang Tahun (3 Desember 2026)**: Disusun di atas kertas sobek *paper-3.png* dengan tanggal **3 Desember 2026** dilingkari tinta merah bulat presisi menggunakan SVG lingkaran, ditusuk *pushpin* merah besar dan stiker bintang berkilau.
- **Bingkai Polaroid Pemutar Video**: Layar pemutar video berformat polaroid dengan caption romantis bertuliskan tangan *"Happy Birthday, Sayang"*, siap memutar video kompilasi kenangan indah Anda.

### ✂️ 4. Pembatas Kertas Robek Antar-Section
- **Aset `white-ripped.png`**: Pita robekan kertas putih horizontal yang memisahkan transisi antar section, sehingga perpindahan dari kertas merah ke kain gingham merah terasa sangat lembut, artistik, dan menyatu.

---

## 🛠️ Tech Stack

<div align="left">

- **Markup**: HTML5 Semantic
- **Styling**: Modern CSS3 (CSS Variables, Flexbox, CSS Grid, Keyframe Animations, `@media prefers-reduced-motion`)
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Caveat*, *Italianno*, *Courier Prime*)
- **Scripting**: Vanilla JavaScript (tanpa framework berat, super ringan & cepat)
- **Deployment**: Vercel Ready (`vercel.json`)

</div>

---

## 📂 Struktur Direktori Proyek

```plaintext
birthday-site/
├── assets/
│   ├── audio/              # File lagu MP3 (contoh: song.mp3)
│   ├── backgrounds/        # Aset latar (gingham-red.webp, red-paper.webp, white-paper.webp)
│   ├── photos/             # Foto-foto kenangan untuk slot filmstrip
│   ├── stickers/           # Koleksi stiker PNG (envelope, filmstrip, vinyl, pushpin, ribbon, dll.)
│   └── videos/             # File video kenangan (contoh: memory.mp4)
├── index.html              # Halaman utama scrapbook
├── surprise.html           # Halaman surat kejutan lanjutan
├── style.css               # Seluruh styling, layout, dan animasi responsif
├── script.js               # Interaksi musik vinyl, amplop, video, dan scroll parallax
├── vercel.json             # Konfigurasi deploy Vercel
├── .gitignore              # Mengabaikan file sistem operasi & sementara
└── README.md               # Dokumentasi proyek
```

---

## 🚀 Panduan Menjalankan Secara Lokal

1. **Clone repositori ini**:
   ```bash
   git clone https://github.com/RyukaAngga/BuatSiSayang.git
   cd BuatSiSayang
   ```

2. **Jalankan website**:
   - Anda cukup membuka file `index.html` langsung di browser favorit Anda (Google Chrome, Microsoft Edge, Safari, dll).
   - Atau gunakan ekstensi **Live Server** di VS Code untuk pengalaman *live-reloading* yang mulus.

---

## ☁️ Panduan Deploy ke Vercel

Website ini sudah dilengkapi dengan konfigurasi `vercel.json` dan siap di-deploy secara instan ke **Vercel**:

### Opsi 1: Lewat Dashboard Vercel (Paling Mudah)
1. Buka [Vercel Dashboard](https://vercel.com/dashboard).
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Hubungkan akun GitHub Anda dan pilih repositori `RyukaAngga/BuatSiSayang`.
4. Pada bagian **Framework Preset**, pilih **Other** (atau biarkan default).
5. Klik **Deploy**! Website Anda akan langsung online dengan domain gratis seperti `buatsisayang.vercel.app`.

### Opsi 2: Menggunakan Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🎨 Panduan Kustomisasi Konten

1. **Mengganti Lagu**:
   - Masukkan file audio MP3 Anda ke dalam folder `assets/audio/song.mp3`.
2. **Mengisi Foto Kenangan**:
   - Masukkan foto-foto Anda ke dalam `assets/photos/` dan sematkan ke dalam `.photo-slot-1` hingga `.photo-slot-4` di `index.html`.
3. **Mengganti Video Polaroid**:
   - Letakkan video Anda di `assets/videos/memory.mp4`.
4. **Mengubah Tanggal Kalender**:
   - Edit elemen `.birthday-highlight` pada grid kalender di Section 3 `index.html`.

---

## 📄 Lisensi & Kredit

Dibuat dengan segenap cinta ❤️ oleh [Ryuka Angga](https://github.com/RyukaAngga).  
Proyek ini bebas digunakan untuk keperluan kado pribadi dan edukasi non-komersial.

<div align="center">
  <sub>Setiap detik bersamamu adalah kenangan terindah yang abadi sampai akhir waktu. 💕</sub>
</div>
