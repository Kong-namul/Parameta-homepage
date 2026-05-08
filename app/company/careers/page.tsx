import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const COPY = {
  sub: "오픈 포지션은 외부 채용 플랫폼에서 확인하세요.",
  cta: "원티드에서 보기 →",
};

export default function CareersPage() {
  const c = COPY;
  return (
    <section className="py-24">
      <Container>
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
