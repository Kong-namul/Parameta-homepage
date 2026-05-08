"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Container } from "@/components/layout/Container";

// 9년 — 누적 연차를 vertical bars 로 시각화
function GraphicYears() {
  return (
    <div className="w-full h-full flex items-end justify-between gap-1.5 md:gap-2 px-2">
      {Array.from({ length: 9 }).map((_, i) => {
        const ratio = (i + 1) / 9;
        return (
          <div
            key={i}
            className="flex-1 rounded-t-sm border border-[var(--accent-primary)]/40"
            style={{
              height: `${30 + ratio * 70}%`,
              background: `color-mix(in oklab, var(--accent-primary) ${
                10 + ratio * 60
              }%, transparent)`,
            }}
          />
        );
      })}
    </div>
  );
}

// 신뢰 네트워크 — 중심 노드 + 외곽 노드 + 연결선
function GraphicNetwork() {
  const outer = Array.from({ length: 8 }).map((_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const r = 38;
    return {
      cx: 50 + Math.cos(angle) * r,
      cy: 50 + Math.sin(angle) * r,
    };
  });
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {outer.map((p, i) => (
        <line
          key={`l-${i}`}
          x1="50"
          y1="50"
          x2={p.cx}
          y2={p.cy}
          stroke="var(--accent-primary)"
          strokeOpacity="0.35"
          strokeWidth="0.4"
        />
      ))}
      {outer.map((p, i) => (
        <circle
          key={`o-${i}`}
          cx={p.cx}
          cy={p.cy}
          r="2.4"
          fill="var(--accent-primary)"
          fillOpacity={0.5 + (i % 3) * 0.15}
        />
      ))}
      <circle cx="50" cy="50" r="5.5" fill="var(--accent-primary)" />
      <circle
        cx="50"
        cy="50"
        r="9"
        fill="none"
        stroke="var(--accent-primary)"
        strokeOpacity="0.4"
        strokeWidth="0.5"
      />
    </svg>
  );
}

// AI 그리드 vs 사람 클러스터 대비
function GraphicHumanVsAI() {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-3 md:gap-5">
      {/* AI side — neat grid */}
      <div className="grid grid-cols-5 gap-1.5 content-center">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-[2px] border border-[var(--border)] bg-[var(--accent-primary)]/[0.06]"
          />
        ))}
      </div>
      {/* Human side — organic dots */}
      <div className="relative">
        {[
          { top: "12%", left: "30%", size: 12 },
          { top: "26%", left: "62%", size: 8 },
          { top: "44%", left: "18%", size: 10 },
          { top: "52%", left: "52%", size: 14 },
          { top: "68%", left: "30%", size: 7 },
          { top: "76%", left: "62%", size: 11 },
          { top: "82%", left: "12%", size: 6 },
          { top: "20%", left: "78%", size: 5 },
        ].map((d, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[var(--accent-primary)]"
            style={{
              top: d.top,
              left: d.left,
              width: d.size,
              height: d.size,
              opacity: 0.4 + ((i * 7) % 60) / 100,
            }}
          />
        ))}
      </div>
    </div>
  );
}

type Slide = {
  key: string;
  label: string;
  title: string;
  desc: string;
  graphic: ReactNode;
};

const SLIDES: Slide[] = [
  {
    key: "track",
    label: "DOMAIN DEPTH",
    title: "9년이 만든 규제·운영 감각",
    desc: "공공·금융 양쪽에서 9년간 인프라를 직접 만들고 운영하며, 규제와 실무를 동시에 아는 도메인 감각을 쌓아왔습니다. 문서로는 옮길 수 없는 ‘이런 경우엔 이렇게 한다’가 우리의 가장 단단한 자산입니다.",
    graphic: <GraphicYears />,
  },
  {
    key: "trust",
    label: "TRUSTED RELATIONSHIPS",
    title: "수년의 신뢰가 쌓인 고객·파트너",
    desc: "은행·증권사·지자체·공공기관까지 — 한 번의 PoC가 아니라 수년 단위로 함께 사업을 이어가는 관계망. 이 신뢰는 새 플레이어가 단기간에 따라잡을 수 없는 진입 장벽입니다.",
    graphic: <GraphicNetwork />,
  },
  {
    key: "ai",
    label: "BEYOND AI",
    title: "AI로는 대체할 수 없는 판단",
    desc: "코드와 문서는 AI가 빠르게 만들 수 있어도, ‘이 규제 환경에서 이 고객사에 무엇이 통하는가’는 사람의 경험에서만 나옵니다. 우리는 그 자리를 9년간 비워두지 않았습니다.",
    graphic: <GraphicHumanVsAI />,
  },
];

const ROTATE_MS = 3800;

export function DomainExpertise() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = SLIDES.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % total), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  const go = (dir: 1 | -1) => setActive((i) => (i + dir + total) % total);

  return (
    <section
      className="py-32 border-b border-[var(--border-subtle)] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        {/* Book spread — left: text / right: graphic */}
        <div className="relative">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors items-center justify-center text-lg"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors items-center justify-center text-lg"
          >
            ›
          </button>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[360px] md:min-h-[420px] md:px-16">
          {/* Left page — text */}
          <div className="relative min-h-[260px]">
            {SLIDES.map((p, i) => {
              const isActive = i === active;
              const isPrev = i < active;
              return (
                <article
                  key={p.key}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive
                      ? "opacity-100 translate-x-0 pointer-events-auto"
                      : isPrev
                        ? "opacity-0 -translate-x-6 pointer-events-none"
                        : "opacity-0 translate-x-6 pointer-events-none"
                  }`}
                >
                  <h3 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-base md:text-lg text-[var(--text-secondary)] mt-6 leading-relaxed">
                    {p.desc}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Right page — graphic */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 border border-[var(--border)] rounded-2xl bg-[var(--accent-primary)]/[0.02]" />
            {SLIDES.map((p, i) => {
              const isActive = i === active;
              const isPrev = i < active;
              return (
                <div
                  key={p.key}
                  aria-hidden
                  className={`absolute inset-0 p-8 md:p-10 transition-all duration-700 ease-out ${
                    isActive
                      ? "opacity-100 scale-100"
                      : isPrev
                        ? "opacity-0 scale-95"
                        : "opacity-0 scale-95"
                  }`}
                >
                  {p.graphic}
                </div>
              );
            })}
          </div>
        </div>
        </div>

        {/* Pagination — centered circles */}
        <div className="mt-12 flex items-center justify-center gap-3">
          {SLIDES.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.key}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to ${p.label}`}
                aria-current={isActive}
                className={`rounded-full transition-all duration-500 ${
                  isActive
                    ? "w-3 h-3 bg-[var(--accent-primary)]"
                    : "w-2.5 h-2.5 bg-[var(--border)] hover:bg-[var(--text-tertiary)]"
                }`}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
