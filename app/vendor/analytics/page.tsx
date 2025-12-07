"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const revenueData = [
  { name: 'Jan', revenue: 4000, bookings: 24 },
  { name: 'Feb', revenue: 3000, bookings: 18 },
  { name: 'Mar', revenue: 5000, bookings: 32 },
  { name: 'Apr', revenue: 4500, bookings: 28 },
  { name: 'May', revenue: 6000, bookings: 45 },
  { name: 'Jun', revenue: 5500, bookings: 40 },
  { name: 'Jul', revenue: 6500, bookings: 50 },
  { name: 'Aug', revenue: 7000, bookings: 55 },
  { name: 'Sep', revenue: 6800, bookings: 52 },
  { name: 'Oct', revenue: 7200, bookings: 60 },
  { name: 'Nov', revenue: 7500, bookings: 65 },
  { name: 'Dec', revenue: 8000, bookings: 70 },
];

const topServices = [
  { service: 'Haircut', bookings: 150, revenue: 7500 },
  { service: 'Manicure', bookings: 120, revenue: 4200 },
  { service: 'Massage', bookings: 90, revenue: 7200 },
  { service: 'Facial', bookings: 80, revenue: 5200 },
  { service: 'Pedicure', bookings: 110, revenue: 4950 },
];

const demographicsData = [
  { name: '18-24', value: 400 },
  { name: '25-34', value: 300 },
  { name: '35-44', value: 300 },
  { name: '45+', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function VendorAnalytics() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$75,150</p>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+12,234</p>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Avg. Booking Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$61.25</p>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">5.6%</p>
            <p className="text-xs text-muted-foreground">+1.2% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue & Bookings</CardTitle>
              <CardDescription>Monthly performance overview.</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue" />
                  <Bar yAxisId="right" dataKey="bookings" fill="#82ca9d" name="Bookings" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Services</CardTitle>
              <CardDescription>Based on booking volume and revenue.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Bookings</TableHead>
                    <TableHead>Revenue</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topServices.map((service, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? 'bg-muted' : ''}>
                      <TableCell>{service.service}</TableCell>
                      <TableCell>{service.bookings}</TableCell>
                      <TableCell>${service.revenue.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-full">
          <Card>
            <CardHeader>
              <CardTitle>Customer Demographics</CardTitle>
              <CardDescription>Age distribution of your customers.</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={demographicsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                    {demographicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}