import React from "react";
import {
  Banknote,
  BellRing,
  Building2,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Hospital,
  Landmark,
  MonitorCheck,
  ShieldCheck,
  Smartphone,
  Store,
  UsersRound,
  Wrench
} from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Digital First",
    text: "Visitors can take a token from their phone or from a help desk instead of standing in a physical line."
  },
  {
    icon: Clock3,
    title: "Clear Waiting Time",
    text: "The system shows the current token, people before the visitor, and an estimated waiting time."
  },
  {
    icon: BellRing,
    title: "Near Turn Alerts",
    text: "Users can be notified when their turn is close, reducing crowding around counters and waiting rooms."
  },
  {
    icon: UsersRound,
    title: "Staff Dashboard",
    text: "Operators can call the next token, skip absent visitors, and mark completed services quickly."
  }
];

const useCases = [
  {
    icon: Hospital,
    title: "Hospitals and Clinics",
    text: "Patients can wait comfortably while reception staff call tokens department-wise."
  },
  {
    icon: Banknote,
    title: "Banks",
    text: "Customers can book service counters for deposits, loans, account help, and support."
  },
  {
    icon: Landmark,
    title: "Government Offices",
    text: "Citizens get organized token flow for document verification and public services."
  },
  {
    icon: GraduationCap,
    title: "College Administration",
    text: "Students can queue for fees, certificates, admissions, and admin support."
  },
  {
    icon: Wrench,
    title: "Service Centers",
    text: "Visitors can track repair, billing, warranty, and customer-care queues."
  },
  {
    icon: Store,
    title: "Retail Stores",
    text: "Stores can control billing, support desks, returns, and consultation queues."
  }
];

const workflow = [
  "User selects a department or service",
  "System generates a digital token",
  "Visitor tracks live position and wait time",
  "Staff calls, skips, or completes tokens",
  "Admin reviews visitor flow and analytics"
];

const outcomes = [
  "Less crowding near counters",
  "More predictable waiting time",
  "Better staff coordination",
  "Useful daily analytics"
];

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-wide text-mint">About The Project</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-ink sm:text-5xl">
            A smarter way to manage waiting lines.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Smart Queue Management System is a virtual queue frontend designed to reduce long waiting times,
            confusion, and crowding in public service places. It replaces manual token handling with a live
            digital status system for visitors, staff, and administrators.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            The main idea is simple: a user joins a queue digitally, tracks their position in real time, and
            receives an alert when their turn is near. Staff get a dashboard to manage tokens, while admins
            can monitor department performance and visitor flow.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm">
                <CheckCircle2 className="text-mint" size={20} />
                <span className="text-sm font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-panel">
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-lg border border-slate-200 p-4 hover:border-mint hover:bg-emerald-50">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-50 text-mint">
                    <Icon size={24} />
                  </div>
                  <h2 className="mt-4 text-lg font-bold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-panel">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-amber-50 text-saffron">
              <Building2 size={28} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-saffron">Use Cases</p>
              <h2 className="text-2xl font-bold">Where It Can Be Used</h2>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            The same queue model can support different departments, counters, and public service workflows.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-lg bg-slate-50 p-5 hover:bg-emerald-50 hover:shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-mint shadow-sm">
                    <Icon size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <MonitorCheck className="text-mint" size={30} />
            <h2 className="text-2xl font-bold">How The System Works</h2>
          </div>
          <div className="mt-6 grid gap-4">
            {workflow.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-lg border border-slate-200 p-4 hover:border-mint">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="font-semibold text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-6 shadow-sm">
          <ShieldCheck className="text-mint" size={34} />
          <h2 className="mt-4 text-2xl font-bold">Project Benefits</h2>
          <p className="mt-3 leading-7 text-slate-700">
            It saves visitor time, improves staff productivity, keeps departments organized, and gives admins
            useful data such as average waiting time, completed tokens, skipped tokens, and total visitors per day.
          </p>
          <div className="mt-6 rounded-lg bg-white p-5">
            <p className="text-sm font-semibold text-slate-500">Example Analytics</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <p className="text-2xl font-bold text-ink">35 min</p>
                <p className="text-xs font-semibold text-slate-500">Avg. wait</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-ink">240</p>
                <p className="text-xs font-semibold text-slate-500">Visitors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
