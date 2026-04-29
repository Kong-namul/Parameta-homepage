import { useTranslations } from "next-intl";
import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border-subtle)] py-12 mt-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-sm font-semibold">PARAMETA</div>
            <p className="text-xs text-[var(--text-tertiary)] mt-2">{t("tagline")}</p>
          </div>
          <div>
            <div className="label-mono mb-2">{t("legalLabel")}</div>
            <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
              <li><Link href="/privacy" className="hover:text-[var(--text-secondary)]">{t("privacy")}</Link></li>
              <li><Link href="/terms" className="hover:text-[var(--text-secondary)]">{t("terms")}</Link></li>
            </ul>
          </div>
          <div>
            <div className="label-mono mb-2">{t("contactLabel")}</div>
            <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
              <li>{t("salesPrefix")}: <a href="mailto:sales@parametacorp.com" className="hover:text-[var(--text-secondary)]">sales@parametacorp.com</a></li>
              <li>{t("irPrefix")}: <a href="mailto:ir@parametacorp.com" className="hover:text-[var(--text-secondary)]">ir@parametacorp.com</a></li>
              <li>{t("privacyPrefix")}: <a href="mailto:privacy@parametacorp.com" className="hover:text-[var(--text-secondary)]">privacy@parametacorp.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--border-subtle)] text-xs text-[var(--text-tertiary)]">
          {t("rights", { year })}
        </div>
      </Container>
    </footer>
  );
}
