import axios from "axios";
import { Layout } from "../../layouts/layout";
import Card from "@/components/CourseCard";
import NewsCard from "../../components/NewsCard";
import { useRouter } from "next/router";

export default function Search(props) {
  const { courses } = props;
  const { query } = useRouter();
  console.log("router", query);
  return (
    <Layout>
      <div className="container max-w-screen-xl grid mx-auto gap-8 mb-10 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses?.map((course, index) => (
          <Card key={index} course={course} />
        ))}
        {/* {news?.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))} */}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const { query } = ctx;
  console.log("query: ", query);
  const { key } = query;
  console.log("key", key);
  const coursesRequest = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search?key=${key}`
  );
  const courses = coursesRequest.data;
  return {
    props: {
      courses,
      //   news,
    },
  };
};
