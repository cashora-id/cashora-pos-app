// ─────────────────────────────────────────────────────────────────────────────
// Cashora Backend — Gradle Multi-Project Settings
// ─────────────────────────────────────────────────────────────────────────────

rootProject.name = "cashora-backend"

// ─── Plugin Management ────────────────────────────────────────────────────────
pluginManagement {
    repositories {
        gradlePluginPortal()
        mavenCentral()
    }
}

// ─── Dependency Resolution ────────────────────────────────────────────────────
dependencyResolutionManagement {
    repositories {
        mavenCentral()
    }
}

// ─── Application Entrypoint ───────────────────────────────────────────────────
include(":app")

// ─── Shared Modules ───────────────────────────────────────────────────────────
include(":shared:kernel")
include(":shared:security")
include(":shared:events")
include(":shared:persistence")
include(":shared:observability")

// ─── Feature Modules (Bounded Contexts) ──────────────────────────────────────
include(":modules:auth")
include(":modules:tenant")
include(":modules:merchant")
include(":modules:pos")
include(":modules:inventory")
include(":modules:payment")
include(":modules:settlement")
include(":modules:order-aggregator")
include(":modules:sync")
include(":modules:notification")
include(":modules:reporting")
include(":modules:audit")
