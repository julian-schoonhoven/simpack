/**
 * Canonical pricing URL. Always points at the parent domain so the
 * link is identical whether Simpack is viewed via the proxy at
 * julianschoonhoven.com/labs/simpack or directly on Vercel.
 */
export const PRICING_URL =
  "https://julianschoonhoven.com/labs/simpack/pricing";

export const NAV_LINKS = [
  { labelKey: "features", href: "#features" },
  { labelKey: "how", href: "#how" },
  { labelKey: "demo", href: "#demo" },
  { labelKey: "impact", href: "#impact" },
  { labelKey: "about", href: "#about" },
  { labelKey: "faq", href: "#faq" },
  { labelKey: "pricing", href: PRICING_URL },
] as const;

export const HERO_STATS = [
  { value: "+32%", labelKey: "statAccuracy" },
  { value: "< 5 min", labelKey: "statSpeed" },
  { value: "€1M+", labelKey: "statScenarios" },
  { value: "SME+", labelKey: "statAudience" },
] as const;

export const FEATURES = [
  {
    icon: "TrendingUp",
    titleKey: "roiTitle",
    descriptionKey: "roiDesc",
  },
  {
    icon: "Brain",
    titleKey: "aiTitle",
    descriptionKey: "aiDesc",
  },
  {
    icon: "GitBranch",
    titleKey: "whatIfTitle",
    descriptionKey: "whatIfDesc",
  },
  {
    icon: "Shield",
    titleKey: "ethicsTitle",
    descriptionKey: "ethicsDesc",
  },
  {
    icon: "Wallet",
    titleKey: "cashflowTitle",
    descriptionKey: "cashflowDesc",
  },
  {
    icon: "FileText",
    titleKey: "exportTitle",
    descriptionKey: "exportDesc",
  },
] as const;

export const HOW_STEPS = [
  { step: "01", titleKey: "step1Title", descriptionKey: "step1Desc" },
  { step: "02", titleKey: "step2Title", descriptionKey: "step2Desc" },
  { step: "03", titleKey: "step3Title", descriptionKey: "step3Desc" },
] as const;

export const IMPACT_METRICS = [
  { labelKey: "roiIncrease", value: "28%", trendKey: "roiTrend" },
  { labelKey: "costReduction", value: "19%", trendKey: "costTrend" },
  { labelKey: "riskReduction", value: "41%", trendKey: "riskTrend" },
  { labelKey: "ethicsScore", value: "94%", trendKey: "ethicsTrend" },
] as const;

export const FAQ_ITEMS = [
  { questionKey: "q1", answerKey: "a1" },
  { questionKey: "q2", answerKey: "a2" },
  { questionKey: "q3", answerKey: "a3" },
  { questionKey: "q4", answerKey: "a4" },
  { questionKey: "q5", answerKey: "a5" },
] as const;

export const PRICING_TIERS = [
  {
    nameKey: "starter",
    price: "€49",
    period: "/month",
    descriptionKey: "starterDesc",
    featureKeys: [
      "starterF1",
      "starterF2",
      "starterF3",
      "starterF4",
      "starterF5",
    ],
    ctaKey: "ctaTrial",
    highlighted: false,
  },
  {
    nameKey: "pro",
    price: "€149",
    period: "/month",
    descriptionKey: "proDesc",
    featureKeys: [
      "proF1",
      "proF2",
      "proF3",
      "proF4",
      "proF5",
      "proF6",
    ],
    ctaKey: "ctaTrial",
    highlighted: true,
    badgeKey: "mostPopular",
  },
  {
    nameKey: "enterprise",
    price: "Custom",
    period: "",
    descriptionKey: "enterpriseDesc",
    featureKeys: [
      "entF1",
      "entF2",
      "entF3",
      "entF4",
      "entF5",
      "entF6",
    ],
    ctaKey: "ctaSales",
    highlighted: false,
  },
] as const;
