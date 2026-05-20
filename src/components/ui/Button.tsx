"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "accent" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

/** Teal primary CTA — shared by hero “Try Simpack” and navbar Start (dark mode) */
export const accentCtaStyles =
  "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]";

/** Apply hero-matching accent CTA look to primary buttons in dark mode only */
export const startButtonDarkStyles =
  "dark:bg-accent dark:text-white dark:shadow-lg dark:shadow-accent/25 dark:hover:bg-accent-hover dark:hover:shadow-xl dark:hover:shadow-accent/30";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white shadow-lg shadow-navy/15 hover:bg-navy-muted hover:shadow-xl hover:shadow-teal-500/10 active:scale-[0.98]",
  accent: accentCtaStyles,
  secondary:
    "bg-surface text-foreground border border-border shadow-sm hover:bg-surface-elevated hover:border-teal-500/30 dark:hover:border-teal-500/40 active:scale-[0.98]",
  ghost:
    "text-foreground hover:bg-surface-elevated dark:hover:bg-navy-muted active:scale-[0.98]",
  outline:
    "border border-border text-foreground bg-transparent hover:border-accent/40 hover:bg-accent/5 active:scale-[0.98]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-xl",
  md: "h-11 px-5 text-sm rounded-xl",
  lg: "h-12 px-6 text-base rounded-2xl min-w-[140px]",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");
    const isHash = href.startsWith("#");

    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    if (isHash) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
