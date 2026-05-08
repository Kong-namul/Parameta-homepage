import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { IndustryCasesSection } from "@/components/products/IndustryCasesSection";

type ProductItem = { slug: string; name: string; type: string; desc: string; featured?: boolean };

const COPY: {
  label: string;
  title: string;
  desc: string;
  items: ProductItem[];
  cta: string;
} = {
  label: "OUR PRODUCTS",
  title: "Web3 기술로, 새로운 세상을 만듭니다.",
  desc: "자체 기술력으로 디지털 자산 인프라의 다음 페이지를 한 걸음 먼저 씁니다.",
  items: [
    {
      slug: "parasta",
      name: "ParaSta",
      type: "SOLUTION",
      desc: "기업을 위한 디지털 자산 금융 인프라. 스테이블코인·디지털 자산의 발행부터 운영·정산·신원 인증까지, 모든 흐름을 하나의 플랫폼에서 다룹니다. Issuance · Wallet · Orchestration · Onchain KYC 4개 모듈과 운영 관제탑 Unified Admin이 결합된 통합 솔루션.",
      featured: true,
    },
    {
      slug: "supercycl",
      name: "Supercycl",
      type: "PRODUCT",
      desc: "디지털 선물거래 통합 서비스. 다중 거래소(CEX·DEX) 연결, 단일 API 매매, 실시간 정산·포지션 모니터링, 그리고 안전한 Vault 기반 수탁 보관까지 한 흐름에서 처리합니다. 트레이더·STO 발행자·자산 관리사를 위한 멀티 마켓 운영 인프라.",
      featured: true,
    },
    {
      slug: "myid",
      name: "MyID 2.0",
      type: "PRODUCT",
      desc: "공공 특화 DID 구독형 서비스. 블록체인 업계 최초 CSAP 인증, 과학기술정보통신부 K-BTF 시범사업 핵심 서비스. 자체 인프라 구축 없이 1주일 내 도입, 기존 수개월·수억 원의 사업비를 약 90% 절감. 조달청 디지털마켓에서 즉시 도입 가능합니다.",
    },
    {
      slug: "broof",
      name: "broof",
      type: "PRODUCT",
      desc: "블록체인 증명서 발급·관리 서비스. 발급·열람·공유·검증·개인정보 공개 통제까지 한 번에 처리하며, 분산원장 기반으로 위·변조 불가·영구 보관을 보장합니다. 정부·지자체·교육·예술 분야 다수 도입. broof.io 에서 바로 시작.",
    },
  ],
  cta: "자세히 보기 →",
};

export default function ProductsIndex() {
  const t = COPY;
  return (
    <>
      {/* 1. Hero */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h1 className="h-hero font-semibold">{t.title}</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl">{t.desc}</p>
        </Container>
      </section>

      {/* 2. Product list */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="flex flex-col gap-6">
            {t.items.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group block">
                <Card variant="elevated" className="transition-colors group-hover:border-[var(--accent-primary)]">
                  <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="label-mono">{p.type}</span>
                        {p.featured && <span className="text-[var(--accent-primary)] text-xs">★</span>}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{p.name}</h2>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
                      <div className="mt-6 text-[var(--accent-primary)] text-sm group-hover:translate-x-1 transition-transform">
                        {t.cta}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Applied Cases by industry — modal */}
      <IndustryCasesSection />
    </>
  );
}
