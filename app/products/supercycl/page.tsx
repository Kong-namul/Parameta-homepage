import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const COPY = {
  heroTitle: "디지털 자산 통합거래 서비스.",
  heroSub:
    "다중 거래소·정산·실시간 모니터링을 하나로. 안전한 Vault 보관까지 한 흐름에서.",
  explore: "Explore →",
  contactSales: "Contact sales",
  capabilitiesTitle: "핵심 가치.",
  capabilities: [
    { name: "다중 거래소 연결", desc: "CEX·DEX 통합 인터페이스" },
    { name: "통합 거래·매매", desc: "단일 API로 자산 운용" },
    { name: "정산·실시간 모니터링", desc: "포지션·수익 한눈에" },
    { name: "안전한 자산 보관", desc: "Vault 기반 수탁" },
  ],
  personasTitle: "사용자 페르소나.",
  personas: [
    { role: "트레이더", desc: "다중 거래소 통합 운용" },
    { role: "STO 발행자", desc: "디지털 자산 거래·정산" },
    { role: "자산 관리사", desc: "포트폴리오·고객 자산 운영" },
  ],
  flowTitle: "자산 흐름 다이어그램.",
  flowPlaceholder:
    "인터랙티브 다이어그램 placeholder — 자산 입출금 → 거래 → 정산 흐름 (Phase 11 콘텐츠 단계)",
  vaultTitle: "수탁·금고 기능 통합.",
  vaultDesc:
    "Supercycl에 붙는 부가 기능. 안전한 자산 수탁·격리 보관. 파라메타 자체 기술력으로 구축.",
  vaultItems: [
    { name: "자산 격리 보관", desc: "콜드월렛·멀티시그 정책" },
    { name: "출금 승인 워크플로우", desc: "금액·빈도·주소 정책" },
    { name: "감사 로그", desc: "모든 자산 이동 추적" },
  ],
  useCasesTitle: "적용 사례.",
  useCases: [
    {
      tag: "하나월렛 협력",
      name: "스테이블코인 결제 직불카드 인프라",
      desc: "차세대 KYC 기반 모델 공동 연구",
    },
    {
      tag: "발행자 통합 운영",
      name: "멀티 거래소 자동 라우팅",
      desc: "유동성·비용 최적화",
    },
  ],
  integrationTitle: "API & SDK.",
  docsCta: "Docs →",
  closingTitle: "Ready to integrate?",
  talkToSales: "Talk to sales",
  talkToEngineering: "Talk to engineering",
};

export default function SupercyclPage() {
  const c = COPY;
  return (
    <>
      {/* 1. Hero */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">PRODUCT</div>
          <h1 className="h-hero font-semibold max-w-3xl">{c.heroTitle}</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl text-lg">{c.heroSub}</p>
          <div className="mt-8 flex gap-3">
            <Button variant="primary" asChild>
              <Link href="/products">{c.explore}</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/contact">{c.contactSales}</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. What it does */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHAT IT DOES</div>
          <h2 className="h-section">{c.capabilitiesTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {c.capabilities.map((cap) => (
              <div key={cap.name} className="p-6 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{cap.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{cap.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Who uses Supercycl */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHO USES SUPERCYCL</div>
          <h2 className="h-section">{c.personasTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {c.personas.map((p) => (
              <div key={p.role} className="p-5 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{p.role}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Architecture / Flow */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">ARCHITECTURE & FLOW</div>
          <h2 className="h-section">{c.flowTitle}</h2>
          <div className="mt-12 p-12 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
            {c.flowPlaceholder}
          </div>
        </Container>
      </section>

      {/* 5. Vault feature */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">VAULT FEATURE</div>
          <h2 className="h-section">{c.vaultTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">{c.vaultDesc}</p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {c.vaultItems.map((v) => (
              <div key={v.name} className="p-5 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{v.name}</h3>
                <p className="text-xs text-[var(--text-secondary)] mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Use cases */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">USE CASES</div>
          <h2 className="h-section">{c.useCasesTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {c.useCases.map((u) => (
              <div key={u.name} className="p-6 border border-[var(--border)] rounded-md">
                <span className="label-mono text-[var(--accent-primary)]">{u.tag}</span>
                <h3 className="font-semibold mt-3">{u.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{u.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Integration / API preview */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">INTEGRATION</div>
          <h2 className="h-section">{c.integrationTitle}</h2>
          <pre className="mt-12 p-6 bg-[var(--bg-surface)] border border-[var(--border)] rounded-md text-sm overflow-x-auto font-mono"><code>{`// Connect a CEX/DEX
const supercycl = new Supercycl({ apiKey: process.env.SUPERCYCL_KEY });
await supercycl.exchanges.connect("binance", { ... });

// Place trade
await supercycl.trade({ from: "USDT", to: "ETH", amount: 1000 });`}</code></pre>
          <Button variant="secondary" className="mt-6" asChild>
            <Link href="/core">{c.docsCta}</Link>
          </Button>
        </Container>
      </section>

      {/* 8. Customers + Talk to sales CTA */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingTitle}</h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="primary" asChild>
              <Link href="/contact">{c.talkToSales}</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/contact">{c.talkToEngineering}</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
