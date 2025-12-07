'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, MoreHorizontal, Archive, Edit, Trash2, DollarSign, Clock, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockServices = [
  {
    id: "SRV001",
    name: "Deep Tissue Massage",
    category: "Wellness",
    duration: "60 min",
    price: "$85.00",
    status: "Active",
    bookings: 145,
    image: "https://images.unsplash.com/photo-1544161515-cfd836b080e3?w=400",
  },
  {
    id: "SRV002",
    name: "Advanced Yoga Class",
    category: "Fitness",
    duration: "90 min",
    price: "$30.00",
    status: "Active",
    bookings: 89,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
  },
  {
    id: "SRV003",
    name: "Modern Haircut & Styling",
    category: "Beauty",
    duration: "45 min",
    price: "$50.00",
    status: "Draft",
    bookings: 0,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400",
  },
  {
    id: "SRV004",
    name: "Personal Training Session",
    category: "Fitness",
    duration: "60 min",
    price: "$75.00",
    status: "Active",
    bookings: 67,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
  },
  {
    id: "SRV005",
    name: "Gel Manicure",
    category: "Beauty",
    duration: "45 min",
    price: "$40.00",
    status: "Archived",
    bookings: 234,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
  },
  {
    id: "SRV006",
    name: "Facial Treatment",
    category: "Wellness",
    duration: "75 min",
    price: "$95.00",
    status: "Active",
    bookings: 112,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
  },
];

export default function VendorServicesPage() {
  const activeServices = mockServices.filter(s => s.status !== 'Archived');
  const archivedServices = mockServices.filter(s => s.status === 'Archived');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gradient mb-2">Your Services</h1>
          <p className="text-gray-600 text-lg">Manage and showcase your service offerings</p>
        </div>
        <Button className="gradient-primary text-white shadow-lg hover:shadow-glow gap-2">
          <PlusCircle className="h-5 w-5" />
          Add New Service
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Services</p>
                <p className="text-3xl font-bold text-blue-600">{activeServices.length}</p>
              </div>
              <div className="p-3 bg-blue-500 rounded-xl">
                <Eye className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Bookings</p>
                <p className="text-3xl font-bold text-green-600">
                  {mockServices.reduce((acc, s) => acc + s.bookings, 0)}
                </p>
              </div>
              <div className="p-3 bg-green-500 rounded-xl">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-pink-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg. Duration</p>
                <p className="text-3xl font-bold text-purple-600">62 min</p>
              </div>
              <div className="p-3 bg-purple-500 rounded-xl">
                <Clock className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Services Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-white border border-gray-200 p-1">
          <TabsTrigger value="all" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
            All Services ({activeServices.length})
          </TabsTrigger>
          <TabsTrigger value="archived" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
            Archived ({archivedServices.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeServices.map((service) => (
              <Card key={service.id} className="group border-0 shadow-lg hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Status Badge */}
                  <Badge className={`absolute top-3 right-3 ${service.status === 'Active'
                      ? 'bg-green-500 text-white border-0'
                      : 'bg-yellow-500 text-white border-0'
                    } shadow-lg`}>
                    {service.status}
                  </Badge>

                  {/* Actions Menu */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" className="h-9 w-9 bg-white/90 hover:bg-white shadow-lg">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem className="gap-2">
                          <Edit className="h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Archive className="h-4 w-4" /> Archive
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 gap-2">
                          <Trash2 className="h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <CardContent className="p-5">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-500">{service.category}</p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-gradient">{service.price}</div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Total Bookings</span>
                      <span className="font-semibold text-gray-900">{service.bookings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="archived">
          {archivedServices.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {archivedServices.map((service) => (
                <Card key={service.id} className="border-0 shadow-md opacity-75 hover:opacity-100 transition-opacity">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover grayscale"
                    />
                    <Badge className="absolute top-3 right-3 bg-gray-500 text-white border-0">
                      Archived
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold text-gray-700 mb-1">{service.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{service.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{service.duration}</span>
                      <span className="text-xl font-bold text-gray-700">{service.price}</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Restore Service
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-0 shadow-md">
              <CardContent className="p-12 text-center">
                <Archive className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No archived services found</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}