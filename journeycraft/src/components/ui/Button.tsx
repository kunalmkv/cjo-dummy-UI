"use client";
import * as React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "danger" | "accent";
type Size = "xs" | "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantClass: Record<Variant, string> = {
  primary:
    "bg-[var(--color-brand-600)] text-white hover:bg-[var(--color-brand-700)] shadow-[var(--shadow-pop)] active:translate-y-px",
  secondary:
    "bg-[var(--color-bg-elev)] text-[var(--color-fg)] border border-[var(--color-border)] hover:bg-[var(--color-bg-muted)]",
  ghost:
    "text-[var(--color-fg)] hover:bg-[var(--color-bg-muted)]",
  outline:
    "border border-[var(--color-border-strong)] text-[var(--color-fg)] hover:bg-[var(--color-bg-muted)]",
  danger:
    "bg-[var(--color-danger-500)] text-white hover:brightness-110",
  accent:
    "bg-[var(--color-accent-500)] text-white hover:bg-[var(--color-accent-600)] shadow-[var(--shadow-pop)]",
};

const sizeClass: Record<Size, string> = {
  xs: "h-7 px-2.5 text-xs gap-1.5 rounded-md",
  sm: "h-8 px-3 text-[13px] gap-1.5 rounded-md",
  md: "h-10 px-4 text-sm gap-2 rounded-lg",
  lg: "h-12 px-6 text-[15px] gap-2 rounded-xl",
  icon: "h-9 w-9 rounded-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", loading, leftIcon, rightIcon, children, disabled, ...props },
    ref,
  ) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center font-medium whitespace-nowrap select-none transition-all duration-150",
        "disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[var(--color-brand-500)]",
        "cursor-pointer",
        variantClass[variant],
        sizeClass[size],
        className,
      )}
      {...props}
    >
      {loading && (
        <span className="size-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
      )}
      {!loading && leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  ),
);
Button.displayName = "Button";
