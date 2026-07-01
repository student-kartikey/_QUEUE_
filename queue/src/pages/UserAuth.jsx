import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, User, Mail, Key } from "lucide-react";

export default function UserAuth() {
  const { authMode } = useParams();
  const initialMode = authMode === "register" ? "register" : "login";
  const [mode, setMode] = useState(initialMode);
  const navigate = useNavigate();
  const isRegister = mode === "register";

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-panel">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-mint">
              User Portal
            </p>
            <h1 className="mt-3 text-3xl font-bold text-ink">
              {isRegister ? "Register as a User" : "User Login"}
            </h1>
            <p className="mt-4 leading-7 text-slate-600">
              Access your queue account to manage bookings, view live status, and track your token.
            </p>
          </div>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            <ArrowLeft size={16} /> Back to Portal
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 rounded-full bg-slate-100 p-1">
          {[
            { id: "login", label: "User Login" },
            { id: "register", label: "User Register" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setMode(item.id)}
              className={`rounded-full px-4 py-3 text-sm font-semibold ${
                mode === item.id
                  ? "bg-ink text-white shadow-sm"
                  : "text-slate-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <form className="mt-8 space-y-6">
          {isRegister ? (
            <label className="block">
              <span className="text-sm font-semibold text-slate-600">Full Name</span>
              <input
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-mint"
                placeholder="Enter your full name"
              />
            </label>
          ) : null}

          <label className="block">
            <span className="text-sm font-semibold text-slate-600">Email or Phone</span>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3">
              <Mail className="text-slate-400" size={18} />
              <input
                className="w-full border-none bg-transparent outline-none"
                placeholder="you@example.com"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-600">Password</span>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3">
              <Key className="text-slate-400" size={18} />
              <input
                type="password"
                className="w-full border-none bg-transparent outline-none"
                placeholder="Enter password"
              />
            </div>
          </label>

          <button
            type="button"
            onClick={() => navigate("/book")}
            className="mt-4 w-full rounded-2xl bg-ink px-5 py-3 text-base font-semibold text-white hover:bg-slate-800"
          >
            {isRegister ? "Create User Account" : "Login as User"}
          </button>
        </form>

        <div className="mt-8 rounded-3xl bg-slate-50 p-6 text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <User className="text-mint" />
            <p>
              This user auth page is dedicated to queue visitors. It keeps user login and registration separate from admin access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
