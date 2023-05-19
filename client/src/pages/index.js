import { AnimatedText } from "@/components/AnimatedText";
import { Carousel } from "@/components/Carousel";
import { HomeLayout } from "@/components/HomeLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "../../public/home-page-banner.png";
import { Banner } from "@/components/Banner";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import FeaturedCourses from "@/components/FeaturedCourses";
import FeaturedInfo from "@/components/FeaturedInfo";
import { Layout } from "./layout";
import axios from "axios";
// import { Banner } from "@/components/Banner";

export default function Home({ courses, news }) {
  const placeHolder = "https://via.placeholder.com/400x600";

  return (
    <>
      <Head>
        <title>Kil-A-Bytes</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
        <main className="flex flex-col items-center text-dark dark:text-light w-full sm:px-32 md:px-16 px-8">
          <HomeLayout className="pt-0 pb-16 ">
            <div className="block items-center justify-between lg:flex w-full px-32 md:px-32 sm:px-16">
              <div className="lg:w-1/2 flex flex-col items-center self-center md:w-full">
                <AnimatedText
                  text={"Welcome to Kil -A- Bytes team project"}
                  className="!text-left"
                />
                <p className="my-4 text-base font-medium ">
                  Цахим хичээл болон тэтгэлэгийн мэдээллийн нэгдсэн сан.
                </p>
                <div className="flex invisible lg:visible items-center self-start mt-2">
                  <Link
                    className="flex items-center bg-dark dark:bg-light dark:text-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark dark:hover:text-light hover:text-dark border-2 border-solid border-transparent dark:hover:border-light dark:border-dark hover:border-dark"
                    href="/signin"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 h-1/3 md:w-full w-full">
                <Image
                  src={bannerImage}
                  alt="Kil-A-Bytes"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </HomeLayout>
          <div className="flex flex-col lg:flex-row items-center gap-10 text-lg mb-20 font-medium ">
            <Banner title={"Нийт сурагчид"} count={123} />
            <Banner title={"Нийт хичээл"} count={1340} />
            <Banner title={"Нийт багш нар"} count={78} />
          </div>

          <div className="container">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-4xl">Хичээлүүд</h3>
              {/* <div className="bg-blue-500 rounded-3xl h-1.5 w-32 my-6"></div> */}
            </div>
            <FeaturedCourses items={courses} />
          </div>
          <div></div>
          <div>
            <Decoration />
          </div>
          <div className="container">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-4xl">Мэдээ, мэдээлэл</h3>
              {/* <div className="bg-blue-500 rounded-3xl h-1.5 w-32 my-6"></div> */}
            </div>
            <FeaturedInfo items={news} />
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const placeHolder = "https://via.placeholder.com/400x230";
  const data = [
    {
      imageSrc: placeHolder,
      category: "Web development",
      title: "Digital Marketing Masterclass",
      price: "Free",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
    {
      imageSrc: placeHolder,
      category: "Finance",
      title: "The Basic Of Financial Analyst Course",
      price: "$100.00",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
    {
      imageSrc: placeHolder,
      category: "Finance",
      title: "Stock Trading Strategy",
      price: "$118.00",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
    {
      imageSrc: placeHolder,
      category: "Programming",
      title: "Stock Trading Strategy Course",
      price: "$118.00",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
    {
      imageSrc: placeHolder,
      category: "Finance",
      title: "The Basic Of Financial Analyst Course",
      price: "$100.00",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
    {
      imageSrc: placeHolder,
      category: "Finance",
      title: "The Basic Of Financial Analyst Course",
      price: "$100.00",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
  ];
  const coursesRequest = await axios.get(`http://localhost:5000/courses`);
  const courses = coursesRequest.data;
  const newsReq = await axios.get(`http://localhost:5000/news`);
  const news = newsReq.data;

  return { props: { courses, news } };
};
