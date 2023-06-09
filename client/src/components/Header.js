import Link from "next/link";
import nav from "../config/nav.json";
import { useState } from "react";
import { Logo } from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { RiMoonFill, RiSearchLine, RiSunFill } from "react-icons/ri";
import { GrBasket } from "react-icons/gr";
import SearchModal from "./SearchModal";

export const Header = ({ items, currentuser, cardCount }) => {
  const { main } = nav;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState();
  const [searchModal, setSearchModal] = useState(false);
  const handleDarkMode = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "light" || typeof theme === "undefined") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  };
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
      <header className="header  w-full px-32 pt-8 font-medium sticky top-0 z-10 backdrop-blur-2xl">
        <div className="">
          <nav className="border-gray-200 px-2 mb-10 items-center justify-between ">
            <div
              className={`container mx-auto flex items-center justify-between ${
                searchModal ? "opacity-0" : "opacity-1"
              }`}
            >
              <div className="order-1 mr-10">
                <Logo />
              </div>
              {/* Desktop menu */}
              <div
                className="order-2 text-dark dark:text-light justify-between items-start w-full md:w-auto h-full lg:flex hidden"
                id=""
              >
                <ul className="navbar-nav w-full md:auto md:space-x-1 xl:space-x-2 flex">
                  {main.map((menu, i) => (
                    <li className="nav-item" key={i}>
                      <Link
                        scroll={false}
                        href={menu.url}
                        className="mr-4 relative group  flex flex-col justify-between items-center"
                      >
                        {menu.name}
                        <span
                          className={`h-[1px] inline-block bg-dark dark:bg-light group-hover:w-full transition-[width] ease duration-300 ${
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
                className={`order-3 bg-dark text-light h-vh fixed top-0 bottom-0 min-w-[30vw] lg:hidden flex opacity-80 ease-in duration-500 ${
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
              <div className="order-4 flex">
                {/* profile icon */}
                {currentuser ? (
                  <div className="flex items-center dark:text-light">
                    <Link
                      href={"profile"}
                      className={`mr-8`}
                      currentuser={currentuser}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </Link>
                    {/* Basket Card  */}
                    <div className="mr-8 relative flex items-center">
                      <Link href={"/profile/order"}>
                        <GrBasket className="dark:[&>path]:stroke-light" />
                      </Link>
                      {cardCount > 0 && (
                        <span className="absolute -right-3 -top-3 inline-flex items-center justify-center px-1 py-1 text-xs bg-red-600 rounded-full text-light ">
                          {cardCount}
                        </span>
                      )}
                    </div>
                  </div>
                ) : null}

                {/* dark mode sun&moon */}
                <button className="order-4 mr-8" onClick={handleDarkMode}>
                  {darkMode ? <RiSunFill /> : <RiMoonFill />}
                </button>
                {/* search bar */}
                <button
                  className="order-5 mr-8"
                  onClick={() => {
                    setSearchModal(true);
                  }}
                >
                  <RiSearchLine />
                </button>
                {/* hamburger menu */}
                <motion.button
                  className="order-6 flex-col items-center justify-center lg:hidden flex"
                  animate={{ x: [null, 100, 0] }}
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                  transition={{ duration: 0.3 }}
                  onClick={handleClickMenu}
                >
                  <span
                    className={`block transition-all duration-700 ease-out h-0.5 w-6 rounded-sm  ${
                      isOpen
                        ? "rotate-45 translate-y-0.5 bg-dark dark:bg-light"
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
                        ? "-rotate-45 translate-y-0 bg-dark dark:bg-light"
                        : "translate-y-0.5 bg-dark dark:bg-light"
                    }`}
                  ></span>
                </motion.button>
              </div>
            </div>
            <SearchModal
              searchModal={searchModal}
              setSearchModal={setSearchModal}
            />
          </nav>
        </div>
      </header>
    </>
  );
};
