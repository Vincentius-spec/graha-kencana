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
  title: "Graha Kencana | Perumahan Subsidi Bogor",
  description:
    "Cari rumah subsidi Graha Kencana dengan hunian nyaman dan akses strategis. Hubungi marketing untuk informasi harga, promo, dan ketersediaan unit.",
  keywords: [
    "Graha Kencana",
    "Perumahan Graha Kencana",
    "Perumahan subsidi Bogor",
    "Rumah subsidi Bogor",
    "Rumah subsidi Jonggol",
  ],
  openGraph: {
    title: "Graha Kencana | Perumahan Subsidi Bogor",
    description:
      "Temukan hunian Graha Kencana. Hubungi marketing untuk informasi harga, promo, dan ketersediaan unit.",
    url: "https://graha-kencana.vercel.app/",
    siteName: "Perumahan Graha Kencana",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
