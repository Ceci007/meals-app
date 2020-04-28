import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import TitleText from "./TitleText";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.gridItem}
      onPress={props.onSelect}
    >
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <TitleText numberOfLines={2} style={styles.text}>
          {props.title}
        </TitleText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 3,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 3,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default CategoryGridTile;
