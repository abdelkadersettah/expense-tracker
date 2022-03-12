import "./categories.scss";
import { State } from "../../state";
import { useSelector } from "react-redux";
import CategoriesItems from "../BudgetDetail/CategoriesItems/CategoriesItems";
import DefaultButton from "../Buttons/DefaultButton/DefaultButton";
import { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";

interface CategoriesProps {}
const Categories: React.FunctionComponent<CategoriesProps> = ({}) => {
  const categories = useSelector((state: State) => state.categories);
  const [showAddCategoryForm, setShowAddCategoryForm] =
    useState<boolean>(false);

  return (
    <section className="categories">
      <div className="categories__inner">
        <div className="categories__header">
          <h2 className="categories__title">categories</h2>
          <DefaultButton handleClicked={() => setShowAddCategoryForm(true)}>
            Add Category
          </DefaultButton>
        </div>
        <CategoriesItems categories={categories} />

        {showAddCategoryForm && (
          <AddCategory hideForm={(isHide) => setShowAddCategoryForm(isHide)} />
        )}
      </div>
    </section>
  );
};

export default Categories;
