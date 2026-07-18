# Cashora — Pragmatic Monorepo

> **Enterprise-grade, multi-tenant, offline-first POS platform for Indonesian FinTech.**

---

## Monorepo Structure

```
cashora/
├── apps/
│   ├── backend/          # Kotlin + Spring Boot — Evolutionary Modular Monolith
│   ├── mobile/           # Flutter — Offline-First POS Agent Application
│   └── web/              # Next.js — Admin & Analytics Dashboard
├── packages/
│   ├── api-contracts/    # OpenAPI specs, Avro schemas, Protobuf definitions
│   ├── config/           # Shared linting and formatting configurations
│   └── ui/               # Shared React design system tokens
├── infra/
│   ├── docker/           # Domain-specific Dockerfiles
│   ├── compose/          # Docker Compose environment overrides
│   ├── terraform/        # Cloud infrastructure IaC (modular)
│   ├── kubernetes/       # Helm charts and Kustomize manifests
│   ├── vault/            # HashiCorp Vault policies
│   └── kafka/            # Topic definitions and schema registry config
├── tooling/
│   ├── scripts/          # Developer utility scripts
│   ├── codegen/          # API client generation config
│   └── ci/               # Reusable CI/CD workflow fragments
└── .github/
    └── workflows/        # GitHub Actions pipelines per domain
```

---

## Prerequisites

| Tool | Minimum Version | Purpose |
|------|----------------|---------|
| JDK (Temurin/GraalVM) | 21 | Backend build & native compilation |
| Gradle | 8.7 (via wrapper) | Backend dependency management |
| Flutter SDK | 3.22+ | Mobile application |
| Node.js | 22 LTS | Web dashboard |
| pnpm | 9+ | Web package management |
| Docker + Docker Compose | 25+ | Local infrastructure |
| HashiCorp Vault CLI | 1.16+ | Secrets management |
| kubectl | 1.30+ | Kubernetes operations |
| Terraform | 1.9+ | Infrastructure provisioning |

---

## Quick Start

### 1. Clone and configure environment

```bash
git clone <repo-url> cashora
cd cashora
cp .env.example .env
# Fill in required secrets in .env
```

### 2. Start local infrastructure

```bash
make infra-up
# Starts: PostgreSQL, Redis, Kafka, Vault (Docker Compose)
```

### 3. Run database migrations

```bash
make db-migrate
```

### 4. Start development servers

```bash
# Backend
make dev-backend

# Mobile (requires Flutter SDK + connected device or emulator)
make dev-mobile

# Web Dashboard
make dev-web
```

### 5. Run all tests

```bash
make test-all
```

---

## Available Make Commands

```bash
make help            # List all available commands
make infra-up        # Start local infrastructure services
make infra-down      # Stop local infrastructure services
make dev-backend     # Run backend in hot-reload dev mode
make dev-web         # Run web dashboard dev server
make dev-mobile      # Launch Flutter app on connected device
make build-backend   # Compile backend JARs
make build-web       # Build Next.js production bundle
make build-mobile    # Build Flutter release APK
make test-backend    # Run all backend unit + integration tests
make test-web        # Run all web unit + e2e tests
make test-mobile     # Run all Flutter tests
make test-all        # Run all tests across domains
make db-migrate      # Apply pending Flyway migrations
make db-seed         # Seed development data
make lint-all        # Run linters across all domains
make security-scan   # Run SAST and dependency vulnerability scan
```

---

## Architecture

This monorepo implements the **Cashora Architecture Blueprint** — an Evolutionary Modular Monolith designed for:

- **50,000+ TPS capacity** via CQRS, Event Sourcing, and Kafka
- **True Offline-First** mobile operation with bi-directional delta sync and CRDT conflict resolution
- **Defense in Depth security** across 7 independent security layers
- **Multi-tenant data isolation** via hybrid Pool/Bridge/Silo models with RLS
- **Bank Indonesia SNAP/QRIS TUNTAS compliance** and PCI-DSS v4.0 readiness
- **Elastic auto-scaling** through Kubernetes HPA + KEDA

For detailed architecture documentation, refer to the [Architecture Blueprint](../Architecture-Cashora.md) and the [Enterprise Architecture Documents](../cashora-enterprise-architecture/).

---

## Contributing

- Read `CONTRIBUTING.md` before opening a PR.
- All PRs must pass all CI checks (lint, test, security scan).
- All architectural decisions must be documented in `cashora-enterprise-architecture/ADR/`.
- Follow the module communication contracts defined in `packages/api-contracts/`.

---

## License

Proprietary — All rights reserved by Cashora.
