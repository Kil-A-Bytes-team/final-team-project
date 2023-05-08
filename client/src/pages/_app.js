import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen text-dark dark:text-light`}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
