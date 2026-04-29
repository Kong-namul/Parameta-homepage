import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

type ProductItem = { slug: string; name: string; type: string; desc: string; featured?: boolean };

const COPY: {
  label: string;
  title: string;
  desc: string;
  items: ProductItem[];
  cta: string;
} = {
  label: "OUR PRODUCTS",
  title: "4개 제품, 동등 위계.",
  desc: "ParaSta는 솔루션, Supercycl·MyID 2.0·broof는 각각의 상품. 사이트에서는 시각 위계가 같습니다.",
  items: [
    {
      slug: "parasta",
      name: "ParaSta",
      type: "솔루션",
      desc: "기업을 위한 디지털 자산 금융 인프라. Issuance · Wallet · Orchestration · Onchain KYC + Unified Admin.",
      featured: true,
    },
    {
      slug: "supercycl",
      name: "Supercycl",
      type: "상품",
      desc: "디지털자산 통합거래 서비스. 다중 거래소·정산·실시간 모니터링. (+ Vault 부가 기능)",
      featured: true,
    },
    {
      slug: "myid",
      name: "MyID 2.0",
      type: "상품",
      desc: "공공 특화 DID 구독형 솔루션. CSAP 업계 최초 인증. 1주일 도입.",
    },
    {
      slug: "broof",
      name: "broof",
      type: "상품",
      desc: "블록체인 증명서 발급 서비스. 위·변조 불가, 영구 보관. broof.io",
    },
  ],
  cta: "→ 자세히 보기",
};

export default function ProductsIndex() {
  const t = COPY;
  return (
    <>
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">{t.label}</div>
          <h1 className="h-hero font-semibold">{t.title}</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl">{t.desc}</p>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-4">
            {t.items.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`}>
                <Card variant="elevated" className="h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="label-mono">{p.type}</span>
                    {p.featured && <span className="text-[var(--accent-primary)] text-xs">★</span>}
                  </div>
                  <h2 className="text-2xl font-semibold">{p.name}</h2>
                  <p className="text-sm text-[var(--text-secondary)] mt-3">{p.desc}</p>
                  <div className="mt-8 text-[var(--accent-primary)] text-sm">{t.cta}</div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
