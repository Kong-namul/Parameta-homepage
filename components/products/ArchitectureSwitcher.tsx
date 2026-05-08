"use client";

import { useState } from "react";
import { parastaModules, type ParaStaModuleKey } from "@/lib/parasta-modules";

const ORDER: ParaStaModuleKey[] = [
  "issuance",
  "wallet",
  "orchestration",
  "onchain-kyc",
  "unified-admin",
];

const SHORT_LABELS: Record<ParaStaModuleKey, string> = {
  issuance: "발행",
  wallet: "지갑",
  orchestration: "정산",
  "onchain-kyc": "신원 인증",
  "unified-admin": "관제탑",
};

export function ArchitectureSwitcher() {
  const [active, setActive] = useState<ParaStaModuleKey>("issuance");
  const m = parastaModules[active];
  const isAdmin = active === "unified-admin";

  return (
    <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start">
      {/* Left: selectable cards */}
      <ul className="space-y-2 lg:sticky lg:top-24" role="tablist" aria-label="ParaSta modules">
        {ORDER.map((key) => {
          const mod = parastaModules[key];
          const itemIsAdmin = key === "unified-admin";
          const isActive = key === active;
          return (
            <li key={key}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(key)}
                className={`w-full text-left p-4 border rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/[0.06]"
                    : "border-[var(--border)] hover:border-[var(--accent-primary)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`label-mono ${isActive ? "text-[var(--accent-primary)]" : ""}`}
                  >
                    {itemIsAdmin ? "ADMIN" : "CORE"}
                  </span>
                  <span className="text-xs text-[var(--text-tertiary)]">
                    {SHORT_LABELS[key]}
                  </span>
                </div>
                <div className="mt-2 text-base font-semibold">{mod.name}</div>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Right: detail panel */}
      <div role="tabpanel" key={active} aria-live="polite">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">{m.name}</h3>
          <span className="label-mono text-[var(--accent-primary)]">
            {isAdmin ? "ADMIN" : "CORE"}
          </span>
        </div>
        <p className="text-lg text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl">
          {m.tagline}
        </p>
        <div className="mt-8">
          <div className="label-mono mb-4 text-[var(--text-tertiary)]">CAPABILITIES</div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {m.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[var(--accent-primary)] mt-0.5 shrink-0">→</span>
                <span className="text-[var(--text-secondary)]">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
