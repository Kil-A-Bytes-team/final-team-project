import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { MdFlag, MdLanguage, MdMenuBook, MdOutlineQuiz } from "react-icons/md";
import { toast } from "react-toastify";
import { Layout } from "../../layouts/layout";
import axios from "axios";

const placeHolder = "https://via.placeholder.com/400x230";

const ProductView = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);

  const handleActive = () => {};
  //   const { addToBasket } = useBasket();
  const { course } = props;
  console.log("course:", course);
  const updateProductCount = () => {
    if (count < 0 && quantity === 1) {
      toast.warning("1 ээс бага бараа сагслах боломжгүй");
      return;
    }
    if (count > 0 && quantity === 10) {
      toast.warning("10 аас их бараа сагслах боломжгүй");
      return;
    }
    setQuantity(quantity + count);
  };

  const tabData = [
    { title: "Overview", id: 0 },
    { title: "Curriculum", id: 1 },
    { title: "Instructor", id: 2 },
    { title: "Reviews", id: 3 },
  ];
  const Overview = () => {
    return <div>{course.description}</div>;
  };
  const Curriculum = () => {
    return <div>description 1</div>;
  };
  const Instructor = () => {
    return <div>description 2</div>;
  };
  const Reviews = () => {
    return <div>description 3</div>;
  };
  return (
    <Layout>
      <div className="px-32 pb-10">
        <div className="flex justify-between mb-20">
          <div className=" w-3/5">
            <div className="text-5xl font-semibold pb-5">1.1 {course.name}</div>
            <div className="text-lg text-stone-700 pb-5">
              1.2 {course.description}
            </div>
            <div>
              <ul className="flex gap-x-28 gap-y-5 flex-wrap">
                <li className="flex  text-lg items-center gap-2">
                  <BiTimeFive />
                  <span className=" font-semibold">1.3.1 duration</span>
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <MdMenuBook />
                  <span className=" font-semibold">1.3.2 lectures</span>
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <MdLanguage />
                  <span className=" font-semibold">1.3.3 language</span>
                </li>
                <li className="flex items-center gap-2 text-lg">
                  {" "}
                  <FaGraduationCap />
                  <span className=" font-semibold">1.3.4 skill level</span>
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <MdOutlineQuiz />
                  <span className=" font-semibold">1.3.5 quizzes</span>
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <MdFlag />
                  <span className=" font-semibold">1.3.6 full</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid w-1/3  pt-24 gap-y-10 items-center">
            <div className=" aspect-video">
              <iframe
                width="560"
                height="315"
                src={`${course.videoUrl}`}
                title="YouTube video player"
                frameborder="0"
                className="top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>
            </div>
            <div className="flex justify-center items-center">
              <span className="mr-8 font-semibold">{course.price}$</span>
              <Link
                className="flex shadow-xl items-center bg-dark dark:bg-light dark:text-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark dark:hover:text-light hover:text-dark border-2 border-solid border-transparent dark:hover:border-light dark:border-dark hover:border-dark"
                href={`lessons/${course._id}`}
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <ul className="flex gap-8 h-10">
              {tabData.map((singleTabData) => (
                <li>
                  <button
                    className="group flex flex-col justify-between items-start"
                    onClick={() => {
                      setTabIndex(singleTabData.id);
                    }}
                  >
                    {singleTabData.title}
                    <span
                      className={`h-[1px] inline-block bg-dark group-hover:w-full  transition-all ease-in duration-300 ${
                        singleTabData.id === tabIndex ? "w-full" : "w-0"
                      }`}
                    >
                      &nbsp;
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <div>
              {tabIndex === 0 && <Overview />}
              {tabIndex === 1 && <Curriculum />}
              {tabIndex === 2 && <Instructor />}
              {tabIndex === 3 && <Reviews />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const { _id } = ctx.params;
  const coursesRequest = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/courses/${_id}`
  );
  const course = coursesRequest.data;
  return {
    props: {
      course,
    },
  };
};

export default ProductView;
