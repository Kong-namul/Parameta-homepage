import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";

const KEYS = ["reliability", "observability", "control"] as const;

export function WhatWeAre() {
  const t = useTranslations("home.whatWeAre");
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <h2 className="h-section max-w-2xl">{t("title")}</h2>
        <p className="text-[var(--text-secondary)] mt-4 max-w-xl">{t("subtitle")}</p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {KEYS.map((k) => (
            <div key={k} className="space-y-3 p-6 border border-[var(--border)] rounded-md">
              <div className="label-mono">{t(`needs.${k}.label`)}</div>
              <h3 className="text-xl font-semibold">{t(`needs.${k}.title`)}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{t(`needs.${k}.desc`)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
