import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function ShowcaseDemoCTA() {
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container className="text-center max-w-2xl mx-auto">
        <div className="label-mono mb-3">SHOWCASE DEMO</div>
        <h2 className="h-section">통합 자산 지갑 — 정말 쉬운 Web3 월렛.</h2>
        <p className="text-[var(--text-secondary)] mt-4">
          현금·주식·가상자산을 하나의 흐름으로. 인앱 커머스 시나리오.
        </p>
        <Button variant="primary" className="mt-8" asChild>
          <a href="https://demo.parametacorp.com" target="_blank" rel="noopener noreferrer">
            데모 보기 →
          </a>
        </Button>
      </Container>
    </section>
  );
}
