"use client";

import React, { useState } from "react";
import { Store, Wifi, RefreshCw } from "lucide-react";

export const InteractiveDashboardMockup = () => {
  const [activeTab, setActiveTab] = useState<"all" | "qris" | "cash">("all");
  const [isSyncing, setIsSyncing] = useState(false);

  const transactions = [
    { id: "1025", title: "Nasi Goreng + Es Teh", time: "09:42", method: "QRIS", amount: "Rp 28.000", status: "success" },
    { id: "1024", title: "Ayam Bakar Komplit", time: "09:38", method: "Tunai", amount: "Rp 45.000", status: "success" },
    { id: "1023", title: "Mie Ayam Bakso", time: "09:31", method: "QRIS", amount: "Rp 22.000", status: "success" },
    { id: "1022", title: "Kopi Susu Gula Aren x2", time: "09:15", method: "QRIS", amount: "Rp 36.000", status: "success" },
  ];

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 1200);
  };

  const filtered = transactions.filter((t) => {
    if (activeTab === "qris") return t.method === "QRIS";
    if (activeTab === "cash") return t.method === "Tunai";
    return true;
  });

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl shadow-black/40 overflow-hidden border border-white/20">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#F5F7FA] border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="mx-3 flex-1 bg-white rounded px-3 py-1 text-[10px] text-gray-400 font-mono text-center border border-gray-100 truncate">
            cashora.id/dashboard/pos
          </div>
          <button
            onClick={handleSync}
            title="Manual sync"
            className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-600 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin text-[#00C897]" : ""}`} />
          </button>
        </div>

        {/* Inner App Dashboard Header */}
        <div className="p-4 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] text-gray-400">Selamat pagi, Budi 👋</p>
              <p className="text-sm font-sans font-bold text-[#0A2540]">Dashboard Kasir POS</p>
            </div>
            <div className="flex items-center gap-1 bg-[#00C897]/10 px-2.5 py-1 rounded-full border border-[#00C897]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00C897] animate-pulse"></div>
              <span className="text-[10px] font-semibold text-[#00C897]">Online</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-[#F5F7FA] rounded-xl p-2.5 border border-gray-100 hover:border-[#00C897]/40 transition-colors">
              <p className="text-[9px] text-gray-400 mb-1">Transaksi Hari Ini</p>
              <p className="text-sm font-bold font-sans text-[#00C897]">128</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-2.5 border border-gray-100 hover:border-[#0A2540]/20 transition-colors">
              <p className="text-[9px] text-gray-400 mb-1">Pendapatan</p>
              <p className="text-sm font-bold font-sans text-[#0A2540]">Rp 4,2Jt</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-2.5 border border-gray-100 hover:border-[#00C897]/40 transition-colors">
              <p className="text-[9px] text-gray-400 mb-1">Produk Terjual</p>
              <p className="text-sm font-bold font-sans text-[#00C897]">312</p>
            </div>
          </div>

          {/* Transaction Section with Filter Tabs */}
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Transaksi Terbaru</p>
            <div className="flex gap-1 text-[9px]">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-2 py-0.5 rounded ${
                  activeTab === "all" ? "bg-[#0A2540] text-white font-semibold" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setActiveTab("qris")}
                className={`px-2 py-0.5 rounded ${
                  activeTab === "qris" ? "bg-[#00C897] text-[#0A2540] font-semibold" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                QRIS
              </button>
              <button
                onClick={() => setActiveTab("cash")}
                className={`px-2 py-0.5 rounded ${
                  activeTab === "cash" ? "bg-[#0A2540] text-white font-semibold" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Tunai
              </button>
            </div>
          </div>

          {/* Transaction List */}
          <div className="space-y-1.5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-2 px-2.5 rounded-lg hover:bg-[#F5F7FA] transition-colors border border-transparent hover:border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#00C897]/10 flex items-center justify-center">
                    <Store className="w-3.5 h-3.5 text-[#00C897]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-[#0A2540]">{item.title}</p>
                    <p className="text-[9px] text-gray-400">
                      {item.time} · <span className="font-semibold text-gray-600">{item.method}</span>
                    </p>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-[#0A2540]">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-3.5 py-2 flex items-center gap-2.5 border border-gray-100">
        <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
          <Wifi className="w-4 h-4 text-amber-500" />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-gray-700">Offline-First Mode</p>
          <p className="text-[9px] text-gray-400">Tetap jualan tanpa sinyal!</p>
        </div>
      </div>

      <div className="absolute -top-4 -right-4 bg-[#0A2540] rounded-xl shadow-xl px-3.5 py-2 border border-white/10">
        <p className="text-[10px] font-bold text-[#00C897]">QRIS TUNTAS</p>
        <p className="text-[9px] text-white/70">Tarik · Setor · Transfer</p>
      </div>
    </div>
  );
};
