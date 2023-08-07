import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import BarChartIcon from '@mui/icons-material/BarChart';

type BarChartType = {
  labels: string[];
  datasets: {
    backgroundColor: string;
    id: number;
    label: string;
    data: number[];
  }[];
};

const chartData: BarChartType = {
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
  ],
};

export default function BarChart(): JSX.Element {
  return (
    <div className="absolute h-96 ml-11 mt-48 p-10 hover:scale-105 duration-200 bg-palette-white rounded overflow-hidden">
      <div className="text-center text-palette-100 mt-[-20px] mb-2">
        <BarChartIcon /> Yearly stats
      </div>
      <Chart type="bar" className="w-[40rem]" data={chartData} />
    </div>
  );
}
