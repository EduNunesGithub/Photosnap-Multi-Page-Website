import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Link } from "@/components/Header/Link/Link";
import { Menu } from "@/components/Header/Menu/Menu";
import { Navigation } from "@/components/Header/Navigation/Navigation";
import PNGPlaceholder from "#/PNG/placeholder.png";
import SVGLogo from "#/SVG/logo.svg";

export const Header = () => (
  <header
    className={twMerge(
      "sm:bg-pure-white sm:flex sm:px-6 sm:sticky sm:top-0 sm:w-full sm:z-10",
      "md:px-10",
    )}
  >
    <div
      className={twMerge(
        "sm:gap-6 sm:grid sm:grid-cols-[auto_auto] sm:grid-rows-[auto] sm:items-center sm:justify-between sm:max-w-page-container sm:min-h-18 sm:mx-auto sm:py-6 sm:w-full",
        "md:gap-10 md:grid-cols-[auto_auto_auto] md:py-4",
      )}
    >
      <Link
        aria-label="Back to home page"
        className={twMerge("sm:flex sm:h-fit sm:w-fit", "sm:hover:opacity-100")}
        href="/"
      >
        <Image
          alt="Photosnap"
          blurDataURL={PNGPlaceholder.blurDataURL}
          className="sm:h-4 sm:object-contain sm:w-auto"
          loading="eager"
          height={16}
          placeholder="blur"
          priority
          src={SVGLogo}
          width={140}
        />
      </Link>

      <Navigation />

      <Link
        className={twMerge(
          "sm:bg-pure-black sm:hidden sm:items-center sm:justify-center sm:min-h-10 sm:px-6 sm:text-pure-white sm:w-full",
          "sm:hover:bg-light-grey sm:hover:opacity-100 sm:hover:text-black",
          "md:flex",
        )}
        href="#"
      >
        GET AN INVITE
      </Link>

      <Menu />
    </div>
  </header>
);
