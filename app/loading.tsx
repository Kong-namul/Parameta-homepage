import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <section className="py-24" aria-busy="true">
      <Container>
        <div className="space-y-4 animate-pulse">
          <div className="h-12 w-3/4 max-w-xl bg-[var(--bg-surface)] rounded" />
          <div className="h-4 w-1/2 max-w-md bg-[var(--bg-surface)] rounded" />
          <div className="h-4 w-1/3 max-w-sm bg-[var(--bg-surface)] rounded" />
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div className="h-32 bg-[var(--bg-surface)] rounded-md" />
            <div className="h-32 bg-[var(--bg-surface)] rounded-md" />
            <div className="h-32 bg-[var(--bg-surface)] rounded-md" />
          </div>
        </div>
      </Container>
    </section>
  );
}
