"use client";

import { useMemo, useState } from "react";

type NewsKind = "press" | "video";

type NewsItem = {
  id: string;
  date: string;
  kind: NewsKind;
  title: string;
  source?: string;
  href?: string;
  summary?: string;
};

const FILTERS: { id: "all" | NewsKind; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "press", label: "보도자료" },
  { id: "video", label: "영상" },
];

const KIND_LABEL: Record<NewsKind, string> = {
  press: "PRESS",
  video: "VIDEO",
};

export function NewsroomClient({ items }: { items: NewsItem[] }) {
  const [filter, setFilter] = useState<"all" | NewsKind>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((it) => it.kind === filter);
  }, [items, filter]);

  return (
    <div>
      {/* Filter pills */}
      <ul role="tablist" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const isActive = filter === f.id;
          const count =
            f.id === "all" ? items.length : items.filter((it) => it.kind === f.id).length;
          return (
            <li key={f.id}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(f.id)}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors inline-flex items-center gap-2 ${
                  isActive
                    ? "bg-[var(--accent-primary)] text-[var(--bg-base)] font-semibold"
                    : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {f.label}
                <span
                  className={`text-[10px] tabular-nums ${
                    isActive ? "text-[var(--bg-base)]/70" : "text-[var(--text-tertiary)]"
                  }`}
                >
                  {count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* List */}
      <ul className="mt-12 divide-y divide-[var(--border-subtle)] border-t border-b border-[var(--border-subtle)]">
        {filtered.map((it) => {
          const isLink = !!it.href;
          const Inner = (
            <>
              <div className="grid md:grid-cols-[110px_80px_1fr_auto] gap-x-6 gap-y-2 items-baseline">
                <div className="label-mono text-[var(--text-tertiary)] tabular-nums">
                  {it.date}
                </div>
                <div>
                  <span className="label-mono text-[10px] px-2 py-1 rounded-full border border-[var(--accent-primary)]/40 text-[var(--accent-primary)]">
                    {KIND_LABEL[it.kind]}
                  </span>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold leading-snug">
                    {it.title}
                  </h3>
                  {it.summary && (
                    <p className="text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                      {it.summary}
                    </p>
                  )}
                  {it.source && (
                    <p className="text-xs text-[var(--text-tertiary)] mt-2">{it.source}</p>
                  )}
                </div>
                {isLink && (
                  <span className="hidden md:inline-block text-[var(--accent-primary)] text-sm">
                    →
                  </span>
                )}
              </div>
            </>
          );

          return (
            <li key={it.id} className="py-6 transition-colors hover:bg-[var(--bg-surface)]/40">
              {isLink ? (
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 -mx-4"
                >
                  {Inner}
                </a>
              ) : (
                <div className="px-4 -mx-4">{Inner}</div>
              )}
            </li>
          );
        })}
      </ul>

      {filtered.length === 0 && (
        <p className="text-sm text-[var(--text-tertiary)] mt-12 text-center">
          아직 등록된 항목이 없습니다.
        </p>
      )}
    </div>
  );
}
