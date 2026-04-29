import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function ShowcaseDemoCTA() {
  const t = useTranslations("home.showcase");
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container className="text-center max-w-2xl mx-auto">
        <div className="label-mono mb-3">{t("label")}</div>
        <h2 className="h-section">{t("title")}</h2>
        <p className="text-[var(--text-secondary)] mt-4">{t("desc")}</p>
        <Button variant="primary" className="mt-8" asChild>
          <a href="https://demo.parametacorp.com" target="_blank" rel="noopener noreferrer">
            {t("cta")}
          </a>
        </Button>
      </Container>
    </section>
  );
}
