import type { NextConfig } from "next";

/**
 * This app is embedded under julianschoonhoven.com/labs/simpack
 * via a reverse proxy that passes the path through verbatim. Next.js
 * must emit routes and static assets under that subpath so the parent
 * domain can forward them (otherwise /_next/static/* lands at the
 * parent root and 404s, breaking CSS and JS).
 *
 * Direct Vercel URL becomes: simpack-tau.vercel.app/labs/simpack
 */
export const SIMPACK_BASE_PATH = "/labs/simpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: SIMPACK_BASE_PATH,
  turbopack: {
    root: import.meta.dirname ?? process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: SIMPACK_BASE_PATH,
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
