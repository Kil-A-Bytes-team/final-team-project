import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Layout } from "../layout";

const AllDiv = () => {
  return (
    <div class=" shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Result
            </th>
            <th scope="col" class="px-6 py-3">
              Started time
            </th>
            <th scope="col" class="px-6 py-3">
              End time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Digital Marketing Masterclass
            </th>
            <td class="px-6 py-4">Category</td>
            <td class="px-6 py-4">0%</td>
            <td class="px-6 py-4">2023-04-27 16:38:05</td>
            <td class="px-6 py-4">-</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Investment Master : Key To Success
            </th>
            <td class="px-6 py-4">Category</td>
            <td class="px-6 py-4">0%</td>
            <td class="px-6 py-4">2023-04-27 16:38:05</td>
            <td class="px-6 py-4">-</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              The Business Intelligence Analyst
            </th>
            <td class="px-6 py-4">Category</td>
            <td class="px-6 py-4">0%</td>
            <td class="px-6 py-4">2023-04-27 16:38:05</td>
            <td class="px-6 py-4">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const InProgressDiv = () => {
  return (
    <div class=" shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Result
            </th>
            <th scope="col" class="px-6 py-3">
              Started time
            </th>
            <th scope="col" class="px-6 py-3">
              End time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Digital Marketing Masterclass
            </th>
            <td class="px-6 py-4">Category</td>
            <td class="px-6 py-4">0%</td>
            <td class="px-6 py-4">2023-04-27 16:38:05</td>
            <td class="px-6 py-4">-</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Investment Master : Key To Success
            </th>
            <td class="px-6 py-4">Category</td>
            <td class="px-6 py-4">0%</td>
            <td class="px-6 py-4">2023-04-27 16:38:05</td>
            <td class="px-6 py-4">-</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              The Business Intelligence Analyst
            </th>
            <td class="px-6 py-4">Category</td>
            <td class="px-6 py-4">0%</td>
            <td class="px-6 py-4">2023-04-27 16:38:05</td>
            <td class="px-6 py-4">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default function UserProfile({}) {
  const router = useRouter();
  const { id } = router.query;
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <Layout>
      {/* <ul>
        <li>
          <button onClick={() => setTabIndex(0)}>Tab 1</button>
        </li>
        <li>
          <button onClick={() => setTabIndex(1)}>Tab 2</button>
        </li>
      </ul>
      <div>
        {tabIndex === 0 && <Comp />}
        {tabIndex === 1 && <Comp2 />}
      </div> */}
      <div className="sm:container sm:mx-auto">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-2 col-auto">
            <div className="flex justify-between gap-5">
              <div class="w-1/4">
                <img
                  src="https://placeimg.com/640/480/any"
                  alt="Profile Image"
                  className="w-36 h-36 rounded-full ml-12"
                />

                <div class="row-start-auto">
                  <div class="w-64 mt-12 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <Link
                      href={"/profile"}
                      class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-10 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white space-x-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                      <div>Courses</div>
                    </Link>

                    <Link
                      href={"/profile/order"}
                      class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white space-x-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                      <div>Orders</div>
                    </Link>
                    <Link
                      href={"/profile/settings"}
                      class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white space-x-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                        />
                      </svg>
                      <div>Settings</div>
                    </Link>
                    <Link
                      href={"/l"}
                      class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white dark:bg-gray-500 space-x-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                      <div>Logout</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="w-3/4">
                <h1 className="text-2xl font-bold my-20 px-30">User Profile</h1>
                <div className="flex mb-16">
                  <div className="mx-20 box-content text-center h-12 w-40 p-4 border-4 border-bg-[#F5F5F5] bg-[#F5F5F5]">
                    <div className="text-[#666]">Enrolled Courses</div>
                    <div>3</div>
                  </div>
                  <div className="mx-20 box-content text-center h-12 w-40 p-4 border-4 border-bg-[#F5F5F5] bg-[#F5F5F5]">
                    <div className="text-[#666]">Active Courses</div>
                    <div>3</div>
                  </div>
                  <div className="mx-20 box-content text-center h-12 w-40 p-4 border-4 border-bg-[#F5F5F5] bg-[#F5F5F5]">
                    <div className="text-[#666]">Completed Courses</div>
                    <div>0</div>
                  </div>
                </div>
                <hr />

                <div>
                  <a class="mt-10 inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">
                    Enrolled
                  </a>
                  <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul class="flex flex-wrap">
                      <li class="mr-2">
                        <button
                          onClick={() => setTabIndex(0)}
                          class={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                            tabIndex === 0 &&
                            `dark:text-blue-500 dark:border-blue-500 border-blue-600`
                          }hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                        >
                          All
                        </button>
                      </li>
                      <li class="mr-2">
                        <button
                          onClick={() => setTabIndex(1)}
                          class={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                            tabIndex === 1 &&
                            `dark:text-blue-500 dark:border-blue-500 border-blue-600`
                          }hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                        >
                          In progress
                        </button>
                      </li>
                      <li class="mr-2">
                        <button
                          onClick={() => setTabIndex(2)}
                          class={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                            tabIndex === 2 &&
                            `dark:text-blue-500 dark:border-blue-500 border-blue-600`
                          }hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                        >
                          Finished
                        </button>
                      </li>
                      <li class="mr-2">
                        <button
                          onClick={() => setTabIndex(3)}
                          class={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                            tabIndex === 3 &&
                            `dark:text-blue-500 dark:border-blue-500 border-blue-600`
                          }hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                        >
                          Passed
                        </button>
                      </li>
                      <li class="mr-2">
                        <button
                          onClick={() => setTabIndex(4)}
                          class={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                            tabIndex === 4 &&
                            `dark:text-blue-500 dark:border-blue-500 border-blue-600`
                          }hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                        >
                          Failed
                        </button>
                      </li>
                    </ul>
                    <div>
                      {tabIndex === 0 && <AllDiv />}
                      {tabIndex === 1 && <InProgressDiv />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
