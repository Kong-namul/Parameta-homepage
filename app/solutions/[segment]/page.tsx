import Link from "@/components/ui/HardLink";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { solutions, type SolutionKey } from "@/lib/solutions";

type Params = Promise<{ segment: string }>;

const COPY = {
  label: "APPLIED CASE",
  talkToSales: "Contact Us →",
  challengesTitle: "이 산업의 풀어야 할 과제.",
  modelsTitle: "검증된 적용 모델.",
  productsTitle: "사용 제품·모듈.",
  benefitsTitle: "도입 이후의 변화.",
  closingPrefix: "Ready to start with",
  productsCta: "전체 제품 둘러보기 →",
};

export function generateStaticParams() {
  return (Object.keys(solutions) as SolutionKey[]).map((segment) => ({ segment }));
}

export default async function SolutionPage({ params }: { params: Params }) {
  const { segment } = await params;
  const s = solutions[segment as SolutionKey];
  if (!s) return notFound();
  const c = COPY;
  return (
    <>
      {/* 1. Hero */}
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
            <Link
              href="/products#cases"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Applied Cases
            </Link>
            <span className="text-[var(--text-tertiary)]">/</span>
            <span className="text-[var(--text-primary)]">{s.name}</span>
          </nav>
          <h1 className="h-hero font-semibold tracking-tight">{s.name}</h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mt-6 max-w-3xl font-medium leading-snug">
            {s.audience}
          </p>
          <p className="text-[var(--text-secondary)] mt-4 max-w-3xl leading-relaxed">{s.heroSummary}</p>
          <Button variant="primary" className="mt-8" asChild>
            <Link href="/contact">{c.talkToSales}</Link>
          </Button>
        </Container>
      </section>

      {/* 2. Challenges */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">CHALLENGES</div>
          <h2 className="h-section">{c.challengesTitle}</h2>
          <ul className="grid md:grid-cols-3 gap-4 mt-12">
            {s.challenges.map((ch) => (
              <li key={ch.title} className="p-6 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{ch.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">{ch.desc}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. Applied Models */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">APPLIED MODELS</div>
          <h2 className="h-section">{c.modelsTitle}</h2>
          <ul className="grid md:grid-cols-2 gap-4 mt-12">
            {s.models.map((m) => (
              <li
                key={m.title}
                className="p-6 border border-[var(--border)] rounded-md hover:border-[var(--accent-primary)] transition-colors"
              >
                <span className="label-mono text-[var(--accent-primary)]">{m.tag}</span>
                <h3 className="font-semibold mt-3">{m.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{m.desc}</p>
                {m.outcome && (
                  <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-tertiary)]">
                    {m.outcome}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4. Products Used */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">PRODUCTS USED</div>
          <h2 className="h-section">{c.productsTitle}</h2>
          <ul className="grid md:grid-cols-2 gap-4 mt-12">
            {s.products_used.map((p) => (
              <li key={p.name} className="p-5 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{p.role}</p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-[var(--text-tertiary)] mt-8 italic">{s.note}</p>
          <Link
            href="/products"
            className="inline-block mt-6 text-[var(--accent-primary)] text-sm hover:underline"
          >
            {c.productsCta}
          </Link>
        </Container>
      </section>

      {/* 5. Benefits */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">OUTCOMES</div>
          <h2 className="h-section">{c.benefitsTitle}</h2>
          <ul className="grid md:grid-cols-3 gap-4 mt-12">
            {s.benefits.map((b) => (
              <li key={b.title} className="p-6 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">{b.desc}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6. Closing */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingPrefix} {s.name}?</h2>
          <Button variant="primary" className="mt-8" asChild>
            <Link href="/contact">{c.talkToSales}</Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
