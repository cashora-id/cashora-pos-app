# 🎨 Cashora Design System — Color Tokens & Palette Guidelines

Dokumen ini berisi panduan standar **Design System Tokens & Color Palette** resmi untuk aplikasi web Cashora. Standar ini dibuat agar seluruh elemen UI (seperti *Button, Toast Notification, Badge, Alert, Form Field, dan Navigation*) memiliki warna yang **100% konsisten**, elegan, dan mudah dipelihara.

---

## 📌 1. Brand Core Colors (Warna Utama Brand)

Warna identitas resmi Cashora yang digunakan pada elemen kunci seperti Navbar, Sidebar, Card utama, dan tombol Call-To-Action (CTA).

| Token Name | Hex Code | Utility Class | Penggunaan Utama |
|---|---|---|---|
| **`brand-navy`** | `#0A2540` | `bg-brand-navy`, `text-brand-navy` | Header, Sidebar, Text Judul (Heading), Dark Panel |
| **`brand-navy-light`** | `#12365C` | `bg-brand-navy-light` | State hover untuk elemen navy & surface sekunder |
| **`brand-navy-dark`** | `#06182B` | `bg-brand-navy-dark` | Kontras latar belakang super gelap |
| **`brand-emerald`** | `#00C897` | `bg-brand-emerald`, `text-brand-emerald` | Tombol CTA utama, Badge aksen, status online |
| **`brand-emerald-dark`** | `#00A87E` | `bg-brand-emerald-dark` | State hover tombol CTA utama |
| **`brand-emerald-light`** | `#E6F9F4` | `bg-brand-emerald-light` | Latar belakang badge aksen emerald |
| **`brand-bg`** | `#F5F7FA` | `bg-brand-bg` | Latar belakang (background) global aplikasi |

---

## 🚥 2. Semantic State Colors (Toast, Alert, & Status)

Warna semantik yang digunakan untuk mengomunikasikan status sistem, notifikasi *toast*, pesan *alert*, dan label *badge*.

### 🟩 **A. Success (Berhasil / Lunas / Aktif)**
- **Base Color**: `#10B981` (`bg-state-success`)
- **Background**: `#ECFDF5` (`bg-state-success-bg`)
- **Border**: `#A7F3D0` (`border-state-success-border`)
- **Text**: `#065F46` (`text-state-success-text`)

### 🟥 **B. Danger / Error (Gagal / Gagal Bayar / Terhapus)**
- **Base Color**: `#EF4444` (`bg-state-danger`)
- **Background**: `#FEF2F2` (`bg-state-danger-bg`)
- **Border**: `#FECACA` (`border-state-danger-border`)
- **Text**: `#991B1B` (`text-state-danger-text`)

### 🟨 **C. Warning (Peringatan / Stok Menipis / Pending)**
- **Base Color**: `#F59E0B` (`bg-state-warning`)
- **Background**: `#FFFBEB` (`bg-state-warning-bg`)
- **Border**: `#FDE68A` (`border-state-warning-border`)
- **Text**: `#92400E` (`text-state-warning-text`)

### 🟦 **D. Info (Informasi / Notifikasi Sistem)**
- **Base Color**: `#3B82F6` (`bg-state-info`)
- **Background**: `#EFF6FF` (`bg-state-info-bg`)
- **Border**: `#BFDBFE` (`border-state-info-border`)
- **Text**: `#1E40AF` (`text-state-info-text`)

---

## 🛠️ 3. Penggunaan Komponen UI Terstandarisasi

### 🍞 **A. Toast Notification Component**
Komponen `Toast` dapat diimpor langsung dari `@/components/ui/Toast`:

```tsx
import { Toast } from "@/components/ui/Toast";

// Toast Sukses
<Toast 
  variant="success" 
  title="Transaksi Berhasil" 
  description="Pembayaran QRIS senilai Rp 150.000 telah diterima." 
/>

// Toast Gagal
<Toast 
  variant="danger" 
  title="Gagal Menghubungkan Printer" 
  description="Pastikan koneksi Bluetooth/LAN printer kasir aktif." 
/>
```

Atau menggunakan Utility Classes di CSS:
```html
<div className="toast-success">
  <p>Transaksi berhasil disimpan!</p>
</div>
```

---

### 🏷️ **B. Badge Component**
Komponen `Badge` dapat diimpor langsung dari `@/components/ui/Badge`:

```tsx
import { Badge } from "@/components/ui/Badge";

<Badge variant="emerald">Aktif</Badge>
<Badge variant="success">Lunas</Badge>
<Badge variant="warning">Stok Menipis</Badge>
<Badge variant="danger">Dibatalkan</Badge>
```

---

### 🔘 **C. Button Component**
Gunakan variasi warna resmi untuk tombol:

```tsx
// Primary Emerald CTA Button
<button className="bg-brand-emerald text-brand-navy hover:bg-brand-emerald-dark font-bold px-4 py-2.5 rounded-xl shadow-md shadow-brand-emerald/20 transition-all font-body">
  Tambah Produk Baru
</button>

// Secondary Navy Button
<button className="bg-brand-navy text-white hover:bg-brand-navy-light font-bold px-4 py-2.5 rounded-xl transition-all font-body">
  Simpan Perubahan
</button>

// Outline Neutral Button
<button className="bg-white border border-gray-200 text-brand-navy hover:bg-gray-50 font-semibold px-4 py-2.5 rounded-xl transition-all font-body">
  Batal
</button>
```

---

## 📁 4. Berkas Konfigurasi Utama

- 🎨 **Tailwind Configuration**: [`apps/web/tailwind.config.ts`](file:///d:/Kerja/Project/Cashora/cashora-pos-app/apps/web/tailwind.config.ts)
- 🌐 **Global CSS Variables**: [`apps/web/src/app/globals.css`](file:///d:/Kerja/Project/Cashora/cashora-pos-app/apps/web/src/app/globals.css)
- 🍞 **Toast Component**: [`apps/web/src/components/ui/Toast.tsx`](file:///d:/Kerja/Project/Cashora/cashora-pos-app/apps/web/src/components/ui/Toast.tsx)
- 🏷️ **Badge Component**: [`apps/web/src/components/ui/Badge.tsx`](file:///d:/Kerja/Project/Cashora/cashora-pos-app/apps/web/src/components/ui/Badge.tsx)
