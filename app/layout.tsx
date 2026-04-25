import './globals.css';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';

export const metadata: Metadata = {
  title: '3D Horizon Dragon',
  description: 'Beta 3D toy shop with interactive preview and product catalog.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
