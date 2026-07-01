import React from "react";

export default function StatCard({ label, value, tone = "default" }) {
  const toneClass = {
    default: "border-slate-200 bg-white",
    mint: "border-emerald-100 bg-emerald-50",
    amber: "border-amber-100 bg-amber-50",
    blue: "border-sky-100 bg-sky-50"
  }[tone];

  return (
    <div className={`rounded-lg border p-5 shadow-sm ${toneClass}`}>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold text-ink">{value}</p>
    </div>
  );
}
