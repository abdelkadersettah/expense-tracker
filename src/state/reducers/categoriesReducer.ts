import { ActionType } from "../actions-types";
import { InitialState, Action } from "../actions/index";

const localCategories = localStorage.getItem("categories");
type Categories = { id: number; label: string };
let categories: Categories[] = [];
if (localCategories) {
  let list = JSON.parse(localCategories);
  categories = list;
} else {
  categories.push(
    {
      id: 1,
      label: "Salary",
    },
    {
      id: 2,
      label: "Family",
    },
    {
      id: 3,
      label: "Self Development",
    },
    {
      id: 4,
      label: "Entertainment",
    },
    {
      id: 5,
      label: "Traveling",
    }
  );
}
const initialState: InitialState = categories;
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_CATEGORY:
      let lastCategoryId = state[state.length - 1]?.id;
      let newId = lastCategoryId ? ++lastCategoryId : 1;
      let newCategory = {
        id: newId,
        label: action.label,
      };
      console.log(...state, newCategory);
      let newState = [...state, newCategory];
      localStorage.setItem("categories", JSON.stringify([...newState]));
      return [...state, newCategory];

    case ActionType.REMOVE_CATEGORY:
      const updatedCategory = state.filter(
        (category) => category.id !== action.id
      );
      localStorage.setItem("categories", JSON.stringify([...updatedCategory]));
      return [...updatedCategory];

    case ActionType.GET_CATEGORY:
      return [...state];

    default:
      return state;
  }
};

export default reducer;
