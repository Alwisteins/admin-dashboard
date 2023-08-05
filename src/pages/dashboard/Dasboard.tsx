import Card from "../../component/card/Card";
import BarChart from "../../component/chart/BarChart";
import DoughnutChart from "../../component/chart/DoughnutChart";
import TransactionHistory from "../../component/card/TransactionHistory";

export default function Dasboard(): JSX.Element {
  return (
    <div className="flex grow">
      <Card />
      <BarChart />
      <TransactionHistory />
      <DoughnutChart />
    </div>
  );
}
