import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, MessageCircle, Link2, Share2 } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Platform POS modern untuk semua skala bisnis Indonesia. Offline-first, aman, dan tanpa biaya per cabang.
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#00C897]" />
                <span>Jl. Sudirman Kav. 52-53, Jakarta Selatan 12190</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-[#00C897]" />
                <a href="mailto:halo@cashora.id" className="hover:text-white transition-colors">
                  halo@cashora.id
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[#00C897]" />
                <a href="tel:+6221500123" className="hover:text-white transition-colors">
                  +62 21 500-123
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#00C897] hover:text-[#0A2540] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#00C897] hover:text-[#0A2540] transition-colors"
              >
                <Link2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Sosial"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#00C897] hover:text-[#0A2540] transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="font-sans font-semibold text-sm mb-4 text-white">Produk</h3>
            <ul className="space-y-2.5">
              <li>
                <Link className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="/layanan">
                  Fitur Kasir & POS
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="/layanan">
                  Manajemen Restoran
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="/layanan">
                  Pembayaran QRIS
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="/layanan">
                  Inventori & Stok
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="/layanan">
                  Laporan & Analitik
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="font-sans font-semibold text-sm mb-4 text-white">Perusahaan</h3>
            <ul className="space-y-2.5">
              <li>
                <Link className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="/tentang">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="/blog">
                  Blog & Wawasan
                </Link>
              </li>
              <li>
                <a className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="#">
                  Karir
                </a>
              </li>
              <li>
                <a className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="#">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="font-sans font-semibold text-sm mb-4 text-white">Dukungan</h3>
            <ul className="space-y-2.5">
              <li>
                <Link className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="/demo">
                  Demo Interaktif
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="/harga">
                  Harga & Paket
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="/kontak">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <a className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="#">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a className="text-sm text-white/60 hover:text-[#00C897] transition-colors" href="#">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Badges Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-xs text-white/40 mb-3 uppercase tracking-wider font-semibold">Sertifikasi & Kepatuhan</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full border border-white/20 text-white/70 bg-white/5">
              Teregistrasi BI
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full border border-white/20 text-white/70 bg-white/5">
              PCI-DSS v4.0
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full border border-white/20 text-white/70 bg-white/5">
              CREST Audited
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full border border-white/20 text-white/70 bg-white/5">
              SNAP BI / QRIS TUNTAS
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full border border-white/20 text-white/70 bg-white/5">
              UU PDP Compliant
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">© 2026 Cashora. Hak cipta dilindungi.</p>
          <p className="text-xs text-white/40">
            Dibuat dengan <span className="text-[#00C897]">♥</span> di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};
