# Cashora Monorepo — Makefile
# ─────────────────────────────────────────────────────────────────────────────
# Usage: make <target>
# Run `make help` to list all available commands.
# ─────────────────────────────────────────────────────────────────────────────

.DEFAULT_GOAL := help
SHELL         := /bin/bash

# Paths
BACKEND_DIR  := apps/backend
MOBILE_DIR   := apps/mobile
WEB_DIR      := apps/web
INFRA_DIR    := infra

# Colors
RESET  := \033[0m
BOLD   := \033[1m
CYAN   := \033[36m
GREEN  := \033[32m
YELLOW := \033[33m

# ─── Help ────────────────────────────────────────────────────────────────────
.PHONY: help
help: ## List all available commands
	@echo ""
	@echo "  $(BOLD)$(CYAN)Cashora Monorepo$(RESET)"
	@echo ""
	@awk 'BEGIN {FS = ":.*##"; printf "  $(YELLOW)%-22s$(RESET) %s\n", "Target", "Description"} \
	      /^[a-zA-Z_-]+:.*?##/ { printf "  $(CYAN)%-22s$(RESET) %s\n", $$1, $$2 }' $(MAKEFILE_LIST)
	@echo ""

# ─── Infrastructure ───────────────────────────────────────────────────────────
.PHONY: infra-up
infra-up: ## Start all local infrastructure services (PostgreSQL, Redis, Kafka, Vault, Zookeeper)
	@echo "$(GREEN)▶ Starting local infrastructure...$(RESET)"
	docker compose -f docker-compose.infra.yml up -d --wait
	@echo "$(GREEN)✅ Infrastructure ready.$(RESET)"

.PHONY: infra-down
infra-down: ## Stop all local infrastructure services
	@echo "$(YELLOW)▶ Stopping local infrastructure...$(RESET)"
	docker compose -f docker-compose.infra.yml down

.PHONY: infra-reset
infra-reset: ## Destroy and recreate all local infrastructure (drops all data)
	@echo "$(YELLOW)⚠️  Resetting infrastructure — all data will be lost...$(RESET)"
	docker compose -f docker-compose.infra.yml down -v
	docker compose -f docker-compose.infra.yml up -d --wait

# ─── Database ─────────────────────────────────────────────────────────────────
.PHONY: db-migrate
db-migrate: ## Apply pending Flyway migrations to the local database
	@echo "$(GREEN)▶ Running database migrations...$(RESET)"
	bash tooling/scripts/db-migrate.sh

.PHONY: db-seed
db-seed: ## Seed development data (tenants, roles, products)
	@echo "$(GREEN)▶ Seeding development data...$(RESET)"
	bash tooling/scripts/db-seed.sh

# ─── Backend ──────────────────────────────────────────────────────────────────
.PHONY: dev-backend
dev-backend: ## Run backend in hot-reload development mode
	@echo "$(GREEN)▶ Starting backend in dev mode...$(RESET)"
	cd $(BACKEND_DIR) && ./gradlew :app:bootRun --args='--spring.profiles.active=local'

.PHONY: build-backend
build-backend: ## Compile backend into a production-ready JAR
	@echo "$(GREEN)▶ Building backend JAR...$(RESET)"
	cd $(BACKEND_DIR) && ./gradlew :app:bootJar

.PHONY: build-native
build-native: ## Compile backend to GraalVM Native Image
	@echo "$(GREEN)▶ Compiling GraalVM Native Image...$(RESET)"
	cd $(BACKEND_DIR) && ./gradlew :app:nativeCompile

.PHONY: test-backend
test-backend: ## Run all backend unit and integration tests
	@echo "$(GREEN)▶ Running backend tests...$(RESET)"
	cd $(BACKEND_DIR) && ./gradlew test

.PHONY: lint-backend
lint-backend: ## Run ktlint formatter on all backend sources
	@echo "$(GREEN)▶ Linting backend (ktlint)...$(RESET)"
	cd $(BACKEND_DIR) && ./gradlew ktlintCheck

# ─── Mobile ───────────────────────────────────────────────────────────────────
.PHONY: dev-mobile
dev-mobile: ## Launch Flutter app on a connected device or emulator
	@echo "$(GREEN)▶ Starting Flutter app...$(RESET)"
	cd $(MOBILE_DIR) && flutter run

.PHONY: build-mobile
build-mobile: ## Build Flutter release APK (Android)
	@echo "$(GREEN)▶ Building Flutter release APK...$(RESET)"
	cd $(MOBILE_DIR) && flutter build apk --release

.PHONY: build-mobile-ios
build-mobile-ios: ## Build Flutter release IPA (iOS)
	@echo "$(GREEN)▶ Building Flutter iOS release...$(RESET)"
	cd $(MOBILE_DIR) && flutter build ios --release

.PHONY: test-mobile
test-mobile: ## Run all Flutter unit and widget tests
	@echo "$(GREEN)▶ Running Flutter tests...$(RESET)"
	cd $(MOBILE_DIR) && flutter test

.PHONY: lint-mobile
lint-mobile: ## Run flutter analyze on mobile codebase
	@echo "$(GREEN)▶ Analyzing Flutter codebase...$(RESET)"
	cd $(MOBILE_DIR) && flutter analyze

# ─── Web Dashboard ────────────────────────────────────────────────────────────
.PHONY: dev-web
dev-web: ## Start Next.js dev server on http://localhost:3000
	@echo "$(GREEN)▶ Starting Next.js dev server...$(RESET)"
	cd $(WEB_DIR) && pnpm dev

.PHONY: build-web
build-web: ## Build Next.js production bundle
	@echo "$(GREEN)▶ Building Next.js production bundle...$(RESET)"
	cd $(WEB_DIR) && pnpm build

.PHONY: test-web
test-web: ## Run all web unit tests (Vitest) and E2E tests (Playwright)
	@echo "$(GREEN)▶ Running web tests...$(RESET)"
	cd $(WEB_DIR) && pnpm test

.PHONY: lint-web
lint-web: ## Run ESLint and TypeScript type-check on web codebase
	@echo "$(GREEN)▶ Linting web codebase...$(RESET)"
	cd $(WEB_DIR) && pnpm lint && pnpm tsc --noEmit

# ─── Cross-domain ─────────────────────────────────────────────────────────────
.PHONY: test-all
test-all: test-backend test-mobile test-web ## Run all tests across all domains

.PHONY: lint-all
lint-all: lint-backend lint-mobile lint-web ## Run all linters across all domains

.PHONY: build-all
build-all: build-backend build-mobile build-web ## Build all domain artifacts

# ─── Security ─────────────────────────────────────────────────────────────────
.PHONY: security-scan
security-scan: ## Run SAST (Semgrep) + OWASP dependency check across all domains
	@echo "$(GREEN)▶ Running security scans...$(RESET)"
	bash tooling/scripts/security-scan.sh

# ─── Code generation ──────────────────────────────────────────────────────────
.PHONY: codegen
codegen: ## Generate TypeScript API client from OpenAPI spec
	@echo "$(GREEN)▶ Generating TypeScript client from OpenAPI spec...$(RESET)"
	bash tooling/scripts/generate-api-client.sh

# ─── Docker images ────────────────────────────────────────────────────────────
.PHONY: docker-build-backend
docker-build-backend: ## Build backend Docker image
	docker build -f infra/docker/backend.Dockerfile -t cashora/backend:local apps/backend

.PHONY: docker-build-web
docker-build-web: ## Build web dashboard Docker image
	docker build -f infra/docker/web.Dockerfile -t cashora/web:local apps/web
