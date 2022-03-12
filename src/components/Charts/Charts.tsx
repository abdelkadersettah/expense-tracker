import { useSelector } from "react-redux";
import { State } from "../../state";
import Header from "../Header/Header";
import TotalExpense from "./TotalExpense/TotalExpense";
import TotalIncome from "./TotalIncome/TotalIncome";
import TotalByCategory from "./TotalByCategory/TotalByCategory";
import "./charts.scss";

interface ChartsProps {}

const Charts: React.FunctionComponent<ChartsProps> = () => {
  const categories = useSelector((state: State) => state.categories);
  const transactions = useSelector((state: State) => state.budget);
  const totalIncome = transactions
    ?.filter((item) => item.amount > 0)
    .map((item) => ({ x: item.label, y: item.amount }));

  console.log(totalIncome);
  return (
    <>
      <Header />
      <main className="chart">
        <TotalByCategory />
        <TotalIncome />
        <TotalExpense />
      </main>
    </>
  );
};

export default Charts;
