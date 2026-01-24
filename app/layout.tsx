import type { Metadata } from 'next';
import './globals.css';
import { Header, Sidebar, Footer } from '@/components/layout';
import { AuthGate } from '@/components/auth';

export const metadata: Metadata = {
  title: 'Visa/Mastercard Terror Finance Liability | Intelligence Documentation',
  description: 'Comprehensive analysis of the legal liability of Visa and Mastercard for facilitating terrorist financing through the Iraqi payment card system.',
  keywords: ['Visa', 'Mastercard', 'terrorism financing', 'ATA', 'BSA', 'OFAC', 'Iraqi militias', 'legal liability'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AuthGate>
          <div className="flex flex-1">
            <Sidebar />
            <div className="flex-1 flex flex-col min-h-screen">
              <Header />
              <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10 overflow-auto">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </AuthGate>
      </body>
    </html>
  );
}
