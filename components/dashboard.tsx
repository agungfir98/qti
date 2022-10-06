import React, { useEffect } from "react";
import DashboardComponent from "./dashboard/dashBoard_Card_Chart";

export const Dashboard = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-3  h-fit md:h-4/5">
      <DashboardComponent />
    </main>
  );
};
