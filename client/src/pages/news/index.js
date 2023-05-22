import Sorting from "@/components/ui/Listbox";
import Categories from "./Categories";
import NewsCard from "./NewsCard";
import { Layout } from "../../layouts/layout";
import axios from "axios";

<html>
  <title>News grid page</title>
  <meta
    name="description"
    content="List of different types of courses uploaded"
  ></meta>
</html>;

const placeHolder = "https://via.placeholder.com/400x230";

export default function Courses(props) {
  const { news } = props;

  return (
    <Layout>
      <div className="mx-10">
        <div className="container max-w-screen-xl flex gap-8 mx-auto mb-10 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Categories />
          <Sorting />
        </div>
        <div className="container max-w-screen-xl grid mx-auto gap-8 mb-10 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {news?.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const newsRequest = await axios.get(`process.env.NEXT_PUBLIC_API_URL/news`);
  const news = newsRequest.data;
  return {
    props: {
      news,
    },
  };
};
