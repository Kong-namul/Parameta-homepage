"use client";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
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
        setErrorMessage(err?.error || "전송 실패. 잠시 후 다시 시도해주세요.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("네트워크 오류. 잠시 후 다시 시도해주세요.");
      setStatus("error");
    }
  }

  const inputCls =
    "w-full p-3 bg-[var(--bg-surface)] border border-[var(--border)] rounded-md text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl" noValidate>
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" placeholder="이름 *" required className={inputCls} aria-label="이름" />
        <input name="company" placeholder="회사명 *" required className={inputCls} aria-label="회사명" />
      </div>
      <input name="title" placeholder="직책 (선택)" className={inputCls} aria-label="직책" />
      <input name="email" type="email" placeholder="비즈니스 이메일 *" required className={inputCls} aria-label="이메일" />
      <input name="phone" type="tel" placeholder="전화번호 (선택)" className={inputCls} aria-label="전화번호" />
      <select name="segment" required defaultValue="" className={inputCls} aria-label="고객군">
        <option value="" disabled>고객군 *</option>
        <option value="financial">금융사</option>
        <option value="enterprise">기업</option>
        <option value="public">지자체·공공</option>
        <option value="other">기타</option>
      </select>
      <select name="interest" required defaultValue="" className={inputCls} aria-label="관심 영역">
        <option value="" disabled>관심 영역 *</option>
        <option value="parasta">ParaSta</option>
        <option value="supercycl">Supercycl</option>
        <option value="myid">MyID 2.0</option>
        <option value="broof">broof</option>
        <option value="general">일반 문의</option>
      </select>
      <textarea
        name="message"
        placeholder="메시지 * (500자 이내)"
        maxLength={500}
        required
        rows={5}
        className={inputCls}
        aria-label="메시지"
      />
      <label className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          개인정보 처리에 동의합니다. <a href="/privacy" className="text-[var(--accent-primary)] underline">방침 보기</a>
        </span>
      </label>
      <Button variant="primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "전송 중..." : "문의 보내기"}
      </Button>
      {status === "success" && (
        <p className="text-sm text-green-400" role="status">접수되었습니다. 영업일 3일 내 회신드릴게요.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">{errorMessage}</p>
      )}
    </form>
  );
}
