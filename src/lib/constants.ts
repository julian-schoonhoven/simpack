export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How", href: "#how" },
  { label: "Impact", href: "#impact" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "/pricing" },
] as const;

export const HERO_STATS = [
  { value: "+32%", label: "better investment accuracy" },
  { value: "< 5 min", label: "decision simulation" },
  { value: "€1M+", label: "modeled investment scenarios" },
  { value: "SME+", label: "built for SMEs & enterprises" },
] as const;

export const FEATURES = [
  {
    icon: "TrendingUp",
    title: "ROI Simulation Engine",
    description:
      "Model expected returns across timelines with confidence intervals and sensitivity analysis.",
  },
  {
    icon: "Brain",
    title: "AI Prediction Model",
    description:
      "Forecast outcomes using proprietary models trained on enterprise investment patterns.",
  },
  {
    icon: "GitBranch",
    title: "What-if Scenarios",
    description:
      "Compare multiple investment paths side-by-side before committing capital.",
  },
  {
    icon: "Shield",
    title: "Ethics Risk Scoring",
    description:
      "Quantify ethical and compliance exposure alongside financial metrics.",
  },
  {
    icon: "Wallet",
    title: "Cashflow Forecasting",
    description:
      "Project inflows and outflows with scenario-linked cash position visibility.",
  },
  {
    icon: "FileText",
    title: "Exportable Reports (PDF)",
    description:
      "Generate board-ready reports with charts, assumptions, and audit trails.",
  },
] as const;

export const HOW_STEPS = [
  {
    step: "01",
    title: "Input Data",
    description:
      "Upload investment parameters, budgets, timelines, and risk tolerances through a guided interface.",
  },
  {
    step: "02",
    title: "AI Simulation Engine",
    description:
      "Our engine runs thousands of simulations to model ROI, risk, and ethical impact in real time.",
  },
  {
    step: "03",
    title: "Decision Output",
    description:
      "Receive actionable recommendations, dashboards, and exportable reports for stakeholders.",
  },
] as const;

export const IMPACT_METRICS = [
  { label: "ROI increase", value: "28%", trend: "+12% YoY" },
  { label: "Cost reduction", value: "19%", trend: "avg. portfolio" },
  { label: "Risk reduction", value: "41%", trend: "modeled exposure" },
  { label: "Ethical compliance", value: "94%", trend: "score index" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is Simpack?",
    answer:
      "Simpack is an AI-powered investment simulation platform that helps businesses evaluate ROI, risk, and ethical impact of AI investments before making decisions.",
  },
  {
    question: "How does the AI model work?",
    answer:
      "Our models combine financial forecasting, risk modeling, and ethics scoring using proprietary algorithms trained on enterprise investment data. You input parameters; Simpack runs simulations and surfaces decision-ready insights.",
  },
  {
    question: "Is Simpack accurate?",
    answer:
      "Simpack provides probabilistic forecasts with confidence intervals, not guarantees. Accuracy improves with quality input data and is validated against historical benchmarks. We recommend using it as decision support alongside expert judgment.",
  },
  {
    question: "Is it suitable for small businesses?",
    answer:
      "Yes. Our Starter tier is designed for SMEs, while Pro and Enterprise scale for larger teams with advanced scenarios, integrations, and dedicated support.",
  },
  {
    question: "Can I export reports?",
    answer:
      "All plans include PDF export. Pro and Enterprise add branded templates, scheduled reports, and API access for embedding insights in your workflows.",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "€49",
    period: "/month",
    description: "For teams exploring AI investment decisions.",
    features: [
      "5 simulations per month",
      "ROI & risk modeling",
      "Basic ethics scoring",
      "PDF export (5/month)",
      "Email support",
    ],
    cta: "Start free trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "€149",
    period: "/month",
    description: "For growing teams making regular investment calls.",
    features: [
      "Unlimited simulations",
      "What-if scenario builder",
      "Advanced ethics scoring",
      "Branded PDF reports",
      "Cashflow forecasting",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with complex portfolios and compliance needs.",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Custom AI model tuning",
      "Dedicated success manager",
      "SLA & audit logs",
      "On-premise option",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
] as const;
