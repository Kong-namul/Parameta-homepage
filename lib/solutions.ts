type SolutionContent = {
  name: string;
  audience: string;
  models: readonly string[];
  products_used: readonly string[];
  note: string;
};

const ko = {
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
} as const satisfies Record<string, SolutionContent>;

const en = {
  financial: {
    name: "Financial",
    audience: "Brokerages, banks, payments providers, STO issuers",
    models: [
      "Mirae Asset-style portfolio operation",
      "Real estate STO security tokens (trust)",
    ],
    products_used: ["ParaSta Wallet", "Onchain KYC", "Orchestration", "Supercycl"],
    note: "All STO, securities, and payments scenarios route here",
  },
  public: {
    name: "Public",
    audience: "Local governments and public agencies",
    models: ["Inscobee-style local-currency stablecoin", "Busan City battery passport"],
    products_used: ["MyID 2.0", "ParaSta Issuance", "broof (public certificates)"],
    note: "Built to public procurement standards (CSAP, listed on Digital Marketplace)",
  },
  enterprise: {
    name: "Enterprise",
    audience: "General enterprises, in-app commerce, B2B SaaS",
    models: ["In-app commerce unified asset wallet (linked to Showcase Demo)"],
    products_used: ["All four ParaSta modules"],
    note: "For enterprises adding their own token, wallet, payments, and FX to their app — not STO",
  },
} as const satisfies Record<string, SolutionContent>;

export const solutions = ko;

export function getSolutions(locale: string): Record<keyof typeof ko, SolutionContent> {
  return locale === "en" ? en : ko;
}

export type SolutionKey = keyof typeof ko;
