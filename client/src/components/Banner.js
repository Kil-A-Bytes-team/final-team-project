import { CountUp } from "use-count-up";

export const Banner = ({ title, count }) => {
  return (
    <div>
      <span className="text-4xl font-bold">
        <CountUp isCounting end={count} duration={3.0} />
      </span>
      <h1 className="my-3">{title}</h1>
      <div className="bg-[#0d456c] dark:bg-white h-0.5 w-72 lg:w-56 xl:w-72"></div>
    </div>
  );

  // return (
  //   <div className="flex gap-8 text-lg font-medium">
  //     <div>
  //       <span className="text-4xl">
  //         <CountUp isCounting end={123} duration={3.0} />
  //       </span>
  //       <h1>Нийт сурагчид </h1>
  //     </div>

  //     <div>
  //       <span className="text-4xl">
  //         <CountUp isCounting end={153} duration={3.0} />
  //       </span>
  //       <h1>Нийт хичээл</h1>
  //     </div>

  //     <div>
  //       <span className="text-4xl">
  //         <CountUp isCounting end={119} duration={3.0} />
  //       </span>
  //       <h1>Нийт багш нар</h1>
  //     </div>
  //   </div>
  // );
};
