"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-all duration-200 hover:border-accent/30 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        className
      )}
      aria-label={t.a11y.toggleTheme}
      title={t.a11y.toggleTheme}
    >
      {theme === "light" ? (
        <Moon className="h-[18px] w-[18px]" strokeWidth={1.75} />
      ) : (
        <Sun className="h-[18px] w-[18px]" strokeWidth={1.75} />
      )}
    </button>
  );
}
