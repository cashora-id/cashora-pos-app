"use client";

import React, { useState } from "react";
import {
  X,
  Check,
  Building,
  Utensils,
  ShoppingBag,
  Coffee,
  Truck,
  Shirt,
  Zap,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Calendar as CalendarIcon,
  QrCode,
  Wallet,
  CreditCard,
  Mail,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export interface NewStoreData {
  name: string;
  category: string;
  businessType: string;
  city: string;
  timezone: string;
  address: string;
  startDate: string;
  taxSetting: string;
  serviceCharge: boolean;
  posStatus: "active" | "maintenance";
  qrisSetup: string;
  paymentMethods: string[];
  addManagerNow: boolean;
}

interface RegisterStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStoreCreated: (newStore: NewStoreData) => void;
}

export function RegisterStoreModal({
  isOpen,
  onClose,
  onStoreCreated,
}: RegisterStoreModalProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Form State
  const [formData, setFormData] = useState<NewStoreData>({
    name: "",
    category: "Restoran & Kuliner",
    businessType: "Restoran",
    city: "Surabaya",
    timezone: "WIB (UTC+7) — Asia/Jakarta",
    address: "",
    startDate: "2026-08-30",
    taxSetting: "Belum diterapkan",
    serviceCharge: false,
    posStatus: "active",
    qrisSetup: "Atur nanti",
    paymentMethods: ["Tunai"],
    addManagerNow: false,
  });

  const [confirmedCheckbox, setConfirmedCheckbox] = useState(false);
  const [stepError, setStepError] = useState("");

  if (!isOpen) return null;

  const categories = [
    { id: "culinary", name: "Restoran & Kuliner", desc: "Restoran, warung makan, katering, dan usaha makanan.", icon: Utensils },
    { id: "retail", name: "Retail & Toko Umum", desc: "Toko yang melayani penjualan grosir, eceran, atau keduanya.", icon: ShoppingBag },
    { id: "coffee", name: "Coffee Shop & Bakery", desc: "Coffee shop, bakery, dessert bar, dan minuman siap saji.", icon: Coffee },
    { id: "material", name: "Material & Bangunan", desc: "Distributor, supplier, dan toko material bangunan.", icon: Building },
    { id: "distributor", name: "Distributor & Perdagangan", desc: "Perdagangan besar, distribusi, supplier, dan B2B.", icon: Truck },
    { id: "fashion", name: "Fashion & Lifestyle", desc: "Produk fashion, aksesoris, dan kebutuhan gaya hidup.", icon: Shirt },
    { id: "electronics", name: "Elektronik & Teknologi", desc: "Penjualan perangkat elektronik, gadget, dan aksesori.", icon: Zap },
    { id: "health", name: "Kesehatan & Kecantikan", desc: "Apotek, klinik, salon, spa, dan produk perawatan.", icon: ShieldCheck },
    { id: "automotive", name: "Otomotif", desc: "Penjualan kendaraan, suku cadang, dan jasa otomotif.", icon: Wrench },
  ];

  const validateStep = () => {
    setStepError("");
    if (currentStep === 1) {
      if (!formData.name.trim()) {
        setStepError("Mohon isi nama toko atau outlet Anda.");
        return false;
      }
    }
    if (currentStep === 2) {
      if (!formData.city.trim()) {
        setStepError("Mohon isi kota atau kabupaten outlet.");
        return false;
      }
      if (!formData.address.trim()) {
        setStepError("Alamat lengkap outlet bersifat mandatori. Mohon isi alamat lengkap Anda.");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as any);
    } else {
      // Create store
      setIsSuccess(true);
    }
  };

  const handleBack = () => {
    setStepError("");
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as any);
    } else {
      onClose();
    }
  };

  const handleFinishSuccess = () => {
    onStoreCreated(formData);
    setIsSuccess(false);
    setCurrentStep(1);
    onClose();
  };

  const togglePaymentMethod = (method: string) => {
    if (formData.paymentMethods.includes(method)) {
      if (formData.paymentMethods.length === 1) return; // keep at least 1
      setFormData({
        ...formData,
        paymentMethods: formData.paymentMethods.filter((m) => m !== method),
      });
    } else {
      setFormData({
        ...formData,
        paymentMethods: [...formData.paymentMethods, method],
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0A2540]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200 font-body">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh] my-auto">
        {/* MODAL HEADER */}
        <div className="bg-gradient-to-r from-[#0A2540] to-[#0d3154] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-[#00C897] flex items-center justify-center font-bold">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-[#00C897] uppercase font-sans">
                PORTAL OWNER CASHORA
              </p>
              <h2 className="text-xl font-extrabold tracking-tight font-sans">
                Daftarkan Toko Baru
              </h2>
            </div>
          </div>
          <p className="text-xs text-slate-300 ml-12">
            Buat profil outlet baru dengan beberapa langkah sederhana.
          </p>

          {/* STEPPER PROGRESS BAR */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
            {[
              { num: 1, title: "Identitas", sub: "Nama & kategori" },
              { num: 2, title: "Lokasi", sub: "Alamat & waktu" },
              { num: 3, title: "POS", sub: "Pajak & operasional" },
              { num: 4, title: "Pembayaran", sub: "QRIS & manager" },
              { num: 5, title: "Tinjau", sub: "Konfirmasi" },
            ].map((st, idx) => {
              const isDone = currentStep > st.num || isSuccess;
              const isCurrent = currentStep === st.num && !isSuccess;
              return (
                <div key={st.num} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      isDone
                        ? "bg-[#00C897] text-[#0A2540]"
                        : isCurrent
                        ? "bg-[#0A2540] ring-2 ring-[#00C897] text-[#00C897]"
                        : "bg-white/10 text-slate-400"
                    }`}
                  >
                    {isDone ? <Check className="w-4 h-4" /> : st.num}
                  </div>
                  <div className="hidden sm:block">
                    <p className={`font-bold leading-none font-sans ${isCurrent ? "text-white" : "text-slate-300"}`}>
                      {st.title}
                    </p>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      {st.sub}
                    </p>
                  </div>
                  {idx < 4 && <div className="h-0.5 w-6 sm:w-10 bg-white/10 mx-1 hidden md:block" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {stepError && (
            <div className="mb-4 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold animate-in fade-in">
              ⚠️ {stepError}
            </div>
          )}

          {isSuccess ? (
            /* SUCCESS STATE DIALOG (GAMBAR 2) */
            <div className="py-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-200">
              <div className="w-20 h-20 rounded-full bg-emerald-100/70 text-[#00C897] flex items-center justify-center mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0A2540] mb-2 font-sans">
                Toko berhasil dibuat
              </h3>
              <p className="text-sm text-slate-600 max-w-md mb-8 leading-relaxed">
                <span className="font-bold text-[#0A2540]">{formData.name || "kopi"}</span> telah aktif di portal owner. Lengkapi produk, perangkat kasir, staff, dan pembayaran pada tahap berikutnya.
              </p>
              <Button
                onClick={handleFinishSuccess}
                className="bg-[#0A2540] text-white hover:bg-[#0A2540]/90 px-8 py-3 rounded-2xl text-xs font-extrabold shadow-md hover:shadow-lg transition-all"
              >
                Tutup
              </Button>
            </div>
          ) : (
            <>
              {/* STEP 1: IDENTITAS */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#00A87E] tracking-widest uppercase font-sans">
                      LANGKAH 1 DARI 5
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0A2540] mt-1 font-sans">
                      Mulai dari identitas usaha
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Berikan nama dan kategori agar outlet mudah dikenali di laporan serta kasir POS.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-2 font-sans">
                      Nama toko atau outlet <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Kopi Senja Gubeng"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50 shadow-sm"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      Nama ini tampil pada laporan, kasir POS, dan pengaturan outlet.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-3 font-sans">
                      Kategori usaha <span className="text-rose-500">*</span>
                    </label>

                    {/* CATEGORY SELECTION WITH SMOOTH ANIMATION */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto p-1">
                      {categories.map((cat) => {
                        const IconComp = cat.icon;
                        const isSelected = formData.category === cat.name;
                        return (
                          <motion.div
                            key={cat.id}
                            layout
                            onClick={() =>
                              setFormData({
                                ...formData,
                                category: cat.name,
                                businessType: cat.name.split("&")[0].trim(),
                              })
                            }
                            className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 ease-out flex items-start gap-3 relative ${
                              isSelected
                                ? "border-[#00C897] bg-emerald-50/50 ring-2 ring-[#00C897]/30 shadow-md scale-[1.02]"
                                : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/60 opacity-90 hover:opacity-100"
                            }`}
                          >
                            <div
                              className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                                isSelected
                                  ? "bg-[#0A2540] text-[#00C897]"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              <IconComp className="w-4 h-4" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-[#0A2540] font-sans">
                                  {cat.name}
                                </p>
                                {isSelected && (
                                  <span className="w-4 h-4 rounded-full bg-[#00C897] text-[#0A2540] flex items-center justify-center text-[10px] font-bold">
                                    ✓
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
                                {cat.desc}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: LOKASI & WAKTU */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#00A87E] tracking-widest uppercase font-sans">
                      LANGKAH 2 DARI 5
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0A2540] mt-1 font-sans">
                      Atur lokasi dan waktu operasional
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Data ini membantu membedakan outlet, laporan, dan jadwal operasional di kemudian hari.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-2 font-sans">
                        Kota atau kabupaten <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Contoh: Surabaya"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-2 font-sans">
                        Zona waktu <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.timezone}
                        onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50"
                      >
                        <option value="WIB (UTC+7) — Asia/Jakarta">WIB (UTC+7) — Asia/Jakarta</option>
                        <option value="WITA (UTC+8) — Asia/Makassar">WITA (UTC+8) — Asia/Makassar</option>
                        <option value="WIT (UTC+9) — Asia/Jayapura">WIT (UTC+9) — Asia/Jayapura</option>
                      </select>
                    </div>
                  </div>

                  {/* MANDATORY ADDRESS FIELD */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-2 font-sans">
                      Alamat lengkap outlet <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Nama jalan, nomor, kecamatan, dan patokan"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50"
                    />
                  </div>

                  {/* DATEPICKER WITH POPOVER */}
                  <div className="relative">
                    <label className="block text-xs font-bold text-[#0A2540] mb-2 font-sans">
                      Tanggal mulai operasional <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        readOnly
                        value={formData.startDate}
                        onClick={() => setShowDatePicker(!showDatePicker)}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-800 cursor-pointer pr-10 focus:outline-none focus:ring-2 focus:ring-[#00C897]/50"
                      />
                      <CalendarIcon className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    {showDatePicker && (
                      <div className="absolute z-50 left-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 w-72 animate-in fade-in duration-150">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-bold text-[#0A2540] font-sans">August 2026</span>
                          <button
                            onClick={() => setShowDatePicker(false)}
                            className="text-xs text-[#00A87E] font-bold"
                          >
                            Today
                          </button>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400 mb-2 font-sans">
                          <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-xs">
                          {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                            <button
                              key={d}
                              onClick={() => {
                                setFormData({ ...formData, startDate: `2026-08-${d < 10 ? "0" + d : d}` });
                                setShowDatePicker(false);
                              }}
                              className={`p-1.5 rounded-lg text-xs font-semibold ${
                                d === 30
                                  ? "bg-[#3B82F6] text-white font-bold"
                                  : "hover:bg-slate-100 text-slate-700"
                              }`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    <p className="text-[11px] text-slate-400 mt-1">
                      Gunakan tanggal rencana buka. Pengaturan dapat dilanjutkan setelah toko dibuat.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 3: KONFIGURASI POS */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#00A87E] tracking-widest uppercase font-sans">
                      LANGKAH 3 DARI 5
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0A2540] mt-1 font-sans">
                      Siapkan konfigurasi POS
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Mulai dari pengaturan sederhana. Detail pajak dan biaya dapat disesuaikan kembali oleh Owner.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Mata uang transaksi</span>
                    <span className="text-xs font-extrabold text-[#0A2540] bg-white px-3 py-1.5 rounded-xl border border-slate-200 font-sans">
                      Rupiah Indonesia (IDR)
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-3 font-sans">
                      Pajak pada transaksi <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { title: "Belum diterapkan", desc: "Atur pajak pada tahap berikutnya." },
                        { title: "Termasuk harga", desc: "Harga produk sudah termasuk pajak." },
                        { title: "Ditambahkan", desc: "Pajak ditambahkan saat pembayaran." },
                      ].map((tax) => (
                        <div
                          key={tax.title}
                          onClick={() => setFormData({ ...formData, taxSetting: tax.title })}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            formData.taxSetting === tax.title
                              ? "border-[#00C897] bg-emerald-50/50 ring-2 ring-[#00C897]/30"
                              : "border-slate-200 bg-white hover:border-slate-300"
                          }`}
                        >
                          <p className="text-xs font-bold text-[#0A2540] font-sans">{tax.title}</p>
                          <p className="text-[10px] text-slate-500 mt-1">{tax.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-3 font-sans">
                      Status setelah dibuat <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div
                        onClick={() => setFormData({ ...formData, posStatus: "active" })}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          formData.posStatus === "active"
                            ? "border-[#00C897] bg-emerald-50/50 ring-2 ring-[#00C897]/30"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <p className="text-xs font-bold text-[#0A2540] font-sans">Aktifkan POS</p>
                        <p className="text-[10px] text-slate-500 mt-1">Toko siap dilanjutkan ke setup POS.</p>
                      </div>
                      <div
                        onClick={() => setFormData({ ...formData, posStatus: "maintenance" })}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          formData.posStatus === "maintenance"
                            ? "border-[#00C897] bg-emerald-50/50 ring-2 ring-[#00C897]/30"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <p className="text-xs font-bold text-[#0A2540] font-sans">Simpan untuk nanti</p>
                        <p className="text-[10px] text-slate-500 mt-1">Toko dibuat sebagai setup tertunda.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: PEMBAYARAN (EXACT MOCKUP SCREENSHOT 3 MATCH) */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#00A87E] tracking-widest uppercase font-sans">
                      LANGKAH 4 DARI 5
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0A2540] mt-1 font-sans">
                      Siapkan pembayaran dan tim
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Pilih niat setup awal. Cashora tidak meminta kredensial bank atau rahasia QRIS di tahap ini.
                    </p>
                  </div>

                  {/* SETUP QRIS */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-3 font-sans">
                      Setup QRIS <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div
                        onClick={() => setFormData({ ...formData, qrisSetup: "Atur nanti" })}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          formData.qrisSetup === "Atur nanti"
                            ? "border-[#00C897] bg-emerald-50/50 ring-2 ring-[#00C897]/30"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-[#0A2540] font-sans">Atur nanti</p>
                          {formData.qrisSetup === "Atur nanti" && (
                            <span className="w-4 h-4 rounded-full bg-[#00C897] text-[#0A2540] flex items-center justify-center text-[10px] font-bold">
                              ✓
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">
                          Selesaikan pengajuan QRIS setelah profil toko dibuat.
                        </p>
                      </div>

                      <div
                        onClick={() => setFormData({ ...formData, qrisSetup: "Mulai pengajuan" })}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          formData.qrisSetup === "Mulai pengajuan"
                            ? "border-[#00C897] bg-emerald-50/50 ring-2 ring-[#00C897]/30"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-[#0A2540] font-sans">Mulai pengajuan</p>
                          {formData.qrisSetup === "Mulai pengajuan" && (
                            <span className="w-4 h-4 rounded-full bg-[#00C897] text-[#0A2540] flex items-center justify-center text-[10px] font-bold">
                              ✓
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">
                          Simpan sebagai task onboarding pembayaran.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* METODE PEMBAYARAN YANG DISIAPKAN */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-3 font-sans">
                      Metode pembayaran yang disiapkan <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { name: "Tunai", desc: "Pembayaran cash", icon: Wallet },
                        { name: "QRIS", desc: "Pembayaran digital", icon: QrCode },
                        { name: "Kartu", desc: "Debit/kredit", icon: CreditCard },
                      ].map((m) => {
                        const isChecked = formData.paymentMethods.includes(m.name);
                        return (
                          <div
                            key={m.name}
                            onClick={() => togglePaymentMethod(m.name)}
                            className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                              isChecked
                                ? "border-[#00C897] bg-emerald-50/50 ring-2 ring-[#00C897]/30"
                                : "border-slate-200 bg-white hover:border-slate-300"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}}
                              className="rounded border-slate-300 text-[#00C897] focus:ring-[#00C897]"
                            />
                            <div>
                              <p className="text-xs font-bold text-[#0A2540] font-sans">{m.name}</p>
                              <p className="text-[10px] text-slate-400">{m.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* TAMBAHKAN MANAGER OUTLET SEKARANG */}
                  <label className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50/50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.addManagerNow}
                      onChange={(e) => setFormData({ ...formData, addManagerNow: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-[#00C897] focus:ring-[#00C897]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#0A2540] font-sans">
                        Tambahkan manager outlet sekarang
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Undangan aktual dapat dilakukan dari pengaturan akses setelah toko dibuat.
                      </p>
                    </div>
                  </label>
                </div>
              )}

              {/* STEP 5: TINJAU */}
              {currentStep === 5 && (
                <div className="space-y-5">
                  <div>
                    <span className="text-xs font-bold text-[#00A87E] tracking-widest uppercase font-sans">
                      LANGKAH 5 DARI 5
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0A2540] mt-1 font-sans">
                      Tinjau sebelum membuat toko
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Pastikan informasi dasar sudah benar. Anda dapat mengubah bagian mana pun sebelum konfirmasi.
                    </p>
                  </div>

                  {/* REVIEW SECTIONS CARDS */}
                  <div className="space-y-3">
                    {/* 1. Identitas Usaha */}
                    <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold text-[#0A2540] font-sans">Identitas usaha</p>
                        <div className="grid grid-cols-3 gap-6 mt-2 text-xs">
                          <div><span className="text-[10px] uppercase text-slate-400 font-bold block">NAMA</span><span className="font-semibold text-slate-800">{formData.name || "kopi"}</span></div>
                          <div><span className="text-[10px] uppercase text-slate-400 font-bold block">KATEGORI</span><span className="font-semibold text-slate-800">{formData.category}</span></div>
                          <div><span className="text-[10px] uppercase text-slate-400 font-bold block">JENIS</span><span className="font-semibold text-slate-800">{formData.businessType}</span></div>
                        </div>
                      </div>
                      <button onClick={() => setCurrentStep(1)} className="text-xs font-bold text-[#00A87E] hover:underline font-sans">
                        Ubah
                      </button>
                    </div>

                    {/* 2. Lokasi & Operasional */}
                    <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold text-[#0A2540] font-sans">Lokasi & operasional</p>
                        <div className="grid grid-cols-3 gap-6 mt-2 text-xs">
                          <div><span className="text-[10px] uppercase text-slate-400 font-bold block">LOKASI</span><span className="font-semibold text-slate-800">{formData.city}</span></div>
                          <div><span className="text-[10px] uppercase text-slate-400 font-bold block">ALAMAT</span><span className="font-semibold text-slate-800 truncate max-w-[150px] block">{formData.address || "Jln Hayamwuruk No1 Ngronggot"}</span></div>
                          <div><span className="text-[10px] uppercase text-slate-400 font-bold block">MULAI</span><span className="font-semibold text-slate-800">{formData.startDate}</span></div>
                        </div>
                      </div>
                      <button onClick={() => setCurrentStep(2)} className="text-xs font-bold text-[#00A87E] hover:underline font-sans">
                        Ubah
                      </button>
                    </div>

                    {/* 3. Konfigurasi POS */}
                    <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold text-[#0A2540] font-sans">Konfigurasi POS</p>
                        <div className="grid grid-cols-3 gap-6 mt-2 text-xs">
                          <div><span className="text-[10px] uppercase text-slate-400 font-bold block">PAJAK</span><span className="font-semibold text-slate-800">{formData.taxSetting}</span></div>
                          <div><span className="text-[10px] uppercase text-slate-400 font-bold block">SERVICE CHARGE</span><span className="font-semibold text-slate-800">{formData.serviceCharge ? "Diaktifkan" : "Tidak diaktifkan"}</span></div>
                          <div><span className="text-[10px] uppercase text-slate-400 font-bold block">STATUS</span><span className="font-semibold text-slate-800">{formData.posStatus === "active" ? "Aktifkan POS" : "Maintenance"}</span></div>
                        </div>
                      </div>
                      <button onClick={() => setCurrentStep(3)} className="text-xs font-bold text-[#00A87E] hover:underline font-sans">
                        Ubah
                      </button>
                    </div>

                    {/* 4. Pembayaran & Tim */}
                    <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold text-[#0A2540] font-sans">Pembayaran & tim</p>
                        <div className="grid grid-cols-3 gap-6 mt-2 text-xs">
                          <div><span className="text-[10px] uppercase text-slate-400 font-bold block">QRIS</span><span className="font-semibold text-slate-800">{formData.qrisSetup}</span></div>
                          <div><span className="text-[10px] uppercase text-slate-400 font-bold block">METODE</span><span className="font-semibold text-slate-800">{formData.paymentMethods.join(", ")}</span></div>
                          <div><span className="text-[10px] uppercase text-slate-400 font-bold block">MANAGER</span><span className="font-semibold text-slate-800">{formData.addManagerNow ? "Diundang" : "Atur nanti"}</span></div>
                        </div>
                      </div>
                      <button onClick={() => setCurrentStep(4)} className="text-xs font-bold text-[#00A87E] hover:underline font-sans">
                        Ubah
                      </button>
                    </div>
                  </div>

                  {/* CHECKBOX CONFIRMATION */}
                  <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 bg-white cursor-pointer mt-4">
                    <input
                      type="checkbox"
                      checked={confirmedCheckbox}
                      onChange={(e) => setConfirmedCheckbox(e.target.checked)}
                      className="mt-0.5 rounded border-slate-300 text-[#00C897] focus:ring-[#00C897]"
                    />
                    <span className="text-xs text-slate-600 font-medium leading-relaxed">
                      Saya memastikan informasi dasar toko ini benar dan memahami bahwa pengaturan lanjutan dapat diselesaikan setelah toko dibuat.
                    </span>
                  </label>
                </div>
              )}
            </>
          )}
        </div>

        {/* MODAL FOOTER BUTTONS */}
        {!isSuccess && (
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={handleBack}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors font-sans"
            >
              {currentStep === 1 ? "← Batal" : "← Kembali"}
            </button>

            <Button
              onClick={handleNext}
              disabled={currentStep === 5 && !confirmedCheckbox}
              className={`px-6 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all ${
                currentStep === 5
                  ? "bg-[#00C897] text-[#0A2540] hover:bg-[#00C897]/90 shadow-md"
                  : "bg-[#0A2540] text-white hover:bg-[#0A2540]/90"
              }`}
            >
              <span>{currentStep === 5 ? "Buat & Aktifkan Toko" : "Lanjut"}</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
