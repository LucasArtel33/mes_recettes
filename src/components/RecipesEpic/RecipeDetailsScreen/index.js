import React from "react";
import { View, Text, Button } from "react-native";

const RecipeDetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>RecipeDetailsScreen</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default RecipeDetailsScreen;
