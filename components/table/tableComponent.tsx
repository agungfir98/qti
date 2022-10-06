import React from "react";

const TableComponent = () => {
  return (
    <div id="table">
      <table className="table-auto w-full text-center">
        <thead className="bg-[#F9F9FC]">
          <tr className="border-b-1 border-slate-500 h-12">
            <th>Products name</th>
            <th className="hidden md:table-cell">Category</th>
            <th className="hidden md:table-cell">Amount</th>
            <th className="hidden md:table-cell">Items Sold</th>
            <th className="hidden md:table-cell">Price</th>
            <th>Sales</th>
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
          <tr className="border-b-2 border-slate-200 h-12">
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
  );
};
export default TableComponent;
