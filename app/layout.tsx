import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Retro Board',
  description: 'A retrospective board for old school lovers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://unpkg.com/nes.css@latest/css/nes.min.css'
          rel='stylesheet'
        />
      </head>
      <body className='flex h-screen flex-col justify-around p-3 font-pressStart  '>
        <Header />
        <main className='flex flex-col flex-auto flex-wrap'>
          <h1 className='text-8xl font-retro'>Retro Board</h1>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
