import * as React from "react";
import { cn } from "@/lib/cn";

type Tone = "neutral" | "brand" | "success" | "warning" | "danger" | "info" | "accent";

const tones: Record<Tone, string> = {
  neutral:
    "bg-[var(--color-bg-muted)] text-[var(--color-fg-muted)] border-[var(--color-border)]",
  brand:
    "bg-[color-mix(in_oklch,var(--color-brand-500)_14%,transparent)] text-[var(--color-brand-700)] border-[color-mix(in_oklch,var(--color-brand-500)_25%,transparent)] dark:text-[var(--color-brand-300)]",
  success:
    "bg-[color-mix(in_oklch,var(--color-success-500)_14%,transparent)] text-[color-mix(in_oklch,var(--color-success-500)_85%,black)] dark:text-[color-mix(in_oklch,var(--color-success-500)_75%,white)] border-[color-mix(in_oklch,var(--color-success-500)_25%,transparent)]",
  warning:
    "bg-[color-mix(in_oklch,var(--color-warning-500)_18%,transparent)] text-[color-mix(in_oklch,var(--color-warning-500)_70%,black)] dark:text-[color-mix(in_oklch,var(--color-warning-500)_80%,white)] border-[color-mix(in_oklch,var(--color-warning-500)_30%,transparent)]",
  danger:
    "bg-[color-mix(in_oklch,var(--color-danger-500)_14%,transparent)] text-[color-mix(in_oklch,var(--color-danger-500)_80%,black)] dark:text-[color-mix(in_oklch,var(--color-danger-500)_75%,white)] border-[color-mix(in_oklch,var(--color-danger-500)_25%,transparent)]",
  info:
    "bg-[color-mix(in_oklch,var(--color-info-500)_14%,transparent)] text-[color-mix(in_oklch,var(--color-info-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-info-500)_75%,white)] border-[color-mix(in_oklch,var(--color-info-500)_25%,transparent)]",
  accent:
    "bg-[color-mix(in_oklch,var(--color-accent-500)_16%,transparent)] text-[color-mix(in_oklch,var(--color-accent-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-accent-500)_75%,white)] border-[color-mix(in_oklch,var(--color-accent-500)_25%,transparent)]",
};

export function Badge({
  tone = "neutral",
  className,
  dot,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone; dot?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium",
        tones[tone],
        className,
      )}
      {...props}
    >
      {dot && (
        <span
          className="size-1.5 rounded-full bg-current"
          aria-hidden
        />
      )}
      {children}
    </span>
  );
}
