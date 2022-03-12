import { VictoryPie } from "victory";
import { useSelector } from "react-redux";
import { State } from "../../../state";

interface TotalIncomeProps {}

const TotalIncome: React.FunctionComponent<TotalIncomeProps> = () => {
  const transactions = useSelector((state: State) => state.budget);
  const totalIncome = transactions
    ?.filter((item) => item.amount > 0)
    .map((item) => ({ x: item.label, y: item.amount }));

  return (
    <section className="chart__income">
      <h1 className="chart__title">Income</h1>
      <div className="chart__container">
        <VictoryPie
          data={totalIncome}
          // colorScale={["#267aee", "#007e00", "#47525d"]}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          // labelPosition={({ index }) => index
          //   ? "centroid"
          //   : "startAngle"
          // }
        />
      </div>
    </section>
  );
};

export default TotalIncome;
