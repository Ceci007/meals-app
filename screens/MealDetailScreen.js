import React from "react";
import { View, StyleSheet } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import ButtonPrimary from "../components/ButtonPrimary";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <TitleText>{selectedMeal.title}</TitleText>
      <ButtonPrimary
        style={styles.button}
        onPress={() => {
          props.navigation.popToTop();
        }}
      >
        GO BACK TO CATEGORIES
      </ButtonPrimary>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginVertical: 10,
    width: "80%",
  },
});

export default MealDetailScreen;
