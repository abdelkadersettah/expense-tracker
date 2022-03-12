import { useEffect, useState } from "react";
import totalIcon from "../../../assets/images/icons/total.svg";

interface TotalProps {
  state: {
    label: string;
    date: string;
    amount: number;
    category: string;
    id: number;
  }[];
}

const Total: React.FC<TotalProps> = ({ state }) => {
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    if (state.length > 0) {
      let totalIncome = state
        .filter((item) => item.amount > 0)
        .map((item) => item.amount)
        .reduce((a, b) => a + b, 0);
      let totalExpense = state
        .filter((item) => item.amount < 0)
        .map((item) => item.amount)
        .reduce((a, b) => a + b, 0);

      let total = totalIncome + totalExpense;

      setTotal(total);
    } else {
      setTotal(0);
    }
  }, [state.length]);
  return (
    <li className="budget__item budget__item--total">
      <h3 className="budget__title">
        Total
        <img className="budget__img" src={totalIcon} alt="total" />
      </h3>
      <span className="budget__number">{total}</span>
    </li>
  );
};

export default Total;
