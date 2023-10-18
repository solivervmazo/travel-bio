import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { appColor, appStyles } from "../../themes";
import Icon from "../../ui/Icon";

const ProductLocationText = ({
  size = 12,
  iconSize,
  textSize,
  color = appColor.lightText,
  textColor,
  iconColor,
  iconFill = false,
  text,
  shadowed = false,
  shadows = appStyles.textShadow,
  containerStyle = {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Icon.Location
        fill={iconFill}
        size={iconSize || size}
        color={iconColor || color}
        style={shadowed ? shadows || {} : {}}
      />
      <Text
        style={[
          shadowed ? shadows || {} : {},
          styles.text,
          {
            color: textColor || color,

            fontSize: textSize || size,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "Quicksand-Regular",
  },
});

export default ProductLocationText;
