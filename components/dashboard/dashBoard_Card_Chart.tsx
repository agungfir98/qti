import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
  ArcElement
);
const DashboardComponent = () => {
  const barLabels = [
    "22may",
    "23may",
    "24may",
    "25may",
    "26may",
    "27may",
    "28may",
  ];

  const doughnutLabels = ["Legend 1", "Legend 2", "Legend 3", "Legend 4"];
  return (
    <>
      <div className="bg-white rounded-xl px-4 py-5 flex flex-col gap-2">
        <h1>Card Title</h1>
        <div id="Bar" className="h-[60vh] md:h-full">
          <Bar
            data={{
              labels: barLabels,
              datasets: [
                {
                  label: "Legend 1",
                  data: barLabels.map(() => Math.floor(Math.random() * 500)),
                  backgroundColor: "rgba(25, 133, 100, 1)",
                },
                {
                  label: "Legend 2",
                  data: barLabels.map(() => Math.floor(Math.random() * 500)),
                  backgroundColor: "rgba(249, 209, 75, 1)",
                },
              ],
            }}
            options={{
              indexAxis: "y",
              responsive: true,
              plugins: {
                legend: {
                  align: "end",
                  labels: {
                    usePointStyle: true,
                  },
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
      <div className="bg-white rounded-xl px-4 py-5 flex flex-col gap-2">
        <h1>Card Title</h1>
        <div id="Donut" className="">
          <Doughnut
            data={{
              labels: ["Legend 1", "Legend 2", "Legend 3", "Legend 4"],
              datasets: [
                {
                  label: "seee",
                  data: doughnutLabels.map(() =>
                    Math.floor(Math.random() * 20)
                  ),
                  backgroundColor: [
                    "rgb(32, 35, 48)",
                    "rgb(249, 209, 75)",
                    "rgb(253, 125, 54)",
                    "rgb(36, 194, 185)",
                  ],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                  labels: { usePointStyle: true },
                },
              },
              aspectRatio: 1.5,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
