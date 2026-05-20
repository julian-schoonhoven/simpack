import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { Providers } from "@/providers/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Simpack — AI Investment Intelligence",
    template: "%s | Simpack",
  },
  description:
    "Simpack helps companies calculate ROI, risk, and ethical impact of AI investments in real time, enabling faster and better business decisions.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon-32.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon-32.svg", sizes: "32x32", type: "image/svg+xml" }],
    shortcut: "/favicon.ico",
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
