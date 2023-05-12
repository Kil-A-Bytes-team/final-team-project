import Link from "next/link";
import { useState } from "react";
import { InputGroup } from "./InputGroup";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitSignIn = () => {
    const body = { email, password };
    axios.post("/signin", body).then(() => {
      toast.success("Амжилттай нэвтэрлээ");
      navigate("/");
    });
  };
  return (
    <section className="bg-white dark:bg-dark min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-2 sm:mx-auto">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Системд нэвтрэх
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                submitSignIn();
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
              {/* <Button type="submit">Бүртгүүлэх</Button> */}
              <div className="flex items-center self-start mt-2">
                <Link
                  type="submit"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  href="/"
                >
                  Нэвтрэх
                </Link>
              </div>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Бүртгэлгүй хэрэглэгч? <Link href="/signup">Бүртгүүлэх</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
