"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, X, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function HargaPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [showTable, setShowTable] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Apakah ada biaya transaksi per pembayaran?",
      a: "Tidak ada biaya transaksi tambahan dari Cashora untuk transaksi tunai. Untuk QRIS, MDR gratis atau 0.7% sesuai regulasi standar Bank Indonesia.",
    },
    {
      q: "Bisakah saya upgrade atau downgrade paket kapan saja?",
      a: "Bisa kapan saja. Perubahan paket akan langsung aktif dan selisih biaya akan dihitung secara prorata.",
    },
    {
      q: "Apakah harga berubah jika saya buka cabang baru?",
      a: "Tidak sama sekali! Biaya bulanan Anda tetap sama baik Anda memiliki 1 outlet maupun 50 outlet di paket Pro.",
    },
    {
      q: "Apa yang terjadi setelah trial 14 hari berakhir?",
      a: "Anda bisa memilih untuk berlangganan paket Basic atau Pro. Jika tidak berlangganan, akun Anda akan otomatis beralih ke mode baca saja tanpa kehilangan data.",
    },
    {
      q: "Apakah tersedia dukungan dalam bahasa Indonesia?",
      a: "Tentu saja. Seluruh tim CS dan teknis Cashora berbasis di Indonesia dan siap melayani via Live Chat, WA, dan telepon 24/7.",
    },
  ];

  const comparisonRows = [
    { name: "Jumlah Outlet", basic: "1", pro: "Tidak terbatas", ent: "Tidak terbatas" },
    { name: "Jumlah Kasir", basic: "3", pro: "Tidak terbatas", ent: "Tidak terbatas" },
    { name: "Mode Offline", basic: true, pro: true, ent: true },
    { name: "Kasir & POS", basic: true, pro: true, ent: true },
    { name: "QRIS Single Merchant", basic: true, pro: true, ent: true },
    { name: "QRIS TUNTAS (Tarik/Setor)", basic: false, pro: true, ent: true },
    { name: "Kitchen Display System", basic: false, pro: true, ent: true },
    { name: "Manajemen Meja & Restoran", basic: false, pro: true, ent: true },
    { name: "Integrasi GoFood/Grab/Shopee", basic: false, pro: true, ent: true },
    { name: "CRM & Loyalty Pelanggan", basic: false, pro: true, ent: true },
    { name: "Laporan Multi-Cabang", basic: "Basic", pro: true, ent: true },
    { name: "API Access & Custom", basic: false, pro: false, ent: true },
    { name: "White-label & Branding", basic: false, pro: false, ent: true },
    { name: "Dedicated Account Manager", basic: false, pro: false, ent: true },
    { name: "Support", basic: "Email", pro: "Chat 24/7", ent: "Dedicated" },
  ];

  return (
    <main className="pt-16">
      {/* HERO SECTION */}
      <section className="bg-[#0A2540] text-white py-16 text-center relative overflow-hidden">
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
            HARGA TRANSPARAN
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white mb-2"
          >
            Harga Sederhana.
          </motion.h1>
        </div>
      </section>

      {/* PRICING CONTENT SECTION */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* MONTHLY / ANNUAL TOGGLE SWITCH (MATCHING IMAGE 2 EXACTLY) */}
          <div className="flex items-center justify-center gap-3 mb-16 font-body">
            <span
              className={`text-sm font-semibold cursor-pointer ${
                billingCycle === "monthly" ? "text-[#0A2540]" : "text-gray-400"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Bulanan
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className={`w-12 h-6 rounded-full p-1 relative transition-colors focus:outline-none ${
                billingCycle === "annual" ? "bg-[#00C897]" : "bg-gray-300"
              }`}
              aria-label="Toggle Billing Cycle"
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => setBillingCycle("annual")}>
              <span className={`text-sm font-semibold ${billingCycle === "annual" ? "text-[#0A2540]" : "text-gray-400"}`}>
                Tahunan
              </span>
              <span className="text-[10px] font-bold bg-[#00C897] text-white px-2.5 py-0.5 rounded-full shadow-sm">
                Hemat 15%
              </span>
            </div>
          </div>

          {/* 3 PRICING CARDS (MATCHING IMAGE 2 EXACTLY) */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch mb-16">
            {/* Card 1: Basic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h2 className="font-sans font-bold text-2xl text-[#0A2540] mb-2">Basic</h2>
                <p className="text-xs text-gray-500 font-body mb-6 min-h-[32px]">
                  Untuk UMKM dan usaha kecil yang baru memulai.
                </p>

                {/* PRICE AREA WITH STRIKETHROUGH WHEN ANNUAL */}
                <div className="mb-6 min-h-[72px] flex flex-col justify-end">
                  {billingCycle === "annual" && (
                    <span className="text-xs text-gray-400 line-through font-body mb-0.5">
                      Rp 149.000/bln
                    </span>
                  )}
                  <div>
                    <span className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540]">
                      {billingCycle === "annual" ? "Rp 126.000" : "Rp 149.000"}
                    </span>
                    <span className="text-xs text-gray-400 font-body">/bln</span>
                  </div>
                  {billingCycle === "annual" && (
                    <p className="text-[11px] text-[#00C897] font-semibold font-body mt-1">
                      Ditagih Rp 1.512.000/tahun
                    </p>
                  )}
                </div>

                <Link
                  href="/register"
                  className="block text-center w-full py-3.5 bg-[#0A2540] text-white font-bold rounded-xl text-sm hover:bg-[#12365c] transition-all mb-8 shadow-md"
                >
                  Pilih Basic
                </Link>

                <ul className="space-y-3 font-body text-xs text-gray-600">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>1 outlet</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Hingga 3 kasir</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Kasir & POS dasar</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Manajemen produk & stok</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>QRIS & pembayaran digital</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Laporan harian</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Support via email</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2: Pro (Paling Populer) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-3xl p-8 border-2 border-[#00C897] shadow-xl relative flex flex-col justify-between transform lg:-translate-y-2"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00C897] text-white font-bold text-xs px-4 py-1.5 rounded-full font-body shadow-sm flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Paling Populer</span>
              </div>
              <div>
                <h2 className="font-sans font-bold text-2xl text-[#0A2540] mb-2 mt-2">Pro</h2>
                <p className="text-xs text-gray-500 font-body mb-6 min-h-[32px]">
                  Untuk restoran, retail berkembang, dan multi-cabang.
                </p>

                {/* PRICE AREA WITH STRIKETHROUGH WHEN ANNUAL */}
                <div className="mb-6 min-h-[72px] flex flex-col justify-end">
                  {billingCycle === "annual" && (
                    <span className="text-xs text-gray-400 line-through font-body mb-0.5">
                      Rp 299.000/bln
                    </span>
                  )}
                  <div>
                    <span className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540]">
                      {billingCycle === "annual" ? "Rp 254.000" : "Rp 299.000"}
                    </span>
                    <span className="text-xs text-gray-400 font-body">/bln</span>
                  </div>
                  {billingCycle === "annual" && (
                    <p className="text-[11px] text-[#00C897] font-semibold font-body mt-1">
                      Ditagih Rp 3.048.000/tahun
                    </p>
                  )}
                </div>

                <Link
                  href="/register"
                  className="block text-center w-full py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-all mb-8 shadow-lg shadow-[#00C897]/20"
                >
                  Pilih Pro
                </Link>

                <ul className="space-y-3 font-body text-xs text-gray-700 font-medium">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Cabang tidak terbatas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Kasir tidak terbatas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Semua fitur Basic</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Kitchen Display System</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Manajemen meja & reservasi</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Integrasi GoFood/GrabFood/ShopeeFood</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>CRM & program loyalitas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Laporan lengkap & ekspor</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>QRIS Tuntas (tarik/setor)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Support prioritas (chat 24/7)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 3: Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h2 className="font-sans font-bold text-2xl text-[#0A2540] mb-2">Enterprise</h2>
                <p className="text-xs text-gray-500 font-body mb-6 min-h-[32px]">
                  Untuk korporasi dan franchise dengan kebutuhan khusus.
                </p>
                <div className="mb-6 min-h-[72px] flex flex-col justify-end">
                  <span className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540]">Custom</span>
                  <p className="text-[10px] text-gray-400 font-body mt-0.5">Disesuaikan kebutuhan</p>
                </div>

                {/* CLEAN BUTTON TEXT "Hubungi Kami" WITHOUT BRACKETS */}
                <Link
                  href="/kontak"
                  className="block text-center w-full py-3.5 border border-[#0A2540] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-gray-50 transition-all mb-8"
                >
                  Hubungi Kami
                </Link>

                <ul className="space-y-3 font-body text-xs text-gray-600">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Semua fitur Pro</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>White-label & custom branding</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Integrasi ERP/akuntansi</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>SLA premium 99,9% uptime</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Onboarding & training tim</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Custom report & API</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Audit keamanan berkala</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Hosting dedicated (opsional)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Kontrak fleksibel</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* DETAILED COMPARISON TABLE ACCORDION */}
          <div className="text-center mb-16">
            <button
              onClick={() => setShowTable(!showTable)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2540] hover:text-[#00C897] transition-colors font-body"
            >
              <span>{showTable ? "Sembunyikan Perbandingan Fitur Lengkap" : "Tampilkan Perbandingan Fitur Lengkap"}</span>
              {showTable ? (
                <ChevronUp className="w-4 h-4 text-current shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-current shrink-0" />
              )}
            </button>
          </div>

          {showTable && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-20 p-6 sm:p-8"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-body text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 font-sans text-[#0A2540]">
                      <th className="py-4 px-4 font-bold text-sm">Fitur</th>
                      <th className="py-4 px-4 font-bold text-center text-sm">Basic</th>
                      <th className="py-4 px-4 font-bold text-center text-sm text-[#00C897]">Pro (Popular)</th>
                      <th className="py-4 px-4 font-bold text-center text-sm">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-gray-700">{row.name}</td>

                        {/* Basic column */}
                        <td className="py-3.5 px-4 text-center">
                          {typeof row.basic === "boolean" ? (
                            row.basic ? (
                              <Check className="w-4 h-4 text-[#00C897] mx-auto stroke-[2.5]" />
                            ) : (
                              <X className="w-4 h-4 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-600 font-semibold">{row.basic}</span>
                          )}
                        </td>

                        {/* Pro column */}
                        <td className="py-3.5 px-4 text-center bg-[#00C897]/5">
                          {typeof row.pro === "boolean" ? (
                            row.pro ? (
                              <Check className="w-4 h-4 text-[#00C897] mx-auto stroke-[2.5]" />
                            ) : (
                              <X className="w-4 h-4 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-[#0A2540] font-bold">{row.pro}</span>
                          )}
                        </td>

                        {/* Enterprise column */}
                        <td className="py-3.5 px-4 text-center">
                          {typeof row.ent === "boolean" ? (
                            row.ent ? (
                              <Check className="w-4 h-4 text-[#00C897] mx-auto stroke-[2.5]" />
                            ) : (
                              <X className="w-4 h-4 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-600 font-semibold">{row.ent}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* FAQ SECTION */}
          <div className="max-w-3xl mx-auto py-8">
            <h2 className="font-sans font-bold text-3xl text-center text-[#0A2540] mb-12">
              Pertanyaan Seputar Harga
            </h2>

            <div className="space-y-4 font-body">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-white border-gray-100 shadow-sm"
                        : "bg-white border-gray-100 hover:bg-slate-50/80 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#0A2540] transition-colors"
                    >
                      <span className="text-[#0A2540]">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="bg-[#0A2540] py-20 text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10"
        >
          <h2 className="font-sans font-bold text-3xl sm:text-4xl mb-4 text-balance">
            Mulai Gratis Selama 14 Hari
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto font-body">
            Tidak perlu kartu kredit. Batalkan kapan saja. Setup dalam 5 menit.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-all hover:scale-105 shadow-xl shadow-[#00C897]/20 font-body"
          >
            Coba Gratis Sekarang
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
