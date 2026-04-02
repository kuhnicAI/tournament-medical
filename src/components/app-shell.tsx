"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <header className="bg-surface border-b border-border h-14 flex items-center justify-between px-4 lg:px-6 shrink-0 z-30 lg:pl-60">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-text-muted hover:text-text transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="lg:hidden flex items-center gap-2">
            <Image
              src="/world-rugby-logo.png"
              alt="World Rugby"
              width={24}
              height={40}
              className="shrink-0"
            />
            <span className="text-sm font-semibold text-text">
              Medical Services
            </span>
          </div>
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2.5 hover:bg-bg-subtle rounded-lg px-2.5 py-1.5 transition-all duration-150 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-blue-400 flex items-center justify-center ring-2 ring-surface shadow-sm">
              <span className="text-[11px] font-semibold text-white">GK</span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-text leading-tight">
                Dr. Gytis Kandrotas
              </p>
              <p className="text-[11px] text-text-muted leading-tight">
                Tournament Medical Admin
              </p>
            </div>
            <ChevronDown size={14} className="text-text-muted hidden sm:block" />
          </button>
          {userMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setUserMenuOpen(false)}
              />
              <div className="absolute right-0 top-full mt-1.5 w-56 bg-surface rounded-xl shadow-xl border border-border py-1 z-50">
                <div className="px-4 py-3 border-b border-border">
                  <p className="text-sm font-medium text-text">
                    Dr. Gytis Kandrotas
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">
                    Tournament Medical Admin
                  </p>
                </div>
                <div className="py-1">
                  <button className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-text-secondary hover:bg-bg-subtle transition-colors cursor-pointer">
                    <User size={15} />
                    Profile
                  </button>
                  <Link
                    href="/"
                    className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={15} />
                    Sign out
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Sidebar — Desktop */}
        <aside className="hidden lg:flex w-60 bg-sidebar fixed top-0 left-0 bottom-0 flex-col z-40">
          {/* Wordmark */}
          <div className="px-5 pt-5 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <Image
                src="/world-rugby-logo.png"
                alt="World Rugby"
                width={32}
                height={53}
                className="shrink-0"
              />
              <div>
                <p className="text-sm font-semibold text-white leading-tight">
                  World Rugby
                </p>
                <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                  Medical Services
                </p>
              </div>
            </div>
          </div>

          <nav className="flex-1 py-3 px-3 space-y-0.5">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 relative ${
                    active
                      ? "bg-white/[0.1] text-white"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]"
                  }`}
                >
                  {active && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-accent rounded-r-full" />
                  )}
                  <item.icon size={17} strokeWidth={active ? 2 : 1.5} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="px-5 py-4 border-t border-white/[0.08]">
            <p className="text-[10px] text-slate-500 tracking-wide">
              Powered by <span className="text-slate-400">Kuhnic AI</span>
            </p>
          </div>
        </aside>

        {/* Sidebar — Mobile Overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="fixed left-0 top-0 bottom-0 w-64 bg-sidebar flex flex-col z-40 lg:hidden">
              <div className="px-5 pt-5 pb-4 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/world-rugby-logo.png"
                    alt="World Rugby"
                    width={28}
                    height={47}
                    className="shrink-0"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">
                      World Rugby
                    </p>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                      Medical Services
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex-1 py-3 px-3 space-y-0.5">
                {navItems.map((item) => {
                  const active = pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150 relative ${
                        active
                          ? "bg-white/[0.1] text-white"
                          : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]"
                      }`}
                    >
                      {active && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-accent rounded-r-full" />
                      )}
                      <item.icon size={17} strokeWidth={active ? 2 : 1.5} />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="px-5 py-4 border-t border-white/[0.08]">
                <p className="text-[10px] text-slate-500 tracking-wide">
                  Powered by <span className="text-slate-400">Kuhnic AI</span>
                </p>
              </div>
            </aside>
          </>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto pb-20 lg:pb-0 lg:ml-60">
          {children}
        </main>
      </div>

      {/* Bottom Tab Bar — Mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-xl border-t border-border flex items-center justify-around h-16 z-30">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 transition-all duration-150 ${
                active ? "text-accent" : "text-text-muted"
              }`}
            >
              <item.icon size={20} strokeWidth={active ? 2 : 1.5} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
