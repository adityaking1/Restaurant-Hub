/**
 * ============================================================
 *  KONFIGURASI WEBSITE RESTORAN / CAFE
 *  Edit file ini untuk mengubah seluruh isi website Anda.
 *  Tidak perlu mengubah kode komponen lainnya.
 * ============================================================
 */

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number; // harga dalam Rupiah, contoh: 45000
  image: string; // URL gambar (boleh dari Unsplash, Pexels, atau gambar Anda sendiri)
  category: string; // harus cocok dengan id kategori di menuCategories
  popular?: boolean;
};

export type GalleryItem = {
  id: string;
  image: string;
  caption: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string; // contoh: "Pelanggan Setia", "Food Blogger"
  rating: number; // 1 - 5
  comment: string;
  avatar?: string;
};

export type Promo = {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string; // contoh: "Promo Bulan Ini", "Event Spesial"
  validUntil: string; // contoh: "31 Desember 2026"
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
};

export const siteConfig = {
  /* ============ IDENTITAS RESTORAN ============ */
  brand: {
    name: "Saung Rasa",
    tagline: "Cita Rasa Nusantara, Suasana Hangat",
    logoText: "SR", // huruf inisial untuk logo
    description:
      "Saung Rasa adalah restoran keluarga yang menyajikan masakan nusantara otentik dengan bahan segar pilihan. Nikmati hidangan istimewa dalam suasana hangat dan nyaman bersama orang tersayang.",
  },

  /* ============ WARNA TEMA ============
   * Format: HSL (Hue Saturation% Lightness%)
   * Contoh tema lain:
   *   - Modern Cafe Hijau:    primary "150 50% 35%"
   *   - Italian Trattoria:    primary "5 70% 45%"
   *   - Japanese Minimalist:  primary "0 0% 15%"
   *   - Tropical Bistro:      primary "180 60% 35%"
   */
  theme: {
    primary: "25 75% 45%", // warna utama (tombol, aksen) - oranye hangat
    primaryForeground: "0 0% 100%", // teks di atas warna utama
    accent: "40 90% 55%", // warna aksen (kuning emas)
    background: "35 35% 97%", // latar belakang utama
    foreground: "25 30% 15%", // warna teks utama
    muted: "30 20% 92%", // latar belakang lembut
    mutedForeground: "25 15% 40%",
    cardBg: "0 0% 100%",
    radius: "0.75rem", // tingkat kelengkungan sudut: 0rem (kotak) - 1.5rem (sangat bulat)
    fontHeading: "'Playfair Display', Georgia, serif", // font judul
    fontBody: "'Inter', system-ui, sans-serif", // font isi
  },

  /* ============ KONTAK & MEDIA SOSIAL ============ */
  contact: {
    whatsapp: "6281234567890", // nomor WA tanpa + dan tanpa spasi (62 = kode Indonesia)
    phone: "+62 812-3456-7890",
    email: "halo@saungrasa.id",
    address: "Jl. Melati No. 123, Bandung, Jawa Barat 40123",
    googleMapsUrl: "https://maps.google.com/?q=Bandung",
    instagram: "https://instagram.com/saungrasa",
    facebook: "https://facebook.com/saungrasa",
    tiktok: "https://tiktok.com/@saungrasa",
    operationalHours: [
      { day: "Senin - Jumat", time: "10:00 - 22:00" },
      { day: "Sabtu - Minggu", time: "09:00 - 23:00" },
    ],
  },

  /* ============ HERO / BERANDA ============ */
  hero: {
    headline: "Selamat Datang di Saung Rasa",
    subheadline:
      "Nikmati kelezatan masakan nusantara dengan resep warisan keluarga, disajikan dengan cinta untuk Anda.",
    ctaPrimary: "Pesan Meja",
    ctaSecondary: "Lihat Menu",
    backgroundImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
  },

  /* ============ TENTANG KAMI ============ */
  about: {
    title: "Tentang Saung Rasa",
    story:
      "Berdiri sejak tahun 2010, Saung Rasa lahir dari kecintaan keluarga kami terhadap kuliner nusantara. Setiap hidangan kami racik dengan resep turun-temurun dan bumbu yang digiling segar setiap hari. Kami percaya makanan terbaik datang dari bahan terbaik dan diolah dengan hati.",
    mission:
      "Menghadirkan pengalaman bersantap yang autentik, hangat, dan berkesan untuk setiap tamu yang datang.",
    values: [
      {
        title: "Bahan Segar",
        description: "Belanja harian dari petani lokal pilihan.",
        icon: "Leaf",
      },
      {
        title: "Resep Otentik",
        description: "Resep keluarga yang diwariskan tiga generasi.",
        icon: "ChefHat",
      },
      {
        title: "Suasana Hangat",
        description: "Tempat berkumpul yang nyaman untuk semua.",
        icon: "Heart",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
  },

  /* ============ KATEGORI MENU ============ */
  menuCategories: [
    { id: "makanan", label: "Makanan Utama" },
    { id: "minuman", label: "Minuman" },
    { id: "pembuka", label: "Pembuka" },
    { id: "penutup", label: "Penutup" },
  ],

  /* ============ DAFTAR MENU ============ */
  menu: [
    {
      id: "1",
      name: "Nasi Goreng Spesial",
      description:
        "Nasi goreng dengan ayam suwir, udang, telur mata sapi, dan kerupuk.",
      price: 45000,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
      category: "makanan",
      popular: true,
    },
    {
      id: "2",
      name: "Sate Ayam Madura",
      description:
        "10 tusuk sate ayam dengan bumbu kacang khas Madura, disajikan dengan lontong.",
      price: 38000,
      image:
        "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=800&q=80",
      category: "makanan",
      popular: true,
    },
    {
      id: "3",
      name: "Rendang Daging",
      description:
        "Rendang daging sapi empuk dimasak 6 jam dengan rempah pilihan.",
      price: 65000,
      image:
        "https://images.unsplash.com/photo-1644142042860-1ca91685ad96?w=800&q=80",
      category: "makanan",
    },
    {
      id: "4",
      name: "Gado-Gado Jakarta",
      description:
        "Aneka sayuran segar dengan tahu, tempe, dan saus kacang gurih.",
      price: 32000,
      image:
        "https://images.unsplash.com/photo-1668140981023-fb7c0a14d635?w=800&q=80",
      category: "makanan",
    },
    {
      id: "5",
      name: "Es Cendol Durian",
      description:
        "Cendol hijau dengan santan, gula merah cair, dan topping durian asli.",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&q=80",
      category: "minuman",
      popular: true,
    },
    {
      id: "6",
      name: "Kopi Susu Saung",
      description:
        "Espresso single origin Aceh dengan susu segar dan gula aren.",
      price: 22000,
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
      category: "minuman",
    },
    {
      id: "7",
      name: "Es Teh Manis",
      description: "Teh tubruk pilihan diseduh segar dengan gula batu.",
      price: 12000,
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
      category: "minuman",
    },
    {
      id: "8",
      name: "Tahu Crispy",
      description: "Tahu goreng tepung renyah dengan saus sambal asam manis.",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1625938145744-533e82c2ceb8?w=800&q=80",
      category: "pembuka",
    },
    {
      id: "9",
      name: "Lumpia Semarang",
      description: "Lumpia rebung khas Semarang dengan saus bawang putih.",
      price: 24000,
      image:
        "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=80",
      category: "pembuka",
    },
    {
      id: "10",
      name: "Pisang Goreng Keju",
      description: "Pisang raja goreng renyah dengan keju dan susu kental.",
      price: 18000,
      image:
        "https://images.unsplash.com/photo-1601314002592-b8734bca6604?w=800&q=80",
      category: "penutup",
    },
    {
      id: "11",
      name: "Klepon Tradisional",
      description: "Bola ketan pandan isi gula merah, dilapisi kelapa parut.",
      price: 15000,
      image:
        "https://images.unsplash.com/photo-1631234763435-7a3a72ea2d9e?w=800&q=80",
      category: "penutup",
    },
    {
      id: "12",
      name: "Soto Betawi",
      description: "Kuah santan gurih dengan daging sapi empuk dan emping.",
      price: 42000,
      image:
        "https://images.unsplash.com/photo-1547928576-b822bc410bdf?w=800&q=80",
      category: "makanan",
    },
  ] as MenuItem[],

  /* ============ GALERI ============ */
  gallery: [
    {
      id: "g1",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
      caption: "Suasana ruang makan utama",
    },
    {
      id: "g2",
      image:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80",
      caption: "Area outdoor dengan taman",
    },
    {
      id: "g3",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
      caption: "Hidangan spesial chef",
    },
    {
      id: "g4",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
      caption: "Ruang VIP keluarga",
    },
    {
      id: "g5",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80",
      caption: "Coffee bar",
    },
    {
      id: "g6",
      image:
        "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1200&q=80",
      caption: "Live cooking station",
    },
    {
      id: "g7",
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&q=80",
      caption: "Plating signature",
    },
    {
      id: "g8",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80",
      caption: "Bar area",
    },
  ] as GalleryItem[],

  /* ============ TESTIMONI ============ */
  testimonials: [
    {
      id: "t1",
      name: "Sarah Putri",
      role: "Pelanggan Setia",
      rating: 5,
      comment:
        "Rendangnya juara! Empuk dan bumbu meresap sampai ke dalam. Tempatnya juga nyaman buat makan keluarga.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    {
      id: "t2",
      name: "Budi Santoso",
      role: "Food Blogger",
      rating: 5,
      comment:
        "Salah satu restoran nusantara terbaik di kota ini. Sate Madura-nya autentik, harga juga sangat reasonable.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
    {
      id: "t3",
      name: "Linda Wijaya",
      role: "Pelanggan",
      rating: 4,
      comment:
        "Suasana cozy banget, cocok buat ngumpul sama teman. Es cendol duriannya wajib coba!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    },
    {
      id: "t4",
      name: "Rian Pratama",
      role: "Pelanggan",
      rating: 5,
      comment:
        "Pelayanan ramah, makanan datang cepat, dan rasanya konsisten. Sudah jadi langganan keluarga kami.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    },
  ] as Testimonial[],

  /* ============ PROMO & EVENT ============ */
  promos: [
    {
      id: "p1",
      title: "Diskon 25% Makan Siang",
      description:
        "Setiap hari Senin - Jumat, jam 11.00 - 14.00. Berlaku untuk semua menu makanan utama.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
      badge: "Promo Mingguan",
      validUntil: "31 Desember 2026",
    },
    {
      id: "p2",
      title: "Paket Keluarga Hemat",
      description:
        "Paket lengkap untuk 4 orang: 4 menu utama + 4 minuman + 1 dessert hanya Rp 250.000.",
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80",
      badge: "Best Value",
      validUntil: "Berlaku setiap hari",
    },
    {
      id: "p3",
      title: "Live Music Setiap Sabtu",
      description:
        "Nikmati makan malam Anda ditemani alunan akustik dari musisi lokal mulai jam 19.00.",
      image:
        "https://images.unsplash.com/photo-1501612780327-45045538702b?w=1200&q=80",
      badge: "Event Spesial",
      validUntil: "Setiap Sabtu",
    },
  ] as Promo[],

  /* ============ BLOG / ARTIKEL ============ */
  blog: [
    {
      id: "b1",
      title: "Rahasia Rendang Empuk dan Bumbu Meresap",
      excerpt:
        "Tips dari chef kami untuk membuat rendang yang sempurna di rumah.",
      content:
        "Rendang adalah salah satu masakan paling kompleks di dunia. Kunci utamanya ada pada pemilihan daging, kualitas santan, dan kesabaran. Daging sebaiknya menggunakan bagian sandung lamur yang memiliki sedikit lemak. Santan harus dari kelapa segar, bukan kemasan. Dan yang terpenting, masak dengan api kecil selama minimal 4 jam sambil terus diaduk agar santan tidak pecah dan bumbu meresap sempurna.",
      image:
        "https://images.unsplash.com/photo-1644142042860-1ca91685ad96?w=1200&q=80",
      author: "Chef Hendra",
      date: "15 Maret 2026",
      category: "Resep",
    },
    {
      id: "b2",
      title: "Sejarah Singkat Kopi Nusantara",
      excerpt:
        "Perjalanan kopi Indonesia dari Aceh hingga Papua, dari hutan hingga cangkir.",
      content:
        "Indonesia adalah salah satu produsen kopi terbesar di dunia. Setiap daerah memiliki karakteristik unik: Gayo dengan body penuh, Mandailing dengan keasaman rendah, Toraja dengan aroma rempah, dan Wamena dengan kelembutan khas. Di Saung Rasa, kami bekerja sama langsung dengan petani lokal untuk memastikan kualitas dan kesegaran setiap biji.",
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&q=80",
      author: "Tim Saung Rasa",
      date: "08 Maret 2026",
      category: "Cerita",
    },
    {
      id: "b3",
      title: "Cara Memilih Bahan Segar di Pasar Tradisional",
      excerpt:
        "Panduan praktis berbelanja sayur dan ikan agar masakan Anda lebih lezat.",
      content:
        "Belanja di pasar tradisional adalah seni. Untuk sayuran, pilih yang warnanya cerah, daun tidak layu, dan batang masih kokoh. Untuk ikan, perhatikan mata yang masih jernih dan insang berwarna merah segar. Datanglah pagi-pagi sebelum jam 8 untuk mendapatkan pilihan terbaik.",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80",
      author: "Chef Hendra",
      date: "01 Maret 2026",
      category: "Tips",
    },
    {
      id: "b4",
      title: "5 Hidangan Wajib Coba di Saung Rasa",
      excerpt: "Rekomendasi menu signature yang tidak boleh Anda lewatkan.",
      content:
        "Bingung memilih menu? Kami rekomendasikan: 1) Rendang Daging - signature kami yang dimasak 6 jam, 2) Sate Ayam Madura dengan bumbu kacang khas, 3) Nasi Goreng Spesial dengan racikan bumbu rahasia, 4) Es Cendol Durian dengan durian Medan asli, 5) Kopi Susu Saung dengan biji Aceh single origin.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80",
      author: "Tim Saung Rasa",
      date: "20 Februari 2026",
      category: "Menu",
    },
  ] as BlogPost[],

  /* ============ FORMULIR RESERVASI ============ */
  reservation: {
    title: "Reservasi Meja",
    subtitle:
      "Pesan meja Anda dengan mudah melalui WhatsApp. Tim kami akan segera membalas konfirmasi.",
    minGuests: 1,
    maxGuests: 20,
  },
};

/* ============ HELPER FORMAT HARGA ============ */
export const formatRupiah = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

/* ============ HELPER WHATSAPP ============ */
export const buildWhatsAppUrl = (message: string): string => {
  const phone = siteConfig.contact.whatsapp;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
};

export const buildReservationMessage = (data: {
  name: string;
  guests: number;
  date: string;
  time: string;
  notes?: string;
}): string => {
  return `Halo ${siteConfig.brand.name}, saya ingin melakukan reservasi:
%0A%0A*Nama:* ${data.name}
%0A*Jumlah Tamu:* ${data.guests} orang
%0A*Tanggal:* ${data.date}
%0A*Jam:* ${data.time}
${data.notes ? `%0A*Catatan:* ${data.notes}` : ""}
%0A%0ATerima kasih!`.replace(/\n/g, "");
};

export const buildOrderMessage = (
  items: { name: string; quantity: number; price: number }[],
): string => {
  const lines = items.map(
    (item) =>
      `- ${item.name} x${item.quantity} (${formatRupiah(item.price * item.quantity)})`,
  );
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return `Halo ${siteConfig.brand.name}, saya ingin memesan:
%0A%0A${lines.join("%0A")}
%0A%0A*Total:* ${formatRupiah(total)}
%0A%0AMohon konfirmasi pesanan saya. Terima kasih!`.replace(/\n/g, "");
};
