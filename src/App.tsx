/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingBag,
  UtensilsCrossed,
  DoorOpen,
  Settings,
  LogOut,
  Search,
  Bell,
  User,
  Mail,
  ShieldCheck,
  Building2,
  Hash,
  Check,
  ChevronRight,
  Menu,
  X,
  Globe,
  Lock,
  CreditCard,
  Users
} from 'lucide-react';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('General');

  const tabs = ['General', 'Security', 'Billing', 'Notifications', 'Team'];

  return (
    <main className="untitled-layout">
      {/* Sidebar */}
      <aside className={`untitled-sidebar fixed lg:relative z-50 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-[#7f56d9] rounded-lg flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">HospitalityOS</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/60 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-4">
          <a href="#" className="untitled-nav-item">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </a>
          <a href="#" className="untitled-nav-item">
            <ShoppingBag className="w-5 h-5" />
            Orders
          </a>
          <a href="#" className="untitled-nav-item">
            <UtensilsCrossed className="w-5 h-5" />
            Menu
          </a>
          <a href="#" className="untitled-nav-item">
            <DoorOpen className="w-5 h-5" />
            Rooms
          </a>
          <a href="#" className="untitled-nav-item active">
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </nav>

        <div className="p-6 border-t border-[#1d2939]">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-[#7f56d9] flex items-center justify-center text-white font-bold">A</div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold truncate">Admin User</p>
              <p className="text-[#98a2b3] text-xs">super admin</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-2 text-sm text-[#98a2b3] hover:text-white transition-colors">
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="untitled-main">
        {/* Header */}
        <header className="untitled-header">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-[#667085] hover:text-[#101828]">
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#667085]" />
              <input 
                type="text" 
                placeholder="Search settings..." 
                className="pl-10 pr-4 py-2 bg-[#f9fafb] border border-[#d0d5dd] rounded-lg text-sm focus:ring-4 focus:ring-[#f4ebff] outline-none w-64 transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#667085] hover:text-[#101828] relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#f04438] rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-[#f2f4f7] border border-[#eaecf0] flex items-center justify-center text-xs font-bold text-[#344054]">
              AU
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="untitled-content">
          <div className="untitled-section-header">
            <h1 className="untitled-title">Settings</h1>
            <p className="untitled-description">Manage your account settings and preferences.</p>
          </div>

          <div className="untitled-tabs">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`untitled-tab ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {/* Profile Section */}
            <div className="untitled-card">
              <div className="p-8 border-b border-[#eaecf0]">
                <h2 className="text-lg font-semibold text-[#101828]">Personal Information</h2>
                <p className="text-sm text-[#667085]">Update your photo and personal details here.</p>
              </div>
              
              <div className="untitled-row">
                <div className="untitled-label-col">
                  <label className="untitled-label">Full Name</label>
                </div>
                <div className="untitled-input-col">
                  <input type="text" defaultValue="Admin User" className="untitled-input" />
                </div>
              </div>

              <div className="untitled-row">
                <div className="untitled-label-col">
                  <label className="untitled-label">Email Address</label>
                </div>
                <div className="untitled-input-col">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#667085]" />
                    <input type="email" defaultValue="admin@hotel.com" className="untitled-input pl-10" />
                  </div>
                </div>
              </div>

              <div className="untitled-row">
                <div className="untitled-label-col">
                  <label className="untitled-label">Role</label>
                  <p className="untitled-sublabel">Your current access level.</p>
                </div>
                <div className="untitled-input-col">
                  <div className="flex items-center gap-2">
                    <span className="untitled-badge">
                      <ShieldCheck className="w-3 h-3 mr-1" />
                      Super Admin
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#f9fafb] flex justify-end gap-3">
                <button className="untitled-btn-secondary">Cancel</button>
                <button className="untitled-btn-primary">Save changes</button>
              </div>
            </div>

            {/* Property Section */}
            <div className="untitled-card">
              <div className="p-8 border-b border-[#eaecf0]">
                <h2 className="text-lg font-semibold text-[#101828]">Property Information</h2>
                <p className="text-sm text-[#667085]">Details about your hospitality establishment.</p>
              </div>

              <div className="untitled-row">
                <div className="untitled-label-col">
                  <label className="untitled-label">Property ID</label>
                  <p className="untitled-sublabel">Unique identifier for your property.</p>
                </div>
                <div className="untitled-input-col">
                  <div className="flex items-center gap-3">
                    <code className="px-3 py-1.5 bg-[#f2f4f7] rounded-lg text-sm font-mono text-[#344054] border border-[#d0d5dd]">
                      69db3cb18780297c8095ec30
                    </code>
                    <button className="text-[#7f56d9] text-sm font-semibold hover:underline">Copy ID</button>
                  </div>
                </div>
              </div>

              <div className="untitled-row">
                <div className="untitled-label-col">
                  <label className="untitled-label">Public Status</label>
                  <p className="untitled-sublabel">Allow guests to find your property.</p>
                </div>
                <div className="untitled-input-col">
                  <button className="untitled-toggle active">
                    <span className="untitled-toggle-dot"></span>
                  </button>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="untitled-card border-red-200">
              <div className="p-8 border-b border-red-100 bg-red-50/50">
                <h2 className="text-lg font-semibold text-red-900">Danger Zone</h2>
                <p className="text-sm text-red-600">Actions that cannot be undone.</p>
              </div>
              <div className="p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[#101828]">Sign out from all devices</h3>
                  <p className="text-sm text-[#667085]">This will end your current session and all other active sessions.</p>
                </div>
                <button className="px-4 py-2 bg-white border border-red-300 text-red-700 rounded-lg font-semibold text-sm shadow-sm hover:bg-red-50 transition-all">
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
