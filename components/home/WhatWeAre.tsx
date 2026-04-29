import { Container } from "@/components/layout/Container";

const NEEDS = [
  { key: "reliability", label: "Reliability", title: "안정성", desc: "자사 앱에 붙였을 때 죽지 않고 24시간 돌아간다" },
  { key: "observability", label: "Observability", title: "관측 가능성", desc: "블록체인을 몰라도 한눈에 — 누구 지갑에 얼마, API 성공/실패" },
  { key: "control", label: "Control", title: "통제권", desc: "법적·행정적 개입 가능한 관리자 권한" },
] as const;

export function WhatWeAre() {
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <h2 className="h-section max-w-2xl">기업을 위한 디지털 자산 금융 인프라.</h2>
        <p className="text-[var(--text-secondary)] mt-4 max-w-xl">
          기업이 디지털 자산을 발행·운용할 때 마주하는 규제와 기술 장벽을 한 번에 해결합니다.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {NEEDS.map((n) => (
            <div key={n.key} className="space-y-3 p-6 border border-[var(--border)] rounded-md">
              <div className="label-mono">{n.label}</div>
              <h3 className="text-xl font-semibold">{n.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{n.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
