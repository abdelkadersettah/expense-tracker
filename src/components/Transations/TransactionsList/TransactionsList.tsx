import { useSelector } from "react-redux";
import { State } from "../../../state";
import TransactionItem from "../TransactionItem/TransactionItem";

interface TransactionsListProps {}

const TransactionsList: React.FunctionComponent<TransactionsListProps> = () => {
  const budget = useSelector((state: State) => state.budget);
  console.log(budget);
  return (
    <>
      {budget.length > 0 ? (
        <table className="transactions__table">
          <thead>
            <tr>
              <th>Label</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Created date</th>
            </tr>
          </thead>
          <tbody>
            {budget.map((item) => {
              return (
                <TransactionItem
                  key={item.id}
                  label={item.label}
                  amount={item.amount}
                  category={item.category}
                  date={item.date}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="transactions__text">No transaction found</p>
      )}
    </>
  );
};

export default TransactionsList;
