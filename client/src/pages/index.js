import { AnimatedText } from "@/components/AnimatedText";
import { Carousel } from "@/components/Carousel";
import { HomeLayout } from "@/components/HomeLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "../../public/home-page-banner.png";
export default function Home() {
  const placeHolder = "https://via.placeholder.com/400x600";
  return (
    <>
      <Head>
        <title>Kil-A-Bytes</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex flex-col items-center text-dark w-full ">
        <HomeLayout className="pt-0 pb-16 ">
          <div className="flex items-center justify-between w-full px-52">
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text={"Welcome to Kil -A- Bytes team project"}
                className="!text-left"
              />
              <p className="my-4 text-base font-medium ">
                Цахим хичээл болон тэтгэлэгийн мэдээллийн нэгдсэн сан.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  href="/sign"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="w-1/2 h-1/3">
              <Image
                src={bannerImage}
                alt="Kil-A-Bytes"
                className="w-full h-auto"
              />
            </div>
          </div>
        </HomeLayout>

        <div className="flex flex-row items-center pt-0 p-10 gap-5">
          <Carousel />
        </div>
      </main>
    </>
  );
}
