# ─── Vault Policy: Backend Service ───────────────────────────────────────────
# Grants the backend application access to:
#   - Dynamic database credentials (read)
#   - Transit encryption engine (encrypt/decrypt)
#   - PKI engine (issue mTLS certs)
#   - Application secrets (read-only)
# ─────────────────────────────────────────────────────────────────────────────

# Dynamic PostgreSQL credentials
path "database/creds/cashora-backend-role" {
  capabilities = ["read"]
}

# Transit engine — field-level encryption for PII data
path "transit/encrypt/cashora-customer-data" {
  capabilities = ["update"]
}
path "transit/decrypt/cashora-customer-data" {
  capabilities = ["update"]
}

# PKI — issue short-lived mTLS certificates for service mesh
path "pki/issue/cashora-internal" {
  capabilities = ["update"]
}

# Application secrets (read-only)
path "secret/data/cashora/backend/*" {
  capabilities = ["read"]
}
path "secret/data/cashora/payment-gateway/*" {
  capabilities = ["read"]
}

# Deny access to admin paths
path "sys/*" {
  capabilities = ["deny"]
}
path "auth/token/create-orphan" {
  capabilities = ["deny"]
}
