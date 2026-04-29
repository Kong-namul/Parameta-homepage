import { HTMLAttributes } from "react";
import { clsx } from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated";
}

export function Card({ variant = "default", className, ...rest }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg border p-6 transition-colors",
        variant === "default" && "bg-[var(--bg-surface)] border-[var(--border)]",
        variant === "elevated" && "bg-[var(--bg-surface-elevated)] border-[var(--border)] hover:border-[var(--accent-primary)]",
        className
      )}
      {...rest}
    />
  );
}
