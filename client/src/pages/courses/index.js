import Card from "@/components/CourseCard";
import Dropdown from "@/components/ui/Dropdown";

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
    <div className="mx-10">
      <Dropdown />
      <div className="container max-w-screen-xl grid mx-auto gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {course?.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export function getStaticProps() {
  const data = [
    {
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
      imageSrc: placeHolder,
      category: "Programming",
      title: "Stock Trading Strategy Course",
      description:
        "Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.",
      price: "$118.00",
      buttonLabel: "Add to cart",
      buttonUrl: "#",
    },
  ];
  return { props: { data } };
}
