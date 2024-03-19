import React from "react";
import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

export type CardProps = {
  dark?: boolean;
  description: React.ReactNode;
  label: React.ReactNode;
  linkProps: LinkProps;
  price: number;
  title: React.ReactNode;
};

export const Card = ({
  dark = false,
  description,
  label,
  linkProps,
  price,
  title,
}: CardProps) => (
  <article
    className={twMerge(
      "sm:bg-[#F5F5F5] sm:gap-10 sm:grid sm:grid-cols-1 sm:grid-rows-[auto] sm:items-center sm:px-8 sm:pb-10 sm:pt-14 sm:relative sm:text-center sm:text-pure-black sm:w-full",
      dark === true && "sm:bg-pure-black sm:py-12 sm:text-pure-white",
      "md:gap-8 md:grid-cols-[16.875rem_1fr] md:items-start md:justify-between md:p-10 md:text-left",
      "lg:gap-10 lg:grid-cols-1 lg:items-center lg:justify-center lg:pt-14 lg:text-center",
      dark === true && "lg:pb-18 lg:pt-23",
    )}
  >
    <div className="sm:flex sm:flex-col sm:gap-4 sm:w-full">
      <h3 className="sm:text-H3">{title}</h3>

      <p className="sm:opacity-60 sm:text-body">{description}</p>
    </div>

    <div
      className={twMerge(
        "sm:flex sm:flex-col sm:items-center sm:w-full",
        "md:items-end md:text-right",
        "lg:items-center lg:text-center",
      )}
    >
      <strong className="sm:text-H1-H2-desktop">
        {new Intl.NumberFormat("en", {
          currency: "USD",
          style: "currency",
        }).format(price)}
      </strong>

      <span className={twMerge("sm:opacity-60 sm:text-body", "md:pr-2")}>
        {label}
      </span>
    </div>

    <div
      className={twMerge(
        "sm:flex sm:text-pure-white sm:w-full",
        dark === true && "sm:text-pure-black",
      )}
    >
      <Link
        {...linkProps}
        className={twMerge(
          "sm:bg-pure-black sm:flex sm:h-10 sm:items-center sm:justify-center sm:text-H4 sm:w-full",
          dark === true && "sm:bg-pure-white",
        )}
      >
        PICK PLAN
      </Link>
    </div>

    {dark === true && (
      <div
        className={twMerge(
          "sm:absolute sm:flex sm:h-[0.375rem] sm:story-gradient-decoration sm:top-0 sm:w-full",
          "md:left-0 md:h-full md:w-[0.375rem]",
          "lg:h-[0.375rem] lg:w-full",
        )}
      />
    )}
  </article>
);
