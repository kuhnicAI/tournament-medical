"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1120] to-[#0F172A] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-[380px]">
        {/* Logo */}
        <div className="text-center mb-8 flex flex-col items-center">
          <Image
            src="/world-rugby-logo.png"
            alt="World Rugby"
            width={64}
            height={106}
            className="mb-3"
            priority
          />
          <p className="text-[12px] text-white/30 mt-1">
            Tournament Medical Services
          </p>
        </div>

        {/* Card */}
        <div className="bg-surface rounded-lg shadow-2xl shadow-black/25 p-7">
          <div className="mb-5">
            <h2 className="text-[15px] font-medium text-heading">Welcome back</h2>
            <p className="text-[13px] text-secondary mt-1">
              Sign in to the medical portal
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
                <label htmlFor="email" className="block text-[12px] font-medium text-secondary mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue="gytis.kandrotas@worldrugby.org"
                  className="w-full px-3 py-2.5 bg-bg border border-border rounded-lg text-[13px] text-heading focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-[12px] font-medium text-secondary mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    defaultValue="password12345"
                    className="w-full px-3 py-2.5 bg-bg border border-border rounded-lg text-[13px] text-heading focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-secondary transition-colors"
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-5 bg-accent hover:bg-accent-hover text-white font-medium py-2.5 rounded-lg transition-colors text-[13px] cursor-pointer"
            >
              Sign in
            </button>
          </form>

          <div className="mt-5 flex items-center justify-center gap-1.5 text-[11px] text-muted">
            <ShieldCheck size={13} className="text-muted" />
            <span>Secured with two-factor authentication</span>
          </div>
        </div>

        <p className="text-[10px] text-white/20 text-center mt-8">
          Powered by Kuhnic AI
        </p>
      </div>
    </div>
  );
}
