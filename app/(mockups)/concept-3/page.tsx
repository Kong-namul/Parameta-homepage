import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function Concept3Mockup() {
  return (
    <section className="min-h-[80vh] flex items-center py-24">
      <Container className="text-center">
        <div className="label-mono mb-6">KOREA · WEB3 · SINCE 2016</div>
        <h1 className="h-hero font-bold tracking-tight max-w-4xl mx-auto">
          We build the road.
          <br />
          <span className="italic font-light opacity-50">Korea walks it.</span>
        </h1>
        <p className="mt-6 text-[var(--text-secondary)]">우리가 길을 깔고, 한국이 그 위를 걷습니다.</p>
        <div className="mt-12 flex justify-center gap-3">
          <Button variant="primary">Explore products →</Button>
          <Button variant="secondary">무료 컨설팅</Button>
        </div>
      </Container>
    </section>
  );
}
