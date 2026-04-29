import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

const KEYS = ["csap", "kbtf", "years", "kosdaq"] as const;

export function TrustStrip() {
  const t = useTranslations("home.trust");
  return (
    <section className="py-12 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
      <Container className="flex flex-wrap items-center justify-center gap-3">
        {KEYS.map((k) => (
          <Badge key={k}>{t(`kpis.${k}`)}</Badge>
        ))}
      </Container>
    </section>
  );
}
