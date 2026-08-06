"use client";

import React from "react";
import { Bell, Search, Store } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useUIStore } from "@/store/useUIStore";

export function Header() {
  const { user } = useAuthStore();
  const { activeOutletId, setActiveOutletId } = useUIStore();

  return (
    <header className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between font-body z-20 shrink-0">
      {/* LEFT: OUTLET SELECTOR */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F5F7FA] border border-gray-200/80 text-xs font-semibold text-[#0A2540]">
          <Store className="w-4 h-4 text-[#00C897]" />
          <select
            value={activeOutletId || "outlet-1"}
            onChange={(e) => setActiveOutletId(e.target.value)}
            className="bg-transparent focus:outline-none cursor-pointer"
          >
            <option value="outlet-1">Outlet Utama — Jakarta Selatan</option>
            <option value="outlet-2">Cabang 2 — Bandung Kota</option>
            <option value="outlet-3">Cabang 3 — Surabaya Barat</option>
          </select>
        </div>
      </div>

      {/* RIGHT: SEARCH & NOTIFICATION & PROFILE */}
      <div className="flex items-center gap-4">
        {/* SEARCH BAR */}
        <div className="relative hidden sm:block w-64">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari transaksi / produk..."
            className="w-full pl-9 pr-4 py-2 bg-[#F5F7FA] rounded-xl border border-gray-200/80 text-xs text-[#0A2540] focus:outline-none focus:border-[#00C897]"
          />
        </div>

        {/* NOTIFICATIONS BUTTON */}
        <button
          className="w-9 h-9 rounded-xl border border-gray-200/80 bg-white flex items-center justify-center text-gray-600 hover:border-[#00C897] hover:text-[#00C897] transition-colors relative"
          title="Notifikasi"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-[#00C897] absolute top-2 right-2 ring-2 ring-white" />
        </button>

        {/* USER PROFILE CARD */}
        <div className="flex items-center gap-3 pl-3 border-l border-gray-200/80">
          <div className="w-9 h-9 rounded-full bg-[#00C897] text-[#0A2540] font-bold text-xs flex items-center justify-center font-sans">
            {user?.name ? user.name.slice(0, 2).toUpperCase() : "CS"}
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-bold text-[#0A2540] font-sans leading-tight">
              {user?.name || "Merchant Cashora"}
            </p>
            <p className="text-[10px] text-gray-400 font-body">
              {user?.role || "OWNER"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
