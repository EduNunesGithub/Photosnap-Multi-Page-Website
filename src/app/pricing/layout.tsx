import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Photosnap",
  description:
    "Explore our flexible and affordable pricing plans to unlock premium features on our image-sharing platform for photographers. Choose the plan that best suits your needs and budget, whether you're a photography enthusiast, an established professional, or a company in search of high-quality visual content. With options for monthly or annual subscriptions, you'll have unlimited access to a wide range of features, including unlimited image uploads, high-resolution downloads, advanced editing tools, and more. Start today and take your image-sharing experience to the next level.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
