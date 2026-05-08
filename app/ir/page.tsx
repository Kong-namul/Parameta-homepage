import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { StatBlock } from "@/components/ui/StatBlock";

const COPY = {
  heroTitle: "한국 1세대 블록체인 인프라, 다음 단계로.",
  heroSub: "9년의 운영 실적과 누적 250억 원 규모의 투자, 그리고 KOSDAQ 상장을 향한 여정을 공유합니다.",
  statSinceLabel: "OPERATING",
  statCumulativeLabel: "CUMULATIVE INVESTMENT",
  statCurrentLabel: "CURRENT ROUND",
  fundingTitle: "투자 유치 이력.",
  fundingDesc: "2016년 설립 이후 시리즈 라운드와 후속 투자를 통해 누적 약 250억 원을 유치했습니다.",
  fundingSourceNote: "공개 자료(공식 about 페이지) 기준. 비공개 라운드 정보는 IR 미팅에서 별도 안내드립니다.",
  materialsTitle: "발표자료 · IR 덱.",
  materialsNotice: "공식 IR 자료실은 콘텐츠 단계에서 별도 공개 예정입니다. 그 전까지는 IR 미팅 요청 시 메일로 자료를 안내드립니다.",
  materialsItems: [
    { name: "회사 소개서 (Company Deck)", note: "PDF · 콘텐츠 단계에서 등록 예정" },
    { name: "IR 덱 (Investor Deck)", note: "PDF · 미팅 요청 시 메일로 송부" },
    { name: "사업 보고서 / 분기 리포트", note: "상장 후 공시 의무에 따라 공개" },
  ],
  contactTitle: "다음 9년, 함께 만드시겠습니까?",
  contactDesc: "한국 1세대 블록체인 인프라가 쌓아온 9년의 신뢰 위에, 다음 시대를 함께 그릴 파트너를 기다리고 있습니다.",
  contactPrefix: "이야기 나누기:",
  irRequest: "IR 미팅 요청 →",
  futureNote: "상장 후: Disclosures (분기 보고·사업 보고서) · 주가 정보 등 추가 예정.",
};

const FUNDING_ROUNDS = [
  {
    year: 2024,
    month: 3,
    round: "Additional Round",
    amount: "₩9B",
    cumulative: "누적 약 250억 원",
    note: "글로벌 신원 인증·공공 SaaS 사업 확장 및 KOSDAQ 상장 준비 자금",
  },
  {
    year: 2020,
    month: 7,
    round: "Bridge Round",
    amount: "—",
    cumulative: "누적 약 160억 원",
    note: "DID·MyID 사업 본격 확장과 공공 시범사업 대응을 위한 브릿지",
  },
  {
    year: 2019,
    month: 10,
    round: "Series A",
    amount: "₩10B",
    cumulative: "—",
    note: "broof·MyID 출시 및 마이아이디 얼라이언스 구축",
  },
] as const;

export default function IRPage() {
  const c = COPY;
  return (
    <>
      {/* 1. Hero */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h1 className="h-hero font-semibold">{c.heroTitle}</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl">{c.heroSub}</p>
        </Container>
      </section>

      {/* 2. Stats — title-less */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <StatBlock value="9 years" label={c.statSinceLabel} />
            <StatBlock value="₩25B+" label={c.statCumulativeLabel} />
            <StatBlock value="₩20B" label={c.statCurrentLabel} />
          </div>
        </Container>
      </section>

      {/* 3. Funding history */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">FUNDING HISTORY</div>
          <h2 className="h-section">{c.fundingTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-3 max-w-2xl">{c.fundingDesc}</p>

          <ol className="mt-12 relative pl-8 border-l border-[var(--border)]">
            {FUNDING_ROUNDS.map((r) => (
              <li key={`${r.year}-${r.round}`} className="relative pb-12 last:pb-0 group">
                <span
                  aria-hidden
                  className="absolute -left-[34px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--bg-base)] border-2 border-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] transition-colors"
                />
                <div className="grid md:grid-cols-[140px_1fr] gap-x-8 gap-y-2">
                  <div>
                    <div className="label-mono text-2xl text-[var(--accent-primary)] tabular-nums">
                      {r.year}
                    </div>
                    <div className="label-mono text-[var(--text-tertiary)] mt-1">{r.month}월</div>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="text-base font-semibold">{r.round}</h3>
                      <span className="text-[var(--accent-primary)] text-sm tabular-nums">{r.amount}</span>
                      <span className="text-xs text-[var(--text-tertiary)]">{r.cumulative}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-2">{r.note}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-[var(--text-tertiary)] mt-8 italic">{c.fundingSourceNote}</p>
        </Container>
      </section>

      {/* 4. Materials & IR Deck */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">IR MATERIALS</div>
          <h2 className="h-section">{c.materialsTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-3 max-w-2xl">{c.materialsNotice}</p>
          <ul className="grid md:grid-cols-3 gap-4 mt-12">
            {c.materialsItems.map((m) => (
              <li key={m.name} className="p-6 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-xs text-[var(--text-tertiary)] mt-3">{m.note}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. Investor contact */}
      <section className="py-24">
        <Container className="max-w-2xl">
          <div className="label-mono mb-3">INVESTOR CONTACT</div>
          <h2 className="h-section">{c.contactTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 leading-relaxed">{c.contactDesc}</p>
          <p className="text-[var(--text-secondary)] mt-6">
            {c.contactPrefix} <a href="mailto:ir@parametacorp.com" className="text-[var(--accent-primary)]">ir@parametacorp.com</a>
          </p>
          <Button variant="primary" className="mt-8" asChild>
            <a href="mailto:ir@parametacorp.com">{c.irRequest}</a>
          </Button>
          <p className="text-xs text-[var(--text-tertiary)] mt-12">{c.futureNote}</p>
        </Container>
      </section>
    </>
  );
}
