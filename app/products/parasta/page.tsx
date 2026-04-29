import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatBlock } from "@/components/ui/StatBlock";

const COPY = {
  heroTitle: "기업을 위한 디지털 자산 금융 인프라.",
  heroSubtitle:
    "기업이 디지털 자산을 발행·운용하는 과정에서 마주하는 복잡한 규제와 기술적 장벽을 한 번에 해결합니다.",
  exploreModules: "Explore modules ↓",
  contactSales: "Contact sales",
  needsTitle: "고객사가 가장 원하는 3가지.",
  needs: [
    { en: "Reliability", title: "안정성", desc: "자사 앱에 붙였을 때 죽지 않고 24시간 돌아간다" },
    { en: "Observability", title: "관측 가능성", desc: "블록체인을 몰라도 한눈에" },
    { en: "Control", title: "통제권", desc: "법적·행정적 개입 가능한 관리자 권한" },
  ],
  architectureTitle: "4 코어 모듈 + Unified Admin.",
  modules: [
    { id: "issuance", name: "Issuance", desc: "스테이블코인 발행·소각·준비금" },
    { id: "wallet", name: "Wallet", desc: "디지털 자산 지갑 인프라" },
    { id: "orchestration", name: "Orchestration", desc: "Fiat ↔ Crypto 미들웨어" },
    { id: "onchain-kyc", name: "Onchain KYC", desc: "Verify Once, Use Everywhere" },
  ],
  unifiedAdminDesc: "4 모듈을 잇는 운영 관제탑",
  keyFeaturesTitle: "3 Key Features.",
  features: [
    { name: "모듈형 API", desc: "원하는 기능만 구독, 인프라 없이 개발" },
    { name: "규제 대응", desc: "AML·KYC 내장, 사고 시 최소 방어선" },
    { name: "자금 흐름·수익 설계", desc: "Web3 전환을 통한 추가 BM" },
  ],
  personasTitle: "4 사용자 역할.",
  personas: [
    { role: "Consumer", desc: "송금·결제·환전 / 일반 사용자", app: "ParaSta W" },
    { role: "Partner", desc: "디지털 자산 정산 / 가맹점·제휴사", app: "ParaSta W" },
    { role: "Service Admin", desc: "KYC/KYB·거래 모니터링·수수료 정책", app: "ParaSta W" },
    { role: "Token Admin", desc: "발행/소각·준비금·리워드 분배", app: "ParaSta T" },
  ],
  modelsTitle: "검증된 적용 모델 3종.",
  models: [
    { tag: "결제", name: "인스코비형 지역화폐", desc: "Consumer + Partner + Service Admin + Token Admin" },
    { tag: "포트폴리오", name: "미래에셋증권형", desc: "Consumer + Service Admin" },
    { tag: "STO", name: "부동산 신탁사", desc: "토큰증권 전 주기" },
  ],
  pricingTitle: "모듈별 도입 가능.",
  pricingDesc:
    "트랜잭션 수수료(Onchain KYC + Transfers API) + 어드민 운영 관리료(구독). 원하는 기능만 선택해 조합.",
  customersPlaceholder: "도입 회사 로고 그리드 (NDA OK 회사부터 추가 — content phase)",
  talkToSalesQuote: "Talk to sales (모듈별 견적)",
  closingTitle: "Ready to start?",
  talkToEngineering: "Talk to engineering",
};

export default function ParaStaPage() {
  const c = COPY;
  return (
    <>
      {/* 1. Hero */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">PRODUCT · SOLUTION</div>
          <h1 className="h-hero font-semibold max-w-3xl">{c.heroTitle}</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl">{c.heroSubtitle}</p>
          <div className="mt-8 flex gap-3">
            <Button variant="primary" asChild>
              <a href="#modules">{c.exploreModules}</a>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/contact">{c.contactSales}</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. What ParaSta does — Core Need 3축 */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHAT PARASTA DOES</div>
          <h2 className="h-section">{c.needsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {c.needs.map((n) => (
              <div key={n.en} className="p-6 border border-[var(--border)] rounded-md space-y-3">
                <div className="label-mono">{n.en}</div>
                <h3 className="text-xl font-semibold">{n.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{n.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. 4 Core Modules + Unified Admin */}
      <section id="modules" className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">PARASTA ARCHITECTURE</div>
          <h2 className="h-section">{c.architectureTitle}</h2>
          <div className="grid md:grid-cols-4 gap-4 mt-12">
            {c.modules.map((m) => (
              <Link key={m.id} href={`/products/parasta/${m.id}`}>
                <Card variant="elevated" className="h-full">
                  <h3 className="font-semibold">{m.name}</h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-3">{m.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
          <Link href="/products/parasta/unified-admin" className="block mt-3">
            <Card variant="default" className="hover:border-[var(--accent-primary)] transition-colors">
              <h3 className="font-semibold">Unified Admin</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-2">{c.unifiedAdminDesc}</p>
            </Card>
          </Link>
        </Container>
      </section>

      {/* 4. 3 Key Features */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h2 className="h-section">{c.keyFeaturesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {c.features.map((f) => (
              <div key={f.name} className="p-6 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{f.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-3">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Who uses ParaSta — 4 personas */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHO USES PARASTA</div>
          <h2 className="h-section">{c.personasTitle}</h2>
          <div className="grid md:grid-cols-4 gap-3 mt-12">
            {c.personas.map((p) => (
              <div key={p.role} className="p-5 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{p.role}</h3>
                <p className="text-xs text-[var(--text-secondary)] mt-2">{p.desc}</p>
                <div className="mt-3 label-mono text-[var(--accent-primary)]">{p.app}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Real Models */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">VERIFIED MODELS</div>
          <h2 className="h-section">{c.modelsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {c.models.map((m) => (
              <div key={m.name} className="p-6 border border-[var(--border)] rounded-md">
                <span className="label-mono text-[var(--accent-primary)]">{m.tag}</span>
                <h3 className="font-semibold mt-3">{m.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{m.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Pricing & Customers */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">PRICING & CUSTOMERS</div>
          <h2 className="h-section">{c.pricingTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">{c.pricingDesc}</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <StatBlock value="100+" label="DEPLOYMENT REFS" />
            <StatBlock value="20K TPS" label="LOOPCHAIN VERIFIED" />
            <StatBlock value="9 years" label="OPERATING" />
          </div>
          <div className="mt-12 p-8 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
            {c.customersPlaceholder}
          </div>
          <div className="mt-8">
            <Button variant="primary" asChild>
              <Link href="/contact">{c.talkToSalesQuote}</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 8. Closing */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingTitle}</h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="primary" asChild>
              <Link href="/contact">{c.contactSales}</Link>
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
