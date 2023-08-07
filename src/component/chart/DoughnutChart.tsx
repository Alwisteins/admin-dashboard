import { Chart } from "react-chartjs-2";
import { QueryStats } from "@mui/icons-material";

const chartData = {
  labels: ["Cost", "Revenue"],
  datasets: [
    {
        label: "$",
      data: [1895, 2745],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
      ],
      hoverOffset: 4,
    },
  ],
};

export default function DoughnutChart() {
  return (
    <div className="absolute h-96 ml-11 mt-[620px] p-10 hover:scale-105 duration-200 bg-palette-white rounded">
      <div className="text-center text-palette-100 mt-[-20px] mb-2">
        <QueryStats /> Yearly comparison
      </div>
      <Chart type="doughnut" className="w-[40rem]" data={chartData} />
    </div>
  );
}
