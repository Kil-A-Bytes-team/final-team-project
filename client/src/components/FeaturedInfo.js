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
      {items?.map((slide) => {
        return (
          <SwiperSlide>
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-dark dark:border-gray-400">
              <a
                href="#"
                className="aspect-video block relative overflow-hidden"
              >
                <img
                  className="rounded-t-lg absolute w-full h-full object-cover hover:opacity-75 hover:scale-110 transition duration-500 "
                  src={placeHolder}
                  alt="product image"
                />
              </a>
              <div className="pt-5 px-4">
                <div className="mb-2 flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-black focus:ring-4 focus:outline-none dark:text-white dark:hover:text-gray-300"
                  >
                    {slide.category}
                  </a>
                </div>

                <a href="#">
                  <h3 className="mb-8 h-12 font-semibold tracking-tight text-gray-900 dark:text-white transform transition duration-200 hover:scale-105">
                    {slide.title}
                  </h3>
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      {items?.map((slide) => {
        return (
          <SwiperSlide>
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    href="#"
                    className="text-blue-500 hover:text-black focus:ring-4 focus:outline-none dark:text-white dark:hover:text-gray-300"
                  >
                    {slide.category}
                  </a>
                </div>

                <a href="#">
                  <h3 className="mb-8 h-12 font-semibold tracking-tight text-gray-900 dark:text-white transform transition duration-200 hover:scale-105">
                    {slide.title}
                  </h3>
                </a>
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
