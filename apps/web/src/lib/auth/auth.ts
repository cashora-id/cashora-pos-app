import { NextResponse, type NextRequest } from "next/server";

// NextAuth v5 wrapper / middleware helper for Cashora Web
export function auth(middlewareHandler: (req: NextRequest) => Promise<NextResponse> | NextResponse) {
  return async function (req: NextRequest) {
    return middlewareHandler(req);
  };
}

export const handlers = {
  GET: async () => NextResponse.json({ status: "ok" }),
  POST: async () => NextResponse.json({ status: "ok" }),
};
