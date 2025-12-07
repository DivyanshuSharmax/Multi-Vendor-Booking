'use client';

import { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {
  Home,
  LineChart,
  Package,
  ShoppingCart,
  Users,
  Calendar,
  Bell,
  Search,
  Menu,
  X,
  Settings,
  LogOut,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { href: "/vendor/dashboard", icon: Home, label: "Dashboard" },
  { href: "/vendor/bookings", icon: ShoppingCart, label: "Bookings" },
  { href: "/vendor/services", icon: Package, label: "Services" },
  { href: "/vendor/availability", icon: Calendar, label: "Availability" },
  { href: "/vendor/analytics", icon: LineChart, label: "Analytics" },
  { href: "/vendor/profile", icon: Users, label: "Profile" },
];

export default function VendorLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/30">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white/80 backdrop-blur-lg border-gray-200 shadow-lg"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="h-full glass border-r border-white/20 flex flex-col">
          {/* Logo & User Section */}
          <div className="p-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">BookingHub</span>
            </Link>

            {/* User Profile */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 hover:bg-white/70 transition-all duration-200">
              <Avatar className="h-10 w-10 border-2 border-orange-200">
                <AvatarImage src="/avatars/vendor.png" alt="Vendor" />
                <AvatarFallback className="gradient-primary text-white">V</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">Vendor Name</p>
                <p className="text-xs text-gray-500 truncate">vendor@example.com</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group ${isActive
                      ? 'gradient-primary text-white shadow-lg shadow-orange-500/30'
                      : 'text-gray-700 hover:bg-white/60 hover:shadow-md'
                    }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-orange-600'} transition-colors`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Upgrade Card */}
          <div className="p-4">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-red-500 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <CardHeader className="relative z-10 pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Upgrade to Pro
                </CardTitle>
                <CardDescription className="text-white/90 text-sm">
                  Unlock premium features and grow your business faster
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <Button
                  size="sm"
                  className="w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold shadow-lg"
                >
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Top Header */}
        <header className="sticky top-0 z-30 glass border-b border-white/20 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search bookings, services, customers..."
                  className="w-full pl-10 pr-4 py-2 bg-white/60 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 ml-4">
              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="relative bg-white/60 border-gray-200 hover:bg-white">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-semibold">
                      3
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="p-2 space-y-2">
                    <div className="p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
                      <p className="text-sm font-medium">New booking request</p>
                      <p className="text-xs text-gray-500 mt-1">John Doe requested a haircut for tomorrow</p>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                      <p className="text-sm font-medium">Payment received</p>
                      <p className="text-xs text-gray-500 mt-1">$85.00 from Jane Smith</p>
                    </div>
                    <div className="p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                      <p className="text-sm font-medium">Review posted</p>
                      <p className="text-xs text-gray-500 mt-1">5-star review from Mike Johnson</p>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 bg-white/60 border-gray-200 hover:bg-white">
                    <Avatar className="h-7 w-7">
                      <AvatarImage src="/avatars/vendor.png" alt="Vendor" />
                      <AvatarFallback className="gradient-primary text-white text-xs">V</AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline text-sm font-medium">Vendor</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="animate-in">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}