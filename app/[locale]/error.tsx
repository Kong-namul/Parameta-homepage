"use client";
import { useEffect } from "react";
import { useLocale } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const COPY = {
  ko: {
    title: "서버에서 문제가 발생했어요.",
    desc: "잠시 후 다시 시도해주세요. 계속되면 sales@parametacorp.com으로 알려주세요.",
    retry: "다시 시도",
    contact: "문의 메일",
  },
  en: {
    title: "Something went wrong on our end.",
    desc: "Please try again shortly. If the issue persists, email sales@parametacorp.com.",
    retry: "Try again",
    contact: "Email us",
  },
};

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const locale = useLocale();
  const c = locale === "en" ? COPY.en : COPY.ko;
  useEffect(() => {
    console.error("[error.tsx]", error);
  }, [error]);
  return (
    <section className="min-h-[70vh] flex items-center py-24">
      <Container className="text-center max-w-2xl mx-auto">
        <div className="label-mono mb-4">500</div>
        <h1 className="h-hero font-semibold">{c.title}</h1>
        <p className="text-[var(--text-secondary)] mt-4">{c.desc}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="primary" onClick={() => reset()}>{c.retry}</Button>
          <Button variant="secondary" asChild>
            <a href="mailto:sales@parametacorp.com">{c.contact}</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
