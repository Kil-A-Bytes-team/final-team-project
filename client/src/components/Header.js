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
        <nav className="navbar container flex p-5 items-start justify-between">
          <div className="order-0">
            <Logo />
          </div>
          <div className="flex items-center">
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
            <div
              className="search-icon cursor-pointer inline-block w-10 h-10 rounded-full"
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
        </nav>
      </header>
    </>
  );
};
