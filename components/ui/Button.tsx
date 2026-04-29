import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "icon";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variantClass: Record<Variant, string> = {
  primary: "bg-[var(--cta-primary-bg)] text-[var(--cta-primary-text)] hover:bg-[var(--cta-primary-bg)]/90",
  secondary: "bg-[var(--cta-secondary-bg)] text-[var(--cta-secondary-text)] border border-[var(--cta-secondary-border)] hover:bg-[var(--bg-surface-elevated)]",
  ghost: "bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-surface)]",
  icon: "bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-surface)] p-2",
};

const sizeClass: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, asChild = false, ...rest }, ref) => {
    const Comp: any = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]",
          variantClass[variant],
          sizeClass[size],
          className
        )}
        {...rest}
      />
    );
  }
);
Button.displayName = "Button";
