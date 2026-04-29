import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { parastaModules, type ParaStaModuleKey } from "@/lib/parasta-modules";

type Params = Promise<{ locale: string; module: string }>;

export function generateStaticParams() {
  return (Object.keys(parastaModules) as ParaStaModuleKey[]).map((m) => ({ module: m }));
}

export default async function ModulePage({ params }: { params: Params }) {
  const { module: moduleKey } = await params;
  const m = parastaModules[moduleKey as ParaStaModuleKey];
  if (!m) return notFound();

  return (
    <>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">PARASTA MODULE</div>
          <h1 className="h-hero font-semibold">{m.name}</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl text-lg">{m.tagline}</p>
          <div className="mt-8 flex gap-3">
            <Button variant="primary">Try in sandbox</Button>
            <Button variant="secondary">Talk to sales</Button>
          </div>
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">WHAT IT DOES</div>
          <h2 className="h-section">핵심 기능.</h2>
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
          <div className="label-mono mb-3">ARCHITECTURE</div>
          <h2 className="h-section">시스템 구조.</h2>
          <div className="mt-12 p-12 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
            인터랙티브 다이어그램 placeholder — Phase 11 콘텐츠 단계에서 SVG로 채움
          </div>
        </Container>
      </section>

      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">BM MODEL</div>
          <h2 className="h-section">BM 모델 안내.</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">
            트랜잭션 수수료 + 구독 혼합. 모듈별 정확한 가격은 견적 단계에서 안내.
          </p>
          <div className="mt-8">
            <Button variant="primary">Talk to sales</Button>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">Ready to integrate {m.name}?</h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="primary">Try in sandbox</Button>
            <Button variant="secondary">Contact</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
