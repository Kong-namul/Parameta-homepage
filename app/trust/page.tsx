import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { StatBlock } from "@/components/ui/StatBlock";
import { Button } from "@/components/ui/Button";
import { Timeline } from "@/components/trust/Timeline";
import { CaseStudiesGrid } from "@/components/trust/CaseStudiesGrid";
import { sanity } from "@/lib/sanity";
import { CASE_STUDIES_ALL } from "@/lib/queries";

const COPY = {
  heroTitle: "9년의 길, 그리고 받은 인증.",
  heroSub:
    "경쟁사와 명시적 비교 대신, 우리가 받은 인증과 9년의 운영 실적으로 자답합니다.",
  certTitle: "받은 인증.",
  badges: ["CSAP 업계 최초", "K-BTF 시범사업", "GS인증", "SW품질대상", "조달청 디지털마켓"],
  trackTitle: "9 years.",
  casesTitle: "도입 사례.",
  statsTitle: "통계.",
  closingTitle: "Why these matter to your decision.",
  closingDesc: "신뢰는 시간으로 증명됩니다.",
  closingCta: "Talk to our team",
  statInvestment: "CUMULATIVE INVESTMENT",
  statOperating: "OPERATING",
  statTps: "LOOPCHAIN VERIFIED",
  statRefs: "DEPLOYMENT REFS",
};

export default async function TrustPage() {
  const c = COPY;
  let cases: any[] = [];
  try {
    cases = await sanity.fetch(CASE_STUDIES_ALL);
  } catch {
    cases = [];
  }
  return (
    <>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">WHY PARAMETA</div>
          <h1 className="h-hero font-semibold">{c.heroTitle}</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl">{c.heroSub}</p>
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">CERTIFICATIONS</div>
          <h2 className="h-section">{c.certTitle}</h2>
          <div className="mt-12 flex flex-wrap gap-2">
            {c.badges.map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">TRACK RECORD</div>
          <h2 className="h-section mb-12">{c.trackTitle}</h2>
          <Timeline />
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">CASE STUDIES</div>
          <h2 className="h-section mb-12">{c.casesTitle}</h2>
          <CaseStudiesGrid cases={cases} />
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">NUMBERS</div>
          <h2 className="h-section">{c.statsTitle}</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <StatBlock value="9 years" label={c.statOperating} />
            <StatBlock value="₩25B+" label={c.statInvestment} />
            <StatBlock value="20K+ TPS" label={c.statTps} />
            <StatBlock value="100+" label={c.statRefs} />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4">{c.closingDesc}</p>
          <Button variant="primary" className="mt-8" asChild>
            <Link href="/contact">{c.closingCta}</Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
