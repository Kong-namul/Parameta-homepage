export const solutions = {
  financial: {
    name: "Financial",
    audience: "증권·은행·결제사·STO 발행자",
    models: ["미래에셋증권형 포트폴리오 운영", "부동산 STO 토큰증권 (신탁사)"],
    products_used: ["ParaSta Wallet", "Onchain KYC", "Orchestration", "Supercycl"],
    note: "모든 STO·증권·결제 시나리오는 여기로 라우팅",
  },
  public: {
    name: "Public",
    audience: "지자체·공공기관",
    models: ["인스코비형 지역화폐 스테이블코인", "부산시 배터리 여권"],
    products_used: ["MyID 2.0", "ParaSta Issuance", "broof (공공 증명서)"],
    note: "공공 조달 기준 (CSAP·조달청 디지털마켓 등재) 강조",
  },
  enterprise: {
    name: "Enterprise",
    audience: "일반 기업·인앱 커머스·B2B SaaS",
    models: ["인앱 커머스 통합 자산 지갑 (Showcase Demo와 연결)"],
    products_used: ["ParaSta 4 모듈 전체"],
    note: "자체 토큰·지갑·결제·환전을 자사 앱에 도입하는 일반 기업 시나리오 (STO 아님)",
  },
} as const;

export type SolutionKey = keyof typeof solutions;
