import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ProductHero } from "@/components/products/ProductHero";
import { ArchitectureSwitcher } from "@/components/products/ArchitectureSwitcher";

const COPY = {
  heroTitle: "기업을 위한 디지털 자산 금융 인프라.",
  heroSubtitle:
    "기업의 디지털 자산 비즈니스에 필요한 모든 인프라를, 하나의 플랫폼에서 제공합니다.",
  contactSales: "Contact sales",
  overviewTitle: "스테이블코인·디지털 자산을 실제 서비스로 만드는 통합 인프라.",
  overviewP1:
    "ParaSta는 기업이 스테이블코인과 디지털 자산을 발행·운영·정산·인증하는 모든 흐름을 하나의 플랫폼에서 처리할 수 있도록 만든 통합 인프라입니다. 자체 노드·KMS·가스·보안을 직접 운영하지 않아도, API·SDK 한 번 연결로 디지털 자산 비즈니스를 시작할 수 있습니다.",
  overviewP2:
    "발행(Issuance) · 지갑(Wallet) · 정산(Orchestration) · 신원 인증(Onchain KYC) 4 코어 모듈과 모듈 전체를 조정하는 운영 관제탑 Unified Admin이 하나로 결합돼, 기업은 인프라 운영 부담 없이 비즈니스에만 집중할 수 있습니다.",
  usedByLabel: "USED BY",
  usedBy: [
    "은행 · 증권사",
    "결제사 · 송금사",
    "핀테크 스타트업",
    "인앱 커머스 · 일반 기업",
    "STO 발행자 · 신탁사",
    "공공 · 지자체",
  ],
  needsTitle: "ParaSta가 약속하는 3가지.",
  needs: [
    {
      en: "MODULAR",
      title: "어떤 형태로든 결합되는 인프라",
      desc: "원하는 기능만 골라 구독하는 모듈형 API. API·SDK·임베드 등 자사 서비스의 어떤 자리에든 ParaSta를 붙일 수 있고, 자체 인프라 없이 디지털 자산 기능만 더하는 방식까지 가능합니다.",
    },
    {
      en: "COMPLIANT & TRANSPARENT",
      title: "규제와 운영을 한 번에 책임지는 구조",
      desc: "AML·KYC가 모듈에 내재화돼 있어 사고 시 가장 빠른 방어선이 됩니다. 동시에 지갑별 잔액·거래 흐름·API 성공/실패까지 모든 운영 상황이 한눈에 가시화됩니다.",
    },
    {
      en: "OPERATOR-CONTROLLED",
      title: "운영자가 통제하고 비즈니스로 연결하는 인프라",
      desc: "이상 거래 동결·계정 통제·정책 변경까지 운영자가 직접 다루는 어드민. 자금 흐름과 수수료·리워드 정책을 함께 설계해 Web3 전환을 추가 BM으로 연결합니다.",
    },
  ],
  architectureTitle: "ParaSta 기술 구성.",
  architectureDesc:
    "발행·지갑·정산·신원 인증 4개 코어 모듈과 모듈을 한꺼번에 운영하는 Unified Admin이 한 묶음입니다. 왼쪽 카드를 골라 각 구성 요소의 핵심 기능을 확인하세요.",
  builtOnTitle: "ParaSta로 만든 서비스.",
  builtOnDesc:
    "ParaSta 위에서 동작하는 응용 사례 — 발행·지갑·정산·신원 인증 4 모듈을 조합해 직접 만들고 운영하는 서비스들입니다.",
  builtOnItems: [
    {
      tag: "STO",
      name: "All-in-One Security Token Infra",
      desc: "증권형 토큰 발행부터 투자자 지갑 관리, 청약·유통·배당·청산까지 STO 전 과정을 ParaSta 위에서 처리합니다.",
    },
    {
      tag: "VAULT",
      name: "자산 격리 보관·수탁",
      desc: "콜드월렛·멀티시그·정책 기반 출금 워크플로우로 디지털 자산을 격리 보관. Supercycl과 결합해 거래와 보관을 분리합니다.",
    },
    {
      tag: "UNIFIED WALLET",
      name: "통합 자산 지갑",
      desc: "현금·주식·디지털 자산을 자사 앱 한 흐름에서 — 인앱 커머스 시나리오에서 결제·환전·보관까지 통합 운영.",
    },
  ],
  modelsTitle: "지금까지 검증된 적용 모델.",
  modelsDesc: "현재 운영 중인 모델은 1건이며, 후속 도입 사례가 검증되는 대로 이 자리에 추가됩니다.",
  models: [
    {
      tag: "포트폴리오",
      name: "미래에셋증권형 디지털 자산 통합 운용",
      desc: "현금·주식·디지털 자산을 단일 인터페이스에서 통합 운용. 매매·정산·실시간 모니터링까지 한 흐름.",
      status: "운영 중",
    },
  ],
  modelsMoreNote: "후속 적용 사례는 검증이 완료되는 시점에 순차 공개됩니다.",
  pricingTitle: "모듈별 도입 가능.",
  pricingDesc:
    "필요한 모듈만 골라 도입하세요. 기존 시스템은 그대로 두고 ParaSta가 디지털 자산 기능만 더합니다.",
  pricingFeatures: [
    {
      name: "필요한 모듈만 선택",
      desc: "Issuance · Wallet · Orchestration · Onchain KYC 4 코어 모듈과 Unified Admin 중 비즈니스에 필요한 구성을 자유롭게 골라 도입할 수 있습니다.",
    },
    {
      name: "기존 시스템 그대로",
      desc: "코어뱅킹·증권·결제 시스템을 그대로 둔 채, API·SDK 한 번 연결로 ParaSta 모듈을 결합합니다. 마이그레이션 없이도 시작할 수 있습니다.",
    },
    {
      name: "단계적 확장",
      desc: "한 모듈로 시범 도입한 뒤 비즈니스 성숙도에 맞춰 모듈을 점진적으로 늘릴 수 있습니다. 처음부터 전부 갖출 필요가 없습니다.",
    },
    {
      name: "Zero-Ops 운영",
      desc: "노드·KMS·가스·보안·감사 로그 등 인프라 운영은 모두 ParaSta가 처리합니다. 도입 기업은 비즈니스에만 집중하면 됩니다.",
    },
  ],
  customersPlaceholder: "도입 회사 로고 그리드 (NDA OK 회사부터 추가 — content phase)",
  unifiedWalletCta: "Unified Wallet · 데모 보기 →",
  closingTitle: "Ready to start?",
  talkToEngineering: "Talk to engineering",
};

