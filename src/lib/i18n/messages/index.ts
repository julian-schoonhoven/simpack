import type { LocaleCode } from "../locales";
import { en } from "./en";
import type { Messages } from "./en";

/** Placeholder locales fall back to English until translated */
const withFallback = (base: Messages): Messages => base;

export const messages: Record<LocaleCode, Messages> = {
  en,
  zh: withFallback(en),
  hi: withFallback(en),
  es: withFallback(en),
  fr: withFallback(en),
  ar: withFallback(en),
  bn: withFallback(en),
  ru: withFallback(en),
};

export type { Messages };
