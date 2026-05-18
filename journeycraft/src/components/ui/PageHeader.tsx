import * as React from "react";
import { cn } from "@/lib/cn";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="min-w-0">
        {eyebrow && (
          <div className="text-xs font-medium uppercase tracking-wider text-[var(--color-fg-subtle)] mb-1.5">
            {eyebrow}
          </div>
        )}
        <h1 className="text-2xl sm:text-[28px] font-semibold tracking-tight font-display text-balance">
          {title}
        </h1>
        {description && (
          <p className="text-[15px] text-[var(--color-fg-muted)] mt-1.5 max-w-2xl text-pretty">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
    </header>
  );
}

export function Section({
  title,
  description,
  action,
  children,
  className,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("space-y-3", className)}>
      {(title || action) && (
        <div className="flex items-end justify-between">
          <div>
            {title && <h2 className="text-sm font-semibold text-[var(--color-fg)] font-display">{title}</h2>}
            {description && (
              <p className="text-xs text-[var(--color-fg-muted)] mt-0.5">{description}</p>
            )}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
