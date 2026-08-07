import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/lib/auth/auth";

// ─────────────────────────────────────────────────────────────────────────────
// Cashora Web Dashboard — Security Middleware
// ─────────────────────────────────────────────────────────────────────────────

const PUBLIC_ROUTES = [
  "/",
  "/layanan",
  "/harga",
  "/tentang",
  "/demo",
  "/blog",
  "/kontak",
  "/login",
  "/register",
  "/api/auth",
];
const ADMIN_ONLY_ROUTES = ["/admin"];

function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Buffer.from(array).toString("base64");
}

function buildCsp(nonce: string): string {
  const directives: Record<string, string> = {
    "default-src": "'self'",
    "script-src": `'self' 'nonce-${nonce}' 'unsafe-inline' 'unsafe-eval'`,
    "style-src": `'self' 'unsafe-inline' https://fonts.googleapis.com`,
    "img-src": "'self' data: blob: https://*.cashora.id",
    "font-src": "'self' data: https://fonts.gstatic.com",
    "connect-src": "'self' https://api.cashora.id wss://api.cashora.id https://fonts.googleapis.com https://fonts.gstatic.com",
    "frame-ancestors": "'none'",
    "base-uri": "'self'",
    "form-action": "'self'",
    "object-src": "'none'",
  };

  return Object.entries(directives)
    .map(([key, value]) => `${key} ${value}`)
    .join("; ");
}

export default auth(async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublicRoute =
    pathname === "/" || PUBLIC_ROUTES.some((r) => r !== "/" && pathname.startsWith(r));

  // ── 1. Authentication Gate ─────────────────────────────────────────────────
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
  const nonce = generateNonce();
  const csp = buildCsp(nonce);

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
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
};
