# Deployment Guide — PARAMETA Site

## 1차 배포 (한 번만)

### 1. Sanity 셋업
```bash
npx sanity@latest init --bare
```
브라우저에서 로그인하고 프로젝트 생성. 받은 `projectId`를 다음 단계 env 변수로 사용.

### 2. Resend 셋업
1. https://resend.com 가입.
2. **Domains** 메뉴에서 `parametacorp.com` 도메인 추가, DNS 레코드 등록 (SPF·DKIM·DMARC).
3. **API Keys** → API 키 발급 (`re_xxx...`).
4. 발신 주소(`noreply@parametacorp.com` 등)도 verify.

### 3. GitHub 저장소
```bash
gh repo create parametacorp/website --private --source=. --remote=origin --push
```

### 4. Vercel 프로젝트 생성
1. https://vercel.com → New Project → Import the GitHub repo.
2. Root directory: `site/` 지정.
3. Environment Variables 등록:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID=<your-real-id>`
   - `NEXT_PUBLIC_SANITY_DATASET=production`
   - `NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01`
   - `NEXT_PUBLIC_SITE_URL=https://parametacorp.com`
   - `RESEND_API_KEY=re_xxx_...`
   - `RESEND_FROM_ADDRESS=PARAMETA <noreply@parametacorp.com>`
   - `SALES_TO_ADDRESS=sales@parametacorp.com`
4. Deploy. 빌드 성공하면 임시 도메인(`parametacorp-xxx.vercel.app`)에서 확인.

### 5. 도메인 연결
1. Vercel 프로젝트 → Settings → Domains → `parametacorp.com` 추가.
2. 기존 호스팅의 DNS A 레코드를 Vercel이 안내하는 IP로, 또는 CNAME을 `cname.vercel-dns.com`으로 변경.
3. DNS 전파 후 (수 분~수 시간) 사이트가 `parametacorp.com`에서 응답.

### 6. 콘텐츠 시드
```bash
export SANITY_AUTH_TOKEN=<your-token>
pnpm exec tsx scripts/seed-timeline.ts
```
이후 `/studio`에서 Insights·Newsroom·Case Studies 추가.

### 7. Google Search Console
1. https://search.google.com/search-console → Add property → `https://parametacorp.com`.
2. Verify (DNS TXT 레코드 또는 HTML 파일).
3. Sitemap 제출: `https://parametacorp.com/sitemap.xml`.
4. URL Inspection으로 핵심 페이지 인덱싱 요청.

### 8. Analytics
- Plausible(https://plausible.io)에 사이트 추가, 도메인 `parametacorp.com` 등록.
- 프로덕션 모드에서만 스크립트가 로드됨 (NODE_ENV=production).

### 9. 모니터링
- Vercel Analytics 자동 활성.
- 에러 추적은 Sentry 같은 서비스 도입 검토 (v1.1+).

## 2차 (런칭 후)

- 구 URL → 새 URL 301 redirect map 검증 (`vercel.json`).
- Lighthouse·Core Web Vitals 모니터링.
- Sanity Studio에 콘텐츠 정기 추가.
