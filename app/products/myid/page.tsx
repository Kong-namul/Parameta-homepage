import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StatBlock } from "@/components/ui/StatBlock";

const COPY = {
  heroTitle: "공공 특화 DID 구독형 서비스.",
  heroSub: "한 번 인증, 모든 지갑·서비스에서 재사용. 자체 인프라 구축 없이 1주일 내 도입.",
  publicCta: "공공기관 도입 문의 →",
  learnMore: "자세히 보기",
  statsTitle: "90% 절감 · 1주일 도입 · 자체 인프라 X.",
  statCost: "도입 비용 절감",
  statTime: "도입 기간",
  statInfra: "자체 인프라 구축",
  infraValue: "없음",
  whyTitle: "검증된 신뢰 자산.",
  badges: ["CSAP 업계 최초", "K-BTF 시범사업", "조달청 디지털마켓 등재"],
  whyDesc:
    "국내 블록체인 업계 최초 CSAP 인증. 과기정통부·KISA의 K-BTF 시범사업 핵심 서비스. 공공기관이 별도 보안 검토 없이 즉시 도입 가능.",
  howTitle: "DID 발행·재사용 흐름.",
  howPlaceholder:
    "시스템 구조 다이어그램 placeholder — DID 발행 → 온체인 증명 → KYW 재사용 흐름 (Phase 11 콘텐츠 단계)",
  casesTitle: "도입 사례.",
  cases: [
    {
      tag: "지자체",
      name: "부산시 블록체인 기반 배터리여권",
      desc: "실제 행정 서비스에 도입된 레퍼런스",
    },
    {
      tag: "중앙 정부",
      name: "K-BTF 시범사업 핵심 서비스",
      desc: "과기정통부·KISA 주관",
    },
  ],
  subscriptionTitle: "구독형 도입.",
  subscriptionDesc:
    "기존 수개월·수억의 자체 구축 → 1주일 구독 형태로. 공공기관 예산 사이클에 맞춤. 정확한 가격은 견적으로 안내.",
  quoteCta: "견적 문의",
  integrationTitle: "API & SDK.",
  docsCta: "Docs →",
  closingTitle: "공공기관 도입 문의.",
  closingDesc: "조달청 디지털마켓에서 즉시 도입 가능. 1:1 상담은 메일로.",
  primary: "도입 문의",
};

export default function MyIdPage() {
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
              <Link href="/contact">{c.publicCta}</Link>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#how-it-works">{c.learnMore}</a>
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. What it does */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHAT IT DOES</div>
          <h2 className="h-section">{c.statsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <StatBlock value="-90%" label={c.statCost} />
            <StatBlock value="1 week" label={c.statTime} />
            <StatBlock value={c.infraValue} label={c.statInfra} />
          </div>
        </Container>
      </section>

      {/* 3. Why MyID 2.0 */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHY MYID 2.0</div>
          <h2 className="h-section">{c.whyTitle}</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {c.badges.map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </div>
          <p className="text-[var(--text-secondary)] mt-8 max-w-2xl">{c.whyDesc}</p>
        </Container>
      </section>

      {/* 4. How it works */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">HOW IT WORKS</div>
          <h2 className="h-section">{c.howTitle}</h2>
          <div className="mt-12 p-12 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
            {c.howPlaceholder}
          </div>
        </Container>
      </section>

      {/* 5. Public sector cases */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">PUBLIC SECTOR CASES</div>
          <h2 className="h-section">{c.casesTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {c.cases.map((cs) => (
              <div key={cs.name} className="p-6 border border-[var(--border)] rounded-md">
                <span className="label-mono text-[var(--accent-primary)]">{cs.tag}</span>
                <h3 className="font-semibold mt-3">{cs.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{cs.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Subscription model */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">SUBSCRIPTION MODEL</div>
          <h2 className="h-section">{c.subscriptionTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">{c.subscriptionDesc}</p>
          <div className="mt-8">
            <Button variant="primary" asChild>
              <Link href="/contact">{c.quoteCta}</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 7. Integration / API */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">INTEGRATION</div>
          <h2 className="h-section">{c.integrationTitle}</h2>
          <pre className="mt-12 p-6 bg-[var(--bg-surface)] border border-[var(--border)] rounded-md text-sm overflow-x-auto font-mono"><code>{`// Issue a DID
const myid = new MyID({ apiKey: process.env.MYID_KEY });
const did = await myid.issue({ subject: "user@org.kr", level: 2 });

// Verify reuse (KYW)
const valid = await myid.verify(did, { service: "battery-passport" });`}</code></pre>
          <Button variant="secondary" className="mt-6" asChild>
            <Link href="/core">{c.docsCta}</Link>
          </Button>
        </Container>
      </section>

      {/* 8. 공공기관 도입 문의 CTA */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4">{c.closingDesc}</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="primary" asChild>
              <Link href="/contact">{c.primary}</Link>
            </Button>
            <Button variant="secondary" asChild>
              <a href="mailto:public@parametacorp.com">public@parametacorp.com</a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
