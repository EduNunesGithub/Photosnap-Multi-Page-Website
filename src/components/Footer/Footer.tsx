import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";
import { twMerge } from "tailwind-merge";
import PNGPlaceholder from "#/PNG/placeholder.png";
import SVGLogo from "#/SVG/logo.svg";

export const Footer = () => (
  <footer
    className={twMerge(
      "sm:bg-pure-black sm:flex sm:px-8 sm:py-14 sm:w-full",
      "md:px-10 md:py-16",
    )}
  >
    <div
      className={twMerge(
        "sm:grid sm:grid-cols-1 sm:grid-rows-[auto] sm:justify-items-center sm:max-w-page-container sm:mx-auto sm:w-full",
        "md:grid-cols-[1fr_auto]",
        "lg:grid-cols-[auto_1fr_auto]",
      )}
    >
      <div
        className={twMerge("sm:hidden", "md:flex md:order-4", "lg:hidden")}
      />

      <Image
        alt="Photosnap"
        blurDataURL={PNGPlaceholder.blurDataURL}
        className={twMerge(
          "sm:h-4 sm:invert sm:mb-8 sm:object-contain sm:w-auto",
          "md:justify-self-start md:order-1 md:self-start",
          "lg:mb-0 lg:mr-28",
        )}
        loading="eager"
        height={16}
        placeholder="blur"
        priority
        src={SVGLogo}
        width={140}
      />

      <ul
        className={twMerge(
          "sm:flex sm:flex-shrink sm:gap-3 sm:items-center sm:justify-center sm:max-w-full sm:mb-12 sm:text-pure-white sm:w-fit",
          "md:justify-self-start md:mb-0 md:order-5",
          "lg:mr-28 lg:order-4 lg:self-end",
        )}
      >
        <li className="sm:flex sm:h-5 sm:w-5">
          <IoLogoFacebook className="sm:h-full sm:w-full" />
        </li>

        <li className="sm:flex sm:h-5 sm:w-5">
          <IoLogoYoutube className="sm:h-full sm:w-full" />
        </li>

        <li className="sm:flex sm:h-5 sm:w-5">
          <IoLogoTwitter className="sm:h-full sm:w-full" />
        </li>

        <li className="sm:flex sm:h-5 sm:w-5">
          <IoLogoPinterest className="sm:h-full sm:w-full" />
        </li>

        <li className="sm:flex sm:h-5 sm:w-5">
          <IoLogoInstagram className="sm:h-full sm:w-full" />
        </li>
      </ul>

      <nav
        className={twMerge(
          "sm:flex sm:flex-col sm:flex-wrap sm:gap-5 sm:items-center sm:justify-center sm:mb-30 sm:text-H4 sm:text-pure-white sm:uppercase sm:w-full",
          "sm:[&_a]:duration-standard sm:[&_a]:ease-standard sm:[&_a]:transition-opacity",
          "sm:hover:[&_a]:opacity-30",
          "md:flex-row md:gap-6 md:justify-start md:mb-18 md:order-3",
          "lg:flex-col lg:gap-5 lg:items-start lg:mb-0 lg:order-2 lg:row-span-2",
        )}
      >
        <Link
          className="sm:text-H4"
          href="/"
        >
          Home
        </Link>

        <Link
          className="sm:text-H4"
          href="/stories"
        >
          Stories
        </Link>

        <Link
          className="sm:text-H4"
          href="/features"
        >
          Features
        </Link>

        <Link
          className="sm:text-H4"
          href="/pricing"
        >
          Pricing
        </Link>
      </nav>

      <Link
        className={twMerge(
          "text-H4 sm:decoration-transparent sm:flex sm:gap-4 sm:items-center sm:justify-between sm:mb-8 sm:text-pure-white sm:underline sm:w-fit",
          "sm:hover:decoration-inherit",
          "md:justify-self-end md:order-2 md:self-start",
          "lg:mb-0 lg:order-3",
        )}
        href="/"
      >
        GET AN INVITE
        <MoveRight className="sm:flex-shrink-0 sm:h-4 sm:stroke-[0.0625rem] sm:w-4" />
      </Link>

      <div
        className={twMerge(
          "sm:flex sm:justify-center sm:text-body sm:w-full",
          "md:justify-self-end md:order-6",
          "lg:order-5 lg:self-end",
        )}
      >
        <p className="sm:opacity-50 sm:text-center sm:text-pure-white">
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
);
