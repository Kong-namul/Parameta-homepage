import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { sanity } from "@/lib/sanity";

export default async function NewsroomDetail({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  let item: any = null;
  try {
    item = await sanity.fetch(`*[_type == "newsroom" && _id == $id][0]`, { id });
  } catch {
    return notFound();
  }
  if (!item) return notFound();
  const title = locale === "en" ? item.title_en || item.title_ko : item.title_ko;
  const summary = locale === "en" ? item.summary_en : item.summary_ko;
  const externalLabel = locale === "en" ? "Read original →" : "원문 보기 →";
  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <span className="label-mono">{item.category} · {item.publish_date}</span>
        <h1 className="h-hero font-semibold mt-4">{title}</h1>
        {summary && <p className="text-[var(--text-secondary)] mt-6 text-lg">{summary}</p>}
        {item.external_link && (
          <a href={item.external_link} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] mt-8 inline-block">{externalLabel}</a>
        )}
      </Container>
    </section>
  );
}
