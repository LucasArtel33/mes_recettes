import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react/cjs/react.development";

import { fetchSelectedRecipe } from "../../../api/recipes";
import { getSelectedRecipe } from "../../../redux/selectors";

const RecipeDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  const recipe = useSelector(getSelectedRecipe);

  useEffect(() => {
    fetchSelectedRecipe(id, dispatch);
  }, []);

  return (
    <ScrollView>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: recipe.image }}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
      <Text style={styles.title}>{recipe.title}</Text>
      <View style={styles.containerIngredient}>
        {recipe.extendedIngredients &&
          recipe.extendedIngredients.map((ing) => {
            return <Text style={styles.ingName}>{ing.name}</Text>;
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    height: 160,
  },
  img: {
    height: 160,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    marginVertical: 10,
  },
  containerIngredient: {
    borderTopWidth: 1,
    borderStartColor: "grey",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: 15,
  },
  ing: {
    fontSize: 16,
  },
});

export default RecipeDetailsScreen;
