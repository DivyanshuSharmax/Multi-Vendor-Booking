import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Toaster } from 'sonner';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'BookingHub - Multi-Vendor Booking & Scheduling System',
    description: 'Professional booking and scheduling platform for vendors and customers',
    keywords: ['booking', 'scheduling', 'appointments', 'vendors', 'services'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={outfit.className}>
                <Providers>
                    {children}
                    <Toaster position="top-right" richColors />
                </Providers>
            </body>
        </html>
    );
}
