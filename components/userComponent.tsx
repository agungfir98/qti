import { Router, useRouter } from "next/router";
import React, { createContext, FormEvent, useEffect, useState } from "react";
import { credentials, UsersData } from "../types/type";
import { api } from "../utils/api";
import { UserTable } from "./user/userTable";
export const UserParamContext = createContext(
  {} as {
    params: { pageNum: number; pageSize: number; search: string };
    Data: UsersData;
  }
);

const UserComponent = () => {
  const [params, setParams] = useState({
    pageNum: 1,
    pageSize: 10,
    search: "",
  });
  const [Data, setData] = useState<UsersData>({} as UsersData);
  const [cred, setCred] = useState<string>((): any => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("creds") || "";
    }
  });

  const router = useRouter();
  const user: credentials = JSON.parse(cred);

  useEffect(() => {
    api
      .get(`/user/`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChangePage = async (index: number) => {
    api
      .get(`/user/?page=${index}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSearch = async (str: string) => {
    api
      .get(`/user/?search=${str}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <UserParamContext.Provider value={{ params, Data }}>
      <div className="grid grid-cols-1 gap-5">
        <div className="flex flex-col md:flex-row gap-2 justify-between item-center">
          <div>
            <h1 className="font-semibold text-lg">User Management</h1>
            <p className="font-medium text-sm text-black/50">User</p>
          </div>
          <div id="right" className="flex gap-2 justify-center items-center">
            <div className="flex items-center gap-2 w-full max-h-9">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch(params.search);
                }}
                id="search"
                className="relative z-0 "
              >
                <input
                  type="text"
                  name="search"
                  value={params.search}
                  onChange={(e) =>
                    setParams((prev) => {
                      return { ...prev, search: e.target.value };
                    })
                  }
                  placeholder="Search name"
                  className="px-2 py-5 max-h-9 bg-white rounded-md outline outline-1 outline-slate-400 w-full"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 z-0">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6539 17.5239L13.328 12.198C14.1545 11.1296 14.6016 9.82324 14.6016 8.44922C14.6016 6.80449 13.9597 5.2623 12.7989 4.09951C11.6382 2.93672 10.0919 2.29688 8.44922 2.29688C6.80654 2.29688 5.26025 2.93877 4.09951 4.09951C2.93672 5.26025 2.29688 6.80449 2.29688 8.44922C2.29688 10.0919 2.93877 11.6382 4.09951 12.7989C5.26025 13.9617 6.80449 14.6016 8.44922 14.6016C9.82324 14.6016 11.1275 14.1545 12.196 13.3301L17.5219 18.6539C17.5375 18.6695 17.556 18.6819 17.5764 18.6904C17.5969 18.6988 17.6187 18.7032 17.6408 18.7032C17.6629 18.7032 17.6848 18.6988 17.7052 18.6904C17.7256 18.6819 17.7441 18.6695 17.7598 18.6539L18.6539 17.7618C18.6695 17.7462 18.6819 17.7277 18.6904 17.7072C18.6988 17.6868 18.7032 17.665 18.7032 17.6429C18.7032 17.6208 18.6988 17.5989 18.6904 17.5785C18.6819 17.5581 18.6695 17.5395 18.6539 17.5239ZM11.6977 11.6977C10.8281 12.5651 9.67559 13.043 8.44922 13.043C7.22285 13.043 6.07031 12.5651 5.20078 11.6977C4.3333 10.8281 3.85547 9.67559 3.85547 8.44922C3.85547 7.22285 4.3333 6.06826 5.20078 5.20078C6.07031 4.3333 7.22285 3.85547 8.44922 3.85547C9.67559 3.85547 10.8302 4.33125 11.6977 5.20078C12.5651 6.07031 13.043 7.22285 13.043 8.44922C13.043 9.67559 12.5651 10.8302 11.6977 11.6977Z"
                      fill="#03050B"
                    />
                  </svg>
                </button>
              </form>
              <div
                id="createbtn"
                className="grow bg-green-600 max-h-9 rounded-md px-3 p-5 flex items-center text-white cursor-pointer"
              >
                <div id="icon" className="pr-2 ">
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3555 3.76562H11.6445C11.7591 3.76562 11.8164 3.82292 11.8164 3.9375V19.0625C11.8164 19.1771 11.7591 19.2344 11.6445 19.2344H10.3555C10.2409 19.2344 10.1836 19.1771 10.1836 19.0625V3.9375C10.1836 3.82292 10.2409 3.76562 10.3555 3.76562Z"
                      fill="white"
                    />
                    <path
                      d="M3.78125 10.6836H18.2188C18.3333 10.6836 18.3906 10.7409 18.3906 10.8555V12.1445C18.3906 12.2591 18.3333 12.3164 18.2188 12.3164H3.78125C3.66667 12.3164 3.60938 12.2591 3.60938 12.1445V10.8555C3.60938 10.7409 3.66667 10.6836 3.78125 10.6836Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h1 className="whitespace-nowrap">Create User</h1>
              </div>
            </div>
          </div>
        </div>
        <UserTable handleChangePage={(i) => handleChangePage(i)} />
      </div>
    </UserParamContext.Provider>
  );
};
export default UserComponent;
