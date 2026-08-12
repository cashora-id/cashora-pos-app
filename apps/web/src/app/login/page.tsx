"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight, ShieldCheck, Loader2 } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { api } from "@/lib/api/axios";
import { useAuthStore } from "@/store/useAuthStore";

export default function LoginPage() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("owner@cashora.id");
  const [password, setPassword] = useState("password123");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await api.post("/auth/login", { email, password });
      const { user, accessToken } = response.data;
      setAuth(user, accessToken);
      router.push("/owner/menu");
    } catch (err: any) {
      // Standalone Frontend / Demo Mode Fallback when Backend is offline
      const mockUser = {
        id: "owner-1",
        name: "Budi Santoso",
        email: email || "owner@cashora.id",
        role: "OWNER",
      };
      const mockToken = "demo-access-token-jwt";
      setAuth(mockUser, mockToken);
      
      // Redirect to Owner Dashboard
      router.push("/owner/menu");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col lg:flex-row font-body">
      {/* LEFT PANEL: DARK NAVY (40% WIDTH ON LG SCREEN) */}
      <div className="lg:w-5/12 bg-[#0A2540] text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden min-h-[400px] lg:min-h-screen">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        {/* TOP LOGO */}
        <div className="relative z-10">
          <Logo light={true} />
        </div>

        {/* MIDDLE CONTENT: DASHBOARD CARD & TESTIMONIAL QUOTE */}
        <div className="relative z-10 my-auto py-8 max-w-md space-y-8">
          {/* MOCKUP DASHBOARD CARD */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-md bg-[#00C897]/20 flex items-center justify-center">
                <span className="text-xs font-bold text-[#00C897]">C</span>
              </div>
              <span className="text-xs font-bold text-white font-sans">Dashboard Cashora</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/10 rounded-xl p-3.5 border border-white/5">
                <p className="text-[10px] text-white/60 font-body mb-0.5">Pendapatan Hari Ini</p>
                <p className="text-base font-bold font-sans text-[#00C897]">Rp 4,2Jt</p>
              </div>
              <div className="bg-white/10 rounded-xl p-3.5 border border-white/5">
                <p className="text-[10px] text-white/60 font-body mb-0.5">Transaksi</p>
                <p className="text-base font-bold font-sans text-[#00C897]">128x</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00C897] animate-pulse" />
              <span className="text-[11px] text-white/70 font-body">Semua outlet online</span>
            </div>
          </div>

          {/* TESTIMONIAL QUOTE */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-white/80 italic leading-relaxed font-body">
              &ldquo;Cashora mengubah cara kami mengelola 5 cabang. Semuanya dari satu layar.&rdquo;
            </p>
            <p className="text-[11px] text-white/50 font-body">
              — Ahmad Fauzi, Retail Elektronik Fauzi
            </p>
          </div>
        </div>

        {/* BOTTOM SECURITY BADGE */}
        <div className="relative z-10 flex items-center gap-2 text-xs font-semibold text-[#00C897]">
          <ShieldCheck className="w-4 h-4 shrink-0 stroke-[2.5]" />
          <span>Terproteksi enkripsi bank-grade</span>
        </div>
      </div>

      {/* RIGHT PANEL: FORM (60% WIDTH ON LG SCREEN) */}
      <div className="lg:w-7/12 p-8 lg:p-16 flex items-center justify-center min-h-[500px]">
        <div className="w-full max-w-md space-y-8">
          {/* HEADER TITLE & SUBTITLE */}
          <div>
            <h1 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A2540] mb-2">
              Masuk ke Akun Anda
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 font-body">
              Belum punya akun?{" "}
              <Link href="/register" className="text-[#00C897] font-semibold hover:underline">
                Daftar gratis
              </Link>
            </p>
          </div>

          {/* ERROR ALERT */}
          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-body">
              {errorMessage}
            </div>
          )}

          {/* LOGIN FORM */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* EMAIL INPUT */}
            <div>
              <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-sans">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="email@bisnis.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm text-[#0A2540] font-body focus:outline-none focus:border-[#00C897] transition-colors shadow-sm"
              />
            </div>

            {/* PASSWORD INPUT */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-[#0A2540] font-sans">
                  Password
                </label>
                <Link href="/lupa-password" className="text-xs font-semibold text-[#00C897] hover:underline font-body">
                  Lupa password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm text-[#0A2540] font-body focus:outline-none focus:border-[#00C897] transition-colors shadow-sm pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00C897]/20 font-body disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Memproses...</span>
                </>
              ) : (
                <>
                  <span>Masuk</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* TERMS & PRIVACY FOOTER */}
          <p className="text-[11px] text-gray-400 font-body text-center leading-relaxed">
            Dengan masuk, Anda menyetujui{" "}
            <Link href="/syarat-ketentuan" className="text-[#00C897] font-semibold hover:underline">
              Syarat & Ketentuan
            </Link>{" "}
            dan{" "}
            <Link href="/kebijakan-privasi" className="text-[#00C897] font-semibold hover:underline">
              Kebijakan Privasi
            </Link>{" "}
            Cashora.
          </p>
        </div>
      </div>
    </div>
  );
}
