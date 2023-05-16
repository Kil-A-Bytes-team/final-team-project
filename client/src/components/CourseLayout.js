import React from "react";
import { MdMenuBook } from "react-icons/md";

function CourseLayout({ children }) {
  const courses = [
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
      <div className="absolute">
        <form>
          <div className="fixed top-0  bg-white z-10 w-[300px] xl:w-[475px] ">
            <input
              id="search-dropdown"
              className="block italic p-2.5 w-full z-20 text-[13px] text-gray-900 bg-gray-50 border-l-gray-50 border-l-2 border border-gray-300  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search for course content.."
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-black focus:outline-none"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>

        <div className="overflow-y-auto pt-[42px] h-screen w-[300px] xl:w-[475px] fixed">
          <ul>
            {courses.map((course) => (
              <li key={course.id}>
                <a className="p-4 flex justify-between border cursor-pointer">
                  <div className="flex gap-4 w-[calc(100%-80px)]">
                    <MdMenuBook className="text-xl w-[20px]" />
                    <span className="text-[15px] font-medium w-[calc(100%-20px)]">
                      {course.title}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 w-[85px] text-right">
                    {course.time}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="ml-[310px] xl:ml-[480px]">
        <a className="w-full border cursor-pointer h-[41.5px] p-2 ">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-sm">
              Financial Markets Introduction
            </h2>
            <div className="text-sm">1 of 15 items</div>
            <div className="text-sm">progress bar</div>
          </div>
        </a>
      </div>
    </>
  );
}

export default CourseLayout;
