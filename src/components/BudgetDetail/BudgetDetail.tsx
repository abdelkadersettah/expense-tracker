import { useSelector } from "react-redux";
import { State } from "../../state";
import Expense from "./Expense/Expense";
import Income from "./Income/Income";
import Total from "./Total/Total";
import "./budget.scss";
interface BudgetDetailProps {}

const BudgetDetail: React.FC<BudgetDetailProps> = () => {
  const budget = useSelector((state: State) => state.budget);
  return (
    <section className="budget-container">
      <ul className="budget">
        <Income state={budget} />
        <Total state={budget} />
        <Expense state={budget} />
      </ul>
    </section>
  );
};

export default BudgetDetail;
