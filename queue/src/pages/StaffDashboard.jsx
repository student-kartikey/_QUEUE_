import React, { useEffect, useState } from "react";
import { CheckCircle2, SkipForward, UserCheck } from "lucide-react";
import { completeToken, getApiError, getQueue, serveNext } from "../api/queueApi.jsx";

export default function StaffDashboard() {
  const [queueData, setQueueData] = useState({ queue: [], currentToken: null, currentServing: 0 });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const current = queueData.currentToken?.tokenNumber || "No token";

  const loadQueue = async () => {
    try {
      const data = await getQueue();
      setQueueData(data);
      setError("");
    } catch (requestError) {
      setError(getApiError(requestError));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQueue();
    const interval = window.setInterval(loadQueue, 5000);
    return () => window.clearInterval(interval);
  }, []);

  async function callNextToken() {
    try {
      await serveNext();
      await loadQueue();
    } catch (requestError) {
      setError(getApiError(requestError));
    }
  }

  async function markCompleted() {
    if (!queueData.currentToken) return;
    try {
      await completeToken(queueData.currentToken.tokenNumber);
      await loadQueue();
    } catch (requestError) {
      setError(getApiError(requestError));
    }
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
              disabled={loading || Boolean(queueData.currentToken) || queueData.queue.length === 0}
              className="flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
            >
              <UserCheck size={18} /> Call Next
            </button>
            <button disabled className="flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 font-semibold text-ink opacity-50">
              <SkipForward size={18} /> Skip Token
            </button>
            <button onClick={markCompleted} disabled={!queueData.currentToken} className="flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 font-semibold text-white hover:bg-emerald-600 disabled:cursor-not-allowed disabled:bg-emerald-300">
              <CheckCircle2 size={18} /> Mark Completed
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-panel">
          {error && <p className="p-4 text-sm font-medium text-red-600">{error}</p>}
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
              {queueData.queue.map((item) => (
                <tr key={item.tokenNumber} className="border-t border-slate-100">
                  <td className="px-4 py-4 font-bold">{item.tokenNumber}</td>
                  <td className="px-4 py-4">{item.name}</td>
                  <td className="px-4 py-4 text-slate-600">Queue service</td>
                  <td className="px-4 py-4">
                    <span
                      className={`rounded-md px-2 py-1 text-xs font-bold ${
                        item.status === "serving" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
              {!loading && queueData.queue.length === 0 && (
                <tr><td colSpan="4" className="px-4 py-6 text-center text-slate-500">The waiting queue is empty.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
