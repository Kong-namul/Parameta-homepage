import { Container } from "@/components/layout/Container";

const COPY = {
  title: "이용약관",
  intro: "본 약관은 ㈜파라메타가 제공하는 웹사이트 서비스 이용에 관한 조건을 규정합니다.",
  h1: "1. 서비스의 제공",
  p1: "회사는 본 사이트를 통해 제품·서비스 정보 제공, 상담 문의 접수, 관련 자료 열람을 제공합니다.",
  h2: "2. 이용자의 의무",
  p2: "이용자는 관련 법령 및 본 약관을 준수하여 사이트를 이용해야 합니다.",
  h3: "3. 책임의 제한",
  p3: "회사는 본 사이트에 게시된 정보의 정확성·완전성을 보장하지 않으며, 이용으로 인한 손해에 대해 법령이 허용하는 범위 내에서 책임을 지지 않습니다.",
  note: "본 페이지는 v1 placeholder입니다. 법무 검토 후 정식 약관으로 갱신될 예정입니다.",
};

export default function TermsPage() {
  const c = COPY;
  return (
    <section className="py-24">
      <Container className="max-w-3xl prose prose-invert">
        <div className="label-mono mb-4">LEGAL</div>
        <h1 className="h-hero font-semibold">{c.title}</h1>
        <p className="text-[var(--text-secondary)] mt-6">{c.intro}</p>
        <h2 className="h-section mt-12">{c.h1}</h2>
        <p className="text-[var(--text-secondary)] mt-4">{c.p1}</p>
        <h2 className="h-section mt-12">{c.h2}</h2>
        <p className="text-[var(--text-secondary)] mt-4">{c.p2}</p>
        <h2 className="h-section mt-12">{c.h3}</h2>
        <p className="text-[var(--text-secondary)] mt-4">{c.p3}</p>
        <p className="text-xs text-[var(--text-tertiary)] mt-12">{c.note}</p>
      </Container>
    </section>
  );
}
