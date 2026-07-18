"use client";

import type { ReactNode } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// RoleGuard — Higher-Order Component for RBAC UI Enforcement
//
// Conditionally renders children only when the current authenticated user
// holds at least one of the required roles. Renders a fallback otherwise.
//
// This is the UI layer of RBAC — server-side authorization remains the
// authoritative enforcement point via the API gateway and OPA policies.
// Never trust client-side guards alone.
// ─────────────────────────────────────────────────────────────────────────────

interface RoleGuardProps {
  /** Required role(s) — user must hold at least one. */
  requiredRoles: string[];
  /** The content to render when the role check passes. */
  children: ReactNode;
  /** Optional fallback rendered when access is denied. Defaults to null. */
  fallback?: ReactNode;
  /** User's current roles, injected from session context. */
  userRoles: string[];
}

export function RoleGuard({
  requiredRoles,
  children,
  fallback = null,
  userRoles,
}: RoleGuardProps): ReactNode {
  const hasAccess = requiredRoles.some((role) => userRoles.includes(role));

  if (!hasAccess) {
    return fallback;
  }

  return children;
}
