import React from "react";
import { twMerge } from "tailwind-merge";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, ...props }, ref) => (
    <h2
      {...props}
      className={twMerge("text-H1-H2", "sm:uppercase", className)}
      ref={ref}
    />
  ),
);
