"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Download,
  Filter,
  Eye,
  EyeOff,
  QrCode,
  Wallet,
  CreditCard,
} from "lucide-react";

export function OwnerChartSection() {
  const [metricMode, setMetricMode] = useState<"sales" | "expenses">("sales");
  const [visibleLines, setVisibleLines] = useState({
    combined: true,
    retail: true,
    warung: true,
    kopi: true,
  });

  const toggleLine = (key: keyof typeof visibleLines) => {
    setVisibleLines((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      id="tour-chart"
      className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 mb-10 transition-all font-body"
    >
      {/* HEADER CONTROLS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-lg sm:text-xl font-extrabold text-[#0A2540] tracking-tight font-sans">
            Perbandingan Grafik Kurva per Toko
          </h2>
          <p className="text-xs text-slate-500">
            Bandingkan tren {metricMode === "sales" ? "penjualan" : "pengeluaran"}{" "}
            individual toko dengan garis total agregat
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* METRIC SWITCH BUTTONS */}
          <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl w-fit">
            <button
              onClick={() => setMetricMode("sales")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                metricMode === "sales"
                  ? "bg-[#0A2540] text-[#00C897] shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#00C897]" />
              <span>Penjualan</span>
            </button>
            <button
              onClick={() => setMetricMode("expenses")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                metricMode === "expenses"
                  ? "bg-[#0A2540] text-rose-400 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
              <span>Pengeluaran</span>
            </button>
          </div>

          {/* EXPORT DATA BUTTONS */}
          <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white text-[11px] font-extrabold">
            <button
              onClick={() => alert("Mengunduh data CSV...")}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-[#0A2540] hover:bg-emerald-50 transition-colors"
            >
              <Download className="h-3.5 w-3.5 text-[#00A87E]" />
              <span>CSV</span>
            </button>
            <button
              onClick={() => alert("Mengunduh laporan PDF...")}
              className="border-l border-slate-200 px-3 py-2 text-slate-500 hover:bg-slate-50 transition-colors"
            >
              PDF
            </button>
          </div>
        </div>
      </div>

      {/* TOGGLE LINE FILTER BUTTONS */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Toggle Garis:
        </span>

        {/* Combined */}
        <button
          onClick={() => toggleLine("combined")}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
            visibleLines.combined
              ? "bg-slate-50 border-slate-300 text-slate-800 shadow-sm"
              : "bg-slate-100 border-slate-200 text-slate-400 line-through"
          }`}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: "#0A2540" }}
          />
          <span>Total Combined</span>
          {visibleLines.combined ? (
            <Eye className="w-3 h-3 text-slate-500" />
          ) : (
            <EyeOff className="w-3 h-3 text-slate-400" />
          )}
        </button>

        {/* Budi Retail Mart */}
        <button
          onClick={() => toggleLine("retail")}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
            visibleLines.retail
              ? "bg-slate-50 border-slate-300 text-slate-800 shadow-sm"
              : "bg-slate-100 border-slate-200 text-slate-400 line-through"
          }`}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: "#3B82F6" }}
          />
          <span>Budi Retail Mart</span>
          {visibleLines.retail ? (
            <Eye className="w-3 h-3 text-slate-500" />
          ) : (
            <EyeOff className="w-3 h-3 text-slate-400" />
          )}
        </button>

        {/* Warung Makan Pak Budi */}
        <button
          onClick={() => toggleLine("warung")}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
            visibleLines.warung
              ? "bg-slate-50 border-slate-300 text-slate-800 shadow-sm"
              : "bg-slate-100 border-slate-200 text-slate-400 line-through"
          }`}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: "#10B981" }}
          />
          <span>Warung Makan Pak Budi</span>
          {visibleLines.warung ? (
            <Eye className="w-3 h-3 text-slate-500" />
          ) : (
            <EyeOff className="w-3 h-3 text-slate-400" />
          )}
        </button>

        {/* Kopi Budi Sejahtera */}
        <button
          onClick={() => toggleLine("kopi")}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
            visibleLines.kopi
              ? "bg-slate-50 border-slate-300 text-slate-800 shadow-sm"
              : "bg-slate-100 border-slate-200 text-slate-400 line-through"
          }`}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: "#F59E0B" }}
          />
          <span>Kopi Budi Sejahtera</span>
          {visibleLines.kopi ? (
            <Eye className="w-3 h-3 text-slate-500" />
          ) : (
            <EyeOff className="w-3 h-3 text-slate-400" />
          )}
        </button>
      </div>

      {/* SVG CHART CONTAINER */}
      <div className="relative w-full h-72 sm:h-80 mb-8 bg-slate-50/70 rounded-2xl p-2 sm:p-3 border border-slate-100">
        <svg viewBox="0 0 960 260" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="multiChartGradientSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0A2540" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0A2540" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* GRID LINES */}
          <g>
            <line x1="45" y1="225" x2="940" y2="225" stroke="#E2E8F0" strokeDasharray="4 4" strokeWidth="1" />
            <text x="37" y="229" textAnchor="end" className="text-[10px] font-semibold fill-slate-400">Rp 0</text>
          </g>
          <g>
            <line x1="45" y1="159" x2="940" y2="159" stroke="#E2E8F0" strokeDasharray="4 4" strokeWidth="1" />
            <text x="37" y="163" textAnchor="end" className="text-[10px] font-semibold fill-slate-400">Rp 1.1Jt</text>
          </g>
          <g>
            <line x1="45" y1="93" x2="940" y2="93" stroke="#E2E8F0" strokeDasharray="4 4" strokeWidth="1" />
            <text x="37" y="97" textAnchor="end" className="text-[10px] font-semibold fill-slate-400">Rp 2.2Jt</text>
          </g>
          <g>
            <line x1="45" y1="25" x2="940" y2="25" stroke="#E2E8F0" strokeDasharray="4 4" strokeWidth="1" />
            <text x="37" y="29" textAnchor="end" className="text-[10px] font-semibold fill-slate-400">Rp 3.4Jt</text>
          </g>

          {/* X-AXIS TIME LABELS */}
          {[
            { x: 45, label: "08:00" },
            { x: 224, label: "10:00" },
            { x: 403, label: "12:00" },
            { x: 582, label: "14:00" },
            { x: 761, label: "16:00" },
            { x: 940, label: "18:00" },
          ].map((item, idx) => (
            <g key={idx}>
              <line x1={item.x} y1="25" x2={item.x} y2="225" stroke="#F1F5F9" strokeWidth="1" />
              <text x={item.x} y="250" textAnchor="middle" className="text-[11px] fill-slate-500 font-semibold cursor-pointer">
                {item.label}
              </text>
            </g>
          ))}

          {/* COMBINED LINE & POINTS */}
          {visibleLines.combined && (
            <>
              <path
                d="M 45 175 C 134.5 175, 134.5 129, 224 129 C 313.5 129, 313.5 51, 403 51 C 492.5 51, 492.5 116, 582 116 C 671.5 116, 671.5 141, 761 141 C 850.5 141, 850.5 84, 940 84 L 940 225 L 45 225 Z"
                fill="url(#multiChartGradientSales)"
              />
              <path
                d="M 45 175 C 134.5 175, 134.5 129, 224 129 C 313.5 129, 313.5 51, 403 51 C 492.5 51, 492.5 116, 582 116 C 671.5 116, 671.5 141, 761 141 C 850.5 141, 850.5 84, 940 84"
                fill="none"
                stroke="#0A2540"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <g>
                {[
                  { cx: 45, cy: 175 },
                  { cx: 224, cy: 129 },
                  { cx: 403, cy: 51 },
                  { cx: 582, cy: 116 },
                  { cx: 761, cy: 141 },
                  { cx: 940, cy: 84 },
                ].map((pt, idx) => (
                  <circle
                    key={idx}
                    cx={pt.cx}
                    cy={pt.cy}
                    r="4.5"
                    fill="#0A2540"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    className="cursor-pointer shadow-sm hover:scale-125 transition-transform"
                  />
                ))}
              </g>
            </>
          )}

          {/* RETAIL MART LINE (BLUE) */}
          {visibleLines.retail && (
            <g>
              <path
                d="M 45 192 C 134.5 192, 134.5 163, 224 163 C 313.5 163, 313.5 130, 403 130 C 492.5 130, 492.5 151, 582 151 C 671.5 151, 671.5 167, 761 167 C 850.5 167, 850.5 148, 940 148"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {[
                { cx: 45, cy: 192 },
                { cx: 224, cy: 163 },
                { cx: 403, cy: 130 },
                { cx: 582, cy: 151 },
                { cx: 761, cy: 167 },
                { cx: 940, cy: 148 },
              ].map((pt, idx) => (
                <circle
                  key={idx}
                  cx={pt.cx}
                  cy={pt.cy}
                  r="3.5"
                  fill="#3B82F6"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="cursor-pointer"
                />
              ))}
            </g>
          )}

          {/* WARUNG MAKAN LINE (GREEN) */}
          {visibleLines.warung && (
            <g>
              <path
                d="M 45 207 C 134.5 207, 134.5 191, 224 191 C 313.5 191, 313.5 145, 403 145 C 492.5 145, 492.5 189, 582 189 C 671.5 189, 671.5 199, 761 199 C 850.5 199, 850.5 161, 940 161"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {[
                { cx: 45, cy: 207 },
                { cx: 224, cy: 191 },
                { cx: 403, cy: 145 },
                { cx: 582, cy: 189 },
                { cx: 761, cy: 199 },
                { cx: 940, cy: 161 },
              ].map((pt, idx) => (
                <circle
                  key={idx}
                  cx={pt.cx}
                  cy={pt.cy}
                  r="3.5"
                  fill="#10B981"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="cursor-pointer"
                />
              ))}
            </g>
          )}

          {/* KOPI BUDI LINE (AMBER) */}
          {visibleLines.kopi && (
            <g>
              <path
                d="M 45 225 C 134.5 225, 134.5 225, 224 225 C 313.5 225, 313.5 225, 403 225 C 492.5 225, 492.5 225, 582 225 C 671.5 225, 671.5 225, 761 225 C 850.5 225, 850.5 225, 940 225"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {[
                { cx: 45, cy: 225 },
                { cx: 224, cy: 225 },
                { cx: 403, cy: 225 },
                { cx: 582, cy: 225 },
                { cx: 761, cy: 225 },
                { cx: 940, cy: 225 },
              ].map((pt, idx) => (
                <circle
                  key={idx}
                  cx={pt.cx}
                  cy={pt.cy}
                  r="3.5"
                  fill="#F59E0B"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="cursor-pointer"
                />
              ))}
            </g>
          )}
        </svg>
      </div>

      {/* SUB-ANALYTICS GRID: STORE CONTRIBUTION & PAYMENT CHANNELS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
        {/* KONTRIBUSI PENJUALAN PER TOKO */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-extrabold text-[#0A2540] font-sans">
              Kontribusi Penjualan per Toko
            </h3>
            <span className="text-[11px] font-bold text-slate-400">
              Distribusi %
            </span>
          </div>

          <div className="space-y-3.5">
            {/* Store 1 */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                  Budi Retail Mart
                </span>
                <span className="font-bold text-[#0A2540]">
                  Rp 7.210.000 (65.2%)
                </span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 bg-[#3B82F6]"
                  style={{ width: "65.2%" }}
                />
              </div>
            </div>

            {/* Store 2 */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  Warung Makan Pak Budi
                </span>
                <span className="font-bold text-[#0A2540]">
                  Rp 3.850.000 (34.8%)
                </span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 bg-[#10B981]"
                  style={{ width: "34.8%" }}
                />
              </div>
            </div>

            {/* Store 3 */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  Kopi Budi Sejahtera
                </span>
                <span className="font-bold text-[#0A2540]">Rp 0 (0%)</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 bg-[#F59E0B]"
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* KANAL & METODE PEMBAYARAN */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-extrabold text-[#0A2540] font-sans">
              Kanal & Metode Pembayaran
            </h3>
            <span className="text-[11px] font-bold text-slate-400">
              Total Sah
            </span>
          </div>

          <div className="space-y-3">
            {/* QRIS */}
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0A2540] text-[#00C897] flex items-center justify-center">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0A2540] font-sans">
                    QRIS TUNTAS
                  </p>
                  <p className="text-[10px] font-semibold text-emerald-600">
                    62% dari total transaksi
                  </p>
                </div>
              </div>
              <p className="text-xs font-extrabold text-[#0A2540] font-sans">
                Rp 6.850.000
              </p>
            </div>

            {/* CASH */}
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0A2540] text-[#00C897] flex items-center justify-center">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0A2540] font-sans">
                    Tunai / Cash
                  </p>
                  <p className="text-[10px] font-semibold text-emerald-600">
                    28% dari total transaksi
                  </p>
                </div>
              </div>
              <p className="text-xs font-extrabold text-[#0A2540] font-sans">
                Rp 3.090.000
              </p>
            </div>

            {/* CARD */}
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0A2540] text-[#00C897] flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0A2540] font-sans">
                    SoftPOS / Kartu
                  </p>
                  <p className="text-[10px] font-semibold text-emerald-600">
                    10% dari total transaksi
                  </p>
                </div>
              </div>
              <p className="text-xs font-extrabold text-[#0A2540] font-sans">
                Rp 1.120.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
