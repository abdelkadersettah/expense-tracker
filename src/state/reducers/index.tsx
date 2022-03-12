import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import budgetReducer from "./budgetReducer";
const reducers = combineReducers({
  categories: categoriesReducer,
  budget: budgetReducer,
});
export default reducers;
export type State = ReturnType<typeof reducers>;
