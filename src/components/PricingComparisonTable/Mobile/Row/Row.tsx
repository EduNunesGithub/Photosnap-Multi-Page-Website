import React from "react";
import { Check } from "lucide-react";

export type RowProps = {
  title: React.ReactNode;
  values: [boolean, boolean, boolean];
};

export const Row = ({ title, values }: RowProps) => (
  <>
    <tr className="sm:w-full">
      <th
        className="sm:w-full"
        colSpan={3}
        scope="colgroup"
      >
        <div className="sm:flex sm:text-left sm:pb-4 sm:pt-6 sm:text-H4 sm:text-pure-black sm:w-full">
          {title}
        </div>
      </th>
    </tr>

    <tr className="sm:w-full">
      <th scope="col">
        <div className="sm:flex sm:font-bold sm:font-dm-sans sm:text-[0.625rem] sm:leading-[0.8125rem] sm:text-[#00000080] sm:text-center sm:tracking-[0.168em] sm:w-full">
          BASIC
        </div>
      </th>
      <th scope="col">
        <div className="sm:flex sm:font-bold sm:font-dm-sans sm:text-[0.625rem] sm:leading-[0.8125rem] sm:text-[#00000080] sm:text-center sm:tracking-[0.168em] sm:w-full">
          PRO
        </div>
      </th>
      <th scope="col">
        <div className="sm:flex sm:font-bold sm:font-dm-sans sm:text-[0.625rem] sm:leading-[0.8125rem] sm:text-[#00000080] sm:text-center sm:tracking-[0.168em] sm:w-full">
          BUSINESS
        </div>
      </th>
    </tr>

    <tr className="sm:w-full">
      <td
        aria-label={values[0] === true ? "Yes" : "NO"}
        scope="col"
      >
        <div className="sm:flex sm:items-start sm:justify-start sm:pb-6 sm:pt-2 sm:w-full">
          {values[0] === true && (
            <Check className="sm:h-5 sm:stroke-2 sm:text-pure-black sm:w-5" />
          )}
        </div>
      </td>

      <td
        aria-label={values[1] === true ? "Yes" : "NO"}
        scope="col"
      >
        <div className="sm:flex sm:items-start sm:justify-start sm:pb-6 sm:pt-2 sm:w-full">
          {values[1] === true && (
            <Check className="sm:h-5 sm:stroke-2 sm:text-pure-black sm:w-5" />
          )}
        </div>
      </td>

      <td
        aria-label={values[2] === true ? "Yes" : "NO"}
        scope="col"
      >
        <div className="sm:flex sm:items-start sm:justify-start sm:pb-6 sm:pt-2 sm:w-full">
          {values[2] === true && (
            <Check className="sm:h-5 sm:stroke-2 sm:text-pure-black sm:w-5" />
          )}
        </div>
      </td>
    </tr>

    <tr className="sm:w-full">
      <td
        aria-hidden
        colSpan={3}
      >
        <div className="sm:border-b-1 sm:border-b-light-grey sm:w-full" />
      </td>
    </tr>
  </>
);
