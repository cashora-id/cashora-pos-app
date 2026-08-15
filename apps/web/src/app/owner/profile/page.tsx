"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  Building,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Lock,
  Smartphone,
  Laptop,
  Trash2,
  Users,
  ExternalLink,
  HelpCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

type ProfileTab = "personal" | "business" | "security" | "subscription";

export default function OwnerProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("personal");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  // Form State - Personal Info
  const [fullName, setFullName] = useState("Budi Santoso");
  const [email, setEmail] = useState("budi.santoso@cashoragroup.id");
  const [phone, setPhone] = useState("+62 812-3456-7890");
  const [role] = useState("Pemilik Utama (Main Owner)");
  const [address, setAddress] = useState("Jl. Raya Gubeng No. 48, Surabaya, Jawa Timur 60281");

  // Form State - Security
  const [newPassword, setNewPassword] = useState("");

  const handleSavePersonal = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Perubahan informasi pribadi berhasil disimpan!");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-body flex flex-col pb-20">
      {/* TOP NAV BAR */}
      <header className="bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <Link
          href="/owner/menu"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#0A2540] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Dasbor Utama</span>
        </Link>
        <span className="text-xs font-semibold text-slate-400 font-sans">
          Cashora.
        </span>
      </header>

      {/* HERO BANNER SECTION (NAVY) */}
      <div className="bg-[#0A2540] text-white px-4 sm:px-8 pt-8 pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          {/* PROFILE AVATAR & INFO */}
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-3xl bg-[#00C897] text-[#0A2540] flex items-center justify-center font-black text-2xl shadow-xl ring-4 ring-white/10 shrink-0 font-sans">
              BS
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl font-extrabold text-white tracking-tight font-sans">
                  {fullName}
                </h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-[#00C897] text-[10px] font-extrabold border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" />
                  Terverifikasi
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                {role} • Bergabung sejak Agustus 2024
              </p>
            </div>
          </div>

          {/* LICENSE STATUS BADGE */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 shrink-0 text-right">
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-300 font-sans">
              STATUS LISENSI
            </p>
            <p className="text-sm font-extrabold text-[#00C897] font-sans mt-0.5">
              ✨ Premium Enterprise
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CARD WITH 4 TABS */}
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
          {/* NAVIGATION TAB PILLS (4 TABS) */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab("personal")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 font-sans ${
                activeTab === "personal"
                  ? "bg-[#0A2540] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <User className="w-4 h-4" />
              <span>Informasi Pribadi</span>
            </button>

            <button
              onClick={() => setActiveTab("business")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 font-sans ${
                activeTab === "business"
                  ? "bg-[#0A2540] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building className="w-4 h-4" />
              <span>Profil Bisnis & Outlet</span>
            </button>

            <button
              onClick={() => setActiveTab("security")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 font-sans ${
                activeTab === "security"
                  ? "bg-[#0A2540] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Keamanan & Sesi</span>
            </button>

            <button
              onClick={() => setActiveTab("subscription")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 font-sans ${
                activeTab === "subscription"
                  ? "bg-[#0A2540] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Langganan & Penggunaan</span>
            </button>
          </div>

          {/* GREEN BANNER KONTROL AKSES ORGANISASI */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold text-[#0A2540] font-sans">
                Kontrol akses organisasi
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Kelola staff, peran, dan akses outlet dari satu tempat yang aman.
              </p>
            </div>
            <Link
              href="/owner/staff"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A2540] text-white rounded-xl text-xs font-bold hover:bg-[#0A2540]/90 transition-all shrink-0 shadow-sm"
            >
              <Users className="w-3.5 h-3.5 text-[#00C897]" />
              <span>Kelola Staff & Akses</span>
            </Link>
          </div>

          {/* TAB 1: INFORMASI PRIBADI (GAMBAR 2) */}
          {activeTab === "personal" && (
            <form onSubmit={handleSavePersonal} className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* NAMA LENGKAP */}
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-2 font-sans flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#00C897]" />
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50 shadow-sm"
                  />
                </div>

                {/* ALAMAT EMAIL USAHA */}
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-2 font-sans flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-500" />
                    Alamat Email Usaha
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50 shadow-sm"
                  />
                </div>

                {/* NOMOR TELEPON / WHATSAPP */}
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-2 font-sans flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-amber-500" />
                    Nomor Telepon / WhatsApp
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50 shadow-sm"
                  />
                </div>

                {/* PERAN AKUN (READ ONLY) */}
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-2 font-sans">
                    Peran Akun
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={role}
                    className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-2xl text-xs font-bold text-slate-600 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* ALAMAT DOMISILI UTAMA */}
              <div>
                <label className="block text-xs font-bold text-[#0A2540] mb-2 font-sans">
                  Alamat Domisili Utama
                </label>
                <textarea
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50 shadow-sm"
                />
              </div>

              {/* BUTTONS */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => alert("Batal menyimpan")}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Batal
                </button>
                <Button
                  type="submit"
                  className="bg-[#00C897] text-[#0A2540] hover:bg-[#00C897]/90 px-6 py-2.5 rounded-xl text-xs font-extrabold shadow-md"
                >
                  Simpan Perubahan
                </Button>
              </div>
            </form>
          )}

          {/* TAB 2: PROFIL BISNIS & OUTLET (GAMBAR 3) */}
          {activeTab === "business" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* LISENSI CASHORA CARD */}
              <div className="bg-[#0A2540] text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#00C897]/20 text-[#00C897] flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold font-sans">Lisensi Cashora Multi-Outlet</h3>
                      <p className="text-xs text-slate-300">Paket Enterprise Terverifikasi</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#00C897] text-[#0A2540] text-xs font-extrabold font-sans">
                    AKTIF
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">BATAS CABANG</span>
                    <span className="font-extrabold text-white text-sm font-sans">Tak Terbatas (Unlimited)</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">BATAS KASIR POS</span>
                    <span className="font-extrabold text-white text-sm font-sans">Hingga 50 Kasir / Outlet</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">MASA BERLAKU LISENSI</span>
                    <span className="font-extrabold text-[#00C897] text-sm font-sans">31 Desember 2027</span>
                  </div>
                </div>
              </div>

              {/* DAFTAR CABANG BISNIS TERDAFTAR */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 font-sans">
                  DAFTAR CABANG BISNIS TERDAFTAR (3)
                </h4>
                <div className="space-y-3">
                  {[
                    { name: "Warung Makan Pak Budi", cat: "Restoran & Kuliner • Surabaya Gubeng", status: "POS Aktif" },
                    { name: "Budi Retail Mart", cat: "Supermarket & Retail • Jakarta Pusat", status: "POS Aktif" },
                    { name: "Kopi Budi Sejahtera", cat: "Coffee Shop & Bakery • Bandung Dago", status: "Maintenance" },
                  ].map((outlet) => (
                    <div
                      key={outlet.name}
                      className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center font-bold">
                          <Building className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#0A2540] font-sans">{outlet.name}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">{outlet.cat}</p>
                        </div>
                      </div>
                      <span
                        className={`text-[11px] font-extrabold px-3 py-1 rounded-full ${
                          outlet.status === "POS Aktif"
                            ? "bg-emerald-50 text-[#00A87E] border border-emerald-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {outlet.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: KEAMANAN & SESI (GAMBAR 4) */}
          {activeTab === "security" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* 2FA TOGGLE BOX */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100/70 text-[#00C897] flex items-center justify-center shrink-0 font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-[#0A2540] font-sans">
                      Autentikasi Dua Langkah (2FA)
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Lindungi akun Anda dari akses tidak sah dengan mewajibkan verifikasi kode WhatsApp / Authenticator saat login.
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={twoFactorEnabled}
                  onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                  className="w-5 h-5 rounded text-[#00C897] focus:ring-[#00C897] cursor-pointer shrink-0"
                />
              </div>

              {/* UBAH KATA SANDI AKUN */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-4 h-4 text-[#0A2540]" />
                  <h4 className="text-xs font-bold text-[#0A2540] font-sans">Ubah Kata Sandi Akun</h4>
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-semibold text-slate-600">Kata Sandi Baru</label>
                  <div className="flex gap-3">
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Masukkan kata sandi baru..."
                      className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50"
                    />
                    <Button
                      onClick={() => alert("Kata sandi telah diperbarui!")}
                      className="bg-slate-700 text-white hover:bg-slate-800 px-5 py-2.5 rounded-xl text-xs font-bold shrink-0"
                    >
                      Perbarui Kata Sandi
                    </Button>
                  </div>
                </div>
              </div>

              {/* SESI PERANGKAT LOGIN AKTIF */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 font-sans">
                  SESI PERANGKAT LOGIN AKTIF (3)
                </h4>
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Laptop className="w-5 h-5 text-slate-600" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-[#0A2540] font-sans">MacBook Pro 16&quot;</p>
                          <span className="text-[10px] font-extrabold text-[#00A87E] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            Aktif Sekarang
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          macOS Tahoe • Chrome v128 • Surabaya, Jawa Timur (180.252.114.22)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-slate-500" />
                      <div>
                        <p className="text-xs font-bold text-[#0A2540] font-sans">iPhone 15 Pro Max</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          iOS 18.1 • Cashora Owner App • Surabaya Gubeng (114.124.201.88) — 12 menit lalu
                        </p>
                      </div>
                    </div>
                    <button onClick={() => alert("Keluarkan sesi iPhone 15 Pro Max")} className="text-rose-500 hover:text-rose-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: LANGGANAN & PENGGUNAAN (GAMBAR 5) */}
          {activeTab === "subscription" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold text-[#00A87E] uppercase tracking-wider font-sans">
                    CASHORA UNTUK BISNIS ANDA
                  </span>
                  <h3 className="text-lg font-extrabold text-[#0A2540] mt-0.5 font-sans">
                    Langganan & Penggunaan
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#00A87E] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  ✓ Langganan aktif
                </span>
              </div>

              {/* PAKET AKTIF CARD */}
              <div className="bg-[#0A2540] text-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#00C897] font-sans">PAKET AKTIF</span>
                    <h4 className="text-xl font-extrabold font-sans">Cashora Multi-Outlet Enterprise</h4>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => alert("Mengelola Paket")} variant="outline" className="bg-white text-[#0A2540] text-xs font-bold py-2 px-4 rounded-xl">
                      Kelola Paket
                    </Button>
                    <Button onClick={() => alert("Membuka upgrade paket")} className="bg-[#00C897] text-[#0A2540] text-xs font-bold py-2 px-4 rounded-xl">
                      Lihat Upgrade ↗
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-slate-300">
                  Siklus tagihan: <span className="font-bold text-white">Tahunan</span> • Perpanjangan: <span className="font-bold text-white">1 Jan 2028</span>
                </p>
              </div>

              {/* PENGGUNAAN BISNIS GRID */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 font-sans">
                  PENGGUNAAN BISNIS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                    <p className="text-xs font-bold text-[#0A2540] font-sans">3 outlet aktif</p>
                    <p className="text-[11px] text-slate-500 mt-1">Paket Enterprise mendukung outlet tanpa batas.</p>
                  </div>
                  <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                    <p className="text-xs font-bold text-[#0A2540] font-sans">8 perangkat aktif</p>
                    <p className="text-[11px] text-slate-500 mt-1">Batas hingga 50 kasir untuk setiap outlet.</p>
                  </div>
                  <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-xs font-bold text-[#0A2540] font-sans">Transaksi QRIS</p>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">82%</span>
                    </div>
                    <p className="text-xs font-extrabold text-slate-800">82.450 dari 100.000</p>
                    <div className="w-full h-2 bg-slate-200 rounded-full mt-2 overflow-hidden">
                      <div className="w-[82%] h-full bg-amber-500 rounded-full" />
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                    <p className="text-xs font-bold text-[#0A2540] font-sans">12 pengguna terkelola</p>
                    <p className="text-[11px] text-slate-500 mt-1">Role owner, manager, dan kasir dapat dikelola.</p>
                  </div>
                </div>
              </div>

              {/* TAGIHAN BERIKUTNYA */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Tagihan berikutnya (1 Januari 2028)</p>
                  <p className="text-xl font-extrabold text-[#0A2540] font-sans mt-0.5">Rp12.000.000 <span className="text-xs font-normal text-slate-500">/tahun</span></p>
                </div>
                <Button onClick={() => alert("Mengatur metode pembayaran tagihan")} className="bg-[#0A2540] text-white text-xs font-bold py-2.5 px-5 rounded-xl">
                  Kelola pembayaran
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
