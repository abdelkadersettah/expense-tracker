import BudgetDetail from "../../components/BudgetDetail/BudgetDetail";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import Transactions from "../../components/Transations/Transactions";
import "./main.scss";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <BudgetDetail />
        <Categories />
        <Transactions />
      </main>
    </>
  );
};
export default Home;
