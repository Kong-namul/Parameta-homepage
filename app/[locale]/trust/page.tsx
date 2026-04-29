import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { StatBlock } from "@/components/ui/StatBlock";
import { Button } from "@/components/ui/Button";
import { Timeline } from "@/components/trust/Timeline";
import { CaseStudiesGrid } from "@/components/trust/CaseStudiesGrid";
import { sanity } from "@/lib/sanity";
import { CASE_STUDIES_ALL } from "@/lib/queries";

export default async function TrustPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
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
          <h1 className="h-hero font-semibold">9년의 길, 그리고 받은 인증.</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl">
            경쟁사와 명시적 비교 대신, 우리가 받은 인증과 9년의 운영 실적으로 자답합니다.
          </p>
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">CERTIFICATIONS</div>
          <h2 className="h-section">받은 인증.</h2>
          <div className="mt-12 flex flex-wrap gap-2">
            <Badge>CSAP 업계 최초</Badge>
            <Badge>K-BTF 시범사업</Badge>
            <Badge>GS인증</Badge>
            <Badge>SW품질대상</Badge>
            <Badge>조달청 디지털마켓</Badge>
          </div>
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">TRACK RECORD</div>
          <h2 className="h-section mb-12">9 years.</h2>
          <Timeline locale={locale} />
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">CASE STUDIES</div>
          <h2 className="h-section mb-12">도입 사례.</h2>
          <CaseStudiesGrid cases={cases} locale={locale} />
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">NUMBERS</div>
          <h2 className="h-section">통계.</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <StatBlock value="9 years" label="OPERATING" />
            <StatBlock value="₩25B+" label="CUMULATIVE INVESTMENT" />
            <StatBlock value="20K+ TPS" label="LOOPCHAIN VERIFIED" />
            <StatBlock value="100+" label="DEPLOYMENT REFS" />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">Why these matter to your decision.</h2>
          <p className="text-[var(--text-secondary)] mt-4">신뢰는 시간으로 증명됩니다.</p>
          <Button variant="primary" className="mt-8">Talk to our team</Button>
        </Container>
      </section>
    </>
  );
}
