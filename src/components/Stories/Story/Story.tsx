import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Story as StoryType } from "@/shared/types/types";

export type StoryProps = StoryType & {
  showDate?: boolean;
};

export const Story = ({
  author,
  date,
  description,
  imageProps,
  name,
  showDate = true,
}: StoryProps) => (
  <Link
    className={twMerge(
      "group sm:flex sm:h-full sm:min-h-[23.4375rem] sm:w-full",
      "md:min-h-125",
    )}
    href="#"
  >
    <article
      className={twMerge(
        "sm:bg-pure-black sm:duration-standard sm:ease-standard sm:flex sm:flex-col sm:h-full sm:justify-end sm:overflow-hidden sm:px-8 sm:py-10 sm:relative sm:text-pure-white sm:transition-transform sm:w-full sm:z-0",
        "sm:group-hover:-translate-y-6",
        "md:px-10",
      )}
    >
      <div
        className={twMerge(
          "sm:absolute sm:h-full sm:inset-0 sm:w-full sm:z-0",
          "sm:before:absolute sm:before:flex sm:before:h-full sm:before:story-gradient sm:before:w-full sm:before:z-10",
        )}
      >
        <Image
          {...imageProps}
          className="sm:h-full sm:object-cover sm:w-full sm:z-0"
          height={500}
          placeholder="blur"
          width={360}
        />
      </div>

      <div className="sm:flex sm:flex-col sm:gap-4 sm:w-full sm:z-10">
        <div className="sm:flex sm:flex-col sm:gap-1 sm:w-full">
          {showDate === true && (
            <span className="sm:font-dm-sans sm:font-normal sm:text-[0.8125rem] sm:leading-[1.0625rem]">
              {date.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          )}

          <h3 className="text-H3">{name}</h3>

          <span className="sm:font-dm-sans sm:font-normal sm:text-[0.8125rem] sm:leading-[1.0625rem]">
            by {author}
          </span>
        </div>

        <div className="sm:border-b-pure-white sm:border-b-1 sm:flex sm:opacity-25 sm:w-full" />

        <span className="text-H4 sm:flex sm:gap-4 sm:items-center sm:justify-between sm:mt-1 sm:w-full">
          READ STORY
          <MoveRight className="sm:flex-shrink-0 sm:h-4 sm:stroke-[0.0625rem] sm:w-4" />
        </span>
      </div>

      <div
        className={twMerge(
          "sm:absolute sm:bottom-0 sm:duration-standard sm:ease-standard sm:h-[0.375rem] sm:left-0 sm:right-0 sm:story-gradient-decoration sm:translate-y-full sm:transition-transform sm:w-full",
          "sm:group-hover:translate-y-0",
        )}
      />
    </article>
  </Link>
);
