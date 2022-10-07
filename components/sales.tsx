import React from "react";
import SalesTableComponent from "./sales/salesTableComponent";

const SalesComponent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div>
        <h1 className="font-semibold text-lg">Sales</h1>
        <p className="font-medium text-sm text-black/50">June 2022</p>
      </div>
      <SalesTableComponent />
    </div>
  );
};
export default SalesComponent;
