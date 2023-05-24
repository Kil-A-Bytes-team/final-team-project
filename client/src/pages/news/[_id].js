import axios from "axios";
import { Layout } from "../../layouts/layout";

export default function Index(props) {
  const { news } = props;
  console.log(news);
  return (
    <>
      <Layout>
        <div className="container mx-auto px-60">
          <div className="container mx-auto dark:bg-dark flex flex-col items-center">
            <div className="color: #222 text-3xl font font-medium text-center mb-10">
              <h1>{news.title}</h1>
            </div>
            <div className="">
              <img
                className="w-[45rem] h-[25rem] rounded-lg"
                src={news.imageUrl}
              />
            </div>
            <div className="mb-36 mt-16 max-w-7xl font-semibold leading-loose text-gray-900 dark:text-white">
              <h5> {news.newsCategory?.name}</h5>
              <p>{news.text}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { _id } = ctx.params;
  const newsRequest = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/news/${_id}`
  );
  const news = newsRequest.data;
  return {
    props: {
      news,
    },
  };
};
