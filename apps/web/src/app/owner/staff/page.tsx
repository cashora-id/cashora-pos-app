"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Plus,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Clock,
  X,
  UserPlus,
  Shield,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

interface StaffMember {
  id: string;
  name: string;
  phone: string;
  role: "Owner Utama" | "Manager Outlet" | "Kasir";
  outlets: string[];
  status: "Aktif" | "Nonaktif" | "Undangan";
  lastActive: string;
}

const initialStaffList: StaffMember[] = [
  {
    id: "staff-1",
    name: "Budi Santoso",
    phone: "+62 812-3456-7890",
    role: "Owner Utama",
    outlets: ["Warung Makan Pak Budi", "Budi Retail Mart", "Kopi Budi Sejahtera"],
    status: "Aktif",
    lastActive: "Aktif sekarang",
  },
  {
    id: "staff-2",
    name: "Rina Kusuma",
    phone: "+62 811-9922-145",
    role: "Manager Outlet",
    outlets: ["Warung Makan Pak Budi"],
    status: "Aktif",
    lastActive: "12 menit lalu",
  },
  {
    id: "staff-3",
    name: "Dimas Pratama",
    phone: "+62 857-1188-320",
    role: "Manager Outlet",
    outlets: ["Budi Retail Mart"],
    status: "Aktif",
    lastActive: "35 menit lalu",
  },
  {
    id: "staff-4",
    name: "Sari Wijaya",
    phone: "+62 813-7761-909",
    role: "Kasir",
    outlets: ["Warung Makan Pak Budi"],
    status: "Aktif",
    lastActive: "1 jam lalu",
  },
  {
    id: "staff-5",
    name: "Andi Saputra",
    phone: "+62 856-4410-278",
    role: "Kasir",
    outlets: ["Budi Retail Mart"],
    status: "Nonaktif",
    lastActive: "3 hari lalu",
  },
  {
    id: "staff-6",
    name: "Maya Putri",
    phone: "+62 812-8890-426",
    role: "Manager Outlet",
    outlets: ["Kopi Budi Sejahtera"],
    status: "Undangan",
    lastActive: "Undangan belum diterima",
  },
];

