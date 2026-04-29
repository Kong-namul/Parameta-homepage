import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border-subtle)] py-12 mt-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-sm font-semibold">PARAMETA</div>
            <p className="text-xs text-[var(--text-tertiary)] mt-2">㈜파라메타 · 기업을 위한 디지털 자산 금융 인프라</p>
          </div>
          <div>
            <div className="label-mono mb-2">LEGAL</div>
            <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
              <li><Link href="/privacy" className="hover:text-[var(--text-secondary)]">개인정보처리방침</Link></li>
              <li><Link href="/terms" className="hover:text-[var(--text-secondary)]">이용약관</Link></li>
            </ul>
          </div>
          <div>
            <div className="label-mono mb-2">CONTACT</div>
            <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
              <li>영업: <a href="mailto:sales@parametacorp.com" className="hover:text-[var(--text-secondary)]">sales@parametacorp.com</a></li>
              <li>IR: <a href="mailto:ir@parametacorp.com" className="hover:text-[var(--text-secondary)]">ir@parametacorp.com</a></li>
              <li>개인정보 책임자: <a href="mailto:privacy@parametacorp.com" className="hover:text-[var(--text-secondary)]">privacy@parametacorp.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--border-subtle)] text-xs text-[var(--text-tertiary)]">
          {`© ${year} ㈜파라메타. All rights reserved.`}
        </div>
      </Container>
    </footer>
  );
}
