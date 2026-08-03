import React from "react";
import Link from "next/link";
import {
  Wifi,
  ShieldCheck,
  Store,
  QrCode,
  Utensils,
  ShoppingBag,
  Package,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export default function LayananPage() {
  const services = [
    {
      icon: Wifi,
      title: "Mode Offline-First & Delta Sync",
      desc: "Kasir tetap dapat mencetak struk, menerima pembayaran, dan mengelola transaksi tanpa internet. Begitu koneksi aktif, data otomatis disinkronkan tanpa konflik.",
      details: ["Pencetakan struk bluetooth offline", "Delta Sync bandwidth efisien", "Penyelesaian konflik otomatis (CRDT)"],
    },
    {
      icon: Store,
      title: "Model Harga Expansion-Neutral",
      desc: "Tidak ada biaya lisensi per cabang atau per kasir. Satu akun langganan berlaku untuk outlet tak terbatas, sehingga profit margin tetap terjaga saat bisnis tumbuh.",
      details: ["Outlet tak terbatas", "Kasir tak terbatas", "Konsolidasi laporan real-time"],
    },
    {
      icon: Utensils,
      title: "Manajemen Restoran & Kitchen Display",
      desc: "Solusi terpadu untuk bisnis F&B. Dari denah meja interaktif, reservasi, QR menu self-order, hingga layar Kitchen Display System (KDS) di dapur.",
      details: ["Kitchen Display System (KDS)", "Denah meja & status pesanan", "QR Menu Self-Ordering"],
    },
    {
      icon: ShoppingBag,
      title: "Agregator Pesanan Delivery Online",
      desc: "Integrasi langsung dengan GoFood, GrabFood, dan ShopeeFood. Semua pesanan masuk ke satu layar POS tanpa perlu tablet terpisah.",
      details: ["Multi-platform online order", "Auto stock deduction", "Laporan terpadu omnichannel"],
    },
    {
      icon: QrCode,
      title: "QRIS TUNTAS & SoftPOS",
      desc: "Terima pembayaran QRIS dinamis/statis, tarik tunai, setor tunai, dan transfer dana langsung via aplikasi POS tanpa tambahan hardware EDC.",
      details: ["QRIS Dinamis & Statis", "Fasilitas Tarik & Setor Tunai", "Bebas sewa mesin EDC"],
    },
    {
      icon: Package,
      title: "Inventori & Manajemen Stok Otomatis",
      desc: "Pantau stok bahan baku, resep makanan, serta notifikasi stok menipis secara otomatis di semua outlet.",
      details: ["Resep & COGS kalkulasi", "Peringatan stok minimum", "Transfer stok antar cabang"],
    },
    {
      icon: ShieldCheck,
      title: "Keamanan 7 Lapis & Kepatuhan Perbankan",
      desc: "Dilengkapi Enkripsi AES-256, TLS 1.3, Audit Log tidak tergantikan, Role-Based Access Control (RBAC), serta kepatuhan standar SNAP BI & PCI-DSS.",
      details: ["Standar Keamanan Perbankan", "RBAC & Otorisasi Kasir", "Audit Log Transaksi"],
    },
    {
      icon: BarChart3,
      title: "Laporan & Analitik Bisnis Cerdas",
      desc: "Analisis penjualan harian, jam sibuk, produk terlaris, laporan laba rugi, dan tren pelanggan yang disajikan dalam grafik intuitif.",
      details: ["Export PDF & Excel", "Analisis jam tersibuk", "Perhitungan Margin Laba bersih"],
    },
  ];

  return (
    <div className="pt-20">
      {/* HEADER */}
      <section className="bg-[#0A2540] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-3">Layanan & Fitur</p>
          <h1 className="font-sans font-bold text-4xl sm:text-5xl mb-4">Fitur Lengkap untuk Skala Bisnis Anda</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Didesain khusus untuk memenuhi kebutuhan operasional toko ritel, restoran, kafe, hingga franchise multi-cabang di Indonesia.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 bg-[#00C897]/10 rounded-2xl flex items-center justify-center mb-6">
                      <IconComp className="w-7 h-7 text-[#00C897]" />
                    </div>
                    <h2 className="font-sans font-bold text-xl text-[#0A2540] mb-3">{item.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-4 space-y-2">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-[#00C897] shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-[#0A2540] rounded-2xl p-8 sm:p-12 text-white text-center shadow-xl">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl mb-4">Ingin Mencoba Fitur Ini Langsung?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 text-sm sm:text-base">
              Akses demo virtual interaktif atau jadwalkan konsultasi 1-on-1 bersama tim spesialis kami.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/demo"
                className="px-6 py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-colors"
              >
                Coba Demo Interaktif
              </Link>
              <Link
                href="/kontak"
                className="px-6 py-3.5 border border-white/30 text-white font-bold rounded-xl text-sm hover:bg-white/10 transition-colors"
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
