import { Formik, Field, Form, FormikHelpers } from "formik";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../state";
import DefaultButton from "../Buttons/DefaultButton/DefaultButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import "./addTransaction.scss";
import { useState } from "react";

interface Values {
  label: string;
  date: string;
  amount: number;
  category: string;
}
type AddTransactionProps = {
  hideForm: (isHide: boolean) => void;
};

const AddTransaction: React.FC<AddTransactionProps> = ({ hideForm }) => {
  const dispatch = useDispatch();
  const { addItem } = bindActionCreators(actionCreators, dispatch);
  const categories = useSelector((state: State) => state.categories);
  const [error, setError] = useState<boolean>(false);
  return (
    <Formik
      initialValues={{
        label: "",
        date: "",
        amount: 0,
        category: categories[0].label,
      }}
      onSubmit={(
        values: Values,
        { setSubmitting, resetForm }: FormikHelpers<Values>
      ) => {
        console.log(values);
        const data = { ...values };
        addItem(data);
        hideForm(false);
        resetForm();
      }}
    >
      <Form className="transaction-form">
        <label className="transaction-form__label" htmlFor="label">
          Label
        </label>
        <Field
          className="transaction-form__input"
          id="label"
          name="label"
          placeholder="Label"
          type={"text"}
          required
        />
        <label className="transaction-form__label" htmlFor="category">
          Chose Category
        </label>

        <Field
          name="category"
          id="category"
          as="select"
          className="transaction-form__input"
          required
        >
          {categories
            .map((item) => item.label)
            .map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
        </Field>
        <label className="transaction-form__label" htmlFor="amount">
          Amount
        </label>
        <Field
          className="transaction-form__input"
          id="amount"
          name="amount"
          placeholder="Category"
          type={"number"}
          required
        />
        <span className="transaction-form__example">
          {" "}
          For expense use (-) Example: -500. For Income use only number Example:
          500
        </span>
        <label className="transaction-form__label" htmlFor="date">
          Created Date
        </label>
        <Field
          className="transaction-form__input"
          id="date"
          name="date"
          type={"date"}
          required
        />

        <div className="transaction-form__cta">
          <DefaultButton type="submit">Add Transaction</DefaultButton>
          <SecondaryButton handleClicked={() => hideForm(false)}>
            Cancel
          </SecondaryButton>
        </div>
      </Form>
    </Formik>
  );
};

export default AddTransaction;
