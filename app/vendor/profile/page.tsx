'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, User, Mail, Phone, MapPin, Link as LinkIcon, Save, Building2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VendorProfilePage() {
  const [profile, setProfile] = useState({
    name: 'Vendor Name',
    email: 'vendor@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Experienced professional dedicated to providing exceptional service and creating memorable experiences for every client.',
    businessName: 'Premium Services',
    address: '123 Business Street, Suite 100',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    website: 'https://premiumservices.com',
    avatar: '/avatars/vendor.png',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setProfile((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gradient mb-2">Profile Settings</h1>
        <p className="text-gray-600 text-lg">Manage your business profile and public presence</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1 border-0 shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="relative inline-block">
              <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-xl">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback className="gradient-primary text-white text-3xl">
                  {profile.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute bottom-0 right-0 rounded-full gradient-primary text-white shadow-lg"
              >
                <Upload className="h-4 w-4" />
              </Button>
            </div>
            <CardTitle className="mt-4 text-2xl">{profile.name}</CardTitle>
            <CardDescription>{profile.email}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-white">
                  <Building2 className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Business Name</p>
                  <p className="font-semibold text-gray-900">{profile.businessName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-white">
                  <Phone className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold text-gray-900">{profile.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold text-gray-900">{profile.city}, {profile.state}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Edit Forms */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="business" className="space-y-6">
            <TabsList className="bg-white border border-gray-200 p-1">
              <TabsTrigger value="business" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
                Business Info
              </TabsTrigger>
              <TabsTrigger value="personal" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
                Personal Details
              </TabsTrigger>
            </TabsList>

            <TabsContent value="business" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                  <CardDescription>Update your business details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input id="businessName" value={profile.businessName} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" value={profile.phone} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" value={profile.address} onChange={handleInputChange} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" value={profile.city} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" value={profile.state} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input id="zipCode" value={profile.zipCode} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">About Your Business</Label>
                    <Textarea id="bio" value={profile.bio} onChange={handleInputChange} rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website URL</Label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input id="website" value={profile.website} onChange={handleInputChange} className="pl-10" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="personal" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Personal Details</CardTitle>
                  <CardDescription>Manage your personal account information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input id="name" value={profile.name} onChange={handleInputChange} className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input id="email" value={profile.email} onChange={handleInputChange} className="pl-10" type="email" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-3">
            <Button variant="outline" size="lg">
              Cancel
            </Button>
            <Button size="lg" className="gradient-primary text-white shadow-lg hover:shadow-glow gap-2">
              <Save className="h-5 w-5" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}