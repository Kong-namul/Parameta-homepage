import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const capabilities = [
  { name: "다중 거래소 연결", desc: "CEX·DEX 통합 인터페이스" },
  { name: "통합 거래·매매", desc: "단일 API로 자산 운용" },
  { name: "정산·실시간 모니터링", desc: "포지션·수익 한눈에" },
  { name: "안전한 자산 보관", desc: "Vault 기반 수탁" },
];

const personas = [
  { role: "트레이더", desc: "다중 거래소 통합 운용" },
  { role: "STO 발행자", desc: "디지털 자산 거래·정산" },
  { role: "자산 관리사", desc: "포트폴리오·고객 자산 운영" },
];

export default function SupercyclPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">PRODUCT</div>
          <h1 className="h-hero font-semibold max-w-3xl">디지털 자산 통합거래 서비스.</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl text-lg">
            다중 거래소·정산·실시간 모니터링을 하나로. 안전한 Vault 보관까지 한 흐름에서.
          </p>
          <div className="mt-8 flex gap-3">
            <Button variant="primary">Explore →</Button>
            <Button variant="secondary">Contact sales</Button>
          </div>
        </Container>
      </section>

      {/* 2. What it does */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHAT IT DOES</div>
          <h2 className="h-section">핵심 가치.</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {capabilities.map(c => (
              <div key={c.name} className="p-6 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Who uses Supercycl */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHO USES SUPERCYCL</div>
          <h2 className="h-section">사용자 페르소나.</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {personas.map(p => (
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
          <h2 className="h-section">자산 흐름 다이어그램.</h2>
          <div className="mt-12 p-12 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
            인터랙티브 다이어그램 placeholder — 자산 입출금 → 거래 → 정산 흐름 (Phase 11 콘텐츠 단계)
          </div>
        </Container>
      </section>

      {/* 5. Vault feature */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">VAULT FEATURE</div>
          <h2 className="h-section">수탁·금고 기능 통합.</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">
            Supercycl에 붙는 부가 기능. 안전한 자산 수탁·격리 보관. 파라메타 자체 기술력으로 구축.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="p-5 border border-[var(--border)] rounded-md">
              <h3 className="font-semibold">자산 격리 보관</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-2">콜드월렛·멀티시그 정책</p>
            </div>
            <div className="p-5 border border-[var(--border)] rounded-md">
              <h3 className="font-semibold">출금 승인 워크플로우</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-2">금액·빈도·주소 정책</p>
            </div>
            <div className="p-5 border border-[var(--border)] rounded-md">
              <h3 className="font-semibold">감사 로그</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-2">모든 자산 이동 추적</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Use cases */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">USE CASES</div>
          <h2 className="h-section">적용 사례.</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            <div className="p-6 border border-[var(--border)] rounded-md">
              <span className="label-mono text-[var(--accent-primary)]">하나월렛 협력</span>
              <h3 className="font-semibold mt-3">스테이블코인 결제 직불카드 인프라</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2">차세대 KYC 기반 모델 공동 연구</p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-md">
              <span className="label-mono text-[var(--accent-primary)]">발행자 통합 운영</span>
              <h3 className="font-semibold mt-3">멀티 거래소 자동 라우팅</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2">유동성·비용 최적화</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Integration / API preview */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">INTEGRATION</div>
          <h2 className="h-section">API & SDK.</h2>
          <pre className="mt-12 p-6 bg-[var(--bg-surface)] border border-[var(--border)] rounded-md text-sm overflow-x-auto font-mono"><code>{`// Connect a CEX/DEX
const supercycl = new Supercycl({ apiKey: process.env.SUPERCYCL_KEY });
await supercycl.exchanges.connect("binance", { ... });

// Place trade
await supercycl.trade({ from: "USDT", to: "ETH", amount: 1000 });`}</code></pre>
          <Button variant="secondary" className="mt-6">Docs →</Button>
        </Container>
      </section>

      {/* 8. Customers + Talk to sales CTA */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">Ready to integrate?</h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="primary">Talk to sales</Button>
            <Button variant="secondary">Talk to engineering</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
