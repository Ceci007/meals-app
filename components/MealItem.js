import React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import BodyText from "./BodyText";
import TitleText from "./TitleText";

const MealItem = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
          <View>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
              <ImageBackground
                source={{ uri: props.image }}
                style={styles.bgImage}
              >
                <View style={styles.titleContainer}>
                  <TitleText style={styles.title} numOfLines={1}>
                    {props.title}
                  </TitleText>
                </View>
              </ImageBackground>
            </View>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
              <BodyText style={styles.text}>{props.duration}m</BodyText>
              <BodyText style={styles.text}>
                {props.complexity.toUpperCase()}
              </BodyText>
              <BodyText style={styles.text}>
                {props.affordability.toUpperCase()}
              </BodyText>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 10,
  },
  mealItem: {
    height: 250,
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "15%",
    paddingVertical: 5,
  },
  titleContainer: {
    paddingVertical: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  title: {
    color: "white",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default MealItem;
