import removeIcon from "../../../../assets/images/icons/remove.svg";
interface CategoryProps {
  category: string;
  clicked: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Category: React.FunctionComponent<CategoryProps> = ({
  category,
  clicked,
}) => {
  return (
    <li className="categories__item">
      <span className="categories__name">{category}</span>
      <button className="categories__cta" onClick={clicked}>
        <img src={removeIcon} alt="remove" />
      </button>
    </li>
  );
};

export default Category;
