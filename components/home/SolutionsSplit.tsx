import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const SOLS = [
  { slug: "financial", name: "Financial", desc: "금융사·STO 발행자" },
  { slug: "public", name: "Public", desc: "지자체·공공기관" },
  { slug: "enterprise", name: "Enterprise", desc: "일반 기업·플랫폼 운영사" },
] as const;

export function SolutionsSplit() {
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <h2 className="h-section">산업별로 검증된 적용 레퍼런스.</h2>
        <p className="text-[var(--text-secondary)] mt-3 max-w-xl">금융·공공·일반 기업, 각 영역에서 실제로 운영 중인 모델을 확인하세요.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {SOLS.map((s) => (
            <Link key={s.slug} href={`/solutions/${s.slug}`}>
              <Card variant="elevated" className="h-full flex flex-col">
                <h3 className="text-2xl font-semibold">{s.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-3 flex-1">{s.desc}</p>
                <div className="mt-12 text-[var(--accent-primary)] text-sm">→ See solution</div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
