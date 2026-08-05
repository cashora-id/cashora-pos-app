"use client";

import React, { useState } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveDashboardMockup } from "@/components/ui/InteractiveDashboardMockup";

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "“Harga expansion-neutral bikin saya berani buka 5 cabang baru tahun ini. Biaya sama, fitur lengkap, support responsif. Recommended!”",
      initials: "AF",
      name: "Ahmad Fauzi",
      role: "Direktur, Retail Elektronik Fauzi · Bandung",
    },
    {
      quote:
        "“Integrasi KDS dapur dan QR menu otomatis memangkas waktu tunggu pelanggan hingga 40%. Omzet restoran naik signifikan sejak pakai Cashora.”",
      initials: "SR",
      name: "Siti Rahmawati",
      role: "Founder, Resto Dapur Pasundan · Jakarta",
    },
    {
      quote:
        "“Mode offline-first benar-benar penyelamat saat mati listrik atau gangguan internet. Kasir tetap bisa jualan tanpa henti.”",
      initials: "BS",
      name: "Budi Santoso",
      role: "Owner, Toko Sembako Berkah · Surabaya",
    },
    {
      quote:
        "“Fitur QRIS TUNTAS dan laporan konsolidasi multi-cabang sangat memudahkan audit keuangan bulanan kami. Highly recommended!”",
      initials: "HW",
      name: "Hendra Wijaya",
      role: "Pemilik Warung Kopi Nusantara · Bandung",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative bg-[#0A2540] overflow-hidden pt-16">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-[0.12] pointer-events-none"
          style={{ background: "radial-gradient(circle, #00C897, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: "radial-gradient(circle, #00C897, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00C897]/15 border border-[#00C897]/30 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#00C897] animate-pulse" />
                <span className="text-xs font-semibold text-[#00C897] tracking-wide uppercase font-body">
                  Platform POS #1 untuk UMKM Indonesia
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6 text-balance"
              >
                Kelola Bisnis Lebih <span className="text-[#00C897]">Mudah</span> dengan Cashora
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl font-body"
              >
                Platform POS modern dengan mode offline, tanpa biaya per cabang, dan keamanan perbankan. Dari warung
                hingga korporasi.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <div className="flex items-center gap-1.5 text-white/60 text-sm font-body">
                  <Wifi className="w-4 h-4 text-[#00C897]" />
                  <span>Offline-First</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/60 text-sm font-body">
                  <ShieldCheck className="w-4 h-4 text-[#00C897]" />
                  <span>Keamanan 7 Lapis</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/60 text-sm font-body">
                  <Store className="w-4 h-4 text-[#00C897]" />
                  <span>Tanpa Biaya per Cabang</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/demo"
                  className="relative inline-flex items-center gap-2 px-6 py-3.5 bg-[#00C897] text-[#0A2540] font-semibold rounded-xl text-sm group hover:bg-[#00a87e] transition-all hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Coba Demo Interaktif
                </Link>
                <Link
                  href="/layanan"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-white border border-white/25 rounded-xl hover:bg-white/10 transition-colors text-sm font-semibold font-body"
                >
                  Lihat Fitur
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 text-xs text-white/40 font-body"
              >
                Dipercaya oleh <strong className="text-white/70">10.000+</strong> merchant di seluruh Indonesia
              </motion.p>
            </div>

            <InteractiveDashboardMockup />
          </div>
        </div>

        <div className="h-12 bg-[#F5F7FA]" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>

      {/* KEUNGGULAN UTAMA */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-3 font-body">
              Keunggulan Utama
            </p>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540] text-balance">
              Dirancang untuk Bisnis Indonesia
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wifi,
                title: "Offline-First",
                desc: "Tetap berjualan meski internet mati. Semua transaksi tersimpan dan tersinkronisasi otomatis saat koneksi kembali.",
                bg: "bg-[#00C897]/10",
                iconColor: "text-[#00C897]",
              },
              {
                icon: TrendingUp,
                title: "Harga Expansion-Neutral",
                desc: "Bayar satu harga tetap, buka cabang sebanyak-banyaknya. Tanpa biaya tambahan per outlet atau per kasir.",
                bg: "bg-[#0A2540]/10",
                iconColor: "text-[#0A2540]",
              },
              {
                icon: ShieldCheck,
                title: "Keamanan 7 Lapis",
                desc: "Enkripsi end-to-end, autentikasi dua faktor, dan audit log lengkap. Standar keamanan setara perbankan.",
                bg: "bg-[#00C897]/10",
                iconColor: "text-[#00C897]",
              },
              {
                icon: QrCode,
                title: "QRIS TUNTAS & SoftPOS",
                desc: "Terima pembayaran via QRIS, tarik tunai, setor, dan transfer langsung dari aplikasi. Tanpa mesin EDC tambahan.",
                bg: "bg-[#0A2540]/10",
                iconColor: "text-[#0A2540]",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/70 cursor-default"
              >
                <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <h3 className="font-sans font-bold text-base text-[#0A2540] mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-body">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MENGAPA CASHORA */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-3 font-body">
              Mengapa Cashora?
            </p>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540] text-balance max-w-2xl mx-auto">
              Solusi Lengkap yang Tumbuh Bersama Bisnis Anda
            </h2>
          </motion.div>

          <div className="space-y-20">
            {/* Spotlight 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex w-12 h-12 bg-[#00C897]/10 rounded-xl items-center justify-center mb-5">
                  <Wifi className="w-6 h-6 text-[#00C897]" />
                </div>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A2540] mb-4 text-balance">
                  Tetap Jualan Saat Internet Mati
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6 font-body">
                  Dengan teknologi offline-first, transaksi terus berjalan tanpa gangguan. Data tersinkronisasi otomatis
                  begitu koneksi kembali—tanpa kehilangan satu transaksi pun.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5 text-sm text-gray-600 font-body">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    Sinkronisasi otomatis multi-perangkat
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-600 font-body">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    Konflik data terselesaikan cerdas
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-600 font-body">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    Riwayat transaksi tetap lengkap
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-[#0A2540] rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#00C897]/10 -translate-y-8 translate-x-8"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                        <Wifi className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs text-white/60 font-body">Status Koneksi</p>
                        <p className="text-sm font-bold font-sans text-amber-400">Offline</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      {["#1023", "#1024", "#1025"].map((item, i) => (
                        <div key={i} className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2">
                          <span className="text-xs font-body text-white/80">Transaksi {item}</span>
                          <span className="text-xs font-body text-amber-400">Menunggu sync</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 bg-[#00C897]/20 rounded-lg px-3 py-2">
                      <div className="w-2 h-2 rounded-full bg-[#00C897] animate-pulse"></div>
                      <p className="text-xs text-[#00C897] font-body font-semibold">3 transaksi siap disinkronkan</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Spotlight 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:[&>*:first-child]:order-last">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex w-12 h-12 bg-[#00C897]/10 rounded-xl items-center justify-center mb-5">
                  <Store className="w-6 h-6 text-[#00C897]" />
                </div>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A2540] mb-4 text-balance">
                  Bayar Satu Harga, Buka Cabang Sebanyak-banyaknya
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6 font-body">
                  Model harga expansion-neutral kami memastikan biaya langganan tidak naik seiring pertumbuhan bisnis Anda.
                  Buka 1 atau 100 cabang—harganya tetap sama.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5 text-sm text-gray-600 font-body">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    Tidak ada biaya per outlet
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-600 font-body">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    Tidak ada biaya per kasir/user
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-600 font-body">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    Upgrade paket kapan saja
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <p className="text-sm font-sans font-bold text-[#0A2540] mb-4">Cabang Aktif</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {["Jakarta Pusat", "Bandung", "Surabaya", "Medan", "Makassar"].map((c, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-2 text-center text-[10px] font-body font-semibold bg-[#0A2540] text-white shadow-sm"
                      >
                        {c}
                      </div>
                    ))}
                    <div className="rounded-xl p-2 text-center text-[10px] font-body font-semibold border-2 border-dashed border-[#00C897] text-[#00C897] cursor-pointer hover:bg-[#00C897]/5 transition-colors">
                      + Buka Cabang
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center justify-between shadow-sm">
                    <div>
                      <p className="text-[10px] text-gray-400 font-body">Biaya Bulanan</p>
                      <p className="text-base font-bold text-[#0A2540] font-sans">Rp 299.000</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400 font-body">Per Cabang</p>
                      <p className="text-base font-bold text-[#00C897] font-sans">Rp 0</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Spotlight 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex w-12 h-12 bg-[#00C897]/10 rounded-xl items-center justify-center mb-5">
                  <Utensils className="w-6 h-6 text-[#00C897]" />
                </div>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A2540] mb-4 text-balance">
                  Dapur dan Meja Restoran Terpadu
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6 font-body">
                  Kelola meja, terima pesanan dari QR menu, dan kirim langsung ke display dapur. Kurangi miskomunikasi,
                  percepat pelayanan, dan tingkatkan kepuasan pelanggan.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5 text-sm text-gray-600 font-body">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    Kitchen Display System (KDS)
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-600 font-body">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    Manajemen meja & reservasi
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-600 font-body">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    QR menu self-order
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-[#0A2540] rounded-2xl p-6 text-white shadow-xl">
                  <p className="text-sm font-sans font-bold mb-4">Denah Restoran</p>
                  <div className="grid grid-cols-4 gap-1.5 mb-4">
                    <div className="rounded-lg p-2 text-center text-[10px] font-bold font-body bg-[#00C897]/20 text-[#00C897]">
                      M1
                    </div>
                    <div className="rounded-lg p-2 text-center text-[10px] font-bold font-body bg-white/10 text-white/50">
                      M2
                    </div>
                    <div className="rounded-lg p-2 text-center text-[10px] font-bold font-body bg-[#00C897]/20 text-[#00C897]">
                      M3
                    </div>
                    <div className="rounded-lg p-2 text-center text-[10px] font-bold font-body bg-amber-500/20 text-amber-400">
                      M4
                    </div>
                    <div className="rounded-lg p-2 text-center text-[10px] font-bold font-body bg-white/10 text-white/50">
                      M5
                    </div>
                    <div className="rounded-lg p-2 text-center text-[10px] font-bold font-body bg-[#00C897]/20 text-[#00C897]">
                      M6
                    </div>
                    <div className="rounded-lg p-2 text-center text-[10px] font-bold font-body bg-white/10 text-white/50">
                      M7
                    </div>
                    <div className="rounded-lg p-2 text-center text-[10px] font-bold font-body bg-white/10 text-white/50">
                      M8
                    </div>
                  </div>
                  <div className="flex gap-3 text-[10px] font-body">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded bg-[#00C897]/40"></div>
                      <span className="text-white/60">Terisi</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded bg-amber-500/40"></div>
                      <span className="text-white/60">Reservasi</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded bg-white/20"></div>
                      <span className="text-white/60">Kosong</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Spotlight 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:[&>*:first-child]:order-last">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex w-12 h-12 bg-[#00C897]/10 rounded-xl items-center justify-center mb-5">
                  <ShoppingBag className="w-6 h-6 text-[#00C897]" />
                </div>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A2540] mb-4 text-balance">
                  Agregator Pesanan Online Bawaan
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6 font-body">
                  Terima dan kelola pesanan dari GoFood, GrabFood, dan ShopeeFood langsung di satu dashboard tanpa berpindah
                  aplikasi. Kurangi kesalahan dan hemat waktu.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5 text-sm text-gray-600 font-body">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    GoFood, GrabFood, ShopeeFood
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-600 font-body">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    Satu dashboard semua platform
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-600 font-body">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    Laporan terintegrasi otomatis
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <p className="text-sm font-sans font-bold text-[#0A2540] mb-4">Pesanan Masuk</p>
                  <div className="space-y-2">
                    <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#0A2540] flex items-center justify-center">
                          <ShoppingBag className="w-3.5 h-3.5 text-[#00C897]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#0A2540] font-body">GoFood</p>
                          <p className="text-[10px] text-gray-400 font-body">Nasi + Ayam · 2 mnt lalu</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full font-body bg-blue-50 text-blue-600">
                        Baru
                      </span>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#0A2540] flex items-center justify-center">
                          <ShoppingBag className="w-3.5 h-3.5 text-[#00C897]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#0A2540] font-body">GrabFood</p>
                          <p className="text-[10px] text-gray-400 font-body">Paket Keluarga · 5 mnt lalu</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full font-body bg-amber-50 text-amber-600">
                        Diproses
                      </span>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#0A2540] flex items-center justify-center">
                          <ShoppingBag className="w-3.5 h-3.5 text-[#00C897]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#0A2540] font-body">ShopeeFood</p>
                          <p className="text-[10px] text-gray-400 font-body">Mie Goreng · 8 mnt lalu</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full font-body bg-[#00C897]/10 text-[#00C897]">
                        Siap
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-[#F5F7FA] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { val: "10rb+", label: "Merchant Aktif" },
              { val: "2.5 Jt", label: "Transaksi/Hari" },
              { val: "34", label: "Kota di Indonesia" },
              { val: "99.9%", label: "Uptime" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#0A2540] rounded-2xl p-6 text-center border border-[#0A2540]/10 shadow-lg"
              >
                <p className="font-sans font-bold text-3xl sm:text-4xl text-[#00C897] mb-1">{stat.val}</p>
                <p className="text-sm text-white/60 font-body">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-3 font-body">
              KATA MERCHANT KAMI
            </p>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540] text-balance">
              Dipercaya Ribuan Pengusaha Indonesia
            </h2>
          </motion.div>

          {/* TESTIMONIAL CAROUSEL */}
          <div className="relative max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-12 text-left mb-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-[#0A2540] text-base sm:text-lg leading-relaxed mb-8 font-body">
                    {testimonials[currentTestimonial].quote}
                  </p>

                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-[#00C897] text-[#0A2540] font-bold text-sm flex items-center justify-center font-sans shrink-0 shadow-sm">
                      {testimonials[currentTestimonial].initials}
                    </div>
                    <div>
                      <p className="font-sans font-bold text-[#0A2540] text-base leading-snug">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-xs text-gray-500 font-body mt-0.5">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* CAROUSEL CONTROLS & DOTS OUTSIDE CARD */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-[#0A2540] text-white flex items-center justify-center shadow-md hover:bg-[#12365c] transition-all hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-2 rounded-full transition-all ${
                      currentTestimonial === i ? "w-6 bg-[#00C897]" : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white text-[#0A2540] border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-all hover:scale-105"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER CTA WITH ORGANIC SVG WAVY DIVIDERS TOP & BOTTOM (MATCHING IMAGE 1 100%) */}
      <section className="bg-[#0A2540] pt-24 pb-24 text-white text-center relative overflow-hidden">
        {/* TOP ORGANIC WAVE DIVIDER FROM LIGHT BG */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-12 text-[#F5F7FA] fill-current"
          >
            <path d="M0,0 C250,90 550,-30 800,50 C950,90 1100,20 1200,30 L1200,0 L0,0 Z" />
          </svg>
        </div>

        {/* BOTTOM RIGHT TEAL GRADIENT ACCENT WAVE */}
        <div className="absolute bottom-0 right-0 w-full h-40 overflow-hidden leading-none z-0 pointer-events-none opacity-90">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full">
            <defs>
              <linearGradient id="tealWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00C897" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00E5AC" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            <path
              d="M0,70 C350,120 700,20 950,80 C1100,100 1180,40 1200,30 L1200,120 L0,120 Z"
              fill="url(#tealWaveGrad)"
            />
          </svg>
        </div>

        {/* BOTTOM ORGANIC WAVE DIVIDER TO FOOTER */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-8 text-[#0A2540] fill-current"
          >
            <path d="M0,30 C300,10 600,70 900,20 C1050,0 1150,30 1200,40 L1200,120 L0,120 Z" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20"
        >
          <p className="text-xs font-semibold text-[#00C897] uppercase tracking-widest mb-3 font-body">
            MULAI SEKARANG
          </p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            Siap Tingkatkan Operasional Bisnis Anda?
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-body">
            Bergabung dengan 10.000+ merchant aktif yang sudah membuktikan manfaat Cashora. Coba gratis 14 hari, tanpa
            kartu kredit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-all hover:scale-105 shadow-xl shadow-[#00C897]/20 font-body"
            >
              Daftar Sekarang — Gratis
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-white border border-white/30 rounded-xl hover:bg-white/10 transition-colors text-sm font-semibold font-body"
            >
              Jadwalkan Demo
            </Link>
          </div>
          <p className="text-xs text-white/60 font-body">
            Tidak perlu kartu kredit · Setup dalam 5 menit · Dibatalkan kapan saja
          </p>
        </motion.div>
      </section>
    </main>
  );
}
