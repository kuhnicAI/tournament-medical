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
    <div className="min-h-screen bg-grey-bg flex flex-col">
      {/* Top Bar */}
      <header className="bg-white border-b border-grey-border h-14 flex items-center justify-between px-4 lg:px-6 shrink-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <span className="text-sm font-bold text-navy tracking-tight">
              WORLD RUGBY
            </span>
            <span className="hidden sm:inline text-xs text-gray-400 border-l border-gray-200 pl-2.5">
              Medical Services
            </span>
          </Link>
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2 hover:bg-gray-50 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center">
              <span className="text-xs font-medium text-white">GK</span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-gray-900 leading-tight">
                Dr. Gytis Kandrotas
              </p>
              <p className="text-[11px] text-gray-500 leading-tight">
                Tournament Medical Admin
              </p>
            </div>
            <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
          </button>
          {userMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setUserMenuOpen(false)}
              />
              <div className="absolute right-0 top-full mt-1 w-56 bg-white rounded-lg shadow-lg border border-grey-border py-1.5 z-50">
                <div className="px-3.5 py-2.5 border-b border-grey-border">
                  <p className="text-sm font-medium text-gray-900">
                    Dr. Gytis Kandrotas
                  </p>
                  <p className="text-xs text-gray-500">
                    Tournament Medical Admin
                  </p>
                </div>
                <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                  <User size={15} />
                  Profile
                </button>
                <Link
                  href="/"
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={15} />
                  Sign out
                </Link>
              </div>
            </>
          )}
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Sidebar — Desktop */}
        <aside className="hidden lg:flex w-56 bg-white border-r border-grey-border flex-col shrink-0">
          <nav className="flex-1 py-4 px-3 space-y-0.5">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-navy text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-grey-border">
            <p className="text-[11px] text-gray-300 text-center">
              Powered by Kuhnic AI
            </p>
          </div>
        </aside>

        {/* Sidebar — Mobile Overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/30 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="fixed left-0 top-14 bottom-0 w-64 bg-white border-r border-grey-border flex flex-col z-40 lg:hidden">
              <nav className="flex-1 py-4 px-3 space-y-0.5">
                {navItems.map((item) => {
                  const active = pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        active
                          ? "bg-navy text-white"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <item.icon size={18} />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </aside>
          </>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto pb-20 lg:pb-6">{children}</main>
      </div>

      {/* Bottom Tab Bar — Mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-grey-border flex items-center justify-around h-16 z-30">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
                active ? "text-navy" : "text-gray-400"
              }`}
            >
              <item.icon size={20} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
