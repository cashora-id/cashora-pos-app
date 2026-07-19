import { type NextRequest } from "next/server";

/**
 * Temporary Mock NextAuth Wrapper for Sprint 1
 * Allows middleware.ts to compile successfully before Sprint 2 integrations.
 */
export const auth = (cb: (req: NextRequest) => any) => {
  return async (req: NextRequest) => {
    // Inject mock empty session
    (req as any).auth = null;
    return cb(req);
  };
};

export const handlers = {
  GET: () => new Response("Mock Auth GET handler"),
  POST: () => new Response("Mock Auth POST handler"),
};
