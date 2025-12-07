export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { getAvailableSlots } from '@/lib/scheduling';
import { z } from 'zod';

const availabilitySchema = z.object({
    vendorId: z.string(),
    date: z.string(),
    serviceDuration: z.number().int().positive(),
});

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        const params = {
            vendorId: searchParams.get('vendorId'),
            date: searchParams.get('date'),
            serviceDuration: searchParams.get('serviceDuration'),
        };

        if (!params.vendorId || !params.date || !params.serviceDuration) {
            return NextResponse.json(
                { error: 'Missing required parameters' },
                { status: 400 }
            );
        }

        const validatedData = availabilitySchema.parse({
            vendorId: params.vendorId,
            date: params.date,
            serviceDuration: parseInt(params.serviceDuration),
        });

        const slots = await getAvailableSlots({
            vendorId: validatedData.vendorId,
            date: new Date(validatedData.date),
            serviceDuration: validatedData.serviceDuration,
        });

        return NextResponse.json({ slots });
    } catch (error) {
        console.error('Get availability error:', error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Invalid request parameters', details: error.errors },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to fetch availability' },
            { status: 500 }
        );
    }
}
