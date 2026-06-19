# Frontend UI Showcase: Flutter vs Angular

Repositori ini memuat implementasi *User Interface (UI)* yang dibuat menggunakan dua buah *framework* berbeda, yaitu **Angular** dan **Flutter**, berdasarkan *mockup* desain yang sama. Tujuan utama project ini adalah sebagai komparasi menyeluruh (*side-by-side comparison*) dalam aspek responsivitas, cara mem-build, tingkat kesulitan, hingga arsitekturnya.

> **Catatan Penting (SDK)**: SDK Flutter/Angular **tidak disatukan/diupload** ke dalam repository ini karena ukuran filenya sangat besar (~1.7GB+ untuk Flutter) dan bertentangan dengan *best practice* Git. Repository kode murni difokuskan untuk *source code* saja. Panduan setup SDK bisa dibaca pada bagian bawah.

---

## 📸 UI Gallery & Comparison

Berikut adalah perbandingan secara *side-by-side* dari sisi desain *mockup* hingga implementasinya di kedua framework.

*(Pastikan Anda telah menyimpan gambar dengan nama `design.png`, `angular.png`, dan `flutter.png` ke dalam folder `assets/` agar gambar berikut bisa ter-render oleh GitHub)*.

| Desain Awal (Mockup) | Hasil Implementasi (Angular) | Hasil Implementasi (Flutter) |
|:---:|:---:|:---:|
| <img src="assets/design.png" width="250"> | <img src="assets/angular.png" width="250"> | <img src="assets/flutter.png" width="250"> |

*Kesimpulan Tampilan:* Keduanya bisa merender tampilan yang 100% *pixel-perfect* dan merespon layar berukuran *mobile viewport* (lebar < 480px). 

---

## ⚙️ Perbedaan Unik Cara Berjalan (*Running differences*)

| Kategori | Angular (Web) | Flutter (Cross-platform) |
| --- | --- | --- |
| **Engine Render** | Menggunakan standar DOM Web (Document Object Model) dan merender ke browser engine langsung (Blink/WebKit). | Menggunakan *graphics engine* internal (Skia / Impeller) yang "menggambar" setiap pixel ke layar. |
| **Cara Build** | Kompilasi ke Javascript murni (JS, HTML, CSS). | Kompilasi biner *native* (ARM/x86 untuk mobile/desktop) atau WebAssembly (WASM) untuk web. |
| **Styling** | Memisahkan komponen dengan CSS atau SCSS murni, sangat leluasa. | Styling disuntikkan secara deklaratif di dalam komponen Dart (Widget Tree), tidak ada CSS. |
| **Responsivitas** | Ditangani dengan CSS Media Queries (`@media`) atau Flexbox browser. | Ditangani melalui kalkulasi ukuran layar (MediaQuery/LayoutBuilder) secara internal di Dart. |

---

## ⏱️ Tingkat Respon (Performance in Milliseconds)

Berikut perbandingan kecepatan dan performa antara kedua sistem di ranah Web/Mobile:

- **Waktu Muat Awal (Time-to-Interactive):**
  - **Angular (Web):** Sangat cepat (Rata-rata **~50 - 200 ms**). Ukuran bundle lebih kecil karena struktur aslinya adalah Javascript yang dimengerti langsung oleh browser.
  - **Flutter (Web):** Relatif lebih lambat di web (Rata-rata **~500 - 1500 ms**). Hal ini karena browser harus memuat *engine* rendering Flutter (berbasis CanvasKit/WASM) terlebih dahulu. *Catatan: Namun untuk aplikasi Mobile (APK/iOS), Flutter instan.*

- **FPS (Frames Per Second) Render Animasi:**
  - Keduanya stabil merender *smooth animations* di **60 FPS hingga 120 FPS** (tergantung *refresh rate* perangkat) selama logika kompleks dijauhkan dari Main Thread.

---

## 🔒 Tingkat Keamanan (Security)

