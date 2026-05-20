export const LOCALES = [
  { code: "en", name: "English", dir: "ltr" as const },
  { code: "zh", name: "Mandarin", dir: "ltr" as const },
  { code: "hi", name: "Hindi", dir: "ltr" as const },
  { code: "es", name: "Spanish", dir: "ltr" as const },
  { code: "fr", name: "French", dir: "ltr" as const },
  { code: "ar", name: "Arabic", dir: "rtl" as const },
  { code: "bn", name: "Bengali", dir: "ltr" as const },
  { code: "ru", name: "Russian", dir: "ltr" as const },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

export const DEFAULT_LOCALE: LocaleCode = "en";

export const LOCALE_STORAGE_KEY = "simpack-locale";
