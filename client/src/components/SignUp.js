import Link from "next/link";
import { useState } from "react";
import { InputGroup } from "./InputGroup";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const router = useRouter();  
  const submitSignUp = () => {
    const body = { email, password, repassword };
    axios
      .post("http://localhost:5000/signup", body)
      .then(() => {
        toast.success("Бүртгэл амжилттай");
        router.push("/signin");
      })
      .catch((e) => {
        toast.error("Алдаа гарлаа");
      });
  };
  const handleCheckEmail = async ()=>{
    const body = { email, password, repassword };
     await axios.post("http://localhost:5000/otp/signup", body).then((res) => {
      const otp = window.prompt("Your OTP?");
      axios
        .post("http://localhost:5000/otp/signup/verify", { email, otp , password , repassword})
        .then((res) => {
          axios
      .post("http://localhost:5000/signup", body)
      .then(() => {
        toast.success("Бүртгэл амжилттай");
        router.push("/signin");
      })
      .catch((e) => {
        toast.error("Алдаа гарлаа");
      });
        }).catch((e)=>{
          toast.error("OTP is invalid")
        })
  })}


  return (
    <section className="bg-white dark:bg-dark min-h-[70vh] my-auto">
      <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-2 sm:mx-auto">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Системд бүртгүүлэх
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleCheckEmail();
              }}
            >
              <InputGroup
                label="И-Мэйл"
                placeholder="email@example.com"
                required={true}
                type="email"
                value={email}
                onChange={setEmail}
              />
              <InputGroup
                label="Нууц үг"
                placeholder="*********"
                required={true}
                type="password"
                value={password}
                onChange={setPassword}
              />
              <InputGroup
                label="Нууц үг давтах"
                placeholder="*********"
                required={true}
                type="password"
                value={repassword}
                onChange={setRepassword}
              />
              {/* <Button type="submit">Бүртгүүлэх</Button> */}
              <div className="flex items-center self-start mt-2">
                <button
                  type="submit"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  href="/signin"
                >
                  Бүртгүүлэх
                </button>
              </div>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Бүртгэлтэй хэрэглэгч? <Link href="/signin">Нэвтрэх</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
