"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  ShieldAlert,
  Scale,
  RotateCcw,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PRICING_URL } from "@/lib/constants";
import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

type IndustryId =
  | "saas"
  | "fintech"
  | "healthcare"
  | "retail"
  | "manufacturing";
type UseCaseId =
  | "support"
  | "predictive"
  | "content"
  | "ops"
  | "rnd";
type ToleranceId = "conservative" | "balanced" | "aggressive";

interface IndustryDef {
  id: IndustryId;
  labelKey: string;
  roiMult: number;
  ethicsMult: number;
}
interface UseCaseDef {
  id: UseCaseId;
  labelKey: string;
  roiMult: number;
  ethicsMult: number;
  riskMult: number;
}
interface ToleranceDef {
  id: ToleranceId;
  labelKey: string;
  roiMult: number;
  riskMult: number;
}

const INDUSTRIES: IndustryDef[] = [
  { id: "saas", labelKey: "industrySaas", roiMult: 1.15, ethicsMult: 0.88 },
  {
    id: "fintech",
    labelKey: "industryFintech",
    roiMult: 1.28,
    ethicsMult: 0.72,
  },
  {
    id: "healthcare",
    labelKey: "industryHealthcare",
    roiMult: 1.08,
    ethicsMult: 0.96,
  },
  { id: "retail", labelKey: "industryRetail", roiMult: 1.05, ethicsMult: 0.82 },
  {
    id: "manufacturing",
    labelKey: "industryManufacturing",
    roiMult: 1.18,
    ethicsMult: 0.8,
  },
];

const USE_CASES: UseCaseDef[] = [
  {
    id: "support",
    labelKey: "useCaseSupport",
    roiMult: 0.95,
    ethicsMult: 0.94,
    riskMult: 0.7,
  },
  {
    id: "predictive",
    labelKey: "useCasePredictive",
    roiMult: 1.3,
    ethicsMult: 0.78,
    riskMult: 1.1,
  },
  {
    id: "content",
    labelKey: "useCaseContent",
    roiMult: 1.12,
    ethicsMult: 0.65,
    riskMult: 1.05,
  },
  {
    id: "ops",
    labelKey: "useCaseOps",
    roiMult: 1.22,
    ethicsMult: 0.87,
    riskMult: 0.85,
  },
  {
    id: "rnd",
    labelKey: "useCaseRnd",
    roiMult: 1.42,
    ethicsMult: 0.82,
    riskMult: 1.25,
  },
];

const TOLERANCES: ToleranceDef[] = [
  {
    id: "conservative",
    labelKey: "toleranceConservative",
    roiMult: 0.86,
    riskMult: 0.7,
  },
  {
    id: "balanced",
    labelKey: "toleranceBalanced",
    roiMult: 1.0,
    riskMult: 1.0,
  },
  {
    id: "aggressive",
    labelKey: "toleranceAggressive",
    roiMult: 1.22,
    riskMult: 1.45,
  },
];

const HORIZONS = [6, 12, 24, 36] as const;
type Horizon = (typeof HORIZONS)[number];

const MIN_AMOUNT = 25_000;
const MAX_AMOUNT = 1_000_000;
const STEP_AMOUNT = 5_000;

const DEFAULT_STATE = {
  amount: 250_000,
  horizon: 12 as Horizon,
  industry: "saas" as IndustryId,
  useCase: "predictive" as UseCaseId,
  tolerance: "balanced" as ToleranceId,
};

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}

interface SimResult {
  roi: number;
  netReturn: number;
  risk: number;
  ethics: number;
  breakevenMonth: number | null;
  cashflow: { month: number; value: number }[];
  verdictKey:
    | "verdictStrong"
    | "verdictPromising"
    | "verdictCaution"
    | "verdictConservative";
}

