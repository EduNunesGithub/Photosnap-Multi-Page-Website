import React from "react";
import { twMerge } from "tailwind-merge";

export const typography = {
  body: (className?: React.HTMLAttributes<any>["className"]) =>
    twMerge(
      "sm:font-dm-sans sm:font-normal sm:text-[0.9375rem] sm:leading-[1.5625rem]",
      className,
    ),
  "H1/H2": (className?: React.HTMLAttributes<any>["className"]) =>
    twMerge(
      "sm:font-bold sm:font-dm-sans sm:text-[2rem] sm:leading-10 sm:tracking-[0.104em]",
      "md:text-[2.5rem] md:leading-[3rem]",
      className,
    ),
  H4: (className?: React.HTMLAttributes<any>["className"]) =>
    twMerge(
      "sm:font-bold sm:font-dm-sans sm:text-xs sm:tracking-[0.125rem]",
      className,
    ),
};
