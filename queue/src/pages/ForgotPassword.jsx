import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MailCheck } from "lucide-react";

export default function ForgotPassword() {
  const [contact, setContact] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-mint">
          Account Recovery
        </p>
        <h1 className="mt-3 text-3xl font-bold text-ink">
          Reset your password
        </h1>
        <p className="mt-4 leading-7 text-slate-600">
          Enter your registered email or phone number. This frontend demo will
          show a reset confirmation message.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-slate-200 bg-white p-6 shadow-panel"
      >
        <div className="grid h-14 w-14 place-items-center rounded-lg bg-emerald-50 text-mint">
          <MailCheck size={28} />
        </div>

        <label className="mt-6 block">
          <span className="text-sm font-semibold text-slate-600">
            Email or Phone
          </span>
          <input
            value={contact}
            onChange={(event) => {
              setContact(event.target.value);
              setSent(false);
            }}
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-mint"
            placeholder="patient@example.com"
          />
        </label>

        {sent && (
          <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            Password reset instructions sent to{" "}
            {contact || "your registered contact"}.
          </div>
        )}

        <button className="mt-6 w-full rounded-md bg-ink px-5 py-3 font-semibold text-white hover:bg-mint">
          Send Reset Link
        </button>

        <Link
          to="/login"
          className="mt-4 inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-slate-600 hover:bg-emerald-50 hover:text-mint"
        >
          <ArrowLeft size={16} /> Back to Login
        </Link>
      </form>
    </section>
  );
}
