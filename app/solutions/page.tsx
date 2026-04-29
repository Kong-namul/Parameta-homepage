import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { solutions } from "@/lib/solutions";

const COPY = {
  title: "자기 길로 들어가세요.",
  subtitle: "청중별 큐레이션된 적용 모델·제품 조합.",
  cta: "→ See solution",
};

export default function SolutionsIndex() {
  const c = COPY;
  return (
    <>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">SOLUTIONS BY AUDIENCE</div>
          <h1 className="h-hero font-semibold">{c.title}</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl">{c.subtitle}</p>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(solutions).map(([slug, s]) => (
              <Link key={slug} href={`/solutions/${slug}`}>
                <Card variant="elevated" className="h-full">
                  <h2 className="text-2xl font-semibold">{s.name}</h2>
                  <p className="text-sm text-[var(--text-secondary)] mt-3">{s.audience}</p>
                  <div className="mt-8 text-[var(--accent-primary)] text-sm">{c.cta}</div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
