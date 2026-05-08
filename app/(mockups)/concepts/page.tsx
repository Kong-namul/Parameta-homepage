import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const concepts = [
  { id: 1, slug: "concept-1", name: "Walking (S1)", desc: "Nine years walking the road. — 발자국·진행형 모션, 9년 타임라인 펼침" },
  { id: 2, slug: "concept-2", name: "Building (S2)", desc: "Steadily built. Still building. — 점진적 빌드업, 픽셀 stack" },
  { id: 3, slug: "concept-3", name: "Two-line (S3)", desc: "We build the road. Korea walks it. — 분할 레이아웃, 두 주체 합류" },
  { id: 4, slug: "concept-4", name: "Three beats (S4)", desc: "Steadily, since 2016. Into Web3. — 부사구별 등장, KPI 칩" },
];

export default function ConceptsIndex() {
  return (
    <section className="py-24">
      <Container className="space-y-8">
        <header>
          <div className="label-mono mb-3">PHASE 4 · USER CHECKPOINT</div>
          <h1 className="h-section">4 Design Concepts — 비교</h1>
          <p className="text-[var(--text-secondary)] mt-3 max-w-2xl">
            각 콘셉트는 동일한 디자인 시스템 베이스 위에서 hero의 슬로건 톤·시그너처 인터랙션이
            다릅니다. 1개 픽 후 Phase 5+에서 GSAP 인터랙션 추가.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`}>
              <Card variant="elevated">
                <div className="label-mono mb-2">CONCEPT {c.id}</div>
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{c.desc}</p>
                <div className="mt-6 text-[var(--accent-primary)] text-sm">→ Open mockup</div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
