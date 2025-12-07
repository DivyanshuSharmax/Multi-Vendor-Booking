"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Hair Salons", slug: "hair-salons", description: "Find the best hair stylists and salons in your area.", image: "/images/hair-salon.jpg" },
  { name: "Nail Salons", slug: "nail-salons", description: "Get your nails done by professional nail artists.", image: "/images/nail-salon.jpg" },
  { name: "Barbershops", slug: "barbershops", description: "Classic and modern cuts from expert barbers.", image: "/images/barbershop.jpg" },
  { name: "Spas & Wellness", slug: "spas-wellness", description: "Relax and rejuvenate with our spa and wellness services.", image: "/images/spa.jpg" },
  { name: "Makeup Artists", slug: "makeup-artists", description: "Look your best for any occasion with our makeup artists.", image: "/images/makeup.jpg" },
  { name: "Tattoo & Piercing", slug: "tattoo-piercing", description: "Express yourself with unique tattoos and piercings.", image: "/images/tattoo.jpg" },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Explore Our Services</h1>
        <p className="mt-2 text-lg text-muted-foreground">Find and book appointments with the best beauty and wellness professionals.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link href={`/categories/${category.slug}`} key={category.slug}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image src={category.image} alt={category.name} layout="fill" objectFit="cover" />
              </div>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{category.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}