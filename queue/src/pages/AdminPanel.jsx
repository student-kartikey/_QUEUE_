import React from "react";
import { departments, analytics } from "../data/mockData.jsx";
import StatCard from "../components/StatCard.jsx";

export default function AdminPanel() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-mint">Admin Panel</p>
          <h1 className="mt-3 text-3xl font-bold text-ink">Departments, staff, and analytics</h1>
        </div>
        <button className="rounded-md bg-ink px-5 py-3 font-semibold text-white hover:bg-slate-800">Add Staff</button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {analytics.map((item, index) => (
          <StatCard key={item.label} label={item.label} value={item.value} tone={index === 0 ? "blue" : "default"} />
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-panel">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-100 text-sm text-slate-600">
            <tr>
              <th className="px-4 py-3">Department</th>
              <th className="px-4 py-3">Counter</th>
              <th className="px-4 py-3">Average Wait</th>
              <th className="px-4 py-3">Visitors Today</th>
              <th className="px-4 py-3">Active Tokens</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((item) => (
              <tr key={item.id} className="border-t border-slate-100">
                <td className="px-4 py-4 font-bold">{item.name}</td>
                <td className="px-4 py-4">{item.counter}</td>
                <td className="px-4 py-4">{item.averageWait} min</td>
                <td className="px-4 py-4">{item.visitorsToday}</td>
                <td className="px-4 py-4">{item.activeTokens}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
