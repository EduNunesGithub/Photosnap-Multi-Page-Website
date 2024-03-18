import React from "react";
import { twMerge } from "tailwind-merge";
import { Feature } from "@/components/Features/Feature/Feature";
import SVGBoostExposure from "#/SVG/boost-exposure.svg";
import SVGCustomDomain from "#/SVG/custom-domain.svg";
import SVGDragDrop from "#/SVG/drag-drop.svg";
import SVGEmbed from "#/SVG/embed.svg";
import SVGNoLimit from "#/SVG/no-limit.svg";
import SVGResponsive from "#/SVG/responsive.svg";

export const Features = () => {
  const id = React.useId();

  return (
    <div
      className={twMerge(
        "sm:flex sm:flex-col sm:items-center sm:justify-center sm:mx-auto sm:w-full",
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
          "sm:gap-14 sm:grid sm:grid-cols-1 sm:grid-rows-[auto] sm:items-center sm:w-full",
          "md:gap-[4.5rem_2rem] md:grid-cols-2",
          "lg:gap-[6.25rem_2rem] lg:grid-cols-3",
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
            description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
            imageProps={{ alt: "", src: SVGEmbed }}
            title="Available to Embed"
          />
        </li>

        <li className="sm:flex sm:w-full">
          <Feature
            description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
            imageProps={{ alt: "", src: SVGCustomDomain }}
            title="Custom Domain"
          />
        </li>

        <li className="sm:flex sm:w-full">
          <Feature
            description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
            imageProps={{ alt: "", src: SVGBoostExposure }}
            title="Boost Your Exposure"
          />
        </li>

        <li className="sm:flex sm:w-full">
          <Feature
            description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
            imageProps={{ alt: "", src: SVGDragDrop }}
            title="Drag & Drop Image"
          />
        </li>
      </ul>
    </div>
  );
};
