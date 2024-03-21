import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DM_Sans } from "next/font/google";
import { Header } from "@/components/Header/Header";
import "@/app/globals.css";

const DMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Home | Photosnap",
  description:
    "Explore a diverse collection of stunning images captured by talented photographers on our image-sharing platform. From breathtaking landscapes to emotive portraits, our website offers a variety of high-quality photographs to cater to all tastes and interests. Browse through thematic categories, discover new talents, and find the inspiration you seek. Join our community of passionate photographers and share your own masterpieces with the world. Explore, get inspired, and connect through the art of photography here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="7QqrJtTqCYhrwIwGJY9y0ntv6SYvfXDNoD6ctJiGayg"
        />
      </head>

      <body className={DMSans.variable}>
        <Header />

        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
