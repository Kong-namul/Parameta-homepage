"use client";

import { useState, type ReactNode } from "react";

// 6 simple per-capability placeholder graphics
const GraphicCore = () => (
  <svg viewBox="0 0 120 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
    {[0, 1, 2, 3, 4].map((i) => (
      <rect
        key={i}
        x={20 + i * 2}
        y={6 + i * 10}
        width={80 - i * 4}
        height="6"
        rx="1.5"
        fill="var(--accent-primary)"
        fillOpacity={0.2 + i * 0.13}
      />
    ))}
  </svg>
);

const GraphicWallet = () => (
  <svg viewBox="0 0 120 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
    <rect x="22" y="14" width="76" height="34" rx="3" fill="none" stroke="var(--accent-primary)" strokeOpacity="0.5" strokeWidth="1.4" />
    <line x1="22" y1="22" x2="98" y2="22" stroke="var(--accent-primary)" strokeOpacity="0.4" strokeWidth="0.6" />
    <circle cx="82" cy="36" r="5" fill="var(--accent-primary)" fillOpacity="0.7" />
    <circle cx="82" cy="36" r="2" fill="var(--bg-base)" />
  </svg>
);

const GraphicInterchain = () => {
  const nodes = [
    { x: 30, y: 18 },
    { x: 90, y: 18 },
    { x: 22, y: 42 },
    { x: 60, y: 50 },
    { x: 98, y: 42 },
  ];
  return (
    <svg viewBox="0 0 120 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
      {nodes.map((n, i) => (
        <line
          key={`l-${i}`}
          x1="60"
          y1="30"
          x2={n.x}
          y2={n.y}
          stroke="var(--accent-primary)"
          strokeOpacity="0.4"
          strokeWidth="0.6"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={`n-${i}`} cx={n.x} cy={n.y} r="3" fill="var(--accent-primary)" fillOpacity="0.7" />
      ))}
      <circle cx="60" cy="30" r="6" fill="var(--accent-primary)" />
    </svg>
  );
};

const GraphicToken = () => (
  <svg viewBox="0 0 120 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
    <circle cx="40" cy="30" r="13" fill="none" stroke="var(--accent-primary)" strokeOpacity="0.55" strokeWidth="1.5" />
    <circle cx="60" cy="30" r="13" fill="none" stroke="var(--accent-primary)" strokeOpacity="0.55" strokeWidth="1.5" />
    <circle cx="80" cy="30" r="13" fill="none" stroke="var(--accent-primary)" strokeOpacity="0.55" strokeWidth="1.5" />
    <circle cx="60" cy="30" r="2" fill="var(--accent-primary)" />
  </svg>
);

const GraphicDid = () => (
  <svg viewBox="0 0 120 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
    <polygon
      points="60,8 88,22 88,38 60,52 32,38 32,22"
      fill="none"
      stroke="var(--accent-primary)"
      strokeOpacity="0.6"
      strokeWidth="1.4"
    />
    <polygon
      points="60,18 78,27 78,33 60,42 42,33 42,27"
      fill="var(--accent-primary)"
      fillOpacity="0.18"
    />
    <circle cx="60" cy="30" r="2.5" fill="var(--accent-primary)" />
  </svg>
);

const GraphicDev = () => (
  <svg viewBox="0 0 120 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
    <text
      x="14"
      y="42"
      fontSize="28"
      fontWeight="700"
      fill="var(--accent-primary)"
      fillOpacity="0.6"
      fontFamily="ui-monospace, monospace"
    >
      {`{ }`}
    </text>
    {[20, 30, 40].map((y, i) => (
      <line
        key={i}
        x1="60"
        y1={y}
        x2={60 + (i % 2 === 0 ? 38 : 28)}
        y2={y}
        stroke="var(--accent-primary)"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
    ))}
  </svg>
);

type Capability = {
  name: string;
  title: string;
  items: string[];
  graphic: ReactNode;
};

const CAPABILITIES: Capability[] = [
  {
    name: "Blockchain Core Engine",
    title: "블록체인 코어 원천기술",
    items: [
      "트랜잭션 수집·블록 생성·상태 관리·분산 원장",
      "고성능 합의 알고리즘 (LFT2)",
      "퍼블릭·프라이빗 모두 가능한 하이브리드 P2P 네트워크",
      "스마트 컨트랙트 (Python · Java · Solidity 예정)",
      "멀티채널 지원",
    ],
    graphic: <GraphicCore />,
  },
  {
    name: "Wallet Technology",
    title: "월렛 풀스택 기술",
    items: ["Crypto Wallet", "DID Wallet", "Vault 기반 개인키 백업"],
    graphic: <GraphicWallet />,
  },
  {
    name: "Interchain Technology",
    title: "인터체인 기술",
    items: [
      "이종 블록체인 간 데이터·메시지 교환",
      "중간자 없이 신뢰성 있는 자산 교환·스마트 컨트랙트 호출",
      "토큰 전송을 위한 Bridge 기술",
    ],
    graphic: <GraphicInterchain />,
  },
  {
    name: "Token Economy & Governance",
    title: "토큰 이코노미·거버넌스 설계/구현",
    items: ["탈중앙화된 거버넌스 구축", "지속 가능한 토큰 이코노미 설계 및 적용"],
    graphic: <GraphicToken />,
  },
  {
    name: "DID · CeFi/DeFi · NFT",
    title: "DID, CeFi/DeFi, NFT 구축 및 운영",
    items: [
      "분산 신원증명(DID) 기반 식별·인증",
      "DEX·Bridge 활용 CeFi/DeFi 구축",
      "NFT Marketplace 구축",
    ],
    graphic: <GraphicDid />,
  },
  {
    name: "dApp Developer Support",
    title: "dApp 개발자 지원",
    items: ["dApp 개발 도구", "개발자 센터 운영", "블록체인 모니터링 도구"],
    graphic: <GraphicDev />,
  },
];

export function CapabilitiesStepper() {
  const [active, setActive] = useState(0);
  const cap = CAPABILITIES[active];

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
      {/* Left — capability list */}
      <ol className="lg:sticky lg:top-24 space-y-1" aria-label="Capabilities">
        {CAPABILITIES.map((c, i) => {
          const isActive = i === active;
          return (
            <li key={c.name}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={isActive}
                className={`w-full text-left p-3 rounded-md transition-colors ${
                  isActive
                    ? "bg-[var(--accent-primary)]/[0.08] border border-[var(--accent-primary)]"
                    : "border border-transparent hover:bg-[var(--bg-surface)]/40"
                }`}
              >
                <span
                  className={`text-sm ${
                    isActive
                      ? "text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {c.name}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Right — active capability detail */}
      <div key={cap.name} className="min-h-[320px]">
        <div className="aspect-[2/1] w-full max-w-md border border-[var(--border)] rounded-lg bg-[var(--accent-primary)]/[0.02] p-6 mb-8">
          {cap.graphic}
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{cap.title}</h3>
        <ul className="mt-6 space-y-2.5">
          {cap.items.map((it) => (
            <li
              key={it}
              className="text-base text-[var(--text-secondary)] leading-relaxed"
            >
              {it}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
