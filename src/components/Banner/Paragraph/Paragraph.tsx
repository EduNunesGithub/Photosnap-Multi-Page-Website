import React from "react";
import { twMerge } from "tailwind-merge";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, ...props }, ref) => (
    <p
      {...props}
      className={twMerge("text-body", "sm:opacity-60", className)}
      ref={ref}
    />
  ),
);
