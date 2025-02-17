import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'LeeVyy',
  description: 'Quà chúc mừng ngày Quốc tế phụ nữ 8/3 của LeeVyy',
  icons: {
    icon: '/logo.png',
  },
  generator: 'tntchat',
  applicationName: 'LeeVyy',
  referrer: 'origin-when-cross-origin',
  keywords: ['LeeVyy', '8/3', 'quoctephunu', 'phunu'],
  authors: [{ name: 'trungtn' }, { name: 'trungtn', url: 'https://tntchat.vercel.app' }],
  creator: 'trungtn',
  publisher: 'VietNam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'LeeVyy',
    description: 'Quà chúc mừng ngày Quốc tế phụ nữ 8/3 của LeeVyy',
    url: 'https://leevyy.vercel.app',
    siteName: 'LeeVyy',
    images: [
      {
        url: '/logo.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/logo.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    videos: [
      {
        url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://acme.com'),
}

export default function Home() {
  return (
    <section>
      LeeVyy
    </section>
  );
}
