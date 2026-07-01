import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  UsersRound
} from "lucide-react";
import { analytics } from "../data/mockData.jsx";
import StatCard from "../components/StatCard.jsx";

const benefits = [
  { icon: Smartphone, title: "Digital Tokens", text: "Visitors can join a department queue without standing in a physical line." },
  { icon: Clock3, title: "Live Waiting Time", text: "People see their position, current token, and estimated waiting time." },
  { icon: UsersRound, title: "Staff Control", text: "Operators can call, skip, and complete tokens from a clear dashboard." }
];

const footerColumns = [
  {
    title: "Company",
    links: ["About Us", "Our Partners", "Contact Us", "Privacy Policy", "Terms & Condition", "Security"]
  },
  {
    title: "Resources",
    links: ["Blog", "Customer Stories", "Help Center", "Videos", "API Document", "Media Kit"]
  },
  {
    title: "Who Uses Smart Queue?",
    links: ["Banking Queue System", "Educational Queue System", "Hospital Queue System", "Public Sector Queue System", "Retail Queue System"]
  }
];

export default function Home() {
  return (
    <div className="relative">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-wide text-mint">Virtual Queue Management</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Join the queue digitally and arrive when your turn is near.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A frontend prototype for hospitals, banks, government offices, college admin desks, and service centers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Take Token <ArrowRight size={18} />
            </Link>
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 font-semibold text-ink hover:bg-slate-100"
            >
              Check Status
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-panel">
          <div className="rounded-lg bg-skyglass p-5">
            <p className="text-sm font-semibold text-slate-500">Currently Serving</p>
            <div className="mt-4 flex items-end justify-between gap-4">
              <span className="text-6xl font-bold text-ink">A30</span>
              <span className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-700">Counter C-02</span>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {analytics.map((item, index) => (
              <StatCard key={item.label} label={item.label} value={item.value} tone={index % 2 ? "amber" : "mint"} />
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:col-span-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="text-mint" size={26} />
                <h2 className="mt-4 text-lg font-bold">{benefit.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-ink px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Tired of Long Queues? Let's Make Waiting Smarter</h2>
        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/book"
            className="rounded-md bg-white px-8 py-4 text-lg font-bold text-ink shadow-sm hover:bg-mint hover:text-white hover:shadow-panel"
          >
            Join Queue Now
          </Link>
          <span className="text-base font-semibold text-slate-200">Get your digital token and track your turn live</span>
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1fr_1fr_1.1fr_1fr] lg:px-8">
          <div>
            <h3 className="text-lg font-bold uppercase">Download Apps</h3>
            <div className="mt-6 grid gap-3">
              <button className="flex items-center gap-3 rounded-md border border-slate-600 bg-zinc-950 px-4 py-3 text-left hover:border-mint hover:bg-zinc-900">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-mint">
                  <Smartphone size={20} />
                </span>
                <span>
                  <span className="block text-xs text-slate-400">Get it on</span>
                  <span className="block text-xl font-bold">Google Play</span>
                </span>
              </button>
              <button className="flex items-center gap-3 rounded-md border border-slate-600 bg-zinc-950 px-4 py-3 text-left hover:border-mint hover:bg-zinc-900">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-slate-800">
                  <Building2 size={20} />
                </span>
                <span>
                  <span className="block text-xs text-slate-400">Download on the</span>
                  <span className="block text-xl font-bold">App Store</span>
                </span>
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["PCI", "SOC", "HIPAA", "GDPR"].map((item) => (
                <span key={item} className="rounded-md bg-white px-3 py-2 text-xs font-bold text-ink">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-bold uppercase">{column.title}</h3>
              <ul className="mt-6 grid gap-3">
                {column.links.map((item) => (
                  <li key={item}>
                    <Link className="group inline-flex items-center gap-2 text-slate-200 hover:text-mint" to="/about">
                      <ChevronRight className="text-slate-500 group-hover:text-mint" size={17} />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-bold uppercase">Sales And Support</h3>
            <div className="mt-6 grid gap-3 text-slate-200">
              <p>+91 941 703 5046</p>
              <p>+1 206 420 5684</p>
              <p>+65 6909 9163</p>
              <p className="flex items-center gap-2">
                <Mail size={18} /> support@smartqueue.com
              </p>
            </div>
            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, ShieldCheck].map((Icon, index) => (
                <button
                  key={index}
                  className="grid h-11 w-11 place-items-center rounded-md bg-white text-ink hover:bg-mint hover:text-white"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 px-4 py-5 text-center text-sm text-slate-300">
          Copyright © 2026 Smart Queue. All Rights Reserved.
        </div>
      </footer>

      <Link
        to="/book"
        className="fixed left-0 top-1/2 z-30 hidden -translate-y-1/2 rounded-r-md bg-ink px-3 py-4 text-sm font-bold text-white shadow-panel hover:bg-mint md:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Join Queue
      </Link>

      <Link
        to="/status"
        className="fixed bottom-6 right-6 z-30 grid h-16 w-16 place-items-center rounded-full bg-saffron text-ink shadow-panel hover:bg-mint hover:text-white hover:scale-105"
        aria-label="Open queue message"
      >
        <MessageCircle size={32} />
      </Link>
    </div>
  );
}
