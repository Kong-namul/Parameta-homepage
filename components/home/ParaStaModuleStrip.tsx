import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";

const MODULES = [
  { name: "Issuance", key: "issuance" },
  { name: "Wallet", key: "wallet" },
  { name: "Orchestration", key: "orchestration" },
  { name: "Onchain KYC", key: "onchainKyc" },
  { name: "Unified Admin", key: "unifiedAdmin" },
] as const;

export function ParaStaModuleStrip() {
  const t = useTranslations("home.modules");
  return (
    <section className="py-24 border-b border-[var(--border-subtle)]">
      <Container>
        <div className="label-mono mb-3">{t("label")}</div>
        <h2 className="h-section">{t("title")}</h2>
        <div className="grid md:grid-cols-5 gap-3 mt-12">
          {MODULES.map((m) => (
            <div
              key={m.name}
              className="group p-5 border border-[var(--border)] rounded-md hover:border-[var(--accent-primary)] transition-colors"
            >
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                {t(`items.${m.key}`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
