import TransactionsList from "./TransactionsList/TransactionsList";
import "./transactions.scss";
import DefaultButton from "../Buttons/DefaultButton/DefaultButton";
import AddTransaction from "../AddTransaction/AddTransaction";
import { useState } from "react";

interface TransactionsProps {}

const Transactions: React.FunctionComponent<TransactionsProps> = () => {
  const [showAddTransactionForm, setShowAddTransactionForm] =
    useState<boolean>(false);
  return (
    <section className="transactions">
      <article className="transactions__inner">
        <div className="categories__header">
          <h2 className="transactions__title">Transactions</h2>
          <DefaultButton handleClicked={() => setShowAddTransactionForm(true)}>
            Add Transaction
          </DefaultButton>
        </div>

        <TransactionsList />

        {showAddTransactionForm && (
          <AddTransaction
            hideForm={(isHide) => setShowAddTransactionForm(isHide)}
          />
        )}
      </article>
    </section>
  );
};

export default Transactions;
