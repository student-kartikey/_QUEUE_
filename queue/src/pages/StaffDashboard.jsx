import React, { useState } from "react";
import { CheckCircle2, SkipForward, UserCheck } from "lucide-react";
import { staffQueue } from "../data/mockData.jsx";

export default function StaffDashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = staffQueue[currentIndex]?.token || "Queue Complete";
  const hasNextToken = currentIndex < staffQueue.length - 1;

  function callNextToken() {
    setCurrentIndex((index) => Math.min(index + 1, staffQueue.length - 1));
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-mint">Operator Dashboard</p>
          <h1 className="mt-3 text-3xl font-bold text-ink">Today's queue</h1>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <p className="text-sm text-slate-500">Now Serving</p>
          <p className="text-3xl font-bold">{current}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-panel">
          <h2 className="text-xl font-bold">Actions</h2>
          <div className="mt-5 grid gap-3">
            <button
              onClick={callNextToken}
              disabled={!hasNextToken}
              className="flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
            >
              <UserCheck size={18} /> Call Next
            </button>
            <button className="flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 font-semibold text-ink hover:bg-slate-100">
              <SkipForward size={18} /> Skip Token
            </button>
            <button className="flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 font-semibold text-white hover:bg-emerald-600">
              <CheckCircle2 size={18} /> Mark Completed
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-panel">
          <table className="w-full border-collapse text-left">
            <thead className="bg-slate-100 text-sm text-slate-600">
              <tr>
                <th className="px-4 py-3">Token</th>
                <th className="px-4 py-3">Visitor</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {staffQueue.map((item, index) => (
                <tr key={item.token} className={`border-t border-slate-100 ${index === currentIndex ? "bg-emerald-50" : ""}`}>
                  <td className="px-4 py-4 font-bold">{item.token}</td>
                  <td className="px-4 py-4">{item.name}</td>
                  <td className="px-4 py-4 text-slate-600">{item.service}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`rounded-md px-2 py-1 text-xs font-bold ${
                        index === currentIndex ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {index === currentIndex ? "Serving" : item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
