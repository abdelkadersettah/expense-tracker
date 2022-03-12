import { VictoryPie } from "victory";
import { useSelector } from "react-redux";
import { State } from "../../../state";
interface TotalExpenseProps {}

const TotalExpense: React.FunctionComponent<TotalExpenseProps> = () => {
  const transactions = useSelector((state: State) => state.budget);
  const totalExpense = transactions
    ?.filter((item) => item.amount < 0)
    .map((item) => ({ x: item.label, y: Math.abs(item.amount) }));
  return (
    <section className="chart__Expense">
      <h1 className="chart__title">Expense</h1>
      <div className="chart__container">
        <VictoryPie
          data={totalExpense}
          // colorScale={["#267aee", "#007e00", "#47525d"]}
          labels={({ datum }) => `${datum.x}: ${-datum.y}`}
        />
      </div>
    </section>
  );
};

export default TotalExpense;
