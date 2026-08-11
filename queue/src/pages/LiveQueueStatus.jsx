import React, { useEffect, useState } from "react";
import { BellRing, Clock, MapPin } from "lucide-react";
import { getApiError, getQueue } from "../api/queueApi.jsx";

export default function LiveQueueStatus() {
  const [queueData, setQueueData] = useState(null);
  const [error, setError] = useState("");
  const tokenNumber = Number(localStorage.getItem("queueToken"));
  const department = localStorage.getItem("queueDepartment") || "Selected service";

  useEffect(() => {
    let active = true;
    const loadQueue = async () => {
      try {
        const data = await getQueue();
        if (active) {
          setQueueData(data);
          setError("");
        }
      } catch (requestError) {
        if (active) setError(getApiError(requestError));
      }
    };
    loadQueue();
    const interval = window.setInterval(loadQueue, 5000);
    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  const ownToken = queueData?.queue.find((token) => token.tokenNumber === tokenNumber) ||
    (queueData?.currentToken?.tokenNumber === tokenNumber ? queueData.currentToken : null);
  const peopleBeforeYou = ownToken ? queueData.queue.findIndex((token) => token.tokenNumber === tokenNumber) : 0;
  const isServing = queueData?.currentToken?.tokenNumber === tokenNumber;

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-panel">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg bg-ink p-6 text-white">
            <p className="text-sm font-semibold text-slate-300">Your Token</p>
            <p className="mt-4 text-7xl font-bold">{tokenNumber || "--"}</p>
            <p className="mt-5 text-slate-300">{department}</p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-mint">
              Live Queue Status
            </p>
            <h1 className="mt-3 text-3xl font-bold text-ink">
              Currently Serving: {queueData?.currentServing || "No token yet"}
            </h1>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 p-4">
                <Clock className="text-saffron" />
                <p className="mt-3 text-sm text-slate-500">Estimated Time</p>
                <p className="text-2xl font-bold">
                  {ownToken?.estimatedWait ?? "--"} min
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <BellRing className="text-mint" />
                <p className="mt-3 text-sm text-slate-500">People Before You</p>
                <p className="text-2xl font-bold">
                  {Math.max(peopleBeforeYou, 0)}
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <MapPin className="text-sky-600" />
                <p className="mt-3 text-sm text-slate-500">Counter</p>
                <p className="text-2xl font-bold">{ownToken?.counterId || "Not assigned"}</p>
              </div>
            </div>

            {error ? <div className="mt-6 rounded-lg bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</div> :
              <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
                {!tokenNumber ? "Generate a token from Book Queue to see its live status." : isServing ? "Your token is being served now." : ownToken ? `Token ${tokenNumber} is waiting in the queue.` : "This token is no longer active."}
              </div>}
          </div>
        </div>
      </div>
    </section>
  );
}
