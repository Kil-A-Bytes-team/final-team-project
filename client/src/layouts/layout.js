import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useEffect } from "react";
import axios from "axios";
import { useBasket } from "../hooks/useBasket";

export const Layout = ({ children }) => {
  const { currentUser, setCurrentUser } = useCurrentUser();
  const { basket, setBasket } = useBasket();
  // const loading = useLoading();

  useEffect(() => {
    if (!currentUser) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/currentUser`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          setCurrentUser(res.data);
        })
        .catch((error) => {
          console.log("User is not signed in");
        });
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/baskets/main`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setBasket(res.data);
        });
    }
  }, [currentUser]);
  return (
    <>
      <div className="bg-light dark:bg-dark w-full min-h-screen text-dark dark:text-light">
        <Header currentUser={currentUser} />
        {children}
        <Footer />
      </div>
    </>
  );
};
