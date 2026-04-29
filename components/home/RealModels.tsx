import { Container } from "@/components/layout/Container";

const MODELS = [
  { key: "payments", tag: "결제", name: "인스코비형 지역화폐", desc: "Consumer + Partner + Service Admin + Token Admin" },
  { key: "portfolio", tag: "포트폴리오", name: "미래에셋증권형 자산 통합", desc: "Consumer + Service Admin" },
  { key: "sto", tag: "STO", name: "부동산 신탁사", desc: "토큰증권 전 주기" },
] as const;

export function RealModels() {
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <div className="label-mono mb-3">VERIFIED MODELS</div>
        <h2 className="h-section">검증된 적용 모델 3종.</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {MODELS.map((m) => (
            <div
              key={m.key}
              className="p-6 border border-[var(--border)] rounded-md hover:border-[var(--accent-primary)] transition-colors"
            >
              <span className="label-mono text-[var(--accent-primary)]">{m.tag}</span>
              <h3 className="font-semibold mt-3">{m.name}</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2">{m.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
