import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

export type LinkProps = NextLinkProps & React.HTMLAttributes<HTMLAnchorElement>;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, ...props }, ref) => (
    <NextLink
      {...props}
      className={twMerge(
        "sm:duration-standard sm:ease-standard sm:flex-shrink-0 sm:font-dm-sans sm:font-bold sm:text-[0.9375rem] sm:leading-5 sm:text-center sm:text-pure-black sm:tracking-[0.15625rem] sm:transition-all",
        "sm:hover:opacity-30",
        "md:text-xs md:tracking-[0.125rem]",
        className,
      )}
      ref={ref}
    />
  ),
);
