import React from "react";
import Link from "next/link";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const articles = [
    {
      title: "Cara Menghindari Rugi Saat Internet Mati di Kasir POS Restoran",
      category: "Teknologi POS",
      date: "01 Agt 2026",
      author: "Tim Editiorial Cashora",
      summary: "Pelajari bagaimana arsitektur offline-first dan delta-sync mencegah antrean menumpuk dan kehilangan catatan transaksi saat sinyal internet down.",
    },
    {
      title: "Panduan Lengkap Standar SNAP BI & QRIS TUNTAS untuk Merchant F&B",
      category: "Regulasi & FinTech",
      date: "28 Jul 2026",
      author: "Bambang Kurniawan",
      summary: "Memahami implementasi QRIS dinamis, fitur tarik tunai di kasir, serta kepatuhan standar transaksi elektronik Bank Indonesia.",
    },
    {
      title: "Strategi Ekspansi Multi-Cabang Tanpa Membengkakkan Biaya Lisensi Software",
      category: "Manajemen Bisnis",
      date: "22 Jul 2026",
      author: "Siti Rahmawati",
      summary: "Analisis kalkulasi biaya POS per cabang vs model Expansion-Neutral untuk menjaga margin profitabilitas restoran franchise.",
    },
    {
      title: "Integrasi Kitchen Display System (KDS) untuk Mempercepat Pelayanan Dapur",
      category: "Operasional Restoran",
      date: "15 Jul 2026",
      author: "David Prasetyo",
      summary: "Mengurangi salah antar makanan dan waktu tunggu pelanggan dengan menghubungkan layar kasir langsung ke display dapur secara real-time.",
    },
  ];

  return (
    <div className="pt-20">
      {/* HEADER */}
      <section className="bg-[#0A2540] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-3">Blog & Wawasan Bisnis</p>
          <h1 className="font-sans font-bold text-4xl sm:text-5xl mb-4">Eksplorasi Tips & Tren Industri FinTech Ritel</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Artikel panduan praktis operasional kasir, strategi manajemen cabang, serta edukasi regulasi pembayaran.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Cari artikel (misal: QRIS, Offline POS)..."
              className="w-full px-5 py-3.5 pl-12 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 text-sm focus:outline-none focus:border-[#00C897]"
            />
            <Search className="w-5 h-5 text-white/50 absolute left-4 top-4" />
          </div>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((art, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs mb-4">
                    <span className="bg-[#00C897]/15 text-[#00C897] font-semibold px-3 py-1 rounded-full border border-[#00C897]/20">
                      {art.category}
                    </span>
                    <span className="text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                  </div>
                  <h2 className="font-sans font-bold text-xl text-[#0A2540] mb-3 hover:text-[#00C897] transition-colors cursor-pointer">
                    {art.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{art.summary}</p>
                </div>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center gap-1.5 font-medium">
                    <User className="w-3.5 h-3.5 text-[#00C897]" />
                    {art.author}
                  </span>
                  <Link
                    href="#"
                    className="text-xs font-bold text-[#0A2540] hover:text-[#00C897] transition-colors flex items-center gap-1"
                  >
                    Baca Artikel <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
