export default function AboutUs() {
  const props = [
    {
      firstName: "Indra",
      lastName: "Ulziibadrakh",
      imgUrl: "/indra.jpg",
      linkedin: "https://www.linkedin.com/in/indra-ulziibadrakh-92778418b/",
      email: "indra.ulziibadrakh@gmail.com",
    },
    {
      firstName: "Usukhbayar",
      lastName: "Tumenbayar",
      imgUrl: "/usukhu.jpg",
      linkedin: "https://www.linkedin.com/in/usukhbayar-tumenbayar-40b00825a/",
      email: "osoho_123@yahoo.com",
    },
    {
      firstName: "Temuulen",
      lastName: "Munkhjargal",
      imgUrl: "/temka.jpg",
      email: "temuulen.m@ebazaar.mn",
    },
  ];
  // const { us } = props;
  // console.log('us', us);
  return (
    <div className="my-12">
      <div className="text-center font-bold text-4xl mb-12">
        <h1>Манай баг</h1>
      </div>
      <div className="flex flex-row gap-10 justify-center">
        {props?.map((prop, index) => (
          <div
            key={index}
            className="transition-all duration-400 flex-1 group bg-white shadow-sm hover:shadow-lg py-7 px-6 cursor-pointer flex flex-col items-center"
          >
            <div className="transition-all duration-400 translate-y-0 group-hover:-translate-y-4 flex flex-col items-center">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-4">
                <img
                  src={prop.imgUrl}
                  className="w-full h-full object-[center_top] object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="text-xl mb-3">
                {prop.lastName} <b>{prop.firstName}</b>
              </h3>
              <a href={`mailto:@${prop.email}`} className="hover:text-blue-400">
                {prop.email}
              </a>
            </div>
            <div className="transition-all duration-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
              <a
                href={prop.linkedin}
                target="_blank"
                className="hover:text-blue-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
