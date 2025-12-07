import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
    const body = await req.text();
    const signature = headers().get('stripe-signature');

    if (!signature) {
        return NextResponse.json(
            { error: 'No signature provided' },
            { status: 400 }
        );
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (error: any) {
        console.error('Webhook signature verification failed:', error.message);
        return NextResponse.json(
            { error: 'Invalid signature' },
            { status: 400 }
        );
    }

    try {
        switch (event.type) {
            case 'payment_intent.succeeded': {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;

                // Update payment and booking status
                const payment = await prisma.payment.findUnique({
                    where: { stripePaymentId: paymentIntent.id },
                    include: { booking: true },
                });

                if (payment) {
                    await prisma.$transaction([
                        prisma.payment.update({
                            where: { id: payment.id },
                            data: {
                                status: 'PAID',
                                paymentMethod: paymentIntent.payment_method as string,
                            },
                        }),
                        prisma.booking.update({
                            where: { id: payment.bookingId },
                            data: {
                                status: 'CONFIRMED',
                                paymentStatus: 'PAID',
                                paidAmount: payment.amount,
                            },
                        }),
                    ]);

                    console.log(`Payment succeeded for booking ${payment.bookingId}`);
                }
                break;
            }

            case 'payment_intent.payment_failed': {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;

                const payment = await prisma.payment.findUnique({
                    where: { stripePaymentId: paymentIntent.id },
                });

                if (payment) {
                    await prisma.$transaction([
                        prisma.payment.update({
                            where: { id: payment.id },
                            data: { status: 'FAILED' },
                        }),
                        prisma.booking.update({
                            where: { id: payment.bookingId },
                            data: {
                                status: 'CANCELLED',
                                paymentStatus: 'FAILED',
                                cancellationReason: 'Payment failed',
                            },
                        }),
                    ]);

                    console.log(`Payment failed for booking ${payment.bookingId}`);
                }
                break;
            }

            case 'charge.refunded': {
                const charge = event.data.object as Stripe.Charge;

                if (charge.payment_intent) {
                    const payment = await prisma.payment.findUnique({
                        where: { stripePaymentId: charge.payment_intent as string },
                    });

                    if (payment) {
                        const refundAmount = charge.amount_refunded / 100;

                        await prisma.$transaction([
                            prisma.payment.update({
                                where: { id: payment.id },
                                data: {
                                    status:
                                        refundAmount >= Number(payment.amount)
                                            ? 'REFUNDED'
                                            : 'PARTIALLY_REFUNDED',
                                    refundAmount,
                                },
                            }),
                            prisma.booking.update({
                                where: { id: payment.bookingId },
                                data: {
                                    paymentStatus:
                                        refundAmount >= Number(payment.amount)
                                            ? 'REFUNDED'
                                            : 'PARTIALLY_REFUNDED',
                                },
                            }),
                        ]);

                        console.log(`Refund processed for booking ${payment.bookingId}`);
                    }
                }
                break;
            }

            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error('Webhook handler error:', error);
        return NextResponse.json(
            { error: 'Webhook handler failed' },
            { status: 500 }
        );
    }
}
