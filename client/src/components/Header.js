import Link from "next/link";
import nav from "../config/nav.json";

export const Header = () => {
  const { main } = nav;
  return (
    <>
      <header className="header">
        <nav className="navbar container">
          <div>Logo</div>
          <div>
            <ul className="navbar-nav">
              {main.map((menu, i) => {
                <li className="nav-item">
                  <Link href={menu.url}>{menu.name}</Link>
                </li>;
              })}
            </ul>
          </div>
          <div>Search</div>
        </nav>
      </header>
    </>
  );
};
