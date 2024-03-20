import React, { useId } from "react";
import { twMerge } from "tailwind-merge";
import { mock } from "@/components/Stories/mock/mock";
import { Story } from "@/components/Stories/Story/Story";

export const Stories = () => {
  const id = useId();

  return (
    <div className="sm:flex sm:items-center sm:justify-center sm:relative sm:w-full">
      <h2
        className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0"
        id={id}
      >
        Latest Stories
      </h2>

      <ul
        aria-labelledby={id}
        className={twMerge(
          "sm:grid sm:grid-cols-1 sm:grid-rows-[auto] sm:w-full",
          "md:grid-cols-2",
          "lg:grid-cols-4",
        )}
      >
        {mock.map((item, index) => (
          <li
            className="sm:flex sm:h-full sm:w-full"
            key={index}
          >
            <Story
              {...item}
              showDate={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
