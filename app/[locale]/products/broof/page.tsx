import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const COPY = {
  ko: {
    heroTitle: "블록체인 증명서 발급 — 위·변조 불가, 영구 보관.",
    heroSub: "발급·열람·공유·검증·개인 공개 통제까지 한 번에.",
    visit: "broof.io에서 자세히 →",
    contactIssuer: "발급 기관 도입 문의",
    whatTitle: "증서 라이프사이클 통합.",
    whatItems: [
      "증명서 발급·기록",
      "수신자 열람·공유",
      "제3자 검증",
      "개인정보 공개 통제",
    ],
    casesTitle: "도입 사례.",
    cases: [
      { tag: "정부", name: "국가AI전략위원회 위촉증", desc: "정부 위원회 블록체인 위촉장 채택 첫 사례 (2025.11, 180+명)" },
      { tag: "지자체", name: "서울시·경찰청", desc: "공공 증명서 발급" },
      { tag: "교육", name: "대학·교육기관", desc: "학위·이수 증명서" },
      { tag: "예술/컨퍼런스", name: "참석 증명서·인증서", desc: "디지털 NFT 형태 발급" },
    ],
    issuerTitle: "발급 기관 이점.",
    issuerItems: [
      { name: "별도 DB 구축 불필요", desc: "블록체인이 발급 이력 관리" },
      { name: "위·변조 방지", desc: "분산원장 기반 영구 검증" },
      { name: "즉시 도입", desc: "broof.io에서 바로 시작" },
    ],
    recipientTitle: "수신자 이점.",
    recipientItems: [
      { name: "언제 어디서나 조회", desc: "모바일 한 번에 확인" },
      { name: "간편 공유", desc: "QR·링크로 즉시" },
      { name: "개인정보 공개 통제", desc: "공개 항목 선택" },
    ],
    closingTitle: "증명서 발급, 시작하세요.",
    closingPrimary: "broof.io 바로가기 →",
  },
  en: {
    heroTitle: "Blockchain certificate issuance — tamper-proof and permanent.",
    heroSub: "Issuance, viewing, sharing, verification, and disclosure control — all in one.",
    visit: "Learn more at broof.io →",
    contactIssuer: "Issuer inquiry",
    whatTitle: "Full certificate lifecycle.",
    whatItems: [
      "Issuance and recording",
      "Viewing and sharing by recipients",
      "Third-party verification",
      "Recipient-controlled disclosure",
    ],
    casesTitle: "Deployments.",
    cases: [
      { tag: "Government", name: "National AI Strategy Committee appointment", desc: "First blockchain appointment certificate adopted by a government committee (Nov 2025, 180+ members)" },
      { tag: "Local government", name: "Seoul City and National Police Agency", desc: "Public certificate issuance" },
      { tag: "Education", name: "Universities and educational institutions", desc: "Degrees and completion certificates" },
      { tag: "Arts and conferences", name: "Attendance and credential certificates", desc: "Issued as digital NFTs" },
    ],
    issuerTitle: "Issuer benefits.",
    issuerItems: [
      { name: "No separate database", desc: "The blockchain manages issuance history" },
      { name: "Tamper resistance", desc: "Permanent verification via distributed ledger" },
      { name: "Instant adoption", desc: "Start directly on broof.io" },
    ],
    recipientTitle: "Recipient benefits.",
    recipientItems: [
      { name: "Access anywhere, anytime", desc: "View instantly from mobile" },
      { name: "Easy sharing", desc: "Share via QR or link" },
      { name: "Disclosure control", desc: "Choose which fields to reveal" },
    ],
    closingTitle: "Start issuing certificates.",
    closingPrimary: "Open broof.io →",
  },
};

export default async function BroofPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = locale === "en" ? COPY.en : COPY.ko;
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
              <a href="https://broof.io" target="_blank" rel="noopener noreferrer">{c.visit}</a>
            </Button>
            <Button variant="secondary">{c.contactIssuer}</Button>
          </div>
        </Container>
      </section>

      {/* 2. What it does */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHAT IT DOES</div>
          <h2 className="h-section">{c.whatTitle}</h2>
          <ul className="grid md:grid-cols-2 gap-4 mt-12">
            {c.whatItems.map((f) => (
              <li key={f} className="p-5 border border-[var(--border)] rounded-md flex items-start gap-3">
                <span className="text-[var(--accent-primary)] mt-0.5">→</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. Use cases */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">USE CASES</div>
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

      {/* 4. Issuer benefits */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">FOR ISSUERS</div>
          <h2 className="h-section">{c.issuerTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {c.issuerItems.map((it) => (
              <div key={it.name} className="p-5 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{it.name}</h3>
                <p className="text-xs text-[var(--text-secondary)] mt-2">{it.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Recipient benefits */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">FOR RECIPIENTS</div>
          <h2 className="h-section">{c.recipientTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {c.recipientItems.map((it) => (
              <div key={it.name} className="p-5 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{it.name}</h3>
                <p className="text-xs text-[var(--text-secondary)] mt-2">{it.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CTA */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingTitle}</h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="primary" asChild>
              <a href="https://broof.io" target="_blank" rel="noopener noreferrer">{c.closingPrimary}</a>
            </Button>
            <Button variant="secondary">{c.contactIssuer}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
