// ─────────────────────────────────────────────────────────────────────────────
// Cashora Backend — Application Entrypoint Module
// This is the single deployable artifact. It wires all modules together
// via Spring Boot auto-configuration and module imports.
// ─────────────────────────────────────────────────────────────────────────────

plugins {
    kotlin("jvm")
    kotlin("plugin.spring")
    id("org.springframework.boot")
    id("io.spring.dependency-management")
    id("org.graalvm.buildtools.native")
    id("com.google.cloud.tools.jib")
}

dependencies {
    // ── Shared modules ──
    implementation(project(":shared:kernel"))
    implementation(project(":shared:security"))
    implementation(project(":shared:events"))
    implementation(project(":shared:persistence"))
    implementation(project(":shared:observability"))

    // ── Feature modules ──
    implementation(project(":modules:auth"))
    implementation(project(":modules:tenant"))
    implementation(project(":modules:merchant"))
    implementation(project(":modules:pos"))
    implementation(project(":modules:inventory"))
    implementation(project(":modules:payment"))
    implementation(project(":modules:settlement"))
    implementation(project(":modules:order-aggregator"))
    implementation(project(":modules:sync"))
    implementation(project(":modules:notification"))
    implementation(project(":modules:reporting"))
    implementation(project(":modules:audit"))

    // ── Spring Boot starters ──
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-actuator")
    implementation("org.springframework.boot:spring-boot-starter-validation")

    // ── Configuration processor ──
    annotationProcessor("org.springframework.boot:spring-boot-configuration-processor")
}

springBoot {
    mainClass.set("com.cashora.app.CashoraApplicationKt")
}

// ─── GraalVM Native Image ─────────────────────────────────────────────────────
graalvmNative {
    binaries {
        named("main") {
            imageName.set("cashora-backend")
            buildArgs.addAll(
                "--initialize-at-build-time=kotlin",
                "-H:+ReportExceptionStackTraces",
                "--no-fallback",
            )
        }
    }
}

// ─── Jib (Container Build) ───────────────────────────────────────────────────
jib {
    from {
        image = "eclipse-temurin:21-jre-jammy"
    }
    to {
        image = "cashora/backend"
        tags  = setOf("latest", project.version.toString())
    }
    container {
        jvmFlags = listOf(
            "-XX:+UseZGC",
            "-XX:MaxRAMPercentage=75.0",
            "-Djava.security.egd=file:/dev/./urandom",
        )
        ports = listOf("8080", "8081")
        environment = mapOf(
            "SPRING_PROFILES_ACTIVE" to "production",
        )
    }
}
