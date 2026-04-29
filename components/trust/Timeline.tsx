import { sanity } from "@/lib/sanity";
import { TIMELINE_ALL } from "@/lib/queries";

interface TimelineDoc {
  _id: string;
  year: number;
  month?: number;
  title_ko: string;
  title_en?: string;
  description_ko?: string;
  description_en?: string;
}

const COPY = {
  placeholder: "9년 타임라인 — Sanity Studio 콘텐츠 등록 후 표시 (Phase 11)",
  empty: "타임라인 마일스톤이 아직 등록되지 않았습니다.",
};

export async function Timeline() {
  const c = COPY;
  let items: TimelineDoc[] = [];
  try {
    items = await sanity.fetch(TIMELINE_ALL);
  } catch {
    return (
      <div className="p-8 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
        {c.placeholder}
      </div>
    );
  }
  if (!items?.length) {
    return (
      <div className="p-8 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
        {c.empty}
      </div>
    );
  }
  const byYear = items.reduce<Record<number, TimelineDoc[]>>((acc, it) => {
    (acc[it.year] ||= []).push(it);
    return acc;
  }, {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => a - b);
  return (
    <ol className="space-y-12 relative pl-8 border-l border-[var(--border)]">
      {years.map((y) => (
        <li key={y} className="relative">
          <span className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-[var(--accent-primary)]" />
          <div className="label-mono text-2xl mb-3">{y}</div>
          <ul className="space-y-2">
            {byYear[y].map((it) => (
              <li key={it._id} className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">{it.title_ko}</strong>
                {it.description_ko && (
                  <span className="ml-2">— {it.description_ko}</span>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
