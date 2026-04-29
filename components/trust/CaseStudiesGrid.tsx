"use client";
import { useState } from "react";
import { Card } from "@/components/ui/Card";

interface CaseDoc {
  _id: string;
  client_name: string;
  industry: string;
  products_used?: string[];
  summary_ko?: string;
  summary_en?: string;
  year?: number;
}

export function CaseStudiesGrid({ cases, locale }: { cases: CaseDoc[]; locale: string }) {
  const [industry, setIndustry] = useState<string>("all");
  const filtered = industry === "all" ? cases : cases.filter((c) => c.industry === industry);
  if (cases.length === 0) {
    return (
      <div className="p-8 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
        케이스 스터디 — Sanity Studio 콘텐츠 등록 후 표시
      </div>
    );
  }
  return (
    <div>
      <div className="flex gap-2 mb-8 flex-wrap">
        {["all", "financial", "public", "enterprise"].map((i) => (
          <button
            key={i}
            onClick={() => setIndustry(i)}
            className={`label-mono px-3 py-1 border rounded-md transition-colors ${
              industry === i
                ? "border-[var(--accent-primary)] text-[var(--accent-primary)]"
                : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)]"
            }`}
          >
            {i}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map((c) => (
          <Card key={c._id} variant="elevated">
            <span className="label-mono">{c.industry}{c.year ? ` · ${c.year}` : ""}</span>
            <h3 className="font-semibold mt-3">{c.client_name}</h3>
            <p className="text-sm text-[var(--text-secondary)] mt-2 line-clamp-3">
              {locale === "en" ? c.summary_en : c.summary_ko}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
