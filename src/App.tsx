/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  UtensilsCrossed, 
  LayoutDashboard, 
  ShoppingBag, 
  DoorOpen, 
  Settings, 
  LogOut, 
  Bell, 
  DollarSign, 
  Clock, 
  TrendingUp,
  ChevronRight,
  Search,
  Menu,
  User
} from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <a 
    className={`ap-nav-item ${active ? 'active' : ''}`} 
    href="#"
  >
    <Icon className="h-5 w-5" />
    <span className="flex-1">{label}</span>
  </a>
);

const StatCard = ({ icon: Icon, label, value, colorClass }: { icon: any, label: string, value: string, colorClass: string }) => (
  <div className="ap-stat-card">
    <div className={`ap-stat-icon ${colorClass}`}>
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h3 className="text-2xl font-semibold text-[#455a64] leading-none">{value}</h3>
      <p className="text-[#99abb4] text-sm mt-1">{label}</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#eef5f9] font-sans">
      {/* Sidebar */}
      <aside className="ap-sidebar">
        <div className="h-16 flex items-center px-6 bg-[#1e88e5] text-white flex-shrink-0">
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="h-6 w-6" />
            <span className="font-bold text-lg tracking-tight">HospitalityOS</span>
          </div>
        </div>

        <div className="py-6 flex-1">
          <nav className="space-y-1">
            <NavItem icon={LayoutDashboard} label="Dashboard" active />
            <NavItem icon={ShoppingBag} label="Orders" />
            <NavItem icon={UtensilsCrossed} label="Menu" />
            <NavItem icon={DoorOpen} label="Rooms" />
            <NavItem icon={Settings} label="Settings" />
          </nav>
        </div>

        <div className="p-6 border-t border-[#3e4d5c]">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-[#1e88e5] flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">Admin User</p>
              <p className="text-[#a6b7bf] text-xs">Super Admin</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-2 text-sm text-[#a6b7bf] hover:text-white transition-colors">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        <header className="ap-header">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Menu className="h-5 w-5" />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white/10 border-none rounded-full py-1.5 pl-10 pr-4 text-sm text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/20 w-64 transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-[#ef5350] rounded-full border-2 border-[#1e88e5]"></span>
            </button>
            <div className="h-8 w-[1px] bg-white/20 mx-1"></div>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-1.5 rounded-lg transition-colors">
              <div className="text-right hidden sm:block">
                <p className="font-medium text-sm leading-none">Admin User</p>
                <p className="text-white/70 text-[10px] uppercase font-bold mt-1">super admin</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-white text-[#1e88e5] flex items-center justify-center font-bold border-2 border-white/20">
                A
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-medium text-[#455a64]">Dashboard Overview</h2>
              <div className="flex items-center gap-2 text-xs text-[#99abb4] mt-1">
                <span>Home</span>
                <ChevronRight className="h-3 w-3" />
                <span className="text-[#1e88e5]">Dashboard</span>
              </div>
            </div>
            <button className="bg-[#26c6da] hover:bg-[#1ea6b8] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition-all">
              Create New
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <StatCard icon={ShoppingBag} label="Today's Orders" value="3" colorClass="bg-[#1e88e5]" />
            <StatCard icon={DollarSign} label="Today's Revenue" value="$85.00" colorClass="bg-[#26c6da]" />
            <StatCard icon={Clock} label="Active Orders" value="0" colorClass="bg-[#ffb22b]" />
            <StatCard icon={TrendingUp} label="Total Orders" value="3" colorClass="bg-[#7460ee]" />
          </div>

          {/* Recent Orders Table */}
          <div className="ap-card overflow-hidden">
            <div className="px-6 py-5 border-b border-[#f3f3f3] flex items-center justify-between">
              <h3 className="font-semibold text-[#455a64] text-lg">Recent Orders</h3>
              <div className="flex items-center gap-2">
                <button className="text-xs text-[#1e88e5] hover:underline">View All</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[#455a64] font-semibold border-b border-[#f3f3f3]">
                    <th className="px-6 py-4">Room</th>
                    <th className="px-6 py-4">Items</th>
                    <th className="px-6 py-4">Total</th>
                    <th className="px-8 py-5">Status</th>
                    <th className="px-6 py-4">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f3f3f3]">
                  {[
                    { room: 'Unknown', items: 'English breakfast, Egg & Trout Croissants', total: '$50.00', status: 'delivered', time: '03:26 PM', date: 'Dec 24' },
                    { room: 'Unknown', items: 'English breakfast', total: '$30.00', status: 'delivered', time: '03:11 PM', date: 'Dec 24' },
                    { room: 'Unknown', items: 'Banana', total: '$5.00', status: 'delivered', time: '02:58 PM', date: 'Dec 24' },
                  ].map((order, i) => (
                    <tr key={i} className="hover:bg-[#f2f4f8] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#eef5f9] h-8 w-8 rounded-full flex items-center justify-center text-[#1e88e5] font-bold text-[10px]">
                            {order.room[0]}
                          </div>
                          <span className="font-medium text-[#455a64]">Room {order.room}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="max-w-[180px] lg:max-w-xs truncate">
                          <p className="text-[#67757c]">{order.items}</p>
                          <p className="text-[11px] text-[#99abb4] mt-0.5">
                            {order.items.split(',').length} items
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-[#455a64]">{order.total}</span>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`px-2 py-1 rounded text-[11px] font-medium uppercase ${
                          order.status === 'delivered' ? 'bg-[#26c6da] text-white' : 'bg-[#ffb22b] text-white'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-[#455a64] font-medium">{order.time}</p>
                        <p className="text-[11px] text-[#99abb4]">{order.date}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
