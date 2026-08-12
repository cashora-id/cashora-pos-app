"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Utensils,
  Store,
  Coffee,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Search,
  ExternalLink,
  MoreVertical,
} from "lucide-react";

interface StoreItem {
  id: string;
  name: string;
  category: string;
  city: string;
  status: "active" | "maintenance";
  todaySales: string;
  todayTrx: string;
  growth: string;
  icon: "utensils" | "store" | "coffee";
}

const mockStores: StoreItem[] = [
  {
    id: "1",
    name: "Warung Makan Pak Budi",
    category: "Restoran & Kuliner",
    city: "Surabaya Gubeng",
    status: "active",
    todaySales: "Rp 3.850.000",
    todayTrx: "142x",
    growth: "+14.2%",
    icon: "utensils",
  },
  {
    id: "2",
    name: "Budi Retail Mart",
    category: "Toko Ritel & Mini Market",
    city: "Surabaya Pusat",
    status: "active",
    todaySales: "Rp 7.210.000",
    todayTrx: "289x",
    growth: "+18.5%",
    icon: "store",
  },
  {
    id: "3",
    name: "Kopi Budi Sejahtera",
    category: "Restoran & Kafe",
    city: "Malang",
    status: "maintenance",
    todaySales: "Rp 0",
    todayTrx: "0x",
    growth: "0%",
    icon: "coffee",
  },
];

export function OwnerStoreGrid() {
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "maintenance">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStores = mockStores.filter((s) => {
    if (statusFilter !== "all" && s.status !== statusFilter) return false;
    if (
      searchQuery.trim() !== "" &&
      !s.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !s.city.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const totalCount = mockStores.length;
  const activeCount = mockStores.filter((s) => s.status === "active").length;
  const maintenanceCount = mockStores.filter((s) => s.status === "maintenance").length;

  return (
    <div id="tour-stores" className="mt-10 transition-all font-body">
      {/* HEADER CONTROLS & FILTER BUTTONS */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-[#0A2540] tracking-tight font-sans">
            Daftar Toko & Outlet Anda
          </h2>
          <p className="text-xs text-slate-500">
            Pilih toko untuk mengelola setting & sistem kasir
          </p>
        </div>

        {/* STATUS QUICK FILTER CHIPS */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-xl">
            <button
              onClick={() => setStatusFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === "all"
                  ? "bg-white text-[#0A2540] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Semua ({totalCount})
            </button>
            <button
              onClick={() => setStatusFilter("active")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === "active"
                  ? "bg-white text-[#0A2540] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Aktif ({activeCount})
            </button>
            <button
              onClick={() => setStatusFilter("maintenance")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === "maintenance"
                  ? "bg-white text-[#0A2540] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Maintenance ({maintenanceCount})
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="relative mb-6">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Cari nama toko atau kota..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200/80 rounded-2xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50 shadow-sm transition-all font-body"
        />
      </div>

      {/* STORE CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStores.map((store) => (
          <article
            key={store.id}
            className="group relative flex h-full flex-col overflow-visible rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00C897] hover:shadow-xl"
          >
            {/* CARD ACCENT TOP BORDER */}
            <div className="pointer-events-none absolute inset-x-px top-px overflow-hidden rounded-t-[22px]">
              <div
                className={`h-1 w-full transition-[height,background-color] duration-300 group-hover:h-1.5 ${
                  store.status === "active"
                    ? "bg-gradient-to-r from-[#00C897] to-emerald-400"
                    : "bg-amber-400"
                }`}
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              {/* TOP ICON & STATUS BADGE */}
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/60 bg-slate-100 p-3 transition-transform group-hover:scale-105">
                  {store.icon === "utensils" && (
                    <Utensils className="h-5 w-5 text-emerald-600" />
                  )}
                  {store.icon === "store" && (
                    <Store className="h-5 w-5 text-blue-600" />
                  )}
                  {store.icon === "coffee" && (
                    <Coffee className="h-5 w-5 text-amber-600" />
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {store.status === "active" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold border-emerald-200/60 bg-emerald-50 text-emerald-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Aktif POS
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold border-amber-200/60 bg-amber-50 text-amber-700">
                      <AlertCircle className="h-3.5 w-3.5" />
                      Maintenance
                    </span>
                  )}

                  <button className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* STORE TITLE & CITY */}
              <h3 className="mb-1 text-lg font-bold text-[#0A2540] group-hover:text-[#00C897] transition-colors font-sans">
                {store.name}
              </h3>
              <p className="mb-6 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <span>{store.category}</span>
                <span className="text-slate-300">•</span>
                <span>{store.city}</span>
              </p>

              {/* TODAY METRICS */}
              <div className="mt-auto mb-6 grid grid-cols-2 gap-2 rounded-2xl border border-slate-100 bg-slate-50 p-3.5 font-body">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-sans">
                    Penjualan Hari Ini
                  </p>
                  <p className="text-sm font-extrabold text-[#0A2540] font-sans">
                    {store.todaySales}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-sans">
                    Transaksi
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-extrabold text-[#0A2540] font-sans">
                      {store.todayTrx}
                    </p>
                    {store.status === "active" && (
                      <span className="flex items-center gap-0.5 text-[10px] font-bold text-emerald-600">
                        <TrendingUp className="h-3 w-3" />
                        {store.growth}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ACTION CTA BUTTON */}
            <div className="px-6 pb-6">
              <Link
                href={`/owner/menu/${store.id}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A2540] px-4 py-3 text-sm font-bold text-white shadow-md shadow-slate-900/10 transition-all hover:bg-[#00C897] hover:text-[#0A2540] font-sans"
              >
                <span>Lihat Detail & Monitoring</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
