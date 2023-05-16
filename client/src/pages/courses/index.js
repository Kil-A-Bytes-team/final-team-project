import Card from "@/components/CourseCard";
import Categories from "@/components/ui/Combobox";
import Sorting from "@/components/ui/Listbox";
import { Layout } from "../layout";

<html>
  <title>Courses grid page</title>
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
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const data = [
    {
      id: 1,
      imageSrc: placeHolder,
      category: "Programming",
      title: "Digital Marketing Masterclass",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      price: "Free",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
    {
      id: 2,
      imageSrc: placeHolder,
      category: "Finance",
      title: "The Basic Of Financial Analyst Course",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      price: "$100.00",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
    {
      id: 3,
      imageSrc: placeHolder,
      category: "Finance",
      title: "Stock Trading Strategy",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      price: "$118.00",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
    {
      id: 4,
      imageSrc: placeHolder,
      category: "Programming",
      title: "Stock Trading Strategy Course",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      price: "$118.00",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
    {
      id: 5,
      imageSrc: placeHolder,
      category: "Finance",
      title: "The Basic Of Financial Analyst Course",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      price: "$100.00",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
    {
      id: 6,
      imageSrc: placeHolder,
      category: "Finance",
      title: "The Basic Of Financial Analyst Course",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      price: "$100.00",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
  ];
  return { props: { data } };
}
