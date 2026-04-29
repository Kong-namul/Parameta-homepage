import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const PRODUCTS = [
  { slug: "parasta", name: "ParaSta", key: "parasta", featured: true },
  { slug: "supercycl", name: "Supercycl", key: "supercycl", featured: true },
  { slug: "myid", name: "MyID 2.0", key: "myid", featured: false },
  { slug: "broof", name: "broof", key: "broof", featured: false },
] as const;

export function ProductsRow() {
  const t = useTranslations("home.products");
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <div className="label-mono mb-3">{t("label")}</div>
        <h2 className="h-section">{t("title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {PRODUCTS.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`}>
              <Card variant="elevated" className="h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="label-mono">{t(`items.${p.key}.type`)}</span>
                  {p.featured && <span className="text-[var(--accent-primary)] text-xs">★</span>}
                </div>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{t(`items.${p.key}.desc`)}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
