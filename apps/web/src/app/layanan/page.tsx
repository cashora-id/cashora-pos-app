"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Utensils,
  CreditCard,
  Package,
  Users,
  BarChart3,
  Check,
  QrCode,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LayananPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: "kasir", label: "Kasir & POS", icon: ShoppingCart },
    { id: "restoran", label: "Manajemen Restoran", icon: Utensils },
    { id: "pembayaran", label: "Pembayaran", icon: CreditCard },
    { id: "inventori", label: "Inventori", icon: Package },
    { id: "karyawan", label: "Karyawan & Pelanggan", icon: Users },
    { id: "laporan", label: "Laporan", icon: BarChart3 },
  ];

  const renderRightMockup = (tabIndex: number) => {
    switch (tabIndex) {
      // 0: Kasir & POS
      case 0:
        return (
          <div className="bg-[#0A2540] rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden border border-[#0A2540]/20">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-semibold text-white/80 font-sans ml-2">Kasir — Outlet Jakarta</span>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#00C897]/20 text-[#00C897] font-body">
                Shift 1
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              {[
                { name: "Nasi Goreng", price: "Rp 25.000" },
                { name: "Ayam Bakar", price: "Rp 30.000" },
                { name: "Es Teh", price: "Rp 5.000" },
                { name: "Sate Ayam", price: "Rp 28.000" },
                { name: "Bakso", price: "Rp 20.000" },
                { name: "Jus Jeruk", price: "Rp 12.000" },
              ].map((item, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-white/10 rounded-xl p-3 text-center border border-white/5 hover:bg-white/15 transition-colors"
                >
                  <div className="w-7 h-7 bg-[#00C897]/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#00C897]">{mIdx + 1}</span>
                  </div>
                  <p className="text-xs font-semibold text-white truncate font-body">{item.name}</p>
                  <p className="text-[10px] text-[#00C897] font-semibold font-body mt-0.5">{item.price}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#06182B] rounded-xl p-4 border border-white/5 space-y-1.5 text-xs font-body">
              <div className="flex justify-between text-white/60">
                <span>Subtotal</span>
                <span>Rp 85.000</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>PPN 11%</span>
                <span>Rp 9.350</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#00C897] pt-2 border-t border-white/10 font-sans">
                <span>Total</span>
                <span>Rp 94.350</span>
              </div>
            </div>
          </div>
        );

      // 1: Manajemen Restoran (From Image 1)
      case 1:
        return (
          <div className="bg-[#F5F7FA] rounded-2xl p-6 text-[#0A2540] shadow-lg border border-gray-100">
            <p className="text-sm font-sans font-bold mb-4">Kitchen Display</p>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold font-sans text-[#0A2540]">Meja 3</p>
                  <p className="text-[11px] text-gray-500 font-body">Ayam Bakar, Nasi Putih</p>
                </div>
                <span className="text-xs font-bold font-sans text-[#00C897]">02:34</span>
              </div>
              <div className="bg-red-50/70 rounded-xl p-4 border border-red-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold font-sans text-[#0A2540]">Meja 7</p>
                  <p className="text-[11px] text-gray-500 font-body">Soto + Kerupuk</p>
                </div>
                <span className="text-xs font-bold font-sans text-red-500">06:12</span>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold font-sans text-[#0A2540]">Takeaway</p>
                  <p className="text-[11px] text-gray-500 font-body">Nasi Goreng Spesial</p>
                </div>
                <span className="text-xs font-bold font-sans text-[#00C897]">01:05</span>
              </div>
            </div>
          </div>
        );

      // 2: Pembayaran (From Image 2)
      case 2:
        return (
          <div className="bg-[#0A2540] rounded-2xl p-6 text-white shadow-2xl text-center border border-[#0A2540]/20">
            <p className="text-xs font-sans font-bold text-white/80 mb-4 tracking-wider uppercase">QRIS TUNTAS</p>
            <div className="bg-white rounded-2xl p-6 w-48 h-48 mx-auto mb-4 flex flex-col items-center justify-center shadow-inner">
              {/* QR Code Dots Pattern */}
              <div className="grid grid-cols-5 gap-1.5 w-32 h-32">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-sm ${
                      i % 2 === 0 || i % 5 === 0 ? "bg-[#0A2540]" : "bg-[#0A2540]/20"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-white/60 font-body mb-5">Scan untuk bayar, tarik, atau setor</p>
            <div className="grid grid-cols-3 gap-2 bg-[#06182B] p-1.5 rounded-xl border border-white/5">
              <button className="py-2 rounded-lg bg-[#00C897] text-[#0A2540] font-bold text-xs font-sans">
                Bayar
              </button>
              <button className="py-2 rounded-lg text-white/70 hover:text-white text-xs font-medium font-body">
                Tarik
              </button>
              <button className="py-2 rounded-lg text-white/70 hover:text-white text-xs font-medium font-body">
                Setor
              </button>
            </div>
          </div>
        );

      // 3: Inventori (From Image 3)
      case 3:
        return (
          <div className="bg-[#F5F7FA] rounded-2xl p-6 text-[#0A2540] shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-sans font-bold">Stok Menipis</p>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-body">
                3 Item
              </span>
            </div>
            <div className="space-y-3">
              {[
                { name: "Ayam Fillet", detail: "Stok 2 kg (min. 5 kg)" },
                { name: "Minyak Goreng", detail: "Stok 1 liter (min. 5 liter)" },
                { name: "Gula Pasir", detail: "Stok 500 gram (min. 1 kg)" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-3.5 border border-gray-100 shadow-sm flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-bold font-sans text-[#0A2540]">{item.name}</p>
                    <p className="text-[11px] text-gray-400 font-body">{item.detail}</p>
                  </div>
                  <button className="px-3.5 py-1.5 bg-[#00C897] text-[#0A2540] font-bold text-xs rounded-lg hover:bg-[#00a87e] transition-colors font-body">
                    Order
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      // 4: Karyawan & Pelanggan (From Image 4)
      case 4:
        return (
          <div className="bg-[#0A2540] rounded-2xl p-6 text-white shadow-2xl border border-[#0A2540]/20">
            <p className="text-xs font-sans font-bold text-white/80 mb-4">Profil Pelanggan</p>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#00C897] text-[#0A2540] font-bold text-sm flex items-center justify-center font-sans shrink-0">
                RK
              </div>
              <div>
                <p className="font-sans font-bold text-sm text-white">Rina Kartika</p>
                <p className="text-[11px] text-white/60 font-body">Member Gold · 38 Kunjungan</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#06182B] rounded-xl p-3 border border-white/5">
                <p className="text-[10px] text-white/50 font-body">Total Belanja</p>
                <p className="text-sm font-bold font-sans text-white">Rp 2,8 Jt</p>
              </div>
              <div className="bg-[#06182B] rounded-xl p-3 border border-white/5">
                <p className="text-[10px] text-white/50 font-body">Poin Aktif</p>
                <p className="text-sm font-bold font-sans text-[#00C897]">2.840 pts</p>
              </div>
            </div>

            <div className="bg-[#00C897]/15 rounded-xl p-3 border border-[#00C897]/30 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#00C897] text-[#0A2540] font-bold text-[10px] flex items-center justify-center font-sans">
                G
              </div>
              <p className="text-xs text-[#00C897] font-body font-semibold">Member Gold — Diskon 10% semua produk</p>
            </div>
          </div>
        );

      // 5: Laporan (From Image 5)
      case 5:
        return (
          <div className="bg-[#F5F7FA] rounded-2xl p-6 text-[#0A2540] shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-sans font-bold">Pendapatan Bulan Ini</p>
              <span className="text-xs font-bold text-[#00C897] font-body">+18% vs bulan lalu</span>
            </div>

            {/* Bar chart illustration */}
            <div className="flex items-end gap-2.5 h-20 mb-5 px-2 border-b border-gray-200 pb-2">
              <div className="w-full bg-gray-300 rounded-t-sm h-[40%]" />
              <div className="w-full bg-gray-300 rounded-t-sm h-[60%]" />
              <div className="w-full bg-gray-300 rounded-t-sm h-[45%]" />
              <div className="w-full bg-gray-300 rounded-t-sm h-[75%]" />
              <div className="w-full bg-[#00C897] rounded-t-sm h-[95%]" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                <p className="text-[10px] text-gray-400 font-body">Produk Terlaris</p>
                <p className="text-xs font-bold font-sans text-[#0A2540]">Nasi Goreng (312x)</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                <p className="text-[10px] text-gray-400 font-body">Jam Tersibuk</p>
                <p className="text-xs font-bold font-sans text-[#0A2540]">12:00-13:30</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const tabContents = [
    // 0: Kasir & POS
    {
      title: "Kasir Modern untuk Semua Jenis Bisnis",
      desc: "Antarmuka kasir yang intuitif dan cepat, dirancang untuk semua level karyawan. Kelola transaksi, diskon, pajak, dan tutup kasir dengan mudah—bahkan saat offline.",
      col1: [
        "Antarmuka layar sentuh yang responsif",
        "Multi-kasir dalam satu outlet",
        "Pajak (PPN) otomatis",
        "Split bill & custom tip",
      ],
      col2: [
        "Mode offline dengan sinkronisasi otomatis",
        "Manajemen diskon & voucher",
        "Retur & pengembalian barang",
        "Cetak struk termal & digital",
      ],
    },
    // 1: Manajemen Restoran (From Image 1)
    {
      title: "Operasional Restoran dari Satu Layar",
      desc: "Dari QR menu, manajemen meja, hingga kitchen display—semua terintegrasi dalam satu sistem. Kurangi miskomunikasi dapur dan tingkatkan rotasi meja.",
      col1: [
        "Kitchen Display System (KDS)",
        "QR menu self-order oleh pelanggan",
        "Timer masak otomatis",
        "Integrasi GoFood, GrabFood, ShopeeFood",
      ],
      col2: [
        "Manajemen meja & denah lantai",
        "Reservasi meja online",
        "Pemisahan bill per meja",
        "Laporan penjualan per menu",
      ],
    },
    // 2: Pembayaran (From Image 2)
    {
      title: "QRIS TUNTAS — Lebih dari Sekedar Pembayaran",
      desc: "Terima semua metode pembayaran digital, tarik tunai, setor, dan transfer via satu QR. Tidak perlu mesin EDC terpisah—hemat biaya dan meja kasir lebih rapi.",
      col1: [
        "QRIS universal (semua e-wallet)",
        "Setor tunai tanpa ke bank",
        "SoftPOS (terima kartu via NFC)",
        "Virtual Account otomatis",
      ],
      col2: [
        "Tarik tunai via QR (QRIS Tuntas)",
        "Transfer ke rekening manapun",
        "Kartu debit & kredit",
        "Rekonsiliasi harian otomatis",
      ],
    },
    // 3: Inventori (From Image 3)
    {
      title: "Kontrol Stok Real-Time, Tanpa Kebocoran",
      desc: "Lacak stok dari semua cabang dalam satu dashboard. Notifikasi stok menipis, manajemen supplier, dan laporan barang terlaris otomatis setiap hari.",
      col1: [
        "Stok real-time multi-lokasi",
        "Manajemen supplier & PO",
        "Pelacakan kadaluarsa",
        "Penyesuaian stok manual",
      ],
      col2: [
        "Notifikasi stok minimum",
        "Audit stok & opname digital",
        "Bundling & resep produk",
        "Laporan COGS otomatis",
      ],
    },
    // 4: Karyawan & Pelanggan (From Image 4)
    {
      title: "Kelola Tim dan Loyalitas Pelanggan",
      desc: "Atur hak akses karyawan, lacak absensi, dan bangun loyalitas pelanggan dengan program poin dan membership yang terintegrasi langsung di kasir.",
      col1: [
        "Multi-role & hak akses granular",
        "Komisi & insentif otomatis",
        "Program poin & cashback",
        "Riwayat belanja pelanggan",
      ],
      col2: [
        "Absensi dan shift karyawan",
        "CRM pelanggan terintegrasi",
        "Membership tier (Bronze/Silver/Gold)",
        "Notifikasi promosi via WhatsApp",
      ],
    },
    // 5: Laporan (From Image 5)
    {
      title: "Data Bisnis Real-Time di Genggaman Anda",
      desc: "Laporan penjualan, laba-rugi, stok, dan karyawan tersedia real-time di dashboard. Ekspor ke Excel/PDF kapan saja atau terima ringkasan harian otomatis via email.",
      col1: [
        "Dashboard ringkasan real-time",
        "Laporan laba-rugi bulanan",
        "Perbandingan antar cabang",
        "Laporan karyawan & komisi",
      ],
      col2: [
        "Laporan penjualan per produk/kategori",
        "Analitik tren & proyeksi",
        "Ekspor Excel, PDF, CSV",
        "Ringkasan harian via email otomatis",
      ],
    },
  ];

  const currentContent = tabContents[activeTab];

  return (
    <main className="pt-16">
      {/* HERO HEADER SECTION */}
      <section className="bg-[#0A2540] text-white py-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-[#00C897] uppercase tracking-widest mb-3 font-body"
          >
            FITUR LENGKAP
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white mb-4 text-balance"
          >
            Semua yang Bisnis Anda Butuhkan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base sm:text-lg max-w-xl mx-auto font-body leading-relaxed"
          >
            Dari kasir sederhana hingga manajemen multi-cabang korporasi—Cashora hadir dengan fitur yang tumbuh bersama
            bisnis Anda.
          </motion.p>
        </div>
      </section>

      {/* INTERACTIVE TABBED FEATURE PREVIEW SECTION */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CENTERED 2-ROW WRAPPING PILL TAB BAR */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-16">
            {tabs.map((tab, idx) => {
              const IconComp = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                    isActive
                      ? "bg-[#0A2540] text-white"
                      : "bg-[#F5F7FA] text-gray-600 hover:text-[#0A2540] hover:bg-gray-200/60 border border-gray-100"
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? "text-[#00C897]" : "text-gray-500"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* ACTIVE TAB CONTENT DISPLAY */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column: Feature Details & 2-Column Checklist */}
              <div>
                <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A2540] mb-4 text-balance">
                  {currentContent.title}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 font-body">
                  {currentContent.desc}
                </p>

                {/* 2-COLUMN CHECKLIST ORDER */}
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  <div className="space-y-3">
                    {currentContent.col1.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 font-body">
                        <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5] mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {currentContent.col2.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 font-body">
                        <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5] mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-all hover:scale-105 shadow-md shadow-[#00C897]/20 font-body"
                >
                  Coba di Demo Interaktif
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right Column: Dynamic Mockup per Sub-Tab */}
              {renderRightMockup(activeTab)}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FITUR UNGGULAN EKSKLUSIF CASHORA */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540]">
              Fitur Unggulan Eksklusif Cashora
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: QRIS TUNTAS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#00C897] bg-[#00C897]/10 px-3 py-1 rounded-full mb-4 font-body">
                  Fitur Unggulan
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#00C897]/10 rounded-xl flex items-center justify-center text-[#00C897]">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans font-bold text-xl text-[#0A2540]">QRIS TUNTAS</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-body">
                  Satu QR untuk semua—terima pembayaran, tarik tunai, setor, dan transfer tanpa mesin EDC. Inklusif
                  untuk semua skala bisnis.
                </p>
              </div>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00C897] hover:underline font-body"
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Card 2: Agregasi Online */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4 font-body">
                  Integrasi Online
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0A2540]/10 rounded-xl flex items-center justify-center text-[#0A2540]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans font-bold text-xl text-[#0A2540]">
                    Agregasi GoFood · GrabFood · ShopeeFood
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-body">
                  Kelola semua pesanan online dari platform manapun langsung di satu dashboard Cashora. Stok terupdate
                  otomatis di semua platform.
                </p>
              </div>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00C897] hover:underline font-body"
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#0A2540] py-20 text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10"
        >
          <h2 className="font-sans font-bold text-3xl sm:text-4xl mb-4 text-balance">
            Tertarik? Coba Semua Fitur di Demo Interaktif
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-body">
            Eksplorasi semua fitur Cashora tanpa batas—tidak perlu daftar, langsung coba.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-all hover:scale-105 shadow-xl shadow-[#00C897]/20 font-body"
          >
            Mulai Demo Sekarang
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
