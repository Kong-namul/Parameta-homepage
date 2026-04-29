import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const SOLS = [
  { slug: "financial", key: "financial" },
  { slug: "public", key: "public" },
  { slug: "enterprise", key: "enterprise" },
] as const;

export function SolutionsSplit() {
  const t = useTranslations("home.solutions");
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <div className="label-mono mb-3">{t("label")}</div>
        <h2 className="h-section">{t("title")}</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {SOLS.map((s) => (
            <Link key={s.slug} href={`/solutions/${s.slug}`}>
              <Card variant="elevated" className="h-full">
                <h3 className="text-2xl font-semibold">{t(`items.${s.key}.name`)}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-3">{t(`items.${s.key}.desc`)}</p>
                <div className="mt-8 text-[var(--accent-primary)] text-sm">{t("cta")}</div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
