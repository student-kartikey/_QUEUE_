import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Bell, Info, LayoutDashboard, LogIn, Ticket, UserRoundCog } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Ticket },
  { to: "/login", label: "Login", icon: LogIn },
  { to: "/book", label: "Book Queue", icon: Bell },
  { to: "/status", label: "Live Status", icon: LayoutDashboard },
  { to: "/dashboard", label: "Staff", icon: UserRoundCog },
  { to: "/about", label: "About", icon: Info }
];

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-ink">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white">
              <Ticket size={22} />
            </span>
            <span>
              <span className="block text-base font-bold">Smart Queue</span>
              <span className="block text-xs text-slate-500">Virtual token system</span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition ${
                      isActive ? "bg-ink text-white" : "text-slate-600 hover:bg-slate-100"
                    }`
                  }
                >
                  <Icon size={17} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <NavLink
            to="/admin"
            className="rounded-md bg-mint px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
          >
            Admin
          </NavLink>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
