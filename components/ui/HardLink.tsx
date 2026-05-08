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

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function withBase(href: string): string {
  if (!href.startsWith("/")) return href; // external · hash · protocol-relative
  if (BASE_PATH && href.startsWith(BASE_PATH + "/")) return href;
  if (BASE_PATH && href === BASE_PATH) return href;
  return `${BASE_PATH}${href}`;
}

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
    <a href={withBase(href)} {...rest}>
      {children}
    </a>
  );
}
