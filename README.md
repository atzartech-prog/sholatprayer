# 🕌 Sholat & Doa - Kumpulan Aplikasi Ibadah Interaktif

Repositori ini berisi kumpulan aplikasi web edukatif dan interaktif bertemakan amalan ibadah harian seorang muslim. Aplikasi ini dirancang menggunakan HTML5, CSS3, dan JavaScript murni (Vanilla) sehingga sangat ringan, responsif, dan dapat dijalankan secara luring (offline) maupun daring (online).

---

## 📂 Struktur Repositori

Repositori ini menggabungkan dua aplikasi terpisah di bawah satu gerbang utama:

```text
sholatprayer/
├── index.html            # Portal gerbang utama pilihan aplikasi
├── README.md             # Panduan induk dokumentasi repositori
│
├── keutamaan-sholat/     # 1. APLIKASI KEUTAMAAN SHOLAT & JURNAL
│   ├── index.html        # Antarmuka dashboard & dalil shalat
│   ├── style.css         # Desain layout & mode gelap shalat
│   ├── app.js            # Database hadits, jurnal tracker & tasbih
│   ├── run_app.sh        # Script bash untuk menyalakan server lokal
│   └── README.md         # Dokumentasi spesifik Keutamaan Sholat
│
└── al-matsurat/          # 2. APLIKASI DZIKIR PAGI & SORE AL-MA'TSURAT
    ├── index.html        # Antarmuka dzikir & panel mode fokus
    ├── style.css         # Desain twilight senja & subuh dzikir
    ├── app.js            # Redaksi pagi/sore, counter, audio & TTS
    ├── run_app.sh        # Script bash untuk menyalakan server lokal
    └── README.md         # Dokumentasi spesifik Al-Ma'tsurat
```

---

## 📱 Aplikasi yang Tersedia

### 1. 🕌 Keutamaan Sholat & Jurnal Ibadah
Aplikasi yang berfokus pada landasan hukum pentingnya mendirikan shalat serta alat evaluasi ibadah pribadi.
* **Fitur**: 12 Dalil Shahih (Arab/Terjemahan/Suara TTS), Jurnal Evaluasi Sholat Harian (Wajib/Tepat Waktu/Berjamaah/Rawatib), Grafik batang aktivitas 7 hari terakhir, dan digital Tasbih.
* **Panduan**: [Dokumentasi Keutamaan Sholat](./keutamaan-sholat/README.md)

### 2. ✨ Al-Ma'tsurat Pagi & Sore Interaktif
Aplikasi pembacaan dzikir Al-Ma'tsurat yang adaptif dan interaktif untuk menjaga amalan dzikir harian.
* **Fitur**: Deteksi otomatis Dzikir Pagi/Sore, Redaksi kata Arab dinamis (*Asbahna* / *Amsayna*), Mode Fokus layar penuh dengan navigasi slide (mendukung keyboard Spacebar), Synthesizer audio ketukan (*woodblock*) dan lonceng (*metallic chime*) mandiri melalui Web Audio API, serta pembaca teks suara terjemahan.
* **Panduan**: [Dokumentasi Al-Ma'tsurat](./al-matsurat/README.md)

---

## 🚀 Cara Menjalankan Aplikasi Secara Lokal

Seluruh aplikasi dapat dibuka langsung secara offline dengan membuka file `index.html` di browser Anda.

Jika ingin menggunakan server lokal demi kelancaran fitur suara (Speech Synthesis) dan Audio Context pada browser modern, Anda dapat menyalakan server di komputer/Termux menggunakan script launcher:

```bash
# Menyalakan server pada root (portal gerbang utama)
# Anda bisa menggunakan Python di folder root:
python3 -m http.server 8080

# Atau masuk ke masing-masing subdirektori untuk menyalakan launcher mandiri:
cd keutamaan-sholat && ./run_app.sh
# atau
cd al-matsurat && ./run_app.sh
```

Buka browser Anda dan akses:
👉 **[http://localhost:8080](http://localhost:8080)**

---

## 🔒 Privasi Pengguna
Seluruh data pencatatan jurnal shalat, bookmarks dalil favorit, serta perkembangan putaran dzikir tasbih disimpan secara lokal di browser Anda menggunakan **LocalStorage**. Aplikasi ini tidak menyimpan data Anda ke server internet apa pun untuk menjamin privasi ibadah harian Anda.
