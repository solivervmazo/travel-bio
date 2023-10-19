import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { appColor, appStyles } from "../../themes";

const ProductNameText = ({
  text,
  size = 20,
  color = appColor.lightText,
  style = {},
}) => {
  return (
    <Text
      numberOfLines={1}
      ellipsizeMode={"tail"}
      style={[
        appStyles.textShadow,
        {
          fontSize: size,
          color: color,
          fontFamily: "Quicksand-Medium",
          ...style,
        },
      ]}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({});

export default ProductNameText;
