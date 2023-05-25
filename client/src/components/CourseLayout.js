import React from "react";
import { MdMenuBook } from "react-icons/md";

function CourseLayout({ children }) {
  const lessons = [
    {
      id: 1,
      title: "You can learn marketing in this lesson",
      time: "27 minutes",
    },
    {
      id: 2,
      title: "The basic of marketing in this lesson",
      time: "27 minutes",
    },
    {
      id: 3,
      title:
        "Praesent tristique lobortis hendrerit.Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget eros ultricies, porttitor libero non, volutpat ligula. Praesent in tortor a arcu commodo vehicula a vel sapien. Fusce at nulla est. Pellentesque euismod ligula vel",
      time: "27 minutes",
    },
    {
      id: 4,
      title: "English",
      time: "27 minutes",
    },
    {
      id: 5,
      title:
        "Praesent tristique lobortis hendrerit. Integer tincidunt quis lectus ut aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget eros ultricies, porttitor libero non, volutpat ligula. Praesent in tortor a arcu commodo vehicula a vel sapien. Fusce at nulla est. Pellentesque euismod ligula vel",
      time: "27 minutes",
    },
    {
      id: 6,
      title: "Coding",
      time: "27 minutes",
    },
    {
      id: 7,
      title:
        "Praesent tristique lobortis hendrerit. Integer tincidunt quis lectus ut aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget eros ultricies, porttitor libero non, volutpat ligula. Praesent in tortor a arcu commodo vehicula a vel sapien. Fusce at nulla est. Pellentesque euismod ligula vel",
      time: "27 minutes",
    },
    {
      id: 8,
      title: "Cooking",
      time: "27 minutes",
    },
    {
      id: 9,
      title:
        "Praesent tristique lobortis hendrerit. Integer tincidunt quis lectus ut aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eget eros ultricies, porttitor libero non, volutpat ligula. Praesent in tortor a arcu commodo vehicula a vel sapien. Fusce at nulla est. Pellentesque euismod ligula vel",
      time: "27 minutes",
    },
    {
      id: 10,
      title:
        "Morbi vitae convallis lacus, vitae vehicula ligula. Etiam id sagittis nisi, eget efficitur lacus. Quisque aliquam id eros id viverra. Vivamus auctor tincidunt commodo. Curabitur ullamcorper nibh in iaculis viverra.",
      time: "27 minutes",
    },
    {
      id: 11,
      title:
        "Praesent in tortor a arcu commodo vehicula a vel sapien. Fusce at nulla est. Pellentesque euismod ligula vel scelerisque tristique.",
      time: "27 minutes",
    },
  ];
  return (
    <>
      {/* Search bar */}
      <div className="absolute">
        <form>
          <div className="fixed top-0 h-[50px] bg-white z-10 w-[300px] xl:w-[475px] ">
            <input
              id="search-dropdown"
              className="block italic p-2.5 w-full z-20 text-[13px] h-[50px] text-gray-900 bg-gray-50 border-l-gray-50 border-l-2 border border-gray-300  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search for course content.."
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 bottom-0 p-2.5 text-sm font-medium text-black focus:outline-none"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>

        {/* Sidebar */}
        <div className="overflow-y-auto  h-screen w-[300px] xl:w-[475px] fixed">
          <ul>
            {lessons.map((lesson) => (
              <li key={lesson.id}>
                <button className="p-4 flex justify-between border cursor-pointer">
                  <div className="flex gap-4 w-[calc(100%-80px)]">
                    <MdMenuBook className="text-xl w-[20px]" />
                    <span className="text-[15px] font-medium w-[calc(100%-20px)]">
                      {lesson.title}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 w-[85px] text-right">
                    {lesson.time}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Header */}
      <div className="ml-[300px] xl:ml-[480px] w-full fixed top-0 flex items-center h-[50px] bg-slate-50 ">
        <h2 className="font-bold text-base pl-8">
          <a href="" className="w-full cursor-pointer">
            Financial Markets Introduction
          </a>
        </h2>
      </div>
      <div className=" pl-[300px] xl:pl-[480px] w-full mt-[50px]">
        {children}
      </div>
    </>
  );
}

export default CourseLayout;
