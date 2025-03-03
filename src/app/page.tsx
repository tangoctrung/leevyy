import LayoutMain from "@/components/layout";
import Subpage from "@/subpage/2025";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'LeeVyy',
  description: 'Trang web này là của LeeVyy',
  icons: {
    icon: '/logo.jpg',
  },
  generator: 'tntchat',
  applicationName: 'LeeVyy',
  referrer: 'origin-when-cross-origin',
  keywords: ['LeeVyy', '8/3', 'quoctephunu', 'phunu', "sinhnhat", "20/10", "25/10", "tet"],
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
    description: 'Trang web này là của LeeVyy',
    url: 'https://leevyy.vercel.app',
    siteName: 'LeeVyy',
    images: [
      {
        url: '/logo.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/logo.jpg', // Must be an absolute URL
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
    <LayoutMain>
      <Subpage />
    </LayoutMain>
  );
}
