"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSelector } from "@/components/layout/LanguageSelector";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const resolveHref = (href: string) => {
    if (href.startsWith("#") && !isHome) return `/${href}`;
    return href;
  };

  const navLabel = (key: (typeof NAV_LINKS)[number]["labelKey"]) =>
    t.nav[key];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-border/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav
        className="container-wide mx-auto flex h-16 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Logo size="sm" />

        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.labelKey}>
              <Link
                href={resolveHref(link.href)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
              >
                {navLabel(link.labelKey)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSelector />
          <ThemeToggle />
          <Button href={isHome ? "#home" : "/#home"} size="sm" variant="primary">
            {t.nav.start}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSelector />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-md lg:hidden"
          >
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-1 p-4"
            >
              {NAV_LINKS.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    href={resolveHref(link.href)}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-surface-elevated"
                  >
                    {navLabel(link.labelKey)}
                  </Link>
                </li>
              ))}
              <li className="mt-4 pt-4 border-t border-border">
                <Button
                  href={isHome ? "#home" : "/#home"}
                  size="lg"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  {t.nav.start}
                </Button>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
