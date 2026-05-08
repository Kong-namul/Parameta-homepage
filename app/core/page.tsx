import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CapabilitiesStepper } from "@/components/core/CapabilitiesStepper";

const COPY = {
  heroTitle: "블록체인 전 영역을 아우르는 자체 원천기술.",
  heroSub:
    "파라메타는 Loopchain · Identity · BTP · Storage를 직접 설계·운영해온 Full-Stack 블록체인 회사입니다. 코어 엔진부터 dApp 서비스 레이어까지, 멀티 블록체인의 유기적 연결을 지원합니다.",
  frameworkLabel: "PARAMETA FRAMEWORK",
  frameworkTitle: "자체 IP 기반 풀스택 블록체인 프레임워크.",
  frameworkDesc:
    "Parameta Framework는 자체 IP로 보유한 Loopchain · Identity · BTP · Storage 4개 핵심 기술을 묶어, 비즈니스에 최적화된 블록체인을 만들 수 있는 통합 프레임워크입니다.",
  ipNote: "* IP (In-house Technology): 기업이 직접 개발하거나 구축한 기술",
  supportLabel: "ENGAGEMENT & SUPPORT",
  supportTitle: "도입 이후, 함께 만들어갑니다.",
  supportDesc:
    "기술 도입은 시작입니다. 파라메타는 운영·사업·토큰 이코노미 전 과정에서 고객과 함께 일하며, 블록체인 사업이 안정적으로 성장할 수 있도록 지원합니다.",
  capabilitiesLabel: "CAPABILITIES",
  capabilitiesTitle: "Full-Stack 블록체인 기술 영역.",
  capabilitiesDesc:
    "코어 엔진부터 dApp 개발 지원까지, 블록체인 사업에 필요한 6개 기술 영역을 자체 기술로 커버합니다.",
  archLabel: "TECH COVERAGE",
  archTitle: "PARAMETA Blockchain Tech Coverage.",
  archDesc:
    "L0(P2P 네트워크)부터 L4(dApp 서비스)까지 — 블록체인 기술 스택의 모든 레이어를 자체 설계·운영합니다.",
  ctaLabel: "TALK TO US",
  ctaTitle: "블록체인 사업을 고민하고 계신가요?",
  ctaBody: [
    "다양한 블록체인 플랫폼과 dApp을 직접 만들고 운영해왔습니다.",
    "그 경험으로 여러 기업과 함께 새로운 블록체인 생태계를 키우고 있습니다.",
    "블록체인 사업이 고민이라면, 무료 컨설팅으로 시작하세요.",
  ],
  ctaPrimary: "Contact Us →",
  detailCta: "자세히 보기 →",
  tech: [
    {
      id: "loopchain",
      tagLabel: "CORE ENGINE",
      name: "Loopchain",
      desc: "자체 블록체인 엔진. ICON 메인넷·HAVAH 운영. 현재 20K+ TPS 검증, 차세대 100K TPS 개발 진행 중.",
    },
    {
      id: "identity",
      tagLabel: "DID",
      name: "DID",
      desc: "국내 최초 W3C DID Method Registry 등록, 민간·공공 300만+ 유저로 검증된 DID 기술.",
    },
    {
      id: "btp",
      tagLabel: "INTERCHAIN",
      name: "BTP",
      desc: "Trustless 방식의 자체 인터체인 프로토콜. BSC·Polkadot·NEAR·Harmony 연결.",
    },
    {
      id: "storage",
      tagLabel: "STORAGE",
      name: "PDS / BFS",
      desc: "Personal Data Storage + Blockchain File Storage 인프라. 데이터 주권과 위·변조 불가 보장.",
    },
  ],
};

const SUPPORT = [
  {
    label: "TECHNICAL",
    title: "기술 지원",
    items: [
      "기술 적용 및 커스터마이징 지원",
      "Node 구축 및 운영 지원",
      "Code 분석·검토 및 개발 지원",
    ],
  },
  {
    label: "CONSULTING",
    title: "사업 컨설팅",
    items: [
      "사업 분석 및 운영 전략 컨설팅",
      "홍보·마케팅 전략 컨설팅",
      "파트너 협력 및 확장 컨설팅",
    ],
  },
  {
    label: "TOKEN ECONOMY",
    title: "토큰 이코노미",
    items: [
      "토큰 이코노미 분석 및 설계",
      "온체인 거버넌스 운영 및 유지",
      "보상·지속가능 경제 시스템 설계",
    ],
  },
];

