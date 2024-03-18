import React from "react";
import { twMerge } from "tailwind-merge";
import { Feature } from "@/components/Features/Feature/Feature";
import SVGEmbed from "#/SVG/embed.svg";
import SVGNoLimit from "#/SVG/no-limit.svg";
import SVGResponsive from "#/SVG/responsive.svg";

export const Home = () => {
  const id = React.useId();

  return (
    <div
      className={twMerge(
        "sm:flex sm:flex-col sm:items-center sm:justify-center sm:max-w-[35.9375rem] sm:mx-auto sm:w-full",
        "lg:max-w-full",
      )}
    >
      <h2
        className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0"
        id={id}
      >
        Advantages
      </h2>

      <ul
        className={twMerge(
          "sm:gap-14 sm:grid sm:grid-cols-1 sm:grid-rows-[auto] sm:w-full",
          "md:gap-20",
          "lg:gap-8 lg:grid-cols-3",
        )}
      >
        <li className="sm:flex sm:w-full">
          <Feature
            description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
            imageProps={{ alt: "", src: SVGResponsive }}
            title="100% Responsive"
          />
        </li>

        <li className="sm:flex sm:w-full">
          <Feature
            description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
            imageProps={{ alt: "", src: SVGNoLimit }}
            title="No Photo Upload Limit"
          />
        </li>

        <li className="sm:flex sm:w-full">
          <Feature
            description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
            imageProps={{ alt: "", src: SVGEmbed }}
            title="Available to Embed"
          />
        </li>
      </ul>
    </div>
  );
};
