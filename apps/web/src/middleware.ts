import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/lib/auth/auth";

// ─────────────────────────────────────────────────────────────────────────────
// Cashora Web Dashboard — Security Middleware
//
// Responsibilities:
// 1. Authentication gate: redirects unauthenticated requests to /login
// 2. RBAC enforcement: redirects unauthorized roles to /unauthorized
// 3. Nonce-based Content Security Policy: generates a unique nonce per request
//    for inline script/style allowlisting, preventing XSS
// ─────────────────────────────────────────────────────────────────────────────

const PUBLIC_ROUTES = ["/login", "/api/auth"];
const ADMIN_ONLY_ROUTES = ["/admin"];

function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Buffer.from(array).toString("base64");
}

function buildCsp(nonce: string): string {
  const directives: Record<string, string> = {
    "default-src":    "'self'",
    "script-src":     `'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src":      `'self' 'nonce-${nonce}'`,
    "img-src":        "'self' data: blob: https://*.cashora.id",
    "font-src":       "'self'",
    "connect-src":    "'self' https://api.cashora.id wss://api.cashora.id",
    "frame-ancestors": "'none'",
    "base-uri":       "'self'",
    "form-action":    "'self'",
    "object-src":     "'none'",
  };

  return Object.entries(directives)
    .map(([key, value]) => `${key} ${value}`)
    .join("; ");
}

export default auth(async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublicRoute = PUBLIC_ROUTES.some((r) => pathname.startsWith(r));

  // ── 1. Authentication Gate ─────────────────────────────────────────────────
  // @ts-ignore – NextAuth v5 augments NextRequest
  const session = (request as any).auth;

  if (!session && !isPublicRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ── 2. RBAC Gate ──────────────────────────────────────────────────────────
  if (session && ADMIN_ONLY_ROUTES.some((r) => pathname.startsWith(r))) {
    const roles: string[] = session?.user?.roles ?? [];
    if (!roles.includes("ADMIN") && !roles.includes("SUPER_ADMIN")) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  // ── 3. Content Security Policy (Nonce) ────────────────────────────────────
  // ⚠️ CRITICAL ARCHITECTURAL WARNING (Next.js SSG vs Dynamic CSP Nonce):
  // Nonce-based dynamic CSP relies on per-request execution. If any pages are 
  // statically generated (SSG) or served from static caches (e.g. Vercel Edge/CDN),
  // this middleware will not execute on cache hits, causing inline script execution
  // to fail due to mismatching nonces.
  // Ensure that all routes using dynamic CSP nonces are configured for dynamic 
  // rendering (e.g., using `export const dynamic = 'force-dynamic'`).
  const nonce = generateNonce();
  const csp   = buildCsp(nonce);

  const response = NextResponse.next({
    request: {
      headers: new Headers({
        ...Object.fromEntries(request.headers),
        "x-nonce": nonce,
      }),
    },
  });

  response.headers.set("Content-Security-Policy", csp);

  return response;
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
