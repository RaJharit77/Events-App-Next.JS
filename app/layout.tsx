import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gestion des Événements',
  description: 'Une application pour gérer les événements et les réservations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          <main className="pt-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
