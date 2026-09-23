import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'JRVIS Aerospace | India\'s Premier Aerospace & Defense Showcase',
  description:
    'An interactive digital showcase of India\'s aerospace capability: complete verified catalogs of Indian aircraft, satellites, and launch vehicles with interactive 3D models and real engineering specifications.',
  keywords: [
    'Indian Aerospace',
    'ISRO',
    'HAL Tejas',
    'Chandrayaan-3',
    'LVM3',
    'PSLV',
    'Mangalyaan',
    'Aditya-L1',
    'HAL Prachand',
    'AMCA',
    'Gaganyaan',
    'Indian Space Research Organisation',
  ],
  authors: [{ name: 'JRVIS Aerospace Engineering Group' }],
  openGraph: {
    title: 'JRVIS Aerospace | India\'s Aerospace, Reimagined',
    description:
      'Explore India\'s aircraft, satellites, and launch vehicles in interactive 3D with authentic flight specifications.',
    siteName: 'JRVIS Aerospace',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#030508] text-slate-200 antialiased min-h-screen flex flex-col selection:bg-[#FF6B00] selection:text-black">
        {/* Custom Aerospace Targeting Reticle Cursor */}
        <CustomCursor />

        {/* Global Sticky Glassmorphism Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 pt-16">{children}</main>

        {/* Global Command Center Footer */}
        <Footer />
      </body>
    </html>
  );
}
