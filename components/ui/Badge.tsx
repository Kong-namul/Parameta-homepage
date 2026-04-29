import { HTMLAttributes } from "react";
import { clsx } from "clsx";

export function Badge({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium font-mono uppercase tracking-wider",
        "bg-[var(--accent-primary-soft)] text-[var(--accent-primary)]",
        className
      )}
      {...rest}
    />
  );
}
