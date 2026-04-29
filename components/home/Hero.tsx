"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useLocale } from "next-intl";
import gsap from "gsap";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const locale = useLocale();
  const isEn = locale === "en";

  useGSAP(
    () => {
      if (!ref.current) return;
      if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-label", { opacity: 0, y: 16, duration: 0.5 })
        .from(".hero-phrase", { opacity: 0, y: 24, duration: 0.7, stagger: 0.18 }, "-=0.2")
        .from(".hero-sub", { opacity: 0, y: 12, duration: 0.5 }, "-=0.3")
        .from(".hero-cta > *", { opacity: 0, y: 12, duration: 0.4, stagger: 0.08 }, "-=0.2")
        .from(".hero-chip", { opacity: 0, scale: 0.85, duration: 0.4, stagger: 0.07 }, "-=0.2")
        .from(
          ".hero-pixel",
          { opacity: 0, scale: 0.4, duration: 0.5, stagger: { each: 0.012, from: "random" } },
          0.3
        );
    },
    { scope: ref, dependencies: [locale] }
  );

  // KO mode: 한글 메인 (3 phrase) + 영문 sub
  // EN mode: 영문 메인 (3 phrase) + 한글 sub
  const koPhrases = (
    <>
      <span className="hero-phrase block">공공·금융이 먼저 부르는</span>
      <span className="hero-phrase block">
        한국 <span className="bg-[var(--accent-primary-soft)] px-2 text-[var(--accent-primary)]">1세대</span>
      </span>
      <span className="hero-phrase block">Web3 인프라.</span>
    </>
  );

  const enPhrases = (
    <>
      <span className="hero-phrase block">Korea&apos;s</span>
      <span className="hero-phrase block">
        <span className="bg-[var(--accent-primary-soft)] px-2 text-[var(--accent-primary)]">first-generation</span> Web3
      </span>
      <span className="hero-phrase block">infrastructure.</span>
    </>
  );

  // EN mode: 영문 sub (한글 안 나옴) / KO mode: 영문 sub (영어 supporting)
  const koSub = (
    <>
      Called first by public sector and finance.<br />
      Korea&apos;s first-generation Web3 infrastructure since 2016.
    </>
  );
  const enSub = "Called first by public sector and finance, since 2016.";

  return (
    <section ref={ref} className="py-24 md:py-32 border-b border-[var(--border-subtle)]">
      <Container className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="label-mono hero-label mb-6">KOREA · WEB3 · SINCE 2016</div>
          <h1 className="h-hero font-semibold tracking-tight">{isEn ? enPhrases : koPhrases}</h1>
          <p className="hero-sub mt-6 text-[var(--text-secondary)] text-sm md:text-base max-w-md">
            {isEn ? enSub : koSub}
          </p>
          <div className="hero-cta mt-12 flex gap-3">
            <Button variant="primary">{isEn ? "Explore products →" : "제품 둘러보기 →"}</Button>
            <Button variant="secondary">{isEn ? "Contact sales" : "무료 컨설팅"}</Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            <Badge className="hero-chip">CSAP first</Badge>
            <Badge className="hero-chip">K-BTF</Badge>
            <Badge className="hero-chip">9 years</Badge>
            <Badge className="hero-chip">KOSDAQ-bound</Badge>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-1 aspect-square">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="hero-pixel bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
              style={{ opacity: ((i % 12) + 1) / 12 }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
