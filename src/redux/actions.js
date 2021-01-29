import { ADD_RECIPES, ADD_SELECTED_RECIPE } from "./actionTypes";

export const fetchRecipesAction = (data) => ({
  type: ADD_RECIPES,
  payload: {
    data,
  },
});

export const fetchSelectedRecipeAction = (data) => ({
  type: ADD_SELECTED_RECIPE,
  payload: {
    data,
  },
});
