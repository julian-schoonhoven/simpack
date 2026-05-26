import type { NextConfig } from "next";

/**
 * The app is embedded under julianschoonhoven.com/labs/simpack via a
 * reverse proxy that passes the path through verbatim. Next.js must
 * therefore emit routes and static assets under that subpath so the
 * parent domain can forward /_next/* and friends.
 *
 * Direct Vercel URL: simpack-tau.vercel.app/labs/simpack
 */
export const SIMPACK_BASE_PATH = "/labs/simpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: SIMPACK_BASE_PATH,
  turbopack: {
    root: import.meta.dirname ?? process.cwd(),
  },
};

export default nextConfig;
