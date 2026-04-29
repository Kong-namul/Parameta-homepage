import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { sanity } from "@/lib/sanity";
import { NEWSROOM_ALL } from "@/lib/queries";

export default async function NewsroomList({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  let items: any[] = [];
  try {
    items = await sanity.fetch(NEWSROOM_ALL);
  } catch {
    items = [];
  }
  return (
    <>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h1 className="h-hero font-semibold">Newsroom.</h1>
          <p className="text-[var(--text-secondary)] mt-4">보도자료·미디어.</p>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          {items.length === 0 ? (
            <div className="p-8 border border-[var(--border)] rounded-md text-center text-[var(--text-tertiary)] text-sm">
              보도자료가 아직 등록되지 않았습니다.
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((n: any) => (
                <li key={n._id}>
                  <Link href={n.external_link || `/resources/newsroom/${n._id}`} target={n.external_link ? "_blank" : undefined} rel={n.external_link ? "noopener noreferrer" : undefined}>
                    <Card variant="elevated">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-semibold">{locale === "en" ? n.title_en || n.title_ko : n.title_ko}</h3>
                        <span className="label-mono shrink-0">{n.publish_date}</span>
                      </div>
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
