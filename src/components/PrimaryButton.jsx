import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { appSizes } from "../themes";

const PrimaryButton = (props) => {
  const {
    text,
    icon,
    size = appSizes.Text.regular,
    color,
    textColor,
    iconColor,
    textSize,
    iconSize,
    wrapperStyle = {},
    containerStyle = {},
    textStyle = {},
    iconStyle = {},
    onPress = () => {},
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          ...containerStyle,
        },
      ]}
      onPress={onPress}
    >
      <LinearGradient
        style={[styles.wrapper, { ...wrapperStyle }]}
        colors={["#edd7a8", "#edc56d"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <Text
          style={[
            styles.text,
            {
              color: textColor || color,
              fontSize: textSize || size,
              ...textStyle,
            },
          ]}
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "60%",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
  },
  text: {
    fontFamily: "Quicksand-Bold",
  },
});

export default PrimaryButton;
