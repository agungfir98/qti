import Link from "next/link";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import { actionButtonKind, UserData } from "../../types/type";
import { UserParamContext } from "../userComponent";

export const UserTable: React.FC<{
  handleChangePage: (index: number) => void;
  handleActionBtn: (str: string, data: UserData) => void;
}> = ({ handleChangePage, handleActionBtn }) => {
  const { Data, params } = useContext(UserParamContext);
  let arr = [];
  for (let i = 0; i < Data.page_count; i++) {
    arr.push(i + 1);
  }

  const handleLeftBtn = () => {
    if (Data.page === 1) return;
    handleChangePage(Data.page - 1);
  };
  const handleRightBtn = () => {
    if (Data.page === Data.page_count) return;
    handleChangePage(Data.page + 1);
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <div id="table">
        <table className="table-auto w-full text-left text-xs px-5">
          <thead className="bg-[#F9F9FC]">
            <tr className="border-b-1 border-slate-500 h-14 text-left">
              <th className={`px-5`}>Employee</th>
              <th className={`hidden md:table-cell px-5 `}>Email</th>
              <th className={`hidden md:table-cell px-5 `}>Departement</th>
              <th className={`hidden md:table-cell px-5 `}>Status</th>
              <th className={`px-5`}>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {Data.results?.map((v, i) => (
              <tr key={i} className="border-b-2 border-slate-200 h-fit">
                <td className="py-[5px] px-5">
                  <div className="col-span-2 col-start-2 flex gap-2 justify-start items-center">
                    <div className="w-10 h-10 rounded-full bg-red-400 flex justify-center items-center">
                      {v.employee
                        .split(" ")
                        .slice(0, 2)
                        .map((v) => v[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                    <p>{v.employee}</p>
                  </div>
                </td>
                <td className="hidden md:table-cell px-5">{v.email}</td>
                <td className="hidden md:table-cell px-5">
                  {v.departement || "None"}
                </td>
                {/* //* IsActive */}
                <td className="hidden md:table-cell px-5">
                  <div className="">
                    <div
                      className={`h-fit w-fit px-1 py-2 ${
                        v.is_active
                          ? "text-[#198564] bg-[#99EFCB]"
                          : "text-red-600 bg-red-300"
                      } rounded-lg`}
                    >
                      <p className="font-medium">
                        {v.is_active ? "Active" : "Inactive"}
                      </p>
                    </div>
                  </div>
                </td>
                {/* // * Action */}
                <td className="px-5">
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleActionBtn(actionButtonKind.EDIT, v)}
                      data-user={v}
                      id="a"
                      className="bg-black p-1 rounded-md"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.0332 14.6875C5.07227 14.6875 5.11133 14.6836 5.15039 14.6777L8.43555 14.1016C8.47461 14.0938 8.51172 14.0762 8.53906 14.0469L16.8184 5.76758C16.8365 5.74951 16.8508 5.72805 16.8606 5.70442C16.8704 5.68079 16.8755 5.65546 16.8755 5.62988C16.8755 5.6043 16.8704 5.57897 16.8606 5.55535C16.8508 5.53172 16.8365 5.51026 16.8184 5.49219L13.5723 2.24414C13.5352 2.20703 13.4863 2.1875 13.4336 2.1875C13.3809 2.1875 13.332 2.20703 13.2949 2.24414L5.01562 10.5234C4.98633 10.5527 4.96875 10.5879 4.96094 10.627L4.38477 13.9121C4.36577 14.0167 4.37255 14.1244 4.40454 14.2258C4.43654 14.3273 4.49276 14.4193 4.56836 14.4941C4.69727 14.6191 4.85938 14.6875 5.0332 14.6875ZM6.34961 11.2812L13.4336 4.19922L14.8652 5.63086L7.78125 12.7129L6.04492 13.0195L6.34961 11.2812ZM17.1875 16.3281H2.8125C2.4668 16.3281 2.1875 16.6074 2.1875 16.9531V17.6562C2.1875 17.7422 2.25781 17.8125 2.34375 17.8125H17.6562C17.7422 17.8125 17.8125 17.7422 17.8125 17.6562V16.9531C17.8125 16.6074 17.5332 16.3281 17.1875 16.3281Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        handleActionBtn(actionButtonKind.DELETE, v)
                      }
                      data-user-id={v.id}
                      id="b"
                      className="bg-[#F93F40] p-1 rounded-md"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.03125 3.59375H6.875C6.96094 3.59375 7.03125 3.52344 7.03125 3.4375V3.59375H12.9688V3.4375C12.9688 3.52344 13.0391 3.59375 13.125 3.59375H12.9688V5H14.375V3.4375C14.375 2.74805 13.8145 2.1875 13.125 2.1875H6.875C6.18555 2.1875 5.625 2.74805 5.625 3.4375V5H7.03125V3.59375ZM16.875 5H3.125C2.7793 5 2.5 5.2793 2.5 5.625V6.25C2.5 6.33594 2.57031 6.40625 2.65625 6.40625H3.83594L4.31836 16.6211C4.34961 17.2871 4.90039 17.8125 5.56641 17.8125H14.4336C15.1016 17.8125 15.6504 17.2891 15.6816 16.6211L16.1641 6.40625H17.3438C17.4297 6.40625 17.5 6.33594 17.5 6.25V5.625C17.5 5.2793 17.2207 5 16.875 5ZM14.2832 16.4062H5.7168L5.24414 6.40625H14.7559L14.2832 16.4062Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* // * Pagination ========== */}
      <div
        id="pagination"
        className="self-center md:self-end flex gap-9 items-center"
      >
        <div
          id="leftIcon"
          className={`${Data.page <= 1 && "hidden"} cursor-pointer`}
          onClick={handleLeftBtn}
        >
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.37361 2.37385C9.76414 1.98333 9.76414 1.35017 9.37361 0.959641C8.98309 0.569117 8.34992 0.569117 7.9594 0.959641L9.37361 2.37385ZM1.33317 9.00008L0.626063 8.29297C0.438527 8.48051 0.333171 8.73486 0.33317 9.00008C0.33317 9.2653 0.438527 9.51965 0.626063 9.70719L1.33317 9.00008ZM7.9594 17.0405C8.34992 17.431 8.98309 17.431 9.37361 17.0405C9.76413 16.65 9.76413 16.0168 9.37361 15.6263L7.9594 17.0405ZM7.9594 0.959641L0.626063 8.29297L2.04028 9.70719L9.37361 2.37385L7.9594 0.959641ZM0.626063 9.70719L7.9594 17.0405L9.37361 15.6263L2.04028 8.29297L0.626063 9.70719Z"
              fill="#03050B"
            />
          </svg>
        </div>
        <ul className="flex gap-1">
          {arr.map((v, i) => (
            <li
              key={i}
              className={`${
                Data.page === i + 1 && "bg-green-600 rounded-full text-white"
              } w-8 h-8 flex justify-center items-center`}
            >
              <form>
                <button
                  name="page"
                  value={i + 1}
                  className="cursor-pointer"
                  type="button"
                  onClick={() => handleChangePage(i + 1)}
                >
                  {i + 1}
                </button>
              </form>
            </li>
          ))}
        </ul>
        <div
          id="rightIcon"
          className={`${
            Data.page == Data.page_count && "hidden"
          } cursor-pointer`}
          onClick={handleRightBtn}
        >
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.626389 15.6261C0.235865 16.0167 0.235865 16.6498 0.626389 17.0404C1.01691 17.4309 1.65008 17.4309 2.0406 17.0404L0.626389 15.6261ZM8.66683 8.99992L9.37394 9.70703C9.56147 9.51949 9.66683 9.26514 9.66683 8.99992C9.66683 8.7347 9.56147 8.48035 9.37394 8.29281L8.66683 8.99992ZM2.0406 0.95948C1.65008 0.568955 1.01691 0.568955 0.626389 0.95948C0.235865 1.35 0.235865 1.98317 0.62639 2.37369L2.0406 0.95948ZM2.0406 17.0404L9.37394 9.70703L7.95972 8.29281L0.626389 15.6261L2.0406 17.0404ZM9.37394 8.29281L2.0406 0.95948L0.62639 2.37369L7.95972 9.70703L9.37394 8.29281Z"
              fill="#03050B"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
