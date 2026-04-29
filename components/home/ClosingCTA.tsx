import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function ClosingCTA() {
  const t = useTranslations("home.closing");
  return (
    <section className="py-24">
      <Container className="text-center max-w-2xl mx-auto">
        <h2 className="h-section">{t("title")}</h2>
        <p className="text-[var(--text-secondary)] mt-4">{t("desc")}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="primary" asChild>
            <Link href="/contact">{t("primary")}</Link>
          </Button>
          <Button variant="secondary" asChild>
            <a href="mailto:sales@parametacorp.com">sales@parametacorp.com</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
