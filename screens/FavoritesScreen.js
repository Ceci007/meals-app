import React from "react";
import { View, StyleSheet } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const FavoritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Favorites Screen...</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
