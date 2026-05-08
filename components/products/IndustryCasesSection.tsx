"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { solutions, type SolutionKey } from "@/lib/solutions";
import { IndustryCasesModal } from "./IndustryCasesModal";

const SLUGS: SolutionKey[] = ["financial", "public", "enterprise"];

const COPY = {
  label: "USE CASES",
  title: "산업별 적용 사례.",
  desc: "금융·공공·일반 기업 — 각 산업에서 검증된 적용 모델과 실제 도입 사례를 확인하세요.",
  cta: "사례 자세히 →",
};

export function IndustryCasesSection() {
  const [openSegment, setOpenSegment] = useState<SolutionKey | null>(null);

  return (
    <>
      <section id="cases" className="py-24 scroll-mt-20">
        <Container>
          <div className="label-mono mb-3">{COPY.label}</div>
          <h2 className="h-section">{COPY.title}</h2>
          <p className="text-[var(--text-secondary)] mt-3 max-w-xl">{COPY.desc}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {SLUGS.map((slug) => {
              const s = solutions[slug];
              const totalCount = (s.models?.length ?? 0) + (s.cases?.length ?? 0);
              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => setOpenSegment(slug)}
                  className="group block text-left"
                >
                  <Card
                    variant="elevated"
                    className="h-full flex flex-col transition-colors group-hover:border-[var(--accent-primary)] cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-2xl font-semibold">{s.name}</h3>
                      {totalCount > 0 && (
                        <span className="label-mono text-[10px] px-2 py-1 rounded-full border border-[var(--accent-primary)]/40 text-[var(--accent-primary)] tabular-nums">
                          {totalCount} CASES
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-3 flex-1">{s.audience}</p>
                    <div className="mt-12 text-[var(--accent-primary)] text-sm group-hover:translate-x-1 transition-transform">
                      {COPY.cta}
                    </div>
                  </Card>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      <IndustryCasesModal segment={openSegment} onClose={() => setOpenSegment(null)} />
    </>
  );
}
