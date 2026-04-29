type ModuleContent = { name: string; tagline: string; features: readonly string[] };

const modules = {
  issuance: {
    name: "Issuance",
    tagline: "기업 고유 브랜드의 스테이블코인을 즉시 발행하고 운영합니다.",
    features: [
      "발행 요청·승인 워크플로우",
      "준비금 1:1 모니터링 (Reserve)",
      "Mint·Burn·정책 한도 관리",
      "토큰 수명주기 통합 관리",
      "B2B 보안 및 감사 로그",
    ],
  },
  wallet: {
    name: "Wallet",
    tagline: "디지털 자산 지갑 기능을 손쉽게 구축할 수 있는 인프라입니다.",
    features: [
      "키 관리·가스비 추상화",
      "Account Abstraction Smart Wallet",
      "Stealth Address 프라이버시",
      "운영자 콘솔/대시보드",
      "단일·집계 잔액 리포팅",
    ],
  },
  orchestration: {
    name: "Orchestration",
    tagline: "은행망(Fiat)과 블록체인(Crypto)을 잇는 미들웨어입니다.",
    features: [
      "Fiat 레일(은행망) 통합",
      "환전·견적·실행·헤징",
      "Crypto 멀티체인 라우팅",
      "정산·원장(Ledger) 관리",
      "비용·속도·유동성 최적화",
    ],
  },
  "onchain-kyc": {
    name: "Onchain KYC",
    tagline: "Verify Once, Use Everywhere — 차세대 인증 솔루션.",
    features: [
      "신원 검증(KYC) 수행",
      "온체인 증명 발급 (VC)",
      "재사용·갱신·철회",
      "Selective Disclosure (ZK 옵션)",
      "AML 스크리닝·리스크 점수",
    ],
  },
  "unified-admin": {
    name: "Unified Admin",
    tagline: "4 모듈을 잇는 통합 운영 관제탑.",
    features: [
      "Token Lifecycle Ops (Mint/Burn/Reserve/Yield)",
      "Financial & Settlement Ops (Unified Ledger)",
      "Compliance & Risk Control (Policy Engine)",
      "Analytics Dashboard (TVL/Customer 360)",
      "Audit Log·권한 관리",
    ],
  },
} as const satisfies Record<string, ModuleContent>;

export const parastaModules = modules;

export type ParaStaModuleKey = keyof typeof modules;
