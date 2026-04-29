import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const COPY = {
  ko: {
    sections: [
      { href: "/docs", label: "Docs", desc: "개발자 향 기술 문서" },
      { href: "/resources/insights", label: "Insights", desc: "시장·기술·정책 리포트" },
      { href: "/resources/newsroom", label: "Newsroom", desc: "보도자료·미디어" },
    ],
  },
  en: {
    sections: [
      { href: "/docs", label: "Docs", desc: "Technical documentation for developers" },
      { href: "/resources/insights", label: "Insights", desc: "Market, technology, and policy reports" },
      { href: "/resources/newsroom", label: "Newsroom", desc: "Press releases and media" },
    ],
  },
};

export default async function ResourcesIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = locale === "en" ? COPY.en : COPY.ko;
  return (
    <>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h1 className="h-hero font-semibold">Resources.</h1>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {c.sections.map((s) => (
              <Link key={s.href} href={s.href}>
                <Card variant="elevated">
                  <h3 className="font-semibold">{s.label}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-3">{s.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
