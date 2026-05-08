import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const PRODUCTS = [
  { slug: "parasta", name: "ParaSta", type: "솔루션", desc: "기업을 위한 디지털 자산 금융 인프라", featured: true },
  { slug: "supercycl", name: "Supercycl", type: "서비스", desc: "디지털 선물거래 통합 서비스", featured: true },
  { slug: "myid", name: "MyID 2.0", type: "서비스", desc: "공공 특화 DID 구독 서비스", featured: false },
  { slug: "broof", name: "broof", type: "서비스", desc: "블록체인 기반 증명서 발급·관리 서비스", featured: false },
] as const;

export function ProductsRow() {
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <h2 className="h-section">현재 운영 중인 서비스.</h2>
        <p className="text-[var(--text-secondary)] mt-3 max-w-xl">파라메타가 직접 만들고 운영하는 디지털 자산 인프라와 서비스입니다.</p>
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
