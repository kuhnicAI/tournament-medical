"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock, ShieldCheck, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-grey-bg flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Branding */}
        <div className="text-center mb-8 flex flex-col items-center">
          <Image
            src="/world-rugby-logo.png"
            alt="World Rugby"
            width={80}
            height={133}
            className="mb-3"
            priority
          />
          <p className="text-sm text-gray-500 mt-1">
            Tournament Medical Services
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-sm border border-grey-border p-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Sign in</h2>
            <p className="text-sm text-gray-500 mt-1">
              Access the medical services portal
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
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue="gytis.kandrotas@worldrugby.org"
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    defaultValue="password12345"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-transparent transition pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-navy hover:bg-navy-light text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm cursor-pointer"
            >
              Sign in
            </button>
          </form>

          {/* 2FA Badge */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg py-2.5 px-3">
            <ShieldCheck size={15} className="text-green-badge" />
            <span>Two-factor authentication enabled</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
            <Lock size={12} />
            <span>End-to-end encrypted · HIPAA compliant</span>
          </div>
          <p className="text-[11px] text-gray-300 mt-3">
            Powered by Kuhnic AI
          </p>
        </div>
      </div>
    </div>
  );
}
