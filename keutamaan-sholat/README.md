# 🕌 Fadhilah Sholat - Aplikasi Keutamaan Sholat & Dalil Shahih

Aplikasi web interaktif, responsif, dan berestetika premium untuk mempelajari keutamaan ibadah shalat 5 waktu beserta dalil Al-Qur'an dan As-Sunnah yang shahih. Aplikasi ini dirancang menggunakan teknologi web murni (vanilla) agar ringan, cepat, dan sepenuhnya dapat dijalankan secara offline maupun online.

---

## ✨ Fitur Utama

### 1. 📖 Galeri Dalil Keutamaan Sholat
* **Kategori Terstruktur**: Terbagi menjadi Sholat Wajib, Sholat Sunnah (Rawatib, Tahajjud, Duha), Ancaman Meninggalkan Sholat, serta Dzikir & Doa bakda shalat.
* **Teks Arab Indah**: Dilengkapi font khusus kaligrafi **Amiri** dengan dukungan pembacaan arah kanan-ke-kiri (RTL).
* **Text-to-Speech (TTS)**: Dengarkan pembacaan terjemah hadits secara otomatis dalam Bahasa Indonesia menggunakan Web Speech API bawaan browser.
* **Pencarian Instan**: Temukan dalil atau hadits berdasarkan judul, nomor hadits, nama perawi, maupun isi kandungan terjemahan.

### 2. 📿 Tasbih & Dzikir Digital
* **Visual Progress Circle**: Cincin progres dinamis berbasis SVG yang bergerak seiring ketukan tasbih.
* **Web Audio API Synth**: Menghasilkan suara ketukan kayu alami (*tick*) saat berdzikir dan lonceng metallic lembut (*chime*) saat target putaran terpenuhi (33x atau 100x), tanpa membutuhkan aset audio eksternal.
* **Preset Dzikir**: Pilihan kalimat dzikir umum (Subhanallah, Alhamdulillah, Allahu Akbar, dll.) atau buat dzikir kustom Anda sendiri.

### 3. 📝 Jurnal Evaluasi Shalat Harian
* **Indikator Kualitas**: Catat ibadah shalat harian Anda dengan indikator tambahan seperti *Tepat Waktu*, *Berjamaah*, dan pelaksanaan *Sunnah Rawatib*.
* **Amalan Sunnah Pilihan**: Checklist khusus untuk memantau shalat Tahajjud, Duha, dan Witir.
* **Grafik Aktivitas Mingguan**: Rangkuman persentase pencapaian mingguan lengkap dengan grafik batang interaktif selama 7 hari terakhir.

### 4. 🔗 Modul Berbagi & Favorit
* **Bookmark Favorit**: Simpan dalil pilihan Anda ke tab khusus yang tersimpan permanen menggunakan `localStorage`.
* **Share Modal**: Salin teks dalil terformat rapi ke clipboard atau bagikan langsung melalui WhatsApp dan Twitter/X.

### 5. 🌗 Dukungan Dark / Light Mode
* Tampilan tema visual gelap dan terang yang nyaman di mata dengan transisi warna yang halus.

---

## 🛠️ Teknologi yang Digunakan
* **HTML5**: Kerangka web semantik dan ramah SEO.
* **CSS3 (Vanilla)**: Desain kustom berkonsep *Glassmorphism* dengan tata letak Grid & Flexbox yang sepenuhnya responsif di perangkat mobile maupun desktop.
* **JavaScript (ES6+)**: Logika interaktif, penyimpanan lokal (`localStorage`), Web Audio API, dan Web Speech API.
* **Lucide Icons**: Library ikon vektor modern beresolusi tinggi.
* **Google Fonts**: Tipografi modern menggunakan font *Outfit* (untuk teks umum) dan *Amiri* (untuk teks Arab).

---

## 📂 Struktur Berkas
```text
keutamaan-sholat/
├── index.html       # Kerangka antarmuka utama (HTML)
├── style.css        # Desain grafis & sistem tema (CSS)
├── app.js           # Logika interaktif & pangkalan data dalil (JS)
├── README.md        # Dokumentasi proyek (Markdown)
└── run_app.sh       # Script bash pembantu untuk menjalankan server lokal
```

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi ini dapat dibuka langsung dengan mengklik ganda file `index.html` pada browser Anda. Namun, untuk mengaktifkan fitur suara (TTS) secara optimal pada sebagian browser, disarankan menjalankannya melalui server web lokal.

### 1. Menjalankan Server Lokal (Termux/Linux)
Jalankan script pembantu yang telah disediakan:
```bash
# Berikan izin eksekusi jika belum
chmod +x run_app.sh

# Jalankan server
./run_app.sh
```
Script tersebut akan mendeteksi Python atau Node.js di perangkat Anda, lalu menyalakan server lokal pada port `8080` (atau port berikutnya yang tersedia).

### 2. Akses Aplikasi
Buka browser Anda dan akses alamat:
👉 **[http://localhost:8080](http://localhost:8080)**

---

## 💾 Penyimpanan Data
Aplikasi ini berjalan sepenuhnya pada sisi klien (client-side). Semua data jurnal shalat harian, putaran tasbih harian, serta dalil terfavorit disimpan secara lokal di browser Anda menggunakan **LocalStorage**. Data Anda tidak dikirim ke server mana pun sehingga privasi ibadah Anda terjamin aman.

---

## 🕌 Lisensi & Sumber Dalil
* Semua hadits yang disajikan dalam aplikasi ini bersumber dari kitab-kitab hadits shahih terkemuka (Kutubut Tis'ah) seperti HR. Bukhari, Muslim, Tirmidzi, Ahmad, dan An-Nasa'i.
* Proyek ini bersifat sumber terbuka (Open Source). Anda bebas menyalin, memodifikasi, dan menyebarluaskannya untuk kepentingan dakwah dan pendidikan.
