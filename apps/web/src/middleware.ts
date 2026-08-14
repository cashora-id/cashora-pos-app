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
  "/owner",
];
const ADMIN_ONLY_ROUTES = ["/admin"];

function buildCsp(): string {
  const directives: Record<string, string> = {
    "default-src": "'self' https://*.vercel.app",
    "script-src": "'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel.app",
    "style-src": "'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src": "'self' data: blob: https://*.cashora.id https://*.vercel.app",
    "font-src": "'self' data: https://fonts.gstatic.com",
    "connect-src": "'self' https://api.cashora.id wss://api.cashora.id https://fonts.googleapis.com https://fonts.gstatic.com https://*.vercel.app",
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

  // ── 3. Content Security Policy ───────────────────────────────────────────
  const csp = buildCsp();

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", csp);

  return response;
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
};
