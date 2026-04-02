"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#162036] flex flex-col items-center justify-center px-4">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/[0.06] rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[400px] relative z-10">
        {/* Logo */}
        <div className="text-center mb-8 flex flex-col items-center">
          <Image
            src="/world-rugby-logo.png"
            alt="World Rugby"
            width={72}
            height={120}
            className="mb-4"
            priority
          />
          <p className="text-sm text-slate-400 font-medium tracking-wide">
            Tournament Medical Services
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 p-8 border border-white/20">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-text">Welcome back</h2>
            <p className="text-sm text-text-muted mt-1">
              Sign in to access the medical portal
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/dashboard";
            }}
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] font-medium text-text-secondary mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue="gytis.kandrotas@worldrugby.org"
                  className="w-full px-3.5 py-2.5 bg-bg border border-border rounded-xl text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-150"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-[13px] font-medium text-text-secondary mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    defaultValue="password12345"
                    className="w-full px-3.5 py-2.5 bg-bg border border-border rounded-xl text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-150 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-accent hover:bg-accent-hover text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-150 text-sm cursor-pointer shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]"
            >
              Sign in
            </button>
          </form>

          {/* 2FA Badge */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-text-muted">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>Secured with two-factor authentication</span>
          </div>
        </div>

        {/* Footer */}
        <p className="text-[11px] text-slate-500 text-center mt-8">
          Powered by Kuhnic AI
        </p>
      </div>
    </div>
  );
}
