"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight, Check, Loader2 } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { api } from "@/lib/api/axios";
import { useAuthStore } from "@/store/useAuthStore";

export default function RegisterPage() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessType: "F&B / Restoran",
  });

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Password dan konfirmasi password tidak cocok.");
        return;
      }
      setErrorMessage("");
      setStep(2);
    } else {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const response = await api.post("/auth/register", {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          businessName: formData.businessName,
          businessType: formData.businessType,
        });

        const { user, accessToken } = response.data;
        setAuth(user, accessToken);
        router.push("/dashboard");
      } catch (err: any) {
        const message =
          err.response?.data?.message ||
          "Gagal mendaftar. Silakan coba kembali beberapa saat lagi.";
        setErrorMessage(message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col lg:flex-row font-body">
      {/* LEFT PANEL: DARK NAVY (50% WIDTH ON LG SCREEN) */}
      <div className="lg:w-1/2 bg-[#0A2540] text-white p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden min-h-[450px] lg:min-h-screen">
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

        {/* MIDDLE CONTENT: TITLE & CHECKLIST */}
        <div className="relative z-10 my-auto py-8 max-w-lg space-y-8">
          <h1 className="font-sans font-bold text-3xl sm:text-4xl text-white leading-tight text-balance">
            Mulai Perjalanan Bisnis Anda Bersama Cashora
          </h1>

          <ul className="space-y-4 font-body text-xs sm:text-sm text-white/80">
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00C897]/20 text-[#00C897] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Coba gratis 14 hari tanpa kartu kredit</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00C897]/20 text-[#00C897] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Setup dalam 5 menit, langsung bisa jalan</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00C897]/20 text-[#00C897] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Dukungan onboarding dari tim kami</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00C897]/20 text-[#00C897] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Batalkan kapan saja, tanpa penalti</span>
            </li>
          </ul>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="relative z-10 text-xs text-white/40 font-body">
          © 2026 Cashora · halo@cashora.id
        </div>
      </div>

      {/* RIGHT PANEL: FORM (50% WIDTH ON LG SCREEN) */}
      <div className="lg:w-1/2 p-8 lg:p-14 flex items-center justify-center min-h-[550px]">
        <div className="w-full max-w-md space-y-8">
          {/* STEP WIZARD INDICATOR */}
          <div className="flex items-center justify-center gap-4 text-xs font-semibold font-body mb-6">
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs font-sans ${
                  step >= 1 ? "bg-[#0A2540] text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                1
              </div>
              <span className={step >= 1 ? "text-[#0A2540] font-bold" : "text-gray-400"}>Akun</span>
            </div>

            <div className="w-12 h-px bg-gray-200" />

            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs font-sans ${
                  step >= 2 ? "bg-[#0A2540] text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
              <span className={step >= 2 ? "text-[#0A2540] font-bold" : "text-gray-400"}>Bisnis</span>
            </div>
          </div>

          {/* HEADER TITLE & SUBTITLE */}
          <div>
            <h2 className="font-sans font-bold text-3xl text-[#0A2540] mb-1">
              Buat Akun Anda
            </h2>
            <p className="text-xs text-gray-500 font-body">
              Daftar gratis, tanpa kartu kredit.
            </p>
          </div>

          {/* ERROR ALERT */}
          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-body">
              {errorMessage}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleNext} className="space-y-4">
            {step === 1 ? (
              <>
                {/* NAMA LENGKAP */}
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-sans">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama lengkap Anda"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#0A2540] font-body focus:outline-none focus:border-[#00C897] transition-colors shadow-sm"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-sans">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@bisnis.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#0A2540] font-body focus:outline-none focus:border-[#00C897] transition-colors shadow-sm"
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-sans">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Min. 8 karakter"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#0A2540] font-body focus:outline-none focus:border-[#00C897] transition-colors shadow-sm pr-11"
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

                {/* KONFIRMASI PASSWORD */}
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-sans">
                    Konfirmasi Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      placeholder="Ulangi password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#0A2540] font-body focus:outline-none focus:border-[#00C897] transition-colors shadow-sm pr-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* STEP 2: BISNIS */}
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-sans">
                    Nama Usaha / Toko <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Kopi Kenangan Mantan"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#ffffff] rounded-xl border border-gray-200 text-sm text-[#0A2540] font-body focus:outline-none focus:border-[#00C897] transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1.5 font-sans">
                    Jenis Bisnis
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#0A2540] font-body focus:outline-none focus:border-[#00C897] transition-colors shadow-sm"
                  >
                    <option value="F&B / Restoran">F&B / Restoran & Kafe</option>
                    <option value="Toko Ritel & Mini Market">Toko Ritel & Mini Market</option>
                    <option value="Warung & Kelontong">Warung & Kelontong</option>
                    <option value="Jasa / Service">Jasa / Salon / Laundry</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </>
            )}

            {/* SUBMIT BUTTON */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-[#00C897] text-[#0A2540] font-bold rounded-xl text-sm hover:bg-[#00a87e] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00C897]/20 font-body disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Memproses...</span>
                  </>
                ) : (
                  <>
                    <span>{step === 1 ? "Lanjut" : "Buat Akun Sekarang"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* LOGIN LINK */}
          <p className="text-xs text-gray-500 font-body text-center">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-[#00C897] font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
