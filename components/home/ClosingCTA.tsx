import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function ClosingCTA() {
  return (
    <section className="py-24">
      <Container className="text-center max-w-2xl mx-auto">
        <h2 className="h-section">Talk to our team.</h2>
        <p className="text-[var(--text-secondary)] mt-4">
          금융사·기업·지자체 — 어느 길에서 시작하든 한 팀이 받습니다.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="primary" asChild>
            <Link href="/contact">무료 컨설팅</Link>
          </Button>
          <Button variant="secondary" asChild>
            <a href="mailto:sales@parametacorp.com">sales@parametacorp.com</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
