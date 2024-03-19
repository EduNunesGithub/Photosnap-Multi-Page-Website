"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { Card } from "@/components/Pricing/Card/Card";
import { Switch } from "@/components/Pricing/Switch/Switch";

export const Pricing = () => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <div className="sm:flex sm:flex-col sm:gap-10 sm:items-center sm:w-full">
      <Switch
        checked={checked}
        onChange={setChecked}
      />

      <ul
        className={twMerge(
          "sm:gap-6 sm:grid sm:grid-cols-1 sm:grid-rows-[auto] sm:items-center sm:w-full",
          "lg:gap-8 lg:grid-cols-3",
        )}
      >
        <li className="sm:flex sm:w-full">
          <Card
            description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            label={checked === true ? "per year" : "per month"}
            linkProps={{ href: "#" }}
            price={checked === true ? 190 : 19}
            title="Basic"
          />
        </li>

        <li className="sm:flex sm:w-full">
          <Card
            dark
            description="More advanced features available. Recommended for photography veterans and professionals."
            label={checked === true ? "per year" : "per month"}
            linkProps={{ href: "#" }}
            price={checked === true ? 390 : 39}
            title="Pro"
          />
        </li>

        <li className="sm:flex sm:w-full">
          <Card
            description="Additional features available such as more detailed metrics. Recommended for business owners."
            label={checked === true ? "per year" : "per month"}
            linkProps={{ href: "#" }}
            price={checked === true ? 990 : 99}
            title="Business"
          />
        </li>
      </ul>
    </div>
  );
};
