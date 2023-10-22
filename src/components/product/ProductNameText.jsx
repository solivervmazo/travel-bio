import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { appColors, appFonts, appSizes, appStyles } from "../../themes";

const ProductNameText = ({
  text,
  size = appSizes.Text.regular,
  color = appColors.lightText,
  style = {},
  numLines = 1,
  onLink = () => {},
  textDecoration = "none",
}) => {
  return (
    <Text
      numberOfLines={numLines}
      ellipsizeMode={"tail"}
      style={[
        styles.text,
        {
          fontSize: size,
          color: color,
          textDecorationLine: textDecoration,
          ...style,
        },
      ]}
      onPress={onLink}
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
