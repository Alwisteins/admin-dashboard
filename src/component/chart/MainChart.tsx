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
      data: [23, 14, 36, 39, 24, 38, 43, 36, 49, 52, 44],
    },
    {
      backgroundColor: "#F3797E",
      id: 2,
      label: "cost",
      data: [48, 56, 54, 41, 36, 29, 30, 21, 18, 11, 21],
    },
  ],
};

export default function MainChart() {
  return (
    <div className="absolute w-fit h-96 mx-40 mt-44 overflow-hidden">
      <Chart type="bar" data={chartData} />
    </div>
  );
}
