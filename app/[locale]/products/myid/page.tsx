import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StatBlock } from "@/components/ui/StatBlock";

export default function MyIdPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">PRODUCT</div>
          <h1 className="h-hero font-semibold max-w-3xl">공공 특화 DID 구독형 서비스.</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl text-lg">
            한 번 인증, 모든 지갑·서비스에서 재사용. 자체 인프라 구축 없이 1주일 내 도입.
          </p>
          <div className="mt-8 flex gap-3">
            <Button variant="primary">공공기관 도입 문의 →</Button>
            <Button variant="secondary">자세히 보기</Button>
          </div>
        </Container>
      </section>

      {/* 2. What it does */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHAT IT DOES</div>
          <h2 className="h-section">90% 절감 · 1주일 도입 · 자체 인프라 X.</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <StatBlock value="-90%" label="도입 비용 절감" />
            <StatBlock value="1 week" label="도입 기간" />
            <StatBlock value="없음" label="자체 인프라 구축" />
          </div>
        </Container>
      </section>

      {/* 3. Why MyID 2.0 */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHY MYID 2.0</div>
          <h2 className="h-section">검증된 신뢰 자산.</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            <Badge>CSAP 업계 최초</Badge>
            <Badge>K-BTF 시범사업</Badge>
            <Badge>조달청 디지털마켓 등재</Badge>
          </div>
          <p className="text-[var(--text-secondary)] mt-8 max-w-2xl">
            국내 블록체인 업계 최초 CSAP 인증. 과기정통부·KISA의 K-BTF 시범사업 핵심 서비스. 공공기관이 별도 보안 검토 없이 즉시 도입 가능.
          </p>
        </Container>
      </section>

      {/* 4. How it works */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">HOW IT WORKS</div>
          <h2 className="h-section">DID 발행·재사용 흐름.</h2>
          <div className="mt-12 p-12 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
            시스템 구조 다이어그램 placeholder — DID 발행 → 온체인 증명 → KYW 재사용 흐름 (Phase 11 콘텐츠 단계)
          </div>
        </Container>
      </section>

      {/* 5. Public sector cases */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">PUBLIC SECTOR CASES</div>
          <h2 className="h-section">도입 사례.</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            <div className="p-6 border border-[var(--border)] rounded-md">
              <span className="label-mono text-[var(--accent-primary)]">지자체</span>
              <h3 className="font-semibold mt-3">부산시 블록체인 기반 배터리여권</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2">실제 행정 서비스에 도입된 레퍼런스</p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-md">
              <span className="label-mono text-[var(--accent-primary)]">중앙 정부</span>
              <h3 className="font-semibold mt-3">K-BTF 시범사업 핵심 서비스</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2">과기정통부·KISA 주관</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Subscription model */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">SUBSCRIPTION MODEL</div>
          <h2 className="h-section">구독형 도입.</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">
            기존 수개월·수억의 자체 구축 → 1주일 구독 형태로. 공공기관 예산 사이클에 맞춤. 정확한 가격은 견적으로 안내.
          </p>
          <div className="mt-8">
            <Button variant="primary">견적 문의</Button>
          </div>
        </Container>
      </section>

      {/* 7. Integration / API */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">INTEGRATION</div>
          <h2 className="h-section">API & SDK.</h2>
          <pre className="mt-12 p-6 bg-[var(--bg-surface)] border border-[var(--border)] rounded-md text-sm overflow-x-auto font-mono"><code>{`// Issue a DID
const myid = new MyID({ apiKey: process.env.MYID_KEY });
const did = await myid.issue({ subject: "user@org.kr", level: 2 });

// Verify reuse (KYW)
const valid = await myid.verify(did, { service: "battery-passport" });`}</code></pre>
          <Button variant="secondary" className="mt-6">Docs →</Button>
        </Container>
      </section>

      {/* 8. 공공기관 도입 문의 CTA */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">공공기관 도입 문의.</h2>
          <p className="text-[var(--text-secondary)] mt-4">조달청 디지털마켓에서 즉시 도입 가능. 1:1 상담은 메일로.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="primary">도입 문의</Button>
            <Button variant="secondary" asChild>
              <a href="mailto:public@parametacorp.com">public@parametacorp.com</a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
