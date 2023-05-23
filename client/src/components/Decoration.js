import React from "react";
import { BsPerson, BsMouse2, BsLaptop, BsClock } from "react-icons/bs";

function Decoration() {
  return (
    <div className="flex justify-between py-14 px-0 container flex-wrap">
      <div className=" max-md:w-full lg:w-5/12">
        <div className="text-lg text-blue-500 font-medium mb-3">
          Хүссэн газраасаа, хүссэн хичээлээ сур
        </div>
        <h1 className="text-[34px] font-bold mb-5 leading-snug">
          Цахим хичээл болон тэтгэлэгийн мэдээллийн нэгдсэн сан
        </h1>
        <span className="leading-loose">
          Millions of people have used our website to decide which online course
          to take. We aggregate courses from many universities to help you find
          the best courses on almost any subject, wherever they exist. Our goal
          is to make online education work for everyone.
        </span>
        <div className="mt-7">
          <ul>
            <div className="flex gap-[10px]">
              <li className="flex items-center flex-grow">
                <span className="text-[40px] text-blue-500 ">
                  <BsPerson />
                </span>
                <div className="font-bold text-lg ml-2">
                  Ганцаарчилсан ангиуд
                </div>
              </li>
              <li className="flex items-center flex-grow">
                <span className="text-[40px] text-blue-500">
                  <BsLaptop />
                </span>
                <div className="font-bold text-lg ml-2">Уян хатан байдал</div>
              </li>
            </div>
            <div className="flex gap-7 mt-5">
              <li className="flex items-center flex-grow">
                <span className="text-[40px] text-blue-500">
                  <BsClock />
                </span>
                <div className="font-bold text-lg ml-2">Насан туршийн</div>
              </li>
              <li className="flex items-center flex-grow">
                <span className="text-[40px] text-blue-500">
                  <BsMouse2 />
                </span>
                <div className="font-bold text-lg"> Цахим сургалт</div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="lg:w-1/2 h-1/3 md:w-full sm:w-full">
        <img
          src={"/decoration.png"}
          alt="Kil-A-Bytes"
          className="w-full h-auto py-6 px-6"
        />
      </div>
    </div>
  );
}

export default Decoration;
