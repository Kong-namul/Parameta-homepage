export type CoreTechKey = "loopchain" | "identity" | "btp" | "storage";

type CoreTechContent = {
  name: string;
  tagline: string;
  description: string;
  features: readonly { name: string; desc: string }[];
  useCases: readonly { tag: string; name: string; desc: string }[];
  stats?: readonly { value: string; label: string }[];
  milestones?: readonly { year: number; month: string; title: string; desc?: string }[];
  credentials?: {
    title: string;
    desc: string;
    breakdown?: readonly { label: string; value: string; accent?: boolean }[];
    badges?: readonly string[];
  };
};

const data: Record<CoreTechKey, CoreTechContent> = {
  loopchain: {
    name: "Loopchain",
    tagline: "자체 합의 알고리즘 기반 엔터프라이즈 블록체인 엔진.",
    description:
      "Loopchain은 파라메타가 직접 개발·운영해 온 자체 블록체인 엔진입니다. 고성능 합의 알고리즘 LFT2를 기반으로 공공·금융·일반 기업까지 폭넓은 환경에서 안정적으로 동작하며, 9년에 걸친 운영 노하우와 GS 인증 1등급의 품질이 뒷받침합니다.",
    features: [
      { name: "LFT2 합의 알고리즘", desc: "2020년 공개된 고성능 합의 — 빠른 합의 시간과 비잔틴 장애 허용을 동시에 충족합니다." },
      {
        name: "현재 20K+ TPS, 차세대 100K TPS 개발 중",
        desc: "엔터프라이즈 환경에서 검증된 20,000+ TPS 처리 성능을 운영 중이며, 차세대 100,000 TPS 확보를 목표로 개발이 진행되고 있습니다.",
      },
      { name: "GS 인증 1등급", desc: "loopchain V1.0이 한국 소프트웨어 품질 인증 최고 등급을 획득했습니다." },
      { name: "9년 운영 안정성", desc: "2017년 메인넷 출범 이후 끊김 없이 운영되어 온 트랙레코드." },
      { name: "스마트 컨트랙트 지원", desc: "ICON 메인넷에서 검증된 SCORE 스마트 컨트랙트 환경." },
      { name: "권한·정책 엔진", desc: "노드 운영·발행·소각·정책 변경의 컴플라이언스 모듈 내장." },
    ],
    useCases: [
      { tag: "퍼블릭 메인넷", name: "ICON Network", desc: "글로벌 퍼블릭 블록체인 네트워크 운영" },
      { tag: "퍼블릭 메인넷", name: "HAVAH", desc: "인터체인 NFT 플랫폼 인프라 공급" },
      { tag: "퍼블릭 메인넷", name: "LINKCHAIN", desc: "엔터프라이즈향 퍼블릭 블록체인 기술 공급" },
      { tag: "공공", name: "K-BTF · 서울시 · 관세청", desc: "공공 시범사업·블록체인 통관·ISP 다수 채택" },
      { tag: "지자체", name: "제주특별자치도", desc: "관광·방역 등 지자체 행정 서비스 기반" },
      { tag: "산업", name: "POSCO", desc: "거점 오피스 출입 인증 등 엔터프라이즈 적용" },
    ],
    stats: [
      { value: "20K+", label: "TPS VERIFIED" },
      { value: "9 years", label: "OPERATING" },
      { value: "GS 1급", label: "CERTIFIED" },
    ],
  },
  identity: {
    name: "DID",
    tagline: "국내 최초 W3C DID Method 등록, 민간·공공 300만+ 유저로 검증된 DID 기술.",
    description:
      "파라메타가 직접 개발한 분산 신원확인(DID) 기술. 국내 최초로 W3C DID Method Registry에 공식 등록된 표준 기반 DID를 만들었고, 국내 최초 금융권 DID 서비스 상용화에 이어 민간·공공 영역에서 300만 명 이상의 사용자로 검증된 국내 대표 DID 솔루션입니다.",
    features: [
      {
        name: "국내 최초 W3C DID Method Registry 등록",
        desc: "글로벌 표준화 기구 W3C의 DID Method Registry에 국내 최초로 공식 등록 — 글로벌 호환 가능한 표준 DID 인프라입니다.",
      },
      {
        name: "민간·공공 300만+ 유저 검증",
        desc: "민간과 공공 영역에서 누적 300만 명 이상의 사용자로 검증된 운영 안정성. 단순 PoC가 아닌 실서비스 트랙레코드.",
      },
      {
        name: "국내 최초 금융권 DID 상용화",
        desc: "신한은행·NH농협은행 등 금융권에서 DID 기반 실명인증 상용 서비스를 국내 최초로 도입했습니다.",
      },
      {
        name: "Verify Once, Use Everywhere",
        desc: "한 번 발급한 디지털 신원을 다른 공공 서비스·지갑에서 재사용 (KYW, Know Your Wallet 표준).",
      },
      {
        name: "Selective Disclosure (ZK 옵션)",
        desc: "필요한 정보만 선택 공개하는 영지식(ZK) 기반 부분 공개. 검증 가능성과 프라이버시를 동시 충족.",
      },
      {
        name: "PDS 결합 데이터 주권",
        desc: "Personal Data Storage와 결합해 사용자가 자신의 데이터를 직접 통제하는 데이터 주권 모델 구현.",
      },
    ],
    useCases: [
      { tag: "공공", name: "MyID 2.0", desc: "공공 특화 DID 구독형 서비스 — 블록체인 업계 최초 CSAP 인증" },
      { tag: "금융", name: "신한은행 · NH농협은행 DID", desc: "국내 최초 금융권 DID 실명인증 상용화" },
      { tag: "지자체", name: "부산시 배터리여권 · 경상북도 모이소", desc: "공공 마이데이터·DPP 도입 사례" },
    ],
    stats: [
      { value: "3M+", label: "USERS VERIFIED" },
      { value: "1st", label: "W3C DID REGISTRY (KR)" },
      { value: "1st", label: "FINANCE-GRADE DID (KR)" },
    ],
  },
  btp: {
    name: "BTP",
    tagline: "Trustless 방식의 자체 인터체인 프로토콜 — 멀티체인 자산·메시지 라우팅.",
    description:
      "BTP(Blockchain Transmission Protocol)는 파라메타가 직접 설계한 Trustless 인터체인 프로토콜입니다. 중앙화된 신뢰 가정에 기대지 않는 탈중앙 검증 구조로 서로 다른 블록체인 간 자산과 메시지를 안전하게 전달하며, ParaSta Orchestration 모듈의 멀티체인 라우팅을 떠받치는 핵심 기술입니다.",
    features: [
      {
        name: "Trustless 검증 구조",
        desc: "중앙 운영자나 단일 보증인에 의존하지 않고, 분산 검증자 합의로 크로스체인 트랜잭션의 무결성을 보장합니다.",
      },
      { name: "멀티체인 메시지 전송", desc: "체인 간 자산·이벤트·메시지를 표준 프로토콜로 전달합니다." },
      { name: "표준 인터페이스", desc: "동일한 인터페이스로 여러 체인을 연결 — 통합 관리가 가능합니다." },
      {
        name: "ICT (Interchain Token) 발행",
        desc: "BTP 위에서 인터체인 규격으로 토큰을 발행할 수 있어, 발행 시점부터 멀티체인 호환성을 확보합니다.",
      },
      { name: "ParaSta 통합", desc: "Orchestration 모듈이 BTP를 통해 Fiat ↔ Crypto 라우팅을 수행합니다." },
    ],
    useCases: [
      { tag: "EVM", name: "BSC (Binance Smart Chain)", desc: "EVM 호환 체인 자산·메시지 연결" },
      { tag: "Substrate", name: "Polkadot", desc: "Substrate 기반 체인과의 인터체인 통신" },
      { tag: "NEAR", name: "NEAR Protocol", desc: "샤딩 기반 체인 자산 라우팅" },
      { tag: "Harmony", name: "Harmony", desc: "고속 합의 체인과의 자산 전송" },
    ],
  },
  storage: {
    name: "Storage (PDS/BFS)",
    tagline: "분산 데이터·파일 저장 인프라 — 신원·증명서·운영 데이터를 안전하게.",
    description:
      "PDS(Personal Data Storage)와 BFS(Blockchain File Storage)는 파라메타가 만든 분산 데이터 저장 인프라입니다. 사용자 본인의 데이터 주권을 지키는 PDS와 위·변조 불가의 BFS가 함께 동작해, 신원 인증·증명서·운영 로그 같은 중요한 데이터를 안전하게 저장합니다.",
    features: [
      { name: "PDS — 본인 데이터 주권", desc: "사용자가 자신의 데이터를 직접 통제·공유 범위 결정. MyID 2.0과 결합해 동작합니다." },
      { name: "BFS — 위·변조 불가 파일 저장", desc: "블록체인에 파일 해시를 기록하고 분산 노드에 원본을 보관합니다." },
      { name: "Selective Disclosure", desc: "필요한 정보만 선택적으로 공개하는 ZK 옵션 지원 (Onchain KYC와 결합)." },
    ],
    useCases: [
      { tag: "DID", name: "MyID 2.0 신원 데이터", desc: "사용자 본인이 통제하는 분산 신원 데이터 저장" },
      { tag: "공공 마이데이터", name: "경상북도 모이소", desc: "공공 마이데이터 플랫폼의 데이터 저장 인프라" },
    ],
  },
};

export const coreTech = data;
