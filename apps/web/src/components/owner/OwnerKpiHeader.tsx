"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Bell,
  HelpCircle,
  ChevronDown,
  Sparkles,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Receipt,
  PieChart,
  Activity,
  User,
  Users,
  LayoutGrid,
  LogOut,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/useAuthStore";

export type PeriodType = "today" | "yesterday" | "7d" | "30d";

interface OwnerKpiHeaderProps {
  selectedPeriod: PeriodType;
  onPeriodChange: (period: PeriodType) => void;
}

export function OwnerKpiHeader({
  selectedPeriod,
  onPeriodChange,
}: OwnerKpiHeaderProps) {
  const { user, logout } = useAuthStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const profileMenuRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  const userName = user?.name || "Budi Santoso";
  const userEmail = user?.email || "budi.santoso@cashoragroup.id";
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2) || "BS";

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
      }
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  // Dynamic KPI Data simulation based on selected period
  const kpiDataMap: Record<
    PeriodType,
    {
      label: string;
      sales: string;
      salesGrowth: string;
      expenses: string;
      expensesGrowth: string;
      netProfit: string;
      margin: string;
      transactions: string;
      avgOrder: string;
    }
  > = {
    today: {
      label: "Hari Ini (9 Agustus 2026)",
      sales: "Rp 11.060.000",
      salesGrowth: "+14.2%",
      expenses: "Rp 3.420.000",
      expensesGrowth: "-4.8%",
      netProfit: "Rp 7.640.000",
      margin: "69.1%",
      transactions: "431 Transaksi",
      avgOrder: "Rp 25.660",
    },
    yesterday: {
      label: "Kemarin (8 Agustus 2026)",
      sales: "Rp 9.680.000",
      salesGrowth: "+8.5%",
      expenses: "Rp 3.100.000",
      expensesGrowth: "-2.1%",
      netProfit: "Rp 6.580.000",
      margin: "68.0%",
      transactions: "380 Transaksi",
      avgOrder: "Rp 25.473",
    },
    "7d": {
      label: "7 Hari Terakhir (3 - 9 Agustus 2026)",
      sales: "Rp 78.450.000",
      salesGrowth: "+18.4%",
      expenses: "Rp 23.120.000",
      expensesGrowth: "-5.2%",
      netProfit: "Rp 55.330.000",
      margin: "70.5%",
      transactions: "2.980 Transaksi",
      avgOrder: "Rp 26.325",
    },
    "30d": {
      label: "30 Hari Terakhir (10 Juli - 9 Agustus 2026)",
      sales: "Rp 312.800.000",
      salesGrowth: "+22.1%",
      expenses: "Rp 94.500.000",
      expensesGrowth: "-6.4%",
      netProfit: "Rp 218.300.000",
      margin: "69.8%",
      transactions: "11.840 Transaksi",
      avgOrder: "Rp 26.418",
    },
  };

  const currentData = kpiDataMap[selectedPeriod];

  return (
    <>
      {/* STICKY TOP HEADER NAV (tour-header) */}
      <header
        id="tour-header"
        className="sticky top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all font-body"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* LEFT BRAND LOGO & BADGE */}
          <div className="flex items-center gap-3">
            <Logo light={false} />
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200 font-sans">
              Owner Dashboard
            </span>
          </div>

          {/* RIGHT CONTROLS: NOTIFICATION, HELP, PROFILE */}
          <div className="flex items-center gap-3 relative">
            {/* NOTIFICATION BELL */}
            <div className="relative" ref={notifRef}>
              <button
                aria-label="Notifikasi"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-xl transition-colors text-slate-500 hover:text-[#0A2540] hover:bg-slate-100"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#00C897] text-[10px] font-black text-[#0A2540] ring-2 ring-white animate-pulse">
                  3
                </span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                    <h4 className="font-bold text-xs text-[#0A2540] font-sans">
                      Notifikasi Owner
                    </h4>
                    <span className="text-[10px] text-[#00C897] font-semibold">
                      3 Baru
                    </span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-900 border border-emerald-100">
                      <p className="font-bold">Target Omset Tercapai 🎉</p>
                      <p className="text-[11px] opacity-80">
                        Warung Makan Pak Budi telah melewati target Rp 3,5Jt.
                      </p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl text-slate-700 border border-slate-100">
                      <p className="font-bold">Stok Menipis ⚠️</p>
                      <p className="text-[11px] text-slate-500">
                        Kopi Budi Sejahtera: Biji Kopi Arabika sisa 2 kg.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* BANTUAN */}
            <Link
              href="/kontak"
              className="p-2 rounded-xl text-slate-500 hover:text-[#0A2540] hover:bg-slate-100 transition-colors flex items-center gap-1.5 group"
            >
              <HelpCircle className="w-5 h-5 text-slate-500 group-hover:text-[#00C897] transition-colors" />
              <span className="hidden md:inline-block text-xs font-bold text-slate-700 group-hover:text-[#0A2540]">
                Bantuan
              </span>
            </Link>

            <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block" />

            {/* USER PROFILE DROPDOWN */}
            <div className="relative" ref={profileMenuRef}>
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 pl-1 cursor-pointer group focus:outline-none"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0A2540] text-white flex items-center justify-center font-bold text-sm shadow-md ring-2 ring-emerald-500/20 group-hover:ring-emerald-500 transition-all font-sans">
                  {initials}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-bold text-[#0A2540] leading-none mb-0.5 group-hover:text-[#00C897] transition-colors font-sans">
                    {userName}
                  </p>
                  <p className="text-[11px] font-medium text-slate-500 leading-none">
                    Pemilik Utama
                  </p>
                </div>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform ${
                    showProfileMenu ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* USER PROFILE POPOVER MENU (MATCHING MOCKUP SCREENSHOT) */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {/* USER INFO HEADER */}
                  <div className="p-3 border-b border-slate-100">
                    <p className="text-xs font-bold text-[#0A2540] font-sans">
                      {userName}
                    </p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5 truncate">
                      {userEmail}
                    </p>
                  </div>

                  {/* MENU ITEMS */}
                  <div className="py-1 space-y-0.5">
                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        alert("Membuka Pengaturan Profil Saya...");
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0A2540] transition-colors"
                    >
                      <User className="w-4 h-4 text-slate-400" />
                      <span>Pengaturan Profil Saya</span>
                    </button>

                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        alert("Membuka Manajemen Staff & Akses...");
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0A2540] transition-colors"
                    >
                      <Users className="w-4 h-4 text-slate-400" />
                      <span>Manajemen Staff & Akses</span>
                    </button>

                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        window.location.href = "/owner/menu";
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0A2540] transition-colors"
                    >
                      <LayoutGrid className="w-4 h-4 text-slate-400" />
                      <span>Dasbor Utama</span>
                    </button>
                  </div>

                  {/* LOGOUT BUTTON */}
                  <div className="pt-1 border-t border-slate-100">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4 text-rose-500" />
                      <span>Keluar Akun</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* HERO KPI SUMMARY SECTION (tour-period-kpis) */}
      <section
        id="tour-period-kpis"
        className="bg-gradient-to-b from-[#0A2540] to-[#0d3154] text-white pt-8 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all font-body"
      >
        <div
          className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #00C897, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* HEADER & PERIOD FILTER BUTTONS */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#00C897] text-xs font-semibold border border-white/10 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dasbor Agregat & Kurva Multi-Toko</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                Ringkasan Kinerja Bisnis
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                {currentData.label}
              </p>
            </div>

            {/* PERIOD TOGGLE BUTTONS */}
            <div className="flex items-center gap-1.5 bg-white/10 p-1.5 rounded-2xl backdrop-blur-md border border-white/10">
              {(
                [
                  { id: "today", label: "Hari Ini" },
                  { id: "yesterday", label: "Kemarin" },
                  { id: "7d", label: "7 Hari Terakhir" },
                  { id: "30d", label: "30 Hari Terakhir" },
                ] as const
              ).map((p) => (
                <button
                  key={p.id}
                  onClick={() => onPeriodChange(p.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedPeriod === p.id
                      ? "bg-[#00C897] text-[#0A2540] shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4 KPI SUMMARY CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* 1. TOTAL PENJUALAN */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-[#00C897]/50 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-300 font-semibold">Total Penjualan</span>
                <div className="w-10 h-10 rounded-2xl bg-[#00C897]/20 text-[#00C897] flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>
              <p className="text-2xl font-extrabold text-white font-sans tracking-tight">
                {currentData.sales}
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-[#00C897] font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{currentData.salesGrowth} vs periode lalu</span>
              </div>
            </div>

            {/* 2. TOTAL PENGELUARAN */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-rose-400/50 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-300 font-semibold">Total Pengeluaran</span>
                <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                  <Receipt className="w-5 h-5" />
                </div>
              </div>
              <p className="text-2xl font-extrabold text-white font-sans tracking-tight">
                {currentData.expenses}
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-rose-400 font-bold">
                <TrendingDown className="w-3.5 h-3.5" />
                <span>{currentData.expensesGrowth} efisiensi biaya</span>
              </div>
            </div>

            {/* 3. LABA BERSIH */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-blue-400/50 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-300 font-semibold">Laba Bersih</span>
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                  <PieChart className="w-5 h-5" />
                </div>
              </div>
              <p className="text-2xl font-extrabold text-white font-sans tracking-tight">
                {currentData.netProfit}
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-blue-300 font-bold">
                <span className="px-2 py-0.5 rounded-md bg-blue-500/20">Margin {currentData.margin}</span>
              </div>
            </div>

            {/* 4. VOLUME TRANSAKSI */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-purple-400/50 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-300 font-semibold">Volume Transaksi</span>
                <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
              </div>
              <p className="text-2xl font-extrabold text-white font-sans tracking-tight">
                {currentData.transactions}
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-purple-300 font-bold">
                <span>Rata-rata: {currentData.avgOrder} / order</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
