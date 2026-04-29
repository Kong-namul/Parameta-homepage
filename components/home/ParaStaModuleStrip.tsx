import { Container } from "@/components/layout/Container";

const MODULES = [
  { name: "Issuance", desc: "스테이블코인 발행" },
  { name: "Wallet", desc: "디지털 자산 지갑 인프라" },
  { name: "Orchestration", desc: "Fiat ↔ Crypto 미들웨어" },
  { name: "Onchain KYC", desc: "Verify Once, Use Everywhere" },
  { name: "Unified Admin", desc: "운영 관제탑" },
] as const;

export function ParaStaModuleStrip() {
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <div className="label-mono mb-3">PARASTA MODULES</div>
        <h2 className="h-section">하나의 플랫폼, 5개 모듈.</h2>
        <div className="grid md:grid-cols-5 gap-3 mt-12">
          {MODULES.map((m) => (
            <div
              key={m.name}
              className="group p-5 border border-[var(--border)] rounded-md hover:border-[var(--accent-primary)] transition-colors"
            >
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
