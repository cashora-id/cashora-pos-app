# 🚀 Vercel Deployment & Pipeline Setup Guide — Cashora Web

Dokumen ini berisi panduan resmi konfigurasi **Vercel Monorepo Pipeline** untuk aplikasi **Cashora POS Web Frontend (`apps/web`)**.

---

## 📌 1. Skema Lingkungan Deployment (Deployment Environment)

| Environment | Trigger Git | Vercel Deployment Type | Domain / URL Output |
|---|---|---|---|
| 🟡 **Preview (Per-Tiket / PR)** | Push / Pull Request branch (misal: `feature/SCRUM-71`) | **Automatic Preview Deployment** | `https://cashora-pos-app-git-[branch]-cashora-id.vercel.app` |
| 🟢 **Production (Rilis Utama)** | Merge Pull Request ke branch `main` | **Automatic Production Release** | `https://cashora.id` / `https://cashora-pos-app.vercel.app` |

---

## ⚙️ 2. Pengaturan di Vercel Dashboard (Project Settings)

Buka **[Vercel Dashboard](https://vercel.com/dashboard)** ➔ Select Project **Cashora** ➔ **Settings**:

### A. General & Build Settings
- **Framework Preset**: `Next.js`
- **Root Directory**: `apps/web`
- **Build Command**: `pnpm --filter cashora-web run build`
- **Install Command**: `pnpm install`
- **Output Directory**: `.next`

### B. Environment Variables (Variabel Lingkungan)
Tambahkan variabel lingkungan berikut pada menu **Settings ➔ Environment Variables**:

| Variable Key | Target Environment | Value Contoh |
|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Production & Preview | `https://api.cashora.id/api/v1` |
| `NEXT_PUBLIC_APP_ENV` | Production | `production` |
| `NEXT_PUBLIC_APP_ENV` | Preview | `staging` |

### C. Git Repository Integration
- **Connected Repository**: `cashora-id/cashora-pos-app`
- **Production Branch**: `main`
- **Automatic PR Previews**: `Enabled for all Pull Requests`

---

## 🧪 3. Alur Pengujian & Review PR (Pull Request Workflow)

1. Pengembang membuat branch fitur tiket (contoh: `feature/SCRUM-71-owner-dashboard`).
2. Setelah pengerjaan selesai, pengembang membuat **Pull Request (PR)** dari branch tiket ke `main`.
3. Vercel Bot akan secara otomatis menyuntikkan **URL Preview** pada kolom komentar PR.
4. Tim QA/Reviewer dapat membuka URL Preview tersebut untuk menguji tampilan secara live online.
5. Setelah di-approve, tekan **Merge pull request**. Vercel akan otomatis merilis ke **Production Domain**.
