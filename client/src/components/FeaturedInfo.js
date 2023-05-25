// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-rating-stars-component";

import { Pagination, Navigation } from "swiper";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const placeHolder = "https://via.placeholder.com/230x150";

export default ({ items }) => {
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      className={`w-full mb-10 relative py-[50px] mx-auto px-5 sm:px-0`}
      breakpoints={{
        639: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1536: {
          slidesPerView: 5,
        },
      }}
      autoplay={false}
      navigation={{ nextEl: ".next-nav", prevEl: ".prev-nav" }}
      //   pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      {items?.map((slide, i) => {
        return (
          <SwiperSlide key={i}>
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-dark dark:border-gray-400">
              <a
                href="#"
                className="aspect-video block relative overflow-hidden"
              >
                <img
                  className="rounded-t-lg absolute w-full h-full object-cover hover:opacity-75 hover:scale-110 transition duration-500 "
                  src={slide.imageUrl}
                  alt="product image"
                />
              </a>
              <div className="pt-5 px-4">
                <div className="mb-2 flex justify-between items-center">
                  <a
                    href={`/news/${slide._id}`}
                    className="text-blue-500 hover:text-black focus:ring-4 focus:outline-none dark:text-white dark:hover:text-gray-300"
                  >
                    {slide.newsCategory?.name}
                  </a>
                </div>

                <a href={`/news/${slide._id}`}>
                  <h3 className="mb-8 h-12 font-semibold tracking-tight text-gray-900 dark:text-white transform transition duration-200 hover:scale-105 line-clamp-2">
                    {slide.title}
                  </h3>
                </a>
                <div className="flex justify-between items-center mt-5">
                  <div className="self-end">
                    <a
                      href={`/news/${slide._id}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Дэлгэрэнгүй
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="absolute right-0 top-0 z-[100] flex text-3xl ">
        <button className="p-2 cursor-pointer prev-nav flex items-center justify-center text-blue-400 hover:text-black dark:hover:text-white transition-colors duration-300">
          <FaChevronCircleLeft />
        </button>
        <button className="p-2 cursor-pointer next-nav text-3xl flex items-center justify-center text-blue-400 hover:text-black dark:hover:text-white transition-colors duration-300">
          <FaChevronCircleRight />
        </button>
      </div>
    </Swiper>
  );
};
