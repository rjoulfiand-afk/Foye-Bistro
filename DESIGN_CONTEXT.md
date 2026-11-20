# Foye Bistro — Website Context

## Identitas
- Nama: Foye Bistro
- Lokasi: Dharmahusada, Surabaya
- Positioning: Modern Asian Bistro
- Bahasa utama: Bahasa Indonesia; istilah kuliner/brand berbahasa Inggris dipertahankan bila natural.
- Nada komunikasi: hangat, editorial, ringkas, premium tetapi tidak kaku.

## Palet Warna
Palet aktual website disimpan sebagai token Tailwind di `index.html` dan variabel CSS di `assets/css/custom.css`.

| Token | Hex | Peran |
|---|---|---|
| `foye-paper` | `#F6F3EC` | Latar utama warm paper/alabaster |
| `foye-surface` | `#EDE8DD` | Surface/card dan area lembut |
| `foye-teal` | `#1A4F49` | Warna brand utama, heading, section anchor |
| `foye-teal-dark` | `#113632` | Footer, overlay gelap, panel kontras |
| `foye-red` | `#C83228` | CTA, badge Chef's Pick, aksen aksi |
| `foye-red-dark` | `#A3251D` | Hover CTA |
| `foye-brick` | `#A65E3E` | Label editorial dan aksen sekunder |
| `foye-ink` | `#1A1F1E` | Teks utama dan overlay |

### Aturan warna
- Pertahankan kombinasi warm paper + deep teal + red/brick.
- Gunakan red hanya untuk aksi atau penekanan, bukan sebagai latar besar.
- Hindari gradient neon, ungu-biru, dan shadow berat.
- Gunakan border tipis dan kontras lembut.

## Tipografi
- Heading/display: `Cormorant Garamond`; editorial serif, italic untuk penekanan.
- UI/body: `Plus Jakarta Sans`; bersih dan mudah dibaca.
- Heading besar: ringan sampai medium, leading rapat.
- Label: uppercase, tracking lebar, ukuran kecil.
- Harga: angka tabular melalui `.price-num`.

## Tema Visual
- Editorial dining: premium, hangat, tenang, tactile.
- Terinspirasi menu restoran dan hospitality modern Asia.
- Foto makanan/ruang menjadi elemen utama; overlay gelap dipakai untuk keterbacaan hero.
- Bentuk sederhana: sudut hampir kotak (`rounded-sm`), tanpa efek dekoratif berlebihan.
- Motion minimal dan fungsional: hover, fade saat filter, drawer transition.

## Struktur Website
1. Sticky navbar: logo, tiga anchor utama, CTA reservasi.
2. Hero editorial: foto utama, positioning, deskripsi, CTA.
3. Quick info bar: jam buka, alamat, fasilitas private.
4. Curated menu: filter kategori dan kartu menu berbasis data.
5. Spaces & VIP: section deep teal, tiga kartu area, CTA VIP.
6. Location: alamat, jam, WhatsApp, Google Maps, Instagram, embed map.
7. Footer: identitas brand dan status preview.
8. Mobile bottom bar: shortcut menu dan reservasi WhatsApp.
9. Full menu drawer: daftar menu ringan tanpa PDF.

## Arsitektur Teknis
- Static HTML, tanpa build step.
- Tailwind CSS CDN dikonfigurasi langsung di `index.html`.
- CSS tambahan: `assets/css/custom.css`.
- Data terpusat: `assets/js/data.js` melalui `FOYE_DATA`.
- Rendering/interaksi vanilla JS: `assets/js/main.js`.
- Asset gambar dikelompokkan dalam `assets/images/brand`, `hero`, `menu`, `spaces`.
- Reservasi memakai WhatsApp contextual links.
- Deploy target: Vercel melalui `vercel.json`.

## Pola Konten
- Copy utama menggunakan Bahasa Indonesia.
- Nama menu, label kategori, dan istilah hospitality boleh berbahasa Inggris.
- CTA langsung: `Reservasi Meja`, `Lihat Menu`, `Buka Google Maps`, `Tanya Ketersediaan VIP Room`.
- Jangan menambah klaim restoran yang tidak tersedia di `assets/js/data.js`.

## Batasan Perubahan
- Pertahankan identitas warna dan tipografi kecuali diminta eksplisit.
- Prioritaskan perubahan kecil pada file yang sudah ada.
- Jangan menambah dependency atau framework untuk kebutuhan yang bisa ditangani HTML/CSS/vanilla JS.
- Setiap fitur interaktif baru harus menjaga aksesibilitas dasar: semantic HTML, label, focus/keyboard, dan kontras.
