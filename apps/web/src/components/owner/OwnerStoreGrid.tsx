"use client";

import React, { useState } from "react";
import {
  Search,
  CheckCircle,
  Wrench,
  Utensils,
  ShoppingBag,
  Coffee,
  MoreVertical,
  ChevronRight,
  Plus,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface StoreItem {
  id: string;
  name: string;
  category: "retail" | "culinary" | "coffee";
  status: "active" | "maintenance";
  address: string;
  city: string;
  todaySales: string;
  todayTransactions: number;
  cashierCount: number;
  lastActive: string;
}

const mockStores: StoreItem[] = [
  {
    id: "store-1",
    name: "Warung Makan Pak Budi",
    category: "culinary",
    status: "active",
    address: "Jl. Malioboro No. 45",
    city: "Yogyakarta",
    todaySales: "Rp 3.850.000",
    todayTransactions: 142,
    cashierCount: 2,
    lastActive: "2 menit lalu",
  },
  {
    id: "store-2",
    name: "Budi Retail Mart",
    category: "retail",
    status: "active",
    address: "Jl. Gejayan No. 12",
    city: "Sleman",
    todaySales: "Rp 7.210.000",
    todayTransactions: 289,
    cashierCount: 3,
    lastActive: "Baru saja",
  },
  {
    id: "store-3",
    name: "Kopi Budi Sejahtera",
    category: "coffee",
    status: "maintenance",
    address: "Jl. Kaliurang Km 5",
    city: "Sleman",
    todaySales: "Rp 0",
    todayTransactions: 0,
    cashierCount: 1,
    lastActive: "Kemarin",
  },
];

export function OwnerStoreGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "maintenance">("all");

  const filteredStores = mockStores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || store.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getCategoryIcon = (category: StoreItem["category"]) => {
    switch (category) {
      case "culinary":
        return <Utensils className="h-5 w-5 text-emerald-600" />;
      case "retail":
        return <ShoppingBag className="h-5 w-5 text-blue-600" />;
      case "coffee":
        return <Coffee className="h-5 w-5 text-amber-600" />;
    }
  };

  return (
    <div id="tour-stores" className="mt-10 transition-all font-body">
      {/* SECTION TITLE & FILTER TOGGLE */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#0A2540] tracking-tight font-sans">
            Daftar Toko & Outlet Anda
          </h2>
          <p className="text-xs text-slate-500">
            Pilih toko untuk mengelola setting & sistem kasir
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-xl">
            <button
              onClick={() => setFilterStatus("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterStatus === "all"
                  ? "bg-white text-[#0A2540] shadow-sm"
                  : "text-slate-600"
              }`}
            >
              Semua ({mockStores.length})
            </button>
            <button
              onClick={() => setFilterStatus("active")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterStatus === "active"
                  ? "bg-white text-[#0A2540] shadow-sm"
                  : "text-slate-600"
              }`}
            >
              Aktif ({mockStores.filter((s) => s.status === "active").length})
            </button>
            <button
              onClick={() => setFilterStatus("maintenance")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterStatus === "maintenance"
                  ? "bg-white text-[#0A2540] shadow-sm"
                  : "text-slate-600"
              }`}
            >
              Maintenance (
              {mockStores.filter((s) => s.status === "maintenance").length})
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="relative mb-6">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari nama toko atau kota..."
          className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200/80 rounded-2xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50 shadow-sm transition-all"
        />
      </div>

      {/* STORE CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* EXISTING STORES */}
        {filteredStores.map((store) => (
          <article
            key={store.id}
            className="group relative flex h-full flex-col overflow-visible rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00C897] hover:shadow-xl"
          >
            {/* TOP DECORATIVE GRADIENT LINE */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-px top-px overflow-hidden rounded-t-[22px]"
            >
              <div
                className={`h-1 w-full transition-[height,background-color] duration-300 group-hover:h-1.5 ${
                  store.status === "active"
                    ? "bg-gradient-to-r from-[#00C897] to-emerald-400"
                    : "bg-gradient-to-r from-amber-400 to-orange-400"
                }`}
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              {/* CARD HEADER */}
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/60 bg-slate-100 p-3 transition-transform group-hover:scale-105">
                  {getCategoryIcon(store.category)}
                </div>

                <div className="flex items-center gap-2">
                  {store.status === "active" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold border-emerald-200/60 bg-emerald-50 text-emerald-700 font-sans">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Aktif POS
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold border-amber-200/60 bg-amber-50 text-amber-700 font-sans">
                      <Wrench className="h-3.5 w-3.5" />
                      Maintenance
                    </span>
                  )}

                  <button
                    aria-label={`Menu aksi untuk ${store.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CARD TITLE & LOCATION */}
              <h3 className="text-base font-extrabold text-[#0A2540] group-hover:text-[#00C897] transition-colors font-sans">
                {store.name}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                {store.address}, {store.city}
              </p>

              {/* KEY STATS */}
              <div className="my-5 grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-3 border border-slate-100">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
                    Penjualan Hari Ini
                  </p>
                  <p className="mt-0.5 text-sm font-black text-[#0A2540] font-sans">
                    {store.todaySales}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
                    Transaksi
                  </p>
                  <p className="mt-0.5 text-sm font-black text-[#0A2540] font-sans">
                    {store.todayTransactions} order
                  </p>
                </div>
              </div>

              {/* CARD FOOTER BUTTON */}
              <div className="mt-auto pt-2 flex items-center justify-between border-t border-slate-100">
                <span className="text-[11px] text-slate-400 font-medium">
                  {store.cashierCount} Kasir Aktif • {store.lastActive}
                </span>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert(`Membuka Dashboard Kasir ${store.name}`)}
                  className="rounded-xl border-slate-200 text-xs font-bold text-[#0A2540] hover:bg-[#0A2540] hover:text-[#00C897] transition-all"
                >
                  <span>Lihat Detail & Monitoring</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          </article>
        ))}

        {/* DAFTARKAN TOKO BARU CARD (PLUS BUTTON CARD) */}
        <button
          type="button"
          onClick={() => alert("Membuka form Daftarkan Toko Baru / Tambah Profil Bisnis...")}
          className="group flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-dashed border-slate-300 bg-white/60 hover:bg-white hover:border-[#00C897] shadow-sm hover:shadow-lg transition-all duration-300 min-h-[280px] text-center"
        >
          <div className="w-14 h-14 rounded-full bg-emerald-100/70 text-[#00C897] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00C897] group-hover:text-[#0A2540] transition-all">
            <Plus className="w-7 h-7" />
          </div>
          <h3 className="text-base font-extrabold text-[#0A2540] group-hover:text-[#00C897] transition-colors font-sans mb-1">
            Daftarkan Toko Baru
          </h3>
          <p className="text-xs text-slate-500 max-w-[220px] mb-4 leading-relaxed">
            Miliki cabang atau konsep bisnis baru? Tambahkan ke portal owner.
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#00A87E] group-hover:underline">
            Tambah Profil Bisnis <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>

      {/* CS SUPPORT BANNER AT THE BOTTOM */}
      <div className="mt-10 rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0A2540] text-[#00C897] flex items-center justify-center shrink-0 shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-[#0A2540] font-sans">
              Butuh bantuan mengoptimalkan laporan keuangan multi-toko?
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Tim Support Spesialis Cashora siap mendampingi pengaturan integrasi laporan & kasir POS secara gratis.
            </p>
          </div>
        </div>

        <Button
          onClick={() => alert("Menghubungi CS Support Cashora...")}
          className="bg-[#0A2540] text-white hover:bg-[#0A2540]/90 px-6 py-3 rounded-2xl text-xs font-extrabold shrink-0 shadow-md hover:shadow-lg transition-all"
        >
          Hubungi CS Support
        </Button>
      </div>
    </div>
  );
}
