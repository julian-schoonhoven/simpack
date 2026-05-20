import type { LocaleCode } from "../locales";
import { en } from "./en";
import { nl } from "./nl";
import { zh } from "./zh";
import { hi } from "./hi";
import { es } from "./es";
import { fr } from "./fr";
import { ar } from "./ar";
import { bn } from "./bn";
import { ru } from "./ru";
import type { Messages } from "./en";

export const messages: Record<LocaleCode, Messages> = {
  en,
  nl,
  zh,
  hi,
  es,
  fr,
  ar,
  bn,
  ru,
};

export type { Messages };
