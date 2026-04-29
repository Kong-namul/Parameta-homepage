import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { sanity } from "@/lib/sanity";
import { INSIGHTS_ALL } from "@/lib/queries";

const COPY = {
  ko: {
    subtitle: "시장·기술·정책 리포트.",
    empty: "아티클이 아직 등록되지 않았습니다 — Sanity Studio에서 추가하세요.",
  },
  en: {
    subtitle: "Market, technology, and policy reports.",
    empty: "No articles have been added yet — add them via Sanity Studio.",
  },
};

export default async function InsightsList({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = locale === "en" ? COPY.en : COPY.ko;
  let items: any[] = [];
  try {
    items = await sanity.fetch(INSIGHTS_ALL);
  } catch {
    items = [];
  }
  return (
    <>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h1 className="h-hero font-semibold">Insights.</h1>
          <p className="text-[var(--text-secondary)] mt-4">{c.subtitle}</p>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          {items.length === 0 ? (
            <div className="p-8 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
              {c.empty}
            </div>
          ) : (
            <ul className="grid md:grid-cols-3 gap-4">
              {items.map((i: any) => (
                <li key={i._id}>
                  <Link href={`/resources/insights/${i._id}`}>
                    <Card variant="elevated">
                      <span className="label-mono">{i.category}</span>
                      <h3 className="font-semibold mt-2">{locale === "en" ? i.title_en || i.title_ko : i.title_ko}</h3>
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
