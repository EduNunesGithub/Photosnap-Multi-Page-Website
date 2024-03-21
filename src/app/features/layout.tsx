import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Photosnap",
  description:
    "Discover the powerful features that drive our image-sharing platform for photographers. From advanced editing tools to intuitive organization features, our platform is designed to meet the needs of photographers at all levels. Explore a variety of functionalities, including high-speed upload and download, customizable galleries, social media integration, performance analytics, and more. With our user-centered approach and constant innovation, we are committed to providing an exceptional experience for all members of our community. Explore our features today and find out how we can help you take your images to the next level.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
