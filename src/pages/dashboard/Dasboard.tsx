import Card from "../../component/card/Card";
import MainChart from "../../component/chart/MainChart";

export default function Dasboard() {
  return (
    <div className="flex grow">
      <Card />
      <MainChart />
    </div>
  );
}
