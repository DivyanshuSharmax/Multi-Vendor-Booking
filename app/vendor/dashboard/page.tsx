'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Activity, TrendingUp, TrendingDown, ArrowRight, Calendar, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";

const kpiData = [
  {
    title: "Total Revenue",
    value: "$58,245",
    change: "+22.5%",
    trend: "up",
    icon: DollarSign,
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    title: "Total Bookings",
    value: "3,250",
    change: "+15.2%",
    trend: "up",
    icon: Users,
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    title: "Active Services",
    value: "25",
    change: "+5 this month",
    trend: "up",
    icon: CreditCard,
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    title: "Conversion Rate",
    value: "12.5%",
    change: "-1.8%",
    trend: "down",
    icon: Activity,
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50"
  },
];

const recentBookings = [
  {
    customer: { name: "Olivia Martin", email: "olivia.martin@email.com", avatar: "/avatars/01.png" },
    service: "Deep Tissue Massage",
    time: "Today, 2:00 PM",
    amount: "$65.00",
    status: "Confirmed",
  },
  {
    customer: { name: "Jackson Lee", email: "jackson.lee@email.com", avatar: "/avatars/02.png" },
    service: "Yoga Class",
    time: "Today, 4:30 PM",
    amount: "$25.00",
    status: "Confirmed",
  },
  {
    customer: { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", avatar: "/avatars/03.png" },
    service: "Haircut & Style",
    time: "Tomorrow, 10:00 AM",
    amount: "$45.00",
    status: "Pending",
  },
  {
    customer: { name: "William Kim", email: "will@email.com", avatar: "/avatars/04.png" },
    service: "Personal Training",
    time: "Tomorrow, 3:00 PM",
    amount: "$80.00",
    status: "Confirmed",
  },
];

const chartData = [
  { name: 'Mon', revenue: 4200 },
  { name: 'Tue', revenue: 3800 },
  { name: 'Wed', revenue: 5100 },
  { name: 'Thu', revenue: 4600 },
  { name: 'Fri', revenue: 6200 },
  { name: 'Sat', revenue: 7500 },
  { name: 'Sun', revenue: 5800 },
];

export default function VendorDashboard() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-gradient">{greeting}</span>, Vendor! 👋
          </h1>
          <p className="text-gray-600 text-lg">Here's what's happening with your business today.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            View Calendar
          </Button>
          <Button className="gradient-primary text-white shadow-lg hover:shadow-glow gap-2">
            <Clock className="h-4 w-4" />
            New Booking
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          const TrendIcon = kpi.trend === "up" ? TrendingUp : TrendingDown;

          return (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${kpi.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
              <CardHeader className="relative z-10 flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">{kpi.title}</CardTitle>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${kpi.gradient} shadow-lg`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold text-gray-900 mb-1">{kpi.value}</div>
                <div className="flex items-center gap-1 text-sm">
                  <TrendIcon className={`h-4 w-4 ${kpi.trend === "up" ? "text-green-600" : "text-red-600"}`} />
                  <span className={kpi.trend === "up" ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                    {kpi.change}
                  </span>
                  <span className="text-gray-500">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-7">
        {/* Recent Bookings */}
        <Card className="lg:col-span-4 border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Recent Bookings</CardTitle>
                <CardDescription className="mt-1">You have {recentBookings.length} upcoming appointments</CardDescription>
              </div>
              <Button variant="ghost" className="gap-2 text-orange-600 hover:text-orange-700">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-orange-50 hover:to-red-50 transition-all duration-200 border border-gray-100 hover:border-orange-200 hover:shadow-md group"
                >
                  <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                    <AvatarImage src={booking.customer.avatar} alt={booking.customer.name} />
                    <AvatarFallback className="gradient-primary text-white">
                      {booking.customer.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {booking.customer.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">{booking.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-700 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {booking.time}
                    </p>
                    <p className="text-lg font-bold text-gradient">{booking.amount}</p>
                  </div>
                  <Badge
                    className={`${booking.status === 'Confirmed'
                        ? 'bg-green-100 text-green-800 border-green-200'
                        : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                      } border`}
                  >
                    {booking.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Performance Chart */}
        <Card className="lg:col-span-3 border-0 shadow-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl">Weekly Revenue</CardTitle>
            <CardDescription>Your earnings for the past 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gradient">$37,200</span>
                <span className="text-sm text-gray-600">this week</span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600 font-medium">+18.2% from last week</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={chartData}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value) => [`$${value}`, 'Revenue']}
                />
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#dc2626" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
                <Bar
                  dataKey="revenue"
                  fill="url(#colorRevenue)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}