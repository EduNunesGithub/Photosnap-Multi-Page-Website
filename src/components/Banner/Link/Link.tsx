import React from "react";
import { MoveRight } from "lucide-react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

export type LinkProps = NextLinkProps & React.HTMLAttributes<HTMLAnchorElement>;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, ...props }, ref) => (
    <NextLink
      {...props}
      className={twMerge(
        "text-H4",
        "sm:decoration-transparent sm:duration-standard sm:ease-standard sm:flex sm:gap-4 sm:items-center sm:transition-colors sm:underline sm:uppercase sm:w-fit",
        "sm:hover:decoration-inherit",
        className,
      )}
      ref={ref}
    >
      {children}

      <MoveRight className="sm:flex-shrink-0 sm:h-4 sm:stroke-[0.0625rem] sm:w-4" />
    </NextLink>
  ),
);
