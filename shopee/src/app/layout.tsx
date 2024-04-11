'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { ContextGeral } from '@/contexts/ContextGeral';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ContextGeral>
      <html lang="en">
        <body className={`bg-black ${inter.className}`} suppressHydrationWarning={true}>
          {children}
        </body>
      </html>
    </ContextGeral>
  );
};
