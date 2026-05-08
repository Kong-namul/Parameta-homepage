import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { sanity, urlFor } from "@/lib/sanity";

export default async function InsightDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let item: any = null;
  try {
    item = await sanity.fetch(`*[_type == "insight" && _id == $id][0]`, { id });
  } catch {
    return notFound();
  }
  if (!item) return notFound();
  const title = item.title_ko;
  const summary = item.summary_ko;
  const externalLabel = "원문 보기 →";
  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <span className="label-mono">{item.category} · {item.publish_date}</span>
        <h1 className="h-hero font-semibold mt-4">{title}</h1>
        {summary && <p className="text-[var(--text-secondary)] mt-6 text-lg">{summary}</p>}
        {item.image && <img src={urlFor(item.image).width(1200).url()} alt={title} className="mt-12 rounded-lg w-full" />}
        {item.external_link && (
          <a href={item.external_link} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] mt-8 inline-block">{externalLabel}</a>
        )}
      </Container>
    </section>
  );
}
