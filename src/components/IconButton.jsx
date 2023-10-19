import React from "react";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import Icon from "../ui/Icon";
import { TouchableOpacity } from "react-native";
import { appColors, appSizes } from "../themes";
const IconButton = ({
  icon,
  size = appSizes.IconButton.regular,
  color = appColors.darkText,
  onPress = () => {},
}) => {
  return (
    <BlurView
      style={[
        styles.wrapper,
        {
          width: size,
          height: size,
          borderRadius: parseInt(size / 2),
          borderColor: color,
        },
      ]}
    >
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        {Icon.Icons(icon, { size: size * 0.6, color: color })}
      </TouchableOpacity>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
export default IconButton;
