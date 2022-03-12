import {
  VictoryBar,
  VictoryChart,
  VictoryHistogram,
  VictoryPie,
} from "victory";
import { useSelector } from "react-redux";
import { State } from "../../../state";
import { useEffect, useState } from "react";

interface TotalByCategoryProps {}

const TotalByCategory: React.FunctionComponent<TotalByCategoryProps> = () => {
  const transactions = useSelector((state: State) => state.budget);
  const [data, setData] = useState<{ x: string; y: number }[]>([]);
  useEffect(() => {
    const res = Array.from(
      transactions.reduce(
        (m, { category, amount }) =>
          m.set(category, (m.get(category) || 0) + amount),
        new Map()
      ),
      ([category, amount]) => ({ category, amount })
    );
    let result: { x: string; y: number }[] = res.map((item) => ({
      x: item.category,
      y: item.amount,
    }));
    console.log(res);
    setData(result);
  }, [transactions]);

  return (
    <section className="chart__totalByCategory">
      <h1 className="chart__title">Total By Category</h1>
      <div className="chart__container">
        <VictoryPie
          data={data}
          //   colorScale={data.map((_, i) => `hsl(215,${85 + i * 15}%,54%)`)}
          labels={({ datum }) => `${datum.x}: ${-datum.y}`}
        />
      </div>
    </section>
  );
};

export default TotalByCategory;
