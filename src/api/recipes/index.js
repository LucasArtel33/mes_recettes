import axios from "axios";

import {
  fetchRecipesAction,
  fetchSelectedRecipeAction,
} from "../../redux/actions";

const ENDPOINT_BASE = "https://api.spoonacular.com/recipes/";
const apiKey = "78cd76fa7d55445e900d473cf183df95";
const MAX_PER_PAGE = 5;

export const fetchRecipes = async (dispatch) => {
  try {
    const response = await axios.get(ENDPOINT_BASE + "complexSearch", {
      params: {
        apiKey,
        number: MAX_PER_PAGE,
      },
    });
    dispatch(fetchRecipesAction(response.data.results));
  } catch (e) {
    console.log("error fetch recipes", e);
  }
};

export const fetchSelectedRecipe = async (id, dispatch) => {
  try {
    const response = await axios.get(ENDPOINT_BASE + id + "/information", {
      apiKey,
    });
    dispatch(fetchSelectedRecipe(response.data));
  } catch (e) {
    console.log("error fetch selected recipe", e);
  }
};
