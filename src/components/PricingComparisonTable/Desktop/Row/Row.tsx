import React from "react";
import { Check } from "lucide-react";

export type RowProps = {
  title: React.ReactNode;
  values: [boolean, boolean, boolean];
};

export const Row = ({ title, values }: RowProps) => (
  <tr className="sm:border-b-1 sm:border-b-light-grey">
    <th>
      <div className="sm:flex sm:items-center sm:justify-start sm:py-6 sm:pl-6 sm:text-left sm:w-full">
        {title}
      </div>
    </th>

    <td aria-label={values[0] === true ? "Yes" : "NO"}>
      <div className="sm:flex sm:items-center sm:justify-center sm:py-6 sm:w-full">
        {values[0] === true && (
          <Check className="sm:h-5 sm:stroke-2 sm:text-pure-black sm:w-5" />
        )}
      </div>
    </td>

    <td aria-label={values[1] === true ? "Yes" : "NO"}>
      <div className="sm:flex sm:items-center sm:justify-center sm:py-6 sm:w-full">
        {values[1] === true && (
          <Check className="sm:h-5 sm:stroke-2 sm:text-pure-black sm:w-5" />
        )}
      </div>
    </td>

    <td aria-label={values[2] === true ? "Yes" : "NO"}>
      <div className="sm:flex sm:items-center sm:justify-center sm:py-6 sm:w-full">
        {values[2] === true && (
          <Check className="sm:h-5 sm:stroke-2 sm:text-pure-black sm:w-5" />
        )}
      </div>
    </td>
  </tr>
);
