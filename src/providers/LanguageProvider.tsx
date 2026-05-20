"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  LOCALES,
  type LocaleCode,
} from "@/lib/i18n/locales";
import { messages, type Messages } from "@/lib/i18n/messages";

type LanguageContextValue = {
  locale: LocaleCode;
  setLocale: (locale: LocaleCode) => void;
  t: Messages;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyLocale(locale: LocaleCode) {
  const meta = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];
  document.documentElement.lang = locale;
  document.documentElement.dir = meta.dir;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as LocaleCode | null;
    const valid = LOCALES.some((l) => l.code === stored);
    const initial = valid && stored ? stored : DEFAULT_LOCALE;
    setLocaleState(initial);
    applyLocale(initial);
  }, []);

  const setLocale = useCallback((code: LocaleCode) => {
    setLocaleState(code);
    localStorage.setItem(LOCALE_STORAGE_KEY, code);
    applyLocale(code);
  }, []);

  const dir = LOCALES.find((l) => l.code === locale)?.dir ?? "ltr";

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: messages[locale],
      dir,
    }),
    [locale, setLocale, dir]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
