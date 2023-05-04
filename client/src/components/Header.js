import Link from "next/link";
import nav from "../config/nav.json";
import { useState } from "react";
import { Logo } from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const Header = () => {
  const { main } = nav;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle = () => {
    handleClickMenu();
  };

  // trying animate sideNavbar
  // const quote = {
  //   initial: {
  //     opacity: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       delay: 1,
  //       staggerChildren: 0.5,
  //     },
  //   },
  // };
  // const singleWord = {
  //   initial: {
  //     opacity: 0,
  //     x: 50,
  //   },
  //   animate: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       delay: 1,
  //       duration: 1,
  //     },
  //   },
  // };
  return (
    <>
      <header className="header w-full px-32 py-8 font-medium ">
        <div className="">
          <nav className="border-gray-200 px-2 mb-10 items-center justify-between">
            <div className="container mx-auto flex items-center justify-between">
              <div className="order-0 mr-10">
                <Logo />
              </div>
              {/* Desktop menu */}
              <div
                className="justify-between items-start w-full md:w-auto md:order-1 h-full lg:flex hidden"
                id=""
              >
                <ul className="navbar-nav w-full md:auto md:space-x-1 xl:space-x-2 flex">
                  {main.map((menu, i) => (
                    <li className="nav-item" key={i}>
                      <Link
                        href={menu.url}
                        className="mr-4 relative group  flex flex-col justify-between items-center"
                      >
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
              {/* Mobile menu */}
              {/* {isOpen ? (
                
              ) : null} */}
              <div
                className={`bg-dark text-light h-vh fixed top-0 bottom-0 min-w-[30vw] lg:hidden flex opacity-80 ease-in duration-500 ${
                  isOpen ? "right-0" : "-right-full"
                }`}
                id="mobile-menu-3"
              >
                <motion.ul
                  className={`navbar-nav w-full md:auto md:space-x-1 xl:space-x-2 flex flex-col relative ml-10 mt-40`}
                  // variants={quote}
                  // initial="initial"
                  // animate="animate"
                >
                  {main.map((menu, i) => (
                    <motion.li
                      className={`nav-item my-5`}
                      key={i}
                      animate={{ x: [null, 0, 0] }}
                      whileHover={{ scale: [null, 1.1, 1.1] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={menu.url}
                        // variants={singleWord}
                        className="mr-4 relative group flex flex-col justify-between items-start"
                        onClick={handleToggle}
                      >
                        {menu.name}
                        <span
                          className={`h-[1px] inline-block bg-light group-hover:w-full  transition-all ease-in duration-300 ${
                            router.asPath === menu.url ? "w-full" : "w-0"
                          }`}
                        >
                          &nbsp;
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="">
                <div className="relative mr-3 md:mr-0 md:block">
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
              </div>
              {/* hamburger menu */}
              <motion.button
                className="flex-col items-center justify-center lg:hidden flex"
                animate={{ x: [null, 100, 0] }}
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
                onClick={handleClickMenu}
              >
                <span
                  className={`bg-dark dark:bg-light block transition-all duration-700 ease-out h-0.5 w-6 rounded-sm  ${
                    isOpen
                      ? "rotate-45 translate-y-0.5 bg-light dark:bg-dark"
                      : "-translate-y-0.5 bg-dark dark:bg-light"
                  }`}
                ></span>
                <span
                  className={`bg-dark dark:bg-light  my-0.5 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isOpen ? "hidden" : "block"
                  }`}
                ></span>
                <span
                  className={` block transition-all duration-700 ease-out h-0.5 w-6 rounded-sm ${
                    isOpen
                      ? "-rotate-45 translate-y-0 bg-light dark:bg-dark"
                      : "translate-y-0.5 bg-dark dark:bg-light"
                  }`}
                ></span>
              </motion.button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
