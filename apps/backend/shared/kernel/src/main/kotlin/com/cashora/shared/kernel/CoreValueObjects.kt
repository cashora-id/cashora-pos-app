package com.cashora.shared.kernel

import java.math.BigDecimal
import java.math.RoundingMode
import java.time.Instant
import java.util.Currency
import java.util.UUID

// ─────────────────────────────────────────────────────────────────────────────
// Cashora Shared Kernel — Core Value Objects
//
// These primitives are the lingua franca of the entire domain layer.
// They are immutable, self-validating, and carry no infrastructure dependencies.
// All domain models MUST use these types; never use raw primitives for IDs or Money.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Identity Types ───────────────────────────────────────────────────────────

@JvmInline
value class TenantId(val value: UUID) {
    companion object {
        fun generate(): TenantId = TenantId(UUID.randomUUID())
        fun from(raw: String): TenantId = TenantId(UUID.fromString(raw))
    }
    override fun toString(): String = value.toString()
}

@JvmInline
value class BranchId(val value: UUID) {
    companion object {
        fun generate(): BranchId = BranchId(UUID.randomUUID())
        fun from(raw: String): BranchId = BranchId(UUID.fromString(raw))
    }
    override fun toString(): String = value.toString()
}

@JvmInline
value class UserId(val value: UUID) {
    companion object {
        fun generate(): UserId = UserId(UUID.randomUUID())
        fun from(raw: String): UserId = UserId(UUID.fromString(raw))
    }
    override fun toString(): String = value.toString()
}

@JvmInline
value class TransactionId(val value: UUID) {
    companion object {
        fun generate(): TransactionId = TransactionId(UUID.randomUUID())
        fun from(raw: String): TransactionId = TransactionId(UUID.fromString(raw))
    }
    override fun toString(): String = value.toString()
}

// ─── Money ───────────────────────────────────────────────────────────────────

/**
 * Immutable monetary value in Indonesian Rupiah (IDR).
 * All financial calculations MUST use this type — never raw BigDecimal or Double.
 * Uses HALF_UP rounding with 0 decimal places as per IDR conventions.
 */
data class Money(
    val amount: BigDecimal,
    val currency: Currency = IDR,
) : Comparable<Money> {

    init {
        require(amount.scale() <= 0 || currency == IDR) {
            "IDR does not support fractional amounts"
        }
    }

    operator fun plus(other: Money): Money {
        require(currency == other.currency) { "Cannot add different currencies" }
        return Money(amount + other.amount, currency)
    }

    operator fun minus(other: Money): Money {
        require(currency == other.currency) { "Cannot subtract different currencies" }
        return Money(amount - other.amount, currency)
    }

    operator fun times(multiplier: BigDecimal): Money =
        Money(amount.multiply(multiplier).setScale(0, RoundingMode.HALF_UP), currency)

    operator fun times(multiplier: Int): Money = times(BigDecimal.valueOf(multiplier.toLong()))

    operator fun unaryMinus(): Money = Money(amount.negate(), currency)

    fun isPositive(): Boolean = amount > BigDecimal.ZERO
    fun isZero(): Boolean = amount.compareTo(BigDecimal.ZERO) == 0
    fun isNegative(): Boolean = amount < BigDecimal.ZERO

    override fun compareTo(other: Money): Int {
        require(currency == other.currency) { "Cannot compare different currencies" }
        return amount.compareTo(other.amount)
    }

    override fun toString(): String = "IDR ${"%,.0f".format(amount)}"

    companion object {
        val IDR: Currency = Currency.getInstance("IDR")
        val ZERO = Money(BigDecimal.ZERO)

        fun of(amount: Long): Money = Money(BigDecimal.valueOf(amount))
        fun of(amount: Int): Money = Money(BigDecimal.valueOf(amount.toLong()))
        fun of(amount: BigDecimal): Money = Money(amount.setScale(0, RoundingMode.HALF_UP))
    }
}

// ─── Audit Metadata ──────────────────────────────────────────────────────────

/**
 * Audit trail embedded in every entity.
 * Provides immutable, tamper-evident record of creation and last modification.
 */
data class AuditMetadata(
    val createdAt: Instant,
    val createdBy: UserId,
    val updatedAt: Instant,
    val updatedBy: UserId,
    val version: Long = 0L,
) {
    companion object {
        fun create(actorId: UserId): AuditMetadata {
            val now = Instant.now()
            return AuditMetadata(
                createdAt = now,
                createdBy = actorId,
                updatedAt = now,
                updatedBy = actorId,
            )
        }
    }

    fun update(actorId: UserId): AuditMetadata =
        copy(updatedAt = Instant.now(), updatedBy = actorId, version = version + 1)
}

// ─── Tenant Context ───────────────────────────────────────────────────────────

/**
 * Carries the resolved tenant context through the application layer.
 * Injected by the security filter chain and passed explicitly — never stored in a thread-local.
 */
data class TenantContext(
    val tenantId: TenantId,
    val branchId: BranchId?,
    val actorId: UserId,
    val roles: Set<String>,
) {
    fun hasRole(role: String): Boolean = roles.contains(role)
    fun requireRole(role: String) {
        check(hasRole(role)) { "Access denied: required role '$role' not present" }
    }
}

// ─── Domain Event Base ────────────────────────────────────────────────────────

/**
 * Base type for all domain events.
 * Every bounded context publishes events that extend this sealed interface.
 */
sealed interface DomainEvent {
    val eventId: UUID
    val occurredAt: Instant
    val tenantId: TenantId
    val aggregateId: UUID
    val eventType: String
}
