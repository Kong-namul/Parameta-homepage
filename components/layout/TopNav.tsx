import Link from "@/components/ui/HardLink";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string; desc: string }[];
};

const ITEMS: NavItem[] = [
  { href: "/company", label: "About" },
  {
    href: "/core",
    label: "Core",
    children: [
      { href: "/core/loopchain", label: "Loopchain", desc: "자체 블록체인 엔진 · 20K+ TPS, 100K TPS 개발 중" },
      { href: "/core/identity", label: "DID", desc: "W3C DID 등록 · 민간·공공 300만+ 유저 검증 기술" },
      { href: "/core/btp", label: "BTP", desc: "Trustless 자체 인터체인 프로토콜" },
      { href: "/core/storage", label: "Storage (PDS/BFS)", desc: "Personal Data + Blockchain File Storage" },
    ],
  },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/parasta", label: "ParaSta", desc: "기업용 디지털 자산 금융 인프라 (솔루션)" },
      { href: "/products/supercycl", label: "Supercycl", desc: "디지털 선물거래 통합" },
      { href: "/products/myid", label: "MyID 2.0", desc: "공공 특화 DID 구독" },
      { href: "/products/broof", label: "broof", desc: "블록체인 증명서 발급·관리" },
    ],
  },
  { href: "/newsroom", label: "Newsroom" },
  { href: "/ir", label: "IR" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          PARAMETA
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--text-secondary)]">
          {ITEMS.map((item) => {
            const hasChildren = !!item.children?.length;
            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="hover:text-[var(--text-primary)] transition-colors py-4 inline-flex items-center gap-1"
                >
                  {item.label}
                  {hasChildren && (
                    <span
                      aria-hidden
                      className="text-[var(--text-tertiary)] text-[10px] group-hover:text-[var(--accent-primary)] transition-colors"
                    >
                      ▾
                    </span>
                  )}
                </Link>
                {hasChildren && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-150 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                    <div className="w-[420px] bg-[var(--bg-base)] border border-[var(--border)] rounded-md shadow-2xl shadow-black/40 p-2">
                      <ul>
                        {item.children?.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block p-3 rounded-md hover:bg-[var(--bg-surface)] transition-colors group/child"
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div className="text-[var(--text-primary)] font-semibold text-sm">
                                  {child.label}
                                </div>
                                <span
                                  aria-hidden
                                  className="text-[var(--accent-primary)] text-xs opacity-0 group-hover/child:opacity-100 transition-opacity"
                                >
                                  →
                                </span>
                              </div>
                              <div className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                                {child.desc}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="primary" size="sm" asChild>
            <Link href="/contact">무료 컨설팅</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
