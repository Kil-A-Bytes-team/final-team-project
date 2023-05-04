import Link from "next/link";
import { HomeLayout } from "./HomeLayout";

export const Footer = () => {
  return (
    <>
      <footer className="flex justify-center mx-10 border-t-2 border-solid border-dark dark:border-light font-medium text-lg">
        <HomeLayout className="container py-8 flex items-center justify-between ">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <div>
            {" "}
            Built With <span className="text-primary text-2xl">
              &#9825;
            </span>{" "}
            by&nbsp;
            <Link href="/">Kil-A-Bytes</Link>
          </div>
          <Link href="/">Say hello team green</Link>
        </HomeLayout>
      </footer>
    </>
  );
};
