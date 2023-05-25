import { useRecoilState } from "recoil";
import { BasketState } from "../atoms/atoms";
import { useCurrentUser } from "./useCurrentUser";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const useBasket = () => {
  const [basket, setBasket] = useRecoilState(BasketState);

  useEffect(() => {
    // console.log("basket: ", basket);
  }, [basket]);
  const { currentUser } = useCurrentUser();

  const addToBasket = async (courseId) => {
    const basket = await updateBasket(courseId);
    setBasket(basket);
    toast.success("Hicheeliig amjilttai sagsallaa");
  };

  const updateBasket = async (courseId) => {
    if (!currentUser) {
      if (!basket) {
        console.log("created basket cuz it was empty");
        return { items: [{ courseId }] };
      }
      const newBasket = { items: [] };
      let { items } = basket;
      items = [...items];
      let updatedQuantiy = false;
      toast.warn("Ali hediin sagsalsan hicheel baina!");

      newBasket.items = items.map((item, index) => {
        if (item.courseId === courseId) {
          updatedQuantiy = true;

          return { courseId: courseId };
        }
        return item;
      });
      toast.warn("Ali hediin sagsalsan hicheel baina!");

      if (!updatedQuantiy) {
        newBasket.items.push({ courseId });
      }
      return newBasket;
    }

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/baskets/add`,
      { courseId },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    );
    return res.data;
  };
  return { basket, setBasket, addToBasket };
};
