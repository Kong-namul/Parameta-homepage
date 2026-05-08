import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function ClosingCTA() {
  return (
    <section className="py-24">
      <Container className="text-center max-w-2xl mx-auto">
        <h2 className="h-section">Talk to our team.</h2>
        <p className="text-[var(--text-secondary)] mt-4">
          금융사·기업·지자체 — 어떤 분야든, 든든한 파트너가 되겠습니다.
        </p>
        <div className="mt-8 flex justify-center">
          <Button variant="primary" asChild>
            <Link href="/contact">Contact Us →</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
