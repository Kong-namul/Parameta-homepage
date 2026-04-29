import Link from "next/link";
import { sanity } from "@/lib/sanity";
import { INSIGHTS_LATEST } from "@/lib/queries";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

interface InsightDoc {
  _id: string;
  title_ko: string;
  title_en?: string;
  summary_ko?: string;
  summary_en?: string;
}

export async function InsightsLatest({ locale }: { locale: string }) {
  let insights: InsightDoc[] = [];
  try {
    insights = await sanity.fetch(INSIGHTS_LATEST);
  } catch {
    // Sanity not configured yet (placeholder env) — render empty section gracefully
    return null;
  }
  if (!insights?.length) return null;
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <div className="label-mono mb-3">LATEST</div>
        <h2 className="h-section">Insights & Newsroom</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {insights.map((i) => (
            <Link key={i._id} href={`/resources/insights/${i._id}`}>
              <Card variant="elevated">
                <h3 className="font-semibold">
                  {locale === "en" ? i.title_en || i.title_ko : i.title_ko}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-3 line-clamp-2">
                  {locale === "en" ? i.summary_en : i.summary_ko}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
