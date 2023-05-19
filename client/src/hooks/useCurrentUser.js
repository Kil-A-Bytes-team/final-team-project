import { useRecoilState } from "recoil";
import { currentUserState } from "../atoms/atoms";
export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  return { currentUser, setCurrentUser };
};
