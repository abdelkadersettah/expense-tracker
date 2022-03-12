import { Formik, Field, Form, FormikHelpers } from "formik";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../state";
import DefaultButton from "../Buttons/DefaultButton/DefaultButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import "./addCategory.scss";
import { useState } from "react";

interface Values {
  label: string;
}
type AddCategoryProps = {
  hideForm: (isHide: boolean) => void;
};

const AddCategory: React.FC<AddCategoryProps> = ({ hideForm }) => {
  const dispatch = useDispatch();
  const { addCategory } = bindActionCreators(actionCreators, dispatch);
  const categories = useSelector((state: State) => state.categories);
  const [error, setError] = useState<boolean>(false);
  return (
    <Formik
      initialValues={{
        label: "",
      }}
      onSubmit={(
        values: Values,
        { setSubmitting, resetForm }: FormikHelpers<Values>
      ) => {
        let allCategories = categories.map((item) => item.label);
        let isCategoryExist = allCategories.filter(
          (item) => item.toLowerCase() === values.label.toLowerCase()
        );
        if (isCategoryExist.length > 0) {
          setError(true);
          resetForm();
          setTimeout(() => {
            setError(false);
          }, 2000);
        } else {
          console.log(isCategoryExist);
          resetForm();
          addCategory(values.label);
          hideForm(false);
        }
      }}
    >
      <Form className="category-form">
        <label className="category-form__label" htmlFor="label">
          Category Name
        </label>
        <Field
          className="category-form__input"
          id="label"
          name="label"
          placeholder="Category"
          type={"text"}
          required
        />
        {error && <span className="category-form__error">Category exist</span>}
        <div className="category-form__cta">
          <DefaultButton type="submit">Add Category</DefaultButton>
          <SecondaryButton handleClicked={() => hideForm(false)}>
            Cancel
          </SecondaryButton>
        </div>
      </Form>
    </Formik>
  );
};

export default AddCategory;
