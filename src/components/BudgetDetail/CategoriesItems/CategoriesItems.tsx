import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";
import { InitialCategories } from "../../../state/actions";
import Category from "./Category/Category";

interface CategoriesItemsProps {
  categories: InitialCategories;
}
const CategoriesItems: React.FunctionComponent<CategoriesItemsProps> = ({
  categories,
}) => {
  const dispatch = useDispatch();
  const { removeCategory, removeCategoryItems } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleRemoveCategory = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    let category = categories.filter((category) => category.id === id)[0].label;
    removeCategory(id);
    removeCategoryItems(category);
    console.log("clicked");
    console.log(e, id);
  };

  console.log(categories);
  return (
    <ul className="categories__list">
      {categories.map((category) => {
        return (
          <Category
            category={category.label}
            clicked={(event) => handleRemoveCategory(event, category.id)}
            key={category.id}
          />
        );
      })}
    </ul>
  );
};

export default CategoriesItems;
