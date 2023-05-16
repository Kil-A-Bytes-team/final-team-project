import Sorting from "@/components/ui/Listbox";
import Categories from "./Categories";
import NewsCard from "./NewsCard";
import { Layout } from "../layout";

<html>
  <title>News grid page</title>
  <meta
    name="description"
    content="List of different types of courses uploaded"
  ></meta>
</html>;

const placeHolder = "https://via.placeholder.com/400x230";

export default function Courses({ data }) {
  const course = data;

  return (
    <Layout>
      <div className="mx-10">
        <div className="container max-w-screen-xl flex gap-8 mx-auto mb-10 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Categories />
          <Sorting />
        </div>
        <div className="container max-w-screen-xl grid mx-auto gap-8 mb-10 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {course?.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const data = [
    {
      imageSrc: placeHolder,
      category: "Scholarship",
      title: "Digital Marketing Masterclass",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      buttonLabel: "Learn more",
      buttonUrl: "#",
    },
    {
      imageSrc: placeHolder,
      category: "Essay",
      title: "The Basic Of Financial Analyst Course",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      buttonLabel: "Learn more",
      buttonUrl: "#",
    },
    {
      imageSrc: placeHolder,
      category: "Interview",
      title: "Stock Trading Strategy",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      buttonLabel: "Learn more",
      buttonUrl: "#",
    },
    {
      imageSrc: placeHolder,
      category: "Scholarship",
      title: "Stock Trading Strategy Course",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      buttonLabel: "Learn more",
      buttonUrl: "#",
    },
    {
      imageSrc: placeHolder,
      category: "Scholarship",
      title: "The Basic Of Financial Analyst Course",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      buttonLabel: "Learn more",
      buttonUrl: "#",
    },
    {
      imageSrc: placeHolder,
      category: "Scholarship",
      title: "The Basic Of Financial Analyst Course",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      buttonLabel: "Learn more",
      buttonUrl: "#",
    },
  ];
  return { props: { data } };
}
