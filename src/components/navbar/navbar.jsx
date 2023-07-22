import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const pages = [
  {
    name: "Explore Style 1",
    description: "Blog",
    blog: "Authors",
  },
  {
    name: "Explore Style 2",
    description: "Blog Single",
    blog: "Author",
  },
  {
    name: "Explore Style 3",
    description: "Help Center",
    blog: "Wallet Connect",
  },
  {
    name: "Explore Style 4",
    blog: "Create",
  },
  {
    name: "Live Auctions",
    blog: "Login",
  },
  {
    name: "Item Details",
    blog: "Signup",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#212529] text-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="" src="/assets/nft-logo.png" alt="antech" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="xl:text-xl lg:text-sm font-semibold leading-6">
            Home
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 xl:text-xl lg:text-sm font-semibold leading-6 outline-none">
              Explore
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-5 top-full z-10 mt-5  w-60 list-none  overflow-hidden  bg-[#212529] shadow-md shadow-white">
                <div className="p-4">
                  {pages.map((item) => (
                    <li className="mb-5 cursor-pointer hover:underline">
                      {item.name}
                    </li>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a href="#" className="xl:text-xl lg:text-sm font-semibold leading-6">
            Activity
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 xl:text-xl lg:text-sm font-semibold leading-6 outline-none ">
              Community
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-5 top-full z-10 mt-5  w-60 list-none  overflow-hidden  bg-[#212529] shadow-md shadow-white">
                <div className="p-4">
                  {pages.map((item) => (
                    <li className="mb-5 cursor-pointer hover:underline">
                      {item.description}
                    </li>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 xl:text-xl lg:text-sm font-semibold leading-6 outline-none">
              Pages
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-5 top-full z-10 mt-5  w-60 list-none  overflow-hidden  bg-[#212529] shadow-md shadow-white">
                <div className="p-4">
                  {pages.map((item) => (
                    <li className="mb-5 cursor-pointer hover:underline">
                      {item.blog}
                    </li>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a href="#" className="xl:text-xl lg:text-sm font-semibold leading-6">
            Contact
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="text-white w-40 py-3 px-6 rounded-full lg:w-32 lg:py-2 lg:px-0 border-2 border-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-none">
            Wallet Connect
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="/assets/Antech-Logo.svg"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 text-white">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                >
                  Home
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 outline-none">
                        Explore
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...pages].map((item) => (
                          <Disclosure.Button className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7">
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                >
                  Activity
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 outline-none">
                        Community
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...pages].map((item) => (
                          <Disclosure.Button className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 ">
                            {item.description}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 outline-none">
                        Pages
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...pages].map((item) => (
                          <Disclosure.Button className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7">
                            {item.blog}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
export default Navbar;
