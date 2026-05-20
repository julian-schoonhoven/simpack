import { cn } from "@/lib/utils";

export type MarkVariant = "color" | "mono" | "on-dark" | "favicon";

interface SimpackMarkProps {
  variant?: MarkVariant;
  size?: number;
  className?: string;
  /** Include rounded container behind the mark */
  withContainer?: boolean;
}

const palettes = {
  color: {
    container: "#0A101F",
    slab: "#FAFBFC",
    node: "#1E5EFF",
    bridge: "#1E5EFF",
  },
  mono: {
    container: "#0A101F",
    slab: "#0A101F",
    node: "#0A101F",
    bridge: "#0A101F",
  },
  "on-dark": {
    container: "transparent",
    slab: "#FAFBFC",
    node: "#38BDF8",
    bridge: "#38BDF8",
  },
  favicon: {
    container: "#0A101F",
    slab: "#FAFBFC",
    node: "#1E5EFF",
    bridge: "#1E5EFF",
  },
} as const;

/**
 * Simpack logomark — modular S formed by three precision slabs
 * connected by decision-path bridges. Grid-aligned for 16px clarity.
 */
export function SimpackMark({
  variant = "color",
  size = 32,
  className,
  withContainer,
}: SimpackMarkProps) {
  const c = palettes[variant];
  const showContainer = withContainer ?? variant !== "on-dark";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      {showContainer && (
        <rect
          width="48"
          height="48"
          rx="11"
          fill={c.container === "transparent" ? "none" : c.container}
        />
      )}

      {/* Top slab — input / upstream data */}
      <rect x="9" y="9" width="22" height="7" rx="2.5" fill={c.slab} />

      {/* Middle slab — simulation junction */}
      <rect x="17" y="20" width="22" height="7" rx="2.5" fill={c.slab} />

      {/* Decision node — scenario branch point */}
      <circle cx="28" cy="23.5" r="2.25" fill={c.node} />

      {/* Bottom slab — output / decision */}
      <rect x="9" y="31" width="22" height="7" rx="2.5" fill={c.slab} />

      {/* Path connectors — structured flow between stages */}
      <path
        d="M28 16.5 L28 20"
        stroke={c.bridge}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={variant === "mono" ? 1 : 0.85}
      />
      <path
        d="M20 27 L17 31"
        stroke={c.bridge}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={variant === "mono" ? 1 : 0.85}
      />
    </svg>
  );
}

/** Pixel-snapped favicon mark (16×16) */
export function SimpackFaviconMark({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="16" height="16" rx="4" fill="#0A101F" />
      <rect x="1" y="1" width="7" height="3" rx="1" fill="#FAFBFC" />
      <rect x="5" y="6" width="7" height="3" rx="1" fill="#FAFBFC" />
      <rect x="1" y="11" width="7" height="3" rx="1" fill="#FAFBFC" />
      <rect x="7" y="7" width="2" height="2" rx="0.5" fill="#1E5EFF" />
    </svg>
  );
}
