"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Info,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface TransactionItem {
  id: string;
  time: string;
  outlet: string;
  method: string;
  amount: string;
  status: "success" | "pending" | "failed" | "refunded";
}

const mockTransactions: TransactionItem[] = [
  {
    id: "TRX-98210",
    time: "09 Agt 2026, 14:32",
    outlet: "Warung Makan Pak Budi",
    method: "QRIS TUNTAS",
    amount: "Rp 145.000",
    status: "success",
  },
  {
    id: "TRX-98209",
    time: "09 Agt 2026, 14:15",
    outlet: "Budi Retail Mart",
    method: "Tunai / Cash",
    amount: "Rp 68.500",
    status: "success",
  },
  {
    id: "TRX-98208",
    time: "09 Agt 2026, 13:50",
    outlet: "Budi Retail Mart",
    method: "SoftPOS / Kartu",
    amount: "Rp 350.000",
    status: "pending",
  },
  {
    id: "TRX-98207",
    time: "09 Agt 2026, 12:10",
    outlet: "Kopi Budi Sejahtera",
    method: "Transfer Bank",
    amount: "Rp 42.000",
    status: "failed",
  },
];

export function OwnerTransactionTable() {
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("all");
  const [selectedMethodFilter, setSelectedMethodFilter] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [showInfoAccordion, setShowInfoAccordion] = useState(false);

  const filteredData = mockTransactions.filter((item) => {
    if (selectedStatusFilter !== "all" && item.status !== selectedStatusFilter) {
      return false;
    }
    if (selectedMethodFilter !== "all") {
      if (selectedMethodFilter === "cash" && !item.method.includes("Tunai")) return false;
      if (selectedMethodFilter === "qris" && !item.method.includes("QRIS")) return false;
      if (selectedMethodFilter === "card" && !item.method.includes("Kartu")) return false;
      if (selectedMethodFilter === "bank_transfer" && !item.method.includes("Transfer")) return false;
    }
    return true;
  });

  const successCount = mockTransactions.filter((t) => t.status === "success").length;
  const pendingCount = mockTransactions.filter((t) => t.status === "pending").length;
  const failedCount = mockTransactions.filter((t) => t.status === "failed").length;

  return (
    <section className="mt-10 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-7 font-body">
      {/* SECTION HEADER & QUICK BADGE COUNTERS */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#00A87E] font-sans">
            Monitoring pembayaran
          </p>
          <h2 className="mt-1 text-xl font-extrabold text-[#0A2540] font-sans">
            Aktivitas Pembayaran & Pencairan
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-500">
            Pantau transaksi dan pencairan dana dari seluruh outlet Anda.
          </p>
          <p className="mt-1 text-[11px] text-slate-400">
            Data ini adalah simulasi tampilan.
          </p>
        </div>

        {/* QUICK STATUS BADGE COUNTERS */}
        <div className="grid grid-cols-3 gap-2 sm:flex">
          <button
            type="button"
            aria-pressed={selectedStatusFilter === "success"}
            onClick={() => setSelectedStatusFilter("success")}
            className={`min-w-[92px] rounded-2xl border px-3 py-2 text-center transition hover:-translate-y-0.5 border-emerald-200 bg-emerald-50 text-emerald-800 ${
              selectedStatusFilter === "success" ? "ring-2 ring-[#00C897]/50" : ""
            }`}
          >
            <span className="block text-[10px] font-bold leading-tight font-sans">
              Berhasil
            </span>
            <span className="text-lg font-black">{successCount}</span>
          </button>
          <button
            type="button"
            aria-pressed={selectedStatusFilter === "pending"}
            onClick={() => setSelectedStatusFilter("pending")}
            className={`min-w-[92px] rounded-2xl border px-3 py-2 text-center transition hover:-translate-y-0.5 border-amber-200 bg-amber-50 text-amber-800 ${
              selectedStatusFilter === "pending" ? "ring-2 ring-[#00C897]/50" : ""
            }`}
          >
            <span className="block text-[10px] font-bold leading-tight font-sans">
              Menunggu
            </span>
            <span className="text-lg font-black">{pendingCount}</span>
          </button>
          <button
            type="button"
            aria-pressed={selectedStatusFilter === "failed"}
            onClick={() => setSelectedStatusFilter("failed")}
            className={`min-w-[92px] rounded-2xl border px-3 py-2 text-center transition hover:-translate-y-0.5 border-rose-200 bg-rose-50 text-rose-800 ${
              selectedStatusFilter === "failed" ? "ring-2 ring-[#00C897]/50" : ""
            }`}
          >
            <span className="block text-[10px] font-bold leading-tight font-sans">
              Gagal
            </span>
            <span className="text-lg font-black">{failedCount}</span>
          </button>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="mt-5 border-y border-slate-100 py-4" role="group" aria-labelledby="payment-filter-title">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
          <span id="payment-filter-title" className="shrink-0 text-xs font-extrabold text-[#0A2540] mr-1 font-sans">
            Filter transaksi
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {/* STATUS FILTER CHIPS */}
            <div className="flex flex-wrap gap-2" aria-label="Filter status cepat">
              {(
                [
                  { id: "all", label: "Semua status", count: null },
                  { id: "success", label: "Berhasil", count: successCount },
                  { id: "pending", label: "Menunggu", count: pendingCount },
                  { id: "failed", label: "Gagal", count: failedCount },
                  { id: "refunded", label: "Dikembalikan", count: 0 },
                ] as const
              ).map((s) => (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={selectedStatusFilter === s.id}
                  onClick={() => setSelectedStatusFilter(s.id)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-extrabold transition-colors focus:outline-none focus:ring-2 focus:ring-[#00C897]/50 ${
                    selectedStatusFilter === s.id
                      ? "bg-[#0A2540] text-[#00C897] shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {s.label}
                  {s.count !== null && <span className="ml-1 opacity-70">{s.count}</span>}
                </button>
              ))}
            </div>

            {/* PAYMENT METHOD DROPDOWN */}
            <label className="relative inline-flex items-center">
              <span className="sr-only">Metode pembayaran</span>
              <select
                value={selectedMethodFilter}
                onChange={(e) => setSelectedMethodFilter(e.target.value)}
                className="appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-3 pr-8 text-[11px] font-extrabold text-slate-700 outline-none transition focus:border-[#00C897] focus:ring-2 focus:ring-[#00C897]/30"
              >
                <option value="all">Semua metode</option>
                <option value="cash">Tunai / Cash</option>
                <option value="qris">QRIS</option>
                <option value="card">Debit / Kartu</option>
                <option value="bank_transfer">Transfer Bank</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-slate-400" />
            </label>

            {/* DATE PICKERS */}
            <div className="flex flex-wrap items-center gap-2" aria-label="Rentang tanggal">
              <label className="inline-flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-slate-500">Dari</span>
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 outline-none transition focus:border-[#00C897] focus:ring-2 focus:ring-[#00C897]/30"
                />
              </label>
              <label className="inline-flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-slate-500">Sampai</span>
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 outline-none transition focus:border-[#00C897] focus:ring-2 focus:ring-[#00C897]/30"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* DATA TABLE */}
      <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
        <div className="max-h-[520px] overflow-y-auto scroll-smooth [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent]">
          <table className="min-w-[900px] w-full text-left text-xs">
            <thead className="sticky top-0 z-10 bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 font-sans border-b border-slate-200">
              <tr>
                <th className="px-4 py-3">Waktu</th>
                <th className="px-4 py-3">Outlet</th>
                <th className="px-4 py-3">Metode</th>
                <th className="px-4 py-3">Nominal</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.length > 0 ? (
                filteredData.map((trx) => (
                  <tr key={trx.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-700">{trx.time}</td>
                    <td className="px-4 py-3 font-bold text-[#0A2540]">{trx.outlet}</td>
                    <td className="px-4 py-3 text-slate-600">{trx.method}</td>
                    <td className="px-4 py-3 font-extrabold text-[#0A2540] font-sans">
                      {trx.amount}
                    </td>
                    <td className="px-4 py-3">
                      {trx.status === "success" && (
                        <Badge variant="success">Berhasil</Badge>
                      )}
                      {trx.status === "pending" && (
                        <Badge variant="warning">Menunggu</Badge>
                      )}
                      {trx.status === "failed" && (
                        <Badge variant="danger">Gagal</Badge>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => alert(`Melihat detail transaksi ${trx.id}`)}
                        className="text-[#00A87E] font-bold hover:underline flex items-center gap-1"
                      >
                        <span>Detail</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-slate-500">
                    Tidak ada transaksi yang sesuai dengan filter ini.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION FOOTER */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 px-4 py-3 sm:flex-row">
          <label className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
            Tampilkan
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="appearance-none rounded-lg border border-slate-200 bg-white px-2 py-1 text-[11px] font-bold text-slate-700 outline-none transition focus:border-[#00C897] focus:ring-2 focus:ring-[#00C897]/30"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
            per halaman
          </label>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled
              className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] font-extrabold text-[#0A2540] transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50"
            >
              <ChevronLeft className="w-3.5 h-3.5 inline mr-1" />
              Sebelumnya
            </button>
            <span className="text-[11px] font-bold text-slate-600">
              Halaman 1 dari 1 ({filteredData.length} transaksi)
            </span>
            <button
              type="button"
              disabled
              className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] font-extrabold text-[#0A2540] transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50"
            >
              Berikutnya
              <ChevronRight className="w-3.5 h-3.5 inline ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* ACCORDION FAQ INFO */}
      <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
        <button
          type="button"
          aria-expanded={showInfoAccordion}
          onClick={() => setShowInfoAccordion(!showInfoAccordion)}
          className="flex w-full items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#00C897]/50"
        >
          <span className="flex items-center gap-1.5 text-xs font-extrabold text-blue-900 font-sans">
            <Info className="h-4 w-4 text-blue-600" />
            Bagaimana membaca status?
          </span>
          <ChevronDown
            className={`h-4 w-4 text-blue-500 transition-transform ${
              showInfoAccordion ? "rotate-180" : ""
            }`}
          />
        </button>

        {showInfoAccordion && (
          <div className="mt-3 text-xs text-blue-800 space-y-1.5 border-t border-blue-100 pt-3">
            <p>
              • <strong>Berhasil</strong>: Dana transaksi QRIS/SoftPOS sudah cair ke rekening utama tenant.
            </p>
            <p>
              • <strong>Menunggu</strong>: Transaksi dalam proses settlement (pencairan H+1).
            </p>
            <p>
              • <strong>Gagal</strong>: Transaksi terbatalkan atau gagal otorisasi bank.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
