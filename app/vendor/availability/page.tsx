"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const initialAvailability = {
  monday: { enabled: true, start: "09:00", end: "17:00" },
  tuesday: { enabled: true, start: "09:00", end: "17:00" },
  wednesday: { enabled: true, start: "09:00", end: "17:00" },
  thursday: { enabled: true, start: "09:00", end: "17:00" },
  friday: { enabled: true, start: "09:00", end: "17:00" },
  saturday: { enabled: false, start: "", end: "" },
  sunday: { enabled: false, start: "", end: "" },
};

export default function VendorAvailability() {
  const [availability, setAvailability] = useState(initialAvailability);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleAvailabilityChange = (day: string, field: string, value: any) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day as keyof typeof prev], [field]: value },
    }));
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Availability</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Hours</CardTitle>
              <CardDescription>
                Set your weekly availability for bookings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.keys(availability).map((day) => (
                <div key={day} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={day}
                      checked={availability[day as keyof typeof availability].enabled}
                      onCheckedChange={(checked) =>
                        handleAvailabilityChange(day, "enabled", checked)
                      }
                    />
                    <Label htmlFor={day} className="capitalize">
                      {day}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="time"
                      value={availability[day as keyof typeof availability].start}
                      onChange={(e) =>
                        handleAvailabilityChange(day, "start", e.target.value)
                      }
                      disabled={!availability[day as keyof typeof availability].enabled}
                    />
                    <span>-</span>
                    <Input
                      type="time"
                      value={availability[day as keyof typeof availability].end}
                      onChange={(e) =>
                        handleAvailabilityChange(day, "end", e.target.value)
                      }
                      disabled={!availability[day as keyof typeof availability].enabled}
                    />
                  </div>
                </div>
              ))}
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Block Out Dates</CardTitle>
              <CardDescription>
                Select dates you are unavailable.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="multiple"
                selected={[]}
                // onSelect={...}
                className="rounded-md border"
              />
              <Button className="mt-4">Block Selected Dates</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}