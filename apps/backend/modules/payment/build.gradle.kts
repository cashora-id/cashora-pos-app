// modules:payment — Bounded Context Module
plugins {
    kotlin("jvm")
    kotlin("plugin.spring")
    kotlin("plugin.jpa")
    id("io.spring.dependency-management")
}

dependencies {
    implementation(project(":shared:kernel"))
    implementation(project(":shared:security"))
    implementation(project(":shared:events"))
    implementation(project(":shared:persistence"))
    implementation(project(":shared:observability"))

    // Spring
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.springframework.kafka:spring-kafka")
    implementation("com.xendit:xendit-java:4.3.0")
}
