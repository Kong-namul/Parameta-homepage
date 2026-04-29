"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "parameta-cookie-consent";

export function CookieBanner() {
  const t = useTranslations("cookie");
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
  const message = t("message");
  const [pre, rest] = message.split("<link>");
  const [linkText, post] = (rest ?? "").split("</link>");
  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md p-6 bg-[var(--bg-surface-elevated)] border border-[var(--border)] rounded-lg z-50 shadow-lg"
      role="dialog"
      aria-label={t("aria")}
    >
      <p className="text-sm">
        {pre}
        <a href="/privacy" className="text-[var(--accent-primary)] underline">
          {linkText}
        </a>
        {post}
      </p>
      <div className="mt-4 flex gap-2">
        <Button variant="primary" size="sm" onClick={() => accept("all")}>{t("acceptAll")}</Button>
        <Button variant="secondary" size="sm" onClick={() => accept("required")}>{t("acceptRequired")}</Button>
      </div>
    </div>
  );
}
