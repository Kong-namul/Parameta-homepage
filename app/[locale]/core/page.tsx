import Link from "next/link";
import { Container } from "@/components/layout/Container";

const tech = [
  { name: "Loopchain", desc: "자체 블록체인 엔진. ICON 메인넷·HAVAH 운영. 20,000+ TPS 검증.", docs: "/docs/loopchain" },
  { name: "BTP", desc: "자체 인터체인 프로토콜. BSC·Polkadot·NEAR·Harmony 연결.", docs: "/docs/btp" },
  { name: "Storage (PDS/BFS)", desc: "Personal Data Storage + Blockchain File Storage 인프라.", docs: "/docs/storage" },
];

export default function CorePage() {
  return (
    <>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">CORE TECH</div>
          <h1 className="h-hero font-semibold max-w-3xl">자체 블록체인 인프라 — Loopchain · BTP · Storage.</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl">
            제품의 모든 모듈은 우리가 직접 만든 기반 기술 위에서 동작합니다.
          </p>
        </Container>
      </section>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="grid md:grid-cols-3 gap-4">
            {tech.map((t) => (
              <div key={t.name} className="p-6 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-3">{t.desc}</p>
                <Link href={t.docs} className="label-mono text-[var(--accent-primary)] mt-4 inline-block">기술 문서 보기 →</Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">ARCHITECTURE</div>
          <h2 className="h-section">시스템 구조.</h2>
          <div className="mt-12 p-12 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
            인터랙티브 시스템 다이어그램 placeholder — Loopchain·BTP·Storage 3 레이어 관계도 (Phase 11)
          </div>
        </Container>
      </section>
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">More technical detail?</h2>
          <Link href="/docs" className="text-[var(--accent-primary)] mt-4 inline-block">→ Read full Docs</Link>
        </Container>
      </section>
    </>
  );
}
