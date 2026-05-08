"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { solutions, type SolutionKey, type SolutionContent } from "@/lib/solutions";

interface Props {
  segment: SolutionKey | null;
  onClose: () => void;
}

type Item = {
  id: string;
  kind: "model" | "case";
  title: string;
  headline: string;
  body: string;
  tags: readonly string[];
};

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function IndustryCasesModal({ segment, onClose }: Props) {
  const open = segment !== null;
  const data: SolutionContent | null = segment ? solutions[segment] : null;

  const items = useMemo<Item[]>(() => {
    if (!data) return [];
    const out: Item[] = [];
    for (const m of data.models) {
      out.push({
        id: `model-${slug(m.title)}`,
        kind: "model",
        title: m.title,
        headline: m.outcome ? `${m.tag} · ${m.outcome}` : m.tag,
        body: m.desc,
        tags: [m.tag],
      });
    }
    if (data.cases) {
      for (const cs of data.cases) {
        out.push({
          id: `case-${cs.id}`,
          kind: "case",
          title: cs.title,
          headline: cs.headline,
          body: cs.body,
          tags: cs.tags,
        });
      }
    }
    return out;
  }, [data]);

  const [activeIdx, setActiveIdx] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    setActiveIdx(0);
  }, [segment]);

  useEffect(() => {
    if (!open) return;
    const el = tabsRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [open, items.length]);

  const scrollTabs = (dir: 1 | -1) => {
    const el = tabsRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: "smooth" });
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || !data) return null;

  const activeItem = items[activeIdx];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${data.name} industry cases`}
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-full md:max-w-3xl max-h-[88vh] md:max-h-[78vh] bg-[var(--bg-base)] border border-[var(--border)] rounded-t-2xl md:rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-5 md:px-7 pt-6 pb-5 border-b border-[var(--border-subtle)] relative">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-7 h-7 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors flex items-center justify-center shrink-0 z-10 text-xs"
          >
            ✕
          </button>
          <div className="pr-10">
            <div className="label-mono text-[var(--accent-primary)] text-[10px]">APPLIED CASES</div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-2">
              {data.name}
              <span className="text-[var(--text-tertiary)] text-base md:text-lg font-normal ml-3 align-middle">
                {data.audience}
              </span>
            </h2>
            <p className="text-sm md:text-base font-medium mt-3 leading-snug text-[var(--text-secondary)]">
              {data.heroSummary}
            </p>
          </div>
        </div>

        {/* Tabs */}
        {items.length > 0 && (
          <div className="border-b border-[var(--border-subtle)] relative">
            <div
              ref={tabsRef}
              className="px-5 md:px-7 pt-3 overflow-x-auto scroll-smooth no-scrollbar"
            >
              <ul role="tablist" className="flex gap-2 min-w-max pb-3">
                {items.map((it, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <li key={it.id}>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveIdx(i)}
                        className={`px-3 py-1.5 rounded-full text-xs transition-colors whitespace-nowrap inline-flex items-center gap-1.5 ${
                          isActive
                            ? "bg-[var(--accent-primary)] text-[var(--bg-base)] font-semibold"
                            : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`w-1.5 h-1.5 rounded-full ${
                            isActive
                              ? "bg-[var(--bg-base)]"
                              : it.kind === "model"
                                ? "bg-[var(--accent-primary)]"
                                : "bg-[var(--text-tertiary)]"
                          }`}
                        />
                        {it.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Left scroll arrow */}
            <button
              type="button"
              onClick={() => scrollTabs(-1)}
              aria-label="Scroll tabs left"
              tabIndex={canScrollLeft ? 0 : -1}
              className={`absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[var(--bg-base)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] flex items-center justify-center text-xs shadow-md transition-opacity ${
                canScrollLeft ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              ‹
            </button>

            {/* Right scroll arrow */}
            <button
              type="button"
              onClick={() => scrollTabs(1)}
              aria-label="Scroll tabs right"
              tabIndex={canScrollRight ? 0 : -1}
              className={`absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[var(--bg-base)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] flex items-center justify-center text-xs shadow-md transition-opacity ${
                canScrollRight ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              ›
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 md:px-7 py-6">
          {activeItem ? (
            <div key={activeItem.id} className="space-y-4">
              <div>
                <div className="label-mono text-[var(--text-tertiary)] text-[10px] mb-2">
                  {activeItem.kind === "model" ? "VERIFIED MODEL" : "CUSTOMER CASE"}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{activeItem.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {activeItem.headline}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-primary)]/90">
                {activeItem.body}
              </p>
              {activeItem.tags.length > 0 && (
                <ul className="flex flex-wrap gap-2 pt-1">
                  {activeItem.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-2 py-0.5 border border-[var(--border)] rounded-full text-[11px] text-[var(--text-tertiary)]"
                    >
                      # {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <p className="text-sm text-[var(--text-tertiary)]">사례가 아직 등록되지 않았습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
