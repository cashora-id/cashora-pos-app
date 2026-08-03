# Cashora — Documentation & Setup Guide

Dokumen ini berisi rangkuman pengenalan arsitektur monorepo **Cashora**, status audit lingkungan pengembangan lokal (Windows), serta panduan langkah setup yang telah dan perlu dilakukan.

---

## 1. 📌 Overview Arsitektur Cashora

**Cashora** adalah platform *Point of Sale* (POS) tingkat enterprise multi-tenant & *offline-first* yang dirancang untuk ekosistem FinTech Indonesia.

### Struktur Monorepo (`cashora-pos-app/`)

```
cashora-pos-app/
├── apps/
│   ├── backend/          # Kotlin + Spring Boot — Evolutionary Modular Monolith
│   ├── mobile/           # Flutter — Offline-First POS Agent Application
│   └── web/              # Next.js 15 — Admin & Analytics Dashboard
├── packages/
│   └── api-contracts/    # OpenAPI specs, Avro schemas, Protobuf definitions
├── infra/
│   ├── compose/          # Docker Compose environment overrides
│   ├── docker/           # Domain-specific Dockerfiles
│   ├── kafka/            # Topic definitions and schema registry config
│   ├── kubernetes/       # Helm charts and Kustomize manifests
│   ├── terraform/        # Cloud infrastructure IaC
│   └── vault/            # HashiCorp Vault policies
└── tooling/              # Scripts, codegen, & CI workflows
```

---

## 2. ⚡ Langkah Setup yang Telah Dilakukan

### Step 1: Inisialisasi Environment Variables (`.env`)
File lingkungan lokal [`.env`](file:///d:/Kerja/Project/Cashora/cashora-pos-app/.env) telah dibuat dari template [`.env.example`](file:///d:/Kerja/Project/Cashora/cashora-pos-app/.env.example).

- **Lokasi File**: `cashora-pos-app/.env`
- **Konfigurasi Utama**:
  - `APP_ENV=local`
  - `POSTGRES_HOST=localhost` (port 5432)
  - `REDIS_HOST=localhost` (port 6379)
  - `KAFKA_BOOTSTRAP_SERVERS=localhost:9092`
  - `VAULT_ADDR=http://localhost:8200`
  - `NEXT_PUBLIC_API_BASE_URL=http://localhost:8080`

### Step 2: Audit Perkakas Lingkungan Lokal (Windows)
Telah dilakukan pengujian ketersediaan dependensi dan runtime di sistem lokal:

| Component | Status | Versi / Catatan |
| :--- | :--- | :--- |
| **Node.js** | ✅ Terinstall | `v24.18.1` |
| **pnpm** | ✅ Terverifikasi | `v11.18.0` (diakses via `npx pnpm`) |
| **PowerShell Execution Policy** | ⚠️ Note | Gunakan `-ExecutionPolicy Bypass` jika skrip npm/npx terblokir oleh PowerShell policy |
| **JDK (Java)** | ❌ Belum ada di PATH | Membutuhkan JDK 21 (Temurin / GraalVM) untuk Backend |
| **Docker Desktop** | ❌ Belum terdeteksi | Membutuhkan Docker 25+ & Docker Compose untuk Infra |
| **Flutter SDK** | ❌ Belum ada di PATH | Membutuhkan Flutter 3.22+ untuk Mobile App |

---

## 3. 🚀 Panduan Jalankan Aplikasi (Setup Next Steps)

### A. Menjalankan Web Dashboard (`apps/web`)

1. Buka terminal di direktori web app:
   ```powershell
   cd cashora-pos-app/apps/web
   ```
2. Install dependensi:
   ```powershell
   powershell -ExecutionPolicy Bypass -Command "npx pnpm install"
   ```
3. Jalankan server pengembang:
   ```powershell
   powershell -ExecutionPolicy Bypass -Command "npx pnpm dev"
   ```
4. Buka peramban di `http://localhost:3000`.

---

### B. Menjalankan Local Infrastructure (Database & Message Broker)
*(Membutuhkan Docker Desktop)*

1. Jalankan container infrastruktur:
   ```powershell
   cd cashora-pos-app
   docker compose -f docker-compose.infra.yml up -d
   ```
2. Layanan yang akan aktif:
   - PostgreSQL (`localhost:5432`)
   - Redis (`localhost:6379`)
   - Apache Kafka (`localhost:9092`)
   - HashiCorp Vault (`localhost:8200`)
   - MinIO Object Storage (`localhost:9000`)

---

### C. Menjalankan Backend (`apps/backend`)
*(Membutuhkan JDK 21)*

1. Masuk ke direktori backend:
   ```powershell
   cd cashora-pos-app/apps/backend
   ```
2. Jalankan aplikasi Spring Boot:
   ```powershell
   ./gradlew bootRun
   ```

---

### D. Menjalankan Mobile App (`apps/mobile`)
*(Membutuhkan Flutter SDK & Emulator/Device)*

1. Masuk ke direktori mobile:
   ```powershell
   cd cashora-pos-app/apps/mobile
   ```
2. Unduh paket dependensi:
   ```powershell
   flutter pub get
   ```
3. Jalankan di emulator / perangkat:
   ```powershell
   flutter run
   ```

---

## 4. 📝 Ringkasan Perintah Penting (Makefile / NPM Scripts)

- **Copy .env**: `cp .env.example .env`
- **Start Web Dev**: `npx pnpm --prefix apps/web dev`
- **Build Web**: `npx pnpm --prefix apps/web build`
- **Lint All**: `make lint-all`
- **Run Tests**: `make test-all`
