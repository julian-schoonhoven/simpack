export const LOCALES = [
  { code: "en", nativeName: "English", dir: "ltr" as const },
  { code: "nl", nativeName: "Nederlands", dir: "ltr" as const },
  { code: "zh", nativeName: "普通话", dir: "ltr" as const },
  { code: "hi", nativeName: "हिन्दी", dir: "ltr" as const },
  { code: "es", nativeName: "Español", dir: "ltr" as const },
  { code: "fr", nativeName: "Français", dir: "ltr" as const },
  { code: "ar", nativeName: "العربية", dir: "rtl" as const },
  { code: "bn", nativeName: "বাংলা", dir: "ltr" as const },
  { code: "ru", nativeName: "Русский", dir: "ltr" as const },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

export const DEFAULT_LOCALE: LocaleCode = "en";

export const LOCALE_STORAGE_KEY = "simpack-locale";

/** RTL locale codes */
export const RTL_LOCALES: LocaleCode[] = ["ar"];

export function localeDirection(code: LocaleCode): "ltr" | "rtl" {
  return RTL_LOCALES.includes(code) ? "rtl" : "ltr";
}
