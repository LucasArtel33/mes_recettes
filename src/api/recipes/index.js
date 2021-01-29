import axios from "axios";

import { fetchRecipesAction } from "../../redux/actions";

const ENDPOINT_RECIPES =
  "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
const apiKey = "1";
const MAX_PER_PAGE = 5;

export const fetchRecipes = async (dispatch) => {
  try {
    const response = await axios.get(ENDPOINT_RECIPES, {
      // params: {
      //   apiKey,
      //   // number: MAX_PER_PAGE,
      // },
    });
    console.log(response);
    dispatch(fetchRecipesAction(response.data.results));
  } catch (e) {
    console.log("error fetch recipes", e);
  }
};
