import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ProductHero } from "@/components/products/ProductHero";

const COPY = {
  heroTitle: "디지털 자산 통합거래 서비스.",
  heroSub:
    "다중 거래소·정산·실시간 모니터링을 하나로. 안전한 Vault 보관까지 한 흐름에서.",
  visitMain: "supercycl.io 바로가기 ↗",
  overviewTitle: "CEX와 DEX를 하나로 묶는 통합 트레이딩 플랫폼.",
  overviewP1:
    "Supercycl은 여러 거래소(CEX·DEX)에 분산돼 있던 디지털 자산 매매·정산·모니터링을 하나의 인터페이스에서 통합 운영할 수 있도록 만든 트레이딩 플랫폼입니다. 기존 보유 지갑과 거래소 계정을 그대로 연결해, 즉시 매매와 포지션 관리를 시작할 수 있습니다.",
  overviewP2:
    "단일 API와 일관된 UX로 다중 마켓을 다루며, 모든 데이터는 분산 구조로 암호화돼 중앙 저장소 없이 처리됩니다. 트레이더·STO 발행자·자산 관리사가 마켓 간 이동 없이 하나의 화면에서 자산을 운영할 수 있습니다.",
  usedByLabel: "USED BY",
  usedBy: [
    "트레이더 (퍼페추얼·레버리지)",
    "STO 발행자",
    "자산 관리사 · 운용사",
    "디지털 자산 운영팀",
  ],
  capabilitiesTitle: "Supercycl이 만드는 4가지 변화.",
  capabilities: [
    {
      name: "거래소를 넘나들지 않아도 됩니다",
      desc: "CEX와 DEX를 한 인터페이스에서 동시에. Binance·Bybit 같은 메이저 CEX와 Uniswap·dYdX 같은 DEX를 단일 화면에서 연결해, 마켓 간 시세·유동성을 자산 이동 없이 한눈에 확인합니다.",
    },
    {
      name: "한 번의 주문으로 가장 유리한 마켓에",
      desc: "단일 API가 슬리피지·수수료·유동성을 자동 계산해 가장 좋은 거래소로 주문을 라우팅합니다. 트레이더가 직접 거래소를 비교하거나 자산을 옮기지 않아도 됩니다.",
    },
    {
      name: "분산된 자산을 하나의 대시보드로",
      desc: "여러 거래소·지갑에 흩어져 있는 포지션·잔액·수익을 단일 화면에서 실시간 모니터링. PnL·리스크·노출 자산을 한눈에 파악해 시장 변동에 즉시 대응할 수 있습니다.",
    },
    {
      name: "위탁이 아닌 자체 수탁으로 보관",
      desc: "Supercycl Vault는 콜드월렛·멀티시그·정책 기반 출금 워크플로우로 디지털 자산을 격리 보관합니다. 거래소에 자산을 맡기는 구조가 아닌 자체 수탁이라, 운영과 보관 리스크를 분리할 수 있습니다.",
    },
  ],
  personasTitle: "이런 분들이 씁니다.",
  personas: [
    {
      role: "트레이더",
      desc: "여러 거래소를 동시에 운용하면서, 한 화면에서 매매·헤지·포지션 관리를 끝내고 싶은 개인·기관 트레이더.",
    },
    {
      role: "자산 관리사 · 운용사",
      desc: "고객 자산을 멀티 거래소·멀티체인에서 운용하는 자산 관리사. 통합 포트폴리오 관리와 감사 로그·정책 기반 통제를 한 번에.",
    },
  ],
  vaultTitle: "Vault — 거래와 보관을 분리하다.",
  vaultDesc:
    "Supercycl 위에 얹어 쓰는 자체 수탁 모듈. 거래소에 자산을 맡기지 않고도 거래·운용을 이어가도록, 파라메타 자체 기술력으로 구축한 디지털 자산 보관 인프라입니다.",
  vaultItems: [
    {
      name: "자산 격리 보관",
      desc: "콜드월렛 기반 오프라인 키 관리에 멀티시그·HSM 정책을 결합해 외부 침해와 내부 단독 접근을 동시에 차단합니다.",
    },
    {
      name: "출금 승인 워크플로우",
      desc: "금액·빈도·목적지 주소·시간대별로 정책을 설정하고, 다단계 승인을 거쳐야만 자금이 움직이도록 출금 흐름을 통제합니다.",
    },
    {
      name: "감사 로그",
      desc: "자산 이동·정책 변경·승인 이력 등 모든 운영 이벤트를 변조 불가능한 로그로 기록해, 사고 시 즉시 추적이 가능합니다.",
    },
  ],
  useCasesTitle: "적용 사례.",
  useCases: [
    {
      tag: "하나월렛 협력",
      name: "스테이블코인 결제 직불카드 인프라",
      desc: "Supercycl + Onchain KYC를 결합해 차세대 KYC 기반 디지털 자산 결제 카드 인프라를 공동 설계 중. 결제와 정산이 한 흐름에서 검증되는 구조를 검증합니다.",
    },
    {
      tag: "발행자 통합 운영",
      name: "멀티 거래소 자동 라우팅",
      desc: "발행한 토큰의 유동성과 거래 비용을 자동으로 평가해 가장 유리한 거래소로 라우팅. 발행자가 다중 마켓 운영 부담 없이 유동성을 키울 수 있습니다.",
    },
  ],
  closingTitle: "Ready to ride the Supercycl?",
  visitMainClosing: "supercycl.io에서 시작하기 ↗",
};

export default function SupercyclPage() {
  const c = COPY;
  return (
    <>
      {/* 1. Hero */}
      <ProductHero
        name="Supercycl"
        label="PRODUCT"
        tagline={c.heroTitle}
        description={c.heroSub}
      >
        <Button variant="primary" asChild>
          <a href="https://supercycl.io" target="_blank" rel="noopener noreferrer">
            {c.visitMain}
          </a>
        </Button>
      </ProductHero>

      {/* 2. What is Supercycl */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHAT IS SUPERCYCL</div>
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

      {/* 3. What it does */}
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

      {/* 4. Who uses Supercycl */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHO USES SUPERCYCL</div>
          <h2 className="h-section">{c.personasTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-12 max-w-3xl">
            {c.personas.map((p) => (
              <div key={p.role} className="p-6 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{p.role}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{p.desc}</p>
              </div>
            ))}
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

      {/* 7. Use cases */}
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

      {/* 8. Closing */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingTitle}</h2>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" asChild>
              <a href="https://supercycl.io" target="_blank" rel="noopener noreferrer">
                {c.visitMainClosing}
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
