"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Apakah ada biaya transaksi per pembayaran?",
      a: "Tidak ada biaya transaksi tambahan dari Cashora untuk pembayaran tunai. Untuk QRIS dan metode digital, berlaku MDR standar regulator tanpa markup tambahan.",
    },
    {
      q: "Bisakah saya upgrade atau downgrade paket kapan saja?",
      a: "Bisa, Anda bebas upgrade, downgrade, atau membatalkan langganan kapan saja tanpa denda atau biaya pembatalan.",
    },
    {
      q: "Apakah harga berubah jika saya buka cabang baru?",
      a: "Sama sekali tidak! Dengan model Expansion-Neutral pada paket Pro & Enterprise, Anda bisa membuka cabang sebanyak-banyaknya tanpa biaya lisensi per outlet.",
    },
    {
      q: "Apa yang terjadi setelah trial 14 hari berakhir?",
      a: "Setelah masa uji coba 14 hari selesai, Anda dapat memilih paket berlangganan sesuai kebutuhan. Data transaksi Anda tersimpan aman dan tidak akan hilang.",
    },
    {
      q: "Apakah tersedia dukungan dalam bahasa Indonesia?",
      a: "Ya, seluruh tim customer support kami berbasis di Indonesia dan siap membantu via chat WhatsApp, email, maupun telepon 24/7.",
    },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative bg-[#0A2540] text-white pt-24 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-[#00C897] uppercase tracking-widest mb-3 font-body"
          >
            HARGA TRANSPARAN
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4 text-balance max-w-4xl mx-auto"
          >
            Harga Sederhana, Skalakan Tanpa Beban
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 font-body max-w-2xl mx-auto"
          >
            Satu harga, cabang tidak terbatas. Tidak ada biaya kejutan.
          </motion.p>
        </div>
      </section>

      {/* PRICING CARDS SECTION */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TOGGLE SWITCH */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-sm font-medium font-body ${!isAnnual ? "text-[#0A2540]" : "text-gray-400"}`}>
              Bulanan
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-[#0A2540] rounded-full p-1 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle annual pricing"
            >
              <motion.div
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 rounded-full bg-[#00C897]"
              />
            </button>
            <span className={`text-sm font-medium font-body ${isAnnual ? "text-[#0A2540]" : "text-gray-400"}`}>
              Tahunan
            </span>
            <span className="bg-[#00C897] text-[#0A2540] text-xs font-bold px-2.5 py-1 rounded-full font-body">
              Hemat 15%
            </span>
          </div>

          {/* PRICING CARDS GRID */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-12">
            {/* CARD 1: BASIC */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-sans font-bold text-2xl text-[#0A2540] mb-2">Basic</h3>
                <p className="text-xs text-gray-500 font-body mb-6 min-h-[32px]">
                  Untuk UMKM dan usaha kecil yang baru memulai.
                </p>

                <div className="mb-6">
                  <span className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540]">
                    {isAnnual ? "Rp 126.000" : "Rp 149.000"}
                  </span>
                  <span className="text-xs text-gray-400 font-body ml-1">/bln</span>
                </div>

                <Link
                  href="/register?plan=basic"
                  className="block text-center w-full py-3.5 px-4 bg-[#0A2540] text-white font-semibold rounded-xl text-sm hover:bg-[#0A2540]/90 transition-colors mb-8"
                >
                  Pilih Basic
                </Link>

                <ul className="space-y-3">
                  {[
                    "1 outlet",
                    "Hingga 3 kasir",
                    "Kasir & POS dasar",
                    "Manajemen produk & stok",
                    "QRIS & pembayaran digital",
                    "Laporan harian",
                    "Support via email",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-gray-600 font-body">
                      <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* CARD 2: PRO (POPULAR) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border-2 border-[#00C897] shadow-xl relative flex flex-col justify-between"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00C897] text-[#0A2540] text-xs font-bold px-4 py-1 rounded-full font-body tracking-wide flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Paling Populer
              </div>

              <div>
                <h3 className="font-sans font-bold text-2xl text-[#0A2540] mb-2">Pro</h3>
                <p className="text-xs text-gray-500 font-body mb-6 min-h-[32px]">
                  Untuk restoran, retail berkembang, dan multi-cabang.
                </p>

                <div className="mb-6">
                  <span className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540]">
                    {isAnnual ? "Rp 254.000" : "Rp 299.000"}
                  </span>
                  <span className="text-xs text-gray-400 font-body ml-1">/bln</span>
                </div>

                <Link
                  href="/register?plan=pro"
                  className="block text-center w-full py-3.5 px-4 bg-[#00C897] text-[#0A2540] font-semibold rounded-xl text-sm hover:bg-[#00a87e] transition-colors mb-8 shadow-sm"
                >
                  Pilih Pro
                </Link>

                <ul className="space-y-3">
                  {[
                    "Cabang tidak terbatas",
                    "Kasir tidak terbatas",
                    "Semua fitur Basic",
                    "Kitchen Display System",
                    "Manajemen meja & reservasi",
                    "Integrasi GoFood/GrabFood/ShopeeFood",
                    "CRM & program loyalitas",
                    "Laporan lengkap & ekspor",
                    "QRIS Tuntas (tarik/setor)",
                    "Support prioritas (chat 24/7)",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-gray-600 font-body">
                      <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                      <span className={i < 2 ? "font-semibold text-[#0A2540]" : ""}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* CARD 3: ENTERPRISE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-sans font-bold text-2xl text-[#0A2540] mb-2">Enterprise</h3>
                <p className="text-xs text-gray-500 font-body mb-6 min-h-[32px]">
                  Untuk korporasi dan franchise dengan kebutuhan khusus.
                </p>

                <div className="mb-6">
                  <span className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540]">Custom</span>
                  <p className="text-xs text-gray-400 font-body mt-1">Disesuaikan kebutuhan</p>
                </div>

                <Link
                  href="/kontak"
                  className="block text-center w-full py-3.5 px-4 bg-white border border-[#0A2540] text-[#0A2540] font-semibold rounded-xl text-sm hover:bg-[#0A2540]/5 transition-colors mb-8"
                >
                  Hubungi Kami
                </Link>

                <ul className="space-y-3">
                  {[
                    "Semua fitur Pro",
                    "White-label & custom branding",
                    "Integrasi ERP/Akuntansi",
                    "SLA premium 99,9% uptime",
                    "Onboarding & training tim",
                    "Dedicated account manager",
                    "Custom report & API",
                    "Audit keamanan berkala",
                    "Hosting dedicated (opsional)",
                    "Kontrak fleksibel",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-gray-600 font-body">
                      <Check className="w-4 h-4 text-[#00C897] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* TOGGLE COMPARISON BUTTON */}
          <div className="text-center mb-24">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A2540] hover:text-[#00C897] transition-colors font-body py-2 px-4 rounded-lg bg-white border border-gray-200 shadow-sm"
            >
              Tampilkan Perbandingan Fitur Lengkap
              <ChevronDown className={`w-4 h-4 transition-transform ${showComparison ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540]">Pertanyaan Seputar Harga</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-[#F5F7FA] transition-colors"
                >
                  <span className="font-sans font-semibold text-sm sm:text-base text-[#0A2540]">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180 text-[#00C897]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-500 font-body leading-relaxed border-t border-gray-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER CTA */}
      <section className="bg-[#0A2540] py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl mb-4 text-balance">Mulai Gratis Selama 14 Hari</h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto font-body">
            Tidak perlu kartu kredit. Batalkan kapan saja. Setup dalam 5 menit.
          </p>
          <div className="flex justify-center">
            <Link
              href="/register"
              className="px-8 py-3.5 bg-[#00C897] text-[#0A2540] font-semibold rounded-full text-sm hover:bg-[#00a87e] transition-all hover:scale-105 shadow-lg shadow-[#00C897]/20"
            >
              Coba Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
