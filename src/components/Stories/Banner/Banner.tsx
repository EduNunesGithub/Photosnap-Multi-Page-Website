import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Story } from "@/shared/types/types";

export type BannerProps = Story;

export const Banner = ({
  author,
  date,
  description,
  imageProps,
  name,
}: Story) => (
  <article
    className={twMerge(
      "sm:bg-pure-black sm:flex sm:flex-col sm:relative sm:w-full sm:z-0",
    )}
  >
    <div
      className={twMerge(
        "sm:flex sm:h-80 sm:relative sm:w-full",
        "md:absolute md:h-full",
      )}
    >
      <Image
        {...imageProps}
        className="sm:h-full sm:object-cover sm:w-full sm:-z-10"
        fill
        loading="eager"
        placeholder="blur"
        priority
        sizes="(min-width: 0px) 100vw"
      />
    </div>

    <div className={twMerge("sm:flex sm:px-8 sm:w-full sm:z-0", "md:px-10")}>
      <div className="sm:flex sm:max-w-[76rem] sm:mx-auto sm:w-full">
        <div
          className={twMerge(
            "sm:flex sm:flex-col sm:gap-4 sm:py-12 sm:text-left sm:text-pure-white sm:w-full sm:z-0",
            "md:max-w-98 md:py-30",
          )}
        >
          <strong className={twMerge("sm:text-H4", "md:mb-2")}>
            LAST MONTH’S FEATURED STORY
          </strong>

          <h2 className="sm:text-H1-H2">{name}</h2>

          <span className="sm:font-dm-sans sm:font-normal sm:mb-2 sm:text-[0.8125rem] sm:leading-[1.0625rem]">
            <span className="sm:opacity-75">
              {date.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            &nbsp;
            <span>by {author}</span>
          </span>

          <p className="sm:mb-2 sm:opacity-60 sm:text-body">{description}</p>

          <Link
            className={twMerge(
              "text-H4",
              "sm:decoration-transparent sm:duration-standard sm:ease-standard sm:flex sm:gap-4 sm:items-center sm:transition-colors sm:underline sm:uppercase sm:w-fit",
              "sm:hover:decoration-inherit",
            )}
            href="#"
          >
            READ THE STORY
            <MoveRight className="sm:flex-shrink-0 sm:h-4 sm:stroke-[0.0625rem] sm:w-4" />
          </Link>
        </div>
      </div>
    </div>
  </article>
);