| Framework | Tingkat Keamanan & Konteks Perlindungan |
| --- | --- |
| **Angular** | **Sangat Baik untuk Web.** Memiliki built-in DOM Sanitizer untuk mencegah `Cross-Site Scripting (XSS)` secara *default*. Kodenya bisa diamati (Inspect Element), karenanya *logic* sensitif tetap harus di-handle oleh Backend. |
| **Flutter** | **Superior terhadap Reverse-Engineering (Web/Mobile).** Karena kodenya tidak di-render menjadi HTML standar, melainkan menjadi Canvas Element atau WebAssembly, kode sumber Anda tidak bisa langsung di-*inspect* oleh *user* sembarangan. Mencegah manipulasi DOM manual (*injection*). |

---

## 🧠 Tingkat Kesulitan Berdasarkan Level Pengalaman (Learning Curve)

| Level Programmer | Angular | Flutter |
| --- | --- | --- |
| **Pemula (Beginner)** | **Sulit (⭐⭐⭐⭐)** - Harus mengerti konsep Typescript, Dependency Injection, Observable/RxJS, modul, dan dekorator. | **Sedang (⭐⭐⭐)** - Konsep "Semuanya adalah Widget" cukup intuitif, tapi hierarki widget bisa membingungkan bagi pemula. |
| **Junior** | **Sedang (⭐⭐⭐)** - Butuh sekitar 1-2 bulan memahami reaktivitas *state management* bawaannya. | **Sedang (⭐⭐⭐)** - Bisa membuat UI dasar sangat cepat, namun butuh waktu untuk manajemen *State* (Provider/Bloc). |
| **Mid** | **Mudah (⭐⭐)** - Bisa sangat produktif jika sudah terbiasa dengan pola pikir arsitektur berbasis OOP/Service yang rapi. | **Mudah (⭐⭐)** - Sangat cepat me-render *pixel-perfect* UI dan menghubungkannya dengan Backend. |
| **Senior** | **Sangat Cepat (⭐)** - Arsitekturnya yang ketat membuat skalabilitas aplikasi kelas *enterprise* menjadi sangat mudah dijaga kerangka kerjanya. | **Sangat Cepat (⭐)** - Arsitekturnya yang seragam mempermudah pembuatan aplikasi ke berbagai target platform (Web/iOS/Android) dalam 1 codebase. |

*Estimasi Durasi Belajar untuk Menguasai Dasar (UI, State, Routing):*
- **Angular:** ~4 hingga 6 Minggu.
- **Flutter:** ~2 hingga 4 Minggu.

---

## 💻 Panduan Menjalankan Project (Local Run Requirements)

Untuk menjalankan kedua folder ini di komputer lokal Anda, berikut persyaratan yang **harus** disiapkan:

### 1. Angular (`Angular_Framework`)
**Persyaratan Sistem:**
- Node.js (Minimal versi 18+)
- Angular CLI (`npm install -g @angular/cli`)

**Cara Menjalankan:**
1. Masuk ke direktori: `cd Angular_Framework/portfolio-app`
2. Instal dependensi: `npm install`
3. Jalankan server lokal: `ng serve` atau `npm start`
4. Buka di browser: `http://localhost:4200/`

---

### 2. Flutter (`Flutter_Framework`)
**Persyaratan Sistem:**
- [Flutter SDK](https://docs.flutter.dev/get-started/install) ter-install dan sudah terdaftar di System PATH Anda.
- Google Chrome atau Microsoft Edge untuk Flutter Web.

**Cara Menjalankan:**
1. Pastikan perintah `flutter` dapat dijalankan di terminal.
2. Masuk ke direktori: `cd Flutter_Framework`
3. Unduh semua *packages*: `flutter pub get`
4. Jalankan aplikasi web lokal: `flutter run -d chrome`

---

*Repository ini dirancang dan direpresentasikan untuk tujuan perbandingan dan pembelajaran komparatif Frontend Engineering. Silakan *clone* dan eksekusi di lokal Anda.*
