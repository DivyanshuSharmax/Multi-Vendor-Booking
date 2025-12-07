"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const vendors = [
  { name: "Chic Cuts", slug: "chic-cuts", image: "/images/vendor-1.jpg", rating: 4.5, reviews: 120, location: "New York, NY" },
  { name: "Serenity Spa", slug: "serenity-spa", image: "/images/vendor-2.jpg", rating: 4.8, reviews: 250, location: "Los Angeles, CA" },
  { name: "Nailed It", slug: "nailed-it", image: "/images/vendor-3.jpg", rating: 4.2, reviews: 80, location: "Chicago, IL" },
  { name: "The Dapper Den", slug: "the-dapper-den", image: "/images/vendor-4.jpg", rating: 4.9, reviews: 300, location: "Houston, TX" },
  { name: "Glamour House", slug: "glamour-house", image: "/images/vendor-5.jpg", rating: 4.7, reviews: 150, location: "Phoenix, AZ" },
  { name: "The Men's Room", slug: "the-mens-room", image: "/images/vendor-6.jpg", rating: 4.6, reviews: 180, location: "Philadelphia, PA" },
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{categoryName}</h1>
        <p className="mt-2 text-lg text-muted-foreground">Browse vendors in the {categoryName} category.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <h2 className="text-2xl font-semibold mb-4">Filters</h2>
          <div className="space-y-4">
            <Input placeholder="Search by name..." />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="reviews">Reviews</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </aside>

        <main className="w-full md:w-3/4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {vendors.map((vendor) => (
              <Link href={`/vendor/${vendor.slug}`} key={vendor.slug}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 w-full">
                    <Image src={vendor.image} alt={vendor.name} layout="fill" objectFit="cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{vendor.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{vendor.rating}</span>
                      <span className="ml-2 text-muted-foreground">({vendor.reviews} reviews)</span>
                    </div>
                    <p className="text-muted-foreground">{vendor.location}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}