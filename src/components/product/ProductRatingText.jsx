import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { appColors, appSizes, appStyles } from "../../themes";
import Icon from "../../ui/Icon";

const ProductRatingText = ({
  text,
  color = appColors.lightText,
  size = appSizes.Text.regular,
  textColor,
  textSize,
  iconSize,
  shadowed = false,
  shadow = appStyles.textShadow,
  containerStyle = {},
}) => {
  return (
    <View
      style={[{ flexDirection: "row", alignItems: "center" }, containerStyle]}
    >
      <Icon.Star
        fill={true}
        size={iconSize || size}
        color={appColors.themeColor}
        style={shadowed ? shadow : {}}
      />
      <Text
        style={[
          shadowed ? shadow : {},
          {
            color: textColor || color,

            fontSize: textSize || size,
          },
          styles.text,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginStart: 5,
    fontFamily: "Quicksand-SemiBold",
  },
});

export default ProductRatingText;
