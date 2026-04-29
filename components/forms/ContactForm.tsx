"use client";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const COPY = {
  name: "이름 *",
  nameAria: "이름",
  company: "회사명 *",
  companyAria: "회사명",
  title: "직책 (선택)",
  titleAria: "직책",
  email: "비즈니스 이메일 *",
  emailAria: "이메일",
  phone: "전화번호 (선택)",
  phoneAria: "전화번호",
  segment: "고객군",
  segmentPlaceholder: "고객군 *",
  segmentOpts: [
    { value: "financial", label: "금융사" },
    { value: "enterprise", label: "기업" },
    { value: "public", label: "지자체·공공" },
    { value: "other", label: "기타" },
  ],
  interest: "관심 영역",
  interestPlaceholder: "관심 영역 *",
  interestOpts: [
    { value: "parasta", label: "ParaSta" },
    { value: "supercycl", label: "Supercycl" },
    { value: "myid", label: "MyID 2.0" },
    { value: "broof", label: "broof" },
    { value: "general", label: "일반 문의" },
  ],
  message: "메시지 * (500자 이내)",
  messageAria: "메시지",
  consent: "개인정보 처리에 동의합니다.",
  consentLink: "방침 보기",
  submit: "문의 보내기",
  submitting: "전송 중...",
  success: "접수되었습니다. 영업일 3일 내 회신드릴게요.",
  networkError: "네트워크 오류. 잠시 후 다시 시도해주세요.",
  fallbackError: "전송 실패. 잠시 후 다시 시도해주세요.",
} as const;

export function ContactForm() {
  const c = COPY;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setErrorMessage(err?.error || c.fallbackError);
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage(c.networkError);
      setStatus("error");
    }
  }

  const inputCls =
    "w-full p-3 bg-[var(--bg-surface)] border border-[var(--border)] rounded-md text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl" noValidate>
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" placeholder={c.name} required className={inputCls} aria-label={c.nameAria} />
        <input name="company" placeholder={c.company} required className={inputCls} aria-label={c.companyAria} />
      </div>
      <input name="title" placeholder={c.title} className={inputCls} aria-label={c.titleAria} />
      <input name="email" type="email" placeholder={c.email} required className={inputCls} aria-label={c.emailAria} />
      <input name="phone" type="tel" placeholder={c.phone} className={inputCls} aria-label={c.phoneAria} />
      <select name="segment" required defaultValue="" className={inputCls} aria-label={c.segment}>
        <option value="" disabled>{c.segmentPlaceholder}</option>
        {c.segmentOpts.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <select name="interest" required defaultValue="" className={inputCls} aria-label={c.interest}>
        <option value="" disabled>{c.interestPlaceholder}</option>
        {c.interestOpts.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder={c.message}
        maxLength={500}
        required
        rows={5}
        className={inputCls}
        aria-label={c.messageAria}
      />
      <label className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          {c.consent} <a href="/privacy" className="text-[var(--accent-primary)] underline">{c.consentLink}</a>
        </span>
      </label>
      <Button variant="primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? c.submitting : c.submit}
      </Button>
      {status === "success" && (
        <p className="text-sm text-green-400" role="status">{c.success}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">{errorMessage}</p>
      )}
    </form>
  );
}
