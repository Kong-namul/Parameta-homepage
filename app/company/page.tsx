import { Container } from "@/components/layout/Container";

const COPY = {
  heroSub: "2016년 설립. ICONLOOP에서 PARAMETA로. 한국 1세대 블록체인 인프라 기업.",
  visionTitle: "공공·금융이 먼저 부르는 한국 1세대 Web3 인프라.",
  visionDesc: "은행·기관·발행자가 Web3로 들어올 때 그 길을 만들고 함께 걷는 능동적 인도자.",
  historyTitle: "회사 연혁.",
  historyLink: "Trust 페이지의 Track Record →",
  historyDesc: "에서 9년 마일스톤 전체 보기.",
};

export default function AboutPage() {
  const c = COPY;
  return (
    <>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">COMPANY · ABOUT</div>
          <h1 className="h-hero font-semibold">About PARAMETA.</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl text-lg">{c.heroSub}</p>
        </Container>
      </section>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">VISION</div>
          <h2 className="h-section max-w-2xl">{c.visionTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl">{c.visionDesc}</p>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <div className="label-mono mb-3">HISTORY</div>
          <h2 className="h-section">{c.historyTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4">
            <a href="/trust" className="text-[var(--accent-primary)]">{c.historyLink}</a>
            {c.historyDesc}
          </p>
        </Container>
      </section>
    </>
  );
}
