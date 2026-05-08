import type { AnchorHTMLAttributes, ReactNode } from "react";

type HardLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children?: ReactNode;
  // Next.js Link compat — accepted but ignored (full reload always)
  prefetch?: boolean | null;
  scroll?: boolean;
  replace?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  legacyBehavior?: boolean;
  locale?: string | false;
};

export default function HardLink({
  href,
  children,
  prefetch: _prefetch,
  scroll: _scroll,
  replace: _replace,
  shallow: _shallow,
  passHref: _passHref,
  legacyBehavior: _legacyBehavior,
  locale: _locale,
  ...rest
}: HardLinkProps) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
