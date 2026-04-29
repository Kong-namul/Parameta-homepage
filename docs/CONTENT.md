# Content Workflow — PARAMETA Site

## CMS

콘텐츠는 **Sanity Studio**(`/studio`)에서 관리합니다. Insights·Newsroom·Case Studies·9년 Timeline 4가지 도큐먼트 타입.

## 1차 셋업 (한 번만)

1. `npx sanity@latest init --bare` 실행 — 브라우저에서 Sanity 로그인 + 프로젝트 생성.
2. 받은 `projectId`를 `.env.local`에 추가:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your-real-project-id>
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```
3. https://www.sanity.io/manage 에서 API 토큰 발급(Editor 권한 이상) → `SANITY_AUTH_TOKEN` env 변수로 export.
4. 9년 타임라인 시드 실행:
   ```bash
   pnpm add -D tsx
   export SANITY_AUTH_TOKEN=<your-token>
   pnpm exec tsx scripts/seed-timeline.ts
   ```
5. Studio(`/studio`) 들어가 14개 마일스톤이 생성됐는지 확인.

## 일상 운영

### Insights·Newsroom 추가
1. `/studio` 접속 → 좌측 사이드바에서 "Insight" 또는 "Newsroom" 선택 → "Create new"
2. 한·영 타이틀, 요약, 본문(rich text), 이미지, 카테고리, 발행일 입력
3. 저장 → 사이트(`/resources/insights`, `/resources/newsroom`)에 즉시 반영

### 케이스 스터디 추가
1. `/studio` → "Case Study" → "Create new"
2. 고객사명, 산업(financial/public/enterprise), 사용 제품, 요약, 메트릭, 연도, 로고 입력
3. 저장 → `/trust` 페이지의 Case Studies 그리드에 노출

### 새 타임라인 마일스톤 추가
- `/studio` → "Timeline Milestone" → "Create new" — 연도, 월(선택), 한·영 제목·설명, 카테고리, `featured_on_hero` 체크
- `/trust` 페이지에 자동 정렬되어 표시

## 한·영 번역

각 도큐먼트마다 `_ko` / `_en` 필드 분리. EN 비워도 KO가 fallback. 사이트의 KO/EN 토글에 맞춰 자동 선택.

## 주의

- `.env.local`은 git에 커밋하지 마세요 (`.gitignore`에 이미 포함).
- `SANITY_AUTH_TOKEN`은 시드/서버 작업에만 사용. 클라이언트 코드에 절대 노출 금지.
