import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const PRODUCTS = [
  { slug: "parasta", name: "ParaSta", type: "솔루션", desc: "기업을 위한 디지털 자산 금융 인프라", featured: true },
  { slug: "supercycl", name: "Supercycl", type: "상품", desc: "디지털자산 통합거래", featured: true },
  { slug: "myid", name: "MyID 2.0", type: "상품", desc: "공공 특화 DID 구독", featured: false },
  { slug: "broof", name: "broof", type: "상품", desc: "블록체인 증명서 발급", featured: false },
] as const;

export function ProductsRow() {
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <div className="label-mono mb-3">OUR PRODUCTS</div>
        <h2 className="h-section">4개 제품, 동등 위계.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {PRODUCTS.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`}>
              <Card variant="elevated" className="h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="label-mono">{p.type}</span>
                  {p.featured && <span className="text-[var(--accent-primary)] text-xs">★</span>}
                </div>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{p.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
