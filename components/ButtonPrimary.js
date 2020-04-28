import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import BodyText from "./BodyText";
import Colors from "../constants/Colors";

const Button = (props) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={{ ...styles.button, ...props.style }}
    >
      <BodyText style={styles.text}>{props.children}</BodyText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 36,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },
  text: {
    color: "white",
  },
});

export default Button;
