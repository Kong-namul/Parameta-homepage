export type SolutionContent = {
  name: string;
  audience: string;
  heroSummary: string;
  challenges: readonly { title: string; desc: string }[];
  models: readonly { tag: string; title: string; desc: string; outcome?: string }[];
  products_used: readonly { name: string; role: string }[];
  benefits: readonly { title: string; desc: string }[];
  note: string;
  cases?: readonly {
    id: string;
    title: string;
    headline: string;
    body: string;
    tags: readonly string[];
  }[];
};

const data = {
  financial: {
    name: "Financial",
    audience: "증권·은행·결제사·STO 발행자",
    heroSummary:
      "원화 토큰부터 토큰증권(STO)·디지털 자산 운용까지 — 금융기관이 디지털 자산 시대로 안전하게 진입할 수 있도록 인프라·컴플라이언스를 한 번에 제공합니다.",
    challenges: [
      {
        title: "원화 스테이블코인 인프라 부재",
        desc: "자체 발행·유통 시스템 구축은 수십억 원의 비용과 수개월의 개발 기간을 요구합니다.",
      },
      {
        title: "금융권 컴플라이언스 부담",
        desc: "AML·트래블룰·전자금융감독규정 등 강도 높은 규제 대응을 모든 단계에 내재화해야 합니다.",
      },
      {
        title: "기존 시스템과의 연동",
        desc: "코어뱅킹·증권 시스템과 블록체인의 양방향 데이터 동기화·정산까지 직접 설계해야 합니다.",
      },
    ],
    models: [
      {
        tag: "포트폴리오",
        title: "미래에셋증권형 디지털 자산 통합 운용",
        desc: "현금·주식·디지털 자산을 단일 인터페이스에서 통합 운용. 매매·정산·실시간 모니터링까지 한 흐름.",
        outcome: "Consumer + Service Admin 페르소나",
      },
      {
        tag: "STO",
        title: "부동산 신탁사 토큰증권 전 주기",
        desc: "발행 → 유통 → 정산까지 토큰증권 라이프사이클 전체를 단일 플랫폼에서 운영.",
        outcome: "신탁사 운영 모델 검증",
      },
      {
        tag: "결제·송금",
        title: "원화 토큰 발행·국내외 송금",
        desc: "은행·결제사가 자체 원화 토큰을 발행해 송금·결제 인프라를 즉시 구축. 국내외 실시간 환·정산 지원.",
        outcome: "은행·결제사 도입 모델",
      },
    ],
    products_used: [
      { name: "ParaSta Issuance", role: "스테이블코인·증권형 토큰 발행·소각·준비금 관리" },
      { name: "ParaSta Wallet", role: "기관용 컴플라이언스 기반 디지털 자산 지갑" },
      { name: "ParaSta Orchestration", role: "Fiat ↔ Crypto 미들웨어 — 환·정산 자동화" },
      { name: "Onchain KYC", role: "Verify Once, Use Everywhere — 고객 신원 검증" },
      { name: "Supercycl", role: "다중 거래소 통합 매매·정산·Vault 수탁" },
    ],
    benefits: [
      {
        title: "내장된 컴플라이언스",
        desc: "AML·트래블룰·감사 로그를 모듈에 내재화 — 금융 감독 대응을 인프라가 자동 처리합니다.",
      },
      {
        title: "기존 시스템과 즉시 연결",
        desc: "코어뱅킹·증권 시스템과 API·SDK 한 번 연동으로 양방향 데이터 동기화·정산까지.",
      },
      {
        title: "Zero-Ops 운영",
        desc: "노드·KMS·가스·보안까지 ParaSta가 운영. 금융사는 비즈니스에만 집중하면 됩니다.",
      },
    ],
    note: "모든 STO·증권·결제 시나리오는 여기로 라우팅",
    cases: [
      {
        id: "korda",
        title: "KorDA · 센골드 (Cengold)",
        headline: "loopchain을 통한 실물자산(금) 토큰화 및 거래",
        body: "디지털 자산거래 시스템 개발사 한국금거래소 디지털에셋(KorDA)에서 제공하는 실물자산(금·은 등) 투자 서비스 센골드(Cengold)에 파라메타의 블록체인 코어 엔진 루프체인을 적용했습니다. 실물 금을 토큰화해 모바일 금 교환권 'e금'을 거래할 수 있게 하고, 작은 조각으로 나눠 소액 투자도 가능하게 만들어 진입장벽을 낮췄습니다. 21년 한 해 거래액 1,000억 원 돌파.",
        tags: ["Blockchain Platform"],
      },
      {
        id: "zzeung",
        title: "쯩 (zzeung) — MyID DID",
        headline: "마이아이디 플랫폼 기반 블록체인 신원인증 서비스",
        body: "신뢰 기관을 통해 한 번 인증된 신원정보를 사용자 휴대폰에 암호화 저장하고, 필요할 때 본인이 직접 정보를 선택해 제출할 수 있게 하는 블록체인 신원인증 서비스. 금융위원회 혁신금융서비스로 지정돼 비대면 계좌 개설·금융 업무 실명인증·QR 체크인·증명서 관리 등 다양한 인증 수단을 한 곳에 담아 사용할 수 있도록 지원합니다.",
        tags: ["DID"],
      },
      {
        id: "chain-id",
        title: "CHAIN ID",
        headline: "loopchain 기반 세계 최초 블록체인 공동인증 서비스",
        body: "블록체인 네트워크에 참여하는 증권사들의 합의를 통해 공동인증서를 발급하는 세계 최초 블록체인 기반 공동인증 시스템. 모든 증권사에서 통용되는 간편하고 안전한 인증서를 목적으로 금융투자협회 및 약 26개 참여사와 공동 개발. 중앙집권형으로 관리하던 증권사 인증서를 블록체인으로 통합해 DID(Decentralized ID)의 시작과 방향을 제시했습니다.",
        tags: ["Wallet"],
      },
      {
        id: "kyobo",
        title: "교보생명 스마트 보험금 청구",
        headline: "loopchain 기술로 보험금 청구 절차 간소화·자동화",
        body: "기존 복잡하고 불편했던 보험금 청구 시스템을 블록체인 기반 본인인증으로 전환했습니다. 대면 본인인증 및 서류 발급 신청 절차를 빠르고 간편하게 진행하기 위해 교보생명 스마트 보험금 청구에 파라메타의 루프체인 적용. 각종 증명서·영수증을 블록체인으로 즉시 발급받고 앱 내 연계 전송하는 등 청구 절차의 대폭 간소화·자동화 실현.",
        tags: ["Blockchain Platform"],
      },
    ],
  },
  public: {
    name: "Public",
    audience: "지자체·공공기관·중앙정부",
    heroSummary:
      "공공 조달 기준(CSAP·조달청 디지털마켓)에 맞춰 즉시 도입 가능한 디지털 신원 인증·증명서·지역화폐 인프라. K-BTF 시범사업의 핵심 서비스로 검증된 트랙레코드.",
    challenges: [
      {
        title: "보안 인증 부담",
        desc: "공공기관 도입의 전제 조건인 CSAP 등 강도 높은 보안 인증 통과가 진입 장벽으로 작용합니다.",
      },
      {
        title: "조달 절차·예산 사이클",
        desc: "사업 발주·평가·예산 집행이 분기 단위로 묶여 있어 빠른 도입과 실험이 어렵습니다.",
      },
      {
        title: "자체 구축 비용",
        desc: "기존 모델은 수개월·수억 원의 사업비가 필요해 시범 적용조차 부담입니다.",
      },
    ],
    models: [
      {
        tag: "결제",
        title: "인스코비형 지역화폐 스테이블코인",
        desc: "지자체가 자체 발행하는 디지털 지역화폐 운영 모델. 가맹점 정산·소비자 지갑·발행 관제까지 하나의 플랫폼에서.",
        outcome: "Consumer + Partner + Service Admin + Token Admin 풀 모델",
      },
      {
        tag: "DID",
        title: "부산시 블록체인 기반 배터리여권",
        desc: "국내 최초 유럽 DPP 대응 — 전기차 배터리 잔존 수명·이력을 블록체인 신원 기반으로 인증.",
        outcome: "MyID 2.0 + ParaSta Issuance 결합",
      },
      {
        tag: "공공 마이데이터",
        title: "경상북도 공공마이데이터 플랫폼 '모이소 경상북도'",
        desc: "DID 기반 시민 신원 인증과 데이터 활용을 결합한 경북형 공공 마이데이터 플랫폼.",
        outcome: "지자체 도입 사례 (2단계 사업까지 확장)",
      },
      {
        tag: "행정",
        title: "정부 위원회 블록체인 위촉증",
        desc: "국가AI전략위원회 위촉증을 블록체인 기반으로 발급한 정부 첫 사례 (2025.11, 180+명).",
        outcome: "broof 기반",
      },
    ],
    products_used: [
      { name: "MyID 2.0", role: "공공 특화 DID — 블록체인 업계 최초 CSAP 인증" },
      { name: "ParaSta Issuance", role: "지역화폐·공공 디지털 자산 발행" },
      { name: "broof", role: "공공 증명서·위촉장 발급·관리" },
    ],
    benefits: [
      {
        title: "업계 최초 CSAP",
        desc: "공공기관이 별도 보안 검토 없이 즉시 도입 가능. 클라우드 보안 인증을 블록체인 업계 최초로 획득했습니다.",
      },
      {
        title: "조달청 디지털마켓 등재",
        desc: "공공 조달 사이클에 맞춰 즉시 구매 가능. 별도 사업 발주 없이도 도입 가능합니다.",
      },
      {
        title: "구독형 1주일 도입",
        desc: "자체 인프라 구축 없이 구독 형태로 1주일 내 시작. 기존 대비 약 90% 비용 절감.",
      },
    ],
    note: "공공 조달 기준(CSAP·조달청 디지털마켓 등재) 강조",
    cases: [
      {
        id: "broof",
        title: "broof",
        headline: "loopchain 기반 블록체인 증명서 발급 서비스",
        body: "기관이 데이터 시스템을 별도로 구축하지 않고도 증서를 발급할 수 있어 종이문서 발급·보관 비용을 절감합니다. 수령자는 원하는 시간과 장소에서 블록체인 증명서를 조회할 수 있으며 정보 공개 여부 또한 직접 선택해 활용 가능. 서울시·경찰청 등 주요 공공기관과 교육기관·컨퍼런스·예술 업계 등에서 활용되고 있습니다.",
        tags: ["Blockchain Platform", "NFT"],
      },
      {
        id: "seoul",
        title: "서울특별시",
        headline: "행정 시스템 표준 블록체인 플랫폼으로 loopchain 채택",
        body: "서울시의 방대한 행정 시스템에 더 유연하게 블록체인을 적용하기 위한 서울시 표준 블록체인 플랫폼으로 파라메타의 루프체인 선정. 본 플랫폼을 기반으로 시민투표(M-Voting), 장안평 중고차 이력 관리, 청년 수당, 공공근로 등 자격 확인이 필요한 다양한 블록체인 사업을 전개하며 서울 시민 생활 곳곳에 블록체인을 통한 혁신을 만들어 가고 있습니다.",
        tags: ["Blockchain Platform"],
      },
      {
        id: "gangwon-nayana",
        title: "강원도 · 나야나 (Nayana)",
        headline: "통합 서비스 플랫폼에 MyID DID 기술 적용",
        body: "'강원도 전 도민, 전 경제, 전 도정의 디지털 대전환' 비전 하에 디지털 서비스 통합 편의를 제공하기 위해 강원도 통합서비스 플랫폼 '나야나'에 파라메타의 DID 신원인증 기술 적용. 기존 복잡한 신청 프로세스 및 준비 서류를 간소화하고 온·오프라인 신원인증을 통합해 도민 신원인증·자격인증·금융 등 다양한 분야로 확장. '강원헬스업' 등 기존 DID 서비스의 사용 범위까지 함께 넓혔습니다.",
        tags: ["Blockchain Platform", "DID"],
      },
      {
        id: "nec",
        title: "중앙선거관리위원회",
        headline: "선관위 온라인 투표 시스템에 loopchain 적용",
        body: "기존 선거·정책 수립·시민 제안 등 시민 참여가 필요한 분야에 공정하고 투명한 온라인 투표 시스템 구축이 어려웠던 상황에서 파라메타의 블록체인 기술을 적용해 투명성·기밀성·편의성을 모두 향상. 이용 기관 및 선거인단을 위한 블록체인 기반 자격증명 서비스도 새로 도입돼, 위변조 방지 기능을 투표·선거에 적용한 사례로 블록체인 기반 투표·자격 증명의 방향성을 제시했습니다.",
        tags: ["Blockchain Platform"],
      },
    ],
  },
  enterprise: {
    name: "Enterprise",
    audience: "일반 기업·인앱 커머스·B2B SaaS",
    heroSummary:
      "자사 앱·서비스에 디지털 자산을 직접 결합 — 별도 인프라 없이 결제·지갑·환전·인증을 API 한 번으로 통합합니다. Zero-Ops 인프라로 운영 부담 없이 추가 BM을 설계할 수 있습니다.",
    challenges: [
      {
        title: "Web3 전환의 운영 부담",
        desc: "노드·KMS·키 관리·가스 정책까지 — Web3 인프라를 자체 운영하기엔 비용과 인력 모두 부담입니다.",
      },
      {
        title: "기존 앱과의 결합 기술 장벽",
        desc: "기존 자사 앱·결제 시스템에 디지털 자산을 추가하려면 SDK·인증·UX까지 재설계해야 합니다.",
      },
      {
        title: "추가 BM 설계의 복잡성",
        desc: "토큰·NFT·리워드 등 새 비즈니스 모델을 설계하려면 토큰 이코노미·거버넌스 전문성이 필요합니다.",
      },
    ],
    models: [
      {
        tag: "월렛",
        title: "인앱 커머스 통합 자산 지갑",
        desc: "현금·주식·디지털 자산을 자사 앱 한 곳에서 — 결제·환전·보관까지 단일 흐름. (Showcase Demo와 연결)",
        outcome: "ParaSta 4 모듈 + Onchain KYC 결합",
      },
      {
        tag: "결제",
        title: "스테이블코인 결제 직불카드 인프라",
        desc: "하나월렛 협력 모델 — 차세대 KYC 기반 디지털 자산 결제 카드 인프라 공동 연구.",
        outcome: "Supercycl + Onchain KYC",
      },
      {
        tag: "리워드",
        title: "포인트·리워드 NFT 시스템",
        desc: "충성 고객 리워드를 블록체인 기반으로 발급. 위·변조 불가, 영구 보존, 사용자 간 이전 가능.",
        outcome: "broof + ParaSta Issuance 결합",
      },
    ],
    products_used: [
      { name: "ParaSta 4 모듈 전체", role: "발행·지갑·정산·KYC를 단일 플랫폼에서" },
      { name: "Supercycl", role: "자산 관리·다중 거래소 운영" },
      { name: "broof", role: "리워드·증명서 NFT 발급" },
    ],
    benefits: [
      {
        title: "1일 만에 통합",
        desc: "API·SDK 한 번 연결로 자사 앱에 디지털 자산 기능을 즉시 추가합니다.",
      },
      {
        title: "Zero-Ops 인프라",
        desc: "노드·KMS·가스·보안 운영을 모두 ParaSta가 처리. 기업은 서비스에만 집중합니다.",
      },
      {
        title: "BM 설계 컨설팅",
        desc: "토큰·리워드·결제 모델까지 함께 설계 — 디지털 자산 도입을 추가 매출로 연결합니다.",
      },
    ],
    note: "자체 토큰·지갑·결제·환전을 자사 앱에 도입하는 일반 기업 시나리오 (STO 아님)",
    cases: [
      {
        id: "icon",
        title: "ICON",
        headline: "loopchain 기반 글로벌 인터체인 Layer1 블록체인",
        body: "오픈소스 프로젝트로서 파라메타의 자체 블록체인 코어 엔진 loopchain 기반으로 구축된 글로벌 인터체인 프로젝트. 2017년 아이콘 재단 주도로 출범한 Layer1 블록체인이며, 파라메타는 블록체인 플랫폼·탈중앙화 거버넌스·인센티브 시스템 기술 공급, ICON 2.0 (Java Contract · IISS 3.0 · Fee 2.1 · 1.0 블록 마이그레이션) 출시 등 전반적인 블록체인 기술을 지원합니다. 인터체인 기술 BTP 개발·연구를 통해 BSC·Polkadot·NEAR·Harmony 등과 연결 예정. 주 DeFi 프로젝트로 Balanced DAO, Omm Finance, Optimus Protocol, Equality Exchange 등이 있습니다.",
        tags: ["Interchain", "Wallet", "Governance & Token Economy", "Blockchain Platform"],
      },
      {
        id: "havah",
        title: "HAVAH",
        headline: "loopchain 기반 인터체인 NFT 엔터테인먼트 플랫폼",
        body: "게임·소셜·금융 등 다양한 영역에서 각 체인에서 발행된 NFT를 연결하는 인터체인 NFT 종합 엔터테인먼트 플랫폼. NFT 커뮤니티 포털 플레이그라운드이자 인터체인 종합 엔터테인먼트 공간을 목표. 파라메타는 블록체인 플랫폼·인터체인 기술을 바탕으로 이종 블록체인 NFT를 연결해 상호운용성을 확보하고, dApp 생태계 지원·플랫폼 코인 발행·거버넌스 구축까지 지원합니다.",
        tags: ["Blockchain Platform", "Interchain", "Wallet", "Governance & Token Economy", "NFT", "DEX"],
      },
      {
        id: "line-linkchain",
        title: "LINE · Linkchain",
        headline: "일본 SNS 자체 블록체인 플랫폼에 loopchain 적용",
        body: "전 세계 약 2억 명의 MAU와 1조 2,000억 엔 이상의 시총을 자랑하는 일본 대표 SNS 기업 LINE의 자체 블록체인 플랫폼 링크체인(Linkchain)에 파라메타의 블록체인 코어 엔진 루프체인 적용. 루프체인이 적용된 링크체인은 암호화폐 'LINK'를 구축하고, 엄격한 심사 절차와 높은 기술 안정성을 요구하는 일본 금융청 화이트리스트 암호화폐로서 제도 신설 이후 승인된 5번째 가상자산으로 인정받았습니다.",
        tags: ["Blockchain Platform"],
      },
      {
        id: "iconex",
        title: "ICONex",
        headline: "Ethereum/ICX 등 멀티체인 통합 암호화폐 지갑",
        body: "이더리움·ICX 등 여러 가상자산을 지원하는 멀티체인 통합 Cryptocurrency Wallet. 누적 설치 수 10만, 월렛 발급 수 100만 건 달성. ETH·ICX 가상자산 지갑 기능과 더불어 ICON Network On-Chain Governance 지원을 위한 Voting·Staking 기능까지 지원합니다.",
        tags: ["Wallet"],
      },
      {
        id: "changeup-ground",
        title: "체인지업 그라운드 · POSCO",
        headline: "MyID DID 기술로 통합인증 체계 구축",
        body: "포스코가 벤처기업 육성을 위해 운영하는 스타트업 공간 '체인지업 그라운드'에 입주사 및 포스코·포스텍 등 다양한 인증정보 기관이 필요에 맞게 인증정보를 발급하기 위해 파라메타의 DID 기술이 적용됐습니다. 출입통제·방문자 인증·주차 관제·회의실 예약 등 다양한 기능을 DID 안에 담아 휴대폰 단말기 하나로 모든 인증을 손쉽게 처리할 수 있는 편리하고 신뢰할 수 있는 인증 체계를 구축했습니다.",
        tags: ["DID"],
      },
    ],
  },
} as const satisfies Record<string, SolutionContent>;

export const solutions = data;

export type SolutionKey = keyof typeof data;
