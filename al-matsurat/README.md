# ✨ Al-Ma'tsurat - Dzikir Pagi & Sore Interaktif

Aplikasi web interaktif, responsif, dan berestetika premium untuk mengamalkan dzikir pagi dan sore Al-Ma'tsurat (berdasarkan himpunan dzikir Ma'tsur oleh Imam Hasan Al-Banna). Aplikasi ini dirancang menggunakan teknologi web murni (Vanilla HTML, CSS, JS) agar ringan, cepat, dan sepenuhnya dapat dioperasikan secara offline.

---

## 🌟 Fitur Utama

### 1. 🌓 Adaptasi Waktu Otomatis
* Aplikasi secara otomatis mendeteksi waktu lokal perangkat Anda saat dibuka. Jika waktu berada di antara pukul 15.00 sore hingga 04.00 pagi, tema akan langsung disesuaikan ke mode **Dzikir Sore**. Sementara pukul 04.00 pagi hingga 15.00 siang akan masuk ke mode **Dzikir Pagi**. Anda juga dapat beralih secara manual kapan saja.
* Teks dzikir Arab, terjemahan, dan arti dinamis menyesuaikan variasi redaksi pagi/sore (seperti penggantian kalimat *Asbahna* menjadi *Amsayna*).

### 2. 🎯 Mode Fokus (Slide View)
* Antarmuka khusus layar penuh untuk meningkatkan kekhusyukan dzikir. Menampilkan satu kartu dzikir saja dalam satu waktu dengan tombol navigasi slide kiri/kanan.
* Area ketukan (*Tap Node*) besar di bagian bawah layar untuk memudahkan penghitungan dzikir tanpa harus melihat layar secara fokus. Mendukung ketukan tombol **Spacebar** pada keyboard untuk kemudahan pengguna komputer.

### 3. 📿 Counter & Tracker Perkembangan Harian
* Setiap kartu dzikir dilengkapi dengan tombol hitung counter interaktif. Tombol akan berubah warna menjadi hijau centang saat target bacaan tercapai (misal: 3x atau 100x).
* **Progress Bar**: Menampilkan persentase keseluruhan dzikir yang telah diselesaikan pada sesi tersebut.

### 4. 🔊 Web Audio API Synthesizer
* Menghasilkan audio umpan balik secara mandiri saat melakukan ketukan dzikir. Suara berupa ketukan kayu (*woodblock tick*) yang tenang, dan bunyi denting ganda (*metallic chime*) ketika target hitungan tercapai. Fitur ini dapat dimatikan/dihidupkan secara instan melalui ikon volume di header.

### 5. 🗣️ Pembaca Suara Terjemahan (TTS)
* Terintegrasi dengan Web Speech API bawaan browser untuk membacakan terjemahan doa secara otomatis dalam bahasa Indonesia yang terdengar alami.

---

## 🛠️ Spesifikasi Teknologi
* **HTML5**: Kerangka web semantik lengkap dengan penamaan elemen unik.
* **CSS3 (Twilight Theme)**: Tata letak responsif menggunakan Grid, Flexbox, dan *Glassmorphism*. Pilihan warna twilight gelap (`#070b13` & `#0f1626`) terinspirasi dari transisi langit subuh dan senja dengan aksen emas (`#f59e0b`). Dilengkapi dukungan Light Theme yang cerah.
* **JavaScript (ES6+)**: Logika interaktif, penyimpanan lokal (`localStorage`), Web Audio API, Web Speech API, dan deteksi waktu.
* **Lucide Icons**: Library ikon modern minimalis.
* **Google Fonts**: Font *Outfit* (teks bacaan) dan *Amiri* (teks kaligrafi Arab).

---

## 📂 Struktur Berkas
```text
al-matsurat/
├── index.html       # Struktur antarmuka halaman & mode fokus (HTML)
├── style.css        # Desain layout, responsivitas, dan tema warna (CSS)
├── app.js           # Database dzikir, logika navigasi, audio synth, & tracker (JS)
├── README.md        # Panduan dokumentasi proyek (Markdown)
└── run_app.sh       # Script bash pembantu untuk menyalakan server lokal
```

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi ini dapat langsung dijalankan secara luring dengan mengklik ganda file `index.html`. Namun, demi mendukung kelancaran fitur suara (TTS) dan Audio Context pada browser modern, sangat disarankan menggunakan server web statis lokal.

### 1. Menjalankan Server Lokal (Termux/Linux)
Jalankan script pembantu di folder proyek:
```bash
# Masuk ke folder proyek
cd /data/data/com.termux/files/home/al-matsurat

# Jalankan server
./run_app.sh
```
Script akan mencari Python atau Node.js dan menyalakan server di port `8080`.

### 2. Membuka di Browser
Buka browser Anda dan navigasikan ke:
👉 **[http://localhost:8080](http://localhost:8080)**

---

## 💾 Keamanan Data & Privasi
Seluruh data perkembangan hitungan dzikir Anda disimpan di dalam memori browser lokal Anda (**LocalStorage**). Data Anda tidak dikirim ke internet atau server mana pun, sehingga 100% aman dan menjaga privasi ibadah harian Anda secara penuh.
