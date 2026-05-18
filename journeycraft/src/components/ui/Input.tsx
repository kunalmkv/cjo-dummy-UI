import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, leftIcon, rightSlot, ...props }, ref) => (
    <div className="relative w-full">
      {leftIcon && (
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-fg-subtle)]">
          {leftIcon}
        </div>
      )}
      <input
        ref={ref}
        className={cn(
          "h-10 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] text-sm text-[var(--color-fg)]",
          "px-3 placeholder:text-[var(--color-fg-subtle)] transition-colors duration-150",
          "hover:border-[var(--color-border-strong)] focus:border-[var(--color-brand-500)] focus:outline-none focus:ring-4 focus:ring-[color-mix(in_oklch,var(--color-brand-500)_18%,transparent)]",
          "disabled:cursor-not-allowed disabled:opacity-60",
          leftIcon && "pl-9",
          rightSlot && "pr-10",
          className,
        )}
        {...props}
      />
      {rightSlot && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2">{rightSlot}</div>
      )}
    </div>
  ),
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-[80px] w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] text-sm text-[var(--color-fg)]",
      "px-3 py-2 placeholder:text-[var(--color-fg-subtle)] transition-colors duration-150",
      "hover:border-[var(--color-border-strong)] focus:border-[var(--color-brand-500)] focus:outline-none focus:ring-4 focus:ring-[color-mix(in_oklch,var(--color-brand-500)_18%,transparent)]",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
