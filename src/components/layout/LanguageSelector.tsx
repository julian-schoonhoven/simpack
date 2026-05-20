"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
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
          "inline-flex h-10 items-center gap-1.5 rounded-xl border border-border bg-surface px-3 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          open && "border-accent/40 ring-2 ring-accent/20"
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.a11y.selectLanguage}: ${current.nativeName}`}
      >
        <span className="min-w-[1.75rem] text-center text-xs font-semibold tracking-wide text-foreground">
          {current.shortCode}
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
            className="absolute right-0 top-[calc(100%+8px)] z-50 w-[15.5rem] overflow-hidden rounded-2xl border border-border bg-surface p-1.5 shadow-xl shadow-slate-200/50 dark:shadow-black/40"
            role="listbox"
            aria-label={t.a11y.selectLanguage}
          >
            <ul className="flex flex-col gap-0.5">
              {LOCALES.map((lang) => {
                const selected = lang.code === locale;
                return (
                  <li key={lang.code} role="presentation">
                    <button
                      type="button"
                      role="option"
                      aria-selected={selected}
                      aria-label={`${lang.shortCode} — ${lang.nativeName}`}
                      lang={lang.code}
                      dir="ltr"
                      onClick={() => {
                        setLocale(lang.code as LocaleCode);
                        setOpen(false);
                      }}
                      className={cn(
                        "grid w-full grid-cols-[2.25rem_1fr_auto] items-center gap-x-3 rounded-xl px-2.5 py-2.5 text-left transition-colors duration-150",
                        selected
                          ? "bg-accent/10"
                          : "hover:bg-surface-elevated active:bg-surface-elevated"
                      )}
                    >
                      <span
                        className={cn(
                          "text-xs font-semibold tracking-wider tabular-nums",
                          selected ? "text-foreground" : "text-muted"
                        )}
                      >
                        {lang.shortCode}
                      </span>

                      <span
                        lang={lang.code}
                        dir={lang.dir}
                        className={cn(
                          "lang-label min-w-0 truncate text-[0.8125rem] leading-snug",
                          selected ? "font-medium text-foreground" : "text-muted"
                        )}
                      >
                        {lang.nativeName}
                      </span>

                      <span className="flex h-4 w-4 items-center justify-center">
                        {selected && (
                          <Check
                            className="h-3.5 w-3.5 text-accent"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
