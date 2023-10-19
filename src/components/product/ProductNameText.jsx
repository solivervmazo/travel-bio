import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { appColors, appFonts, appSizes, appStyles } from "../../themes";

const ProductNameText = ({
  text,
  size = appSizes.Text.regular,
  color = appColors.lightText,
  style = {},
}) => {
  return (
    <Text
      numberOfLines={1}
      ellipsizeMode={"tail"}
      style={[styles.text, { fontSize: size, color: color, ...style }]}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: appFonts.medium,
    ...appStyles.textShadow,
  },
});

export default ProductNameText;
