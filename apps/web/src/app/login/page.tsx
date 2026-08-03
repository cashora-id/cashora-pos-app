"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, Mail, Eye, EyeOff, LogIn } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login simulasi berhasil untuk ${email}`);
  };

  return (
    <div className="min-h-screen bg-[#0A2540] flex items-center justify-center p-4 pt-24 pb-12">
      <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <Logo light={false} className="justify-center mb-3" />
          <h1 className="font-sans font-bold text-2xl text-[#0A2540]">Login Merchant POS</h1>
          <p className="text-xs text-gray-500 mt-1">Masuk ke Dashboard Pengelola Cashora</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Email / No. HP</label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="merchant@cashora.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
              />
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0A2540] mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 pr-10 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00C897]"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-gray-600">
              <input type="checkbox" className="rounded border-gray-300 text-[#00C897] focus:ring-[#00C897]" />
              Ingat Saya
            </label>
            <a href="#" className="text-[#00C897] font-semibold hover:underline">
              Lupa Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <LogIn className="w-4 h-4" />
            Masuk ke Dashboard
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
          Belum punya akun?{" "}
          <Link href="/register" className="text-[#00C897] font-bold hover:underline">
            Daftar Gratis Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
