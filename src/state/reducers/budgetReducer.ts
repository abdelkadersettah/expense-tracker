import { BudgetItem, Action } from "../actions/index";
import { ActionType } from "../actions-types/index";

const localBudgetItems = localStorage.getItem("budget");
let budgetItem: BudgetItem[] = [];
if (localBudgetItems) {
  let list = JSON.parse(localBudgetItems);
  budgetItem = list;
} else {
  budgetItem = [];
}

const initialState: BudgetItem[] = budgetItem;
const reducer = (state = initialState, action: Action) => {
  let updatedItems;
  switch (action.type) {
    case ActionType.ADD_ITEM:
      let lastItemId = state[state.length - 1]?.id;
      let newId = lastItemId ? ++lastItemId : 1;
      let newItem = {
        ...action.data,
        id: newId,
      };
      console.log(...state, newItem);
      let newState = [...state, newItem];
      localStorage.setItem("budget", JSON.stringify([...newState]));
      return [...state, newItem];
    case ActionType.REMOVE_ITEM:
      updatedItems = state.filter((item) => item.id !== action.id);

      localStorage.setItem("budget", JSON.stringify([...updatedItems]));
      return [...updatedItems];
    case ActionType.REMOVE_CATEGORY_ITEMS:
      updatedItems = state.filter(
        (item) => item.category.toLowerCase() !== action.category.toLowerCase()
      );

      localStorage.setItem("budget", JSON.stringify([...updatedItems]));
      return [...updatedItems];

    default:
      return state;
  }
};
export default reducer;
