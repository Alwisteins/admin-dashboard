import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const chartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "September",
    "October",
    "November",
  ],
  datasets: [
    {
      backgroundColor: "#4B49AC",
      id: 1,
      label: "revenue",
      data: [230, 235, 180, 390, 240, 200, 180, 140, 170, 230, 300],
    },
    {
      backgroundColor: "#F3797E",
      id: 2,
      label: "cost",
      data: [210, 195, 215, 160, 175, 180, 160, 150, 130, 100, 160],
    },
    {
      backgroundColor: "#7DA0FA",
      id: 3,
      label: "order",
      data: [48, 56, 54, 41, 36, 29, 30, 21, 18, 11, 21],
    },
  ],
};

export default function MainChart() {
  return (
    <div className="absolute w-fit h-96 mx-40 mt-44 hover:scale-105 duration-200 overflow-hidden">
      <Chart type="bar" className="w-[65rem]" data={chartData} />
    </div>
  );
}
