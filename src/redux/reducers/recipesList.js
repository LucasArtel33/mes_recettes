import { ADD_RECIPES } from "../actionTypes";

const defaultState = [
  {
    id: 716426,
    image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    imageType: "jpg",
    title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
  },
  {
    id: 715594,
    image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
    imageType: "jpg",
    title: "Homemade Garlic and Basil French Fries",
  },
  {
    id: 715497,
    image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
    imageType: "jpg",
    title: "Berry Banana Breakfast Smoothie",
  },
  {
    id: 644387,
    image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
    imageType: "jpg",
    title: "Garlicky Kale",
  },
  {
    id: 715392,
    image: "https://spoonacular.com/recipeImages/715392-312x231.jpg",
    imageType: "jpg",
    title: "Chicken Tortilla Soup (Slow Cooker)",
  },
];

export const recipesList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_RECIPES:
      return action.payload.data;
    default:
      return state;
  }
};
