import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories | Photosnap",
  description:
    "Explore our inspiring collection of captivating photographs on our 'Stories' page. Browse through a variety of stunning images captured by talented photographers from around the world. From picturesque landscapes to engaging portraits, each image tells a unique story and offers an authentic view of the world through the lenses of our members. With regular updates and constant new additions, our 'Stories' page is an endless source of inspiration for photography enthusiasts and visual art lovers alike. Dive into the stories behind the images and be swept away by the beauty and creativity of photography here.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
