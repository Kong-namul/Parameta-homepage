import { Container } from "@/components/layout/Container";

export default function PrivacyPage() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl prose prose-invert">
        <div className="label-mono mb-4">LEGAL</div>
        <h1 className="h-hero font-semibold">개인정보처리방침</h1>
        <p className="text-[var(--text-secondary)] mt-6">
          ㈜파라메타(이하 &quot;회사&quot;)는 사용자의 개인정보를 중요시하며, 개인정보보호법을 준수하고 있습니다.
        </p>
        <h2 className="h-section mt-12">1. 수집하는 개인정보 항목</h2>
        <p className="text-[var(--text-secondary)] mt-4">
          상담 문의 시: 이름, 회사명, 직책, 이메일, 전화번호, 메시지 — 영업 응답 목적.
        </p>
        <h2 className="h-section mt-12">2. 개인정보의 보유 및 이용기간</h2>
        <p className="text-[var(--text-secondary)] mt-4">
          상담 종료 후 3년 보유. 이후 안전하게 폐기.
        </p>
        <h2 className="h-section mt-12">3. 개인정보 책임자</h2>
        <p className="text-[var(--text-secondary)] mt-4">
          이메일: <a href="mailto:privacy@parametacorp.com" className="text-[var(--accent-primary)]">privacy@parametacorp.com</a>
        </p>
        <p className="text-xs text-[var(--text-tertiary)] mt-12">
          본 페이지는 v1 placeholder입니다. 법무 검토 후 정식 약관으로 갱신될 예정입니다.
        </p>
      </Container>
    </section>
  );
}
