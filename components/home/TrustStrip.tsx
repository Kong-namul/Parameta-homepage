import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

const kpis = ["CSAP 업계 최초", "K-BTF 수주", "9년 운영", "코스닥 상장 추진"];

export function TrustStrip() {
  return (
    <section className="py-12 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
      <Container className="flex flex-wrap items-center justify-center gap-3">
        {kpis.map((k) => (
          <Badge key={k}>{k}</Badge>
        ))}
      </Container>
    </section>
  );
}
