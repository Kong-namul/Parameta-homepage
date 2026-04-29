/**
 * Seed 14 timeline milestones into Sanity.
 * Run: pnpm exec tsx scripts/seed-timeline.ts
 *
 * Pre-conditions:
 * - User has run `npx sanity@latest init --bare` and Sanity project is created
 * - .env.local has real NEXT_PUBLIC_SANITY_PROJECT_ID
 * - User has a Sanity write token (export SANITY_AUTH_TOKEN=<token>)
 *
 * Get write token: https://www.sanity.io/manage → project → API → Tokens → "Add API token" with Editor or Admin permission.
 */

import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_AUTH_TOKEN;

if (!projectId || projectId === "placeholder-project-id") {
  console.error("❌ NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Run `npx sanity init` first.");
  process.exit(1);
}
if (!token) {
  console.error("❌ SANITY_AUTH_TOKEN is required (write access). Get one at https://www.sanity.io/manage");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

type Milestone = {
  year: number;
  month?: number;
  title_ko: string;
  title_en: string;
  category: string;
  featured_on_hero?: boolean;
};

const milestones: Milestone[] = [
  { year: 2016, month: 5, title_ko: "㈜더루프 설립", title_en: "Theloop Inc. founded", category: "founding" },
  { year: 2016, title_ko: "Loopchain 자체 블록체인 엔진 개발", title_en: "Loopchain blockchain engine development", category: "tech" },
  { year: 2018, month: 1, title_ko: "ICON 메인넷 출시 (Loopchain 기반)", title_en: "ICON mainnet launch (on Loopchain)", category: "tech", featured_on_hero: true },
  { year: 2018, month: 8, title_ko: "사명 변경 → ㈜아이콘루프 (ICONLOOP)", title_en: "Renamed to ICONLOOP Inc.", category: "founding" },
  { year: 2019, month: 6, title_ko: "금융위 혁신금융서비스 샌드박스 my-ID 지정 (DID 최초)", title_en: "FSC Innovative Financial Services Sandbox — first DID designation", category: "financial" },
  { year: 2020, month: 4, title_ko: "MyID 정식 출시 + 신한은행 실명인증 (금융권 DID 첫 상용화)", title_en: "MyID launch + Shinhan Bank identity verification (first commercial DID in finance)", category: "financial", featured_on_hero: true },
  { year: 2021, month: 12, title_ko: "신한카드 DID 전략적 제휴", title_en: "Shinhan Card DID strategic partnership", category: "financial" },
  { year: 2022, title_ko: "HAVAH 인터체인 NFT 플랫폼 출시 + Parameta 프레임워크 공개", title_en: "HAVAH interchain NFT platform launch + Parameta framework reveal", category: "tech" },
  { year: 2023, month: 2, title_ko: "사명 변경 → ㈜파라메타 (PARAMETA)", title_en: "Renamed to PARAMETA Inc.", category: "founding", featured_on_hero: true },
  { year: 2023, title_ko: "기술특례상장 모의 평가 A등급 + MSIT·KISA 배터리 잔존 수명 인증 사업", title_en: "Technical Special Listing mock eval grade A + MSIT/KISA battery passport project", category: "investment" },
  { year: 2024, month: 5, title_ko: "국내 최초 블록체인 CSAP 인증 (MyID 2.0) + K-BTF 시연 + 부산시 배터리여권 적용", title_en: "First blockchain CSAP certification in Korea (MyID 2.0) + K-BTF + Busan battery passport", category: "certification", featured_on_hero: true },
  { year: 2025, title_ko: "GITEX Global 2025 — ParaSta + Supercycl 공개 + ADB 채권 포럼 + 200억 투자 라운드 시동", title_en: "GITEX Global 2025 — ParaSta/Supercycl reveal + ADB bond forum + ₩20B funding round", category: "global" },
  { year: 2025, month: 11, title_ko: "broof로 국가AI전략위원회 위촉증 발급 (정부 위원회 첫 채택)", title_en: "broof issued certificates for National AI Strategy Committee (first government adoption)", category: "public" },
  { year: 2026, title_ko: "사이트 전면 개편 + KOSDAQ 상장 추진", title_en: "Full site redesign + KOSDAQ IPO push", category: "investment", featured_on_hero: true },
];

async function seed() {
  console.log(`Seeding ${milestones.length} timeline milestones to project=${projectId} dataset=${dataset}...`);
  for (const m of milestones) {
    const created = await client.create({ _type: "timeline", ...m });
    console.log(`✓ ${m.year}${m.month ? `-${m.month}` : ""}: ${m.title_ko} (${created._id})`);
  }
  console.log(`\n✅ Done. Open Sanity Studio at /studio to verify.`);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
