import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { StatBlock } from "@/components/ui/StatBlock";

export default function IRPage() {
  return (
    <>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">INVESTOR RELATIONS</div>
          <h1 className="h-hero font-semibold">IR — KOSDAQ 추진 단계.</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl">
            한국 1세대 블록체인 회사의 9년 운영 실적과 현재 200억 투자 라운드 정보.
          </p>
        </Container>
      </section>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">IR OVERVIEW</div>
          <h2 className="h-section">회사·재무 요약.</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <StatBlock value="9 years" label="설립 이래" />
            <StatBlock value="₩25B+" label="누적 투자" />
            <StatBlock value="₩20B" label="현 라운드 (추진)" />
          </div>
        </Container>
      </section>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">FUNDING HISTORY</div>
          <h2 className="h-section">투자 유치 이력.</h2>
          <div className="mt-12 p-8 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
            라운드별 정보 placeholder — 공시 자료 기반으로 콘텐츠 단계에서 채움
          </div>
        </Container>
      </section>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">IR MATERIALS</div>
          <h2 className="h-section">발표자료·IR 덱.</h2>
          <p className="text-[var(--text-secondary)] mt-4">PDF·연간 리포트는 콘텐츠 단계에서 등록.</p>
        </Container>
      </section>
      <section className="py-24">
        <Container className="max-w-2xl">
          <div className="label-mono mb-3">INVESTOR CONTACT</div>
          <h2 className="h-section">투자 문의.</h2>
          <p className="text-[var(--text-secondary)] mt-4">
            투자·IR 관련 문의: <a href="mailto:ir@parametacorp.com" className="text-[var(--accent-primary)]">ir@parametacorp.com</a>
          </p>
          <Button variant="primary" className="mt-8" asChild>
            <a href="mailto:ir@parametacorp.com">IR 미팅 요청</a>
          </Button>
          <p className="text-xs text-[var(--text-tertiary)] mt-12">
            상장 후: Disclosures (분기 보고·사업 보고서) · 주가 정보 등 추가 예정.
          </p>
        </Container>
      </section>
    </>
  );
}
