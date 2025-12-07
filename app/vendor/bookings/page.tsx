"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, DollarSign, User, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const bookings = [
  {
    id: "BK001",
    customer: { name: "John Doe", email: "john@example.com", avatar: "/avatars/01.png" },
    service: "Haircut & Style",
    date: "2024-12-05",
    time: "10:00 AM",
    status: "upcoming",
    amount: 50,
  },
  {
    id: "BK002",
    customer: { name: "Jane Smith", email: "jane@example.com", avatar: "/avatars/02.png" },
    service: "Manicure",
    date: "2024-12-06",
    time: "2:30 PM",
    status: "upcoming",
    amount: 35,
  },
  {
    id: "BK003",
    customer: { name: "Peter Jones", email: "peter@example.com", avatar: "/avatars/03.png" },
    service: "Deep Tissue Massage",
    date: "2024-11-20",
    time: "11:00 AM",
    status: "completed",
    amount: 80,
  },
  {
    id: "BK004",
    customer: { name: "Mary Johnson", email: "mary@example.com", avatar: "/avatars/04.png" },
    service: "Facial Treatment",
    date: "2024-12-08",
    time: "3:00 PM",
    status: "upcoming",
    amount: 65,
  },
  {
    id: "BK005",
    customer: { name: "David Williams", email: "david@example.com", avatar: "/avatars/05.png" },
    service: "Pedicure",
    date: "2024-11-15",
    time: "1:00 PM",
    status: "cancelled",
    amount: 45,
  },
];

export default function VendorBookings() {
  const upcomingBookings = bookings.filter((b) => b.status === "upcoming");
  const completedBookings = bookings.filter((b) => b.status === "completed");
  const cancelledBookings = bookings.filter((b) => b.status === "cancelled");

  const renderBookingCard = (booking: typeof bookings[0]) => {
    const statusConfig = {
      upcoming: { icon: AlertCircle, color: "blue", bg: "from-blue-50 to-cyan-50", badge: "bg-blue-500" },
      completed: { icon: CheckCircle, color: "green", bg: "from-green-50 to-emerald-50", badge: "bg-green-500" },
      cancelled: { icon: XCircle, color: "red", bg: "from-red-50 to-pink-50", badge: "bg-red-500" },
    };

    const config = statusConfig[booking.status as keyof typeof statusConfig];
    const StatusIcon = config.icon;

    return (
      <Card key={booking.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-14 w-14 border-2 border-white shadow-md">
              <AvatarImage src={booking.customer.avatar} />
              <AvatarFallback className="gradient-primary text-white">
                {booking.customer.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{booking.customer.name}</h3>
                  <p className="text-sm text-gray-500">{booking.customer.email}</p>
                </div>
                <Badge className={`${config.badge} text-white border-0 capitalize`}>
                  {booking.status}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="h-4 w-4" />
                  <span>{booking.service}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-semibold">${booking.amount}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{booking.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{booking.time}</span>
                </div>
              </div>

              {booking.status === "upcoming" && (
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    Reschedule
                  </Button>
                  <Button size="sm" className="flex-1 gradient-primary text-white">
                    Confirm
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gradient mb-2">Bookings</h1>
        <p className="text-gray-600 text-lg">Manage your appointments and schedule</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Upcoming</p>
                <p className="text-3xl font-bold text-blue-600">{upcomingBookings.length}</p>
              </div>
              <AlertCircle className="h-10 w-10 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-3xl font-bold text-green-600">{completedBookings.length}</p>
              </div>
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md bg-gradient-to-br from-red-50 to-pink-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Cancelled</p>
                <p className="text-3xl font-bold text-red-600">{cancelledBookings.length}</p>
              </div>
              <XCircle className="h-10 w-10 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList className="bg-white border border-gray-200 p-1">
          <TabsTrigger value="upcoming" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
            Upcoming ({upcomingBookings.length})
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
            Completed ({completedBookings.length})
          </TabsTrigger>
          <TabsTrigger value="cancelled" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
            Cancelled ({cancelledBookings.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingBookings.map(renderBookingCard)}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedBookings.map(renderBookingCard)}
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-4">
          {cancelledBookings.map(renderBookingCard)}
        </TabsContent>
      </Tabs>
    </div>
  );
}