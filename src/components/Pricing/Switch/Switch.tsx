import React from "react";
import { Switch as SwitchUI } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

export const Switch = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof SwitchUI>
>(({ checked, ...props }, ref) => (
  <div className="sm:flex sm:gap-8 sm:items-center sm:justify-between sm:max-w-full sm:text-pure-black sm:w-fit">
    <span
      aria-hidden
      className={twMerge(
        "sm:duration-standard sm:ease-standard sm:text-H3 sm:transition-opacity",
        checked === true && "sm:opacity-50",
      )}
    >
      Monthly
    </span>

    <SwitchUI
      {...props}
      aria-label={
        checked === true ? "Show the yearly price" : "show the monthly price"
      }
      checked={checked}
      className="sm:bg-light-grey sm:flex sm:h-8 sm:items-center sm:p-1 sm:rounded-full sm:w-16"
      ref={ref}
    >
      <div
        className={twMerge(
          "sm:duration-standard sm:ease-standard sm:flex sm:transition-transform sm:w-full",
          checked === true && "sm:translate-x-[calc(100%-1.5rem)]",
        )}
      >
        <span className="sm:bg-pure-black sm:flex sm:h-6 sm:relative sm:rounded-full sm:w-6" />
      </div>
    </SwitchUI>

    <span
      aria-hidden
      className={twMerge(
        "sm:duration-standard sm:ease-standard sm:text-H3 sm:transition-opacity",
        checked === false && "sm:opacity-50",
      )}
    >
      Yearly
    </span>
  </div>
));