export default function OwnerStaffPage() {
  const [staffList, setStaffList] = useState<StaffMember[]>(initialStaffList);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<
    "Semua" | "Owner Utama" | "Manager Outlet" | "Kasir"
  >("Semua");
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  // Invite Staff Form State
  const [inviteName, setInviteName] = useState("");
  const [invitePhone, setInvitePhone] = useState("");
  const [inviteRole, setInviteRole] = useState<"Kasir" | "Manager Outlet" | "Owner Utama">("Kasir");
  const [inviteOutlets, setInviteOutlets] = useState<string[]>(["Warung Makan Pak Budi"]);

  const allAvailableOutlets = [
    "Warung Makan Pak Budi",
    "Budi Retail Mart",
    "Kopi Budi Sejahtera",
  ];

  const filteredStaff = staffList.filter((staff) => {
    const matchesSearch =
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.phone.includes(searchQuery);
    const matchesRole =
      selectedRoleFilter === "Semua" || staff.role === selectedRoleFilter;
    return matchesSearch && matchesRole;
  });

  const toggleStaffStatus = (id: string) => {
    setStaffList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.status === "Aktif") return { ...item, status: "Nonaktif" };
          if (item.status === "Nonaktif") return { ...item, status: "Aktif" };
        }
        return item;
      })
    );
  };

  const toggleOutletSelection = (outlet: string) => {
    if (inviteOutlets.includes(outlet)) {
      if (inviteOutlets.length === 1) return;
      setInviteOutlets(inviteOutlets.filter((o) => o !== outlet));
    } else {
      setInviteOutlets([...inviteOutlets, outlet]);
    }
  };

  const handleCreateInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteName.trim()) return;

    const newStaff: StaffMember = {
      id: `staff-${Date.now()}`,
      name: inviteName,
      phone: invitePhone || "+62 812-0000-0000",
      role: inviteRole,
      outlets: inviteOutlets,
      status: "Undangan",
      lastActive: "Undangan belum diterima",
    };

    setStaffList((prev) => [...prev, newStaff]);
    setInviteName("");
    setInvitePhone("");
    setIsInviteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-body flex flex-col">
      {/* TOP BAR NAV */}
      <header className="bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <Link
          href="/owner/menu"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#0A2540] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Dasbor</span>
        </Link>
        <span className="text-xs font-semibold text-slate-400">
          Manajemen akses owner
        </span>
      </header>

      {/* HERO BANNER SECTION */}
      <div className="bg-[#0A2540] text-white px-4 sm:px-8 py-10 sm:py-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          <div>
            <span className="text-[10px] font-extrabold tracking-widest text-[#00C897] uppercase font-sans">
              AKSES TERKONTROL
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 font-sans">
              Staff & Hak Akses
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
              Kelola akses berdasarkan peran dan outlet. Perubahan sensitif dilindungi agar kontrol utama tetap berada di tangan owner.
            </p>
          </div>

          <Button
            onClick={() => setIsInviteModalOpen(true)}
            className="bg-[#00C897] text-[#0A2540] hover:bg-[#00C897]/90 px-6 py-3 rounded-2xl text-xs font-extrabold flex items-center gap-2 shrink-0 shadow-lg shadow-[#00C897]/20"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Undang Staff</span>
          </Button>
        </div>
      </div>

      {/* MAIN CONTAINER: TABLE & FILTERS */}
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-8 -mt-6 relative z-20 pb-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
          {/* SEARCH & ROLE FILTER PILLS */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama atau nomor WhatsApp..."
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50 shadow-sm"
              />
            </div>

            {/* ROLE FILTER PILLS */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl shrink-0 overflow-x-auto">
              {(["Semua", "Owner Utama", "Manager Outlet", "Kasir"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRoleFilter(r)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedRoleFilter === r
                      ? "bg-[#0A2540] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* STAFF DATA TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider font-sans">
                  <th className="py-3 px-4">ANGGOTA</th>
                  <th className="py-3 px-4">PERAN</th>
                  <th className="py-3 px-4">AKSES OUTLET</th>
                  <th className="py-3 px-4">STATUS</th>
                  <th className="py-3 px-4">TERAKHIR AKTIF</th>
                  <th className="py-3 px-4 text-right">AKSI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredStaff.map((staff) => (
                  <tr key={staff.id} className="hover:bg-slate-50/60 transition-colors">
                    {/* ANGGOTA */}
                    <td className="py-4 px-4">
                      <p className="font-bold text-[#0A2540] font-sans">{staff.name}</p>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">{staff.phone}</p>
                    </td>

                    {/* PERAN */}
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-extrabold font-sans ${
                          staff.role === "Owner Utama"
                            ? "bg-[#0A2540] text-[#00C897]"
                            : staff.role === "Manager Outlet"
                            ? "bg-blue-50 text-blue-700 border border-blue-200/60"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}
                      >
                        {staff.role}
                      </span>
                    </td>

                    {/* AKSES OUTLET */}
                    <td className="py-4 px-4 text-slate-600 font-medium">
                      {staff.outlets.join(", ")}
                    </td>

                    {/* STATUS */}
                    <td className="py-4 px-4">
                      {staff.status === "Aktif" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00C897]" />
                          Aktif
                        </span>
                      )}
                      {staff.status === "Nonaktif" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 font-bold text-[11px]">
                          <XCircle className="w-3.5 h-3.5 text-slate-400" />
                          Nonaktif
                        </span>
                      )}
                      {staff.status === "Undangan" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold text-[11px]">
                          <Clock className="w-3.5 h-3.5 text-amber-500" />
                          Undangan
                        </span>
                      )}
                    </td>

                    {/* TERAKHIR AKTIF */}
                    <td className="py-4 px-4 text-slate-500 font-medium">
                      {staff.lastActive}
                    </td>

                    {/* AKSI */}
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => alert(`Mengelola akses staff ${staff.name}`)}
                          className="font-bold text-slate-700 hover:text-[#0A2540] hover:underline"
                        >
                          Kelola
                        </button>
                        {staff.role !== "Owner Utama" && (
                          <button
                            onClick={() => toggleStaffStatus(staff.id)}
                            className={`font-bold hover:underline ${
                              staff.status === "Aktif"
                                ? "text-slate-400 hover:text-slate-600"
                                : "text-[#00A87E]"
                            }`}
                          >
                            {staff.status === "Aktif" ? "Nonaktifkan" : "Aktifkan"}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* MODAL DIALOG: UNDANG STAFF BARU */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 bg-[#0A2540]/75 backdrop-blur-md z-[99999] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200">
            {/* MODAL HEADER */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100/70 text-[#00C897] flex items-center justify-center font-bold">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0A2540] font-sans">
                    Undang staff baru
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Data undangan dicatat sebagai mock. Sistem tidak mengirim WhatsApp atau kredensial asli pada tahap ini.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsInviteModalOpen(false)}
                className="p-1 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* FORM INPUTS */}
            <form onSubmit={handleCreateInvite} className="space-y-4">
              {/* NAMA LENGKAP */}
              <div>
                <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-sans">
                  Nama lengkap
                </label>
                <input
                  type="text"
                  required
                  value={inviteName}
                  onChange={(e) => setInviteName(e.target.value)}
                  placeholder="Masukkan nama lengkap staff"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50 shadow-sm"
                />
              </div>

              {/* NOMOR WHATSAPP */}
              <div>
                <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-sans">
                  Nomor WhatsApp
                </label>
                <input
                  type="text"
                  value={invitePhone}
                  onChange={(e) => setInvitePhone(e.target.value)}
                  placeholder="Contoh: +62 812-0000-0000"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50 shadow-sm"
                />
              </div>

              {/* PERAN */}
              <div>
                <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-sans">
                  Peran
                </label>
                <select
                  value={inviteRole}
                  onChange={(e) =>
                    setInviteRole(e.target.value as "Kasir" | "Manager Outlet" | "Owner Utama")
                  }
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50 shadow-sm"
                >
                  <option value="Kasir">Kasir</option>
                  <option value="Manager Outlet">Manager Outlet</option>
                  <option value="Owner Utama">Owner Utama</option>
                </select>
                <p className="text-[11px] text-slate-400 mt-1">
                  Akses terbatas untuk aktivitas transaksi pada outlet yang ditugaskan.
                </p>
              </div>

              {/* OUTLET YANG DAPAT DIAKSES */}
              <div>
                <label className="block text-xs font-bold text-[#0A2540] mb-2 font-sans">
                  Outlet yang dapat diakses
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {allAvailableOutlets.map((outlet) => {
                    const isChecked = inviteOutlets.includes(outlet);
                    return (
                      <label
                        key={outlet}
                        onClick={() => toggleOutletSelection(outlet)}
                        className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center gap-2.5 text-xs ${
                          isChecked
                            ? "border-[#00C897] bg-emerald-50/50 font-bold text-[#0A2540]"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="rounded border-slate-300 text-[#00C897] focus:ring-[#00C897]"
                        />
                        <span className="truncate">{outlet}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* MODAL FOOTER BUTTONS */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsInviteModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Batal
                </button>
                <Button
                  type="submit"
                  className="bg-[#0A2540] text-white hover:bg-[#0A2540]/90 px-6 py-2.5 rounded-xl text-xs font-extrabold shadow-md"
                >
                  Buat Undangan
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
