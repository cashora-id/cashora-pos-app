"use client";

import React, { useState } from "react";
import { Send, MapPin, Mail, Phone, MessageSquare, Link as LinkIcon, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

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
            KONTAK
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4 text-balance max-w-4xl mx-auto"
          >
            Hubungi Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 font-body max-w-2xl mx-auto"
          >
            Tim kami siap membantu Anda. Kirim pesan dan kami akan merespons dalam 1×24 jam.
          </motion.p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* LEFT COLUMN: FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <h2 className="font-sans font-bold text-2xl text-[#0A2540] mb-6">Kirim Pesan</h2>

              {isSubmitted ? (
                <div className="bg-[#00C897]/10 border border-[#00C897]/30 rounded-xl p-6 text-center">
                  <p className="font-sans font-bold text-[#0A2540] text-lg mb-1">Pesan Terkirim! 🎉</p>
                  <p className="text-xs text-gray-600 font-body">
                    Terima kasih telah menghubungi Cashora. Tim support kami akan menghubungi Anda segera.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0A2540] font-body mb-2">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs text-[#0A2540] font-body focus:outline-none focus:border-[#00C897] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A2540] font-body mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nama@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs text-[#0A2540] font-body focus:outline-none focus:border-[#00C897] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A2540] font-body mb-2">
                      Subjek <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Pertanyaan seputar fitur kasir"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs text-[#0A2540] font-body focus:outline-none focus:border-[#00C897] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A2540] font-body mb-2">
                      Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tuliskan pesan Anda di sini..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs text-[#0A2540] font-body focus:outline-none focus:border-[#00C897] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#00C897] text-[#0A2540] font-semibold rounded-xl text-xs hover:bg-[#00a87e] transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Kirim Pesan
                  </button>
                </form>
              )}
            </motion.div>

            {/* RIGHT COLUMN: INFO CARDS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              {/* CARD 1: INFORMASI KONTAK */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
                <h3 className="font-sans font-bold text-xl text-[#0A2540]">Informasi Kontak</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00C897]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-[#00C897]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0A2540] font-sans">Alamat Kantor</p>
                      <p className="text-xs text-gray-500 font-body leading-relaxed">
                        Jl. Jenderal Sudirman Kav. 52-53 Senayan, Jakarta Selatan 12190
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00C897]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 text-[#00C897]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0A2540] font-sans">Email Support</p>
                      <a href="mailto:halo@cashora.id" className="text-xs text-[#00C897] font-semibold font-body">
                        halo@cashora.id
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00C897]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-[#00C897]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0A2540] font-sans">Telepon / WhatsApp</p>
                      <a href="tel:+6221500123" className="text-xs text-[#00C897] font-semibold font-body">
                        +62 21 500-123
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-[#0A2540] font-sans mb-3">Ikuti Kami</p>
                  <div className="flex items-center gap-3">
                    <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#00C897] hover:text-[#00C897] transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#00C897] hover:text-[#00C897] transition-colors">
                      <LinkIcon className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#00C897] hover:text-[#00C897] transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CARD 2: LOCATION MAP PLACEHOLDER */}
              <div className="bg-[#0A2540] rounded-2xl p-8 text-center text-white relative overflow-hidden shadow-sm">
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center py-4">
                  <div className="w-12 h-12 rounded-full bg-[#00C897] flex items-center justify-center mb-3 shadow-lg shadow-[#00C897]/30 animate-pulse">
                    <MapPin className="w-6 h-6 text-[#0A2540]" />
                  </div>
                  <p className="font-sans font-bold text-base text-white">Cashora HQ</p>
                  <p className="text-xs text-white/60 font-body">Jakarta Selatan, Indonesia</p>
                </div>
              </div>

              {/* CARD 3: JAM OPERASIONAL */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-sans font-bold text-base text-[#0A2540] mb-4">Jam Operasional</h3>
                <div className="space-y-2.5 text-xs font-body">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Senin – Jumat</span>
                    <span className="font-semibold text-[#0A2540]">08:00 – 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Sabtu</span>
                    <span className="font-semibold text-[#0A2540]">09:00 – 14:00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Minggu & Libur Nasional</span>
                    <span className="font-semibold text-gray-400">Tutup</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
