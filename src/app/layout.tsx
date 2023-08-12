import type { Metadata } from 'next';

import { patrickHandSC } from '@/styles/fonts';

import './globals.css';

export const metadata: Metadata = {
  alternates: {
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  authors: [
    { name: 'Nacho' },
    {
      name: 'Ignacio Bockl',
      url: 'https://github.com/ignaciobockl/next13_rick-and-morty',
    },
  ],
  description: 'Information about people, locations and episodes of the series',
  keywords: [
    'rick and morty',
    'rick',
    'morty',
    'locations',
    'characters',
    'episodes',
  ],
  title: 'Rick And Morty',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={patrickHandSC.className}>{children}</body>
    </html>
  );
}
