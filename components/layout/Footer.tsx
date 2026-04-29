import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] py-12">
      <Container>
        <div className="flex flex-wrap gap-4 text-xs text-[var(--text-tertiary)]">
          <span>© PARAMETA</span>
          <Link href="/privacy" className="hover:text-[var(--text-secondary)]">
            개인정보처리방침
          </Link>
          <Link href="/terms" className="hover:text-[var(--text-secondary)]">
            이용약관
          </Link>
        </div>
      </Container>
    </footer>
  );
}
