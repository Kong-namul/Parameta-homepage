"use client";
import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("[error.tsx]", error);
  }, [error]);
  return (
    <section className="min-h-[70vh] flex items-center py-24">
      <Container className="text-center max-w-2xl mx-auto">
        <div className="label-mono mb-4">500</div>
        <h1 className="h-hero font-semibold">서버에서 문제가 발생했어요.</h1>
        <p className="text-[var(--text-secondary)] mt-4">잠시 후 다시 시도해주세요. 계속되면 sales@parametacorp.com으로 알려주세요.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="primary" onClick={() => reset()}>다시 시도</Button>
          <Button variant="secondary" asChild>
            <a href="mailto:sales@parametacorp.com">문의 메일</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
