import { useState } from "react";
import Card from "./CourseCard";
const placeHolder = "https://via.placeholder.com/400x230";
const initalState = [
  { idx: 1, pos: 1, text: "1", active: true },
  { idx: 2, pos: 2, text: "2", active: true },
  { idx: 3, pos: 3, text: "3", active: true },
  { idx: 4, pos: 4, text: "4", active: false },
];
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
    idx: 1,
    pos: 1,
    active: true,
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
    idx: 2,
    pos: 2,
    active: true,
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
    idx: 3,
    pos: 3,
    active: true,
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
    idx: 4,
    pos: 4,
    active: false,
  },
];

export const Carousel = () => {
  const [cards, setCards] = useState(data);

  const handleLeftClick = (isLeft) => {
    const prevState = [...cards];
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    // maximize pos
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    // update state
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;

    // update state
    setCards(prevState);
  };
  return (
    <>
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={() => handleLeftClick()}
      >
        &#8249;
      </div>
      {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <Card key={index} {...card} />
        ))}
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={() => handleRightClick()}
      >
        &#8250;
      </div>
    </>
  );
};
