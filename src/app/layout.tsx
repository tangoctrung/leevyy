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
  description: "Trang web này là của LeeVyy",
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/storagefile-8768a.appspot.com/o/leevyy%2Fleevyy.jpeg?alt=media&token=e151604d-5d1e-49fa-9d41-7c04599a4b8d',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    siteName: 'LeeVyy',
    description: "Trang web này là của LeeVyy",
    images: 'https://firebasestorage.googleapis.com/v0/b/storagefile-8768a.appspot.com/o/leevyy%2Fleevyy.jpeg?alt=media&token=e151604d-5d1e-49fa-9d41-7c04599a4b8d'
  },
  twitter: {
    site: '@trungtn',
    title: 'LeeVyy',
    description: 'Trang web này là của LeeVyy',
    images: ['https://firebasestorage.googleapis.com/v0/b/storagefile-8768a.appspot.com/o/leevyy%2Fleevyy.jpeg?alt=media&token=e151604d-5d1e-49fa-9d41-7c04599a4b8d']
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
