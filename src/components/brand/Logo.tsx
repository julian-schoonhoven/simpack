import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { mark: 28, text: "text-base" },
  md: { mark: 32, text: "text-lg" },
  lg: { mark: 40, text: "text-xl" },
};

export function Logo({ className, showWordmark = true, size = "md" }: LogoProps) {
  const { mark, text } = sizes[size];

  return (
    <Link
      href="/#home"
      className={cn("inline-flex items-center gap-2.5 group", className)}
      aria-label="Simpack home"
    >
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 group-hover:scale-105"
        aria-hidden
      >
        <rect width="40" height="40" rx="10" className="fill-foreground" />
        <path
          d="M12 28V12h4.2c3.8 0 6.2 2.1 6.2 5.4 0 2.2-1.1 3.8-2.9 4.6L26 28h-4.8l-4.8-5.4H16v5.4H12zm4-9h2.8c1.5 0 2.4-.8 2.4-2.1s-.9-2.1-2.4-2.1H16v4.2z"
          className="fill-white"
        />
      </svg>
      {showWordmark && (
        <span
          className={cn(
            "font-semibold tracking-tight text-foreground",
            text
          )}
        >
          Simpack
        </span>
      )}
    </Link>
  );
}

export function LogoMark({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="40" height="40" rx="10" fill="currentColor" />
      <path
        d="M12 28V12h4.2c3.8 0 6.2 2.1 6.2 5.4 0 2.2-1.1 3.8-2.9 4.6L26 28h-4.8l-4.8-5.4H16v5.4H12zm4-9h2.8c1.5 0 2.4-.8 2.4-2.1s-.9-2.1-2.4-2.1H16v4.2z"
        fill="white"
      />
    </svg>
  );
}
