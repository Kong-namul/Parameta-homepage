import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function Concept1Mockup() {
  return (
    <section className="min-h-[80vh] flex items-center py-24">
      <Container className="text-center">
        <div className="label-mono mb-6">KOREA · WEB3 · SINCE 2016</div>
        <h1 className="h-hero italic font-light max-w-4xl mx-auto">
          Nine years <em className="not-italic font-semibold">walking</em> the road.
        </h1>
        <p className="mt-6 text-[var(--text-secondary)]">9년째 걷고 있는 길.</p>
        <div className="mt-12 flex justify-center gap-3">
          <Button variant="primary">Explore products →</Button>
          <Button variant="secondary">무료 컨설팅</Button>
        </div>
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-30" />
        <div className="mt-4 flex justify-center gap-3 opacity-60">
          {["2016", "2018", "2020", "2023", "2024", "2026"].map((y) => (
            <span key={y} className="label-mono">·{y}·</span>
          ))}
        </div>
      </Container>
    </section>
  );
}
