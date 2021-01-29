import axios from "axios";

import { fetchRecipesAction } from "../../redux/actions";

const ENDPOINT_RECIPES = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "78cd76fa7d55445e900d473cf183df95";
const MAX_PER_PAGE = 5;

export const fetchRecipes = async (dispatch) => {
  try {
    const response = await axios.get(ENDPOINT_RECIPES, {
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
