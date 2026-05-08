import { Container } from "@/components/layout/Container";
import { NewsroomClient } from "@/components/newsroom/NewsroomClient";

const COPY = {
  label: "NEWSROOM",
  title: "파라메타 소식.",
  desc: "파라메타의 사업·기술·미디어 소식을 한 곳에서 확인하세요.",
};

export type NewsKind = "press" | "video";

export type NewsItem = {
  id: string;
  date: string; // YYYY.MM.DD
  kind: NewsKind;
  title: string;
  source?: string;
  href?: string;
  summary?: string;
};

// 출처: parametacorp.com/promotion 및 /learn 정리. 최신순 정렬.
const NEWS: NewsItem[] = [
  {
    id: "press-2026-02-23",
    date: "2026.02.23",
    kind: "press",
    title: "스테이블코인·STO 무료 컨설팅 실시 — 디지털자산 사업 기회 확대 지원",
    source: "보도자료",
    summary: "중소·중견 기업의 디지털 자산 사업 진출을 위한 스테이블코인·STO 무료 컨설팅 프로그램 운영.",
  },
  {
    id: "press-2026-02-13",
    date: "2026.02.13",
    kind: "press",
    title: "ADB 주관 채권 포럼서 '온체인 KYC' 기반 국경 간 거래 표준 모델 발표",
    source: "글로벌 컨퍼런스",
    summary: "아시아개발은행(ADB) 채권 포럼에서 ParaSta Onchain KYC 기반 국경 간 디지털 자산 거래 표준 모델 발표.",
  },
  {
    id: "press-2026-01-22",
    date: "2026.01.22",
    kind: "press",
    title: "리스크엑스와 스테이블코인 기반 글로벌 디지털 자산·금융 사업 MOU 체결",
    source: "MOU",
    summary: "AI 기반 구조화 상품 설계·헤징 전문 기업 리스크엑스와 글로벌 디지털 채권·구조화 상품 플랫폼 구축 협력.",
  },
  {
    id: "press-2025-12-16",
    date: "2025.12.16",
    kind: "press",
    title: "코스포·네이버클라우드·네이버아라비아 3자 MOU, '브루프'로 블록체인 영구 기록",
    source: "MOU",
    summary: "코리아스타트업포럼·네이버클라우드·네이버아라비아 3자 MOU 체결을 broof로 블록체인에 영구 기록.",
  },
  {
    id: "press-2025-11-14",
    date: "2025.11.14",
    kind: "press",
    title: "국가AI전략위원회 위촉증을 블록체인 증명서 '브루프'로 발급",
    source: "보도자료",
    summary: "정부 위원회 최초로 분과위원·자문위원 180여 명에게 블록체인 기반 위촉장을 broof로 발급.",
  },
  {
    id: "press-2025-10-28",
    date: "2025.10.28",
    kind: "press",
    title: "국내 최초 블록체인 지갑·ID 서비스 조달청 디지털마켓 등록",
    source: "보도자료",
    summary: "공공기관이 별도 사업 발주 없이 즉시 도입할 수 있도록 ParaSta Wallet과 MyID 2.0이 조달청 디지털마켓에 등재.",
  },
  {
    id: "press-2025-10-15",
    date: "2025.10.15",
    kind: "press",
    title: "GITEX Global 2025서 스테이블코인·디지털자산 통합 서비스 공개",
    source: "글로벌 컨퍼런스",
    summary: "두바이 GITEX Global 2025에서 ParaSta 기반 스테이블코인·디지털자산 통합 서비스 글로벌 공개.",
  },
  {
    id: "press-2025-10-14",
    date: "2025.10.14",
    kind: "press",
    title: "헤럴드 머니페스타 2025 참가 — 스테이블코인 기반 디지털 금융 혁신 발표",
    source: "컨퍼런스",
    summary: "헤럴드 머니페스타 2025에 참가해 스테이블코인 기반 디지털 금융 혁신 비전 발표.",
  },
  {
    id: "press-2025-10-01",
    date: "2025.10.01",
    kind: "press",
    title: "쿠콘·인피닛블록과 스테이블코인 인프라 확장 전략적 업무협약 체결",
    source: "MOU",
    summary: "쿠콘·인피닛블록과 스테이블코인 발행·운영 인프라 확장 위한 3자 MOU.",
  },
  {
    id: "press-2025-09-29",
    date: "2025.09.29",
    kind: "press",
    title: "하나테크와 글로벌 스테이블코인 결제지원 월렛 전략적 업무협약 체결",
    source: "MOU",
    summary: "하나테크와 글로벌 스테이블코인 결제 직불카드 인프라 공동 연구 위한 MOU.",
  },
  {
    id: "video-2025-08-10",
    date: "2025.08.10",
    kind: "video",
    title: "코플루언서 인터뷰 — 김종협 대표",
    source: "블록체인투데이",
    summary: "파라메타 김종협 대표와 함께하는 블록체인투데이 코플루언서 인터뷰.",
  },
  {
    id: "press-2025-08-08",
    date: "2025.08.08",
    kind: "press",
    title: "파라메타, 블록체인 기반 여권 플랫폼 사업 수주",
    source: "보도자료",
    summary: "국내 최초 유럽 DPP 대응 블록체인 기반 배터리여권 플랫폼 구축 사업 수주.",
  },
  {
    id: "press-2025-07-02",
    date: "2025.07.02",
    kind: "press",
    title: "김종협 대표 \"스테이블코인 도입, 기술 제도화 논의 병행해야\"",
    source: "인터뷰",
  },
  {
    id: "press-2025-06-11",
    date: "2025.06.11",
    kind: "press",
    title: "인스코비-파라메타, '원화 스테이블코인 기반 지역화폐' 개발 돌입",
    source: "MOU",
  },
  {
    id: "press-2025-05-12",
    date: "2025.05.12",
    kind: "press",
    title: "파라메타, 블록체인 DID 서비스 '마이아이디 2.0'으로 CSAP 인증 획득",
    source: "보도자료",
    summary: "블록체인 서비스 최초로 CSAP(클라우드 보안 인증) 획득.",
  },
  {
    id: "video-2025-01-03",
    date: "2025.01.03",
    kind: "video",
    title: "공공기관 블록체인 공동인프라 — 블록체인을 도입하는 가장 빠른 방법",
    source: "YouTube",
    summary: "공공기관이 블록체인 기반 서비스를 손쉽게 도입·운영할 수 있도록 지원하는 클라우드 기반 SaaS형 통합 관리 인프라 소개.",
  },
  {
    id: "video-2024-10-10",
    date: "2024.10.10",
    kind: "video",
    title: "loopchain TX 성능 데모",
    source: "YouTube",
    summary: "loopchain의 현재 성능이 이미 최대 20,000 TPS를 돌파했으며 차후 최대 100,000 TPS의 성능을 확보할 수 있도록 개발 진행 중.",
  },
  {
    id: "video-2022-09-09",
    date: "2022.09.09",
    kind: "video",
    title: "JH Kim — The Man Behind PARAMETA",
    source: "YouTube",
    summary: "ICONLOOP offices in Seoul (South-Korea), blockchain technology 인터뷰.",
  },
];

export default function NewsroomPage() {
  const c = COPY;
  return (
    <>
      {/* 1. Hero */}
      <section className="py-24 border-b border-[var(--border-subtle)]">
        <Container>
          <h1 className="h-hero font-semibold">{c.title}</h1>
          <p className="text-[var(--text-secondary)] mt-6 max-w-2xl">{c.desc}</p>
        </Container>
      </section>

      {/* 2. List with filter */}
      <section className="py-24">
        <Container>
          <NewsroomClient items={NEWS} />
        </Container>
      </section>
    </>
  );
}
