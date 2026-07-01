import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Clock3, ShieldCheck, Ticket, UsersRound } from "lucide-react";

const userActions = [
  {
    icon: Ticket,
    title: "Book a Token",
    description: "Create a queue token online and skip the physical line.",
  },
  {
    icon: Clock3,
    title: "Track Wait Time",
    description:
      "See current queue status and estimated waiting time in real time.",
  },
  {
    icon: UsersRound,
    title: "Manage Profile",
    description: "Keep your contact details and queue history up to date.",
  },
];

const adminActions = [
  {
    icon: ShieldCheck,
    title: "Admin Login",
    description: "Sign in to the admin dashboard and manage queue operations.",
  },
  {
    icon: Clock3,
    title: "Live Queue Control",
    description: "Monitor tokens, counters, and waiting time in real time.",
  },
  {
    icon: UsersRound,
    title: "Staff Management",
    description: "Approve staff access and supervise service counters.",
  },
];

export default function LoginRegister() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [role, setRole] = useState("user");

  const isAdmin = role === "admin";
  const pageDescription = isAdmin
    ? "This portal is for admins and queue managers to access dashboard controls."
    : "This portal is for visitors and customers to sign in, create an account, and access queue services.";

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-panel">
          <p className="text-sm font-bold uppercase tracking-wide text-mint">
            Access Portal
          </p>
          <h1 className="mt-3 text-3xl font-bold text-ink">
            Login or register to join the queue
          </h1>
          <p className="mt-4 leading-7 text-slate-600">{pageDescription}</p>
          <p className="mt-4 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-ink">
            Choose whether to <span className="font-bold">Login</span> or <span className="font-bold">Register</span> as a <span className="font-bold">User</span> or <span className="font-bold">Admin</span>.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Continue as
            </span>
            {[
              { id: "user", label: "User" },
              { id: "admin", label: "Admin" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setRole(item.id)}
                className={`rounded-full px-4 py-3 text-sm font-semibold ${
                  role === item.id
                    ? "bg-ink text-white shadow-sm"
                    : "border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {(isAdmin ? adminActions : userActions).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                >
                  <Icon size={24} className="text-mint" />
                  <h2 className="mt-4 font-semibold text-ink">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl bg-slate-100 p-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Need help?
            </p>
            <p className="mt-3 text-lg font-bold text-ink">
              Choose the option that matches your journey.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                to={isAdmin ? "/admin/login" : "/login/login"}
                onClick={() => setMode("login")}
                className="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink hover:bg-slate-50"
              >
                Login as {isAdmin ? "Admin" : "User"}
                <ArrowRight size={18} />
              </Link>
              <Link
                to={isAdmin ? "/admin/register" : "/login/register"}
                onClick={() => setMode("register")}
                className="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 font-semibold text-ink hover:bg-slate-50"
              >
                Register as {isAdmin ? "Admin" : "User"}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-panel">
          <div className="grid grid-cols-2 rounded-full bg-slate-100 p-1">
            {[
              { id: "login", label: "Login" },
              { id: "register", label: "Register" },
            ].map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setMode(item.id)}
                className={`rounded-full px-4 py-3 text-sm font-semibold capitalize ${
                  mode === item.id
                    ? "bg-white text-ink shadow-sm"
                    : "text-slate-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold text-slate-600">
              {mode === "login"
                ? `Sign in to your ${isAdmin ? "admin" : "user"} account`
                : `Create a new ${isAdmin ? "admin" : "user"} account`}
            </p>
          </div>

          {mode === "register" && isAdmin && (
            <label className="mt-5 block">
              <span className="text-sm font-semibold text-slate-600">
                Admin Access Code
              </span>
              <input
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-mint"
                placeholder="Enter admin access code"
              />
            </label>
          )}

          {mode === "register" && !isAdmin && (
            <label className="mt-5 block">
              <span className="text-sm font-semibold text-slate-600">
                Full Name
              </span>
              <input
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-mint"
                placeholder="Enter your name"
              />
            </label>
          )}

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-slate-600">
              Email or Phone
            </span>
            <input
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-mint"
              placeholder="patient@example.com"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-slate-600">
              Password
            </span>
            <input
              type="password"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-mint"
              placeholder="Enter password"
            />
          </label>

          {mode === "login" && (
            <div className="mt-4 flex justify-between items-center gap-3 text-sm text-slate-600">
              <Link
                to="/forgot-password"
                className="rounded-md px-2 py-1 font-semibold text-slate-600 hover:text-mint"
              >
                Forgot Password?
              </Link>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                {isAdmin ? "Admin Access" : "User Access"}
              </span>
            </div>
          )}

          <Link
            to={isAdmin ? `/admin/${mode}` : `/login/${mode}`}
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-ink px-5 py-3 font-semibold text-white hover:bg-slate-800"
          >
            {mode === "login"
              ? `Login as ${isAdmin ? "Admin" : "User"}`
              : `Create ${isAdmin ? "Admin" : "User"} Account`}
          </Link>
        </form>
      </div>
    </section>
  );
}
