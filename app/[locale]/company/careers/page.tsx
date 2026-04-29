import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const COPY = {
  ko: {
    sub: "오픈 포지션은 외부 채용 플랫폼에서 확인하세요.",
    cta: "원티드에서 보기 →",
  },
  en: {
    sub: "Open positions are listed on our external recruiting platform.",
    cta: "View on Wanted →",
  },
};

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = locale === "en" ? COPY.en : COPY.ko;
  return (
    <section className="py-24">
      <Container>
        <div className="label-mono mb-4">COMPANY · CAREERS</div>
        <h1 className="h-hero font-semibold">Careers.</h1>
        <p className="text-[var(--text-secondary)] mt-6 max-w-2xl">{c.sub}</p>
        <div className="mt-8">
          <Button variant="primary" asChild>
            <a href="https://wanted.co.kr/company/3413" target="_blank" rel="noopener noreferrer">{c.cta}</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
