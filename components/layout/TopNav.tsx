import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { LocaleToggle } from "./LocaleToggle";
import { Button } from "@/components/ui/Button";

export function TopNav() {
  const t = useTranslations("nav");
  const items = [
    { href: "/products", label: t("products") },
    { href: "/solutions", label: t("solutions") },
    { href: "/trust", label: t("trust") },
    { href: "/core", label: t("core") },
    { href: "/resources", label: t("resources") },
    { href: "/ir", label: t("ir") },
    { href: "/company", label: t("company") },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          PARAMETA
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--text-secondary)]">
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LocaleToggle />
          <Link
            href="/signin"
            className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            {t("signin")}
          </Link>
          <Button variant="primary" size="sm" asChild>
            <Link href="/contact">{t("contactSales")}</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
