import Link from "next/link";

const placeHolder = "https://via.placeholder.com/400x230";

export default function Card({ news }) {
  const { imageUrl, newsCategory, title, description, buttonLabel, buttonUrl } =
    news;
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="flex  justify-center ">
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href={`/news/${news._id}`}>
          <img
            className="rounded-t-lg w-full h-[210px]"
            src={imageUrl}
            alt="card image"
            width="400"
            height="230"
          />

          <div className="p-10 ">
            <div className="flex justify-between items-center ">
              <a
                href="#"
                className="text-blue-500 hover:text-black focus:ring-4 focus:outline-none dark:text-white dark:hover:text-gray-300"
              >
                {newsCategory?.name}
              </a>
            </div>

            <a href="#">
              <h5 className="mt-3 mb-5 h-24 overflow-hidden text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <span className="line-clamp-3">{title}</span>
              </h5>
            </a>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
              {description}
            </p>
            <div className="flex justify-between items-center mt-5">
              <div className="self-end">
                <a
                  href={buttonUrl}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {buttonLabel} Цааш нь унших
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
        </Link>
      </div>
    </div>
  );
}
