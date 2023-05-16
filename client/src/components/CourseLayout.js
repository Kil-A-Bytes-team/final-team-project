import React from "react";
import { MdMenuBook } from "react-icons/md";

function CourseLayout({ children }) {
  return (
    <div className="container">
      <div className="overflow-y-auto h-[70vh] w-1/3 ">
        <ul>
          <li>
            <a className="p-4 flex justify-between border">
              <div className="flex gap-4 w-[calc(100%-79px)]">
                <MdMenuBook className="text-xl w-[20px]" />
                <span className="font-semibold w-[calc(100%-20px)]">
                  You can learn the basic of marketing in this lesson You can
                  learn the basic of marketing in this lesson
                </span>
              </div>
              <span className="text-sm w-[80px] text-right">27 minutes</span>
            </a>
          </li>
          <li>
            <a className="p-4 flex justify-between border">
              <div className="flex gap-4 w-[calc(100%-79px)]">
                <MdMenuBook className="text-xl w-[20px]" />
                <span className="font-semibold w-[calc(100%-20px)]">
                  You can learn the
                </span>
              </div>
              <span className="text-sm w-[79px] text-right">27 minutes</span>
            </a>
          </li>
          <li>
            <a className="p-4 flex justify-between border">
              <div className="flex gap-4 w-[calc(100%-79px)]">
                <MdMenuBook className="text-xl w-[20px]" />
                <span className="font-semibold w-[calc(100%-20px)]">
                  marketing in this lesson You can learn the basic of marketing
                  in this lesson
                </span>
              </div>
              <span className="text-sm w-[79px] text-right">27 minutes</span>
            </a>
          </li>
          <li>
            <a className="p-4 flex justify-between border">
              <div className="flex gap-4 w-[calc(100%-79px)]">
                <MdMenuBook className="text-xl w-[20px]" />
                <span className="font-semibold w-[calc(100%-20px)]">
                  Business-to-consumer marketing, or B2C marketing, refers to
                  the tactics and strategies in which a company promotes its
                  products and services to individual people.
                </span>
              </div>
              <span className="text-sm w-[79px] text-right">27 minutes</span>
            </a>
          </li>
          <li>
            <a className="p-4 flex justify-between border">
              <div className="flex gap-4 w-[calc(100%-79px)]">
                <MdMenuBook className="text-xl w-[20px]" />
                <span className="font-semibold w-[calc(100%-20px)]">
                  marketing in this lesson You can learn the basic of marketing
                  in this lesson
                </span>
              </div>
              <span className="text-sm w-[79px] text-right">27 minutes</span>
            </a>
          </li>
          <li>
            <a className="p-4 flex justify-between border">
              <div className="flex gap-4 w-[calc(100%-79px)]">
                <MdMenuBook className="text-xl w-[20px]" />
                <span className="font-semibold w-[calc(100%-20px)]">
                  Open the door to sought-after technology careers with a
                  world-class online Bachelor of Science (BSc) in Computer
                  Science degree from the University of London.
                </span>
              </div>
              <span className="text-sm w-[79px] text-right">27 minutes</span>
            </a>
          </li>
          <li>
            <a className="p-4 flex justify-between border">
              <div className="flex gap-4 w-[calc(100%-79px)]">
                <MdMenuBook className="text-xl w-[20px]" />
                <span className="font-semibold w-[calc(100%-20px)]">
                  Open the door to sought-after technology careers with a
                  world-class online Bachelor of Science (BSc) in Computer
                  Science degree from the University of London. You’ll master
                  in-demand computing skills, solve complex problems, and hone
                  your innovation and creativity.
                </span>
              </div>
              <span className="text-sm w-[79px] text-right">27 minutes</span>
            </a>
          </li>
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default CourseLayout;
