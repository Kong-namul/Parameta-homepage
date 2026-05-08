import { Container } from "./Container";
import Link from "@/components/ui/HardLink";

// SNS — 아이콘 자리만 잡아놓음. 실제 URL은 추후 확정 후 교체.
const SNS = [
  {
    name: "Facebook",
    href: "#",
    label: "facebook",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden fill="currentColor">
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.408 0 22.675 0z" />
      </svg>
    ),
  },
  {
    name: "Blog",
    href: "#",
    label: "blog",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden fill="currentColor">
        <rect x="2" y="3" width="20" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fontSize="11"
          fontWeight="800"
          fontFamily="ui-sans-serif, system-ui"
          fill="currentColor"
        >
          B
        </text>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    label: "youtube",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border-subtle)] py-12 mt-12">
      <Container>
        <div className="grid md:grid-cols-12 gap-8">
          {/* Brand + Company info */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <div className="text-sm font-semibold">PARAMETA</div>
              <p className="text-xs text-[var(--text-tertiary)] mt-2">
                ㈜파라메타 · 기업을 위한 디지털 자산 금융 인프라
              </p>
            </div>
            <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
              <li>대표 김종협</li>
              <li>사업자등록번호 647-81-00375</li>
              <li>서울특별시 서초구 강남대로 311, 드림플러스 강남 8층</li>
              <li>
                <span className="tabular-nums">TEL 02-2138-7026</span>
                <span className="mx-2 text-[var(--border)]">·</span>
                <span className="tabular-nums">FAX 02-6020-0709</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <div className="label-mono mb-2">LEGAL</div>
            <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
              <li>
                <Link href="/privacy" className="hover:text-[var(--text-secondary)]">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[var(--text-secondary)]">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="label-mono mb-2">CONTACT</div>
            <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
              <li>
                일반 문의:{" "}
                <a
                  href="mailto:info@parametacorp.com"
                  className="hover:text-[var(--text-secondary)]"
                >
                  info@parametacorp.com
                </a>
              </li>
              <li>
                영업:{" "}
                <a
                  href="mailto:sales@parametacorp.com"
                  className="hover:text-[var(--text-secondary)]"
                >
                  sales@parametacorp.com
                </a>
              </li>
              <li>
                IR:{" "}
                <a
                  href="mailto:ir@parametacorp.com"
                  className="hover:text-[var(--text-secondary)]"
                >
                  ir@parametacorp.com
                </a>
              </li>
              <li>
                개인정보 책임자:{" "}
                <a
                  href="mailto:privacy@parametacorp.com"
                  className="hover:text-[var(--text-secondary)]"
                >
                  privacy@parametacorp.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[var(--text-tertiary)]">
          <span>{`COPYRIGHT © ${year} PARAMETA Corp. All rights reserved.`}</span>
          <ul className="flex items-center gap-3">
            {SNS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
