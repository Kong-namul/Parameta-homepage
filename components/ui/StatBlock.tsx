interface StatBlockProps {
  value: string;
  label: string;
}

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="space-y-2">
      <div className="text-4xl md:text-5xl font-semibold tabular-nums tracking-tight">{value}</div>
      <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">{label}</div>
    </div>
  );
}
