import axios from 'axios';
import { Layout } from '../layout';

export default function Index(props) {
  const { news } = props;
  return (
    <>
      <Layout>
        <div className="wrapper">
          <div className="container mx-auto bg-slate-100 dark:bg-dark">
            <div className="color: #222 text-3xl font font-medium text-center mb-20">
              <h1>{news.title}</h1>
            </div>
            <blockquote className="flex text-xl italic font-semibold text-gray-900 dark:text-white gap-10 mb-20 max-w-6xl align-middle">
              <img className="w-96 h-96 rounded-lg" src={news.imageUrl} />
              <p>"{news.description}"</p>
            </blockquote>
            <div className="mb-96 max-w-7xl font-semibold leading-loose text-gray-900 dark:text-white">
              <h5>{news.category}</h5>
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
  const newsRequest = await axios.get(`http://localhost:5000/news/${_id}`);
  const news = newsRequest.data;
  return {
    props: {
      news,
    },
  };
};
