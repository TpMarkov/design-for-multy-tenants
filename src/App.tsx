/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  UtensilsCrossed, 
  LayoutDashboard, 
  ShoppingBag, 
  Menu as MenuIcon, 
  DoorOpen, 
  Settings, 
  LogOut, 
  Bell, 
  DollarSign, 
  Clock, 
  TrendingUp,
  Search,
  User,
  MessageSquare,
  Calendar,
  ListTodo,
  Users,
  Building2,
  CreditCard,
  Mail,
  Maximize2,
  Power
} from 'lucide-react';
import { motion } from 'motion/react';

const NavItem = ({ icon: Icon, label, active = false, hasSub = false }: { icon: any, label: string, active?: boolean, hasSub?: boolean }) => (
  <a
    href="#"
    className={`mooli-nav-item ${active ? 'active' : ''}`}
  >
    <Icon className="h-4 w-4" />
    <span className="flex-1">{label}</span>
    {hasSub && <span className="text-[10px] opacity-50">+</span>}
  </a>
);

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#f4f7f6] text-[#444] font-sans selection:bg-green-100">
      {/* Sidebar */}
      <aside className="mooli-sidebar">
        <div className="px-6 py-6 border-b border-slate-50">
          <div className="flex items-center gap-3">
            <div className="bg-[#78b83e] rounded-lg p-2 shadow-md">
              <UtensilsCrossed className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-slate-800 font-extrabold text-lg tracking-tight leading-none">Mooli-Hospital</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-8 border-b border-slate-50">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm">
                <img 
                  src="https://picsum.photos/seed/doctor/100/100" 
                  alt="Profile" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Welcome</p>
              <div className="flex items-center gap-1 cursor-pointer group">
                <p className="text-slate-700 text-sm font-bold truncate group-hover:text-[#78b83e] transition-colors">Dr. Alan Green</p>
                <span className="text-[10px] text-slate-400">▼</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <p className="mooli-section-header">Hospital</p>
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={User} label="Doctors" hasSub />
          <NavItem icon={Calendar} label="Appointment" />
          <NavItem icon={ListTodo} label="Todo List" />
          <NavItem icon={Users} label="Patients" />
          <NavItem icon={Building2} label="Room Allotment" />
          <NavItem icon={Settings} label="Departments" />
          <NavItem icon={CreditCard} label="Payments" />

          <p className="mooli-section-header">Admin</p>
          <NavItem icon={Mail} label="Email" />
          <NavItem icon={MessageSquare} label="Chat" />
          <NavItem icon={Users} label="Our Staffs" />
          <NavItem icon={Settings} label="Contacts" />
          
          <div className="mt-8 px-6 space-y-4">
            <div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                <span>Traffic this Month</span>
                <span>77%</span>
              </div>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 w-[77%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                <span>Server Load</span>
                <span>50%</span>
              </div>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-400 w-[50%]"></div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 flex-shrink-0 sticky top-0 z-20 bg-white border-b border-slate-100">
          <div className="flex items-center gap-6">
            <button className="h-6 w-6 bg-[#78b83e] rounded-full flex items-center justify-center text-white shadow-sm">
              <span className="text-[10px]">◀</span>
            </button>
            <div className="relative">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
              <input 
                type="text" 
                placeholder="Search here..." 
                className="pl-6 pr-4 py-2 bg-transparent border-none text-sm w-64 focus:ring-0 placeholder:text-slate-300"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <button className="hover:text-slate-800">Notes</button>
              <button className="hover:text-slate-800">Create</button>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <button className="relative hover:text-slate-800 transition-colors">
                <Mail className="h-4 w-4" />
                <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 bg-blue-500 text-white text-[8px] font-bold flex items-center justify-center rounded-full border-2 border-white">2</span>
              </button>
              <button className="relative hover:text-slate-800 transition-colors">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 bg-green-500 text-white text-[8px] font-bold flex items-center justify-center rounded-full border-2 border-white">4</span>
              </button>
              <button className="hover:text-slate-800 transition-colors"><MessageSquare className="h-4 w-4" /></button>
              <button className="hover:text-slate-800 transition-colors"><Maximize2 className="h-4 w-4" /></button>
              <button className="hover:text-red-500 transition-colors"><Power className="h-4 w-4" /></button>
            </div>
          </div>
        </header>

        <div className="flex-1 p-8">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800 tracking-tight">Hi, Welcomeback!</h2>
              <p className="text-slate-400 text-xs mt-1">JustDo Dashboard,</p>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Operation</p>
                  <p className="text-lg font-bold text-slate-700 leading-none mt-1">29</p>
                </div>
                <div className="h-8 w-12 bg-green-100 rounded flex items-end p-1 gap-0.5">
                  <div className="w-full bg-green-500 h-[40%]"></div>
                  <div className="w-full bg-green-500 h-[70%]"></div>
                  <div className="w-full bg-green-500 h-[50%]"></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Earning</p>
                  <p className="text-lg font-bold text-slate-700 leading-none mt-1">$981</p>
                </div>
                <div className="h-8 w-12 bg-blue-100 rounded flex items-end p-1 gap-0.5">
                  <div className="w-full bg-blue-500 h-[60%]"></div>
                  <div className="w-full bg-blue-500 h-[40%]"></div>
                  <div className="w-full bg-blue-500 h-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Green Banner */}
          <div className="mooli-green-banner mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <p className="mooli-stat-label">Total Doctors</p>
                <h3 className="mooli-stat-value">1,035</h3>
                <p className="text-[10px] font-bold text-white/50 mt-2">1.78% ▲ Last year</p>
              </div>
              <div>
                <p className="mooli-stat-label">Total Pharmacists</p>
                <h3 className="mooli-stat-value">735</h3>
                <p className="text-[10px] font-bold text-white/50 mt-2">6.78% ▲ Last year</p>
              </div>
              <div>
                <p className="mooli-stat-label">Total Nurses</p>
                <h3 className="mooli-stat-value">2,652</h3>
                <p className="text-[10px] font-bold text-white/50 mt-2">13.78% ▲ Last year</p>
              </div>
              <div>
                <p className="mooli-stat-label">Total Patients</p>
                <h3 className="mooli-stat-value">1,671</h3>
                <p className="text-[10px] font-bold text-white/50 mt-2">5.78% ▲ Last year</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2 mooli-card p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Overview</h3>
                  <p className="text-slate-400 text-[10px] mt-1">Statistics, Predictive Analytics Data Visualization, etc.</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-[10px] font-bold text-slate-400 hover:text-slate-800 px-3 py-1 border border-slate-100 rounded-lg">Day</button>
                  <button className="text-[10px] font-bold text-slate-400 hover:text-slate-800 px-3 py-1 border border-slate-100 rounded-lg">Week</button>
                  <button className="text-[10px] font-bold text-white bg-[#78b83e] px-3 py-1 rounded-lg">Month</button>
                </div>
              </div>
              <div className="h-64 flex items-end gap-2 px-4">
                {/* Mock Chart */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-blue-100/50 rounded-t relative group">
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-blue-400 rounded-t transition-all duration-500" 
                      style={{ height: `${Math.random() * 60 + 20}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mooli-card p-6">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-6">List By Country</h3>
              <div className="space-y-6">
                {[
                  { country: 'USA', val: 80, color: 'bg-green-500' },
                  { country: 'UK', val: 60, color: 'bg-blue-500' },
                  { country: 'India', val: 90, color: 'bg-green-500' },
                  { country: 'UAE', val: 40, color: 'bg-blue-500' },
                  { country: 'Canada', val: 70, color: 'bg-green-500' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-2">
                      <span>{item.country}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Patient Table Style */}
          <div className="mooli-card overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 rounded p-1.5">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Hospital Overview</h3>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <button className="hover:text-slate-800 flex items-center gap-1"><span>📊</span> Report</button>
                <button className="hover:text-slate-800 flex items-center gap-1"><span>📥</span> Export</button>
              </div>
            </div>
            <div className="p-6">
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Search here..." 
                  className="w-full pl-4 pr-20 py-2.5 bg-slate-50 border border-slate-100 rounded-lg text-sm focus:ring-1 focus:ring-[#78b83e] transition-all"
                />
                <button className="absolute right-1 top-1 bottom-1 px-4 bg-[#78b83e] text-white text-xs font-bold rounded-md">Search</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-400 text-[10px] uppercase font-bold tracking-widest border-b border-slate-50">
                      <th className="px-4 py-4">#</th>
                      <th className="px-4 py-4">Patient Name</th>
                      <th className="px-4 py-4">Doctors Team</th>
                      <th className="px-4 py-4">Admit Date</th>
                      <th className="px-4 py-4">Report</th>
                      <th className="px-4 py-4">Ward Number</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { id: 'B-865', name: 'Michelle Schultz', date: '15-06-2020', ward: 'B/102' },
                      { id: 'B-231', name: 'Deborah Cox', date: '15-06-2020', ward: 'B/103' },
                      { id: 'B-781', name: 'Denise Elliott', date: '15-06-2020', ward: 'B/104' },
                      { id: 'B-454', name: 'Rose Coke', date: '15-06-2020', ward: 'B/105' },
                      { id: 'B-988', name: 'Terry Carter', date: '15-06-2020', ward: 'B/106' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/30 transition-all duration-200">
                        <td className="px-4 py-5 text-slate-400 font-medium">{row.id}</td>
                        <td className="px-4 py-5">
                          <div className="flex items-center gap-3">
                            <img 
                              src={`https://picsum.photos/seed/${row.name}/40/40`} 
                              alt={row.name} 
                              className="h-8 w-8 rounded-full border border-slate-100"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <p className="font-bold text-slate-700">{row.name}</p>
                              <p className="text-[10px] text-slate-400">123 6th St. Melbourne, FL 32904</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-5">
                          <div className="flex -space-x-2">
                            {[1, 2, 3].map(j => (
                              <img 
                                key={j}
                                src={`https://picsum.photos/seed/doc${j}/30/30`} 
                                alt="Doc" 
                                className="h-6 w-6 rounded-full border-2 border-white"
                                referrerPolicy="no-referrer"
                              />
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-5 text-slate-500 font-medium">{row.date}</td>
                        <td className="px-4 py-5"><span className="text-red-400">📄</span></td>
                        <td className="px-4 py-5 font-bold text-slate-600">{row.ward}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
