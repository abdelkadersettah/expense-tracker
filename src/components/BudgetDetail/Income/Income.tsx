import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import incomeIcon from "../../../assets/images/icons/income.svg";

interface IncomeProps {
  state: {
    label: string;
    date: string;
    amount: number;
    category: string;
    id: number;
  }[];
}

const Income: React.FC<IncomeProps> = ({ state }) => {
  const [income, setIncome] = useState<number>(0);
  useEffect(() => {
    if (state.length > 0) {
      let income = state.filter((item) => item.amount > 0);
      let totalIncome = income
        .map((item) => item.amount)
        .reduce((a, b) => a + b, 0);
      setIncome(totalIncome);
    } else {
      setIncome(0);
    }
  }, [state.length]);

  return (
    <li className="budget__item budget__item--income">
      <h3 className="budget__title">
        Income
        <img className="budget__img" src={incomeIcon} alt="total" />
      </h3>
      <span className="budget__number">{income}</span>
    </li>
  );
};

export default Income;
