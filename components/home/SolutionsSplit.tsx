import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const SOLS = [
  { slug: "financial", name: "Financial", desc: "금융사·STO 발행자" },
  { slug: "public", name: "Public", desc: "지자체·공공기관" },
  { slug: "enterprise", name: "Enterprise", desc: "일반 기업·인앱 커머스" },
] as const;

export function SolutionsSplit() {
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <div className="label-mono mb-3">SOLUTIONS BY AUDIENCE</div>
        <h2 className="h-section">자기 길로 들어가세요.</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {SOLS.map((s) => (
            <Link key={s.slug} href={`/solutions/${s.slug}`}>
              <Card variant="elevated" className="h-full">
                <h3 className="text-2xl font-semibold">{s.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-3">{s.desc}</p>
                <div className="mt-8 text-[var(--accent-primary)] text-sm">→ See solution</div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
