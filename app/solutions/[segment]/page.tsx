import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { solutions, type SolutionKey } from "@/lib/solutions";

type Params = Promise<{ segment: string }>;

const COPY = {
  label: "SOLUTION FOR",
  talkToSales: "Talk to sales",
  appliedTitle: "적용 모델.",
  productsTitle: "사용 제품·모듈.",
  closingPrefix: "Ready to start with",
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
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">{c.label}</div>
          <h1 className="h-hero font-semibold">{s.name}</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl text-lg">{s.audience}</p>
          <Button variant="primary" className="mt-8">{c.talkToSales}</Button>
        </Container>
      </section>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">APPLIED MODELS</div>
          <h2 className="h-section">{c.appliedTitle}</h2>
          <ul className="grid md:grid-cols-2 gap-4 mt-12">
            {s.models.map((m) => (
              <li key={m} className="p-5 border border-[var(--border)] rounded-md flex items-start gap-3">
                <span className="text-[var(--accent-primary)] mt-0.5">→</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">PRODUCTS USED</div>
          <h2 className="h-section">{c.productsTitle}</h2>
          <ul className="grid md:grid-cols-2 gap-4 mt-12">
            {s.products_used.map((p) => (
              <li key={p} className="p-5 border border-[var(--border)] rounded-md">{p}</li>
            ))}
          </ul>
          <p className="text-sm text-[var(--text-tertiary)] mt-8 italic">{s.note}</p>
        </Container>
      </section>
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingPrefix} {s.name}?</h2>
          <Button variant="primary" className="mt-8">{c.talkToSales}</Button>
        </Container>
      </section>
    </>
  );
}
