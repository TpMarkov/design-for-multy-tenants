/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  UtensilsCrossed,
  Eye,
  EyeOff,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="iofrm-layout">
      {/* Left Side: Image/Branding */}
      <div className="iofrm-image-side">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070"
          alt="Luxury Hotel"
          referrerPolicy="no-referrer"
        />
        <div className="iofrm-image-content">
          <div className="mb-8">
            <div className="bg-white/20 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <UtensilsCrossed className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">Elevate Your Guest Experience.</h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Manage your hotel's dining services with precision and style. HospitalityOS provides the tools you need to excel.
            </p>
          </div>
          <div className="flex items-center gap-4">

            <p className="text-sm font-medium text-white/90">Trusted by 500+ hotels worldwide</p>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="iofrm-form-side">
        <div className="iofrm-form-content">
          {/* Mobile Logo */}
          <div className="md:hidden text-center mb-10">
            <div className="iofrm-icon-box mx-auto">
              <UtensilsCrossed className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-[#333]">HospitalityOS</h1>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#333] mb-3">Sign in</h2>
            <p className="text-[#999] text-sm font-medium">Welcome back! Please enter your details.</p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="iofrm-input-group">
              <label className="iofrm-label" htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                required
                placeholder="admin@hotel.com"
                className="iofrm-input"
              />
            </div>

            <div className="iofrm-input-group">
              <label className="iofrm-label" htmlFor="password">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                  placeholder="••••••••"
                  className="iofrm-input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#1e88e5] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <label className="flex items-center gap-2 cursor-pointer text-[#999] hover:text-[#333] transition-colors">
                <input type="checkbox" className="rounded border-[#e1e1e1] text-[#1e88e5] focus:ring-[#1e88e5]" />
                Remember me
              </label>
              <a href="#" className="text-[#1e88e5] hover:text-[#1976d2] transition-colors">Forgot password?</a>
            </div>

            <button
              type="submit"
              id="login-btn"
              className="iofrm-btn group"
            >
              <span className="flex items-center justify-center gap-2">
                Sign in
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>

          <div className="iofrm-divider">
            <p className="text-xs text-[#999] text-center font-medium">
              Demo Credentials: <br className="sm:hidden" />
              <span className="text-[#333] font-bold">admin@hotel.com</span> / <span className="text-[#333] font-bold">password123</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
