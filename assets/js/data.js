/**
 * FOYE BISTRO — CENTRALIZED PREVIEW DATA
 * Ganti isi file ini jika ingin menyesuaikan menu asli Foye Bistro
 * atau mendaur ulang template untuk prospek restoran lain.
 */

const FOYE_DATA = {
  restaurant: {
    name: "Foye Bistro",
    locationShort: "Jl. Dharmahusada No. 122, Surabaya",
    locationFull: "Jl. Dharmahusada No.122, Mojo, Kec. Gubeng, Surabaya, Jawa Timur 60285",
    hours: "Setiap Hari · 08.00 – 22.00 WIB",
    // Nomor WhatsApp reservasi resmi Foye Bistro Dharmahusada
    whatsappNumber: "6287876964089",
    instagramUrl: "https://www.instagram.com/foyebistro/",
    googleMapsUrl: "https://www.google.com/maps/place/Foye+Bistro+-+Dharmahusada/@-7.2670799,112.768992,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fa298a3664b5:0x7f11723724c8c223!8m2!3d-7.2670799!4d112.768992!16s%2Fg%2F11s2m1ygsr",
    heroImage: "assets/images/hero/hero-banner-optimized.jpg",
    waMessages: {
      general: "Halo Foye Bistro, saya ingin melakukan reservasi meja untuk [Jumlah Orang] orang pada tanggal [Tanggal] pukul [Jam].",
      vip: "Halo Foye Bistro, saya ingin menanyakan info kapasitas dan ketersediaan VIP Room untuk acara pada tanggal [Tanggal]."
    }
  },

  categories: [
    { id: "all", label: "Semua Pilihan" },
    { id: "signature", label: "Signature" },
    { id: "sharing", label: "Sharing Plates" },
    { id: "drinks", label: "Artisan Drinks" }
  ],

  // 6 Menu Kurasi untuk Landing Page (struktur siap pindah ke tabel MySQL `menus`)
  signatureMenus: [
    {
      id: 1,
      name: "Foye Signature Sharing Feast",
      category: "sharing",
      categoryLabel: "Sharing Plates",
      description: "Koleksi sajian signature bistro terlengkap: Striploin Nero Pasta, Grilled Jumbo Prawns, Beef Ribs, dan aneka Asian bites.",
      price: "245K",
      is_signature: true,
      image: "assets/images/menu/menu-01.webp"
    },
    {
      id: 2,
      name: "Triple 'B' Signature Bao",
      category: "sharing",
      categoryLabel: "Sharing Plates",
      description: "Mantou kukus lembut disajikan hangat dalam kukusan bambu dengan isian daging asap krispi, onion rings, dan saus racikan khas.",
      price: "68K",
      is_signature: true,
      image: "assets/images/menu/menu-02.webp"
    },
    {
      id: 3,
      name: "Striploin Nero Pasta",
      category: "signature",
      categoryLabel: "Signature",
      description: "Spageti tinta cumi hitam khas Foye Bistro disajikan dengan irisan grilled striploin medium-rare, jamur shimeji, dan sambal dabu-dabu segar.",
      price: "98K",
      is_signature: true,
      image: "assets/images/menu/menu-03.webp"
    },
    {
      id: 4,
      name: "Softshell Crab Squid Ink Rice",
      category: "signature",
      categoryLabel: "Signature",
      description: "Nasi cumi hitam gurih disajikan di atas daun pisang dengan kepiting soka krispi utuh, onsen egg lembut, dan sambal matah segar.",
      price: "115K",
      is_signature: true,
      image: "assets/images/menu/menu-04.webp"
    },
    {
      id: 5,
      name: "Salted Egg Chicken Pasta",
      category: "signature",
      categoryLabel: "Signature",
      description: "Spageti aglio e olio berpadu ayam goreng krispi berbalur saus telur asin gurih melimpah dan taburan sambal matah.",
      price: "88K",
      is_signature: false,
      image: "assets/images/menu/menu-05.webp"
    },
    {
      id: 6,
      name: "Chicken Sliders & Hand-Cut Chips",
      category: "sharing",
      categoryLabel: "Sharing Plates",
      description: "Brioche bun panggang lembut dengan isian ayam goreng krispi bersaus spesial, disajikan lengkap bersama keripik kentang renyah.",
      price: "65K",
      is_signature: false,
      image: "assets/images/menu/menu-06.webp"
    },
    {
      id: 7,
      name: "Lychee Oolong Spritz",
      category: "drinks",
      categoryLabel: "Artisan Drinks",
      description: "Cold-brew oolong, leci, dan soda segar dengan aroma floral yang ringan.",
      price: "48K",
      is_signature: false,
      image: "assets/images/menu/menu-07.webp"
    },
    {
      id: 8,
      name: "Yuzu Espresso Tonic",
      category: "drinks",
      categoryLabel: "Artisan Drinks",
      description: "Double shot espresso, yuzu, dan tonic water dengan rasa citrus yang menyegarkan.",
      price: "52K",
      is_signature: false,
      image: "assets/images/menu/menu-08.webp"
    }
  ],

  // Daftar Menu Lengkap untuk Drawer (Ringan tanpa foto, pengganti PDF)
  fullMenuList: [
    {
      section: "Main Course & Signature",
      items: [
        { name: "Crispy Duck Sambal Matah", desc: "Bebek renyah, nasi daun jeruk, sambal matah", price: "115K" },
        { name: "Truffle Wagyu Donburi", desc: "Wagyu panggang, onsen egg, truffle tare", price: "138K" },
        { name: "Wok-Seared Mala Beef", desc: "Sapi tumis mala Sichuan, nasi putih hangat", price: "108K" },
        { name: "Smoked Salmon Fried Rice", desc: "Nasi goreng gaya Asia, salmon asap, tobiko", price: "95K" },
        { name: "Braised Pork Belly / Beef Brisket", desc: "Masak lambat 6 jam dengan saus kecap rempah", price: "125K" }
      ]
    },
    {
      section: "Sharing Plates & Bites",
      items: [
        { name: "Salted Egg Prawn Bao (2 pcs)", desc: "Mantou lembut, udang krispi, saus telur asin", price: "72K" },
        { name: "Truffle Chili Oil Gyoza (5 pcs)", desc: "Pangsit panggang, chili oil buatan sendiri", price: "58K" },
        { name: "Crispy Calamari Lime Salt", desc: "Cumi renyah bumbu lada garam & jeruk nipis", price: "68K" },
        { name: "Truffle Shoestring Fries", desc: "Kentang goreng tipis, parutan keju, aioli", price: "52K" }
      ]
    },
    {
      section: "Artisan Drinks & Coffee",
      items: [
        { name: "Lychee Oolong Spritz", desc: "Cold-brew oolong, leci, soda segar", price: "48K" },
        { name: "Yuzu Espresso Tonic", desc: "Double shot espresso, puree yuzu, tonic water", price: "52K" },
        { name: "Foye Signature Milk Coffee", desc: "Espresso house blend, susu segar, gula aren", price: "42K" },
        { name: "Jasmine Peach Iced Tea", desc: "Teh melati seduh dingin, potongan buah persik", price: "45K" }
      ]
    }
  ],

  // Area Ruangan (Struktur siap pindah ke tabel `spaces`)
  spaces: [
    {
      id: "indoor",
      name: "Main Indoor Dining",
      capacity: "2 – 8 Pax",
      tag: "Casual & Warm",
      description: "Interior hangat berpadu bilah kayu ekspos, bata terakota, dan pencahayaan lembut, nyaman untuk makan siang hingga makan malam bersama keluarga.",
      image: "assets/images/spaces/indoor.webp"
    },
    {
      id: "outdoor",
      name: "Garden Outdoor Patio",
      capacity: "2 – 10 Pax",
      tag: "Semi-Outdoor · Smoking",
      description: "Area terbuka rindang berkanopi kain draping estetis dan tanaman hijau segar. Cocok untuk bersantai sore sambil menikmati kopi atau sajian bistro.",
      image: "assets/images/spaces/outdoor.webp"
    },
    {
      id: "vip",
      name: "Private VIP Room",
      capacity: "10 – 20 Pax",
      tag: "Private · Meeting & Gathering",
      description: "Ruangan tertutup ber-AC dengan sekat pintu kaca geser industrial, sofa santai, dan mural tropis elegan untuk meeting perusahaan hingga jamuan eksklusif.",
      image: "assets/images/spaces/vip-room.webp",
      highlight: true
    }
  ]
};