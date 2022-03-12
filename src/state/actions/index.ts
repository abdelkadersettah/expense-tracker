import { ActionType } from "../actions-types";
export type InitialCategories = {
  id: number;
  label: string;
}[];
export type BudgetItem = {
  id: number;
  label: string;
  date: string;
  amount: number;
  category: string;
};

export type InitialState = {
  id: number;
  label: string;
}[];

type AddCategoryAction = {
  type: ActionType.ADD_CATEGORY;
  label: string;
};
type RemoveCategoryAction = {
  type: ActionType.REMOVE_CATEGORY;
  id: number;
};
type GetCategoryAction = {
  type: ActionType.GET_CATEGORY;
};
type AddItem = {
  type: ActionType.ADD_ITEM;
  data: {
    label: string;
    date: string;
    amount: number;
    category: string;
  };
};
type RemoveItem = {
  type: ActionType.REMOVE_ITEM;
  id: number;
};
type RemoveCategoryItems = {
  type: ActionType.REMOVE_CATEGORY_ITEMS;
  category: string;
};
type GetIncomeByCategory = {
  type: ActionType.GET_INCOME_BY_CATEGORY;
};
export type Action =
  | AddCategoryAction
  | RemoveCategoryAction
  | GetCategoryAction
  | AddItem
  | RemoveItem
  | GetIncomeByCategory
  | RemoveCategoryItems;
