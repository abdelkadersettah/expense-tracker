import { ActionType } from "../actions-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const addCategory = (label: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_CATEGORY,
      label: label,
    });
  };
};
export const removeCategory = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_CATEGORY,
      id: id,
    });
  };
};
export const getCategory = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_CATEGORY,
    });
  };
};
export const addItem = (data: {
  label: string;
  date: string;
  amount: number;
  category: string;
}) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_ITEM,
      data: data,
    });
  };
};
export const removeItem = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_ITEM,
      id: id,
    });
  };
};
export const removeCategoryItems = (category: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_CATEGORY_ITEMS,
      category: category,
    });
  };
};
