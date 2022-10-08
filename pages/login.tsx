import { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent, HTMLInputTypeAttribute, useEffect, useState } from "react";
import { credentials, loginForm } from "../types/type";
import { api } from "../utils/api";

const LoginPage: NextPage = () => {
  const [form, setForm] = useState<loginForm>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [cred, setCred] = useState<credentials | string>((): any => {
    if (typeof window !== "undefined")
      return window.localStorage.getItem("creds");
  });
  const [errorMsg, setErrorMsg] = useState<string | [] | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

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
    api
      .post("/auth/login", {
        email: form.email,
        password: form.password,
      })
      .then((res: { data: credentials }) => {
        window.localStorage.setItem("creds", JSON.stringify(res.data));
        router.push("/");
      })
      .catch((err) => {
        const { status } = err.response;
        if (status === 422) {
          console.error(err.message);
          setErrorMsg(() => err.detail.map((v: { loc: [] }) => v.loc));
        }
        if (status === 400) {
          setErrorMsg("email or password invalid");
        }
        status === 500 && console.error(err);
      });
  };

  useEffect(() => {
    cred && router.push("/");
    !cred && setLoading(false);

    () => setLoading(false);
  }, [cred, router]);

  useEffect(() => {
    const err = setTimeout(() => {
      setErrorMsg(null);
    }, 3000);

    return () => {
      clearTimeout(err);
    };
  }, [errorMsg]);
  return (
    <>
      {!loading && (
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
            {errorMsg && <p className={`text-red-500`}>{errorMsg}</p>}
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
      )}
    </>
  );
};
export default LoginPage;
