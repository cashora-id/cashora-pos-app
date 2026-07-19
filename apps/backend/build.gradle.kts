import org.jetbrains.kotlin.gradle.dsl.JvmTarget

// ─────────────────────────────────────────────────────────────────────────────
// Cashora Backend — Root Build Configuration
// ─────────────────────────────────────────────────────────────────────────────

plugins {
    kotlin("jvm")                         version "2.0.0"       apply false
    kotlin("plugin.spring")               version "2.0.0"       apply false
    kotlin("plugin.jpa")                  version "2.0.0"       apply false
    kotlin("plugin.serialization")        version "2.0.0"       apply false
    id("org.springframework.boot")        version "3.3.1"       apply false
    id("io.spring.dependency-management") version "1.1.5"       apply false
    id("org.graalvm.buildtools.native")   version "0.10.2"      apply false
    id("org.flywaydb.flyway")             version "10.15.0"     apply false
    id("com.google.cloud.tools.jib")      version "3.4.3"       apply false
    id("org.jlleitschuh.gradle.ktlint")   version "12.1.1"      apply false
    id("io.gitlab.arturbosch.detekt")     version "1.23.6"      apply false
    jacoco
}

// ─── Shared Version Catalog ────────────────────────────────────────────────────
val javaVersion           = JavaVersion.VERSION_21
val kotlinVersion         = "2.0.0"
val springBootVersion     = "3.3.1"
val coroutinesVersion     = "1.8.1"
val arrowVersion          = "1.2.4"
val kotlinSerializVersion = "1.7.1"
val testcontainersVersion = "1.19.8"
val mockkVersion          = "1.13.11"
val archunitVersion       = "1.3.0"

// ─── Shared Configuration for ALL Subprojects ─────────────────────────────────
subprojects {
    apply(plugin = "org.jetbrains.kotlin.jvm")
    apply(plugin = "org.jlleitschuh.gradle.ktlint")
    apply(plugin = "io.gitlab.arturbosch.detekt")
    apply(plugin = "jacoco")

    group   = "com.cashora"
    version = properties["cashora.version"] as String? ?: "0.1.0-SNAPSHOT"

    java {
        sourceCompatibility = javaVersion
        targetCompatibility = javaVersion
    }

    kotlin {
        compilerOptions {
            freeCompilerArgs.addAll(
                "-Xjsr305=strict",
                "-Xcontext-receivers",
            )
            jvmTarget.set(JvmTarget.JVM_21)
        }
    }

    dependencies {
        // ── Kotlin stdlib & coroutines ──
        implementation(kotlin("stdlib"))
        implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:$coroutinesVersion")
        implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor:$coroutinesVersion")
        implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$kotlinSerializVersion")

        // ── Arrow (functional programming) ──
        implementation("io.arrow-kt:arrow-core:$arrowVersion")

        // ── Logging ──
        implementation("io.github.oshai:kotlin-logging-jvm:6.0.9")

        // ── Testing ──
        testImplementation("org.springframework.boot:spring-boot-starter-test:$springBootVersion") {
            exclude(group = "org.junit.vintage", module = "junit-vintage-engine")
        }
        testImplementation("io.mockk:mockk:$mockkVersion")
        testImplementation("org.jetbrains.kotlinx:kotlinx-coroutines-test:$coroutinesVersion")
        testImplementation("org.testcontainers:testcontainers:$testcontainersVersion")
        testImplementation("org.testcontainers:postgresql:$testcontainersVersion")
        testImplementation("org.testcontainers:kafka:$testcontainersVersion")
        testImplementation("com.tngtech.archunit:archunit-junit5:$archunitVersion")
    }

    tasks.test {
        useJUnitPlatform()
        finalizedBy(tasks.jacocoTestReport)
    }

    tasks.jacocoTestReport {
        reports {
            xml.required.set(true)
            html.required.set(true)
        }
    }

    detekt {
        config.setFrom("$rootDir/config/detekt/detekt.yml")
        buildUponDefaultConfig = true
    }

    ktlint {
        version.set("1.3.0")
        android.set(false)
        outputToConsole.set(true)
    }
}
