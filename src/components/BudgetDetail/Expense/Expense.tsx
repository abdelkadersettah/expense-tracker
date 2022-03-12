import { useEffect, useState } from "react";
import expenseIcon from "../../../assets/images/icons/expense.svg";

interface ExpenseProps {
  state: {
    label: string;
    date: string;
    amount: number;
    category: string;
    id: number;
  }[];
}

const Expense: React.FC<ExpenseProps> = ({ state }) => {
  const [expense, setExpense] = useState<number>(0);
  useEffect(() => {
    if (state.length > 0) {
      let expense = state.filter((item) => item.amount < 0);
      let totalExpense = expense
        .map((item) => item.amount)
        .reduce((a, b) => a + b, 0);
      setExpense(totalExpense);
    } else {
      setExpense(0);
    }
  }, [state.length]);

  return (
    <li className="budget__item budget__item--expense">
      <h3 className="budget__title">
        Expense
        <img className="budget__img" src={expenseIcon} alt="total" />
      </h3>
      <span className="budget__number">{expense}</span>
    </li>
  );
};

export default Expense;
