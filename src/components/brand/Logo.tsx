import Link from "next/link";
import { SimpackMark } from "@/components/brand/SimpackMark";
import { HOME_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  /** Use on dark sections (Impact footer, etc.) */
  onDark?: boolean;
}

const sizes = {
  sm: { mark: 28, text: "text-base" },
  md: { mark: 32, text: "text-lg" },
  lg: { mark: 40, text: "text-xl" },
};

export function Logo({
  className,
  showWordmark = true,
  size = "md",
  onDark = false,
}: LogoProps) {
  const { mark, text } = sizes[size];

  return (
    <Link
      href={HOME_URL}
      className={cn("inline-flex items-center gap-2.5 group", className)}
      aria-label="Simpack home"
    >
      <SimpackMark
        variant={onDark ? "on-dark" : "color"}
        size={mark}
        withContainer={!onDark}
        className="transition-transform duration-200 group-hover:scale-[1.03]"
      />
      {showWordmark && (
        <span
          className={cn(
            "font-semibold tracking-[-0.02em]",
            onDark ? "text-white" : "text-foreground",
            text
          )}
        >
          Simpack
        </span>
      )}
    </Link>
  );
}

export { SimpackMark as LogoMark } from "@/components/brand/SimpackMark";
