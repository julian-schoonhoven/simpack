"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Languages } from "lucide-react";
import { LOCALES, type LocaleCode } from "@/lib/i18n/locales";
import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageSelector({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "inline-flex h-10 max-w-[10.5rem] items-center gap-1.5 rounded-xl border border-border bg-surface px-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-accent/30 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          open && "border-accent/40 ring-2 ring-accent/20"
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.a11y.selectLanguage}
      >
        <Languages className="h-4 w-4 shrink-0 text-muted" strokeWidth={1.75} />
        <span
          lang={current.code}
          className="lang-label hidden min-w-0 truncate sm:inline"
        >
          {current.nativeName}
        </span>
        <span
          lang={current.code}
          className="lang-label truncate text-xs sm:hidden"
        >
          {current.nativeName}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-[calc(100%+6px)] z-50 min-w-[11.5rem] overflow-hidden rounded-2xl border border-border bg-surface py-1.5 shadow-xl shadow-slate-200/60 dark:shadow-black/40"
            role="listbox"
            aria-label={t.a11y.selectLanguage}
          >
            {LOCALES.map((lang) => {
              const selected = lang.code === locale;
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  lang={lang.code}
                  dir={lang.dir}
                  onClick={() => {
                    setLocale(lang.code as LocaleCode);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left transition-colors",
                    selected
                      ? "bg-accent/10 font-medium text-foreground"
                      : "text-foreground/90 hover:bg-surface-elevated"
                  )}
                >
                  <span className="lang-label text-[0.9375rem] leading-snug">
                    {lang.nativeName}
                  </span>
                  {selected && (
                    <Check
                      className="h-4 w-4 shrink-0 text-accent"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
