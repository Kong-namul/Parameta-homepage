import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center py-24">
      <Container className="text-center max-w-2xl mx-auto">
        <div className="label-mono mb-4">404</div>
        <h1 className="h-hero font-semibold">길을 잃으셨나요?</h1>
        <p className="text-[var(--text-secondary)] mt-4">찾는 페이지가 없거나 이전됐을 수 있어요.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="primary" asChild>
            <Link href="/">홈으로</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/contact">문의하기</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