export default function ParaStaPage() {
  const c = COPY;
  return (
    <>
      {/* 1. Hero */}
      <ProductHero
        name="ParaSta"
        label="SOLUTION"
        tagline={c.heroTitle}
        description={c.heroSubtitle}
      >
        <Button variant="secondary" asChild>
          <a href="https://demo.parametacorp.com" target="_blank" rel="noopener noreferrer">
            {c.unifiedWalletCta}
          </a>
        </Button>
      </ProductHero>

      {/* 2. What is ParaSta */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHAT IS PARASTA</div>
          <h2 className="h-section max-w-3xl">{c.overviewTitle}</h2>
          <div className="mt-8 max-w-3xl space-y-5 text-[var(--text-secondary)] text-lg leading-relaxed">
            <p>{c.overviewP1}</p>
            <p>{c.overviewP2}</p>
          </div>
          <div className="mt-12 max-w-3xl">
            <div className="label-mono mb-3 text-[var(--text-tertiary)]">{c.usedByLabel}</div>
            <ul className="flex flex-wrap gap-2">
              {c.usedBy.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 border border-[var(--border)] rounded-full text-sm text-[var(--text-secondary)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 3. Why ParaSta — 3 promises */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHY PARASTA</div>
          <h2 className="h-section">{c.needsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {c.needs.map((n) => (
              <div key={n.en} className="p-6 border border-[var(--border)] rounded-md space-y-3">
                <div className="label-mono">{n.en}</div>
                <h3 className="text-xl font-semibold">{n.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Architecture — interactive switcher */}
      <section id="modules" className="py-24 border-b border-[var(--border-subtle)] scroll-mt-20">
        <Container>
          <div className="label-mono mb-3">PARASTA ARCHITECTURE</div>
          <h2 className="h-section">{c.architectureTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-3 max-w-2xl">{c.architectureDesc}</p>
          <div className="mt-12">
            <ArchitectureSwitcher />
          </div>
        </Container>
      </section>

      {/* 4. Modular adoption */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">MODULAR ADOPTION</div>
          <h2 className="h-section">{c.pricingTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">{c.pricingDesc}</p>
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {c.pricingFeatures.map((f) => (
              <div key={f.name} className="p-6 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{f.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Customers */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">CUSTOMERS</div>
          <h2 className="h-section">도입 회사.</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">
            ParaSta를 도입한 기업·기관 — NDA 해제 시점부터 순차 공개됩니다.
          </p>
          <div className="mt-12 p-12 border border-dashed border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
            {c.customersPlaceholder}
          </div>
        </Container>
      </section>

      {/* 6. Verified Applied Models */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">VERIFIED MODELS</div>
          <h2 className="h-section">{c.modelsTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-3 max-w-2xl">{c.modelsDesc}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {c.models.map((m) => (
              <div
                key={m.name}
                className="p-6 border border-[var(--border)] rounded-md hover:border-[var(--accent-primary)] transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="label-mono text-[var(--accent-primary)]">{m.tag}</span>
                  <span className="label-mono text-[10px] px-2 py-1 rounded-full border border-[var(--accent-primary)]/40 text-[var(--accent-primary)]">
                    {m.status}
                  </span>
                </div>
                <h3 className="font-semibold mt-3">{m.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{m.desc}</p>
              </div>
            ))}
            {[0, 1].map((i) => (
              <div
                key={`placeholder-${i}`}
                className="p-6 border border-dashed border-[var(--border)] rounded-md flex items-center justify-center min-h-[140px]"
              >
                <div className="text-center">
                  <div className="label-mono text-[10px] text-[var(--text-tertiary)] mb-2">UPCOMING</div>
                  <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                    검증된 후속 적용 사례가<br />이 자리에 순차 공개됩니다
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-8 italic">{c.modelsMoreNote}</p>
        </Container>
      </section>

      {/* 7. Built on ParaSta */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">BUILT ON PARASTA</div>
          <h2 className="h-section">{c.builtOnTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-3 max-w-2xl leading-relaxed">{c.builtOnDesc}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {c.builtOnItems.map((item) => (
              <div
                key={item.tag}
                className="p-6 border border-[var(--border)] rounded-md flex flex-col"
              >
                <span className="label-mono text-[var(--accent-primary)]">{item.tag}</span>
                <h3 className="font-semibold mt-3 text-base">{item.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Closing */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingTitle}</h2>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" asChild>
              <Link href="/contact">Contact Us →</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
