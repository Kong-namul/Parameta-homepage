"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "parameta-cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setShow(!localStorage.getItem(STORAGE_KEY));
  }, []);

  function accept(level: "required" | "all") {
    localStorage.setItem(STORAGE_KEY, level);
    setShow(false);
  }

  if (!show) return null;
  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md p-6 bg-[var(--bg-surface-elevated)] border border-[var(--border)] rounded-lg z-50 shadow-lg"
      role="dialog"
      aria-label="쿠키 동의"
    >
      <p className="text-sm">
        사이트 운영을 위해 쿠키를 사용합니다. 자세한 내용은 <a href="/privacy" className="text-[var(--accent-primary)] underline">개인정보처리방침</a>에서 확인하세요.
      </p>
      <div className="mt-4 flex gap-2">
        <Button variant="primary" size="sm" onClick={() => accept("all")}>모두 동의</Button>
        <Button variant="secondary" size="sm" onClick={() => accept("required")}>필수만</Button>
      </div>
    </div>
  );
}
