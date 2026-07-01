import React from "react";
import { BellRing, Clock, MapPin } from "lucide-react";
import { liveQueue } from "../data/mockData.jsx";

export default function LiveQueueStatus() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-panel">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg bg-ink p-6 text-white">
            <p className="text-sm font-semibold text-slate-300">Your Token</p>
            <p className="mt-4 text-7xl font-bold">{liveQueue.token}</p>
            <p className="mt-5 text-slate-300">{liveQueue.department}</p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-mint">
              Live Queue Status
            </p>
            <h1 className="mt-3 text-3xl font-bold text-ink">
              Currently Serving: {liveQueue.currentlyServing}
            </h1>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 p-4">
                <Clock className="text-saffron" />
                <p className="mt-3 text-sm text-slate-500">Estimated Time</p>
                <p className="text-2xl font-bold">
                  {liveQueue.estimatedWait} min
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <BellRing className="text-mint" />
                <p className="mt-3 text-sm text-slate-500">People Before You</p>
                <p className="text-2xl font-bold">
                  {liveQueue.peopleBeforeYou}
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <MapPin className="text-sky-600" />
                <p className="mt-3 text-sm text-slate-500">Counter</p>
                <p className="text-2xl font-bold">{liveQueue.counter}</p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
              Notification will be sent when token {liveQueue.notifyAt} is
              called.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
