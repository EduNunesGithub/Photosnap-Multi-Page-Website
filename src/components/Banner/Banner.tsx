import React from "react";
import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import { Heading } from "@/components/Banner/Heading/Heading";
import { Link } from "@/components/Banner/Link/Link";
import { Paragraph } from "@/components/Banner/Paragraph/Paragraph";

export type BannerProps = React.HTMLAttributes<HTMLDivElement> & {
  articleProps?: React.HTMLAttributes<HTMLElement>;
  decoration?: boolean;
  direction?: "normal" | "reversed";
  imageProps: ImageProps;
};

const Base = ({
  articleProps,
  children,
  className,
  decoration = false,
  direction = "normal",
  imageProps,
  ...props
}: BannerProps) => (
  <article
    {...articleProps}
    className={twMerge(
      "sm:grid sm:grid-cols-1 sm:grid-rows-[17.5rem_auto] sm:items-center sm:w-full",
      "md:grid-rows-[auto]",
      direction === "normal" &&
        "md:grid-cols-[31rem_1fr] lg:grid-cols-[38rem_1fr]",
      direction === "reversed" &&
        "md:grid-cols-[1fr_31rem] lg:grid-cols-[1fr_38rem]",
      articleProps?.className,
    )}
  >
    <div
      className={twMerge(
        "sm:flex sm:h-full sm:relative sm:w-full",
        direction === "normal" && "md:order-2",
        direction === "reversed" && "md:order-1",
      )}
    >
      <Image
        {...imageProps}
        className="sm:h-full sm:object-cover sm:w-full"
        fill
        placeholder="blur"
        sizes="(min-width: 907.5px) 60vw, (min-width: 641.25px) 40vw, (min-width: 0px) 100vw"
      />
    </div>

    <div
      {...props}
      className={twMerge(
        "sm:bg-pure-black sm:flex sm:flex-col sm:gap-4 sm:px-8 sm:py-18 sm:relative sm:text-white sm:w-full",
        "md:gap-5 md:px-14 md:py-34",
        "lg:px-28",
        direction === "normal" && "md:order-1",
        direction === "reversed" && "md:order-2",
        className,
      )}
    >
      {children}

      {decoration === true && (
        <div
          className={twMerge(
            "sm:absolute sm:banner-gradient sm:h-[0.375rem] sm:max-w-32 sm:top-0 sm:w-full",
            "md:bottom-34 md:h-auto md:left-0 md:top-34 md:w-[0.375rem]",
          )}
        />
      )}
    </div>
  </article>
);

export const Banner = Object.assign(Base, {
  Heading: Heading,
  Link: Link,
  Paragraph: Paragraph,
});
