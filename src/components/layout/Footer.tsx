"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/providers/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="border-t border-border bg-surface-elevated">
      <div className="container-wide section-padding !py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{f.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#home" variant="accent" size="sm">
                {f.try}
              </Button>
              <Button href="/pricing" variant="secondary" size="sm">
                {f.viewPricing}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                {f.product}
              </p>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.slice(0, 4).map((link) => (
                  <li key={link.labelKey}>
                    <Link
                      href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-accent"
                    >
                      {t.nav[link.labelKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                {f.company}
              </p>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.slice(4).map((link) => (
                  <li key={link.labelKey}>
                    <Link
                      href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-accent"
                    >
                      {t.nav[link.labelKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                {f.legal}
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {f.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {f.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Simpack. {f.rights}
          </p>
          <p className="text-sm text-muted">{f.motto}</p>
        </div>
      </div>
    </footer>
  );
}
