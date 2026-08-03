"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, Calendar, CheckCircle2, Send, Sparkles } from "lucide-react";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    branches: "1-3",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* HEADER */}
      <section className="bg-[#0A2540] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-3">Demo Interaktif</p>
          <h1 className="font-sans font-bold text-4xl sm:text-5xl mb-4">Lihat Cashora dalam Aksi</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Pilih cara terbaik untuk mengenal Cashora—eksplorasi mandiri atau jalankan sesi demo personal bersama tim ahli kami.
          </p>
        </div>
      </section>

      {/* DEMO OPTIONS */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Virtual Demo Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#00C897] transition-all">
              <div>
                <div className="w-14 h-14 bg-[#00C897]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Play className="w-7 h-7 text-[#00C897] fill-current" />
                </div>
                <h2 className="font-sans font-bold text-2xl text-[#0A2540] mb-3">Demo Interaktif Mandiri</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Eksplorasi semua fitur Cashora secara mandiri kapan saja. Tanpa perlu reservasi jadwal, langsung coba dengan data simulasi toko.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00C897]" />
                    Tersedia 24/7 tanpa reservasi
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00C897]" />
                    Simulasi transaksi kasir & offline mode
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00C897]" />
                    Uji coba laporan analitik realtime
                  </li>
                </ul>
              </div>
              <Link
                href="/login"
                className="w-full py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-center text-sm hover:bg-[#00a87e] transition-colors"
              >
                Mulai Virtual Demo
              </Link>
            </div>

            {/* Scheduled 1-on-1 Demo */}
            <div className="bg-[#0A2540] text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#00C897]/10 -translate-y-8 translate-x-8" />
              <div>
                <div className="w-14 h-14 bg-[#00C897]/20 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-[#00C897]" />
                </div>
                <h2 className="font-sans font-bold text-2xl text-white mb-3">Jadwalkan Demo 1-on-1</h2>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Dapatkan sesi konsultasi personal. Tim produk kami akan menunjukkan alur kerja terbaik yang disesuaikan dengan jenis bisnis Anda.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2.5 text-xs text-white/80 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00C897]" />
                    Sesi tanya jawab khusus dengan konsultan
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-white/80 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00C897]" />
                    Kalkulasi efisiensi biaya cabang
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-white/80 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00C897]" />
                    Panduan integrasi hardware kasir
                  </li>
                </ul>
              </div>
              <a
                href="#booking-form"
                className="w-full py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-center text-sm hover:bg-[#00a87e] transition-colors"
              >
                Pilih Jadwal Sesi
              </a>
            </div>
          </div>

          {/* BOOKING FORM SECTION */}
          <div id="booking-form" className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-md max-w-3xl mx-auto">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#00C897]/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[#00C897]" />
                </div>
                <h3 className="font-sans font-bold text-2xl text-[#0A2540] mb-2">Permintaan Demo Terkirim!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                  Terima kasih, <strong>{formData.name}</strong>. Tim spesialis Cashora akan menghubungi Anda via WhatsApp/Email dalam waktu kurang dari 24 jam.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#0A2540] text-white font-bold text-xs rounded-xl hover:bg-[#07192b] transition-colors"
                >
                  Kirim Permintaan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-sans font-bold text-2xl text-[#0A2540] mb-2">Formulir Jadwal Demo Personal</h3>
                  <p className="text-gray-500 text-xs">Isi data singkat berikut untuk menjadwalkan sesi konsultasi.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      placeholder="Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Nama Bisnis / Toko</label>
                    <input
                      type="text"
                      required
                      placeholder="Kopi Kenangan Mantan"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Email Kerja / Personal</label>
                    <input
                      type="email"
                      required
                      placeholder="budi@kedai.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1.5">No. WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="081234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Jumlah Outlet / Cabang</label>
                  <select
                    value={formData.branches}
                    onChange={(e) => setFormData({ ...formData, branches: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
                  >
                    <option value="1">1 Outlet (Single Store)</option>
                    <option value="2-5">2 - 5 Outlet</option>
                    <option value="6-15">6 - 15 Outlet</option>
                    <option value="15+">Lebih dari 15 Outlet</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Kirim Permintaan Demo
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
