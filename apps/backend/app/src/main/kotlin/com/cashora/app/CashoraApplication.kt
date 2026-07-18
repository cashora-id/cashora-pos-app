package com.cashora.app

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.ConfigurationPropertiesScan
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.EnableAsync
import org.springframework.scheduling.annotation.EnableScheduling

/**
 * Cashora Application Entry Point
 *
 * This is the single deployable executable. It composes all internal modules
 * through Spring Boot's component scanning. Each bounded context module
 * registers its own beans; this class merely starts the Spring context.
 *
 * Architecture: Evolutionary Modular Monolith
 * Pattern:      Hexagonal (Ports & Adapters) per module
 * Deployment:   Spring Boot JAR or GraalVM Native Image
 */
@SpringBootApplication(
    scanBasePackages = ["com.cashora"],
)
@ConfigurationPropertiesScan("com.cashora")
@EnableAsync
@EnableScheduling
class CashoraApplication

fun main(args: Array<String>) {
    runApplication<CashoraApplication>(*args)
}
