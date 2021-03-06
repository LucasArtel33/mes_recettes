import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecipes } from "../../../api/recipes";
import { getRecipes } from "../../../redux/selectors";

import RecipeListItem from "./RecipesListItem";

const RecipesListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(getRecipes);

  useEffect(() => {
    // fetchRecipes(dispatch);
  });

  const _renderItem = ({ item }) => {
    return <RecipeListItem item={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={_renderItem}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
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
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
  },
});

export default RecipesListScreen;
