import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const footerLinks = NAV_LINKS.filter((l) => l.label !== "Home");

  return (
    <footer className="border-t border-border bg-surface-elevated">
      <div className="container-wide section-padding !py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              AI investment intelligence for modern businesses. Simulate ROI,
              risk, and ethical impact before you commit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#home" size="sm">
                Try Simpack
              </Button>
              <Button href="/pricing" variant="secondary" size="sm">
                View Pricing
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Product
              </p>
              <ul className="mt-4 space-y-2">
                {footerLinks.slice(0, 4).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Company
              </p>
              <ul className="mt-4 space-y-2">
                {footerLinks.slice(4).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Legal
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <span className="text-sm text-muted">Privacy</span>
                </li>
                <li>
                  <span className="text-sm text-muted">Terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Simpack. All rights reserved.
          </p>
          <p className="text-sm text-muted">Decision intelligence for modern business.</p>
        </div>
      </div>
    </footer>
  );
}
