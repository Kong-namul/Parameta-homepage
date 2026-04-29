import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function Concept4Mockup() {
  return (
    <section className="min-h-[80vh] flex items-center py-24">
      <Container>
        <div className="label-mono mb-6">KOREA · WEB3 · SINCE 2016</div>
        <h1 className="h-hero font-semibold tracking-tight max-w-3xl">
          <span className="bg-[var(--accent-primary-soft)] px-2 text-[var(--accent-primary)]">Steadily</span>,
          <br />
          since 2016.
          <br />
          <span className="font-light opacity-70">Into Web3.</span>
        </h1>
        <p className="mt-6 text-[var(--text-secondary)]">2016년부터 한결같이. Web3로.</p>
        <div className="mt-12 flex gap-3">
          <Button variant="primary">Explore products →</Button>
          <Button variant="secondary">무료 컨설팅</Button>
        </div>
        <div className="mt-12 flex flex-wrap gap-2">
          <Badge>CSAP first</Badge>
          <Badge>K-BTF</Badge>
          <Badge>9 years</Badge>
          <Badge>KOSDAQ-bound</Badge>
        </div>
      </Container>
    </section>
  );
}
