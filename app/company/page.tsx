import Link from "@/components/ui/HardLink";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { StatBlock } from "@/components/ui/StatBlock";
import { Button } from "@/components/ui/Button";

const COPY = {
  heroSub: "2016년 설립. 한국 1세대 블록체인 인프라 기업.",
  visionLabel: "VISION",
  visionBody:
    "국내 대표 블록체인 기업 파라메타는 투명하고 신뢰할 수 있는 블록체인 기술의 가치에 대한 믿음으로, 다양한 블록체인 기술과 서비스를 통해 일상을 바꾸고 있습니다.",
  certTitle: "받은 인증.",
  badges: [
    "업계 최초 CSAP",
    "K-BTF 시범사업",
    "GS인증 1등급",
    "SW품질대상 최우수상",
    "조달청 디지털마켓",
    "혁신금융서비스 지정",
    "ICT 규제 샌드박스 지정",
  ],
  statsTitle: "통계.",
  statInvestment: "누적 투자",
  statOperating: "운영 기간",
  statRefs: "도입 레퍼런스",
  statRnd: "R&D 인력 비중",
  peopleLabel: "WHY HUMANS, NOT AI",
  peopleTitle: "AI가 자동화해도, 사람만 쌓을 수 있는 자산.",
  peopleDesc:
    "코드와 문서는 빠르게 자동화되지만, 규제 환경에서의 판단·고객 운영 감각·검증된 보안 전문성은 시간이 쌓아 만든 사람의 자산입니다. AI 시대에도 사라지지 않는, 파라메타가 가진 가장 단단한 자리입니다.",
  peopleCards: [
    {
      label: "DOMAIN DEPTH",
      stat: "9 years",
      title: "9년의 운영 감각",
      desc: "공공·금융 양쪽에서 9년간 인프라를 직접 운영해온 트랙레코드. ‘이 규제 환경에서 이 고객사에 무엇이 통하는가’는 코드 자동화로 만들어지지 않습니다.",
    },
    {
      label: "SENIOR DENSITY",
      stat: "25%",
      title: "탄탄한 전문 인력",
      desc: "임직원의 4분의 1이 경력 5년 이상. R&D 비중도 임직원의 70%에 달합니다. 코드 너머 인프라 설계·정책 결정·고객 운영을 책임지는 전문 인력이 회사 안에 단단히 자리잡고 있습니다.",
    },
    {
      label: "VERIFIED EXPERTISE",
      stat: "튼튼한 보안",
      title: "AWS·CISSP·CISA 자격을 보유한 인력",
      desc: "AWS Technology Partner — Advanced Tier(국내 최고등급)와 CISSP·CISA·개인정보 전문 인력. 보안·운영의 외부 검증을 받은 전문가 그룹입니다.",
    },
  ],
  historyTitle: "9년의 발자취.",
  historyDesc: "파라메타는 기술을 넘어 우리의 일상을 바꾸고 있습니다.",
  locationTitle: "오시는 길.",
  addressKo: "서울특별시 서초구 강남대로 311, 드림플러스 강남 8층",
  addressEn: "8F, DreamPlus Gangnam, 311 Gangnam-daero, Seocho-gu, Seoul, Republic of Korea",
  phone: "02-2138-7026",
  closingTitle: "Why these matter to your decision.",
  closingDesc: "신뢰는 시간으로 증명됩니다.",
  closingCta: "Contact Us →",
};

