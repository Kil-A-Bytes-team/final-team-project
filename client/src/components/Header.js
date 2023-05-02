import Link from "next/link";
import nav from "../config/nav.json";
import { IoSearch } from "react-icons/io5";
import SearchModal from "./SearchModal";
import { useState } from "react";
import { Logo } from "./Logo";
import { useRouter } from "next/router";

export const Header = () => {
  const { main } = nav;
  const [searchModal, setSearchModal] = useState(false);
  const router = useRouter();
  return (
    <>
      <header className="header w-full px-32 pb-8 font-medium ">
        <div className="">
          <nav className="border-gray-200 px-2 mb-10 items-center justify-between">
            <div className="container mx-auto flex items-center justify-between">
              <div classNameName="order-0">
                <Logo />
              </div>
              <div className="flex md:order-2">
                <div className="relative mr-3 md:mr-0 hidden md:block">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-adress-icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                    placeholder="Search..."
                  />
                </div>
                <button
                  data-collapse-toggle="mobile-menu-3"
                  type="button"
                  className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                  aria-controls="mobile-menu-3"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="hidden md:flex justify-between items-start w-full md:w-auto md:order-1 h-full"
                id="mobile-menu-3"
              >
                <ul className="navbar-nav w-full md:auto md:space-x-1 xl:space-x-2 lg:flex">
                  {main.map((menu, i) => (
                    <li className="nav-item">
                      <Link href={menu.url} className="mr-4 relative group">
                        {menu.name}
                        <span
                          className={`h-[1px] inline-block bg-dark group-hover:w-full transition-[width] ease duration-300 ${
                            router.asPath === menu.url ? "w-full" : "w-0"
                          }`}
                        >
                          &nbsp;
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* <nav classNameName="navbar container flex p-5 items-start justify-between">
          <div classNameName="order-0">
            <Logo />
          </div>
          <div classNameName="flex items-center">
            <ul classNameName="navbar-nav w-full md:auto md:space-x-1 xl:space-x-2 lg:flex">
              {main.map((menu, i) => (
                <li classNameName="nav-item">
                  <Link href={menu.url} classNameName="mr-4 relative group">
                    {menu.name}
                    <span
                      classNameName={`h-[1px] inline-block bg-dark group-hover:w-full transition-[width] ease duration-300 ${
                        router.asPath === menu.url ? "w-full" : "w-0"
                      }`}
                    >
                      &nbsp;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div
              classNameName="search-icon cursor-pointer inline-block w-10 h-10 rounded-full"
              onClick={() => {
                setSearchModal(true);
              }}
            >
              <IoSearch />
            </div>
          </div>
          <SearchModal
            searchModal={searchModal}
            setSearchModal={setSearchModal}
          />
        </nav> */}
      </header>
    </>
  );
};
