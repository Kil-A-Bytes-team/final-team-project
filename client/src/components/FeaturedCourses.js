// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-rating-stars-component";

import SwiperCore, { Pagination, Navigation } from "swiper";
import { useRef } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const placeHolder = "https://via.placeholder.com/230x150";

export default ({ items }) => {
  return (
    <Swiper
      spaceBetween={20}
      className={`w-full mb-10 relative py-[50px] mx-auto`}
      breakpoints={{
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
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
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
                  src={placeHolder}
                  alt="product image"
                />
              </a>
              <div className="pt-5 px-8">
                <div className="mb-5 flex justify-between items-center h-12">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-black focus:ring-4 focus:outline-none dark:text-white dark:hover:text-gray-300"
                  >
                    {slide.category}
                  </a>
                  <ReactStars
                    value={5}
                    count={5}
                    edit={false}
                    size={10}
                    activeColor="#ffd700"
                  />
                </div>

                <a href="#">
                  <h3 className="mb-8 h-12 font-semibold tracking-tight text-gray-900 dark:text-white transform transition duration-200 hover:scale-105">
                    {slide.title}
                  </h3>
                </a>

                <hr></hr>
                <div className="flex items-center justify-between">
                  <span className="text-l mr-auto text-blue-500  dark:text-white">
                    {slide.price}
                  </span>
                  <a
                    href="#"
                    className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:white dark:focus:ring-blue-800 transform transition duration-200 hover:scale-105"
                  >
                    <svg
                      className="w-[24px] h-[24px] text-blue-500 hover:text-black dark:hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="absolute right-0 top-0 z-[100] flex text-3xl ">
        <div className="p-2 cursor-pointer prev-nav flex items-center justify-center text-blue-400 hover:text-black dark:hover:text-white transition-colors duration-300">
          <FaChevronCircleLeft />
        </div>
        <div className="p-2 cursor-pointer next-nav text-3xl flex items-center justify-center text-blue-400 hover:text-black dark:hover:text-white transition-colors duration-300">
          <FaChevronCircleRight />
        </div>
      </div>
    </Swiper>
  );
};