import { Layout } from '../pages/layout';
export default function AboutUs() {
  const props = [
    { firstName: 'Temuulen', lastName: 'Munkhjargal', imgUrl: '/darga.png' },
    { firstName: 'Indra', lastName: 'Ulziibadrakh', imgUrl: '/indra.jpg' },
    { firstName: 'Usukhbayar', lastName: 'Tumenbayar', imgUrl: '/usukhu.jpg' },
  ];
  // const { us } = props;
  // console.log('us', us);
  return (
    <div className="">
      <div className="text-center font-bold text-4xl mb-24">
        <h1>Манай баг</h1>
      </div>
      <div className="flex flex-row justify-evenly">
        {props?.map((prop, index) => (
          <div key={index} className="flex flex-col mb-36 ">
            <img className="w-44 h-44 rounded-full object-cover" src={prop.imgUrl} />
            <span className="text-left text-4xl font-sans font-bold mt-5">{prop.firstName}</span>
            <span className="text-left text-4xl font-sans">{prop.lastName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
