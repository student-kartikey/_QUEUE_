import React, { useState } from "react";
import { departments } from "../data/mockData.jsx";

export default function BookQueue() {
  const [selected, setSelected] = useState(departments[0].id);
  const department = departments.find((item) => item.id === selected);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wide text-mint">
          Book Queue
        </p>
        <h1 className="mt-3 text-3xl font-bold text-ink">
          Select a service and take a digital token
        </h1>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-panel">
          <label className="block">
            <span className="text-sm font-semibold text-slate-600">
              Department
            </span>
            <select
              value={selected}
              onChange={(event) => setSelected(event.target.value)}
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-mint"
            >
              {departments.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-slate-600">
              Visitor Name
            </span>
            <input
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-mint"
              placeholder="Enter visitor name"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-slate-600">
              Mobile Number
            </span>
            <input
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-mint"
              placeholder="Receive queue notification"
            />
          </label>

          <button className="mt-6 rounded-md bg-mint px-5 py-3 font-semibold text-white hover:bg-emerald-600">
            Generate Token
          </button>
        </form>

        <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-panel">
          <p className="text-sm font-semibold text-slate-500">
            Selected Service
          </p>
          <h2 className="mt-2 text-2xl font-bold">{department.name}</h2>
          <dl className="mt-6 grid gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <dt className="text-slate-500">Counter</dt>
              <dd className="font-bold">{department.counter}</dd>
            </div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <dt className="text-slate-500">Active Tokens</dt>
              <dd className="font-bold">{department.activeTokens}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-500">Estimated Wait</dt>
              <dd className="font-bold">{department.averageWait} min</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
