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
  {
    id: 716427,
    image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    imageType: "jpg",
    title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
  },
  {
    id: 715595,
    image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
    imageType: "jpg",
    title: "Homemade Garlic and Basil French Fries",
  },
  {
    id: 715496,
    image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
    imageType: "jpg",
    title: "Berry Banana Breakfast Smoothie",
  },
  {
    id: 644389,
    image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
    imageType: "jpg",
    title: "Garlicky Kale",
  },
  {
    id: 715391,
    image: "https://spoonacular.com/recipeImages/715392-312x231.jpg",
    imageType: "jpg",
    title: "Chicken Tortilla Soup (Slow Cooker)",
  },
  {
    id: 716425,
    image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    imageType: "jpg",
    title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
  },
  {
    id: 715593,
    image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
    imageType: "jpg",
    title: "Homemade Garlic and Basil French Fries",
  },
  {
    id: 715499,
    image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
    imageType: "jpg",
    title: "Berry Banana Breakfast Smoothie",
  },
  {
    id: 644380,
    image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
    imageType: "jpg",
    title: "Garlicky Kale",
  },
  {
    id: 715393,
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
