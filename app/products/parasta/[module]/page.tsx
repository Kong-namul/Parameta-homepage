import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { parastaModules, type ParaStaModuleKey } from "@/lib/parasta-modules";

type Params = Promise<{ module: string }>;

const COPY = {
  label: "PARASTA MODULE",
  trySandbox: "Try in sandbox",
  talkToSales: "Talk to sales",
  whatItDoes: "WHAT IT DOES",
  whatItDoesTitle: "핵심 기능.",
  architecture: "ARCHITECTURE",
  architectureTitle: "시스템 구조.",
  architecturePlaceholder: "인터랙티브 다이어그램 placeholder — Phase 11 콘텐츠 단계에서 SVG로 채움",
  bm: "BM MODEL",
  bmTitle: "BM 모델 안내.",
  bmDesc: "트랜잭션 수수료 + 구독 혼합. 모듈별 정확한 가격은 견적 단계에서 안내.",
  closingPrefix: "Ready to integrate",
  contact: "Contact",
};

export function generateStaticParams() {
  return (Object.keys(parastaModules) as ParaStaModuleKey[]).map((m) => ({ module: m }));
}

export default async function ModulePage({ params }: { params: Params }) {
  const { module: moduleKey } = await params;
  const m = parastaModules[moduleKey as ParaStaModuleKey];
  if (!m) return notFound();
  const c = COPY;

  return (
    <>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">{c.label}</div>
          <h1 className="h-hero font-semibold">{m.name}</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl text-lg">{m.tagline}</p>
          <div className="mt-8 flex gap-3">
            <Button variant="primary">{c.trySandbox}</Button>
            <Button variant="secondary">{c.talkToSales}</Button>
          </div>
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">{c.whatItDoes}</div>
          <h2 className="h-section">{c.whatItDoesTitle}</h2>
          <ul className="grid md:grid-cols-2 gap-4 mt-12">
            {m.features.map((f) => (
              <li key={f} className="p-5 border border-[var(--border)] rounded-md flex items-start gap-3">
                <span className="text-[var(--accent-primary)] mt-0.5">→</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">{c.architecture}</div>
          <h2 className="h-section">{c.architectureTitle}</h2>
          <div className="mt-12 p-12 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
            {c.architecturePlaceholder}
          </div>
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">{c.bm}</div>
          <h2 className="h-section">{c.bmTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">{c.bmDesc}</p>
          <div className="mt-8">
            <Button variant="primary">{c.talkToSales}</Button>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingPrefix} {m.name}?</h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="primary">{c.trySandbox}</Button>
            <Button variant="secondary">{c.contact}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
