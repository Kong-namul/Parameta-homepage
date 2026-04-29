import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";

const MODELS = ["payments", "portfolio", "sto"] as const;

export function RealModels() {
  const t = useTranslations("home.models");
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <div className="label-mono mb-3">{t("label")}</div>
        <h2 className="h-section">{t("title")}</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {MODELS.map((m) => (
            <div
              key={m}
              className="p-6 border border-[var(--border)] rounded-md hover:border-[var(--accent-primary)] transition-colors"
            >
              <span className="label-mono text-[var(--accent-primary)]">{t(`items.${m}.tag`)}</span>
              <h3 className="font-semibold mt-3">{t(`items.${m}.name`)}</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2">{t(`items.${m}.desc`)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