const LAYERS = [
  {
    level: "L4",
    name: "Application (dApp)",
    desc: "탈중앙화된 서비스를 개발·운영하는 응용 레이어",
    items: ["NFT", "DeFi", "Wallet", "DID"],
    intensity: 1,
  },
  {
    level: "L3",
    name: "Development Environment",
    desc: "탈중앙화된 서비스를 개발하기 위한 환경",
    items: ["블록체인 SDK", "블록체인 관리도구", "개발자 센터", "블록 탐색기"],
    intensity: 2,
  },
  {
    level: "L2",
    name: "Protocol",
    desc: "확장 가능한 서비스를 위한 프로토콜 레이어",
    items: [
      "Multi Channel",
      "BFS (데이터 분산저장)",
      "Interchain (상호호환성)",
      "IISS (거버넌스·인센티브)",
      "Vault (비밀정보 저장)",
      "PDS (개인 데이터 관리)",
    ],
    intensity: 3,
  },
  {
    level: "L1",
    name: "Blockchain (MainNet)",
    desc: "탈중앙화된 데이터 관리 프로토콜 및 플랫폼",
    items: [
      "PBFT 기반 고성능 합의 알고리즘",
      "블록 데이터 분산 저장·유효성 검증 (SHA256, MPT)",
      "암호 증명·전자 서명 (ECDSA)",
      "성능/기능 향상 — Block Pruning · Fast Block Sync · Parallel Tx Execution · Patch Tx",
    ],
    intensity: 4,
  },
  {
    level: "L0",
    name: "P2P Network · Common Computation",
    desc: "탈중앙화의 기반이 되는 분산 네트워크 환경",
    items: [
      "Hybrid P2P Network",
      "Gossip + Structured",
      "SCORE Smart Contract (Python, Java)",
    ],
    intensity: 5,
  },
];

const INTENSITY_BG: Record<number, string> = {
  1: "bg-[var(--accent-primary)]/[0.18]",
  2: "bg-[var(--accent-primary)]/[0.13]",
  3: "bg-[var(--accent-primary)]/[0.09]",
  4: "bg-[var(--accent-primary)]/[0.06]",
  5: "bg-[var(--accent-primary)]/[0.03]",
};

export default function CorePage() {
  const c = COPY;
  return (
    <>
      {/* 1. Hero */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h1 className="h-hero font-semibold max-w-3xl">{c.heroTitle}</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl leading-relaxed">{c.heroSub}</p>
        </Container>
      </section>

      {/* 2. 4 IP Cards */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h2 className="h-section">{c.frameworkTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl leading-relaxed">{c.frameworkDesc}</p>
          <div className="relative mt-12 border border-[var(--border)] rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {c.tech.map((t, i) => {
                const isLeftCol = i % 2 === 0;
                const isTopRow = i < 2;
                return (
                  <Link
                    key={t.id}
                    href={`/core/${t.id}`}
                    id={t.id}
                    className={`group p-7 md:p-9 scroll-mt-20 transition-colors hover:bg-[var(--accent-primary)]/[0.04] flex flex-col relative ${
                      isLeftCol ? "md:border-r border-[var(--border)]" : ""
                    } ${isTopRow ? "border-b border-[var(--border)]" : ""}`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="label-mono text-[var(--accent-primary)]">{t.tagLabel}</span>
                      <span
                        className="label-mono text-[10px] px-2 py-1 rounded-full border border-[var(--accent-primary)]/40 text-[var(--accent-primary)]"
                        title="In-house Technology"
                      >
                        IP
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{t.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed flex-1">{t.desc}</p>
                    <span className="label-mono text-[var(--accent-primary)] mt-6 inline-block group-hover:translate-x-1 transition-transform">
                      {c.detailCta}
                    </span>
                  </Link>
                );
              })}
            </div>
            {/* Puzzle joint — center notch */}
            <div
              aria-hidden
              className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--bg-base)] border-2 border-[var(--accent-primary)] z-10"
            />
            <div
              aria-hidden
              className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--accent-primary)] z-10"
            />
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-6 italic">{c.ipNote}</p>
        </Container>
      </section>

      {/* 3. 6 Capabilities — stepper */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h2 className="h-section">{c.capabilitiesTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl leading-relaxed">{c.capabilitiesDesc}</p>
          <div className="mt-12">
            <CapabilitiesStepper />
          </div>
        </Container>
      </section>

      {/* 4. Tech Coverage L0-L4 stack */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h2 className="h-section">{c.archTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl leading-relaxed">{c.archDesc}</p>

          <div className="mt-12 space-y-2 max-w-4xl">
            {LAYERS.map((layer) => (
              <div
                key={layer.level}
                className={`p-6 border border-[var(--border)] rounded-md ${INTENSITY_BG[layer.intensity]}`}
              >
                <div className="grid md:grid-cols-[120px_1fr] gap-x-6 gap-y-3">
                  <div>
                    <div className="label-mono text-[var(--accent-primary)] tabular-nums">
                      {layer.level}
                    </div>
                    <div className="text-base font-semibold mt-1">{layer.name}</div>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{layer.desc}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {layer.items.map((it) => (
                        <li
                          key={it}
                          className="px-2.5 py-1 bg-[var(--bg-base)]/60 border border-[var(--border)]/60 rounded-full text-xs text-[var(--text-secondary)]"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4.5 Engagement & Support */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h2 className="h-section">{c.supportTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl leading-relaxed">{c.supportDesc}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {SUPPORT.map((s) => (
              <div key={s.label} className="p-6 border border-[var(--border)] rounded-md flex flex-col">
                <h3 className="text-base font-semibold">{s.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)] flex-1">
                  {s.items.map((it) => (
                    <li key={it} className="leading-relaxed">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CTA — 블록체인 사업을 고민하고 계신가요? */}
      <section className="py-24">
        <Container className="text-center max-w-3xl mx-auto">
          <h2 className="h-section">{c.ctaTitle}</h2>
          <div className="mt-6 space-y-2 text-[var(--text-secondary)] leading-relaxed">
            {c.ctaBody.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Button variant="primary" asChild>
              <Link href="/contact">{c.ctaPrimary}</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
