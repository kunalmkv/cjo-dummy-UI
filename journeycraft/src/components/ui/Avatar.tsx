import * as React from "react";
import { cn } from "@/lib/cn";

const sizes = {
  xs: "size-6 text-[10px]",
  sm: "size-8 text-[11px]",
  md: "size-9 text-xs",
  lg: "size-11 text-sm",
};

function hashHue(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h % 360;
}

export function Avatar({
  name,
  src,
  size = "md",
  className,
}: {
  name: string;
  src?: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const hue = hashHue(name);
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold text-white ring-2 ring-[var(--color-bg-elev)] overflow-hidden",
        sizes[size],
        className,
      )}
      style={{
        background: src
          ? undefined
          : `linear-gradient(135deg, oklch(0.6 0.16 ${hue}), oklch(0.5 0.18 ${(hue + 40) % 360}))`,
      }}
    >
      {src ? <img src={src} alt={name} className="size-full object-cover" /> : initials}
    </span>
  );
}

export function AvatarStack({
  people,
  max = 4,
  size = "sm",
}: {
  people: { name: string; src?: string }[];
  max?: number;
  size?: keyof typeof sizes;
}) {
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  return (
    <div className="flex items-center -space-x-2">
      {shown.map((p, i) => (
        <Avatar key={i} name={p.name} src={p.src} size={size} />
      ))}
      {extra > 0 && (
        <span
          className={cn(
            "inline-flex items-center justify-center rounded-full bg-[var(--color-bg-muted)] text-[var(--color-fg-muted)] font-semibold ring-2 ring-[var(--color-bg-elev)]",
            sizes[size],
          )}
        >
          +{extra}
        </span>
      )}
    </div>
  );
}
