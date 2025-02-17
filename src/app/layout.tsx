import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | LeeVyy',
    default: 'LeeVyy'
  },
  description: "Quà chúc mừng ngày Quốc tế phụ nữ 8/3 của LeeVyy",
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    siteName: 'LeeVyy',
    images: '/logo.png'
  },
  twitter: {
    site: '@trungtn',
    title: '%s | TntChat',
    description: 'Quà chúc mừng ngày Quốc tế phụ nữ 8/3 của LeeVyy',
    images: ['/logo.png']
  },
  metadataBase: new URL('https://acme.com'),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
