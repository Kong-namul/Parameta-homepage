"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const next = locale === "ko" ? "en" : "ko";
  const target =
    locale === "ko" ? `/en${pathname}` : pathname.replace(/^\/en/, "") || "/";

  return (
    <button
      onClick={() => router.push(target)}
      className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
      aria-label={`Switch language to ${next.toUpperCase()}`}
    >
      {locale.toUpperCase()} / {next.toUpperCase()}
    </button>
  );
}
