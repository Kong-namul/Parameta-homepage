import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProductHero } from "@/components/products/ProductHero";

const COPY = {
  heroTitle: "공공 특화 DID 구독형 서비스.",
  heroSub: "한 번 인증된 디지털 신원을 모든 공공 서비스·지갑에서 재사용. 자체 인프라 없이 1주일 내 도입.",
  publicCta: "공공기관 도입 문의 →",
  overviewTitle: "공공기관이 1주일 만에 도입할 수 있는 디지털 신원 인프라.",
  overviewP1:
    "MyID 2.0은 공공기관·지자체가 자체 DID 인프라를 직접 구축하지 않고도 1주일 내에 디지털 신원 인증 서비스를 도입할 수 있도록 만든 구독형 솔루션입니다. 블록체인 업계 최초로 클라우드 보안 인증(CSAP)을 받았고, 과학기술정보통신부의 K-BTF 시범사업의 핵심 서비스로 검증됐습니다.",
  overviewP2:
    "조달청 디지털마켓에 등재돼 공공 조달 사이클에 맞춰 즉시 구매·도입할 수 있습니다. 한 번 발급된 디지털 신원은 다른 공공 서비스·지갑에서 재사용 가능해, 시민이 매번 신원을 새로 인증할 필요가 없어집니다.",
  usedByLabel: "USED BY",
  usedBy: [
    "광역 · 기초 지자체",
    "중앙정부 · 공공기관",
    "공공 마이데이터 사업자",
    "DID 기반 서비스 제공자",
  ],
  whyTitle: "MyID 2.0이 약속하는 4가지.",
  whys: [
    {
      label: "CSAP CERTIFIED",
      title: "별도 보안 검토 없이 즉시",
      desc: "블록체인 업계 최초로 클라우드 보안 인증(CSAP)을 획득. 공공기관이 추가 보안 검토 절차 없이 곧바로 도입할 수 있습니다.",
    },
    {
      label: "1-WEEK ROLLOUT",
      title: "1주일 만에 시작, 비용 90% 절감",
      desc: "기존 수개월·수억 원이 들던 자체 구축 모델 대신 구독형으로 전환. 도입 비용을 약 90% 절감하고, 1주일 내 운영을 시작할 수 있습니다.",
    },
    {
      label: "PROCURED",
      title: "조달청 디지털마켓에 즉시 구매",
      desc: "별도 사업 발주·평가 절차 없이 조달청 디지털마켓에서 바로 구매 가능. 분기 단위 예산 사이클에 맞춰 빠르게 진행할 수 있습니다.",
    },
    {
      label: "VERIFY ONCE",
      title: "한 번 인증, 모든 곳에서 재사용",
      desc: "시민이 한 번 발급받은 디지털 신원을 다른 공공 서비스·지갑에서 재사용. 매번 새 인증을 거치지 않아도 되는 KYW(Know Your Wallet) 표준 기반.",
    },
  ],
  badgesTitle: "검증된 신뢰 자산.",
  badges: ["업계 최초 CSAP", "K-BTF 시범사업", "조달청 디지털마켓 등재"],
  badgesDesc:
    "국내 블록체인 업계 최초 CSAP 인증, 과기정통부·KISA의 K-BTF 시범사업 핵심 서비스, 조달청 디지털마켓 등재 — 공공 도입에 필요한 신뢰 자산을 모두 갖췄습니다.",
  personasTitle: "이런 곳이 씁니다.",
  personas: [
    {
      role: "지자체",
      desc: "디지털 행정 서비스를 빠르게 시작하고 싶은 광역·기초 자치단체. 별도 인프라 구축 없이 시민 신원 인증을 즉시 적용할 수 있습니다.",
    },
    {
      role: "중앙정부 · 공공기관",
      desc: "시범사업·정식 사업 모두에 보안 인증된 DID 인프라가 필요한 기관. 보안 검토 절차를 단축하고 도입 일정을 앞당길 수 있습니다.",
    },
    {
      role: "공공 마이데이터 사업자",
      desc: "시민 데이터 활용에 신원 인증 기반이 필요한 마이데이터 사업자. 인증과 데이터 활용을 한 흐름에서 결합할 수 있습니다.",
    },
  ],
  casesTitle: "도입 사례.",
  cases: [
    {
      tag: "지자체",
      name: "부산시 블록체인 기반 배터리여권",
      desc: "국내 최초 유럽 DPP 대응 — 전기차 배터리 잔존 수명·이력을 블록체인 신원 기반으로 인증한 사례. 행정 서비스 결합 모델로 검증됐습니다.",
    },
    {
      tag: "공공 마이데이터",
      name: "경상북도 모이소 (모이소 경상북도)",
      desc: "DID 기반 시민 신원 인증과 데이터 활용을 결합한 경북형 공공 마이데이터 플랫폼. 1단계 사업 종료 후 2단계까지 확장됐습니다.",
    },
    {
      tag: "중앙 정부",
      name: "K-BTF 시범사업 핵심 서비스",
      desc: "과학기술정보통신부·KISA가 주관한 블록체인 시범사업의 핵심 서비스로 채택. 정부 차원의 검증을 거친 도입 모델입니다.",
    },
  ],
  subscriptionTitle: "구독형으로 운영 부담 없이.",
  subscriptionDesc:
    "기존의 수개월·수억 원이 들던 자체 구축 모델 대신 월 단위 구독형으로 도입. 운영·노드·KMS·보안 모두 파라메타가 책임지고, 공공기관은 서비스 활용에만 집중하면 됩니다. 정확한 가격은 견적으로 안내드립니다.",
  quoteCta: "Contact Us →",
  closingTitle: "공공기관 도입 문의.",
  closingDesc: "조달청 디지털마켓에서 즉시 도입 가능. 1:1 상담은 메일로.",
  primary: "Contact Us →",
  publicEmail: "public@parametacorp.com",
};

export default function MyIdPage() {
  const c = COPY;
  return (
    <>
      {/* 1. Hero */}
      <ProductHero
        name="MyID 2.0"
        label="PRODUCT"
        tagline={c.heroTitle}
        description={c.heroSub}
      >
        <Button variant="primary" asChild>
          <Link href="/contact">{c.publicCta}</Link>
        </Button>
      </ProductHero>

      {/* 2. What is MyID 2.0 */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHAT IS MYID 2.0</div>
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

      {/* 3. Why MyID 2.0 */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHY MYID 2.0</div>
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

      {/* 4. Trust badges */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">TRUSTED</div>
          <h2 className="h-section">{c.badgesTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl leading-relaxed">{c.badgesDesc}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {c.badges.map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Personas */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHO USES MYID 2.0</div>
          <h2 className="h-section">{c.personasTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {c.personas.map((p) => (
              <div key={p.role} className="p-6 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{p.role}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Public sector cases */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">PUBLIC SECTOR CASES</div>
          <h2 className="h-section">{c.casesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
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

      {/* 7. Subscription model */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">SUBSCRIPTION MODEL</div>
          <h2 className="h-section">{c.subscriptionTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl leading-relaxed">{c.subscriptionDesc}</p>
          <div className="mt-8">
            <Button variant="primary" asChild>
              <Link href="/contact">{c.quoteCta}</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 8. Closing */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4">{c.closingDesc}</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Button variant="primary" asChild>
              <Link href="/contact">{c.primary}</Link>
            </Button>
            <Button variant="secondary" asChild>
              <a href={`mailto:${c.publicEmail}`}>{c.publicEmail}</a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
