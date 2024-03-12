import { twMerge } from "tailwind-merge";
import { Link } from "@/components/Header/Link/Link";

export const Navigation = () => (
  <nav
    className={twMerge(
      "sm:hidden",
      "md:flex md:flex-wrap md:gap-[1.125rem_2.25rem] md:items-center md:justify-center md:max-w-full md:w-fit",
    )}
  >
    <Link href="/stories">STORIES</Link>

    <Link href="/features">FEATURES</Link>

    <Link href="/pricing">PRICING</Link>
  </nav>
);
