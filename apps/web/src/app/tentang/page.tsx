"use client";

import React from "react";
import Link from "next/link";
import {
  Eye,
  Target,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function TentangKamiPage() {
  const founders = [
    {
      initials: "AW",
      bgClass: "bg-[#00C897] text-[#0A2540]",
      name: "Arif Wibowo",
      role: "CEO & Co-Founder",
      quote:
        '"Frustrasi lahir dari ibuku yang sendiri saat mengelola warung keluarga tanpa alat yang tepat."',
    },
    {
      initials: "DR",
      bgClass: "bg-[#0A2540] text-white",
      name: "Dewi Ratnasari",
      role: "CTO & Co-Founder",
      quote:
        '"Saya percaya sistem berkelas finansial untuk konektivitas digital yang cepat untuk Indonesia."',
    },
    {
      initials: "HG",
      bgClass: "bg-[#00C897] text-[#0A2540]",
      name: "Hendra Gunawan",
      role: "CPO & Co-Founder",
      quote:
        '"Produk terbaik adalah yang bisa digunakan tanpa manual—itulah standar desain kami."',
    },
    {
      initials: "SP",
      bgClass: "bg-[#0A2540] text-white",
      name: "Sari Permatasari",
      role: "CFO & Co-Founder",
      quote:
        '"Model bisnis yang transparan, tanpa biaya tersembunyi dan harga yang adil dan terjangkau untuk semua."',
    },
  ];

  const certifications = [
    { title: "Terregistrasi BI", sub: "Bank Indonesia" },
    { title: "PCI DSS Compliant", sub: "Level 1" },
    { title: "Diaudit BSSN-SI", sub: "Security Audit" },
    { title: "SNAP BI Ready", sub: "Open API" },
    { title: "UU PDP Compliant", sub: "Data Protection" },
  ];

  return (
    <main className="pt-16">
      {/* SECTION 1: HERO HEADER (MATCHING MOCKUP 100%) */}
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
            TENTANG KAMI
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-bold text-4xl sm:text-5xl text-white mb-6 text-balance"
          >
            Cerita di Balik Cashora
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-body leading-relaxed"
          >
            Cashora lahir dari keprihatinan mendalam terhadap jutaan UMKM Indonesia yang masih berjuang dengan sistem
            pencatatan manual dan teknologi yang terlalu rumit atau terlalu mahal.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: VISI & MISI CARDS (MATCHING MOCKUP 100%) */}
      <section className="bg-[#F5F7FA] py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Visi */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#00C897]/15 text-[#00C897] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="font-sans font-bold text-2xl text-[#0A2540] mb-4">Visi</h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-body">
                Menjadi platform POS paling inklusif di Asia Tenggara—di mana setiap pelaku usaha, dari warung pinggir jalan hingga korporasi, memiliki akses ke teknologi terbaik dengan harga yang adil.
              </p>
            </motion.div>

            {/* Card Misi */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#00C897]/15 text-[#00C897] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="font-sans font-bold text-2xl text-[#0A2540] mb-4">Misi</h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-body">
                Memberdayakan UMKM Indonesia dengan teknologi POS yang mudah, andal, dan terjangkau—sehingga mereka bisa fokus berkembang, bukan mengelola sistem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NILAI INTI KAMI (MATCHING MOCKUP 100%) */}
      <section className="bg-[#F5F7FA] py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540]">
              Nilai Inti Kami
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Inovasi untuk Semua */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00C897]/15 text-[#00C897] flex items-center justify-center mb-6">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0A2540] mb-3">
                Inovasi untuk Semua
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-body">
                Kami percaya teknologi terbaik seharusnya bisa diakses oleh warung kecil sekalipun. Inovasi kami selalu berpusat pada kemudahan pengguna.
              </p>
            </motion.div>

            {/* Card 2: Keamanan Tanpa Kompromi */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00C897]/15 text-[#00C897] flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0A2540] mb-3">
                Keamanan Tanpa Kompromi
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-body">
                Data bisnis Anda adalah aset terpenting. Kami menerapkan standar keamanan setara perbankan—enkripsi, audit, dan kepatuhan regulasi.
              </p>
            </motion.div>

            {/* Card 3: Tumbuh Bersama UMKM */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00C897]/15 text-[#00C897] flex items-center justify-center mb-6">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-lg text-[#0A2540] mb-3">
                Tumbuh Bersama UMKM
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-body">
                Keberhasilan merchant adalah keberhasilan kami. Model harga expansion-neutral memastikan biaya tidak menghalangi pertumbuhan bisnis Anda.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TIM PENDIRI (MATCHING MOCKUP 100%) */}
      <section className="bg-[#F5F7FA] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540]">
              Tim Pendiri
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 text-center border border-gray-100 shadow-sm flex flex-col items-center justify-between"
              >
                <div>
                  <div
                    className={`w-16 h-16 rounded-2xl ${person.bgClass} flex items-center justify-center font-bold text-lg mx-auto mb-4 font-sans shadow-md`}
                  >
                    {person.initials}
                  </div>
                  <h3 className="font-sans font-bold text-base text-[#0A2540] mb-1">
                    {person.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#00C897] font-body mb-4">
                    {person.role}
                  </p>
                  <p className="text-xs text-gray-500 italic font-body leading-relaxed">
                    {person.quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SERTIFIKASI & KEPATUHAN (MATCHING MOCKUP 100%) */}
      <section className="bg-[#0A2540] py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-bold text-3xl sm:text-4xl mb-3">
              Sertifikasi & Kepatuhan
            </h2>
            <p className="text-white/70 text-sm sm:text-base font-body mb-10 max-w-xl mx-auto">
              Cashora mematuhi standar regulasi dan keamanan tertinggi di Indonesia.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center"
              >
                <p className="font-sans font-bold text-xs text-white mb-1">{cert.title}</p>
                <p className="text-[10px] text-white/50 font-body">{cert.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: KANTOR KAMI (MATCHING MOCKUP 100%) */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[#00C897]/15 text-[#00C897] flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6" />
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540] mb-3">
            Kantor Kami
          </h2>
          <p className="text-gray-600 text-sm font-body max-w-xl mx-auto mb-3">
            Jl. Jenderal Sudirman Kaw. 52-53, Senayan, Jakarta Selatan 12190, DKI Jakarta, Indonesia
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#00C897] font-body mb-8">
            <a href="mailto:halo@cashora.id" className="hover:underline flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              halo@cashora.id
            </a>
            <span>•</span>
            <a href="tel:+6221500123" className="hover:underline flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +62 21 500-123
            </a>
          </div>

          {/* GOOGLE MAPS EMBEDDED FRAME */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-4 border border-gray-100 shadow-md overflow-hidden h-80 relative"
          >
            <iframe
              title="Google Maps Kantor Cashora"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.27063467023!2d106.8055!3d-6.228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnNDAuOCJTIDEwNsKwNDgnMTkuOCJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "1.25rem" }}
              allowFullScreen={false}
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
