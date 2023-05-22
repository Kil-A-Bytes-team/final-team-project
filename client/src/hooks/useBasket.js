import { useRecoilState } from "recoil";
import { BasketState } from "../atoms/atoms";

export const useBasket = () => {
  const [basket, setBasket] = useRecoilState(BasketState);
  return { basket, setBasket };
};
