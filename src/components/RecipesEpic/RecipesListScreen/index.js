import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecipes } from "../../../api/recipes";
import { getRecipes } from "../../../redux/selectors";

const RecipesListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(getRecipes);

  useEffect(() => {
    fetchRecipes(dispatch);
  }, []);

  return (
    <View style={styles.container}>
      <Text>RecipesListScreen</Text>
      {recipes.map((recipe) => {
        return <Text>{recipe.title}</Text>;
      })}
      <Button
        onPress={() => {
          navigation.navigate("RecipeDetails");
        }}
        title="Go to Detail"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecipesListScreen;
