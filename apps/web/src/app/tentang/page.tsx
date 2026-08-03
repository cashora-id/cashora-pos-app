import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, HeartHandshake, Sparkles, MapPin } from "lucide-react";

export default function TentangPage() {
  const leadership = [
    { name: "Bambang Kurniawan", role: "Co-Founder & CEO", exp: "Ex-VP FinTech Lead, 15+ thn di sistem pembayaran" },
    { name: "Siti Rahmawati", role: "Co-Founder & CTO", exp: "Ex-Senior Distributed Systems Architect" },
    { name: "David Prasetyo", role: "Head of Product", exp: "Ex-Product Lead di e-Commerce & POS Indonesia" },
  ];

  const milestones = [
    { year: "2024", title: "Awal Berdiri", desc: "Dikembangkan untuk menyelesaikan kendala konektivitas dan biaya lisensi per cabang bagi merchant UMKM." },
    { year: "2025", title: "Sertifikasi BI SNAP & QRIS TUNTAS", desc: "Mendapat sertifikasi resmi Bank Indonesia untuk fitur QRIS dinamis, Tarik, dan Setor tunai." },
    { year: "2026", title: "10.000+ Merchant", desc: "Telah melayani lebih dari 10.000 merchant di 150+ kota di seluruh Indonesia dengan 99.99% SLA uptime." },
  ];

  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="bg-[#0A2540] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-3">Tentang Cashora</p>
          <h1 className="font-sans font-bold text-4xl sm:text-5xl mb-6">
            Mendorong Kemajuan FinTech Ritel & UMKM Indonesia
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Kami membangun platform kasir POS modern yang andal, aman, dan tanpa batasan cabang—memastikan setiap bisnis di Indonesia dapat tumbuh tanpa hambatan teknologi.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[#00C897]/10 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-[#00C897]" />
              </div>
              <h2 className="font-sans font-bold text-2xl text-[#0A2540] mb-4">Visi Kami</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Menjadi standar infrastruktur transaksi ritel & F&B utama di Asia Tenggara yang menghubungkan merchant, pembeli, dan lembaga keuangan dalam satu ekosistem terpadu.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[#0A2540]/10 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6 text-[#0A2540]" />
              </div>
              <h2 className="font-sans font-bold text-2xl text-[#0A2540] mb-4">Misi Kami</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Memberdayakan pengusaha lokal dengan menghadirkan teknologi offline-first yang dapat diandalkan, aman dari risiko kecurangan, serta fleksibel tanpa penambahan biaya per cabang.
              </p>
            </div>
          </div>

          {/* VALUES */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-2">Prinsip Utama</p>
            <h2 className="font-sans font-bold text-3xl text-[#0A2540]">Nilai-Nilai Yang Kami Pegang</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <ShieldCheck className="w-8 h-8 text-[#00C897] mx-auto mb-4" />
              <h3 className="font-bold text-lg text-[#0A2540] mb-2">Keandalan Tanpa Kompromi</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Aplikasi kasir harus selalu siap jualan dalam kondisi apa pun, baik online maupun offline.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <Award className="w-8 h-8 text-[#0A2540] mx-auto mb-4" />
              <h3 className="font-bold text-lg text-[#0A2540] mb-2">Transparansi Biaya</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Tanpa komisi tersembunyi, tanpa denda pembatalan, dan tanpa biaya berlebihan per outlet.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <MapPin className="w-8 h-8 text-[#00C897] mx-auto mb-4" />
              <h3 className="font-bold text-lg text-[#0A2540] mb-2">Lokal & Relevan</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Dibuat khusus menyesuaikan dengan regulasi Bank Indonesia, QRIS, dan kebiasaan pengusaha lokal.
              </p>
            </div>
          </div>

          {/* TIMELINE JOURNEY */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 mb-20 shadow-sm">
            <h2 className="font-sans font-bold text-2xl text-[#0A2540] text-center mb-10">Perjalanan Cashora</h2>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {milestones.map((item, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-[#00C897]">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00C897]" />
                  <span className="text-xs font-bold text-[#00C897] uppercase tracking-wider">{item.year}</span>
                  <h3 className="font-bold text-[#0A2540] text-lg mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LEADERSHIP */}
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl text-[#0A2540] mb-3">Tim Kepemimpinan</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Didukung oleh talenta berpengalaman di bidang teknologi keuangan, arsitektur sistem, dan manajemen produk ritel.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {leadership.map((person, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
                <div className="w-20 h-20 bg-[#0A2540] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl font-sans">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-bold text-lg text-[#0A2540]">{person.name}</h3>
                <p className="text-xs text-[#00C897] font-semibold mb-2">{person.role}</p>
                <p className="text-xs text-gray-500">{person.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
