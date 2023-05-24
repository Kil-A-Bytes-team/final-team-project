import { useRecoilState } from "recoil";
import { BasketState } from "../atoms/atoms";
import { useCurrentUser } from "./useCurrentUser";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const useBasket = () => {
  const [basket, setBasket] = useRecoilState(BasketState);

  useEffect(() => {
    console.log("basket: ", basket);
  }, [basket]);
  const { currentUser } = useCurrentUser();

  const addToBasket = async (courseId, quantity) => {
    const basket = await updateBasket(courseId, quantity);
    setBasket(basket);
    toast.success("Hicheeliig amjilttai sagsallaa");
  };

  const updateBasket = async (courseId, quantity) => {
    if (!currentUser) {
      if (!basket) {
        console.log("created basket cuz it was empty");
        return { items: [{ courseId, quantity }] };
      }
      const newBasket = { items: [] };
      let { items } = basket;
      items = [...items];
      let updatedQuantiy = false;

      newBasket.items = items.map((item, index) => {
        if (item.courseId === courseId) {
          toast.warn("Ali hediin sagsalsan hicheel baina!");
          const newQuantity = item.quantity + quantity;
          updatedQuantiy = true;
          return { courseId: courseId, quantity: newQuantity };
        }
        return item;
      });
      if (!updatedQuantiy) {
        newBasket.items.push({ courseId, quantity });
      }
      return newBasket;
    }

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/baskets/add`,
      { courseId, quantity },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    );
    return res.data;
  };
  return { basket, setBasket, addToBasket };
};
