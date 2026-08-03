"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";

export default function KontakPage() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-20">
      {/* HEADER */}
      <section className="bg-[#0A2540] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-3">Hubungi Kami</p>
          <h1 className="font-sans font-bold text-4xl sm:text-5xl mb-4">Kami Siap Membantu Bisnis Anda</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Punya pertanyaan seputar integrasi, paket harga, atau bantuan teknis? Tim kami siap melayani Anda 24/7.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="font-sans font-bold text-2xl text-[#0A2540] mb-6">Kantor & Layanan Dukungan</h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00C897]/15 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#00C897]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540] text-base mb-1">Kantor Pusat</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Gedung Financial Tower Lt. 18, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan, 12190
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0A2540]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#0A2540]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540] text-base mb-1">Email Pertanyaan</h3>
                    <p className="text-xs text-gray-600">Umum: halo@cashora.id</p>
                    <p className="text-xs text-gray-600">Dukungan: support@cashora.id</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00C897]/15 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#00C897]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540] text-base mb-1">Telepon & WhatsApp</h3>
                    <p className="text-xs text-gray-600">Hotline 24 Jam: +62 21 500-123</p>
                    <p className="text-xs text-gray-600">WhatsApp Support: +62 811-9988-7766</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-[#00C897]/15 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#00C897]" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-[#0A2540] mb-2">Pesan Berhasil Terkirim!</h3>
                  <p className="text-gray-600 text-sm max-w-xs mx-auto mb-6">
                    Terima kasih telah menghubungi Cashora. Tim customer support kami akan segera membalas pesan Anda.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-6 py-2.5 bg-[#0A2540] text-white text-xs font-bold rounded-xl"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-sans font-bold text-2xl text-[#0A2540]">Kirim Pesan Direct</h2>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Nama Anda</label>
                    <input
                      type="text"
                      required
                      placeholder="Nama lengkap"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Pesan / Pertanyaan</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tuliskan pertanyaan atau kebutuhan Anda di sini..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Kirim Pesan
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
