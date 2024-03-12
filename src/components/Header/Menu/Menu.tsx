"use client";

import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Menu as LucideMenu, X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Link } from "@/components/Header/Link/Link";

export const Menu = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className={twMerge("sm:flex sm:h-fit sm:w-fit", "md:hidden")}>
      <Transition
        as={React.Fragment}
        enter={twMerge(
          "sm:ease-emphasized-decelerate sm:duration-emphasized-decelerate sm:transition-all",
        )}
        enterFrom={twMerge("sm:opacity-0")}
        enterTo={twMerge("sm:opacity-100")}
        leave={twMerge(
          "sm:ease-emphasized-accelerate sm:duration-emphasized-accelerate sm:transition-all",
        )}
        leaveFrom={twMerge("sm:opacity-100")}
        leaveTo={twMerge("sm:opacity-0")}
        show={!open}
      >
        <button
          aria-label="Open navigation menu"
          className="sm:flex sm:h-5 sm:rounded sm:text-pure-black sm:w-5"
          onClick={async () => setOpen(true)}
        >
          <LucideMenu className="sm:h-full sm:stroke-[0.0625rem] sm:w-full" />
        </button>
      </Transition>

      <Transition
        as={React.Fragment}
        show={open}
      >
        <Dialog
          className="sm:relative sm:z-50"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={React.Fragment}
            enter={twMerge(
              "sm:ease-emphasized-decelerate sm:duration-emphasized-decelerate sm:transition-all",
            )}
            enterFrom={twMerge("sm:opacity-0")}
            enterTo={twMerge("sm:opacity-50")}
            leave={twMerge(
              "sm:ease-emphasized-accelerate sm:duration-emphasized-accelerate sm:transition-all",
            )}
            leaveFrom={twMerge("sm:opacity-50")}
            leaveTo={twMerge("sm:opacity-0")}
          >
            <div
              aria-hidden
              className="sm:bg-black sm:inset-0 sm:opacity-50 sm:top-18 sm:fixed"
            />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter={twMerge(
              "sm:ease-emphasized-decelerate sm:duration-emphasized-decelerate sm:transition-all",
            )}
            enterFrom={twMerge("sm:opacity-0")}
            enterTo={twMerge("sm:opacity-100")}
            leave={twMerge(
              "sm:ease-emphasized-accelerate sm:duration-emphasized-accelerate sm:transition-all",
            )}
            leaveFrom={twMerge("sm:opacity-100")}
            leaveTo={twMerge("sm:opacity-0")}
          >
            <div className="sm:fixed sm:flex sm:items-center sm:justify-end sm:min-h-18 sm:px-6 sm:top-0 sm:w-full">
              <button
                aria-label="Close navigation menu"
                className="sm:flex sm:h-5 sm:rounded sm:text-pure-black sm:w-5"
                onClick={async () => setOpen(false)}
              >
                <X className="sm:h-full sm:stroke-[0.0625rem] sm:w-full" />
              </button>
            </div>
          </Transition.Child>

          <div className="sm:fixed sm:flex sm:inset-0 sm:overflow-hidden sm:top-18">
            <Transition.Child
              as={React.Fragment}
              enter={twMerge(
                "sm:ease-emphasized-decelerate sm:duration-emphasized-decelerate sm:transition-all",
              )}
              enterFrom={twMerge("sm:opacity-0 sm:-translate-y-full")}
              enterTo={twMerge("sm:opacity-100 sm:translate-y-0")}
              leave={twMerge(
                "sm:ease-emphasized-accelerate sm:duration-emphasized-accelerate sm:transition-all",
              )}
              leaveFrom={twMerge("sm:opacity-100 sm:translate-y-0")}
              leaveTo={twMerge("sm:opacity-0 sm:-translate-y-full")}
            >
              <Dialog.Panel className="sm:bg-pure-white sm:flex sm:h-fit sm:justify-center sm:max-h-full sm:overflow-y-auto sm:p-8 sm:w-full">
                <div className="sm:flex sm:flex-col sm:flex-shrink-0 sm:h-fit sm:w-full">
                  <Dialog.Title className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0">
                    Menu
                  </Dialog.Title>

                  <Dialog.Description className="sm:absolute sm:h-0 sm:opacity-0 sm:overflow-hidden sm:w-0">
                    Navigate between pages
                  </Dialog.Description>

                  <nav className="sm:flex sm:flex-col sm:flex-shrink-0 sm:gap-5 sm:items-center sm:max-w-full">
                    <Link href="/stories">STORIES</Link>

                    <Link href="/features">FEATURES</Link>

                    <Link href="/pricing">PRICING</Link>

                    <div className="sm:border-b-[0.0625rem] sm:border-b-pure-black sm:flex sm:opacity-25 sm:w-full" />

                    <Link
                      className={twMerge(
                        "sm:bg-pure-black sm:flex sm:items-center sm:justify-center sm:min-h-12 sm:text-pure-white sm:w-full",
                        "sm:hover:opacity-100",
                      )}
                      href="#"
                    >
                      GET AN INVITE
                    </Link>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
