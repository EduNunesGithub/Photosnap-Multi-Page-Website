import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import JPEGBgBeta from "#/JPEG/bg-beta.jpg";

export const GetAnInvite = () => (
  <article className="sm:flex sm:relative sm:w-full sm:z-0">
    <div
      className={twMerge(
        "sm:absolute sm:flex sm:h-full sm:w-full sm:z-0",
        "sm:before:absolute sm:before:bg-pure-black sm:before:flex sm:before:h-full sm:before:opacity-50 sm:before:w-full sm:before:z-10",
      )}
    >
      <Image
        alt=""
        className="sm:h-full sm:object-cover sm:w-full sm:z-0"
        fill
        placeholder="blur"
        sizes="(min-width: 0px) 100vw"
        src={JPEGBgBeta}
      />
    </div>

    <div
      className={twMerge(
        "sm:flex sm:max-w-[90rem] sm:mx-auto sm:px-8 sm:py-16 sm:relative sm:w-full sm:z-10",
        "md:px-10 md:py-17",
      )}
    >
      <div
        className={twMerge(
          "sm:flex sm:flex-col sm:gap-6 sm:max-w-page-container sm:mx-auto sm:text-pure-white sm:w-full",
          "md:flex-row md:gap-10 md:items-center md:justify-between",
        )}
      >
        <h2 className={twMerge("sm:text-H1-H2 sm:uppercase", "md:max-w-100")}>
          We’re in beta. Get your invite today!
        </h2>

        <Link
          className={twMerge(
            "text-H4",
            "sm:decoration-transparent sm:duration-standard sm:ease-standard sm:flex sm:flex-shrink-0 sm:gap-4 sm:items-center sm:transition-colors sm:underline sm:uppercase sm:w-fit",
            "sm:hover:decoration-inherit",
          )}
          href="#"
        >
          GET AN INVITE
          <MoveRight className="sm:flex-shrink-0 sm:h-4 sm:stroke-[0.0625rem] sm:w-4" />
        </Link>
      </div>

      <div
        className={twMerge(
          "sm:absolute sm:banner-gradient sm:h-[0.375rem] sm:max-w-32 sm:top-0 sm:w-full",
          "md:bottom-0 md:h-auto md:left-0 md:top-0 md:w-[0.375rem]",
        )}
      />
    </div>
  </article>
);
