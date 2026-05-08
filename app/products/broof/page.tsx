import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ProductHero } from "@/components/products/ProductHero";

const COPY = {
  heroTitle: "블록체인 증명서 발급 — 위·변조 불가, 영구 보관.",
  heroSub:
    "발급·열람·공유·검증·개인 공개 통제까지 한 번에. 발급 기관은 별도 DB 없이, 수신자는 모바일 한 번에.",
  visit: "broof.io 바로가기 ↗",
  contactIssuer: "Contact Us →",
  overviewTitle: "블록체인 위에 올린 증명서 — 한 번 발급되면 위·변조가 불가능합니다.",
  overviewP1:
    "broof는 파라메타가 직접 만들고 운영하는 블록체인 증명서 발급 서비스입니다. 모든 증명서 정보가 블록체인에 기록돼 위·변조가 불가능하며, 발급 이후에도 영구 보관됩니다. 정부 부처·지자체·교육기관·기업까지 — 증명서가 필요한 모든 영역에서 도입되고 있습니다.",
  overviewP2:
    "발급 기관은 별도의 데이터베이스 구축 없이 broof.io에서 즉시 시작할 수 있고, 수신자는 모바일에서 본인의 증명서를 조회·공유·검증할 수 있습니다. 어떤 정보를 누구에게 공개할지도 본인이 직접 선택할 수 있으며, 발급된 모든 증명서는 파라메타의 BFS(Blockchain File Storage) 기반으로 분산 노드에 영구 보관됩니다.",
  usedByLabel: "USED BY",
  usedBy: [
    "정부 부처 · 위원회",
    "지자체 · 공공기관",
    "대학 · 교육기관",
    "기업 · 예술 · 컨퍼런스",
  ],
  whyTitle: "broof가 약속하는 4가지.",
  whys: [
    {
      label: "TAMPER-PROOF",
      title: "위·변조 불가, 영구 보관",
      desc: "블록체인 기반으로 한 번 발급되면 변경할 수 없고 발급 이후에도 영구 보관됩니다. 시간이 지나도 같은 신뢰성으로 검증할 수 있습니다.",
    },
    {
      label: "NO INFRASTRUCTURE",
      title: "별도 DB 없이 즉시 시작",
      desc: "발급 기관이 자체 데이터베이스나 인프라를 구축하지 않아도 broof.io에서 바로 시작할 수 있습니다. 발급 이력 관리도 블록체인이 자동으로 처리합니다.",
    },
    {
      label: "ANYWHERE, ANYTIME",
      title: "모바일 한 번에 확인·공유",
      desc: "수신자가 모바일에서 즉시 자신의 증명서를 확인하고, QR·링크로 한 번에 공유·검증할 수 있습니다. 종이도 별도 앱 설치도 필요 없습니다.",
    },
    {
      label: "SELECTIVE DISCLOSURE",
      title: "개인정보 공개를 본인이 통제",
      desc: "어떤 정보를 누구에게 공개할지 수신자가 직접 선택할 수 있습니다. 검증 가능하면서도 불필요한 개인정보가 노출되지 않습니다.",
    },
  ],
  personasTitle: "이런 분들이 씁니다.",
  personas: [
    {
      role: "발급 기관",
      desc: "정부 부처·지자체·교육기관·기업·예술/컨퍼런스 주최자. 위·변조 방지된 증명서를 별도 인프라 구축 없이 도입하고 싶은 모든 곳.",
    },
    {
      role: "수신자 (시민·학생·참석자)",
      desc: "받은 증명서를 모바일에서 즉시 확인·공유·검증하고, 공개 범위까지 본인이 통제하고 싶은 사용자.",
    },
  ],
  casesTitle: "도입 사례.",
  cases: [
    {
      tag: "정부",
      name: "국가AI전략위원회 위촉증",
      desc: "정부 위원회 최초로 블록체인 기반 위촉장을 공식 채택한 사례. 분과위원·자문위원 180여 명에게 발급되며 페이퍼리스 행정 환경을 구현했습니다 (2025.11).",
    },
    {
      tag: "지자체 · 공공",
      name: "서울시 · 경찰청",
      desc: "지자체와 경찰청이 발급하는 공공 증명서를 broof로 처리. 별도 DB 구축 없이 안전하고 영구적인 증명서 발급 환경을 만들었습니다.",
    },
    {
      tag: "교육",
      name: "포스텍 · 대학·교육기관",
      desc: "포스텍 국내 최초 모든 졸업생 대상 블록체인 학위기 발급을 시작으로, 다수 대학·교육기관에서 학위·이수 증명서를 broof로 발급하고 있습니다.",
    },
    {
      tag: "예술 · 컨퍼런스",
      name: "참석 증명서 · 인증서",
      desc: "디지털 NFT 형태로 발급되는 참석 증명서·인증서. 컨퍼런스·전시·예술 행사에서 활용되며, 수신자가 영구 보관할 수 있습니다.",
    },
  ],
  closingTitle: "증명서 발급, 시작하세요.",
  closingPrimary: "broof.io 바로가기 ↗",
};

export default function BroofPage() {
  const c = COPY;
  return (
    <>
      {/* 1. Hero */}
      <ProductHero
        name="broof"
        label="PRODUCT"
        tagline={c.heroTitle}
        description={c.heroSub}
      >
        <Button variant="primary" asChild>
          <a href="https://broof.io" target="_blank" rel="noopener noreferrer">
            {c.visit}
          </a>
        </Button>
      </ProductHero>

      {/* 2. What is broof */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHAT IS BROOF</div>
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

      {/* 3. Why broof */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHY BROOF</div>
          <h2 className="h-section">{c.whyTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {c.whys.map((w) => (
              <div key={w.label} className="p-6 border border-[var(--border)] rounded-md space-y-3">
                <div className="label-mono text-[var(--accent-primary)]">{w.label}</div>
                <h3 className="text-xl font-semibold">{w.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Personas */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHO USES BROOF</div>
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

      {/* 5. Use cases */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">USE CASES</div>
          <h2 className="h-section">{c.casesTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {c.cases.map((cs) => (
              <div
                key={cs.name}
                className="p-6 border border-[var(--border)] rounded-md hover:border-[var(--accent-primary)] transition-colors"
              >
                <span className="label-mono text-[var(--accent-primary)]">{cs.tag}</span>
                <h3 className="font-semibold mt-3">{cs.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{cs.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Closing */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingTitle}</h2>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Button variant="primary" asChild>
              <a href="https://broof.io" target="_blank" rel="noopener noreferrer">
                {c.closingPrimary}
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/contact">{c.contactIssuer}</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
