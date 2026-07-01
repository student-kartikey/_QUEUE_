import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ShieldCheck, User, Key } from "lucide-react";

export default function AdminAuth() {
  const { authMode } = useParams();
  const initialMode = authMode === "register" ? "register" : "login";
  const [mode, setMode] = useState(initialMode);
  const navigate = useNavigate();
  const isRegister = mode === "register";

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-panel">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-mint">
              Admin Portal
            </p>
            <h1 className="mt-3 text-3xl font-bold text-ink">
              {isRegister ? "Register as an Admin" : "Admin Login"}
            </h1>
            <p className="mt-4 leading-7 text-slate-600">
              Use the admin auth flow to access queue controls, staff
              management, and live queue oversight.
            </p>
          </div>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            <ArrowLeft size={16} /> Back to User Portal
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 rounded-full bg-slate-100 p-1">
          {[
            { id: "login", label: "Admin Login" },
            { id: "register", label: "Admin Register" },
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
            <>
              <label className="block">
                <span className="text-sm font-semibold text-slate-600">
                  Admin Name
                </span>
                <input
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-mint"
                  placeholder="Enter admin name"
                />
              </label>
            </>
          ) : null}

          <label className="block">
            <span className="text-sm font-semibold text-slate-600">
              Email or Phone
            </span>
            <input
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-mint"
              placeholder="admin@example.com"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-600">
              Password
            </span>
            <input
              type="password"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-mint"
              placeholder="Enter password"
            />
          </label>

          {isRegister && (
            <label className="block">
              <span className="text-sm font-semibold text-slate-600">
                Admin Access Code
              </span>
              <input
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-mint"
                placeholder="Enter admin access code"
              />
            </label>
          )}

          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="mt-4 w-full rounded-2xl bg-ink px-5 py-3 text-base font-semibold text-white hover:bg-slate-800"
          >
            {isRegister ? "Create Admin Account" : "Login as Admin"}
          </button>
        </form>

        <div className="mt-8 rounded-3xl bg-slate-50 p-6 text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-mint" />
            <p>
              Admin accounts use a dedicated registration flow and separate
              login panel for direct management access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
