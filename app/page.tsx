'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Shield, Zap, Users, TrendingUp, Search, Star, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const featuredServices = [
  {
    name: 'Modern Haircut & Style',
    vendor: 'Chic Cuts',
    price: '50',
    rating: 4.9,
    image: '/images/featured-1.jpg',
  },
  {
    name: 'Deep Tissue Massage',
    vendor: 'Serenity Spa',
    price: '80',
    rating: 4.8,
    image: '/images/featured-2.jpg',
  },
  {
    name: 'Luxury Manicure',
    vendor: 'Nailed It',
    price: '40',
    rating: 4.9,
    image: '/images/featured-3.jpg',
  },
];

const features = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Find the perfect service or vendor by searching our extensive catalog.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Calendar,
    title: 'Book',
    description: 'Select a date and time that works for you and confirm your appointment in seconds.',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: Sparkles,
    title: 'Enjoy',
    description: "Sit back and relax. We'll handle the reminders and make sure you're ready.",
    gradient: 'from-pink-500 to-rose-500',
  },
];

const stats = [
  { label: 'Active Vendors', value: '500+' },
  { label: 'Happy Customers', value: '10K+' },
  { label: 'Bookings Made', value: '50K+' },
  { label: 'Cities Covered', value: '25+' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-gray-200/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <span className="text-2xl font-bold text-gradient">
                BookingHub
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/search">
                <Button variant="ghost" className="hover:text-orange-600 transition-colors">Search</Button>
              </Link>
              <Link href="/categories">
                <Button variant="ghost" className="hover:text-orange-600 transition-colors">Categories</Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="hover:text-orange-600 transition-colors">About</Button>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/auth/signin">
                <Button variant="ghost" className="hover:text-orange-600 transition-colors">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="gradient-primary text-white shadow-lg hover:shadow-glow transform hover:scale-105 transition-all duration-200">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full mb-6 animate-slide-up">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-600">Trusted by 10,000+ customers</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Find & Book Your Next
            <span className="block text-gradient mt-2">Amazing Experience</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Discover and book appointments with the best local service providers, from hair salons to spas and everything in between.
          </p>

          <div className="flex w-full max-w-2xl mx-auto items-center gap-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
              <Input
                type="search"
                placeholder="Search for services or vendors..."
                className="pl-12 h-14 text-base border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl shadow-lg"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-14 px-8 gradient-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-glow transform hover:scale-105 transition-all duration-200"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>


          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Featured Services</h2>
            <p className="text-lg text-gray-600">Explore our most popular services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{service.name}</h3>
                  <p className="text-gray-600 mb-4">by {service.vendor}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="font-bold text-gray-900">{service.rating}</span>
                    </div>
                    <div className="text-2xl font-bold text-gradient">${service.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-lg text-gray-600">Booking your next appointment is as easy as 1-2-3</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-blue transform group-hover:scale-110 transition-all duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center font-bold text-xl text-gradient">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and vendors on BookingHub today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-50 font-semibold px-8 h-14 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                <Sparkles className="w-5 h-5 mr-2" />
                Sign Up Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/search">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 h-14 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200">
                Browse Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-xl font-bold">BookingHub</span>
              <p className="text-gray-400 mt-2">The easiest way to book services online.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">For Customers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/search" className="hover:text-white transition-colors">Search</Link></li>
                <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">For Vendors</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/auth/signup?role=vendor" className="hover:text-white transition-colors">Become a Vendor</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BookingHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
