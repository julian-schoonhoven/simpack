import type { NextConfig } from "next";

/**
 * Optional subpath deployment.
 *
 * Set NEXT_PUBLIC_BASE_PATH (e.g. "/labs/simpack") to deploy this app
 * behind a subpath. When unset, the app deploys at the domain root.
 *
 * NEXT_PUBLIC_ASSET_PREFIX may override the static-asset prefix
 * (e.g. when a CDN serves /_next/static). Defaults to basePath.
 */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const basePath =
  rawBasePath && rawBasePath !== "/"
    ? rawBasePath.startsWith("/")
      ? rawBasePath.replace(/\/+$/, "")
      : `/${rawBasePath.replace(/\/+$/, "")}`
    : "";

const assetPrefix =
  process.env.NEXT_PUBLIC_ASSET_PREFIX?.trim() || basePath || undefined;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: import.meta.dirname ?? process.cwd(),
  },
  ...(basePath ? { basePath } : {}),
  ...(assetPrefix ? { assetPrefix } : {}),
};

export default nextConfig;
