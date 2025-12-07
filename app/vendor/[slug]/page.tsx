'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VendorPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">{params.slug.replace(/-/g, ' ')}</h1>
        <p className="mt-2 text-lg text-muted-foreground">Book your appointment with us.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We are a premier service provider, dedicated to offering the best experience to our clients.</p>
        </CardContent>
      </Card>
      <div className="mt-8 text-center">
        <Button size="lg">Book Now</Button>
      </div>
    </div>
  );
}