function simulate(state: typeof DEFAULT_STATE): SimResult {
  const industry = INDUSTRIES.find((i) => i.id === state.industry)!;
  const useCase = USE_CASES.find((u) => u.id === state.useCase)!;
  const tolerance = TOLERANCES.find((t) => t.id === state.tolerance)!;

  const horizonBoost = 1 + Math.log2(state.horizon / 6) * 0.18;
  const rawRoi =
    26 *
    industry.roiMult *
    useCase.roiMult *
    tolerance.roiMult *
    horizonBoost;
  const roi = Math.round(rawRoi * 10) / 10;
  const netReturn = Math.round((state.amount * rawRoi) / 100);

  const sizeFactor = clamp(Math.log10(state.amount / MIN_AMOUNT) * 7, 0, 25);
  const horizonRiskFactor = state.horizon >= 24 ? 6 : 0;
  const rawRisk =
    (32 + sizeFactor + horizonRiskFactor) *
    useCase.riskMult *
    tolerance.riskMult;
  const risk = clamp(Math.round(rawRisk), 8, 95);

  const ethics = clamp(
    Math.round(industry.ethicsMult * useCase.ethicsMult * 100),
    20,
    99
  );

  const steps = Math.min(state.horizon, 24);
  const stepMonths = state.horizon / steps;
  const finalNet = netReturn;
  const cashflow: { month: number; value: number }[] = [];
  let breakevenMonth: number | null = null;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const progress = 1 / (1 + Math.exp(-9 * (t - 0.55)));
    const value = Math.round(-state.amount + (state.amount + finalNet) * progress);
    const month = Math.round(i * stepMonths);
    cashflow.push({ month, value });
    if (breakevenMonth === null && value >= 0) {
      breakevenMonth = month;
    }
  }

  let verdictKey: SimResult["verdictKey"];
  if (roi >= 36 && risk <= 50 && ethics >= 75) verdictKey = "verdictStrong";
  else if (risk >= 65) verdictKey = "verdictCaution";
  else if (roi >= 22) verdictKey = "verdictPromising";
  else verdictKey = "verdictConservative";

  return { roi, netReturn, risk, ethics, breakevenMonth, cashflow, verdictKey };
}

function formatCurrency(value: number) {
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";
  if (abs >= 1_000_000) return `${sign}€${(abs / 1_000_000).toFixed(2)}M`;
  if (abs >= 1_000) return `${sign}€${Math.round(abs / 1_000)}k`;
  return `${sign}€${abs}`;
}

function riskTone(risk: number) {
  if (risk < 35) return { ring: "ring-emerald-500/30", text: "text-emerald-500", bar: "from-emerald-400 to-emerald-500" };
  if (risk < 55) return { ring: "ring-teal-500/30", text: "text-teal-500", bar: "from-teal-400 to-teal-500" };
  if (risk < 75) return { ring: "ring-amber-500/30", text: "text-amber-500", bar: "from-amber-400 to-amber-500" };
  return { ring: "ring-red-500/30", text: "text-red-500", bar: "from-red-400 to-red-500" };
}

function ethicsTone(ethics: number) {
  if (ethics >= 80) return { text: "text-emerald-500", bar: "from-emerald-400 to-emerald-500" };
  if (ethics >= 60) return { text: "text-teal-500", bar: "from-teal-400 to-teal-500" };
  return { text: "text-amber-500", bar: "from-amber-400 to-amber-500" };
}

interface CashflowChartProps {
  data: { month: number; value: number }[];
  horizon: number;
  amount: number;
  breakevenMonth: number | null;
  monthsLabel: string;
}

