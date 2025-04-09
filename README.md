# Byte by Byte - Platform Belajar Coding Online

Byte by Byte adalah platform belajar coding online yang fokus pada HTML, CSS, dan JavaScript untuk pemula. Website ini dibangun dengan Next.js, TailwindCSS, dan MDX untuk konten pembelajaran yang mudah dikelola.

![Byte by Byte](public/byte-by-byte-preview.png)

## Fitur

- ✨ Antarmuka modern dan responsif
- 📱 Tampilan optimal di semua perangkat (desktop, tablet, mobile)
- 📝 Konten berbasis MDX untuk manajemen konten yang mudah
- 🔍 Navigasi intuitif dan pengalaman pengguna yang baik
- 🌙 Mode gelap/terang otomatis (berdasarkan preferensi sistem)
- 🚀 Performa cepat dengan Next.js

## Teknologi yang Digunakan

- **Next.js** - Framework React untuk aplikasi web
- **TypeScript** - JavaScript dengan dukungan tipe statis
- **TailwindCSS** - Framework CSS untuk styling
- **MDX** - Markdown dengan komponen JSX
- **Framer Motion** - Library animasi untuk React

## Instalasi

1. Clone repositori:

```bash
git clone https://github.com/username/byte-by-byte.git
cd byte-by-byte
```

2. Instal dependensi:

```bash
npm install
```

3. Jalankan development server:

```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

## Menambahkan Konten Baru

Semua konten kursus disimpan di direktori `src/content` dan diorganisir berdasarkan jenis kursus (html, css, javascript). Untuk menambahkan konten baru:

1. Buat file MDX baru di direktori yang sesuai, misalnya `src/content/html/tags-dasar.mdx`
2. Tambahkan frontmatter di awal file:

```mdx
---
title: "Judul Artikel"
description: "Deskripsi singkat tentang artikel"
date: "2023-06-08"
tags: ["html", "tag"]
difficulty: "beginner" # beginner, intermediate, advanced
order: 2 # urutan artikel dalam kursus
---

# Isi konten di sini...
```

3. Tulis konten dengan format MDX. Anda dapat menggunakan semua fitur Markdown dan komponen kustom seperti `<Callout>`.

## Struktur Proyek

```
byte-by-byte/
├── public/                 # File statis
├── src/                    # Kode sumber
│   ├── app/                # Direktori app route Next.js
│   │   ├── courses/        # Halaman kursus
│   │   │   ├── [course]/   # Halaman kategori kursus
│   │   │   │   └── [slug]/ # Halaman artikel
│   │   ├── components/         # Komponen React
│   │   │   ├── course/         # Komponen terkait kursus
│   │   │   ├── layout/         # Komponen layout
│   │   │   ├── shared/         # Komponen yang digunakan bersama
│   │   │   └── ui/             # Komponen UI dasar
│   │   ├── content/            # Konten MDX
│   │   │   ├── html/           # Konten kursus HTML
│   │   │   ├── css/            # Konten kursus CSS
│   │   │   └── javascript/     # Konten kursus JavaScript
│   │   └── lib/                # Fungsi dan utilitas
│   └── tailwind.config.ts      # Konfigurasi Tailwind
```

## Kostumisasi

### Mengganti Tema

Anda dapat mengganti warna tema dengan mengedit file `tailwind.config.ts`.

### Menambah Jenis Kursus Baru

Untuk menambahkan jenis kursus baru:

1. Tambahkan jenis kursus baru di `src/lib/mdx.ts` dalam tipe `Course`
2. Buat direktori baru di `src/content/` untuk jenis kursus tersebut
3. Tambahkan informasi kursus di halaman-halaman yang relevan

## Deployment

Website ini dapat dengan mudah di-deploy ke platform seperti Vercel:

```bash
npm run build
```

## Kontribusi

Kontribusi selalu diterima! Jika Anda ingin berkontribusi:

1. Fork repositori
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Lisensi

MIT
