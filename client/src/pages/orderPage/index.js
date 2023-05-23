import Link from 'next/link';
import { Layout } from '../../layouts/layout';

export default function orderPage() {
  const props = [
    {name: "monpay", img: "/monpay.jpeg"},
    {name: "socialpay", img: "/social pay.png"},
    {name: "qpay", img: "/qpay.png"}
  ];

  return (
    <Layout>
      <div className="container mx-auto">
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Checkout</h3>
        <div className="flex flex-row justify-evenly">
          {props?.map((prop, i) => (
            <div key={i} className="flex flex-col mb-36">
              <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" clas="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

                </input>
              <img
              className="w-44 h-44 rounded-full object-cover"
              src={prop.img}
              />
            <span className="text-center text-3xl font-sans font-bold mt-5">
              {prop.name}
            </span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
