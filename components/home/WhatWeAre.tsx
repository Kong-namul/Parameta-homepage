import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";

const POINTS = [
  {
    key: "track",
    label: "SINCE 2016",
    title: "9년의 운영",
    desc: "2016년 설립 이후 끊김 없이 인프라를 만들고 운영해온 한국 1세대 블록체인 기업.",
    href: "/company",
    cta: "About →",
  },
  {
    key: "trust",
    label: "TRUSTED",
    title: "검증된 인증",
    desc: "업계 최초 CSAP / K-BTF 시범사업 / GS 인증 / SW 품질대상 — 공공·금융 모두가 먼저 부르는 이유.",
    href: "/products#cases",
    cta: "산업별 적용 사례 →",
  },
  {
    key: "inhouse",
    label: "IN-HOUSE TECH",
    title: "자체 기술력",
    desc: "Loopchain 메인넷부터 ParaSta 플랫폼까지, 모든 인프라를 직접 설계·개발·운영합니다.",
    href: "/core",
    cta: "Core 기술 →",
  },
] as const;

export function WhatWeAre() {
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <h2 className="h-section max-w-2xl">묵묵히 만들어온 9년, 한국 디지털 자산 인프라의 기준.</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {POINTS.map((p) => (
            <Link
              key={p.key}
              href={p.href}
              className="group block p-6 border border-[var(--border)] rounded-md transition-colors hover:border-[var(--accent-primary)] flex flex-col"
            >
              <div className="space-y-3 flex-1">
                <div className="label-mono">{p.label}</div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{p.desc}</p>
              </div>
              <div className="mt-6 text-[var(--accent-primary)] text-sm group-hover:translate-x-1 transition-transform">
                {p.cta}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
