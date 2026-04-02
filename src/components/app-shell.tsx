"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  FileText,
  GitPullRequest,
  Settings,
  LogOut,
  ChevronDown,
  User,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/directory", label: "Directory", icon: Search },
  { href: "/records", label: "Records", icon: FileText },
  { href: "/referrals", label: "Referrals", icon: GitPullRequest },
  { href: "/admin", label: "Admin", icon: Settings },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Top Bar */}
      <header className="bg-surface border-b border-border h-14 flex items-center justify-between px-4 lg:px-6 shrink-0 z-30 lg:pl-56">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-secondary hover:text-heading transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <span className="lg:hidden text-[13px] font-medium text-heading">
            World Rugby · Medical Services
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2.5 hover:bg-bg-hover rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-[#E2E8F0] flex items-center justify-center">
              <span className="text-[10px] font-medium text-secondary">GK</span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-[13px] font-medium text-heading leading-tight">
                Dr. Gytis Kandrotas
              </p>
              <p className="text-[11px] text-muted leading-tight">
                Tournament Medical Admin
              </p>
            </div>
            <ChevronDown size={14} className="text-muted hidden sm:block" />
          </button>
          {userMenuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
              <div className="absolute right-0 top-full mt-1 w-52 bg-surface rounded-lg shadow-lg border border-border py-1 z-50">
                <div className="px-3.5 py-2.5 border-b border-border">
                  <p className="text-[13px] font-medium text-heading">Dr. Gytis Kandrotas</p>
                  <p className="text-[11px] text-muted">Tournament Medical Admin</p>
                </div>
                <button className="w-full flex items-center gap-2 px-3.5 py-2 text-[13px] text-body hover:bg-bg-hover transition-colors cursor-pointer">
                  <User size={14} />
                  Profile
                </button>
                <Link
                  href="/"
                  className="w-full flex items-center gap-2 px-3.5 py-2 text-[13px] text-body hover:bg-bg-hover transition-colors"
                >
                  <LogOut size={14} />
                  Sign out
                </Link>
              </div>
            </>
          )}
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Sidebar — Desktop */}
        <aside className="hidden lg:flex w-56 bg-sidebar fixed top-0 left-0 bottom-0 flex-col z-40">
          <div className="px-4 pt-5 pb-4">
            <p className="text-[13px] font-medium text-white/90">World Rugby</p>
            <p className="text-[11px] text-white/40 mt-0.5">Medical Services</p>
          </div>

          <nav className="flex-1 py-2 px-2.5 space-y-px">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-[7px] rounded-md text-[13px] transition-colors relative ${
                    active
                      ? "bg-white/[0.08] text-white font-medium"
                      : "text-white/50 hover:text-white/70 hover:bg-white/[0.04]"
                  }`}
                >
                  {active && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-3.5 bg-accent rounded-r-full" />
                  )}
                  <item.icon size={16} strokeWidth={1.5} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="px-4 py-4 border-t border-white/[0.06]">
            <p className="text-[10px] text-white/25">
              Powered by Kuhnic AI
            </p>
          </div>
        </aside>

        {/* Sidebar — Mobile */}
        {sidebarOpen && (
          <>
            <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
            <aside className="fixed left-0 top-0 bottom-0 w-56 bg-sidebar flex flex-col z-40 lg:hidden">
              <div className="px-4 pt-5 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-medium text-white/90">World Rugby</p>
                  <p className="text-[11px] text-white/40 mt-0.5">Medical Services</p>
                </div>
                <button onClick={() => setSidebarOpen(false)} className="text-white/40 hover:text-white/70 transition-colors">
                  <X size={16} />
                </button>
              </div>
              <nav className="flex-1 py-2 px-2.5 space-y-px">
                {navItems.map((item) => {
                  const active = pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] transition-colors relative ${
                        active
                          ? "bg-white/[0.08] text-white font-medium"
                          : "text-white/50 hover:text-white/70 hover:bg-white/[0.04]"
                      }`}
                    >
                      {active && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-3.5 bg-accent rounded-r-full" />
                      )}
                      <item.icon size={16} strokeWidth={1.5} />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="px-4 py-4 border-t border-white/[0.06]">
                <p className="text-[10px] text-white/25">Powered by Kuhnic AI</p>
              </div>
            </aside>
          </>
        )}

        <main className="flex-1 overflow-auto pb-20 lg:pb-0 lg:ml-56">{children}</main>
      </div>

      {/* Bottom Tab Bar — Mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border flex items-center justify-around h-16 z-30">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 transition-colors ${
                active ? "text-accent" : "text-muted"
              }`}
            >
              <item.icon size={19} strokeWidth={1.5} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
