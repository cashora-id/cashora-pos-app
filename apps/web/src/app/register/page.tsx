"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Store, Mail, Phone, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    businessType: "F&B / Restoran",
    email: "",
    phone: "",
    password: "",
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registrasi merchant berhasil untuk ${formData.businessName}`);
  };

  return (
    <div className="min-h-screen bg-[#0A2540] flex items-center justify-center p-4 pt-24 pb-12">
      <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl w-full max-w-lg border border-white/20">
        <div className="text-center mb-8">
          <Logo light={false} className="justify-center mb-3" />
          <h1 className="font-sans font-bold text-2xl text-[#0A2540]">Daftar Akun Cashora</h1>
          <p className="text-xs text-gray-500 mt-1">Coba gratis 14 hari tanpa biaya tersembunyi</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Nama Lengkap</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Budi Santoso"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 pl-10 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
                />
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Nama Usaha / Toko</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Kedai Kopi Mantan"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-2.5 pl-10 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
                />
                <Store className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Email Kerja</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="budi@kopi.id"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 pl-10 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
                />
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0A2540] mb-1.5">No. WhatsApp</label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  placeholder="08123456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
                />
                <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Jenis Bisnis</label>
            <select
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
            >
              <option value="F&B / Restoran">F&B / Restoran & Kafe</option>
              <option value="Toko Ritel & Mini Market">Toko Ritel & Mini Market</option>
              <option value="Warung & Kelontong">Warung & Kelontong</option>
              <option value="Jasa / Service">Jasa / Salon / Laundry</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Password</label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="Minimal 8 karakter"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2.5 pl-10 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              Buat Akun Merchant
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-100 text-center text-xs text-gray-500">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-[#00C897] font-bold hover:underline">
            Masuk di sini
          </Link>
        </div>
      </div>
    </div>
  );
}