const MAP_QUERY = "DreamPlus Gangnam, 311 Gangnam-daero, Seocho-gu, Seoul";
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed&hl=ko&z=17`;

// 연혁 — 2016~2025 데이터 출처: https://www.parametacorp.com/about/
// 2026 항목은 자체 추가 (검증 필요).
const HISTORY = [
  {
    year: 2026,
    events: [
      { title: "ParaSta · Supercycl 운영 확장", desc: "기업용 디지털 자산 금융 인프라 본격 상용화" },
      { title: "KOSDAQ 상장 추진", desc: "기술특례 트랙 준비" },
    ],
  },
  {
    year: 2025,
    events: [
      { title: "쿠콘·인피닛블록 MoU", desc: "스테이블코인 인프라 확장 (10월)" },
      { title: "하나테크 MoU", desc: "글로벌 스테이블코인 결제 지원 (9월)" },
      { title: "유럽 DPP 대응 배터리여권 플랫폼 수주", desc: "국내 최초 (8월)" },
      { title: "마이아이디 2.0 CSAP 인증", desc: "블록체인 서비스 최초 (5월)" },
    ],
  },
  {
    year: 2024,
    events: [
      { title: "Web3Auth MoU", desc: "블록체인 신원인증 글로벌 확대 (11월)" },
      { title: "CSAP 기반 공공용 블록체인 SaaS 사업자 선정", desc: "국내 최초·유일 (6월)" },
      { title: "90억 규모 투자 유치", desc: "누적 투자금 약 250억 원 달성 (3월)" },
    ],
  },
  {
    year: 2023,
    events: [
      { title: "김종협 대표 과기정통부 장관 표창", desc: "2023 블록체인 진흥주간 (11월)" },
      { title: "기술신용평가 TI-1 등급 획득", desc: "loopchain 성능 측정 리포트 공개 (9월)" },
      { title: "Alchemy·QuickNode 국내 최초 파트너십", desc: "Web3 인프라 파트너십 (9월)" },
      { title: "사명 ㈜파라메타로 변경", desc: "Parameta Service 출시; 코스닥 모의 기술성 평가 A 등급 (2월)" },
    ],
  },
  {
    year: 2022,
    events: [
      { title: "마이아이디, 금융위원회 혁신금융서비스 규제개선 통과", desc: "(12월)" },
      { title: "경상북도 디지털 신원인증 마이데이터 플랫폼 수주", desc: "(7월)" },
      { title: "Parameta Framework 공개", desc: "자체 블록체인 프레임워크 (6월)" },
      { title: "강원도 '나야나' DID 적용", desc: "국내 최초 블록체인 기반 통합 서비스 플랫폼 (4월)" },
    ],
  },
  {
    year: 2021,
    events: [
      { title: "신한카드 전략적 제휴", desc: "DID 사업 협력; 코로나19 예방접종 서비스 출시 (12월)" },
      { title: "포스코그룹 거점 오피스 DID 출입 인증", desc: "(12월)" },
      { title: "NH농협은행 DID 금융실명인증 서비스 출시", desc: "(8월)" },
      { title: "모바일 운전면허증 ICT 규제 샌드박스 임시 허가", desc: "(1월)" },
    ],
  },
  {
    year: 2020,
    events: [
      { title: "제주안심코드 공식 출시", desc: "제주형 관광방역 시스템 (12월)" },
      { title: "신한은행 국내 최초 금융권 DID 실명인증", desc: "(8월)" },
      { title: "브릿지 라운드 투자 — 누적 약 160억 원", desc: "(7월)" },
      { title: "고성능 합의 알고리즘 LFT2 공개", desc: "(4월)" },
      { title: "포스텍 모든 졸업생 블록체인 학위기 발급", desc: "국내 최초 (2월)" },
    ],
  },
  {
    year: 2019,
    events: [
      { title: "마이아이디 얼라이언스 출범", desc: "대한민국 SW제품 품질대상 최우수상 (11월)" },
      { title: "100억 규모 시리즈 A 투자 유치", desc: "(10월)" },
      { title: "loopchain V1.0 GS 인증 1등급", desc: "(8월)" },
      { title: "MyID 금융위 혁신금융서비스 지정", desc: "(6월)" },
      { title: "broof 출시", desc: "블록체인 증명서 발급 서비스 (5월)" },
    ],
  },
  {
    year: 2018,
    events: [
      { title: "과기정통부 장관상 수상", desc: "블록체인 발전 기여 공로 (11월)" },
      { title: "서울시 블록체인 ISP 수립 사업자 선정", desc: "(9월)" },
      { title: "관세청 수입통관 절차 loopchain 적용", desc: "(6월)" },
      { title: "기업부설 연구소 설립 인정", desc: "(3월)" },
    ],
  },
  {
    year: 2017,
    events: [
      { title: "교보생명 블록체인 보험금 자동청구 서비스", desc: "(11월)" },
      { title: "금융투자업권 공동인증 'CHAIN ID' 출시", desc: "(10월)" },
      { title: "P-HIS 컨소시엄 기술 파트너 참여", desc: "국가전략 프로젝트 (9월)" },
    ],
  },
  {
    year: 2016,
    events: [
      { title: "금융투자업권 블록체인 컨소시엄 출범", desc: "(12월)" },
      { title: "서강대학교 블록체인 PoC 완료", desc: "(8월)" },
      { title: "서울시 S-coin 시범사업 추진", desc: "(6월)" },
      { title: "회사 설립 — ㈜더루프", desc: "한국 1세대 블록체인 인프라 기업 출범 (5월)" },
    ],
  },
] as const;

export default function CompanyPage() {
  const c = COPY;
  return (
    <>
      {/* 1. Hero */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h1 className="h-hero font-semibold">About PARAMETA.</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl text-lg">{c.heroSub}</p>
        </Container>
      </section>

      {/* 1.5 Vision */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="label-mono mb-4">{c.visionLabel}</div>
          <p className="text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed max-w-3xl font-medium">
            {c.visionBody}
          </p>
        </Container>
      </section>

      {/* 2. Certifications */}
      <section id="certifications" className="py-24 border-b border-[var(--border-subtle)] scroll-mt-20">
        <Container>
          <h2 className="h-section">{c.certTitle}</h2>
          <div className="mt-12 flex flex-wrap gap-2">
            {c.badges.map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Numbers */}
      <section id="numbers" className="py-24 border-b border-[var(--border-subtle)] scroll-mt-20">
        <Container>
          <h2 className="h-section">{c.statsTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <StatBlock value="9 years" label={c.statOperating} />
            <StatBlock value="₩25B+" label={c.statInvestment} />
            <StatBlock value="70%" label={c.statRnd} />
            <StatBlock value="100+" label={c.statRefs} />
          </div>
        </Container>
      </section>

      {/* 3.5 Why humans, not AI */}
      <section id="people" className="py-24 border-b border-[var(--border-subtle)] scroll-mt-20">
        <Container>
          <h2 className="h-section max-w-3xl">{c.peopleTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl leading-relaxed">{c.peopleDesc}</p>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {c.peopleCards.map((card) => (
              <div
                key={card.label}
                className="p-6 border border-[var(--border)] rounded-md flex flex-col"
              >
                <div className="text-2xl md:text-3xl font-semibold tabular-nums tracking-tight text-[var(--text-primary)]">
                  {card.stat}
                </div>
                <h3 className="text-base font-semibold mt-4">{card.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed flex-1">{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. History — graphic timeline */}
      <section id="history" className="py-24 border-b border-[var(--border-subtle)] scroll-mt-20">
        <Container>
          <h2 className="h-section">{c.historyTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-3 max-w-xl">{c.historyDesc}</p>

          <ol className="mt-16 relative pl-8 border-l border-[var(--border)]">
            {HISTORY.map((bucket) => (
              <li key={bucket.year} className="relative pb-12 last:pb-0 group">
                <span
                  aria-hidden
                  className="absolute -left-[34px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--bg-base)] border-2 border-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] transition-colors"
                />
                <div className="grid md:grid-cols-[120px_1fr] gap-x-8 gap-y-4">
                  <div className="label-mono text-2xl text-[var(--accent-primary)] tabular-nums">
                    {bucket.year}
                  </div>
                  <ul className="space-y-4">
                    {bucket.events.map((e) => (
                      <li key={e.title}>
                        <h3 className="text-base font-semibold">{e.title}</h3>
                        <p className="text-sm text-[var(--text-secondary)] mt-1">{e.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 5. Location */}
      <section id="location" className="py-24 border-b border-[var(--border-subtle)] scroll-mt-20">
        <Container>
          <h2 className="h-section">{c.locationTitle}</h2>

          <div className="mt-12 border border-[var(--border)] rounded-md overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 space-y-5 flex flex-col justify-center order-2 md:order-1">
                <div className="space-y-2">
                  <div className="text-lg font-semibold leading-snug">{c.addressKo}</div>
                  <div className="text-sm text-[var(--text-secondary)] leading-relaxed">{c.addressEn}</div>
                </div>
                <div>
                  <div className="label-mono mb-2">PHONE</div>
                  <a
                    href={`tel:${c.phone.replace(/-/g, "")}`}
                    className="text-base text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors tabular-nums"
                  >
                    {c.phone}
                  </a>
                </div>
              </div>
              <div className="min-h-[360px] order-1 md:order-2 border-t md:border-t-0 md:border-l border-[var(--border)]">
                <iframe
                  src={MAP_EMBED_SRC}
                  title="회사 위치 지도"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[360px] border-0 block"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Closing CTA */}
      <section className="py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="h-section">{c.closingTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-4">{c.closingDesc}</p>
          <Button variant="primary" className="mt-8" asChild>
            <Link href="/contact">{c.closingCta}</Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
