import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function Concept2Mockup() {
  return (
    <section className="min-h-[80vh] flex items-center py-24">
      <Container className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="label-mono mb-6">KOREA · WEB3 · SINCE 2016</div>
          <h1 className="h-hero font-bold tracking-tight">
            <span className="bg-[var(--accent-primary-soft)] px-2 text-[var(--accent-primary)]">Steadily</span> built.
            <br />
            <span className="opacity-50">Still building.</span>
          </h1>
          <p className="mt-6 text-[var(--text-secondary)]">묵묵히 만들어 왔고, 지금도 만드는 중.</p>
          <div className="mt-12 flex gap-3">
            <Button variant="primary">Explore products →</Button>
            <Button variant="secondary">무료 컨설팅</Button>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-1 aspect-square">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
              style={{ opacity: ((i % 12) + 1) / 12 }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
