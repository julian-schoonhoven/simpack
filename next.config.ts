import type { NextConfig } from "next";

/**
 * Static-asset origin. The app is also served through a reverse proxy
 * at julianschoonhoven.com/labs/simpack which strips the prefix before
 * forwarding to Vercel — so the app itself must respond at `/`, and
 * /_next/* assets must be loaded directly from the Vercel host
 * (otherwise they hit the parent domain and 404).
 */
const SIMPACK_ASSET_ORIGIN =
  process.env.NEXT_PUBLIC_ASSET_ORIGIN?.trim() ||
  "https://simpack-tau.vercel.app";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: SIMPACK_ASSET_ORIGIN,
  turbopack: {
    root: import.meta.dirname ?? process.cwd(),
  },
};

export default nextConfig;
