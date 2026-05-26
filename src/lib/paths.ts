/**
 * Returns the configured base path (without trailing slash).
 * Empty string when the app is deployed at the domain root.
 *
 * Mirrors the parsing in next.config.ts so callers can build URLs
 * for things Next.js does not auto-prefix (e.g. metadata.icons).
 */
export function getBasePath(): string {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
  if (!raw || raw === "/") return "";
  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeading.replace(/\/+$/, "");
}

/**
 * Prefixes a root-absolute public-asset path with the configured base path.
 * Pass-through for paths that are already absolute (http/https/protocol-relative).
 *
 * Use for assets referenced outside the Next.js routing layer (metadata,
 * og:image URLs, direct `<img src>` to public files, etc.). Next.js Link
 * and the built _next/static prefix are handled automatically by Next.
 */
export function asset(path: string): string {
  if (!path) return path;
  if (/^(https?:)?\/\//i.test(path) || path.startsWith("data:")) return path;
  const base = getBasePath();
  if (!base) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
