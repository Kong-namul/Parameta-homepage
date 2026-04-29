import Link from "next/link";
import { useLocale } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const COPY = {
  ko: {
    title: "길을 잃으셨나요?",
    desc: "찾는 페이지가 없거나 이전됐을 수 있어요.",
    home: "홈으로",
    contact: "문의하기",
  },
  en: {
    title: "Lost your way?",
    desc: "The page you're looking for doesn't exist or has moved.",
    home: "Go home",
    contact: "Contact",
  },
};

export default function NotFound() {
  const locale = useLocale();
  const c = locale === "en" ? COPY.en : COPY.ko;
  return (
    <section className="min-h-[70vh] flex items-center py-24">
      <Container className="text-center max-w-2xl mx-auto">
        <div className="label-mono mb-4">404</div>
        <h1 className="h-hero font-semibold">{c.title}</h1>
        <p className="text-[var(--text-secondary)] mt-4">{c.desc}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="primary" asChild>
            <Link href="/">{c.home}</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/contact">{c.contact}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
