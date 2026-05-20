export const LOCALES = [
  { code: "en", shortCode: "EN", nativeName: "English", dir: "ltr" as const },
  { code: "nl", shortCode: "NL", nativeName: "Nederlands", dir: "ltr" as const },
  { code: "zh", shortCode: "ZH", nativeName: "普通话", dir: "ltr" as const },
  { code: "hi", shortCode: "HI", nativeName: "हिन्दी", dir: "ltr" as const },
  { code: "es", shortCode: "ES", nativeName: "Español", dir: "ltr" as const },
  { code: "fr", shortCode: "FR", nativeName: "Français", dir: "ltr" as const },
  { code: "ar", shortCode: "AR", nativeName: "العربية", dir: "rtl" as const },
  { code: "bn", shortCode: "BN", nativeName: "বাংলা", dir: "ltr" as const },
  { code: "ru", shortCode: "RU", nativeName: "Русский", dir: "ltr" as const },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

export const DEFAULT_LOCALE: LocaleCode = "en";

export const LOCALE_STORAGE_KEY = "simpack-locale";

/** RTL locale codes */
export const RTL_LOCALES: LocaleCode[] = ["ar"];

export function localeDirection(code: LocaleCode): "ltr" | "rtl" {
  return RTL_LOCALES.includes(code) ? "rtl" : "ltr";
}
