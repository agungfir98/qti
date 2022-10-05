import { NextPage } from "next";
import { FormEvent, HTMLInputTypeAttribute, useEffect, useState } from "react";
import { loginForm } from "../types/type";

const LoginPage: NextPage = () => {
  const [form, setForm] = useState<loginForm>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: {
    target: { value: HTMLInputTypeAttribute; name: HTMLInputTypeAttribute };
  }) => {
    const { name } = e.target;

    setForm((prev) => {
      if (name === "email") {
        return {
          ...prev,
          email: e.target.value,
        };
      }
      if (name === "password") {
        return {
          ...prev,
          password: e.target.value,
        };
      }
      if (name === "rememberme") {
        return {
          ...prev,
          rememberMe: !form.rememberMe,
        };
      }
      return { ...prev };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("loginnnnn");
    console.log(form);
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-tr from-cyan-400 to-blue-500">
      <div className="flex flex-col gap-3 w-full h-fit m-[18px] md:w-[467px] bg-white rounded-xl p-[18px] py-7 shadow-customsatu">
        <header className="flex flex-col gap-2 justify-center">
          <h1 className="text-center text-[#03050B] text-xl font-semibold">
            Login
          </h1>
          <p className="text-center text-[rgba(52,52,52,0.7)] font-medium text-sm">
            Welcome back, enter your credentials to continue
          </p>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* // *Email ======== */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold text-sm">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="bg-[#EFEFEF] p-3 px-4 rounded-xl"
            />
          </div>

          {/* // *Password ======== */}
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold text-sm">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="bg-[#EFEFEF] p-3 px-4 rounded-xl"
            />
          </div>

          {/* // *CheckBox ======== */}
          <div className=" flex gap-2 my-1 items-center">
            <input
              type="checkbox"
              name="rememberme"
              id="rememberme"
              checked={form.rememberMe}
              onChange={handleChange}
            />
            <label
              htmlFor="rememberme"
              className="font-semibold text-sm cursor-pointer checkbox-label flex"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#198564] rounded-lg py-3 text-white font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
