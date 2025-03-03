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
    template: 'LeeVyy',
    default: 'LeeVyy'
  },
  description: "Quà chúc mừng ngày Quốc tế phụ nữ 8/3 của LeeVyy",
  icons: {
    icon: '/logo.jpg',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    siteName: 'LeeVyy',
    images: '/logo.jpg'
  },
  twitter: {
    site: '@trungtn',
    title: 'LeeVyy',
    description: 'Quà chúc mừng ngày Quốc tế phụ nữ 8/3 của LeeVyy',
    images: ['/logo.jpg']
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
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TRACKING_GA}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_TRACKING_GA}');
              `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