function CashflowChart({
  data,
  horizon,
  amount,
  breakevenMonth,
  monthsLabel,
}: CashflowChartProps) {
  const width = 600;
  const height = 200;
  const padX = 36;
  const padY = 24;

  const minValue = Math.min(...data.map((d) => d.value));
  const maxValue = Math.max(...data.map((d) => d.value));
  const valueRange = Math.max(1, maxValue - minValue);

  const toX = (month: number) =>
    padX + ((width - padX * 2) * month) / horizon;
  const toY = (value: number) =>
    padY + ((height - padY * 2) * (maxValue - value)) / valueRange;

  const linePath = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${toX(d.month)} ${toY(d.value)}`)
    .join(" ");
  const areaPath =
    `${linePath} L ${toX(horizon)} ${toY(minValue)} L ${toX(0)} ${toY(minValue)} Z`;

  const zeroY = toY(0);
  const breakevenX =
    breakevenMonth !== null && breakevenMonth <= horizon
      ? toX(breakevenMonth)
      : null;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface-elevated/60 p-3 sm:p-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-44 w-full sm:h-52"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="demoArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="demoLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>

        <line
          x1={padX}
          x2={width - padX}
          y1={zeroY}
          y2={zeroY}
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeDasharray="4 4"
          className="text-muted"
        />

        <path d={areaPath} fill="url(#demoArea)" />
        <path
          d={linePath}
          fill="none"
          stroke="url(#demoLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {breakevenX !== null && (
          <>
            <line
              x1={breakevenX}
              x2={breakevenX}
              y1={padY}
              y2={height - padY}
              stroke="#14b8a6"
              strokeOpacity="0.45"
              strokeDasharray="2 4"
            />
            <circle cx={breakevenX} cy={zeroY} r="4" fill="#14b8a6" />
          </>
        )}

        {data.length > 1 && (
          <circle
            cx={toX(data[data.length - 1].month)}
            cy={toY(data[data.length - 1].value)}
            r="4.5"
            fill="#0d9488"
            stroke="white"
            strokeWidth="1.5"
          />
        )}
      </svg>

      <div className="mt-3 flex items-center justify-between text-xs text-muted">
        <span>0 {monthsLabel}</span>
        <span className="text-foreground/80">
          -{formatCurrency(amount)} →{" "}
          <span className="font-medium text-accent">
            {formatCurrency(data[data.length - 1].value)}
          </span>
        </span>
        <span>
          {horizon} {monthsLabel}
        </span>
      </div>
    </div>
  );
}

interface ControlLabelProps {
  label: string;
  value?: string;
}

function ControlLabel({ label, value }: ControlLabelProps) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </span>
      {value && (
        <span className="text-sm font-semibold text-foreground tabular-nums">
          {value}
        </span>
      )}
    </div>
  );
}

interface PillGroupProps<T extends string | number> {
  value: T;
  options: { id: T; label: string }[];
  onChange: (id: T) => void;
}

function PillGroup<T extends string | number>({
  value,
  options,
  onChange,
}: PillGroupProps<T>) {
  return (
    <div className="grid grid-cols-3 gap-2" role="radiogroup">
      {options.map((o) => {
        const active = o.id === value;
        return (
          <button
            key={String(o.id)}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o.id)}
            className={cn(
              "rounded-xl border px-3 py-2 text-sm font-medium transition-all",
              active
                ? "border-accent bg-accent/10 text-accent shadow-sm"
                : "border-border bg-surface text-muted hover:border-accent/40 hover:text-foreground"
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

interface SelectFieldProps {
  value: string;
  options: { id: string; label: string }[];
  onChange: (id: string) => void;
  ariaLabel: string;
}

function SelectField({ value, options, onChange, ariaLabel }: SelectFieldProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel}
        className="w-full appearance-none rounded-xl border border-border bg-surface px-4 py-2.5 pr-9 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>
      <svg
        viewBox="0 0 12 12"
        className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-muted"
        aria-hidden
      >
        <path
          d="M2 4.5l4 4 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Demo() {
  const { t } = useLanguage();
  const d = t.demo;
  const [state, setState] = useState(DEFAULT_STATE);

  const result = useMemo(() => simulate(state), [state]);

  const verdictTone = useMemo(() => {
    switch (result.verdictKey) {
      case "verdictStrong":
        return {
          accent: "from-emerald-500/15 to-emerald-500/0",
          dot: "bg-emerald-500",
          label: "text-emerald-500",
        };
      case "verdictPromising":
        return {
          accent: "from-teal-500/15 to-teal-500/0",
          dot: "bg-teal-500",
          label: "text-teal-500",
        };
      case "verdictCaution":
        return {
          accent: "from-amber-500/15 to-amber-500/0",
          dot: "bg-amber-500",
          label: "text-amber-500",
        };
      case "verdictConservative":
      default:
        return {
          accent: "from-slate-500/10 to-slate-500/0",
          dot: "bg-slate-400",
          label: "text-foreground",
        };
    }
  }, [result.verdictKey]);

  const rTone = riskTone(result.risk);
  const eTone = ethicsTone(result.ethics);

  return (
    <Section
      id="demo"
      className="relative overflow-hidden bg-background"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-12 -z-10 h-72 w-[min(1100px,100vw)] -translate-x-1/2 rounded-full bg-gradient-to-b from-teal-100/70 via-cyan-50/30 to-transparent blur-3xl dark:from-teal-950/30"
        aria-hidden
      />
      <SectionHeader
        eyebrow={d.eyebrow}
        title={d.title}
        description={d.description}
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border bg-surface p-5 shadow-sm sm:p-6"
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Sparkles className="h-4 w-4" />
              </span>
              <h3 className="text-base font-semibold text-foreground">
                {d.inputsTitle}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setState(DEFAULT_STATE)}
              className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {d.resetLabel}
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <ControlLabel
                label={d.amountLabel}
                value={`€${state.amount.toLocaleString("en-US")}`}
              />
              <input
                type="range"
                min={MIN_AMOUNT}
                max={MAX_AMOUNT}
                step={STEP_AMOUNT}
                value={state.amount}
                onChange={(e) =>
                  setState((s) => ({ ...s, amount: Number(e.target.value) }))
                }
                aria-label={d.amountLabel}
                className="simpack-range w-full"
                style={
                  {
                    "--sp-range-progress": `${
                      ((state.amount - MIN_AMOUNT) /
                        (MAX_AMOUNT - MIN_AMOUNT)) *
                      100
                    }%`,
                  } as React.CSSProperties
                }
              />
              <div className="mt-1 flex justify-between text-[11px] text-muted">
                <span>€25k</span>
                <span>€1M</span>
              </div>
            </div>

            <div>
              <ControlLabel
                label={d.horizonLabel}
                value={`${state.horizon} ${d.monthsShort}`}
              />
              <PillGroup<Horizon>
                value={state.horizon}
                onChange={(h) => setState((s) => ({ ...s, horizon: h }))}
                options={HORIZONS.map((h) => ({
                  id: h,
                  label: `${h} ${d.monthsShort}`,
                })) as { id: Horizon; label: string }[]}
              />
            </div>

            <div>
              <ControlLabel label={d.industryLabel} />
              <SelectField
                ariaLabel={d.industryLabel}
                value={state.industry}
                onChange={(id) =>
                  setState((s) => ({ ...s, industry: id as IndustryId }))
                }
                options={INDUSTRIES.map((i) => ({
                  id: i.id,
                  label: d[i.labelKey] ?? i.id,
                }))}
              />
            </div>

            <div>
              <ControlLabel label={d.useCaseLabel} />
              <SelectField
                ariaLabel={d.useCaseLabel}
                value={state.useCase}
                onChange={(id) =>
                  setState((s) => ({ ...s, useCase: id as UseCaseId }))
                }
                options={USE_CASES.map((u) => ({
                  id: u.id,
                  label: d[u.labelKey] ?? u.id,
                }))}
              />
            </div>

            <div>
              <ControlLabel label={d.toleranceLabel} />
              <PillGroup<ToleranceId>
                value={state.tolerance}
                onChange={(id) =>
                  setState((s) => ({ ...s, tolerance: id }))
                }
                options={TOLERANCES.map((t) => ({
                  id: t.id,
                  label: d[t.labelKey] ?? t.id,
                }))}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-3xl border border-border bg-surface p-5 shadow-lg shadow-slate-200/40 dark:shadow-black/25 sm:p-6"
        >
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">
              {d.resultsTitle}
            </h3>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/15 px-2.5 py-0.5 text-[11px] font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t.impact.live}
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <MetricCard
              label={d.roiLabel}
              valueKey={`${result.roi}-roi`}
              icon={<TrendingUp className="h-4 w-4" />}
              accent="text-accent"
            >
              <span className="text-2xl font-semibold tracking-tight text-foreground tabular-nums sm:text-[1.65rem]">
                +{result.roi.toFixed(1)}%
              </span>
              <span className="mt-0.5 text-xs text-muted">
                {formatCurrency(result.netReturn)} {d.netReturn.toLowerCase()}
              </span>
            </MetricCard>

            <MetricCard
              label={d.riskLabel}
              valueKey={`${result.risk}-risk`}
              icon={<ShieldAlert className="h-4 w-4" />}
              accent={rTone.text}
            >
              <span
                className={cn(
                  "text-2xl font-semibold tracking-tight tabular-nums sm:text-[1.65rem]",
                  rTone.text
                )}
              >
                {result.risk}
                <span className="text-sm font-medium text-muted">/100</span>
              </span>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-elevated">
                <motion.div
                  initial={false}
                  animate={{ width: `${result.risk}%` }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "h-full rounded-full bg-gradient-to-r",
                    rTone.bar
                  )}
                />
              </div>
            </MetricCard>

            <MetricCard
              label={d.ethicsLabel}
              valueKey={`${result.ethics}-eth`}
              icon={<Scale className="h-4 w-4" />}
              accent={eTone.text}
            >
              <span
                className={cn(
                  "text-2xl font-semibold tracking-tight tabular-nums sm:text-[1.65rem]",
                  eTone.text
                )}
              >
                {result.ethics}
                <span className="text-sm font-medium text-muted">/100</span>
              </span>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-elevated">
                <motion.div
                  initial={false}
                  animate={{ width: `${result.ethics}%` }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "h-full rounded-full bg-gradient-to-r",
                    eTone.bar
                  )}
                />
              </div>
            </MetricCard>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-baseline justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {d.cashflowTitle}
                </p>
                <p className="text-xs text-muted">{d.cashflowSubtitle}</p>
              </div>
              {result.breakevenMonth !== null ? (
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                  {d.breakeven}: {result.breakevenMonth} {d.monthsShort}
                </span>
              ) : (
                <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-500">
                  &gt; {state.horizon} {d.monthsShort}
                </span>
              )}
            </div>
            <CashflowChart
              data={result.cashflow}
              horizon={state.horizon}
              amount={state.amount}
              breakevenMonth={result.breakevenMonth}
              monthsLabel={d.monthsShort}
            />
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-surface-elevated/60 p-3">
                <p className="text-muted">{d.initialOutlay}</p>
                <p className="mt-1 font-semibold text-foreground tabular-nums">
                  -{formatCurrency(state.amount)}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface-elevated/60 p-3">
                <p className="text-muted">{d.netReturn}</p>
                <p className="mt-1 font-semibold text-accent tabular-nums">
                  +{formatCurrency(result.netReturn)}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface-elevated/60 p-3 col-span-2 sm:col-span-1">
                <p className="text-muted">{d.breakeven}</p>
                <p className="mt-1 font-semibold text-foreground tabular-nums">
                  {result.breakevenMonth !== null
                    ? `${result.breakevenMonth} ${d.monthsShort}`
                    : `> ${state.horizon} ${d.monthsShort}`}
                </p>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={result.verdictKey}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "relative mt-5 overflow-hidden rounded-2xl border border-border bg-surface-elevated/60 p-4 sm:p-5"
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-br",
                  verdictTone.accent
                )}
                aria-hidden
              />
              <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-1 h-2 w-2 shrink-0 rounded-full",
                      verdictTone.dot
                    )}
                  />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                      {d.verdictTitle}
                    </p>
                    <p
                      className={cn(
                        "mt-0.5 text-base font-semibold",
                        verdictTone.label
                      )}
                    >
                      {d[result.verdictKey]}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {d[`${result.verdictKey}Desc`]}
                    </p>
                  </div>
                </div>
                <Button
                  href={PRICING_URL}
                  variant="accent"
                  size="sm"
                  className="self-start sm:self-center"
                >
                  {t.cta.try}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          <p className="mt-5 flex items-center justify-center gap-1.5 text-[11px] text-muted">
            <Sparkles className="h-3 w-3 text-accent" />
            {d.poweredBy}
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

interface MetricCardProps {
  label: string;
  valueKey: string;
  icon: React.ReactNode;
  accent: string;
  children: React.ReactNode;
}

function MetricCard({ label, valueKey, icon, accent, children }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated/60 p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
        </span>
        <span className={cn(accent)}>{icon}</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={valueKey}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="mt-2 flex flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
