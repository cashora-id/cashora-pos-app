"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, HelpCircle, Building2, Store } from "lucide-react";

export default function HargaPage() {
  const [branches, setBranches] = useState<number>(3);
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  // Cashora: Flat rate (Rp 299,000 / bln) vs traditional POS (Rp 250,000 / outlet / bln)
  const monthlyRatePerBranchTraditional = 250000;
  const cashoraFlatRateMonthly = isAnnual ? 249000 : 299000;

  const traditionalTotalCost = branches * monthlyRatePerBranchTraditional;
  const cashoraTotalCost = cashoraFlatRateMonthly;
  const monthlySavings = Math.max(0, traditionalTotalCost - cashoraTotalCost);

  const plans = [
    {
      name: "Starter / UMKM",
      priceMonthly: "Rp 149.000",
      priceAnnual: "Rp 119.000",
      period: "/ bulan",
      desc: "Cocok untuk warung, kedai kopi single outlet, dan toko ritel mikro.",
      features: [
        "1 Outlet Aktif",
        "Mode Kasir Offline-First",
        "QRIS Statis & Dinamis",
        "Laporan Penjualan Dasar",
        "Stok & Inventori Dasar",
        "Dukungan WhatsApp 24/7",
      ],
      cta: "Pilih Starter",
      popular: false,
    },
    {
      name: "Pro Expansion",
      priceMonthly: "Rp 299.000",
      priceAnnual: "Rp 249.000",
      period: "/ bulan",
      desc: "Solusi utama untuk bisnis berkembang tanpa biaya per cabang.",
      features: [
        "CABANG TAK TERBATAS (Rp 0 per outlet)",
        "Kasir & User Tak Terbatas",
        "Mode Offline-First & Auto Delta Sync",
        "Kitchen Display System (KDS)",
        "Integrasi GoFood, GrabFood, ShopeeFood",
        "QRIS TUNTAS (Tarik & Setor Tunai)",
        "Analitik & Laporan Laba Rugi Realtime",
        "Keamanan Standard Perbankan 7 Lapis",
      ],
      cta: "Mulai Pro Expansion",
      popular: true,
    },
    {
      name: "Enterprise Custom",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      period: "",
      desc: "Untuk jaringan korporasi besar, franchise 50+ outlet, dan integrasi ERP.",
      features: [
        "Semua Fitur Pro Expansion",
        "Dedicated Account Manager",
        "SLA Uptime 99.99% Guaranteed",
        "Integrasi Custom ERP / SAP",
        "Custom Feature Development",
        "On-premise / Private Cloud option",
        "Pelatihan Staf & Onboarding Langsung",
      ],
      cta: "Hubungi Tim Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "Apa maksud dari Expansion-Neutral Pricing?",
      a: "Artinya Anda membayar biaya berlangganan tetap per bulan. Ketika Anda menambah cabang baru (misal dari 1 menjadi 10 cabang), biaya bulanan Anda TETAP SAMA tanpa biaya lisensi per cabang.",
    },
    {
      q: "Apakah aplikasi kasir benar-benar bisa transaksi saat internet mati?",
      a: "Ya! Aplikasi POS Cashora berbasis offline-first. Semua transaksi kasir tersimpan lokal di perangkat dan akan disinkronkan otomatis begitu koneksi internet kembali terhubung.",
    },
    {
      q: "Apakah ada biaya tersembunyi seperti biaya setup atau pemeliharaan?",
      a: "Sama sekali tidak ada. Semua pembaruan aplikasi, keamanan, dan dukungan teknis sudah termasuk dalam biaya langganan bulanan.",
    },
    {
      q: "Apakah saya bisa mengubah atau membatalkan paket kapan saja?",
      a: "Bisa. Anda bebas upgrade, downgrade, atau membatalkan langganan kapan saja tanpa denda pembatalan.",
    },
  ];

  return (
    <div className="pt-20">
      {/* HEADER */}
      <section className="bg-[#0A2540] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-[#00C897] uppercase tracking-widest mb-3">Harga Transparan</p>
          <h1 className="font-sans font-bold text-4xl sm:text-5xl mb-4">Investasi Ringan untuk Pertumbuhan Bisnis</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Bayar satu harga transparan, tanpa biaya lisensi per outlet atau biaya tersembunyi.
          </p>

          {/* Toggle Annual/Monthly */}
          <div className="inline-flex items-center bg-white/10 p-1.5 rounded-xl border border-white/15">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                !isAnnual ? "bg-[#00C897] text-[#0A2540]" : "text-white/80 hover:text-white"
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                isAnnual ? "bg-[#00C897] text-[#0A2540]" : "text-white/80 hover:text-white"
              }`}
            >
              Tahunan <span className="text-[10px] bg-[#0A2540] text-[#00C897] px-2 py-0.5 rounded-full font-bold">Hemat 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-8 border flex flex-col justify-between relative shadow-sm hover:shadow-xl transition-all ${
                  plan.popular ? "border-[#00C897] ring-2 ring-[#00C897]/20 shadow-lg" : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00C897] text-[#0A2540] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow">
                    Paling Populer
                  </div>
                )}

                <div>
                  <h2 className="font-sans font-bold text-2xl text-[#0A2540] mb-2">{plan.name}</h2>
                  <p className="text-gray-500 text-xs mb-6 leading-relaxed">{plan.desc}</p>

                  <div className="mb-6">
                    <span className="font-sans font-extrabold text-4xl text-[#0A2540]">
                      {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 border-t border-gray-100 pt-6 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <Check className="w-4 h-4 text-[#00C897] shrink-0 mt-0.5" />
                        <span className={feat.includes("TAK TERBATAS") ? "font-bold text-[#0A2540]" : ""}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/register"
                  className={`w-full py-3.5 rounded-xl text-center font-bold text-sm transition-colors ${
                    plan.popular
                      ? "bg-[#00C897] text-[#0A2540] hover:bg-[#00a87e]"
                      : "bg-[#0A2540] text-white hover:bg-[#07192b]"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* INTERACTIVE BRANCH SAVINGS CALCULATOR */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-md mb-20">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C897]/10 text-[#00C897] text-xs font-semibold mb-3">
                <Building2 className="w-4 h-4" />
                <span>Kalkulator Biaya Ekspansi</span>
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A2540] mb-2">
                Berapa Biaya Hemat Anda dengan Cashora?
              </h2>
              <p className="text-gray-500 text-sm">
                Bandingkan skema harga flat Cashora dengan POS konvensional yang menagih biaya per cabang.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              {/* Slider Input */}
              <div className="bg-[#F5F7FA] p-6 rounded-2xl border border-gray-100">
                <label className="block text-sm font-bold text-[#0A2540] mb-2">Jumlah Cabang Bisnis Anda:</label>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-[#00C897]">{branches} Outlet</span>
                  <span className="text-xs text-gray-400">1 - 50 Outlet</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={branches}
                  onChange={(e) => setBranches(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00C897]"
                />
                <p className="text-[11px] text-gray-400 mt-4 leading-relaxed">
                  POS Konvensional umumnya membebankan biaya lisensi ~Rp 250.000/outlet/bulan.
                </p>
              </div>

              {/* Comparison Box */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">POS Konvensional ({branches} Cabang)</p>
                    <p className="text-lg font-bold text-gray-700">Rp {traditionalTotalCost.toLocaleString("id-ID")}/bln</p>
                  </div>
                  <Store className="w-6 h-6 text-gray-400" />
                </div>

                <div className="bg-[#0A2540] text-white p-5 rounded-xl border border-[#00C897]/40 flex justify-between items-center shadow-md">
                  <div>
                    <p className="text-xs text-[#00C897] font-semibold">Cashora Pro Expansion ({branches} Cabang)</p>
                    <p className="text-2xl font-extrabold text-white">Rp {cashoraTotalCost.toLocaleString("id-ID")}/bln</p>
                  </div>
                  <span className="text-xs bg-[#00C897] text-[#0A2540] px-2.5 py-1 rounded-full font-bold">FLAT RATE</span>
                </div>

                {monthlySavings > 0 && (
                  <div className="bg-[#00C897]/15 p-3 rounded-xl border border-[#00C897]/30 text-center">
                    <p className="text-xs text-[#0A2540] font-semibold">
                      🎉 Anda Menghemat <strong className="text-[#00a87e] font-extrabold">Rp {monthlySavings.toLocaleString("id-ID")}</strong> / bulan dengan Cashora!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans font-bold text-2xl text-[#0A2540] text-center mb-8">Pertanyaan Sering Diajukan (FAQ)</h2>
            <div className="space-y-4">
              {faqs.map((faq, fIdx) => (
                <div key={fIdx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-[#0A2540] text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#00C897] shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
