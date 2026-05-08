import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";

interface ProductHeroProps {
  name: string;
  tagline: string;
  description: string;
  label?: string;
  children?: React.ReactNode;
}

export function ProductHero({ name, tagline, description, label, children }: ProductHeroProps) {
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <nav aria-label="Breadcrumb" className="label-mono mb-8 flex items-center gap-2">
          <Link
            href="/products"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Products
          </Link>
          <span className="text-[var(--text-tertiary)]">/</span>
          <span className="text-[var(--text-primary)]">{name}</span>
        </nav>
        <h1 className="h-hero font-semibold tracking-tight">{name}</h1>
        <p className="text-xl md:text-2xl text-[var(--text-secondary)] mt-6 max-w-3xl font-medium leading-snug">
          {tagline}
        </p>
        <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">{description}</p>
        {children && <div className="mt-8 flex gap-3 flex-wrap">{children}</div>}
      </Container>
    </section>
  );
}
