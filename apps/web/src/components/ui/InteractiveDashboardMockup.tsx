"use client";

import React, { useState } from "react";
import { Store, Wifi } from "lucide-react";
import { motion } from "framer-motion";

export const InteractiveDashboardMockup = () => {
  const [activeTab, setActiveTab] = useState<"all" | "qris" | "cash">("all");

  const transactions = [
    { id: "1025", title: "Nasi Goreng + Es Teh", time: "09:42", method: "QRIS", amount: "Rp 28.000" },
    { id: "1024", title: "Ayam Bakar Komplit", time: "09:38", method: "Tunai", amount: "Rp 45.000" },
    { id: "1023", title: "Mie Ayam Bakso", time: "09:31", method: "QRIS", amount: "Rp 22.000" },
  ];

  const filtered = transactions.filter((t) => {
    if (activeTab === "qris") return t.method === "QRIS";
    if (activeTab === "cash") return t.method === "Tunai";
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex justify-center lg:justify-end"
    >
      <div className="relative w-full max-w-lg">
        {/* Main Mockup Window */}
        <div className="bg-white rounded-2xl shadow-2xl shadow-black/40 overflow-hidden border border-white/10">
          {/* Top Browser Bar */}
          <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F5F7FA] border-b border-gray-100">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="ml-3 flex-1 bg-white rounded px-3 py-1 text-[10px] text-gray-400 font-mono">
              cashora.id/dashboard
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-4 bg-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[10px] text-gray-400 font-body">Selamat pagi, Budi 👋</p>
                <p className="text-sm font-sans font-bold text-[#0A2540]">Dashboard Kasir</p>
              </div>
              <div className="flex items-center gap-1 bg-[#00C897]/10 px-2 py-1 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00C897] animate-pulse"></div>
                <span className="text-[10px] font-semibold text-[#00C897]">Online</span>
              </div>
            </div>

            {/* Animated Metrics Cards */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: "Transaksi Hari Ini", value: "128", color: "text-[#00C897]" },
                { label: "Pendapatan", value: "Rp 4,2Jt", color: "text-[#0A2540]" },
                { label: "Produk Terjual", value: "312", color: "text-[#00C897]" },
              ].map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                  className="bg-[#F5F7FA] rounded-xl p-2.5"
                >
                  <p className="text-[9px] text-gray-400 mb-1 font-body">{m.label}</p>
                  <p className={`text-sm font-bold font-sans ${m.color}`}>{m.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Filter Header */}
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide font-body">
                TRANSAKSI TERBARU
              </p>
              <div className="flex gap-1 text-[9px]">
                {(["all", "qris", "cash"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2 py-0.5 rounded font-body transition-all ${
                      activeTab === tab
                        ? "bg-[#0A2540] text-white font-semibold shadow-sm"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab === "all" ? "Semua" : tab.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Animated Transaction List */}
            <div className="space-y-1.5">
              {filtered.map((tx, idx) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-[#F5F7FA] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#00C897]/10 flex items-center justify-center">
                      <Store className="w-3 h-3 text-[#00C897]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-[#0A2540] font-body">{tx.title}</p>
                      <p className="text-[9px] text-gray-400 font-body">
                        {tx.time} · {tx.method}
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-[#0A2540] font-body">{tx.amount}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Badges with Subtle Hover & Motion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 border border-gray-100 z-10 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
            <Wifi className="w-4 h-4 text-amber-500 animate-pulse" />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-gray-700 font-body">Offline Mode</p>
            <p className="text-[9px] text-gray-400 font-body">Tetap berjalan!</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="absolute -top-4 -right-4 bg-[#0A2540] rounded-xl shadow-lg px-3 py-2 z-10 border border-white/10 cursor-pointer"
        >
          <p className="text-[10px] font-bold text-[#00C897] font-body">QRIS TUNTAS</p>
          <p className="text-[9px] text-white/60 font-body">Tarik · Setor · Transfer</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
