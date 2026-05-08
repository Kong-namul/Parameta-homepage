import Link from "@/components/ui/HardLink";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { StatBlock } from "@/components/ui/StatBlock";
import { coreTech, type CoreTechKey } from "@/lib/core-tech";

type Params = Promise<{ tech: string }>;

const COPY = {
  label: "CORE TECH",
  featuresTitle: "핵심 기능.",
  useCasesTitle: "운영 적용.",
  milestonesTitle: "Development Achievement Highlight.",
  milestonesDesc: "블록체인 원천 기술과 전문 개발 인력을 바탕으로 코어 엔진의 진화를 이끌어왔습니다.",
  closingTitle: "More technical detail?",
  docsCta: "Docs →",
  contactTechnical: "Contact Us →",
};

export function generateStaticParams() {
  return (Object.keys(coreTech) as CoreTechKey[]).map((tech) => ({ tech }));
}

export default async function CoreTechPage({ params }: { params: Params }) {
  const { tech } = await params;
  const t = coreTech[tech as CoreTechKey];
  if (!t) return notFound();
  const c = COPY;

  return (
    <>
      {/* 1. Hero */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <nav aria-label="Breadcrumb" className="label-mono mb-8 flex items-center gap-2">
            <Link
              href="/core"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Core
            </Link>
            <span className="text-[var(--text-tertiary)]">/</span>
            <span className="text-[var(--text-primary)]">{t.name}</span>
          </nav>
          <h1 className="h-hero font-semibold tracking-tight">{t.name}</h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mt-6 max-w-3xl font-medium leading-snug">
            {t.tagline}
          </p>
          <p className="text-[var(--text-secondary)] mt-4 max-w-3xl leading-relaxed">
            {t.description}
          </p>
        </Container>
      </section>

      {/* 2. Stats (optional) */}
      {t.stats && (
        <section className="py-24 border-b border-[var(--border-subtle)]">
          <Container>
            <div className="grid md:grid-cols-3 gap-8">
              {t.stats.map((s) => (
                <StatBlock key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 3. Features */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">CAPABILITIES</div>
          <h2 className="h-section">{c.featuresTitle}</h2>
          <ul className="grid md:grid-cols-2 gap-4 mt-12">
            {t.features.map((f) => (
              <li key={f.name} className="p-6 border border-[var(--border)] rounded-md">
                <h3 className="font-semibold">{f.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">{f.desc}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4. Use cases */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-3">DEPLOYED IN</div>
          <h2 className="h-section">{c.useCasesTitle}</h2>
          <ul className="grid md:grid-cols-3 gap-4 mt-12">
            {t.useCases.map((u) => (
              <li
                key={u.name}
                className="p-6 border border-[var(--border)] rounded-md hover:border-[var(--accent-primary)] transition-colors"
              >
                <span className="label-mono text-[var(--accent-primary)]">{u.tag}</span>
                <h3 className="font-semibold mt-3">{u.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{u.desc}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4.5 Milestones (optional) */}
      {t.milestones && t.milestones.length > 0 && (
        <section className="py-24 border-b border-[var(--border-subtle)]">
          <Container>
            <div className="label-mono mb-3">DEVELOPMENT MILESTONES</div>
            <h2 className="h-section">{c.milestonesTitle}</h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl leading-relaxed">{c.milestonesDesc}</p>
            <ol className="mt-12 relative pl-8 border-l border-[var(--border)]">
              {t.milestones.map((m) => (
                <li key={`${m.year}-${m.month}-${m.title}`} className="relative pb-10 last:pb-0 group">
                  <span
                    aria-hidden
                    className="absolute -left-[34px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--bg-base)] border-2 border-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] transition-colors"
                  />
                  <div className="grid md:grid-cols-[140px_1fr] gap-x-8 gap-y-2">
                    <div>
                      <div className="label-mono text-2xl text-[var(--accent-primary)] tabular-nums">
                        {m.year}
                      </div>
                      <div className="label-mono text-[var(--text-tertiary)] mt-1">{m.month}</div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{m.title}</h3>
                      {m.desc && (
                        <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                          {m.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* 4.6 Credentials (optional) */}
      {t.credentials && (
        <section className="py-24 border-b border-[var(--border-subtle)]">
          <Container>
            <div className="label-mono mb-3">PEOPLE & QUALIFICATIONS</div>
            <h2 className="h-section">{t.credentials.title}</h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl leading-relaxed">{t.credentials.desc}</p>

            {t.credentials.breakdown && (
              <ul className="grid md:grid-cols-3 gap-4 mt-12 max-w-3xl">
                {t.credentials.breakdown.map((b) => (
                  <li
                    key={b.label}
                    className={`p-6 border rounded-md ${
                      b.accent
                        ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/[0.06]"
                        : "border-[var(--border)]"
                    }`}
                  >
                    <div
                      className={`text-3xl font-semibold tabular-nums ${
                        b.accent ? "text-[var(--accent-primary)]" : ""
                      }`}
                    >
                      {b.value}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)] mt-2">{b.label}</div>
                  </li>
                ))}
              </ul>
            )}

            {t.credentials.badges && t.credentials.badges.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-2 max-w-3xl">
                {t.credentials.badges.map((badge) => (
                  <li
                    key={badge}
                    className="px-3 py-2 border border-[var(--border)] rounded-md text-sm text-[var(--text-secondary)]"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </section>
      )}

      {/* 5. Closing */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingTitle}</h2>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="primary" asChild>
              <Link href="/contact">{c.contactTechnical}</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/docs">{c.docsCta}</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
