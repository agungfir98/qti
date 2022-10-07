import React from "react";

export const UserTable = () => {
  return (
    <div className="flex flex-col gap-2">
      <div id="table">
        <table className="table-auto w-full text-center">
          <thead className="bg-[#F9F9FC]">
            <tr className="border-b-1 border-slate-500 h-12">
              <th>Employee</th>
              <th className="hidden md:table-cell">Category</th>
              <th className="hidden md:table-cell">Amount</th>
              <th className="hidden md:table-cell">Items Sold</th>
              <th className="hidden md:table-cell">Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b-2 border-slate-200 h-12">
              <td>Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td>Technology</td>
            </tr>
            <tr className="border-b-2 border-slate-200 h-12">
              <td>Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td>Technology</td>
            </tr>
            <tr className="border-b-2 border-slate-200 h-12">
              <td>Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td>Technology</td>
            </tr>
            <tr className="border-b-2 border-slate-200 h-12">
              <td>Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td>Technology</td>
            </tr>
            <tr className="border-b-2 border-slate-200 h-12 rounded-b-xl">
              <td>Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td className="hidden md:table-cell">Technology</td>
              <td>Technology</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        id="pagination"
        className="self-center md:self-end flex gap-9 items-center"
      >
        <div id="leftIcon" className="cursor-pointer">
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
          <li
            className={`${"bg-green-600 rounded-full text-white"} w-8 h-8 flex justify-center items-center`}
          >
            <p className="cursor-pointer">1</p>
          </li>
          <li
            className={`${
              false && "bg-green-600 rounded-full text-white"
            } w-8 h-8 flex justify-center items-center`}
          >
            <p className="cursor-pointer">2</p>
          </li>
          <li
            className={`${
              false && "bg-green-600 rounded-full text-white"
            } w-8 h-8 flex justify-center items-center`}
          >
            <p className="cursor-pointer">3</p>
          </li>
          <li
            className={`${
              false && "bg-green-600 rounded-full text-white"
            } w-8 h-8 flex justify-center items-center`}
          >
            <p className="cursor-pointer">4</p>
          </li>
          <li
            className={`${
              false && "bg-green-600 rounded-full text-white"
            } w-8 h-8 flex justify-center items-center`}
          >
            <p className="cursor-pointer">5</p>
          </li>
        </ul>
        <div id="rightIcon" className="cursor-pointer">
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
