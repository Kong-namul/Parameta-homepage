import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

export function TopNav() {
  const items = [
    { href: "/company", label: "Company" },
    { href: "/products", label: "Products" },
    { href: "/solutions", label: "Solutions" },
    { href: "/core", label: "Core" },
    { href: "/trust", label: "Trust" },
    { href: "/ir", label: "IR" },
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
          <Button variant="primary" size="sm" asChild>
            <Link href="/contact">무료 컨설팅</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
