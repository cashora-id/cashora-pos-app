import React from "react";
import Link from "next/link";
import {
  Wifi,
  ShieldCheck,
  Store,
  Play,
  ArrowRight,
  TrendingUp,
  QrCode,
  Check,
  Utensils,
  ShoppingBag,
  Star,
} from "lucide-react";
import { InteractiveDashboardMockup } from "@/components/ui/InteractiveDashboardMockup";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-[#0A2540] text-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-[0.15] pointer-events-none"
          style={{ background: "radial-gradient(circle, #00C897, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C897]/15 border border-[#00C897]/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00C897] animate-pulse" />
                <span className="text-xs font-semibold text-[#00C897] tracking-wide uppercase">
                  Platform POS #1 untuk UMKM Indonesia
                </span>
              </div>

              <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] tracking-tight mb-6">
                Kelola Bisnis Lebih <span className="text-[#00C897]">Mudah</span> dengan Cashora
              </h1>

              <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
                Platform POS modern dengan mode offline, tanpa biaya per cabang, dan keamanan perbankan. Dari warung
                kelontong hingga korporasi multi-cabang.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Wifi className="w-4 h-4 text-[#00C897]" />
                  <span>Offline-First</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#00C897]" />
                  <span>Keamanan 7 Lapis</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Store className="w-4 h-4 text-[#00C897]" />
                  <span>Tanpa Biaya per Cabang</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="relative inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#00C897] text-[#0A2540] font-semibold rounded-xl text-sm hover:bg-[#00a87e] transition-colors shadow-lg shadow-[#00C897]/20 group"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Coba Demo Interaktif
                </Link>
                <Link
                  href="/layanan"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-white border border-white/25 rounded-xl hover:bg-white/10 transition-colors text-sm font-semibold"
                >
                  Lihat Semua Fitur
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="mt-6 text-xs text-white/50">
                Dipercaya oleh <strong className="text-white/80">10.000+ merchant</strong> di seluruh Indonesia
              </p>
            </div>

            {/* Right Column Interactive POS Card */}
            <div className="relative flex justify-center lg:justify-end">
              <InteractiveDashboardMockup />
            </div>
          </div>
        </div>
        <div className="h-12 bg-[#F5F7FA] mt-16" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>

      {/* KEUNGGULAN UTAMA SECTION */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-3">Keunggulan Utama</p>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540]">Dirancang untuk Bisnis Indonesia</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00C897]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#00C897]/10 rounded-xl flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-[#00C897]" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0A2540] mb-2">Offline-First</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Tetap berjualan meski internet mati. Semua transaksi tersimpan dan tersinkronisasi otomatis saat koneksi
                kembali.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0A2540]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#0A2540]/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#0A2540]" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0A2540] mb-2">Harga Expansion-Neutral</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Bayar satu harga tetap, buka cabang sebanyak-banyaknya. Tanpa biaya tambahan per outlet atau per kasir.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00C897]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#00C897]/10 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-[#00C897]" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0A2540] mb-2">Keamanan 7 Lapis</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Enkripsi end-to-end, autentikasi dua faktor, dan audit log lengkap. Standar keamanan setara perbankan.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0A2540]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#0A2540]/10 rounded-xl flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6 text-[#0A2540]" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0A2540] mb-2">QRIS TUNTAS & SoftPOS</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Terima pembayaran via QRIS, tarik tunai, setor, dan transfer langsung dari aplikasi. Tanpa mesin EDC
                tambahan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SPOTLIGHT SECTIONS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-3">Mengapa Cashora?</p>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540] max-w-2xl mx-auto">
              Solusi Lengkap yang Tumbuh Bersama Bisnis Anda
            </h2>
          </div>

          <div className="space-y-24">
            {/* Spotlight 1: Offline First */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex w-12 h-12 bg-[#00C897]/10 rounded-xl items-center justify-center mb-5">
                  <Wifi className="w-6 h-6 text-[#00C897]" />
                </div>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A2540] mb-4">
                  Tetap Jualan Saat Internet Mati
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Dengan teknologi offline-first, transaksi terus berjalan tanpa gangguan. Data tersinkronisasi otomatis
                  begitu koneksi kembali—tanpa kehilangan satu transaksi pun.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                    Sinkronisasi otomatis multi-perangkat
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                    Konflik data terselesaikan secara cerdas (CRDT)
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                    Riwayat transaksi lokal tersimpan aman
                  </li>
                </ul>
              </div>

              <div className="bg-[#0A2540] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Status Koneksi</p>
                    <p className="text-sm font-bold text-amber-400">Offline Mode</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg px-3.5 py-2.5">
                    <span className="text-xs text-white/80">Transaksi #1023 (Rp 45.000)</span>
                    <span className="text-xs text-amber-400 font-semibold">Tersimpan Lokal</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg px-3.5 py-2.5">
                    <span className="text-xs text-white/80">Transaksi #1024 (Rp 82.000)</span>
                    <span className="text-xs text-amber-400 font-semibold">Tersimpan Lokal</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#00C897]/20 rounded-lg px-3 py-2 border border-[#00C897]/30">
                  <div className="w-2 h-2 rounded-full bg-[#00C897] animate-pulse" />
                  <p className="text-xs text-[#00C897] font-semibold">Otomatis Sync saat internet kembali terhubung</p>
                </div>
              </div>
            </div>

            {/* Spotlight 2: Expansion Neutral */}
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:[&>*:first-child]:order-last">
              <div>
                <div className="inline-flex w-12 h-12 bg-[#00C897]/10 rounded-xl items-center justify-center mb-5">
                  <Store className="w-6 h-6 text-[#00C897]" />
                </div>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A2540] mb-4">
                  Bayar Satu Harga, Buka Cabang Sebanyak-banyaknya
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Model harga expansion-neutral kami memastikan biaya langganan tidak membengkak seiring pertumbuhan
                  bisnis Anda. Buka 1 atau 100 cabang—harganya tetap sama.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                    Tidak ada biaya tambahan per outlet
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                    Tidak ada pembatasan jumlah kasir
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                    Laporan terpusat real-time semua cabang
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-200 shadow-md">
                <p className="text-sm font-bold text-[#0A2540] mb-4">Manajemen Cabang Aktif</p>
                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  <div className="rounded-xl p-2.5 text-center text-xs font-semibold bg-[#0A2540] text-white">
                    Jakarta Pusat
                  </div>
                  <div className="rounded-xl p-2.5 text-center text-xs font-semibold bg-[#0A2540] text-white">
                    Bandung
                  </div>
                  <div className="rounded-xl p-2.5 text-center text-xs font-semibold bg-[#0A2540] text-white">
                    Surabaya
                  </div>
                  <div className="rounded-xl p-2.5 text-center text-xs font-semibold bg-[#0A2540] text-white">
                    Medan
                  </div>
                  <div className="rounded-xl p-2.5 text-center text-xs font-semibold bg-[#0A2540] text-white">
                    Makassar
                  </div>
                  <div className="rounded-xl p-2.5 text-center text-xs font-semibold border-2 border-dashed border-[#00C897] text-[#00C897]">
                    + Tambah Cabang
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Biaya Langganan Bulanan</p>
                    <p className="text-lg font-bold text-[#0A2540]">Rp 299.000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Biaya Tambahan Per Cabang</p>
                    <p className="text-lg font-bold text-[#00C897]">Rp 0 (Gratis)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Spotlight 3: Restaurant & Kitchen Display */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex w-12 h-12 bg-[#00C897]/10 rounded-xl items-center justify-center mb-5">
                  <Utensils className="w-6 h-6 text-[#00C897]" />
                </div>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A2540] mb-4">
                  Dapur dan Meja Restoran Terpadu
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Kelola meja, terima pesanan dari QR menu, dan kirim pesanan langsung ke display dapur (KDS).
                  Percepat pelayanan dan eliminasi miskomunikasi.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                    Kitchen Display System (KDS) terhubung langsung
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                    Denah meja interaktif & status reservasi real-time
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                    Self-order QR Menu tanpa unduh aplikasi
                  </li>
                </ul>
              </div>

              <div className="bg-[#0A2540] rounded-2xl p-6 text-white shadow-xl">
                <p className="text-sm font-bold mb-4">Denah Meja Restoran (Realtime)</p>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="rounded-xl p-3 text-center text-xs font-bold bg-[#00C897]/25 text-[#00C897] border border-[#00C897]/40">
                    M1 (Terisi)
                  </div>
                  <div className="rounded-xl p-3 text-center text-xs font-bold bg-white/10 text-white/50">M2 (Kosong)</div>
                  <div className="rounded-xl p-3 text-center text-xs font-bold bg-[#00C897]/25 text-[#00C897] border border-[#00C897]/40">
                    M3 (Terisi)
                  </div>
                  <div className="rounded-xl p-3 text-center text-xs font-bold bg-amber-500/25 text-amber-400 border border-amber-500/40">
                    M4 (Booked)
                  </div>
                </div>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded bg-[#00C897]" />
                    <span className="text-white/70">Terisi</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded bg-amber-400" />
                    <span className="text-white/70">Reservasi</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded bg-white/20" />
                    <span className="text-white/70">Kosong</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Spotlight 4: Online Delivery Aggregator */}
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:[&>*:first-child]:order-last">
              <div>
                <div className="inline-flex w-12 h-12 bg-[#00C897]/10 rounded-xl items-center justify-center mb-5">
                  <ShoppingBag className="w-6 h-6 text-[#00C897]" />
                </div>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A2540] mb-4">
                  Agregator Pesanan Online Bawaan
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Terima dan kelola pesanan online dari GoFood, GrabFood, dan ShopeeFood langsung dalam satu layar tanpa
                  berpindah perangkat.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                    Integrasi GoFood, GrabFood, ShopeeFood
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                    Sinkronisasi stok otomatis saat produk terjual
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                    Laporan penjualan omnichannel terpadu
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-200 shadow-md">
                <p className="text-sm font-bold text-[#0A2540] mb-4">Stream Pesanan Incomming</p>
                <div className="space-y-2.5">
                  <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0A2540] flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4 text-[#00C897]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0A2540]">GoFood — #GF-8812</p>
                        <p className="text-[10px] text-gray-400">2x Ayam Geprek, 1x Es Jeruk</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                      Baru
                    </span>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0A2540] flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4 text-[#00C897]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0A2540]">GrabFood — #GF-3301</p>
                        <p className="text-[10px] text-gray-400">1x Nasi Goreng Spesial</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                      Diproses
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-[#0A2540] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <p className="font-sans font-bold text-3xl sm:text-4xl text-[#00C897] mb-1">10.000+</p>
              <p className="text-sm text-white/70">Merchant Aktif</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <p className="font-sans font-bold text-3xl sm:text-4xl text-[#00C897] mb-1">5.0 Jt</p>
              <p className="text-sm text-white/70">Transaksi / Hari</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <p className="font-sans font-bold text-3xl sm:text-4xl text-[#00C897] mb-1">150+</p>
              <p className="text-sm text-white/70">Kota di Indonesia</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <p className="font-sans font-bold text-3xl sm:text-4xl text-[#00C897] mb-1">99.99%</p>
              <p className="text-sm text-white/70">Uptime SLA</p>
            </div>
          </div>

          {/* TESTIMONIALS */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-3">Kata Merchant Kami</p>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white">Dipercaya Ribuan Pengusaha Indonesia</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white/5 rounded-2xl border border-white/10 p-8 sm:p-10 shadow-xl">
            <div className="flex gap-1 mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-white/80 italic text-base sm:text-lg leading-relaxed mb-6 text-center">
              &quot;Dengan Cashora, ekspansi ke 12 cabang di Bandung dan Jakarta jadi sangat hemat karena tidak perlu bayar
              lisensi per outlet. Mode offline-nya membuat kasir kami bisa jualan tanpa takut sinyal mati.&quot;
            </p>
            <div className="text-center">
              <p className="font-bold text-white text-base">Hendra Wijaya</p>
              <p className="text-xs text-[#00C897]">Pemilik Warung Kopi Nusantara (12 Cabang)</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="bg-[#00C897] text-[#0A2540] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl mb-4">
            Siap Mengembangkan Bisnis Anda ke Tingkat Selanjutnya?
          </h2>
          <p className="text-base sm:text-lg text-[#0A2540]/80 max-w-xl mx-auto mb-8 font-medium">
            Daftar sekarang dan nikmati akses penuh tanpa biaya tersembunyi.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-[#0A2540] text-white font-bold rounded-xl text-sm hover:bg-[#07192b] transition-colors shadow-lg"
            >
              Daftar Gratis Sekarang
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 bg-white/20 text-[#0A2540] font-bold rounded-xl text-sm border border-[#0A2540]/20 hover:bg-white/30 transition-colors"
            >
              Mulai Demo Virtual
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
