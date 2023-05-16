import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-light dark:bg-dark w-full min-h-screen text-dark dark:text-light">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
