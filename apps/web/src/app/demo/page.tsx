"use client";

import React from "react";
import Link from "next/link";
import { Play, Calendar, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function DemoPage() {
  return (
    <main className="pt-16">
      {/* HERO HEADER SECTION (MATCHING MOCKUP 100%) */}
      <section className="bg-[#0A2540] text-white py-16 sm:py-20 text-center relative overflow-hidden">
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
            DEMO
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white mb-4 text-balance"
          >
            Lihat Cashora dalam Aksi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-body leading-relaxed"
          >
            Pilih cara terbaik untuk mengenal Cashora—eksplorasi mandiri atau demo langsung bersama tim kami.
          </motion.p>
        </div>
      </section>

      {/* DEMO OPTIONS CARDS SECTION (MATCHING MOCKUP 100%) */}
      <section className="bg-[#F5F7FA] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: Demo Interaktif Mandiri */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00C897]/15 text-[#00C897] flex items-center justify-center mb-6">
                  <Play className="w-6 h-6 fill-current" />
                </div>
                <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#0A2540] mb-3">
                  Demo Interaktif Mandiri
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-body">
                  Eksplorasi semua fitur Cashora secara mandiri kapan saja. Tidak perlu jadwal, langsung coba dengan data simulasi.
                </p>
                <ul className="space-y-3 mb-8 font-body">
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Tersedia 24/7 tanpa jadwal</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Data simulasi lengkap</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Semua fitur bisa dicoba</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Tidak perlu registrasi</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/login"
                className="block text-center w-full py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-all shadow-md shadow-[#00C897]/20 font-body"
              >
                Mulai Demo Virtual
              </Link>
            </motion.div>

            {/* Card 2: Jadwalkan Demo Langsung */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#0A2540] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden border border-[#0A2540]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#00C897]/10 -translate-y-8 translate-x-8 pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00C897]/20 text-[#00C897] flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6" />
                </div>
                <h2 className="font-sans font-bold text-xl sm:text-2xl text-white mb-3">
                  Jadwalkan Demo Langsung
                </h2>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-body">
                  Dapatkan demo personal bersama tim ahli kami. Kami akan menyesuaikan demo dengan kebutuhan spesifik bisnis Anda.
                </p>
                <ul className="space-y-3 mb-8 font-body">
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Demo personal 1-on-1</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Disesuaikan dengan bisnis Anda</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Konsultasi gratis</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                    <Check className="w-4 h-4 text-[#00C897] shrink-0 stroke-[2.5]" />
                    <span>Pilih waktu yang sesuai</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/kontak"
                className="block text-center w-full py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-all shadow-md shadow-[#00C897]/20 font-body"
              >
                Pilih Waktu Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
