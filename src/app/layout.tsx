import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { Providers } from "@/providers/Providers";
import "./globals.css";

const SIMPACK_ASSET_ORIGIN =
  process.env.NEXT_PUBLIC_ASSET_ORIGIN?.trim() ||
  "https://simpack-tau.vercel.app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Resolve a base URL for absolute metadata (OG images, canonical URLs).
 * Falls back to Vercel's auto-populated VERCEL_URL when no explicit
 * NEXT_PUBLIC_SITE_URL is provided. Leaves metadataBase undefined in
 * local dev so Next.js can derive relative URLs.
 */
function resolveMetadataBase(): URL | undefined {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    try {
      return new URL(explicit);
    } catch {
      // fallthrough
    }
  }
  const vercel = process.env.NEXT_PUBLIC_VERCEL_URL || process.env.VERCEL_URL;
  if (vercel) {
    try {
      return new URL(`https://${vercel}`);
    } catch {
      // fallthrough
    }
  }
  return undefined;
}

export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(),
  title: {
    default: "Simpack — AI Investment Intelligence",
    template: "%s | Simpack",
  },
  description:
    "Simpack helps companies calculate ROI, risk, and ethical impact of AI investments in real time, enabling faster and better business decisions.",
  icons: {
    // Absolute URLs so favicons load both when accessed directly on
    // Vercel and when served via the julianschoonhoven.com proxy
    // (which only forwards /labs/simpack/* and not /favicon.*).
    icon: [
      { url: `${SIMPACK_ASSET_ORIGIN}/favicon.ico`, sizes: "any" },
      { url: `${SIMPACK_ASSET_ORIGIN}/favicon.svg`, type: "image/svg+xml" },
      {
        url: `${SIMPACK_ASSET_ORIGIN}/favicon-16.svg`,
        sizes: "16x16",
        type: "image/svg+xml",
      },
      {
        url: `${SIMPACK_ASSET_ORIGIN}/favicon-32.svg`,
        sizes: "32x32",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: `${SIMPACK_ASSET_ORIGIN}/favicon-32.svg`,
        sizes: "32x32",
        type: "image/svg+xml",
      },
    ],
    shortcut: `${SIMPACK_ASSET_ORIGIN}/favicon.ico`,
  },
  openGraph: {
    title: "Simpack — AI Investment Intelligence",
    description:
      "Decide smarter on AI investments. Simulate ROI, risk, and ethical impact in real time.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} light`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen font-sans transition-colors duration-300">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
